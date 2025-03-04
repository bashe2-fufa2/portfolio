'use client';

import { useEffect, useState } from 'react';

export default function Logo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-12 h-12">
      {/* Animated Logo */}
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-spin-slow"
        />
        
        {/* B and F letters */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dy=".3em"
          className="text-3xl font-bold fill-current text-blue-400"
          style={{ fontFamily: 'var(--font-geist-sans)' }}
        >
          BF
        </text>

        {/* Inner circle */}
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          className="animate-reverse-spin"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" /> {/* blue-400 */}
            <stop offset="100%" stopColor="#A78BFA" /> {/* purple-400 */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 