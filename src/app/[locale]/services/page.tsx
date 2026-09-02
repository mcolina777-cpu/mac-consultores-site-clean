import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs ? 'Áreas de Práctica y Servicios | Mac Consultores' : 'Practice Areas and Services | Mac Consultores';
  const description = isEs
    ? 'Nuestros servicios legales incluyen: Derecho Penal, Constitucional, Compliance Corporativo, Extradiciones, y consultoría para particulares y corporaciones.'
    : 'Our legal services include: Criminal Law, Constitutional Law, Corporate Compliance, Extraditions, and consulting for individuals and corporations.';

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

      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div className="grid-split mb-4rem">
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
                <source
                  srcSet="/assets/img-webp/SALA_REUNIONES_B_OPT.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/SALA_REUNIONES_B_OPT.jpg"
                  alt="Sala de Reuniones y Despacho en Mac Consultores"
                  width={2752}
                  height={1536}
                  fetchPriority="high"
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
          </div>
        </div>
      </section>

      <section className="bg-soft" style={{ padding: '40px 0 80px 0' }}>
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

              <Link href={`/${locale}`} className="btn btn-outline">
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
