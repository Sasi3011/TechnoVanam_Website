# 🌲 Techno Vanam | Premium Digital Studio

Techno Vanam is a premium digital studio crafting world-class UI/UX, web development, and branding solutions. This project is a production-ready Web Application built with React, Vite, and Firebase.

## 🚀 Quick Start

1. **Install Dependencies**: `npm install`
2. **Local Development**: `npm run dev`
3. **Build for Production**: `npm run build`
4. **Deploy to Firebase**: `firebase deploy`

## 🏗️ Architecture

- **Frontend**: React 19 + Vite + Framer Motion + Tailwind CSS 4.
- **Backend**: Firebase Cloud Functions (Node.js).
- **Database**: Firestore with strict schema validation.
- **Hosting**: Firebase Hosting with global CDN and PWA (Offline) support.
- **Security**: RBAC via Firestore Rules, Cloudflare Turnstile, and Secure CSP Headers.

## 🛠️ Key Features

- **Automated Backups**: Daily and Weekly Firestore exports to Cloud Storage.
- **Migration System**: Admin-controlled database schema migrations.
- **Monitoring**: Built-in Error Boundaries, Firebase Performance, and Analytics.
- **PWA Ready**: Works offline and is installable on mobile/desktop.
- **CI/CD**: Automatic deployments with PR previews via GitHub Actions.

## 📁 Environment Configuration

Use the provided `.env` files for configuration:
- `.env.development`: Local development keys.
- `.env.production`: Keys for the live production site.

## 🛡️ DevOps & Rollback

- **Zero-Downtime**: Every deployment is atomic via Firebase.
- **Rollback**: One-click rollback available in the Firebase Console -> Hosting -> Release History.

---

© 2026 Techno Vanam. All rights reserved.
