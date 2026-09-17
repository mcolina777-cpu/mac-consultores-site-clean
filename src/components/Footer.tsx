import React from "react";
import Link from "next/link";
import Image from "next/image";
import LocalClock from "./LocalClock";
import { getRoute } from "@/lib/routes";
import { CONTACT_EMAIL } from "@/lib/constants";

type FooterDict = {
  brand?: string;
  footer?: {
    desc?: string;
    rif?: string;
    nav_title?: string;
    services_title?: string;
    offices_title?: string;
    penal?: string;
    constitucional?: string;
    consular?: string;
    colaboracion?: string;
    legal_intelligence?: string;
    location?: string;
    officeAddress?: string;
    timezoneCity?: string;
    cta?: string;
    deontological_notice?: string;
    copyright?: string;
    local_time?: string;
    legal_notice?: string;
    privacy?: string;
    link_pro_bono?: string;
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

  const brandLabel = dict?.brand || "Mac Consultores Jurídicos & Asociados";
  const rifLabel = f.rif || "RIF: J-40244634-9";
  const descLabel =
    f.desc ||
    (locale === "en"
      ? "Boutique law firm specializing in strategic corporate criminal defense, constitutional protection, and complex international mandates in Venezuela."
      : "Práctica jurídica boutique especializada en litigio penal estratégico corporativo, tutela constitucional y mandatos internacionales complejos en Venezuela.");

  const navTitle = f.nav_title || (locale === "en" ? "The Firm" : "Institución");
  const servicesTitle =
    f.services_title || (locale === "en" ? "Practice Areas" : "Áreas de Práctica");
  const officesTitle =
    f.offices_title || (locale === "en" ? "Headquarters & Contact" : "Sede y Contacto");

  const homeLabel = n.inicio || (locale === "en" ? "Home" : "Inicio");
  const aboutLabel = n.quienes_somos || (locale === "en" ? "About Us" : "Quiénes Somos");
  const ceoLabel = n.nuestro_ceo || (locale === "en" ? "Our CEO" : "Nuestro Director General");
  const blogLabel = n.blog || (locale === "en" ? "Legal Blog" : "Blog Jurídico");
  const newsLabel = n.noticias || (locale === "en" ? "News" : "Noticias");

  const penalLabel = f.penal || (locale === "en" ? "Criminal Law" : "Derecho Penal");
  const constitucionalLabel =
    f.constitucional || (locale === "en" ? "Constitutional Defense" : "Defensa Constitucional");
  const consularLabel =
    f.consular || (locale === "en" ? "International Practice" : "Práctica Internacional");
  const colaboracionLabel =
    f.colaboracion ||
    (locale === "en" ? "International Cooperation" : "Cooperación Internacional");
  const legalIntelligenceLabel = f.legal_intelligence || "Mac Legal Intelligence";
  const proBonoLabel =
    f.link_pro_bono || (locale === "en" ? "Pro Bono Program" : "Programa Pro Bono");

  const officeAddress = f.officeAddress || f.location || "Torre Financiera, Caracas";
  const timezoneCity = f.timezoneCity || "Caracas, Venezuela";
  const ctaLabel =
    f.cta || (locale === "en" ? "ADMISSIONS & INQUIRIES" : "ADMISIÓN Y CONSULTAS");
  const deontologicalNotice =
    f.deontological_notice ||
    (locale === "en"
      ? "The legal information provided on this website is institutional in nature and does not constitute binding legal advice or create an attorney-client relationship."
      : "La información jurídica contenida en este portal es de carácter institucional y no constituye asesoría vinculante ni configura una relación abogado-cliente.");
  const legalNoticeLabel = f.legal_notice || (locale === "en" ? "Legal Notice" : "Aviso Legal");
  const privacyLabel = f.privacy || (locale === "en" ? "Privacy Policy" : "Política de Privacidad");
  const localTimeLabel = f.local_time || (locale === "en" ? "Local time" : "Hora local");
  const copyrightText =
    f.copyright ||
    (locale === "en"
      ? "Mac Consultores Jurídicos & Asociados. All rights reserved."
      : "Mac Consultores Jurídicos & Asociados. Todos los derechos reservados.");

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Capa 1 & 2: Cuadrícula principal de 4 columnas */}
        <div className="footer-grid">
          {/* Columna 1: Identidad Institucional & Marca Boutique */}
          <div className="footer-col footer-brand-col">
            <Link
              href={getRoute(locale, "home")}
              className="footer-brand-header"
              aria-label={brandLabel}
            >
              <Image
                src="/assets/mac/mac-lion-footer-transparent.png"
                alt="Escudo Institucional Mac Consultores"
                width={42}
                height={51}
                className="footer-brand-crest"
                priority={false}
              />
              <div className="footer-brand-titles">
                <span className="footer-brand-name">{brandLabel}</span>
                <span className="footer-brand-rif">{rifLabel}</span>
              </div>
            </Link>
            <p className="footer-brand-desc">{descLabel}</p>
          </div>

          {/* Columna 2: Navegación de la Firma */}
          <div
            className="footer-col footer-nav-col"
            role="navigation"
            aria-label={navTitle}
          >
            <h4 className="footer-title">{navTitle}</h4>
            <ul className="footer-links">
              <li>
                <Link href={getRoute(locale, "home")}>{homeLabel}</Link>
              </li>
              <li>
                <Link href={getRoute(locale, "about")}>{aboutLabel}</Link>
              </li>
              <li>
                <Link href={getRoute(locale, "ourCeo")}>{ceoLabel}</Link>
              </li>
              <li>
                <Link href={getRoute(locale, "blog")}>{blogLabel}</Link>
              </li>
              <li>
                <Link href={getRoute(locale, "news")}>{newsLabel}</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Áreas de Práctica / Servicios */}
          <div
            className="footer-col footer-services-col"
            role="navigation"
            aria-label={servicesTitle}
          >
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
              <li>
                <Link href={getRoute(locale, "services.legal_intelligence")}>
                  {legalIntelligenceLabel}
                </Link>
              </li>
              <li>
                <Link href={getRoute(locale, "probonoPenal")}>
                  {proBonoLabel}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Despacho, Sede y Admisión */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-title">{officesTitle}</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-val">{officeAddress}</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-val">{timezoneCity}</span>
              </li>
              <li className="footer-contact-item">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="footer-contact-link"
                  aria-label={`Email: ${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <div className="footer-cta-wrap">
              <Link
                href={getRoute(locale, "contact")}
                className="footer-cta-btn"
                role="button"
                aria-label={ctaLabel}
              >
                <span>{ctaLabel}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Capa 3: Aviso Deontológico Institucional */}
        <div className="footer-deontological">
          <p>{deontologicalNotice}</p>
        </div>

        {/* Capa 4: Barra Legal Inferior, Huso Horario y Metadatos */}
        <div className="footer-bottom">
          <div className="footer-bottom-info">
            <p className="footer-copyright-text">
              &copy; {new Date().getFullYear()} {copyrightText}
            </p>
            <p className="footer-metadata">
              <span>{rifLabel}</span>
              <span className="footer-meta-sep" aria-hidden="true">
                ·
              </span>
              <span>{timezoneCity}</span>
              <span className="footer-meta-sep" aria-hidden="true">
                ·
              </span>
              <span className="footer-localtime-wrap">
                <span className="footer-localtime-label">
                  {localTimeLabel}:
                </span>{" "}
                <LocalClock locale={locale} />
              </span>
            </p>
          </div>
          <div
            className="footer-legal-links"
            aria-label={
              locale === "en" ? "Legal Information" : "Información Legal"
            }
          >
            <Link href={getRoute(locale, "legalNotice")}>
              {legalNoticeLabel}
            </Link>
            <Link href={getRoute(locale, "privacy")}>{privacyLabel}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
