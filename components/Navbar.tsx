"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoSVG from './Logo';

export default function Navbar({ dict, locale }: { dict: any, locale: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Generamos las URLs correctas quitando el prefijo de locale actual
  const getLocalizedUrl = (targetLocale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    if (segments[1] === 'es' || segments[1] === 'en') {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    return segments.join('/') || '/';
  };

  return (
    <nav>
      <div className="container">
        <Link href={`/${locale}`} className="logo" style={{ textDecoration: 'none' }}>
          <LogoSVG key={pathname} />
        </Link>
        
        <button 
          className="mobile-menu-text-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'CERRAR' : 'MENÚ'}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link href={`/${locale}`}>{dict?.inicio || 'Inicio'}</Link></li>
          <li><Link href={`/${locale}/quienes-somos`}>{dict?.firma || 'Firma'}</Link></li>
          <li><Link href={`/${locale}/servicios`}>{dict?.servicios || 'Servicios'}</Link></li>
          <li><Link href={`/${locale}/tramites-consulares`}>{dict?.internacional || 'Internacional'}</Link></li>
          <li><Link href={`/${locale}/colaboracion-internacional`}>{dict?.alianzas || 'Alianzas'}</Link></li>
          <li><Link href={`/${locale}/contacto`}>{dict?.contacto || 'Contacto'}</Link></li>
          
          <li className="lang-selector" style={{ display: 'flex', alignItems: 'center' }}>
            <Link 
              href={getLocalizedUrl('es')}
              className={`lang-btn ${locale === 'es' ? 'active' : ''}`}
            >
              ES
            </Link>
            <span className="lang-separator">/</span>
            <Link 
              href={getLocalizedUrl('en')}
              className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
            >
              EN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
