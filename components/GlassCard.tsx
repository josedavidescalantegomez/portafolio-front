'use client';

import { ReactNode, useState } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: '3d' | 'lift' | 'spotlight' | 'flip';
  onClick?: () => void;
}

export default function GlassCard({ 
  children, 
  className = '',
  hoverEffect = 'lift',
  onClick
}: GlassCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const effectClasses = {
    '3d': 'card-3d',
    'lift': 'hover-lift',
    'spotlight': 'spotlight',
    'flip': 'card-flip group',
  };

  const baseClasses = `glassmorphism rounded-2xl p-6 border border-[rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer ${effectClasses[hoverEffect]}`;

  if (hoverEffect === 'spotlight') {
    return (
      <div 
        className={`${baseClasses} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        style={{
          '--mouse-x': `${mousePos.x}%`,
          '--mouse-y': `${mousePos.y}%`,
        } as React.CSSProperties}
      >
        {children}
      </div>
    );
  }

  if (hoverEffect === 'flip') {
    return (
      <div className={`${baseClasses} perspective-1000 ${className}`} onClick={onClick}>
        <div className="relative w-full h-full transition-transform duration-600 transform-style-3d group-hover:rotate-y-180">
          <div className="card-front">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}