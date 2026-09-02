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

  return (
    <main className="page-article">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb}</span>
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="hero-subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          <div className="content-section mb-3rem">
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.intro_p_1}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.intro_p_2}
            </p>
          </div>

          <div className="content-section mb-3rem">
            <span className="section-tag">{data?.areas?.tag}</span>
            <h2 className="serif section-title mb-1-5rem">{data?.areas?.title}</h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.areas?.intro}
            </p>

            <h3 className="serif mb-1rem">{data?.areas?.cybercrimes?.title}</h3>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.areas?.cybercrimes?.desc}
            </p>

            <h3 className="serif mb-1rem">{data?.areas?.fraud?.title}</h3>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.areas?.fraud?.desc}
            </p>

            <h3 className="serif mb-1rem">{data?.areas?.evidence?.title}</h3>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.areas?.evidence?.desc}
            </p>

            <h3 className="serif mb-1rem">{data?.areas?.integrity?.title}</h3>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.areas?.integrity?.desc}
            </p>

            <h3 className="serif mb-1rem">{data?.areas?.privacy?.title}</h3>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.areas?.privacy?.desc}
            </p>

            <h3 className="serif mb-1rem">{data?.areas?.strategy?.title}</h3>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.areas?.strategy?.desc}
            </p>
          </div>

          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.value?.title}</h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.value?.p_1}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.value?.p_2}
            </p>
            <p
              className="text-left max-w-100 mb-2rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {data?.notice}
            </p>
          </div>

          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {locale === 'es' ? 'EVALUACIÓN INICIAL' : 'INITIAL ASSESSMENT'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {data?.cta?.title}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {data?.cta?.desc}
            </p>

            <Link href={getRoute(locale, "contact")} className="btn btn-primary">
              {data?.cta?.link}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
