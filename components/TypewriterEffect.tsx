'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

export default function TypewriterEffect({ 
  text, 
  speed = 50, 
  className = '',
  showCursor = true 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span 
          className={`inline-block w-[2px] h-[1.1em] bg-[var(--accent-cyan)] ml-[2px] align-middle ${
            isTyping ? 'animate-pulse' : 'opacity-100'
          }`}
        />
      )}
    </span>
  );
}