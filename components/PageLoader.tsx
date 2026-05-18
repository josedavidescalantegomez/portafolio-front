'use client';

import { useState, useEffect } from 'react';

interface PageLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function PageLoader({ onComplete, duration = 2000 }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[var(--bg-primary)] flex items-center justify-center">
      <div className="text-center">
        <div className="loader-dots mb-6 mx-auto w-fit">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className="w-64 mb-4">
          <div className="loader-bar mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
        
        <p className="font-mono text-[var(--text-secondary)] text-sm">
          <span className="text-[var(--accent-cyan)]">const</span> loading = 
          <span className="text-[var(--accent-pink)]"> {Math.round(progress)}%</span>
        </p>
      </div>
    </div>
  );
}