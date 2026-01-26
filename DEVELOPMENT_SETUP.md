# Development Setup Guide

## API Routes in Development

The API routes (`/api/*`) are Vercel serverless functions and won't work in local Vite development. You have two options:

### Option 1: Use Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Run development with Vercel:
```bash
vercel dev
```

This will start both the frontend and API routes locally.

### Option 2: Test API Routes in Production

The API routes will work correctly when deployed to Vercel. For local frontend development:

1. Run Vite dev server:
```bash
npm run dev
```

2. The frontend will work, but API calls will fail locally
3. Deploy to Vercel to test full functionality

### Option 3: Mock API Responses (For Frontend Testing)

You can temporarily mock API responses in development by modifying the fetch calls to return mock data.

