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
    ? 'Selección de Casos y Viabilidad Procesal | Mac Consultores Jurídicos'
    : 'Case Selection & Procedural Feasibility | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Metodología rigurosa de admisión de casos y evaluación de viabilidad dogmática, fáctica y probatoria en litigios complejos en Venezuela.'
    : 'Rigorous case intake methodology and doctrinal, factual, and evidentiary feasibility evaluation for complex litigation in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/seleccion-de-casos`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/seleccion-de-casos`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/seleccion-de-casos`;

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

export default async function SeleccionDeCasos({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.landing_estrategia_seleccion_casos;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.tag || (isEs ? 'CRITERIO PROCESAL' : 'PROCEDURAL STANDARD')}</span>
          <h1 className="mb-1-5rem serif">{data?.h1 || (isEs ? 'Selección de Casos y Viabilidad' : 'Case Selection & Feasibility')}</h1>
          <p className="hero-subtitle">{data?.subtitle}</p>
        </div>
      </header>

      {/* CONTENIDO EDITORIAL */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          {/* Intro Section */}
          <div className="content-section mb-3rem">
            {data?.intro?.p1 && <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.intro?.p1}</p>}
            {data?.intro?.p2 && <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.intro?.p2}</p>}
            {data?.intro?.p3 && <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.intro?.p3}</p>}
          </div>

          {/* Methodology */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.methodology?.title}</h2>
            {data?.methodology?.p1 && <p className="mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.methodology?.p1}</p>}
            {data?.methodology?.p2 && <p className="mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.methodology?.p2}</p>}
            {data?.methodology?.p3 && <p className="mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.methodology?.p3}</p>}
            {data?.methodology?.p4 && <p className="mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.methodology?.p4}</p>}
          </div>

          {/* Pillars (Evaluación multidimensional) */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.pillars?.title}</h2>
            {data?.pillars?.p1 && <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.pillars?.p1}</p>}
            {data?.pillars?.p2 && <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.pillars?.p2}</p>}
            {data?.pillars?.p3 && <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.pillars?.p3}</p>}
          </div>

          {/* Approach */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.approach?.title}</h2>
            {data?.approach?.p1 && <p className="mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p1}</p>}
            {data?.approach?.p2 && <p className="mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p2}</p>}
            {data?.approach?.p3 && <p className="mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p3}</p>}
            {data?.approach?.p4 && <p className="mb-1-5rem font-bold" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p4}</p>}
          </div>

          {/* CAJA DE CIERRE EDITORIAL ESTANDARIZADA */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'DIRECCIÓN ESTRATÉGICA Y LITIGIO' : 'STRATEGIC DIRECTION & LITIGATION'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“La viabilidad procesal real es la premisa indispensable para una defensa técnica de alto nivel.”' 
                : '“Real procedural feasibility is the indispensable foundation for high-level technical defense.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'Evaluamos rigurosamente cada caso antes de asumir el mandato procesal, garantizando solvencia jurídica, dedicación exclusiva y dirección forense personalizada.'
                : 'We rigorously evaluate each case before accepting legal representation, ensuring legal soundness, dedicated focus, and customized forensic counsel.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={getRoute(locale, "contact")} className="btn btn-primary">
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
