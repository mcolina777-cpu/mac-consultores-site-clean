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

  // CORRECCIÓN DE RUTAS BILINGÜES:
  // Mapeo bidireccional de los seis servicios consulares
  // cuyos slugs difieren entre español e inglés.
  const routePairs: [string, string][] = [
    ['/es/services/constitucional', '/en/services/constitutional'],
    ['/es/seleccion-de-casos', '/en/case-selection'],
    ['/es/services/consular/practica-consular', '/en/services/consular/consular-practice'],
    ['/es/services/consular/gestion-documental', '/en/services/consular/document-management'],
    ['/es/services/consular/contratos-internacionales', '/en/services/consular/international-contracts'],
    ['/es/services/consular/materia-energetica', '/en/services/consular/energy-law'],
    ['/es/services/consular/representacion-judicial', '/en/services/consular/judicial-representation'],
    ['/es/services/consular/poderes-y-mandatos', '/en/services/consular/strategic-powers'],
  ];

  if (targetLocale === 'en') {
    for (const [esPath, enPath] of routePairs) {
      if (url === esPath || url.startsWith(esPath + '/')) {
        localizedBase = enPath + url.slice(esPath.length);
        break;
      }
    }
  } else if (targetLocale === 'es') {
    for (const [esPath, enPath] of routePairs) {
      if (url === enPath || url.startsWith(enPath + '/')) {
        localizedBase = esPath + url.slice(enPath.length);
        break;
      }
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
        <Link href={getRoute(locale, "home")} className="logo no-underline">
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
