# 🚀 QUICK START - 5 Steps to Live Contact Form

## Your form is ready! Just need 5 quick steps:

### 1️⃣ Create Google Sheet (2 min)
- New spreadsheet: "Portfolio Contact Forms"
- Headers: `Timestamp | Name | Email | Company | Budget | Timeline | Message`

### 2️⃣ Add Apps Script (3 min)
- Extensions > Apps Script
- Copy script from `GOOGLE_SHEETS_EMAIL_SETUP.md`
- Update: `ADMIN_EMAIL` and `ADMIN_NAME`
- Save

### 3️⃣ Deploy (2 min)
- Deploy > New deployment > Web app
- Execute as: Me | Access: Anyone
- Copy the URL

### 4️⃣ Configure (1 min)
- Open `.env.local`
- Paste URL: `NEXT_PUBLIC_GOOGLE_SHEETS_URL=your_url_here`

### 5️⃣ Test (2 min)
- `pnpm run dev`
- Submit test form
- Check sheet + emails

## ✅ What You Get:

**For Clients:**
📧 Beautiful auto-reply email with:
- Confirmation of their submission
- What to expect next
- Your contact info

**For You:**
🔔 Instant notification email with:
- All form details
- Quick reply button
- Organized info

**In Google Sheet:**
📊 Automatic data storage:
- All submissions tracked
- Timestamped entries
- Easy to export

## 📚 Full Guides:
- `SETUP_CHECKLIST.md` - Step-by-step with screenshots
- `GOOGLE_SHEETS_EMAIL_SETUP.md` - Complete technical guide
- `README_IMPLEMENTATION.md` - Feature overview

## ⚡ That's it! 10 minutes total.
