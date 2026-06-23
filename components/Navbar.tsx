"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoSVG from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('es');
  const pathname = usePathname();

  // Cerrar el menú móvil automáticamente al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lógica simple de idioma (simula i18n.js)
  const toggleLang = (newLang: string) => {
    setLang(newLang);
    // TODO: En el futuro integrar con Next.js routing o Context
    document.documentElement.lang = newLang;
  };

  return (
    <nav>
      <div className="container">
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
          {/* Logo tipográfico SVG */}
          <LogoSVG key={pathname} />
        </Link>
        
        {/* Botón de Menú Móvil */}
        <button 
          className="mobile-menu-text-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'CERRAR' : 'MENÚ'}
        </button>

        {/* Enlaces de Navegación */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link href="/" data-i18n="nav.inicio">Inicio</Link></li>
          <li><Link href="/quienes-somos" data-i18n="nav.firma">Firma</Link></li>
          <li><Link href="/servicios" data-i18n="nav.servicios">Servicios</Link></li>
          <li><Link href="/tramites-consulares" data-i18n="nav.internacional">Internacional</Link></li>
          <li><Link href="/colaboracion-internacional" data-i18n="nav.alianzas">Alianzas</Link></li>
          <li><Link href="/contacto" data-i18n="nav.contacto">Contacto</Link></li>
          
          <li className="lang-selector" style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`} 
              onClick={() => toggleLang('es')}
            >
              ES
            </button>
            <span className="lang-separator">/</span>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => toggleLang('en')}
            >
              EN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
