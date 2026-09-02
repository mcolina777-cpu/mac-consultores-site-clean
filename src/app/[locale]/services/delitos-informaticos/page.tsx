import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Delitos Informáticos y Evidencia Digital | Mac Consultores' : 'Cybercrimes and Digital Evidence | Mac Consultores',
  };
}

export default async function ServicesDelitosInformaticos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.delitos_informaticos;
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
            {data?.breadcrumb || (isEs ? 'DELITOS INFORMÁTICOS' : 'CYBERCRIMES')}
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
            <span className="section-tag">{data?.areas?.tag}</span>
            <h2 className="serif section-title mt-1rem">{data?.areas?.title}</h2>
          </div>

          <div className="content-section mb-3rem">
            <p className="text-left max-w-100" style={paragraphStyle}>
              {data?.areas?.intro}
            </p>
          </div>

          <div className="content-section">
            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.cybercrimes?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.cybercrimes?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.fraud?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.fraud?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.evidence?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.evidence?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.integrity?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.integrity?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.privacy?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.privacy?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.strategy?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.strategy?.desc}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="axial-header mb-2rem">
            <h2 className="serif section-title">{data?.value?.title}</h2>
          </div>

          <div className="content-section">
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.value?.p_1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.value?.p_2}
            </p>
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
              {isEs ? 'DELITOS INFORMÁTICOS Y EVIDENCIA DIGITAL' : 'CYBERCRIMES & DIGITAL EVIDENCE'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“Una respuesta jurídica efectiva ante incidentes tecnológicos exige rigor probatorio, comprensión técnica y estrategia procesal desde el primer momento.”'
                : '“An effective legal response to technological incidents requires evidentiary rigor, technical understanding, and procedural strategy from the outset.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados acompaña a personas y organizaciones ante investigaciones, fraudes electrónicos, incidentes digitales y riesgos vinculados con evidencia tecnológica.'
                : 'Mac Consultores Jurídicos & Asociados advises individuals and organizations in investigations, electronic fraud, digital incidents, and risks involving technological evidence.'}
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
