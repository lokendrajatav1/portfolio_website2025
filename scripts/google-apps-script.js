/**
 * Google Apps Script Web App
 * Receives POST requests, saves data to Google Sheet,
 * sends confirmation email to user and notification to owner.
 */

/* ===================== CONFIG ===================== */
const OWNER_EMAIL = 'lokendrajatav1503@gmail.com';
const SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE'; // 👈 REQUIRED: replace with your sheet ID
const SHEET_NAME = 'Sheet1';
// Optional: set a shared secret and include it in the payload as `secret` or form field `secret`
const WEBHOOK_SECRET = '';

/* ===================== POST HANDLER ===================== */
function doPost(e) {
  try {
    if (!SPREADSHEET_ID || SPREADSHEET_ID.indexOf('PASTE_YOUR_SPREADSHEET_ID_HERE') === 0) {
      return jsonResponse({ status: 'error', message: 'SPREADSHEET_ID not configured in script.' });
    }

    // Accept either JSON (application/json) or form-encoded POSTs
    let payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        // Fallback: if body isn't JSON, try to use e.parameter which holds form fields
        payload = e.parameter || {};
      }
    } else {
      payload = e.parameter || {};
    }

    // Optional secret check
    if (WEBHOOK_SECRET) {
      const incomingSecret = payload.secret || '';
      if (incomingSecret !== WEBHOOK_SECRET) {
        return jsonResponse({ status: 'error', message: 'Invalid secret' });
      }
    }

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      return jsonResponse({ status: 'error', message: 'Name, Email and Message are required' });
    }

    // Open spreadsheet safely
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Auto-create sheet if missing
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Company',
        'Budget',
        'Timeline',
        'Message',
        'Status',
        'Reply'
      ]);
    }

    // Save data
    sheet.appendRow([
      new Date(),
      payload.name,
      payload.email,
      payload.company || '',
      payload.budget || '',
      payload.timeline || '',
      payload.message,
      'Received',
      ''
    ]);

    /* ========== EMAIL TO USER ========== */
    MailApp.sendEmail(
      payload.email,
      'Thanks — we received your message',
      `Hi ${payload.name},

Thank you for reaching out.  
We’ve received your message and will get back to you within 24 hours.

— Lokendra Jatav
www.lokendrajatav.in`
    );

    /* ========== EMAIL TO OWNER ========== */
    MailApp.sendEmail(
      OWNER_EMAIL,
      `New Contact Form Submission — ${payload.name}`,
      `New message received:

Name: ${payload.name}
Email: ${payload.email}
Company: ${payload.company || 'N/A'}
Budget: ${payload.budget || 'N/A'}
Timeline: ${payload.timeline || 'N/A'}

Message:
${payload.message}

Time: ${new Date().toString()}`
    );

    // If the request was a browser form POST (e.parameter present), return HTML that posts a message
    const successObj = { status: 'ok', message: 'Form submitted successfully' };
    const isFormPost = e && e.parameter && Object.keys(e.parameter).length > 0 && !(e.postData && e.postData.type && e.postData.type.indexOf('application/json') === 0);
    if (isFormPost) {
      const payloadStr = JSON.stringify(successObj).replace(/</g, '\\u003c');
      return HtmlService.createHtmlOutput(`<script>window.parent.postMessage(${payloadStr}, '*');</script>`);
    }

    return jsonResponse(successObj);

  } catch (error) {
    const errObj = { status: 'error', message: error.message };
    const isFormPostErr = e && e.parameter && Object.keys(e.parameter).length > 0 && !(e.postData && e.postData.type && e.postData.type.indexOf('application/json') === 0);
    if (isFormPostErr) {
      const payloadStr = JSON.stringify(errObj).replace(/</g, '\\u003c');
      return HtmlService.createHtmlOutput(`<script>window.parent.postMessage(${payloadStr}, '*');</script>`);
    }
    return jsonResponse(errObj);
  }
}

/* ===================== GET (TEST) ===================== */
function doGet() {
  return jsonResponse({ status: 'running', message: 'Web App is live' });
}

/* ===================== JSON RESPONSE HELPER ===================== */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
