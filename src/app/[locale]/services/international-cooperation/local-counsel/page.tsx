import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Local Counsel for Venezuela | Mac Consultores Jurídicos & Asociados'
    : 'Local Counsel for Venezuela | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Un punto de apoyo jurídico dentro de Venezuela para firmas y corporaciones internacionales.'
    : 'On-the-ground Venezuelan legal support for international law firms and corporate legal departments.';

  return {
    title,
    description,
  };
}

export default async function LocalCounselPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.colaboracion_internacional?.landing_t1;

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
          {/* Intro Section */}
          <div className="mb-3rem">
            {data?.intro?.p1 && (
              <p 
                className="text-left max-w-100 mb-1-5rem" 
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                  textAlign: 'justify',
                }}
              >
                {data?.intro?.p1}
              </p>
            )}
            {data?.intro?.p2 && (
              <p 
                className="text-left max-w-100 mb-1-5rem" 
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                  textAlign: 'justify',
                }}
              >
                {data?.intro?.p2}
              </p>
            )}
            {data?.intro?.p3 && (
              <p 
                className="text-left max-w-100 mb-1-5rem" 
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                  textAlign: 'justify',
                }}
              >
                {data?.intro?.p3}
              </p>
            )}
            {data?.intro?.p4 && (
              <p 
                className="text-left max-w-100 mb-2rem" 
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                  textAlign: 'justify',
                }}
              >
                {data?.intro?.p4}
              </p>
            )}
          </div>

          {/* When we intervene */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.when_we_intervene?.title}</h2>
            <ul className="service-list mb-2rem">
              {data?.when_we_intervene?.items?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Our approach */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.approach?.title}</h2>
            {data?.approach?.p1 && (
              <p 
                className="text-left max-w-100 mb-1-5rem" 
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                  textAlign: 'justify',
                }}
              >
                {data?.approach?.p1}
              </p>
            )}
            {data?.approach?.p2 && (
              <p 
                className="text-left max-w-100 mb-1-5rem" 
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                  textAlign: 'justify',
                }}
              >
                {data?.approach?.p2}
              </p>
            )}
            {data?.approach?.p3 && (
              <p 
                className="text-left max-w-100 mb-1-5rem" 
                style={{
                  lineHeight: 1.75,
                  fontSize: '1.05rem',
                  color: 'var(--text-main, #1f2937)',
                  textAlign: 'justify',
                }}
              >
                {data?.approach?.p3}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Cierre editorial estándar */}
      <section className="section-padding-asym mb-4rem">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs ? 'Construyamos una alianza estratégica para actuar en Venezuela.' : 'Let us build a strategic partnership to act in Venezuela.'}
            </h3>
            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{
                lineHeight: 1.6,
                fontSize: '0.95rem',
                textAlign: 'center',
              }}
            >
              {isEs 
                ? 'Nuestro equipo está disponible para conocer sus necesidades y estructurar el respaldo jurídico local que su firma o corporación requiere.' 
                : 'Our team is available to understand your needs and structure the local legal support your firm or corporation requires.'}
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
              <Link href={getRoute(locale, 'services.international_cooperation')} className="btn btn-outline">
                {isEs ? '← VOLVER A ALIANZAS' : '← BACK TO INTERNATIONAL COOPERATION'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
