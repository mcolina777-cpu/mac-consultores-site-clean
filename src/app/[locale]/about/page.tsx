import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const title = dict?.quienes_somos?.meta_title || (isEs ? 'Quiénes Somos | Mac Consultores Jurídicos & Asociados' : 'About Us | Mac Consultores Jurídicos & Asociados');
  const description = dict?.quienes_somos?.meta_description || '';
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
  const data = dict?.quienes_somos;

  return (
    <main className="page-quienes-somos">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb}</span>
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="hero-subtitle">{data?.history?.title}</p>
        </div>
      </header>

      {/* BLOQUE 1: TRAYECTORIA INSTITUCIONAL + FOTO VERTICAL */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{data?.history?.tag}</span>
              <h2 className="serif section-title mb-1-5rem">{(data?.history as any)?.subtitle || data?.history?.title}</h2>
              <p className="text-left max-w-100 mb-1rem">{data?.history?.desc_1}</p>
              <p className="text-left max-w-100 mb-1rem">{data?.history?.desc_2}</p>
              {(data?.history as any)?.desc_3 && (
                <p className="text-left max-w-100 mb-1-5rem">{(data?.history as any)?.desc_3}</p>
              )}
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

      {/* BLOQUE 2: VALORES Y PILARES INSTITUCIONALES (GRID-3 TIPOGRÁFICO LIMPIO) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3rem">
            <span className="section-tag">{data?.values?.tag}</span>
            <h2 className="serif section-title mt-1rem">{data?.values?.title}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="section-tag">01</span>
              <h3>{data?.values?.card_1?.title}</h3>
              <p>{data?.values?.card_1?.desc}</p>
            </div>
            <div className="card">
              <span className="section-tag">02</span>
              <h3>{data?.values?.card_2?.title}</h3>
              <p>{data?.values?.card_2?.desc}</p>
            </div>
            <div className="card">
              <span className="section-tag">03</span>
              <h3>{data?.values?.card_3?.title}</h3>
              <p>{data?.values?.card_3?.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: PROPÓSITO INSTITUCIONAL Y LIDERAZGO */}
      <section className="section-padding-asym">
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
              <span className="section-tag">{(data?.mission as any)?.tag || "LIDERAZGO FORENSE"}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {data?.mission?.quote}
              </h2>
              <p className="mb-2rem text-left max-w-100">{data?.mission?.desc}</p>
              <Link href={getRoute(locale, 'ourCeo')} className="btn btn-primary">
                {data?.mission?.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
