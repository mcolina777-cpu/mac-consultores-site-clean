import React from 'react';

interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}

export default function LogoSVG({ className = '', isDarkTheme = false }: LogoProps) {
  const textColor = isDarkTheme ? '#FFFFFF' : '#002644';
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 120" 
      className={className}
      width="100%" 
      height="auto"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D76E" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A67C00" />
        </linearGradient>
      </defs>
      
      {/* MAC - Sigla Principal */}
      <text 
        x="200" 
        y="65" 
        fontFamily="'Cormorant Garamond', Georgia, serif" 
        fontSize="72" 
        fontWeight="700" 
        fill="url(#goldGradient)"
        textAnchor="middle"
        letterSpacing="6"
      >
        MAC
      </text>

      {/* Descriptor Secundario */}
      <text 
        x="200" 
        y="100" 
        fontFamily="'Inter', -apple-system, sans-serif" 
        fontSize="12" 
        fontWeight="600" 
        fill={textColor}
        textAnchor="middle"
        letterSpacing="4.5"
      >
        CONSULTORES JURÍDICOS &amp; ASOCIADOS
      </text>
    </svg>
  );
}
