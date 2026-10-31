import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);

  const title = dict?.seo?.tramites_consulares?.title || (isEs
    ? 'Asesoría e intervención jurídica especializada en Venezuela | Mac Consultores Jurídicos & Asociados'
    : 'Specialized Legal Counsel & Intervention in Venezuela | Mac Consultores Jurídicos & Asociados');

  const description = dict?.seo?.tramites_consulares?.description || (isEs
    ? 'Derecho penal corporativo, defensa penal y tutela constitucional para empresas, instituciones y personas situadas fuera de Venezuela.'
    : 'Corporate criminal law, criminal defense, and constitutional protection for companies, institutions, and individuals located outside Venezuela.');

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/services/consular`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular';

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: esUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mac Consultores Jurídicos & Asociados',
      images: [
        {
          url: '/assets/img/logo-mac-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Logo de Mac Consultores Jurídicos & Asociados',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function InternacionalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';

  return (
    <main className="page-tramites-consulares">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{dict?.tramites_consulares?.breadcrumb}</span>
          <h1 className="mb-1-5rem">{dict?.tramites_consulares?.h1}</h1>
          <p className="hero-subtitle mb-2rem">{dict?.tramites_consulares?.subtitle}</p>
          <div
            className="btn-group"
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '1.5rem',
            }}
          >
            <Link
              href={`${getRoute(locale, 'contact')}?materia=internacional#formulario-contacto`}
              className="btn btn-primary"
            >
              {dict?.tramites_consulares?.cta_primary}
            </Link>
            <a href="#servicios-especializados" className="btn btn-outline">
              {dict?.tramites_consulares?.cta_secondary}
            </a>
          </div>
        </div>
      </header>

      <section className="intro-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                {dict?.tramites_consulares?.intro_p1}
              </p>
              <p className="text-left max-w-100 mb-0" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                {dict?.tramites_consulares?.intro_p2}
              </p>
            </div>

            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_REUNIONES_1_OPT.webp" type="image/webp" />
                <img
                  src="/assets/img/SALA_REUNIONES_1_OPT.jpg"
                  alt={isEs ? "Sala de Reuniones Internacionales en Mac Consultores" : "International Meeting Room at Mac Consultores"}
                  width="2752"
                  height="1536"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* FILA COMPLEMENTARIA: NOTA DE CONTRATACIÓN Y ASESORÍA PETROLERA */}
          <div className="grid-2 mt-2rem">
            {/* NOTA DE CONTRATACIÓN INSTITUCIONAL */}
            <div
              style={{
                padding: '1.25rem',
                borderLeft: '3px solid var(--primary, #0c1a2c)',
                backgroundColor: 'var(--bg-soft, #f9fafb)',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <p
                style={{
                  lineHeight: 1.6,
                  fontSize: '0.9rem',
                  color: 'var(--text-muted, #4b5563)',
                  margin: 0,
                }}
              >
                <strong>{isEs ? "Evaluación jurídica y confidencialidad: " : "Legal assessment and confidentiality: "}</strong>
                {dict?.tramites_consulares?.contract_note}
              </p>
            </div>

            {/* ACCESO SECUNDARIO: ASESORÍA PETROLERA */}
            <div
              style={{
                paddingLeft: '1.25rem',
                borderLeft: '2px solid var(--accent, #990000)',
              }}
            >
              <span
                className="section-tag"
                style={{
                  marginBottom: '0.5rem',
                  fontSize: '0.75rem',
                }}
              >
                {dict?.tramites_consulares?.oil_sector_access?.tag}
              </span>
              <p
                className="text-left max-w-100"
                style={{
                  lineHeight: 1.6,
                  fontSize: '0.95rem',
                  color: 'var(--text-muted, #4b5563)',
                  marginBottom: '0.75rem',
                }}
              >
                {dict?.tramites_consulares?.oil_sector_access?.desc}
              </p>
              <Link
                href={getRoute(locale, 'services.sector_petrolero')}
                className="card-link"
              >
                {dict?.tramites_consulares?.oil_sector_access?.link}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 1: ASESORÍA, ESTRATEGIA E INTERVENCIÓN LOCAL (3 TARJETAS) */}
      <section id="servicios-especializados" className="bg-soft section-padding-asym">
        <div className="container">
          <div className="section-header text-left mb-3rem">
            <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.tag}</span>
            <h2 className="section-title heading-xl mb-0-5rem">{dict?.tramites_consulares?.bloque_1?.title}</h2>
          </div>
          <div className="grid-3">
            {/* T01: Defensa penal y representación de víctimas */}
            <Link href={getRoute(locale, "consular.representacion_judicial")} className="card hover-lift">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.card_1?.tag || "01"}</span>
              <h3>{dict?.tramites_consulares?.bloque_1?.card_1?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_1?.card_1?.desc}
              </p>
              <span className="card-link mt-auto">
                {dict?.tramites_consulares?.bloque_1?.card_1?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>

            {/* T02: Estrategia jurídico-penal en operaciones empresariales */}
            <Link href={getRoute(locale, "consular.contratos_internacionales")} className="card hover-lift">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.card_2?.tag || "02"}</span>
              <h3>{dict?.tramites_consulares?.bloque_1?.card_2?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_1?.card_2?.desc}
              </p>
              <span className="card-link mt-auto">
                {dict?.tramites_consulares?.bloque_1?.card_2?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>

            {/* T03: Opiniones jurídicas de derecho venezolano */}
            <Link href={getRoute(locale, "consular.opiniones_juridicas")} className="card hover-lift">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.card_3?.tag || "03"}</span>
              <h3>{dict?.tramites_consulares?.bloque_1?.card_3?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_1?.card_3?.desc}
              </p>
              <span className="card-link mt-auto">
                {dict?.tramites_consulares?.bloque_1?.card_3?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: IMPUGNACIÓN Y TUTELA JURÍDICA INTERNACIONAL (2 TARJETAS) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="section-header text-left mb-3rem">
            <span className="section-tag">{dict?.tramites_consulares?.bloque_2?.tag}</span>
            <h2 className="section-title heading-xl mb-0-5rem">{dict?.tramites_consulares?.bloque_2?.title}</h2>
          </div>
          <div className="grid-2">
            {/* T04: Casación penal y tutela constitucional */}
            <Link href={getRoute(locale, "consular.casacion_tutela")} className="card hover-lift">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_2?.card_1?.tag || "04"}</span>
              <h3>{dict?.tramites_consulares?.bloque_2?.card_1?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_2?.card_1?.desc}
              </p>
              <span className="card-link mt-auto">
                {dict?.tramites_consulares?.bloque_2?.card_1?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>

            {/* T05: Extradición y coordinación jurídica internacional */}
            <Link href={getRoute(locale, "consular.extradicion")} className="card hover-lift">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_2?.card_2?.tag || "05"}</span>
              <h3>{dict?.tramites_consulares?.bloque_2?.card_2?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_2?.card_2?.desc}
              </p>
              <span className="card-link mt-auto">
                {dict?.tramites_consulares?.bloque_2?.card_2?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ACCESO A ASESORÍA JURÍDICA A EMBAJADAS Y CONSULADOS */}
      <section className="section-padding-asym editorial-spacing">
        <div className="container">
          <div className="layout-reading">
            <h2 className="serif heading-lg mb-1-5rem">
              {dict?.tramites_consulares?.diplomatic_access?.title}
            </h2>
            <p style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', marginBottom: '1.5rem' }}>
              {dict?.tramites_consulares?.diplomatic_access?.description}
            </p>
            <div>
              <Link
                href={getRoute(locale, 'services.consular_diplomatic')}
                className="btn btn-primary"
              >
                {dict?.tramites_consulares?.diplomatic_access?.link}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONEXIÓN CON ALIANZAS */}
      <section className="section-padding-asym editorial-spacing editorial-spacing--continuous bg-soft">
        <div className="container">
          <div className="layout-reading">
            <span className="section-tag">
              {dict?.tramites_consulares?.alliances_connection?.tag}
            </span>
            <h2 className="serif heading-lg mb-1-5rem">
              {dict?.tramites_consulares?.alliances_connection?.title}
            </h2>
            <p style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', marginBottom: '1.5rem' }}>
              {dict?.tramites_consulares?.alliances_connection?.text}
            </p>
            <div>
              <Link
                href={getRoute(locale, "services.international_cooperation")}
                className="btn btn-outline"
              >
                {dict?.tramites_consulares?.alliances_connection?.link}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULO SECUNDARIO: CONTENIDOS CONSULARES Y DOCUMENTALES HISTÓRICOS */}
      <section className="section-padding-asym" style={{ borderTop: '1px solid var(--border-color, #e5e7eb)' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span className="section-tag">
            {dict?.tramites_consulares?.consular_archive?.tag}
          </span>
          <h2 className="serif mb-1-5rem" style={{ fontSize: '1.3rem', color: 'var(--primary, #0c1a2c)' }}>
            {dict?.tramites_consulares?.consular_archive?.title}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>
              <Link href={getRoute(locale, "consular.practica_consular")} className="card-link" style={{ fontSize: '0.95rem' }}>
                → {dict?.tramites_consulares?.consular_archive?.link_1}
              </Link>
            </li>
            <li>
              <Link href={getRoute(locale, "consular.poderes_y_mandatos")} className="card-link" style={{ fontSize: '0.95rem' }}>
                → {dict?.tramites_consulares?.consular_archive?.link_2}
              </Link>
            </li>
            <li>
              <Link href={getRoute(locale, "consular.gestion_documental")} className="card-link" style={{ fontSize: '0.95rem' }}>
                → {dict?.tramites_consulares?.consular_archive?.link_3}
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CIERRE INSTITUCIONAL */}
      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {dict?.tramites_consulares?.cierre?.tag || 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {dict?.tramites_consulares?.cierre?.title}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {dict?.tramites_consulares?.cierre?.desc}
            </p>

            <div
              className="btn-group"
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href={`${getRoute(locale, 'contact')}?materia=internacional#formulario-contacto`}
                className="btn btn-primary"
              >
                {dict?.tramites_consulares?.cierre?.cta || (isEs ? 'SOLICITAR EVALUACIÓN JURÍDICA' : 'REQUEST LEGAL ASSESSMENT')}
              </Link>
              <Link href={getRoute(locale, 'home')} className="btn btn-secondary btn-compact">
                {dict?.tramites_consulares?.cierre?.btn_secondary || (isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
