"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
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
          
          {/* Columna 1: Información Institucional */}
          <div className="footer-col footer-info">
            <div className="footer-logo">MAC CONSULTORES JURÍDICOS &amp; ASOCIADOS</div>
            <p className="footer-desc" data-i18n="footer.desc">
              Soluciones legales de alta complejidad con enfoque en la estrategia, la prevención y la protección integral de los intereses de nuestros clientes.
            </p>
          </div>
          
          {/* Columna 2: Navegación */}
          <div className="footer-col">
            <h4 className="footer-title" data-i18n="footer.nav_title">Navegación</h4>
            <ul className="footer-links">
              <li><Link href="/" data-i18n="nav.inicio">Inicio</Link></li>
              <li><Link href="/quienes-somos" data-i18n="nav.quienes_somos">Quiénes Somos</Link></li>
              <li><Link href="/nuestro-ceo" data-i18n="nav.nuestro_ceo">Nuestro CEO</Link></li>
              <li><Link href="/blog" data-i18n="nav.blog">Blog Jurídico</Link></li>
              <li><Link href="/noticias" data-i18n="nav.noticias">Noticias</Link></li>
            </ul>
          </div>
          
          {/* Columna 3: Servicios */}
          <div className="footer-col">
            <h4 className="footer-title" data-i18n="footer.services_title">Servicios</h4>
            <ul className="footer-links">
              <li><Link href="/servicios" data-i18n="footer.penal">Derecho Penal</Link></li>
              <li><Link href="/servicios" data-i18n="footer.constitucional">Defensa Constitucional</Link></li>
              <li><Link href="/tramites-consulares" data-i18n="footer.consular">Gestión Consular</Link></li>
              <li><Link href="/colaboracion-internacional" data-i18n="footer.colaboracion">Colaboración Int.</Link></li>
            </ul>
          </div>
          
          {/* Columna 4: Oficinas y Sello */}
          <div className="footer-col">
            <h4 className="footer-title" data-i18n="footer.offices_title">Oficinas</h4>
            <ul className="footer-links">
              <li data-i18n="footer.location">Torre Financiera, Caracas</li>
              <li><a href="mailto:infomacconsul@gmail.com">infomacconsul@gmail.com</a></li>
              <li><Link href="/contacto" className="footer-cta" data-i18n="footer.cta">AGENDAR CITA &rarr;</Link></li>
            </ul>
            {/* El sello usa img, se asegura que el alt no falle */}
            <img src="/Logo/mac-icon-192.png" alt="Sello Mac Consultores" className="footer-seal-img" loading="lazy" />
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p data-i18n="footer.copyright">&copy; {new Date().getFullYear()} Mac Consultores Jurídicos &amp; Asociados. Todos los derechos reservados.</p>
            <p className="footer-location">
              <span data-i18n="footer.location">Caracas, Venezuela</span> &middot; <span data-i18n="footer.local_time">Hora local</span>: <span id="local-clock" suppressHydrationWarning>{localTime}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
