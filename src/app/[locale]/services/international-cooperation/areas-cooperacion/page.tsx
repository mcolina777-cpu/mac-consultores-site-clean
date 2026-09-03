import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Áreas de Cooperación Jurídica | Mac Consultores Jurídicos & Asociados'
    : 'Areas of Legal Cooperation | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Capacidad jurídica local para asuntos y operaciones con conexión con Venezuela.'
    : 'Local legal capacity for cross-border matters and transactions connected to Venezuela.';

  return {
    title,
    description,
  };
}

export default async function AreasCooperacionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.colaboracion_internacional?.landing_t2;

  return (
    <main className="page-consular-detail">
      <header className="page-header header-soft-bg">
        <div className="container">
          {data?.tag && <span className="section-tag">{data.tag}</span>}
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
              {isEs 
                ? 'Áreas de cooperación jurídica para asuntos y operaciones con conexión con Venezuela.' 
                : 'Areas of legal cooperation for matters and transactions connected to Venezuela.'}
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
                ? 'Ofrecemos capacidad jurídica local en opinión legal, debida diligencia, gestión de riesgo penal corporativo, coordinación documental y acompañamiento estratégico en la jurisdicción venezolana.' 
                : 'We provide local legal capacity in legal opinions, due diligence, corporate criminal risk management, document coordination, and strategic support within the Venezuelan jurisdiction.'}
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
