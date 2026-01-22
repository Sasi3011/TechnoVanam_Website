# Internal Newsletter & Inquiry Mailing System

## Overview
The website now uses its own private mailing system powered by **Vercel Serverless Functions** and **Nodemailer**, completely replacing third-party services like FormSubmit and Firebase Cloud Functions.

## Workflow
1.  **Frontend**: User submits a form (Newsletter, Contact, or Job Application).
2.  **Database**: Data is saved to **Firestore** (client-side).
3.  **Backend API**: The frontend immediately calls a local Vercel API endpoint (e.g., `/api/contact`).
4.  **Premium Emails**: The API function sends custom-designed HTML emails using **Nodemailer**:
    *   **To Company**: Real-time notification with all submission details.
    *   **To User**: A branded acknowledgment/welcome email.

## API Endpoints (Vercel)
- `/api/newsletter`: Handles newsletter signups.
- `/api/contact`: Handles project inquiries.
- `/api/apply`: Handles job applications.

## Technical Details
- **Email Library**: `nodemailer`
- **Infrastructure**: Vercel Serverless Functions
- **Email Server**: Configured to use SMTP (currently `smtp.gmail.com`).

## Configuration
The SMTP credentials are located within each file in the `api/` directory.

> **Important**: Ensure you are using a valid **App Password** from your Google Account settings for the SMTP authentication to work.

## Benefits
- ✅ **Privacy**: No user data is sent to 3rd party mailing services.
- ✅ **Security**: SMTP credentials are hidden in the backend environment.
- ✅ **Zero Cost**: Runs within Vercel's free tier for serverless functions.
- ✅ **Branding**: Full HTML/CSS control over every email sent.
