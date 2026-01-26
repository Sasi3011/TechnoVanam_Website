# Local Development Setup

## Quick Start

### Option 1: Full Stack Development (Recommended)

Run both frontend and API server together:

```bash
npm install
npm run dev:full
```

This will:
- Start API server on `http://localhost:3000`
- Start Vite dev server on `http://localhost:5173`
- Proxy API requests from frontend to the API server

### Option 2: Separate Terminals

**Terminal 1 - API Server:**
```bash
npm run dev:api
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Option 3: Vercel CLI (Alternative)

If you prefer using Vercel's local development:

```bash
npm install -g vercel
vercel dev
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Firebase Admin SDK
FIREBASE_PROJECT_ID=techno-vanam
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@techno-vanam.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"

# GoDaddy Email SMTP
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=official@technovanam.in
SMTP_PASS=wpge-yott-dpvh-qhim
```

## Testing API Endpoints

Once the API server is running, you can test:

### Newsletter Subscription
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "message":"Test message",
    "services":"UI/UX Design"
  }'
```

### Job Application
```bash
curl -X POST http://localhost:3000/api/apply \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "phone":"1234567890",
    "role":"Developer",
    "resume_link":"https://example.com/resume"
  }'
```

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is already in use, you can change it in `server.js`:
```javascript
const PORT = 3001; // Change to any available port
```

And update `vite.config.js` proxy target:
```javascript
target: 'http://localhost:3001',
```

### Firebase Connection Issues
- Make sure your `.env` file has correct Firebase credentials
- Verify the private key includes `\n` characters for newlines
- Check that Firebase project ID matches your project

### Email Not Sending
- Verify SMTP credentials in `.env`
- Check GoDaddy email settings
- Ensure port 587 is not blocked by firewall

## Development URLs

- Frontend: `http://localhost:5173`
- API Server: `http://localhost:3000`
- API Endpoints:
  - `http://localhost:3000/api/newsletter`
  - `http://localhost:3000/api/contact`
  - `http://localhost:3000/api/apply`

