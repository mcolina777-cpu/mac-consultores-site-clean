import React from "react";
import Link from "next/link";
import LocalClock from "./LocalClock";
import { getRoute } from "@/lib/routes";

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
  const isEnglish = locale.toLowerCase().startsWith("en");

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
                <Link href={getRoute(locale, "home")}>
                  {homeLabel}
                </Link>
              </li>
              <li>
                <Link href={getRoute(locale, "about")}>
                  {aboutLabel}
                </Link>
              </li>
              <li>
                <Link href={getRoute(locale, "ourCeo")}>
                  {ceoLabel}
                </Link>
              </li>
              <li>
                <Link href={getRoute(locale, "blog")}>{blogLabel}</Link>
              </li>
              <li>
                <Link href={getRoute(locale, "news")}>
                  {newsLabel}
                </Link>
              </li>
            </ul>
          </div>
          {/* Columna servicios */}
          <div className="footer-col">
            <h4 className="footer-title">{servicesTitle}</h4>
            <ul className="footer-links">
              <li>
                <Link href={getRoute(locale, "services.penal")}>
                  {penalLabel}
                </Link>
              </li>
              <li>
                <Link href={getRoute(locale, "services.constitucional")}>
                  {constitucionalLabel}
                </Link>
              </li>
              <li>
                <Link href={getRoute(locale, "services.consular")}>
                  {consularLabel}
                </Link>
              </li>
              <li>
                <Link href={getRoute(locale, "services.international_cooperation")}>
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
                <Link href={getRoute(locale, "contact")} className="footer-cta">
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
              <span className="footer-location-separator"> · </span>
              <span className="footer-localtime-label">
                {localTimeLabel}:
              </span>
              <LocalClock locale={locale} />
            </p>
          </div>
          <div className="footer-legal">
            <Link href={getRoute(locale, "legalNotice")}>{legalNoticeLabel}</Link>
            <Link href={getRoute(locale, "privacy")}>{privacyLabel}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
