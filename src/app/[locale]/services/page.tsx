import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs ? 'Áreas de Práctica y Servicios | Mac Consultores' : 'Practice Areas and Services | Mac Consultores';
  const description = isEs
    ? 'Servicios jurídicos en derecho penal corporativo, protección constitucional, consultoría preventiva, delitos informáticos y práctica internacional en Venezuela.'
    : 'Legal services in corporate criminal law, constitutional protection, preventive compliance, cybercrimes, and international legal practice in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/services`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/services`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/services`;

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
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function Servicios({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';

  return (
    <main className="page-servicios">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {dict?.breadcrumb || (isEs ? 'INICIO / SERVICIOS' : 'HOME / SERVICES')}
          </span>

          <h1 className="mb-1-5rem serif">
            {isEs
              ? 'Estrategia jurídica para asuntos que exigen precisión'
              : 'Legal Strategy for Matters Demanding Precision'}
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: 'var(--text-muted, #4b5563)',
            }}
          >
            {isEs
              ? 'Áreas de práctica orientadas a la prevención, la defensa técnica y la protección de intereses jurídicamente relevantes.'
              : 'Practice areas focused on prevention, technical defense, and the protection of legally significant interests.'}
          </p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split services-intro-grid mb-2-5rem">
            <div className="about-content">
              <span className="section-tag">
                {dict?.intro?.tag || (isEs ? 'ÁREAS DE EXCELENCIA' : 'AREAS OF EXCELLENCE')}
              </span>

              <h2 className="serif section-title mb-1-5rem">
                {dict?.intro?.h2 ||
                  (isEs
                    ? 'Soluciones jurídicas diseñadas para desafíos complejos.'
                    : 'Legal solutions designed for complex challenges.')}
              </h2>

              <p
                className="text-left max-w-100 mb-1rem"
                style={{ lineHeight: 1.7 }}
              >
                {isEs
                  ? 'Mac Consultores Jurídicos & Asociados presta asesoría y representación jurídica con un enfoque selectivo, estratégico y técnicamente riguroso, dirigido a personas naturales y jurídicas que requieren criterio profesional para la prevención, evaluación y conducción de asuntos sensibles.'
                  : 'Mac Consultores Jurídicos & Asociados provides legal advice and representation through a selective, strategic, and technically rigorous approach for individuals and corporate entities requiring professional judgment to prevent, assess, and handle sensitive matters.'}
              </p>

              <p
                className="text-left max-w-100 mb-1rem"
                style={{ lineHeight: 1.7 }}
              >
                {isEs
                  ? 'Cada encargo es evaluado según su viabilidad, alcance y relevancia jurídica, con atención a la estrategia procesal, la evidencia disponible y la protección efectiva de los intereses del cliente.'
                  : 'Each engagement is assessed according to its viability, scope, and legal relevance, with attention to procedural strategy, available evidence, and the effective protection of the client’s interests.'}
              </p>
            </div>

            <div className="img-reveal">
              <picture>
                <img
                  src="/assets/img/SERVICIOS.jpeg"
                  alt="Sala de Reuniones y Despacho en Mac Consultores"
                  width={1792}
                  height={2398}
                  fetchPriority="high"
                  style={{ maxHeight: 'none' }}
                />
              </picture>
            </div>
          </div>

          <div className="grid-2">
            <Link
              href={getRoute(locale, "services.penal")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">01</span>
              <h3 className="serif">{dict?.services?.card_1?.title}</h3>
              <p className="card-editorial-text">
                {dict?.services?.card_1?.desc}
              </p>
              <span className="card-link">
                {dict?.services?.card_1?.link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "services.constitucional")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">02</span>
              <h3 className="serif">{dict?.services?.card_2?.title}</h3>
              <p className="card-editorial-text">
                {dict?.services?.card_2?.desc}
              </p>
              <span className="card-link">
                {dict?.services?.card_2?.link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "services.delitos_informaticos")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">03</span>
              <h3 className="serif">{dict?.services?.card_3?.title}</h3>
              <p className="card-editorial-text">
                {dict?.services?.card_3?.desc}
              </p>
              <span className="card-link">
                {dict?.services?.card_3?.link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "services.consultoria_preventiva")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">04</span>
              <h3 className="serif">{dict?.services?.card_4?.title}</h3>
              <p className="card-editorial-text">
                {dict?.services?.card_4?.desc}
              </p>
              <span className="card-link">
                {dict?.services?.card_4?.link}
              </span>
            </Link>

            {/* TARJETA 05: SECTOR PETROLERO */}
            <Link
              href={getRoute(locale, "services.sector_petrolero")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">05</span>
              <h3 className="serif">
                {dict?.sector_petrolero?.h1 ||
                  (isEs
                    ? 'Asesoría Jurídico-Penal en el Sector Petrolero'
                    : 'Criminal Law Advisory for the Oil Sector')}
              </h3>
              <p className="card-editorial-text">
                {isEs
                  ? 'Análisis preventivo de contingencias penales y defensa de empresas operadoras, contratistas y directivos en asuntos vinculados con operaciones petroleras en Venezuela.'
                  : 'Preventive assessment of criminal-law risks and defense of operating companies, contractors, and executives in matters involving oil operations in Venezuela.'}
              </p>
              <span className="card-link">
                {dict?.services?.card_1?.link || (isEs ? 'VER DETALLES →' : 'VIEW DETAILS →')}
              </span>
            </Link>

            {/* TARJETA 06: ALIANZAS Y CORRESPONSALÍA JURÍDICA */}
            <Link
              href={getRoute(locale, "services.international_cooperation")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">06</span>
              <h3 className="serif">
                {isEs
                  ? 'Alianzas y Corresponsalía Jurídica'
                  : 'Partnerships and Local Counsel'}
              </h3>
              <p className="card-editorial-text">
                {isEs
                  ? 'Apoyo jurídico local para firmas y departamentos legales internacionales que requieren análisis o gestión de asuntos en Venezuela. La colaboración se define según el encargo, el alcance de la intervención y la coordinación con el equipo principal.'
                  : 'Local legal support for international law firms and legal departments that require analysis or assistance with matters in Venezuela. The engagement is defined according to the instruction, scope of work, and coordination with the principal team.'}
              </p>
              <span className="card-link">
                {dict?.services?.card_1?.link || (isEs ? 'VER DETALLES →' : 'VIEW DETAILS →')}
              </span>
            </Link>

            {/* TARJETA 07: REPRESENTACIÓN JURÍDICA EN VENEZUELA */}
            <Link
              href={getRoute(locale, "services.consular")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">07</span>
              <h3 className="serif">
                {isEs
                  ? 'Representación Jurídica en Venezuela'
                  : 'Legal Representation in Venezuela'}
              </h3>
              <p className="card-editorial-text">
                {isEs
                  ? 'Asesoría e intervención jurídica en Venezuela en derecho penal corporativo, defensa penal y tutela constitucional para empresas, instituciones y personas situadas en el exterior.'
                  : 'Legal advice and assistance in Venezuela in corporate criminal law, criminal defense, and constitutional rights protection for companies, institutions, and individuals based abroad.'}
              </p>
              <span className="card-link">
                {dict?.services?.card_1?.link || (isEs ? 'VER DETALLES →' : 'VIEW DETAILS →')}
              </span>
            </Link>

            {/* TARJETA 08: MAC LEGAL INTELLIGENCE */}
            <Link
              href={getRoute(locale, "services.legal_intelligence")}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="section-tag">08</span>
              <h3 className="serif">
                {dict?.services?.card_8?.title || dict?.legal_intelligence?.service_card?.title || 'Mac Legal Intelligence'}
              </h3>
              <p className="card-editorial-text">
                {dict?.services?.card_8?.desc || dict?.legal_intelligence?.service_card?.description}
              </p>
              <span className="card-link">
                {dict?.services?.card_8?.link || dict?.services?.card_1?.link || (isEs ? 'VER DETALLES →' : 'VIEW DETAILS →')}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN EDITORIAL: ANÁLISIS SUSTANTIVO Y ESTRATEGIA PROCESAL */}
      <section className="section-padding-asym editorial-spacing editorial-spacing--continuous">
        <div className="container">
          <div className="layout-reading">
            <span className="section-tag">
              {dict?.services?.editorial?.tag}
            </span>
            <h2 className="serif heading-lg mb-1-5rem">
              {dict?.services?.editorial?.title}
            </h2>
            {dict?.services?.editorial?.paragraphs?.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft section-padding-asym">
        <div
          className="container"
          style={{ maxWidth: '840px', margin: '0 auto' }}
        >
          <div
            className="card bg-soft text-center"
            style={{
              padding: '3rem',
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              MAC CONSULTORES JURÍDICOS & ASOCIADOS
            </span>

            <h2
              className="serif mt-1rem mb-1rem"
              style={{ fontSize: '1.4rem' }}
            >
              {isEs
                ? '“Criterio jurídico especializado para decisiones que no admiten improvisación.”'
                : '“Specialized legal judgment for decisions that leave no room for improvisation.”'}
            </h2>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Contacte a la firma para evaluar su situación y determinar el enfoque jurídico más adecuado para la protección de sus intereses.'
                : 'Contact the firm to assess your situation and determine the legal approach best suited to protect your interests.'}
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
                href={getRoute(locale, "contact")}
                className="btn btn-primary"
              >
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>

              <Link href={getRoute(locale, "home")} className="btn btn-secondary btn-compact">
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
