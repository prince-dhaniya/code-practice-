import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const loadingMessages = [
  'Initializing your workspace...',
  'Loading your DSA progress...',
  'Preparing the code editor...',
  'Almost there...',
];

const LoadingOverlay = ({ isVisible, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    setProgress(0);
    setMessageIndex(0);
    setFadeOut(false);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Slow down near the end for realism
        const increment = prev < 60 ? Math.random() * 8 + 4 : Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    // Cycle through messages
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 900);

    // Complete after ~3 seconds
    const completeTimeout = setTimeout(() => {
      setProgress(100);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      setMessageIndex(loadingMessages.length - 1);

      // Start fade out
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600);
      }, 400);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(completeTimeout);
    };
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-overlay ${fadeOut ? 'fade-out' : ''}`}>
      {/* Animated background particles */}
      <div className="loading-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="loading-content">
        {/* Animated logo */}
        <div className="loading-logo-wrapper">
          <div className="loading-logo-ring" />
          <div className="loading-logo-ring ring-2" />
          <img src={logo} alt="ApexCode" className="loading-logo-img" />
        </div>

        {/* Brand text */}
        <h1 className="loading-brand">
          <span className="brand-apex">Apex</span>
          <span className="brand-code">Code</span>
        </h1>

        {/* Progress bar */}
        <div className="loading-progress-track">
          <div
            className="loading-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status message */}
        <p className="loading-message">{loadingMessages[messageIndex]}</p>

        {/* Progress percentage */}
        <span className="loading-percent">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
