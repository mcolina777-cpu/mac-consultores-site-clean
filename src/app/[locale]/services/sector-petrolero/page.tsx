import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

type Props = {
  params: Promise<{ locale: string }>;
};

type BlockItem = {
  type: string;
  text?: string;
  items?: string[];
};

const ENVIRONMENTAL_SUBSECTIONS = [
  'environmental_facts',
  'corporate_and_individual_liability',
  'occupational_accidents_and_diseases',
  'operators_contractors_and_service_providers',
] as const;

const SCOPE_AREAS = [
  'preventative_criminal_evaluation',
  'incident_legal_assistance',
  'criminal_defense_corporate_and_individual',
  'international_coordination',
  'initial_engagement_assessment',
] as const;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Asesoría Jurídico-Penal en el Sector Petrolero | Mac Consultores Jurídicos & Asociados'
    : 'Criminal Law Advisory for the Oil Sector | Mac Consultores Jurídicos & Asociados';

  const description = isEs
    ? 'Análisis preventivo de contingencias y defensa penal corporativa vinculados con las operaciones petroleras en Venezuela.'
    : 'Preventive assessment of legal contingencies and corporate criminal defense relating to oil operations in Venezuela.';

  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/sector-petrolero';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/oil-sector';
  const canonical = isEs ? esUrl : enUrl;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: esUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
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
  };
}

function renderBlock(block: BlockItem, index: number) {
  if (block.type === 'paragraph' && block.text) {
    return (
      <p
        key={index}
        className="text-left max-w-100 mb-1-5rem"
        style={{
          lineHeight: 1.75,
          fontSize: '1.05rem',
          color: 'var(--text-main, #1f2937)',
        }}
      >
        {block.text}
      </p>
    );
  }
  if (block.type === 'unordered_list' && block.items && block.items.length > 0) {
    return (
      <ul key={index} className="service-list mb-1-5rem">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default async function SectorPetroleroPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.sector_petrolero;

  return (
    <main className="page-consular-detail">
      <header className="page-header header-soft-bg">
        <div className="container">
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          {/* INTRODUCCIÓN */}
          <div className="mb-3rem">
            {data?.intro?.p1 && (
              <p
                className="text-left max-w-100 mb-1-5rem"
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                }}
              >
                {data.intro.p1}
              </p>
            )}
            {data?.intro?.p2 && (
              <p
                className="text-left max-w-100 mb-1-5rem"
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                }}
              >
                {data.intro.p2}
              </p>
            )}
            {data?.intro?.p3 && (
              <p
                className="text-left max-w-100 mb-1-5rem"
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                }}
              >
                {data.intro.p3}
              </p>
            )}
            {data?.intro?.p4 && (
              <p
                className="text-left max-w-100 mb-1-5rem"
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                }}
              >
                {data.intro.p4}
              </p>
            )}
          </div>

          {/* DELITOS AMBIENTALES Y RESPONSABILIDAD PENAL EN LA ACTIVIDAD PETROLERA */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.environmental_crimes_and_liability?.title}
            </h2>

            {data?.environmental_crimes_and_liability?.blocks?.map(renderBlock)}

            <div className="mt-2rem">
              {ENVIRONMENTAL_SUBSECTIONS.map((key) => {
                const sub = data?.environmental_crimes_and_liability?.subsections?.[key];
                if (!sub) return null;
                return (
                  <div key={key} className="content-subsection mb-2-5rem">
                    <h3 className="serif mb-1rem" style={{ fontSize: '1.3rem' }}>
                      {sub.title}
                    </h3>
                    {sub.blocks?.map(renderBlock)}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ALCANCE DE NUESTRA INTERVENCIÓN */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.scope_of_intervention?.title}
            </h2>

            {data?.scope_of_intervention?.blocks && data.scope_of_intervention.blocks.length > 0 && (
              <div className="mb-2rem">
                {data.scope_of_intervention.blocks.map(renderBlock)}
              </div>
            )}

            <div className="mt-2rem">
              {SCOPE_AREAS.map((key) => {
                const area = data?.scope_of_intervention?.areas?.[key];
                if (!area) return null;
                return (
                  <div key={key} className="content-area mb-2-5rem">
                    <h3 className="serif mb-1rem" style={{ fontSize: '1.3rem' }}>
                      {area.title}
                    </h3>
                    {area.blocks?.map(renderBlock)}
                  </div>
                );
              })}
            </div>
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
            <span className="section-tag">{data?.cierre?.tag}</span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {data?.cierre?.quote}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem', textAlign: 'center' }}
            >
              {data?.cierre?.desc}
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
                href={`${getRoute(locale, 'contact')}?materia=petrolero#formulario-contacto`}
                className="btn btn-primary"
              >
                {data?.cierre?.btn_primary}
              </Link>
              <Link href={getRoute(locale, 'home')} className="btn btn-secondary">
                {data?.cierre?.btn_secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
