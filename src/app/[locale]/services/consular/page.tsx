import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);

  const title = dict?.seo?.tramites_consulares?.title || (isEs
    ? 'Gestión jurídica para clientes en el exterior | Mac Consultores Jurídicos'
    : 'Legal services for clients abroad | Mac Consultores Jurídicos');

  const description = dict?.seo?.tramites_consulares?.description || (isEs
    ? 'Asesoría y coordinación jurídica local para clientes en el exterior con documentos, poderes, patrimonio y asuntos vinculados con Venezuela.'
    : 'Local legal advice and coordination for clients abroad with documents, powers of attorney, property, and matters related to Venezuela.');

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

export default async function TramitesConsulares({ params }: { params: Promise<{ locale: string }> }) {
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
            <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
              {dict?.tramites_consulares?.cta_primary}
            </Link>
            <Link href={getRoute(locale, 'services')} className="btn btn-outline">
              {dict?.tramites_consulares?.cta_secondary}
            </Link>
          </div>
        </div>
      </header>

      <section className="intro-section section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <p className="text-left max-w-100 mb-0">{dict?.tramites_consulares?.intro_p}</p>
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
        </div>
      </section>

      {/* BLOQUE 1: ACTUACIÓN CORPORATIVA Y TRANSFRONTERIZA (3 TARJETAS) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="section-header text-left mb-3rem">
            <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.tag}</span>
            <h2 className="section-title heading-xl mb-0-5rem">{dict?.tramites_consulares?.bloque_1?.title}</h2>
            <p className="hero-subtitle mb-1rem" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>
              {dict?.tramites_consulares?.bloque_1?.subtitle}
            </p>
            <p className="max-w-800 text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {dict?.tramites_consulares?.bloque_1?.intro}
            </p>
          </div>
          <div className="grid-3">
            {/* T1: Local Counsel para Firmas Extranjeras */}
            <Link href={getRoute(locale, "consular.practica_consular")} className="card">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.card_1?.tag || "01"}</span>
              <h3>{dict?.tramites_consulares?.bloque_1?.card_1?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_1?.card_1?.desc}
              </p>
              <span className="card-link">
                {dict?.tramites_consulares?.bloque_1?.card_1?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>

            {/* T2: Contratación Transfronteriza y Cumplimiento */}
            <Link href={getRoute(locale, "consular.contratos_internacionales")} className="card">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.card_2?.tag || "02"}</span>
              <h3>{dict?.tramites_consulares?.bloque_1?.card_2?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_1?.card_2?.desc}
              </p>
              <span className="card-link">
                {dict?.tramites_consulares?.bloque_1?.card_2?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>

            {/* T3: Representación Judicial y Litigios en Venezuela */}
            <Link href={getRoute(locale, "consular.representacion_judicial")} className="card">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_1?.card_3?.tag || "03"}</span>
              <h3>{dict?.tramites_consulares?.bloque_1?.card_3?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_1?.card_3?.desc}
              </p>
              <span className="card-link">
                {dict?.tramites_consulares?.bloque_1?.card_3?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: ASUNTOS PATRIMONIALES Y DOCUMENTACIÓN JURÍDICA (2 TARJETAS) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="section-header text-left mb-3rem">
            <span className="section-tag">{dict?.tramites_consulares?.bloque_2?.tag}</span>
            <h2 className="section-title heading-xl mb-0-5rem">{dict?.tramites_consulares?.bloque_2?.title}</h2>
            <p className="hero-subtitle mb-1rem" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>
              {dict?.tramites_consulares?.bloque_2?.subtitle}
            </p>
            <p className="max-w-800 text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {dict?.tramites_consulares?.bloque_2?.intro}
            </p>
          </div>
          <div className="grid-2">
            {/* T4: Poderes y Mandatos Estratégicos */}
            <Link href={getRoute(locale, "consular.poderes_y_mandatos")} className="card">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_2?.card_1?.tag || "04"}</span>
              <h3>{dict?.tramites_consulares?.bloque_2?.card_1?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_2?.card_1?.desc}
              </p>
              <span className="card-link">
                {dict?.tramites_consulares?.bloque_2?.card_1?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>

            {/* T5: Eficacia Documental y Homologación */}
            <Link href={getRoute(locale, "consular.gestion_documental")} className="card">
              <span className="section-tag">{dict?.tramites_consulares?.bloque_2?.card_2?.tag || "05"}</span>
              <h3>{dict?.tramites_consulares?.bloque_2?.card_2?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.bloque_2?.card_2?.desc}
              </p>
              <span className="card-link">
                {dict?.tramites_consulares?.bloque_2?.card_2?.link || (isEs ? "VER DETALLES →" : "VIEW DETAILS →")}
              </span>
            </Link>
          </div>
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
              {dict?.tramites_consulares?.cierre?.quote}
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
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {dict?.tramites_consulares?.cierre?.btn_primary || (isEs ? 'EVALUAR ASUNTO CON LA FIRMA' : 'EVALUATE MATTER WITH THE FIRM')}
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
