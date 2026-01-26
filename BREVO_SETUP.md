# Brevo Email Setup Guide

This guide explains how to set up Brevo (formerly Sendinblue) for transactional emails in your Techno Vanam project.

## Overview

- **Service**: Brevo (Transactional Email API)
- **Purpose**: Send automated emails for contact form submissions
- **Emails Sent**:
  1. Admin notification to `official@technovanam.in`
  2. Auto-reply to the user who submitted the form

## Step 1: Create Brevo Account

1. Go to [https://www.brevo.com](https://www.brevo.com)
2. Sign up for a free account (300 emails/day free)
3. Verify your email address

## Step 2: Get API Key

1. Log in to your Brevo dashboard
2. Go to **Settings** → **SMTP & API** → **API Keys**
3. Click **Generate a new API key**
4. Name it: `Techno Vanam Production`
5. Copy the API key (you'll only see it once!)

## Step 3: Verify Sender Domain (Recommended)

1. Go to **Senders & IP** → **Domains**
2. Add your domain: `technovanam.in`
3. Add the DNS records provided by Brevo to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

**Note**: You can also use a verified sender email without domain verification, but domain verification improves deliverability.

## Step 4: Set Environment Variables

### For Vercel (Production)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following:

```
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### For Local Development

Add to your `.env` file:

```env
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Step 5: Update Code

The code has already been updated to use Brevo. The following files use Brevo:

- `api/contact.js` - Contact form handler
- `api/lib/brevo.js` - Brevo email service utility

## Email Templates

### Auto-Reply Template Variables

The auto-reply email uses the following variables:

- `{{name}}` - User's name from the contact form
- `{{email}}` - User's email address
- `{{message}}` - User's message
- `{{company}}` - User's company (optional)
- `{{website}}` - User's website (optional)
- `{{services}}` - Selected services (optional)
- `{{projectType}}` - Project type (optional)
- `{{deadline}}` - Project deadline (optional)

### Template Features

- ✅ Professional, modern design
- ✅ Responsive (works on mobile)
- ✅ Branded with Techno Vanam colors (#71d300)
- ✅ Includes logo placeholder
- ✅ CTA button: "Visit Our Website"
- ✅ Professional email signature
- ✅ Email client compatible (tested on Gmail, Outlook, Apple Mail)

## Testing

### Test Contact Form

1. Submit a test contact form on your website
2. Check your inbox at `official@technovanam.in` for the admin notification
3. Check the test email address for the auto-reply

### Check Brevo Dashboard

1. Go to **Statistics** → **Email Activity**
2. You should see sent emails with status (delivered, opened, clicked)

## Email Limits

- **Free Plan**: 300 emails/day
- **Starter Plan**: 20,000 emails/month ($25/month)
- **Business Plan**: 100,000 emails/month ($65/month)

## Troubleshooting

### Emails Not Sending

1. **Check API Key**: Verify `BREVO_API_KEY` is set correctly
2. **Check Brevo Dashboard**: Look for error messages in **Email Activity**
3. **Check Logs**: Review server logs for error messages
4. **Verify Sender**: Make sure sender email is verified in Brevo

### Common Errors

- **401 Unauthorized**: Invalid API key
- **400 Bad Request**: Invalid email format or missing required fields
- **429 Too Many Requests**: Exceeded daily/monthly email limit

## Email Content

### Admin Notification Subject
```
New Inquiry: [Name] - [Project Type]
```

### Auto-Reply Subject
```
We've received your inquiry! ✨ Techno Vanam
```

### Auto-Reply Content Includes:
- Personalized greeting with user's name
- Thank you message
- Confirmation of receipt
- "What's Next?" section
- CTA button to visit website
- Professional signature

## HTML Email Template

The auto-reply template is located in `api/lib/brevo.js` in the `getAutoReplyTemplate()` function.

### Template Structure:
1. **Header**: Logo and branding
2. **Greeting**: Personalized with user's name
3. **Thank You Message**: Professional acknowledgment
4. **What's Next Section**: Green highlighted box with next steps
5. **CTA Button**: "Visit Our Website" button
6. **Footer**: Company info and signature

### Customization

To customize the email template, edit the `getAutoReplyTemplate()` function in `api/lib/brevo.js`.

## Support

- **Brevo Documentation**: [https://developers.brevo.com](https://developers.brevo.com)
- **Brevo Support**: [https://help.brevo.com](https://help.brevo.com)

## Next Steps

1. ✅ Set up Brevo account
2. ✅ Get API key
3. ✅ Add API key to environment variables
4. ✅ Test contact form
5. ✅ Monitor email delivery in Brevo dashboard

---

**Note**: GoDaddy email (`official@technovanam.in`) is still used for receiving emails. Brevo is only used for sending transactional emails.

