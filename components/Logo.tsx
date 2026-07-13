import React from 'react';

interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}

export default function Logo({ className = '', isDarkTheme = false }: LogoProps) {
  const textColor = isDarkTheme ? '#FFFFFF' : '#002644';
  
  return (
    /* NOTA TÉCNICA (Respaldo y Solución):
       - Respaldo: El SVG original está en public/backups/backup-logo-original.svg. 
         (Para restaurar, copia el contenido de ese archivo aquí).
       - Solución aplicada: Para resolver el bug de Safari con <text> y webfonts en SVG, 
         y ante la imposibilidad de convertir la fuente a trazos (paths) en el servidor sin herramientas
         de diseño, se ha migrado a una estructura de HTML puro + CSS usando Container Queries (cqw). 
         Esto escala el texto idénticamente a un SVG, garantiza estabilidad visual en iOS/Safari, 
         soporta next/font sin FOUC y mantiene el aspect-ratio del viewBox original (400/120).
    */
    <div 
      className={`logo-html-wrapper ${className}`} 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%',
        aspectRatio: '400 / 120',
        containerType: 'inline-size',
        overflow: 'hidden'
      }}
    >
      <div style={{
        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
        fontSize: '18cqw', // 72px / 400px viewBox = 18%
        fontWeight: 700,
        letterSpacing: '0.08em', // 6px / 72px = 0.08em
        lineHeight: 1,
        background: 'linear-gradient(105deg, #F5D76E 0%, #D4AF37 50%, #A67C00 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        margin: 0,
        padding: 0,
        transform: 'translateY(4cqw)'
      }}>
        MAC
      </div>
      <div style={{
        fontFamily: "var(--font-inter), 'Inter', -apple-system, sans-serif",
        fontSize: '3cqw', // 12px / 400px viewBox = 3%
        fontWeight: 600,
        letterSpacing: '0.375em', // 4.5px / 12px = 0.375em
        color: textColor,
        textAlign: 'center',
        marginTop: '6cqw',
        margin: 0,
        padding: 0,
        transform: 'translateY(2cqw)'
      }}>
        CONSULTORES JURÍDICOS &amp; ASOCIADOS
      </div>
    </div>
  );
}
