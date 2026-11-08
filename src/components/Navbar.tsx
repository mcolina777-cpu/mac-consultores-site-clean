"use client";

import React, { useState, useEffect, useRef } from 'react';
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
    ['/es/services/sector-petrolero', '/en/services/oil-sector'],
    ['/es/services/consular/representacion-judicial', '/en/services/consular/judicial-representation'],
    ['/es/services/consular/poderes-y-mandatos', '/en/services/consular/strategic-powers'],
    ['/es/services/consular/opiniones-juridicas', '/en/services/consular/legal-opinions'],
    ['/es/services/consular/casacion-tutela-constitucional', '/en/services/consular/criminal-cassation-constitutional-protection'],
    ['/es/services/consular/extradicion-coordinacion-internacional', '/en/services/consular/extradition-international-coordination'],
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

export default function Navbar({ dict, locale }: { dict: Record<string, string>, locale: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [extraUrlPath, setExtraUrlPath] = useState('');

  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Sincronizar cierre del menú si la ruta cambió (ej. navegación Atrás/Adelante) sin causar efecto en cascada
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }

  // Cerrar el menú cuando deje de estar activo el diseño móvil
  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1024px)');

    const syncMenuWithViewport = () => {
      if (!mobileQuery.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    syncMenuWithViewport();
    mobileQuery.addEventListener('change', syncMenuWithViewport);

    return () => {
      mobileQuery.removeEventListener('change', syncMenuWithViewport);
    };
  }, []);

  // Cerrar menú con la tecla Escape cuando el menú móvil está abierto y retornar foco al botón activador
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      const focusWasInsideMenu =
        menuRef.current?.contains(document.activeElement) ?? false;

      setIsMobileMenuOpen(false);

      const button = menuButtonRef.current;
      const mobileLayout = window.matchMedia('(max-width: 1024px)').matches;

      if (
        focusWasInsideMenu &&
        mobileLayout &&
        button &&
        button.getClientRects().length > 0
      ) {
        button.focus({ preventScroll: true });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

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
    if (!isMobileMenuOpen) return;

    const body = document.body;
    const previousPaddingRight = body.style.getPropertyValue('padding-right');
    const previousPaddingPriority =
      body.style.getPropertyPriority('padding-right');
    const alreadyHadNavOpen = body.classList.contains('nav-open');

    const scrollbarWidth = Math.max(
      0,
      window.innerWidth - document.documentElement.clientWidth
    );

    const computedPaddingRight =
      Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;

    if (scrollbarWidth > 0) {
      body.style.setProperty(
        'padding-right',
        `${computedPaddingRight + scrollbarWidth}px`
      );
    }

    body.classList.add('nav-open');

    return () => {
      if (scrollbarWidth > 0) {
        if (previousPaddingRight) {
          body.style.setProperty(
            'padding-right',
            previousPaddingRight,
            previousPaddingPriority
          );
        } else {
          body.style.removeProperty('padding-right');
        }
      }

      if (!alreadyHadNavOpen) {
        body.classList.remove('nav-open');
      }
    };
  }, [isMobileMenuOpen]);

  // Medir la posición real de la cabecera mientras el menú esté abierto
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const nav = navRef.current;
    if (!nav) return;

    const updateMenuTop = () => {
      const navBottom = Math.max(0, nav.getBoundingClientRect().bottom);

      nav.style.setProperty('--mobile-menu-top', `${navBottom}px`);
    };

    updateMenuTop();

    const observer = new ResizeObserver(updateMenuTop);
    observer.observe(nav);

    window.addEventListener('resize', updateMenuTop);
    window.addEventListener('scroll', updateMenuTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateMenuTop);
      window.removeEventListener('scroll', updateMenuTop);
      nav.style.removeProperty('--mobile-menu-top');
    };
  }, [isMobileMenuOpen]);

  // Generamos las URLs correctas reconociendo slugs bilingües y conservando query/hash
  const getLocalizedUrl = (targetLocale: string, customPath?: string) => {
    const fullPath = customPath || (pathname ? pathname + extraUrlPath : '/');
    return resolveLocalizedUrl(targetLocale, fullPath);
  };

  return (
    <nav ref={navRef}>
      <div className="container">
        <Link href={getRoute(locale, "home")} className="logo no-underline" onClick={closeMenu}>
          <LogoSVG />
        </Link>
        
        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-text-btn"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={
            isMobileMenuOpen
              ? (locale === 'en'
                  ? 'Close navigation menu'
                  : 'Cerrar menú de navegación')
              : (locale === 'en'
                  ? 'Open navigation menu'
                  : 'Abrir menú de navegación')
          }
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen
            ? (locale === 'en' ? 'CLOSE' : 'CERRAR')
            : (locale === 'en' ? 'MENU' : 'MENÚ')}
        </button>

        <ul
          ref={menuRef}
          id="mobile-menu"
          className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
        >
          <li><Link href={getRoute(locale, "home")} onClick={closeMenu}>{dict?.inicio}</Link></li>
          <li><Link href={getRoute(locale, "about")} onClick={closeMenu}>{dict?.firma}</Link></li>
          <li><Link href={getRoute(locale, "services")} onClick={closeMenu}>{dict?.servicios}</Link></li>
          <li><Link href={getRoute(locale, "services.consular")} onClick={closeMenu}>{dict?.internacional}</Link></li>
          <li><Link href={getRoute(locale, "services.international_cooperation")} onClick={closeMenu}>{dict?.alianzas}</Link></li>
          <li><Link href={getRoute(locale, "contact")} onClick={closeMenu}>{dict?.contacto}</Link></li>
          
          <li className="lang-selector flex-center-y">
            <Link 
              href={getLocalizedUrl('es')}
              className={`lang-btn ${locale === 'es' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              ES
            </Link>
            <span className="lang-separator">/</span>
            <Link 
              href={getLocalizedUrl('en')}
              className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              EN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
