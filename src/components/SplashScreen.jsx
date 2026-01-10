import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => (
  <div className="splash-bg">
    <div className="splash-loader">
      <div className="splash-dot"></div>
      <div className="splash-dot"></div>
      <div className="splash-dot"></div>
      <div className="splash-dot"></div>
    </div>
    <h1 className="splash-title">Techno Vanam</h1>
    <p className="splash-desc">Loading your experience...</p>
  </div>
);

export default SplashScreen; 