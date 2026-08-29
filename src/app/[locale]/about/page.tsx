import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = (dict as any)?.quienes_somos_detalle || (dict as any)?.quienes_somos;
  const title = data?.title || (isEs ? 'Quiénes Somos | Mac Consultores Jurídicos & Asociados' : 'About Us | Mac Consultores Jurídicos & Asociados');
  const description = (dict as any)?.quienes_somos?.meta_description || '';
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/about`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/about`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/about`;

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
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function QuienesSomos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = (dict as any)?.quienes_somos_detalle;
  const isEs = locale === 'es';

  return (
    <main className="page-quienes-somos">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb || (isEs ? 'INICIO / LA FIRMA / NUESTRA HISTORIA' : 'HOME / THE FIRM / OUR HISTORY')}</span>
          <h1 className="mb-1-5rem serif">
            {data?.h1 || (isEs ? 'Arquitectura jurídica para desafíos de alta complejidad' : 'Legal Architecture for High-Complexity Challenges')}
          </h1>
          <p className="hero-subtitle">
            {isEs ? 'Nuestra Historia, Principios y Rigor Metodológico' : 'Our History, Principles, and Methodological Rigor'}
          </p>
        </div>
      </header>

      {/* BLOQUE 1: NUESTRA HISTORIA Y TRAYECTORIA COMPLETA */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{data?.history?.tag || (isEs ? 'NUESTRA HISTORIA' : 'OUR HISTORY')}</span>
              <h2 className="serif section-title mb-1-5rem">
                {isEs ? 'Fundación y Vocación Forense' : 'Foundation and Forensic Vocation'}
              </h2>
              <p className="text-left max-w-100 mb-1rem">{data?.history?.p1}</p>
              <p className="text-left max-w-100 mb-1rem">{data?.history?.p2}</p>
              <p className="text-left max-w-100 mb-1rem">{data?.history?.p3}</p>
              <p className="text-left max-w-100 mb-2rem">{data?.history?.p4}</p>
            </div>
            
            <div className="img-reveal img-vertical">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1_1.webp" type="image/webp" />
                <img
                  src="/assets/img/OFICINA_1_1.jpeg"
                  alt="Sede de Mac Consultores Jurídicos & Asociados"
                  width={1536}
                  height={2752}
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: MISIÓN Y LOS 4 PRINCIPIOS RECTORES */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{isEs ? 'DEONTOLOGÍA & ÉTICA' : 'DEONTOLOGY & ETHICS'}</span>
            <h2 className="serif section-title mt-1rem">{data?.mission?.title || (isEs ? 'Misión y Valores' : 'Mission & Values')}</h2>
            <p className="max-w-700 mx-auto mt-1-5rem" style={{ fontSize: '1.1rem', lineHeight: 1.7, fontStyle: 'italic' }}>
              “{data?.mission?.p1}”
            </p>
            <p className="max-w-700 mx-auto mt-1rem text-muted" style={{ fontSize: '0.95rem' }}>
              {data?.mission?.p2}
            </p>
          </div>

          <div className="grid-2 gap-2rem" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {data?.mission?.list?.map((item: string, idx: number) => (
              <div key={idx} className="card" style={{ padding: '2rem', background: 'var(--color-bg-card, #ffffff)' }}>
                <span className="serif text-primary" style={{ fontSize: '1.5rem', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                  0{idx + 1}
                </span>
                <div
                  style={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 3: ÁREAS DE PRÁCTICA */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{isEs ? 'CAPACIDAD TÉCNICA' : 'TECHNICAL CAPACITY'}</span>
            <h2 className="serif section-title mt-1rem">{data?.areas?.title || (isEs ? 'Áreas de Práctica' : 'Practice Areas')}</h2>
            <p className="max-w-700 mx-auto mt-1rem text-muted" style={{ fontSize: '0.95rem' }}>
              {data?.areas?.p1}
            </p>
          </div>

          <div className="grid-3 gap-2rem">
            {data?.areas?.list?.map((item: string, idx: number) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <span className="serif text-primary" style={{ fontSize: '1.5rem', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                  {['I', 'II', 'III'][idx] || idx + 1}
                </span>
                <div
                  style={{ fontSize: '0.95rem', lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 4: LO QUE NOS DISTINGUE Y LIDERAZGO FORENSE */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <img
                  src="/assets/img/OFICINA-4-SIN-ICONO.jpeg"
                  alt="Oficina ejecutiva de Mac Consultores Jurídicos & Asociados"
                  width={2752}
                  height={1536}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="vision-text">
              <span className="section-tag">{isEs ? 'MÉTODO & RIGOR' : 'METHOD & RIGOR'}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {data?.distinction?.title || (isEs ? 'Lo Que Nos Distingue' : 'What Sets Us Apart')}
              </h2>
              <p className="mb-1rem text-left max-w-100">{data?.distinction?.p1}</p>
              <p className="mb-1rem text-left max-w-100">{data?.distinction?.p2}</p>
              <p className="mb-1-5rem text-left max-w-100">{data?.distinction?.p3}</p>
              <p className="mb-2rem text-left max-w-100 font-medium">{data?.distinction?.p4}</p>
              
              <Link
                href={getRoute(locale, 'ourCeo')}
                className="btn btn-primary"
              >
                {isEs ? 'CONOCE A NUESTRO DIRECTOR GENERAL' : 'MEET OUR MANAGING PARTNER'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
