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
    ? 'Checklist Documental para la Defensa Penal Corporativa | Mac Consultores Jurídicos'
    : 'Documentary Checklist for Corporate Criminal Defense | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Guía para recopilar, preservar y organizar evidencia corporativa, comercial, financiera y digital relevante para la defensa penal de empresas en Venezuela.'
    : 'A guide to collecting, preserving, and organizing corporate, commercial, financial, and digital evidence relevant to corporate criminal defense in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/resources/defense-documentation`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/resources/defense-documentation';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/resources/defense-documentation';

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

export default async function DefenseDocumentation({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.defense_documentation;
  const isEs = locale === 'es';

  const paragraphStyle = {
    lineHeight: 1.75,
    fontSize: '1.05rem',
    color: 'var(--text-main, #1f2937)',
  };

  return (
    <main className="page-defense-documentation">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.breadcrumb || (isEs ? 'AUDITORÍA PROBATORIA' : 'EVIDENTIARY AUDIT')}
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
              <h3 className="serif mb-1rem">{data?.areas?.corporate?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.corporate?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.commercial?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.commercial?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.financial?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.financial?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.digital?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.digital?.desc}
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
              {isEs ? 'DOCUMENTACIÓN Y DEFENSA CORPORATIVA' : 'DOCUMENTATION & CORPORATE DEFENSE'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La defensa técnica comienza por preservar la información que permitirá demostrar los hechos con rigor y trazabilidad.”'
                : '“Technical defense begins by preserving the information that will demonstrate the facts with rigor and traceability.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados orienta a empresas y órganos directivos en la organización, custodia y valoración jurídica de la documentación relevante para su defensa.'
                : 'Mac Consultores Jurídicos & Asociados advises companies and management bodies on the organization, custody, and legal assessment of documentation relevant to their defense.'}
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
