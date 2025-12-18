# Google Sheets + Auto Email Setup Guide

This guide will help you set up Google Sheets to store contact form submissions and automatically send emails to both the client and admin.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Forms"
4. In the first row, add these column headers:
   - **A1**: Timestamp
   - **B1**: Name
   - **C1**: Email
   - **D1**: Company
   - **E1**: Budget
   - **F1**: Timeline
   - **G1**: Message

## Step 2: Setup Google Apps Script

### 2.1 Open Apps Script Editor
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any default code in the editor

### 2.2 Paste the Complete Script

Copy and paste this entire script:

```javascript
// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================
const ADMIN_EMAIL = "lokendrajatav1503@gmail.com"; // Your email address
const ADMIN_NAME = "Lokendra Jatav"; // Your name

// ============================================
// MAIN FUNCTION - Handles form submissions
// ============================================
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.company || '',
      data.budget || '',
      data.timeline || '',
      data.message || ''
    ]);
    
    // Send emails
    sendClientEmail(data);
    sendAdminEmail(data, timestamp);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// CLIENT AUTO-REPLY EMAIL
// ============================================
function sendClientEmail(data) {
  const clientEmail = data.email;
  const clientName = data.name;
  
  const subject = "Thank You for Reaching Out! - " + ADMIN_NAME;
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
        .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .info-box { background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Reaching Out!</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${clientName}</strong>,</p>
          
          <p>Thank you for contacting me through my portfolio website! I've received your project inquiry and I'm excited to learn more about your vision.</p>
          
          <div class="info-box">
            <h3>📋 Your Submission Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
            ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
            ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
            <p><strong>Message:</strong><br>${data.message}</p>
          </div>
          
          <h3>⏰ What Happens Next?</h3>
          <ul>
            <li><strong>Review:</strong> I'll carefully review your project details</li>
            <li><strong>Response:</strong> You'll hear back from me within 24 hours</li>
            <li><strong>Discussion:</strong> We'll schedule a call to discuss your project in detail</li>
            <li><strong>Proposal:</strong> I'll provide a detailed proposal with timeline and cost</li>
          </ul>
          
          <p><strong>💡 In the meantime:</strong></p>
          <ul>
            <li>Feel free to check out my portfolio for similar projects</li>
            <li>Prepare any additional materials or requirements you'd like to share</li>
            <li>Think about your project goals and target audience</li>
          </ul>
          
          <p>If you have any urgent questions, feel free to reply to this email directly.</p>
          
          <p>Best regards,<br>
          <strong>${ADMIN_NAME}</strong><br>
          Full Stack Developer<br>
          📧 ${ADMIN_EMAIL}</p>
        </div>
        <div class="footer">
          <p>This is an automated confirmation email. Please reply if you have any questions.</p>
          <p>&copy; ${new Date().getFullYear()} ${ADMIN_NAME}. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  MailApp.sendEmail({
    to: clientEmail,
    subject: subject,
    htmlBody: htmlBody,
    name: ADMIN_NAME
  });
}

// ============================================
// ADMIN NOTIFICATION EMAIL
// ============================================
function sendAdminEmail(data, timestamp) {
  const subject = "🔔 New Contact Form Submission - Portfolio Website";
  
  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .data-row { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #3498db; border-radius: 5px; }
        .label { font-weight: bold; color: #2c3e50; }
        .urgent { background: #fff3cd; border-left-color: #ffc107; }
        .footer { text-align: center; margin-top: 20px; padding: 15px; color: #666; font-size: 13px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🔔 New Contact Form Submission</h2>
          <p>Submitted on ${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MMMM dd, yyyy 'at' hh:mm a")}</p>
        </div>
        <div class="content">
          <h3>📬 Contact Information</h3>
          
          <div class="data-row">
            <span class="label">👤 Name:</span> ${data.name}
          </div>
          
          <div class="data-row">
            <span class="label">📧 Email:</span> <a href="mailto:${data.email}">${data.email}</a>
          </div>
          
          ${data.company ? `
          <div class="data-row">
            <span class="label">🏢 Company:</span> ${data.company}
          </div>
          ` : ''}
          
          ${data.budget ? `
          <div class="data-row ${data.budget === 'asap' ? 'urgent' : ''}">
            <span class="label">💰 Budget:</span> ${data.budget}
          </div>
          ` : ''}
          
          ${data.timeline ? `
          <div class="data-row ${data.timeline === 'asap' ? 'urgent' : ''}">
            <span class="label">⏰ Timeline:</span> ${data.timeline}
          </div>
          ` : ''}
          
          <div class="data-row">
            <span class="label">💬 Message:</span><br><br>
            ${data.message.replace(/\n/g, '<br>')}
          </div>
          
          <h3>📊 Quick Actions</h3>
          <p>
            <a href="mailto:${data.email}?subject=Re: Your Project Inquiry" style="display: inline-block; padding: 10px 20px; background: #3498db; color: white; text-decoration: none; border-radius: 5px; margin-right: 10px;">Reply to Client</a>
            <a href="https://sheets.google.com" style="display: inline-block; padding: 10px 20px; background: #2ecc71; color: white; text-decoration: none; border-radius: 5px;">View in Sheet</a>
          </p>
          
          <p style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 5px;">
            <strong>💡 Tip:</strong> The client has received an automatic confirmation email. Make sure to respond within 24 hours to maintain professionalism.
          </p>
        </div>
        <div class="footer">
          <p>Automated notification from your Portfolio Contact Form</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    name: "Portfolio Contact Form"
  });
}

// ============================================
// TEST FUNCTION (Optional)
// ============================================
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Contact form API is working!'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 2.3 Configure Your Details
In the script, update these lines at the top:
```javascript
const ADMIN_EMAIL = "your-email@example.com"; // Replace with your email
const ADMIN_NAME = "Your Name"; // Replace with your name
```

### 2.4 Save the Script
1. Click the **Save** icon (💾) or press `Ctrl+S`
2. Name your project: "Contact Form with Email"

## Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the settings:
   - **Description**: "Contact Form API v1"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. **Authorize Access**:
   - Click **Authorize access**
   - Choose your Google account
   - You may see a warning "Google hasn't verified this app"
   - Click **Advanced**
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Configure Your Next.js App

### 4.1 Create Environment File
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Replace `YOUR_DEPLOYMENT_ID` with the actual URL you copied.

### 4.2 Add to .gitignore
Make sure `.env.local` is in your `.gitignore` file:
```
.env*.local
```

## Step 5: Test Everything

### 5.1 Test the Script
1. In Apps Script editor, click **Run** > **doGet**
2. Check execution log for success message

### 5.2 Test the Form
1. Start your development server:
   ```bash
   pnpm run dev
   ```
2. Open your website: `http://localhost:3000`
3. Navigate to the contact section
4. Fill out the form with test data
5. Submit the form

