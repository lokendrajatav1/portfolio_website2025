# 🚀 Quick Setup Checklist - Google Sheets + Auto Emails

## ✅ What's Already Done
- [x] Contact form updated with Google Sheets integration
- [x] Loading states and success/error messages added
- [x] Environment variables configured
- [x] Complete setup guide created

## 📋 Your Setup Steps (15 minutes)

### Step 1: Create Google Sheet (3 min)
- [ ] Go to [Google Sheets](https://sheets.google.com)
- [ ] Create new spreadsheet named "Portfolio Contact Forms"
- [ ] Add headers in row 1:
  ```
  A: Timestamp | B: Name | C: Email | D: Company | E: Budget | F: Timeline | G: Message
  ```

### Step 2: Setup Apps Script (5 min)
- [ ] In Google Sheet: **Extensions** > **Apps Script**
- [ ] Open file: `GOOGLE_SHEETS_EMAIL_SETUP.md`
- [ ] Copy the complete Apps Script code
- [ ] Paste into Apps Script editor
- [ ] **IMPORTANT**: Update these two lines:
  ```javascript
  const ADMIN_EMAIL = "lokendrajatav1503@gmail.com";
  const ADMIN_NAME = "Lokendra Jatav";
  ```
- [ ] Save the script (Ctrl+S)

### Step 3: Deploy Web App (5 min)
- [ ] Click **Deploy** > **New deployment**
- [ ] Select type: **Web app**
- [ ] Configure:
  - Execute as: **Me**
  - Who has access: **Anyone**
- [ ] Click **Deploy**
- [ ] **Authorize** the app (click through warnings)
- [ ] **Copy the Web App URL** (save it somewhere!)

### Step 4: Configure Environment (2 min)
- [ ] Open `.env.local` file in your project
- [ ] Paste your Web App URL:
  ```env
  NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_ID/exec
  ```
- [ ] Save the file

### Step 5: Test (5 min)
- [ ] Run: `pnpm run dev`
- [ ] Open website: http://localhost:3000
- [ ] Go to contact section
- [ ] Fill form with your email
- [ ] Submit and verify:
  - [ ] Success message appears
  - [ ] Data in Google Sheet
  - [ ] You receive confirmation email
  - [ ] Admin receives notification email

## 🎉 Success Indicators

### Website
✅ Form shows "Sending..." when submitting  
✅ Success message appears after submission  
✅ Form clears after successful submission  

### Google Sheet
✅ New row appears with all form data  
✅ Timestamp is recorded automatically  

### Emails
✅ **Client receives**: Professional auto-reply with submission summary  
✅ **Admin receives**: Notification with all details and quick actions  

## 📧 Email Features

### Client Auto-Reply Includes:
- Personalized greeting with their name
- Complete summary of their submission
- What happens next (24h response, call, proposal)
- Tips while waiting
- Your contact information

### Admin Notification Includes:
- Instant alert with all submission details
- Highlighted urgent items (ASAP timeline)
- Quick action buttons (Reply, View Sheet)
- Formatted HTML for easy reading
- Response reminder

## ⚠️ Common Issues & Solutions

### "Google Sheets URL not configured"
→ Add the URL to `.env.local` and restart dev server

### Emails not sending
→ Check Apps Script **Executions** tab for errors  
→ Verify ADMIN_EMAIL is correct  
→ Check spam/junk folder  

### Authorization errors
→ Make sure "Who has access" is set to **Anyone**  
→ Redeploy if needed  

### Data not appearing in sheet
→ Verify column headers match exactly  
→ Check Apps Script execution logs  

## 📚 Documentation Files

- `GOOGLE_SHEETS_EMAIL_SETUP.md` - Complete detailed guide
- `.env.local.example` - Environment variable template
- This file - Quick checklist

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` (never commit it)
- ✅ Web App URL is safe for client-side use
- ✅ Google handles authentication
- ℹ️ Email quota: 100 emails/day (free account)

## 🎨 Customization Options

Want to customize the emails? See the guide for:
- Changing colors and styling
- Adding your logo
- Including attachments (portfolio PDF)
- Modifying email templates
- Adding more form fields

## 📊 Email Quota Management

Each form submission = 2 emails:
1. Auto-reply to client
2. Notification to admin

With free Google account: 50 submissions per day  
With Google Workspace: 750 submissions per day

## 🚀 Next Steps After Setup

1. [ ] Test thoroughly with different form inputs
2. [ ] Check both email templates
3. [ ] Customize email styling if desired
4. [ ] Set up monitoring for form submissions
5. [ ] Consider adding spam protection
6. [ ] Deploy to production

## Need Help?

1. Check `GOOGLE_SHEETS_EMAIL_SETUP.md` for detailed troubleshooting
2. Review Apps Script execution logs
3. Check browser console for errors
4. Verify all steps in this checklist

---

**Estimated Setup Time**: 15-20 minutes  
**Difficulty**: Easy (copy-paste and configure)  
**Requirements**: Google account, no coding needed for setup
