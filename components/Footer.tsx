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

  const navTitle = f.nav_title || "Navegación";
  const servicesTitle = f.services_title || "Servicios";
  const officesTitle = f.offices_title || "Oficinas";

  const homeLabel = n.inicio || "Inicio";
  const aboutLabel = n.quienes_somos || "Quiénes Somos";
  const ceoLabel = n.nuestro_ceo || "Nuestro CEO";
  const blogLabel = n.blog || "Blog Jurídico";
  const newsLabel = n.noticias || "Noticias";

  const penalLabel = f.penal || "Derecho Penal";
  const constitucionalLabel = f.constitucional || "Defensa Constitucional";
  const consularLabel = f.consular || "Gestión Consular";
  const colaboracionLabel = f.colaboracion || "Colaboración Internacional";

  const brandLabel = dict?.brand || "MAC CONSULTORES JURÍDICOS & ASOCIADOS";

  const descLabel = f.desc || "Soluciones legales de alta complejidad con enfoque en la estrategia, la prevención y la protección integral de los intereses de nuestros clientes.";

  const locationLabel = f.location || "Caracas, Venezuela";
  const ctaLabel = f.cta || "AGENDAR CITA →";
  const legalNoticeLabel = f.legal_notice || "Aviso Legal";
  const privacyLabel = f.privacy || "Privacidad";
  const localTimeLabel = f.local_time || "Hora local";
  const copyrightText = f.copyright || "Mac Consultores Jurídicos & Asociados. Todos los derechos reservados.";

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
