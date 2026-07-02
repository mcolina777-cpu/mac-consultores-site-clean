"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

type FooterDict = {
  desc?: string;
  navtitle?: string;
  servicestitle?: string;
  officestitle?: string;
  location?: string;
  copyright?: string;
  localtime?: string;
  legalnotice?: string;
  privacy?: string;
  brand?: string;
  nav?: {
    inicio?: string;
    quienessomos?: string;
    nuestroceo?: string;
    blog?: string;
    noticias?: string;
  };
  penal?: string;
  constitucional?: string;
  consular?: string;
  colaboracion?: string;
  cta?: {
    btn?: string;
  };
};

export default function Footer({
  dict,
  locale,
}: {
  dict: FooterDict;
  locale: string;
}) {
  const [localTime, setLocalTime] = useState("--:--");
  const isEnglish = locale.toLowerCase().startsWith("en");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("es-VE", options).format(now));
    };
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // Fallbacks mínimos: si dict no trae algo, se usa un texto por defecto.
  // La lógica de idioma principal debe vivir en dict, no en el componente.
  const navTitle = dict?.navtitle ?? (isEnglish ? "Navigation" : "Navegación");
  const servicesTitle =
    dict?.servicestitle ?? (isEnglish ? "Services" : "Servicios");
  const officesTitle =
    dict?.officestitle ?? (isEnglish ? "Offices" : "Oficinas");

  const homeLabel = dict?.nav?.inicio ?? (isEnglish ? "Home" : "Inicio");
  const aboutLabel =
    dict?.nav?.quienessomos ?? (isEnglish ? "About Us" : "Quiénes Somos");
  const ceoLabel =
    dict?.nav?.nuestroceo ?? (isEnglish ? "Our CEO" : "Nuestro CEO");
  const blogLabel =
    dict?.nav?.blog ?? (isEnglish ? "Legal Blog" : "Blog Jurídico");
  const newsLabel = dict?.nav?.noticias ?? (isEnglish ? "News" : "Noticias");

  const penalLabel =
    dict?.penal ?? (isEnglish ? "Criminal Law" : "Derecho Penal");
  const constitucionalLabel =
    dict?.constitucional ??
    (isEnglish ? "Constitutional Defense" : "Defensa Constitucional");
  const consularLabel =
    dict?.consular ?? (isEnglish ? "Consular Services" : "Gestión Consular");
  const colaboracionLabel =
    dict?.colaboracion ??
    (isEnglish ? "International Cooperation" : "Colaboración Internacional");

  const brandLabel =
    dict?.brand ?? "MAC CONSULTORES JURÍDICOS & ASOCIADOS";

  const descLabel =
    dict?.desc ??
    (isEnglish
      ? "High‑complexity legal solutions focused on strategy, prevention, and comprehensive protection of our clients' interests."
      : "Soluciones legales de alta complejidad con enfoque en la estrategia, la prevención y la protección integral de los intereses de nuestros clientes.");

  const locationLabel = dict?.location ?? "Caracas, Venezuela";
  const ctaLabel =
    dict?.cta?.btn ??
    (isEnglish ? "BOOK AN APPOINTMENT →" : "AGENDAR CITA →");
  const legalNoticeLabel =
    dict?.legalnotice ?? (isEnglish ? "Legal Notice" : "Aviso Legal");
  const privacyLabel =
    dict?.privacy ?? (isEnglish ? "Privacy Policy" : "Privacidad");
  const localTimeLabel =
    dict?.localtime ?? (isEnglish ? "Local time" : "Hora local");
  const copyrightText =
    dict?.copyright ??
    (isEnglish
      ? "Mac Consultores Jurídicos & Asociados. All rights reserved."
      : "Mac Consultores Jurídicos & Asociados. Todos los derechos reservados.");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna info */}
          <div className="footer-col footer-info">
            <div className="footer-logo">{brandLabel}</div>
            <p className="footer-desc">{descLabel}</p>
          </div>
          {/* Columna navegación */}
          <div className="footer-col">
            <h4 className="footer-title">{navTitle}</h4>
            <ul className="footer-links">
              <li>
                <Link href={`/${locale}`}>{homeLabel}</Link>
              </li>
              <li>
                <Link href={`/${locale}/quienes-somos`}>{aboutLabel}</Link>
              </li>
              <li>
                <Link href={`/${locale}/nuestro-ceo`}>{ceoLabel}</Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`}>{blogLabel}</Link>
              </li>
              <li>
                <Link href={`/${locale}/noticias`}>{newsLabel}</Link>
              </li>
            </ul>
          </div>
          {/* Columna servicios */}
          <div className="footer-col">
            <h4 className="footer-title">{servicesTitle}</h4>
            <ul className="footer-links">
              <li>
                <Link href={`/${locale}/servicios/penal`}>{penalLabel}</Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios/constitucional`}>
                  {constitucionalLabel}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tramites-consulares`}>
                  {consularLabel}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/colaboracion-internacional`}>
                  {colaboracionLabel}
                </Link>
              </li>
            </ul>
          </div>
          {/* Columna oficinas / contacto */}
          <div className="footer-col">
            <h4 className="footer-title">{officesTitle}</h4>
            <ul className="footer-links">
              <li>{locationLabel}</li>
              <li>
                <a href="mailto:infomacconsul@gmail.com">
                  infomacconsul@gmail.com
                </a>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="footer-cta">
                  {ctaLabel}
                </Link>
              </li>
            </ul>
            <img
              src="/assets/mac/mac-icon-192.png"
              alt={isEnglish ? "Mac Consultores seal" : "Sello Mac Consultores"}
              className="footer-seal-img"
              loading="lazy"
            />
          </div>
        </div>
        {/* Línea inferior */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} {copyrightText}
            </p>
            <p className="footer-location">
              <span>{locationLabel}</span>
              &middot;
              <span>{localTimeLabel}</span>:
              <span id="local-clock" suppressHydrationWarning>
                {localTime}
              </span>
            </p>
          </div>
          <div className="footer-legal">
            <Link href={`/${locale}/aviso-legal`}>{legalNoticeLabel}</Link>
            <Link href={`/${locale}/privacidad`}>{privacyLabel}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
