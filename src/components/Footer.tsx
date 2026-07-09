import React from "react";
import Link from "next/link";
import LocalClock from "./LocalClock";
import { getRoute } from "@/lib/routes";

type FooterDict = {
  brand?: string;
  footer?: {
    desc?: string;
    nav_title?: string;
    services_title?: string;
    offices_title?: string;
    penal?: string;
    constitucional?: string;
    consular?: string;
    colaboracion?: string;
    location?: string;
    cta?: string;
    copyright?: string;
    local_time?: string;
    legal_notice?: string;
    privacy?: string;
  };
  nav?: {
    inicio?: string;
    quienes_somos?: string;
    nuestro_ceo?: string;
    blog?: string;
    noticias?: string;
  };
};

export default function Footer({
  dict,
  locale,
}: {
  dict: FooterDict;
  locale: string;
}) {
  const f = dict?.footer || {};
  const n = dict?.nav || {};

  const navTitle = f.nav_title;
  const servicesTitle = f.services_title;
  const officesTitle = f.offices_title;

  const homeLabel = n.inicio;
  const aboutLabel = n.quienes_somos;
  const ceoLabel = n.nuestro_ceo;
  const blogLabel = n.blog;
  const newsLabel = n.noticias;

  const penalLabel = f.penal;
  const constitucionalLabel = f.constitucional;
  const consularLabel = f.consular;
  const colaboracionLabel = f.colaboracion;

  const brandLabel = dict?.brand;

  const descLabel = f.desc;

  const locationLabel = f.location;
  const ctaLabel = f.cta;
  const legalNoticeLabel = f.legal_notice;
  const privacyLabel = f.privacy;
  const localTimeLabel = f.local_time;
  const copyrightText = f.copyright;

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
              alt={brandLabel}
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
