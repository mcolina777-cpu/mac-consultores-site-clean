import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Escenarios Representativos y Estrategia Forense | Mac Consultores Jurídicos'
    : 'Representative Scenarios & Forensic Strategy | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Análisis estratégico de escenarios corporativos, penales y constitucionales complejos, con enfoque en anticipación de riesgos y litigación técnica en Venezuela.'
    : 'Strategic analysis of complex corporate, criminal, and constitutional scenarios, focused on risk anticipation and technical litigation in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/estrategia-escenarios-representativos`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/estrategia-escenarios-representativos';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/estrategia-escenarios-representativos';

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

export default async function EstrategiaEscenariosRepresentativos({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.landing_estrategia_escenarios;
  const isEs = locale === 'es';

  const paragraphStyle = {
    lineHeight: 1.75,
    fontSize: '1.05rem',
    color: 'var(--text-main, #1f2937)',
  };

  return (
    <main className="page-article">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.tag || (isEs ? 'ESTRATEGIA FORENSE' : 'FORENSIC STRATEGY')}
          </span>
          <h1 className="mb-1-5rem serif">
            {data?.h1 || (isEs ? 'Escenarios Representativos' : 'Representative Scenarios')}
          </h1>
          <p className="hero-subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="content-section mb-3rem">
            {data?.intro?.p1 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.intro.p1}
              </p>
            )}
            {data?.intro?.p2 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.intro.p2}
              </p>
            )}
            {data?.intro?.p3 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.intro.p3}
              </p>
            )}
          </div>

          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.scenarios?.title}</h2>
            {data?.scenarios?.p1 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.scenarios.p1}
              </p>
            )}
            {data?.scenarios?.p2 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.scenarios.p2}
              </p>
            )}
            {data?.scenarios?.p3 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.scenarios.p3}
              </p>
            )}
            {data?.scenarios?.p4 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.scenarios.p4}
              </p>
            )}
            {data?.scenarios?.p5 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.scenarios.p5}
              </p>
            )}
          </div>

          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.anticipation?.title}</h2>
            {data?.anticipation?.p1 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.anticipation.p1}
              </p>
            )}
            {data?.anticipation?.p2 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.anticipation.p2}
              </p>
            )}
          </div>

          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.approach?.title}</h2>
            {data?.approach?.p1 && (
              <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                {data.approach.p1}
              </p>
            )}
            {data?.approach?.p2 && (
              <p
                className="text-left max-w-100 mb-1-5rem font-bold"
                style={paragraphStyle}
              >
                {data.approach.p2}
              </p>
            )}
          </div>

          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {isEs ? 'ESTRATEGIA FORENSE Y PREVENCIÓN' : 'FORENSIC STRATEGY & PREVENTION'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“Cada escenario exige una lectura jurídica propia, una estrategia verificable y una respuesta procesal proporcionada.”'
                : '“Each scenario requires its own legal reading, a verifiable strategy, and a proportionate procedural response.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados analiza los factores jurídicos, probatorios y reputacionales de cada controversia para definir actuaciones precisas desde el inicio.'
                : 'Mac Consultores Jurídicos & Asociados assesses the legal, evidentiary, and reputational factors of every dispute to define precise action from the outset.'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>

              <Link href={`/${locale}`} className="btn btn-secondary">
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
