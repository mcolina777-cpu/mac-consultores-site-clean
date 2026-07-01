"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer({ dict, locale }: { dict: any, locale: string }) {
  const [localTime, setLocalTime] = useState('--:--');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Caracas',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('es-VE', options).format(now));
    };
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col footer-info">
            <div className="footer-logo">MAC CONSULTORES JURÍDICOS &amp; ASOCIADOS</div>
            <p className="footer-desc">
              {dict?.desc || 'Soluciones legales de alta complejidad con enfoque en la estrategia, la prevención y la protección integral de los intereses de nuestros clientes.'}
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">{dict?.navtitle || 'Navegación'}</h4>
            <ul className="footer-links">
              <li><Link href={`/${locale}`}>{dict?.nav?.inicio || 'Inicio'}</Link></li>
              <li><Link href={`/${locale}/quienes-somos`}>{dict?.nav?.quienessomos || 'Quiénes Somos'}</Link></li>
              <li><Link href={`/${locale}/nuestro-ceo`}>{dict?.nav?.nuestroceo || 'Nuestro CEO'}</Link></li>
              <li><Link href={`/${locale}/blog`}>{dict?.nav?.blog || 'Blog Jurídico'}</Link></li>
              <li><Link href={`/${locale}/noticias`}>{dict?.nav?.noticias || 'Noticias'}</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">{dict?.servicestitle || 'Servicios'}</h4>
            <ul className="footer-links">
              <li><Link href={`/${locale}/servicios`}>{dict?.penal || 'Derecho Penal'}</Link></li>
              <li><Link href={`/${locale}/servicios`}>{dict?.constitucional || 'Defensa Constitucional'}</Link></li>
              <li><Link href={`/${locale}/tramites-consulares`}>{dict?.consular || 'Gestión Consular'}</Link></li>
              <li><Link href={`/${locale}/colaboracion-internacional`}>{dict?.colaboracion || 'Colaboración Int.'}</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-title">{dict?.officestitle || 'Oficinas'}</h4>
            <ul className="footer-links">
              <li>{dict?.location || 'Caracas, Venezuela'}</li>
              <li><a href="mailto:infomacconsul@gmail.com">infomacconsul@gmail.com</a></li>
              <li>
                <Link href={`/${locale}/contacto`} className="footer-cta">
                  {dict?.cta?.btn || 'AGENDAR CITA →'}
                </Link>
              </li>
            </ul>
            <img
              src="/assets/mac/mac-icon-192.png"
              alt="Sello Mac Consultores"
              className="footer-seal-img"
              loading="lazy"
            />
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} {dict?.copyright || 'Mac Consultores Jurídicos & Asociados. Todos los derechos reservados.'}
            </p>
            <p className="footer-location">
              <span>{dict?.location || 'Caracas, Venezuela'}</span>
              &middot;
              <span>{dict?.localtime || 'Hora local'}</span>:
              <span id="local-clock" suppressHydrationWarning>{localTime}</span>
            </p>
          </div>
          <div className="footer-legal">
            <Link href={`/${locale}/aviso-legal`}>{dict?.legalnotice || 'Aviso Legal'}</Link>
            <Link href={`/${locale}/privacidad`}>{dict?.privacy || 'Privacidad'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
