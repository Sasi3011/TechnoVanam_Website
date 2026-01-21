// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import { registerSW } from 'virtual:pwa-register'

// Register service worker
registerSW({ immediate: true })


// --- Monitoring & Analytics ---
// Sentry.init({ dsn: import.meta.env.VITE_SENTRY_DSN });
// LogRocket.init(import.meta.env.VITE_LOGROCKET_APP_ID);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
