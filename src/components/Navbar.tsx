"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoSVG from './Logo';
import { getRoute } from "@/lib/routes";

// Función auxiliar para resolver correspondencias de rutas bilingües y conservar parámetros/hashes
export function resolveLocalizedUrl(targetLocale: string, currentPath: string): string {
  let url = currentPath || '/';

  let hash = '';
  const hashIdx = url.indexOf('#');
  if (hashIdx !== -1) {
    hash = url.slice(hashIdx);
    url = url.slice(0, hashIdx);
  }

  let search = '';
  const searchIdx = url.indexOf('?');
  if (searchIdx !== -1) {
    search = url.slice(searchIdx);
    url = url.slice(0, searchIdx);
  }

  let localizedBase = '';

  // Correspondencias bidireccionales autorizadas:
  // Par 1: /es/services/constitucional <-> /en/services/constitutional
  // Par 2: /es/seleccion-de-casos <-> /en/case-selection
  if (targetLocale === 'en') {
    if (url === '/es/services/constitucional' || url.startsWith('/es/services/constitucional/')) {
      localizedBase = '/en/services/constitutional' + url.slice('/es/services/constitucional'.length);
    } else if (url === '/es/seleccion-de-casos' || url.startsWith('/es/seleccion-de-casos/')) {
      localizedBase = '/en/case-selection' + url.slice('/es/seleccion-de-casos'.length);
    }
  } else if (targetLocale === 'es') {
    if (url === '/en/services/constitutional' || url.startsWith('/en/services/constitutional/')) {
      localizedBase = '/es/services/constitucional' + url.slice('/en/services/constitutional'.length);
    } else if (url === '/en/case-selection' || url.startsWith('/en/case-selection/')) {
      localizedBase = '/es/seleccion-de-casos' + url.slice('/en/case-selection'.length);
    }
  }

  // Comportamiento habitual para rutas con slugs idénticos o no mapeadas
  if (!localizedBase) {
    const segments = url.split('/');
    if (segments[1] === 'es' || segments[1] === 'en') {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    localizedBase = segments.join('/') || '/';
  }

  return localizedBase + search + hash;
}

export default function Navbar({ dict, locale }: { dict: any, locale: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [extraUrlPath, setExtraUrlPath] = useState('');

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Capturar query parameters y hash del cliente de forma reactiva
  useEffect(() => {
    const updateExtra = () => {
      if (typeof window !== 'undefined') {
        const search = window.location.search || '';
        const hash = window.location.hash || '';
        setExtraUrlPath(search + hash);
      }
    };
    updateExtra();
    window.addEventListener('popstate', updateExtra);
    window.addEventListener('hashchange', updateExtra);
    return () => {
      window.removeEventListener('popstate', updateExtra);
      window.removeEventListener('hashchange', updateExtra);
    };
  }, [pathname]);

  // Bloquear scroll cuando el menú está abierto sin provocar layout shift
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('nav-open');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('nav-open');
    }
    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('nav-open');
    };
  }, [isMobileMenuOpen]);

  // Generamos las URLs correctas reconociendo slugs bilingües y conservando query/hash
  const getLocalizedUrl = (targetLocale: string, customPath?: string) => {
    const fullPath = customPath || (pathname ? pathname + extraUrlPath : '/');
    return resolveLocalizedUrl(targetLocale, fullPath);
  };

  return (
    <nav>
      <div className="container">
        <Link href="/" className="logo no-underline">
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
