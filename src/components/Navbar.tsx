"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoSVG from './Logo';
import { getRoute } from "@/lib/routes";

export default function Navbar({ dict, locale }: { dict: any, locale: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isMobileMenuOpen]);

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
        <Link href={`/${locale}`} className="logo no-underline">
          <LogoSVG />
        </Link>
        
        <button 
          className="mobile-menu-text-btn" 
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'CERRAR' : 'MENÚ'}
        </button>

        <ul id="mobile-menu" className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link href={getRoute(locale, "home")}>{dict?.inicio}</Link></li>
          <li><Link href={getRoute(locale, "about")}>{dict?.firma}</Link></li>
          <li><Link href={getRoute(locale, "services")}>{dict?.servicios}</Link></li>
          <li><Link href={getRoute(locale, "services.consular")}>{dict?.internacional}</Link></li>
          <li><Link href={getRoute(locale, "services.international_cooperation")}>{dict?.alianzas}</Link></li>
          <li><Link href={getRoute(locale, "contact")}>{dict?.contacto}</Link></li>
          
          <li className="lang-selector flex-center-y">
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
