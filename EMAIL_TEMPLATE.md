# Email Template Documentation

## Auto-Reply Email Template

This document contains the HTML email template for the contact form auto-reply email.

### Template Variables

The following variables are used in the template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{name}}` | User's name from contact form | "John Doe" |
| `{{email}}` | User's email address | "john@example.com" |
| `{{message}}` | User's message | "I need a website..." |
| `{{company}}` | User's company (optional) | "Acme Corp" |
| `{{website}}` | User's website (optional) | "https://acme.com" |
| `{{services}}` | Selected services (optional) | "UI/UX Design, Web Development" |
| `{{projectType}}` | Project type (optional) | "Website Redesign" |
| `{{deadline}}` | Project deadline (optional) | "Q2 2024" |

### Email Details

**Subject Line:**
```
We've received your inquiry! ✨ Techno Vanam
```

**From:**
```
Techno Vanam <official@technovanam.in>
```

**To:**
```
{{email}} (user who submitted the form)
```

### Template Structure

1. **Header Section**
   - Logo image (placeholder: `https://technovanam.in/Logo.png`)
   - Brand tagline: "Design & Development Studio"
   - Black gradient background with green accent

2. **Greeting**
   - Personalized: "Hello {{name}}! 👋"
   - Large, friendly heading

3. **Thank You Message**
   - Professional acknowledgment
   - Confirmation of receipt
   - Timeline expectation (24 business hours)

4. **What's Next Section**
   - Green highlighted box
   - Bullet points explaining next steps:
     - Reviewing project requirements
     - Hand-picking experts
     - Scheduling discovery call
     - Preparing proposal

5. **Call-to-Action Button**
   - "Visit Our Website" button
   - Green (#71d300) with hover effect
   - Links to https://technovanam.in

6. **Additional Links**
   - Link to services page
   - Link to Instagram

7. **Footer**
   - Company name and tagline
   - Website link
   - Professional signature
   - Copyright notice

### Design Features

- ✅ **Responsive**: Works on desktop, tablet, and mobile
- ✅ **Email Client Compatible**: Tested on Gmail, Outlook, Apple Mail
- ✅ **Brand Colors**: Uses Techno Vanam green (#71d300) and black
- ✅ **Professional**: Clean, modern design
- ✅ **Trust-Building**: Professional tone without being salesy
- ✅ **Accessible**: Proper HTML structure and alt text

### HTML Email Best Practices Used

1. **Table-based Layout**: Ensures compatibility across email clients
2. **Inline Styles**: All styles are inline for maximum compatibility
3. **Web-safe Fonts**: Uses system fonts (-apple-system, BlinkMacSystemFont, etc.)
4. **No External CSS**: All styles are inline
5. **Proper DOCTYPE**: HTML5 DOCTYPE for better rendering
6. **Meta Tags**: Viewport and charset meta tags included
7. **Role Attributes**: `role="presentation"` on layout tables
8. **Alt Text**: Logo has alt text for accessibility

### Customization

To customize the template, edit the `getAutoReplyTemplate()` function in `api/lib/brevo.js`.

### Testing

Test the email template in:
- Gmail (desktop and mobile)
- Outlook (desktop and web)
- Apple Mail
- Yahoo Mail
- Mobile email clients

### Logo

The template uses:
```
https://technovanam.in/Logo.png
```

Make sure this URL is accessible and the image is optimized for email (recommended size: 180px width, PNG format).

### Color Palette

- **Primary Green**: `#71d300`
- **Dark Green**: `#5fb300`
- **Success Green**: `#166534`
- **Background Green**: `#f0fdf4`
- **Black**: `#000000`
- **Dark Gray**: `#1a1a1a`
- **Text Gray**: `#333333`
- **Light Gray**: `#666666`
- **Border Gray**: `#e5e7eb`
- **Background Gray**: `#f5f5f5`
- **Footer Gray**: `#f9fafb`

### Typography

- **Headings**: 28px, 600 weight
- **Body Text**: 16px, normal weight
- **Small Text**: 12-14px
- **Line Height**: 1.6-1.8 for readability

### Spacing

- **Section Padding**: 40-50px
- **Element Margins**: 20-30px
- **Button Padding**: 16px 40px
- **Border Radius**: 8-12px

---

**Note**: This template is designed for transactional emails (not marketing). It focuses on confirmation and next steps rather than sales pitches.

