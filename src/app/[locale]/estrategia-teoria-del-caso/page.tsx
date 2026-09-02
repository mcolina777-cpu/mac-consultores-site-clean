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
    ? 'Teoría del Caso y Litigación Estratégica | Mac Consultores Jurídicos'
    : 'Case Theory & Strategic Litigation | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Diseño de teoría del caso, articulación probatoria y litigación estratégica para asuntos penales y constitucionales complejos en Venezuela.'
    : 'Case theory design, evidentiary articulation, and strategic litigation for complex criminal and constitutional matters in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/estrategia-teoria-del-caso`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/estrategia-teoria-del-caso';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/estrategia-teoria-del-caso';

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

export default async function EstrategiaTeoriaDelCaso({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.landing_estrategia_teoria_caso;
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
            {data?.tag || (isEs ? 'ESTRATEGIA PROCESAL' : 'LITIGATION STRATEGY')}
          </span>
          <h1 className="mb-1-5rem serif">
            {data?.h1 || (isEs ? 'Teoría del Caso y Litigación' : 'Case Theory & Trial Strategy')}
          </h1>
          <p className="hero-subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="content-section mb-3rem">
            {data?.intro?.p1 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.intro.p1}</p>}
            {data?.intro?.p2 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.intro.p2}</p>}
            {data?.intro?.p3 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.intro.p3}</p>}
            {data?.intro?.p4 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.intro.p4}</p>}
          </div>

          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.facts?.title}</h2>
            {data?.facts?.p1 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.facts.p1}</p>}
            {data?.facts?.p2 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.facts.p2}</p>}
            {data?.facts?.p3 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.facts.p3}</p>}
            {data?.facts?.p4 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.facts.p4}</p>}
          </div>

          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.evidence_and_law?.title}</h2>
            {data?.evidence_and_law?.p1 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.evidence_and_law.p1}</p>}
            {data?.evidence_and_law?.p2 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.evidence_and_law.p2}</p>}
          </div>

          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.coherence?.title}</h2>
            {data?.coherence?.p1 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.coherence.p1}</p>}
            {data?.coherence?.p2 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.coherence.p2}</p>}
          </div>

          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.approach?.title}</h2>
            {data?.approach?.p1 && <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>{data.approach.p1}</p>}
            {data?.approach?.p2 && (
              <p className="text-left max-w-100 mb-1-5rem font-bold" style={paragraphStyle}>
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
              {isEs ? 'DIRECCIÓN FORENSE Y LITIGACIÓN' : 'FORENSIC DIRECTION & LITIGATION'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“Una teoría del caso sólida convierte los hechos, la prueba y el Derecho en una estrategia procesal coherente.”'
                : '“A sound case theory turns facts, evidence, and law into one coherent litigation strategy.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados diseña defensas técnicas desde la comprensión integral del caso, la prueba disponible y el objetivo procesal que debe alcanzarse.'
                : 'Mac Consultores Jurídicos & Asociados designs technical defenses through an integrated understanding of the matter, the available evidence, and the procedural objective to be achieved.'}
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