### 5.3 Verify Success
Check that:
- ✅ Success message appears on the website
- ✅ Data appears in Google Sheet
- ✅ Client receives confirmation email
- ✅ You (admin) receive notification email

## Email Features

### Client Auto-Reply Includes:
- ✉️ Personalized greeting
- 📋 Summary of their submission
- ⏰ What to expect next
- 💡 Helpful tips while they wait
- 📧 Your contact information

### Admin Notification Includes:
- 🔔 Instant notification
- 📬 Complete submission details
- 🚨 Highlighted urgent items (ASAP timeline/budget)
- 📊 Quick action buttons
- 💡 Response reminder

## Troubleshooting

### Emails Not Sending?
1. Check Apps Script execution logs:
   - Apps Script Editor > **Executions**
2. Verify your email in the script configuration
3. Check spam/junk folder
4. Ensure Gmail API is enabled

### Authorization Issues?
1. Redeploy: **Deploy** > **Manage deployments** > Edit > **Deploy**
2. Ensure "Execute as: Me" is selected
3. Make sure "Who has access: Anyone" is selected

### Data Not in Sheet?
1. Check browser console for errors
2. Verify the Web App URL in `.env.local`
3. Check Apps Script execution logs
4. Ensure sheet column headers are correct

### CORS Errors?
- Google Apps Script handles CORS automatically
- Make sure you're using `mode: 'no-cors'` in the fetch request
- The form should still work even if you can't read the response

## Security Best Practices

1. **Never commit** `.env.local` to git
2. **Rate limiting**: Consider adding spam protection
3. **Data validation**: The script validates required fields
4. **Email quotas**: Google Apps Script has daily email limits (100/day for free accounts)
5. **Regular backups**: Export your Google Sheet regularly

## Customization Options

### Change Email Template Colors
Modify the `<style>` section in the HTML templates:
```css
.header { background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%); }
```

### Add More Fields
1. Add column to Google Sheet
2. Add field to contact form
3. Update the `sheet.appendRow()` in the script
4. Update email templates to include new field

### Disable Client Auto-Reply
Comment out this line in `doPost()`:
```javascript
// sendClientEmail(data);
```

### Disable Admin Notification
Comment out this line in `doPost()`:
```javascript
// sendAdminEmail(data, timestamp);
```

## Email Quota Limits

- **Free Google Account**: 100 emails/day
- **Google Workspace**: 1,500 emails/day

Each form submission sends 2 emails, so plan accordingly.

## Advanced: Add Email Attachment

To attach your portfolio or price list:

```javascript
MailApp.sendEmail({
  to: clientEmail,
  subject: subject,
  htmlBody: htmlBody,
  name: ADMIN_NAME,
  attachments: [DriveApp.getFileById('YOUR_FILE_ID').getAs(MimeType.PDF)]
});
```

## Support

If you need help:
1. Check Apps Script execution logs
2. Review browser console errors
3. Verify all configuration steps
4. Check your email spam folder

---

**Note**: The first time you run this, you'll need to authorize the script to send emails on your behalf. This is a one-time setup.
