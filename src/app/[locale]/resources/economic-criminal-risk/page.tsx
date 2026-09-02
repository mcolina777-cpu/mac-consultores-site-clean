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
    ? 'Guía Preventiva ante Investigaciones Penales Económicas | Mac Consultores Jurídicos'
    : 'Preventive Guide for Economic Criminal Investigations | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Guía de cinco pasos para identificar, contener y mitigar el riesgo penal corporativo ante investigaciones económicas, regulatorias y judiciales en Venezuela.'
    : 'A five-step guide to identify, contain, and mitigate corporate criminal exposure in economic, regulatory, and judicial investigations in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/resources/economic-criminal-risk`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/resources/economic-criminal-risk';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/resources/economic-criminal-risk';

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

export default async function EconomicCriminalRisk({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.economic_criminal_risk;
  const isEs = locale === 'es';

  const paragraphStyle = {
    lineHeight: 1.75,
    fontSize: '1.05rem',
    color: 'var(--text-main, #1f2937)',
  };

  return (
    <main className="page-economic-criminal-risk">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.breadcrumb || (isEs ? 'RIESGO PENAL CORPORATIVO' : 'CORPORATE CRIMINAL RISK')}
          </span>
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="hero-subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="content-section">
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.intro_p_1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.intro_p_2}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="axial-header mb-2rem">
            <span className="section-tag">{data?.protocol?.tag}</span>
            <h2 className="serif section-title mt-1rem">{data?.protocol?.title}</h2>
          </div>

          <div className="content-section mb-3rem">
            <p className="text-left max-w-100" style={paragraphStyle}>
              {data?.protocol?.intro}
            </p>
          </div>

          <div className="protocol-steps">
            {[1, 2, 3, 4, 5].map((stepNum) => {
              const step = data?.steps?.[`step_${stepNum}` as keyof typeof data.steps];

              if (!step) return null;

              return (
                <article key={stepNum} className="content-section mb-4rem">
                  <span className="section-tag">{step.tag}</span>

                  <h2 className="serif section-title mt-1rem mb-1-5rem">
                    {step.title}
                  </h2>

                  <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
                    {step.intro}
                  </p>

                  <h3 className="serif mb-1rem">{step.subheading}</h3>

                  {step.items?.length > 0 && (
                    <ul className="service-list mb-1-5rem" style={paragraphStyle}>
                      {step.items.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {step.closing && (
                    <p className="text-left max-w-100 mb-2rem" style={paragraphStyle}>
                      {step.closing}
                    </p>
                  )}

                  {step.recommendation && (
                    <aside
                      className="quote-block"
                      style={{
                        border: '1px solid var(--border-color, #e5e7eb)',
                        borderRadius: '8px',
                      }}
                    >
                      <h3 className="serif mb-1rem">{step.recommendation.title}</h3>

                      {step.recommendation.items?.length > 0 && (
                        <ul className="service-list" style={paragraphStyle}>
                          {step.recommendation.items.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </aside>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="axial-header mb-2rem">
            <h2 className="serif section-title">{data?.matrix?.title}</h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>{data?.matrix?.headers?.phase}</th>
                  <th>{data?.matrix?.headers?.actions}</th>
                  <th>{data?.matrix?.headers?.responsible}</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((rowNum) => {
                  const row = data?.matrix?.rows?.[
                    `row_${rowNum}` as keyof typeof data.matrix.rows
                  ];

                  if (!row) return null;

                  return (
                    <tr key={rowNum}>
                      <td>{row.phase}</td>
                      <td>{row.actions}</td>
                      <td>{row.responsible}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {data?.notice && (
            <p
              className="text-left max-w-100 mt-3rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {data.notice}
            </p>
          )}
        </div>
      </section>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {isEs ? 'PREVENCIÓN Y RIESGO CORPORATIVO' : 'PREVENTION & CORPORATE RISK'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La prevención eficaz comienza antes de la contingencia: identificar el riesgo permite preservar la capacidad de decisión de la empresa.”'
                : '“Effective prevention begins before the contingency: identifying risk preserves the company’s capacity to make informed decisions.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados acompaña a empresas y órganos directivos en el diseño de respuestas jurídicas, documentales y procesales ante riesgos penales económicos.'
                : 'Mac Consultores Jurídicos & Asociados supports companies and management bodies in designing legal, documentary, and procedural responses to economic criminal exposure.'}
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
