'use client';

import { useState, ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary', 
  onClick,
  href,
  className = '' 
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(ripples.filter(r => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  const baseClasses = 'relative overflow-hidden px-8 py-3 rounded-lg font-medium transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-[var(--accent-cyan)] text-[var(--bg-primary)] hover:glow-cyan hover:scale-105',
    secondary: 'glass text-[var(--text-primary)] border border-[rgba(34,211,238,0.3)] hover:bg-[var(--bg-card)] hover:scale-105',
    ghost: 'text-[var(--text-primary)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-card)]',
  };

  const buttonContent = (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${variantClasses[variant]} inline-block ${className}`}
        onClick={handleClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
}