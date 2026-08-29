import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = (dict as any)?.quienes_somos;
  const title = data?.meta_title || (isEs ? 'Quiénes Somos | Mac Consultores Jurídicos & Asociados' : 'About Us | Mac Consultores Jurídicos & Asociados');
  const description = data?.meta_description || '';
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
  const data = (dict as any)?.quienes_somos;
  const isEs = locale === 'es';

  return (
    <main className="page-quienes-somos">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb || (isEs ? 'INICIO / LA FIRMA' : 'HOME / THE FIRM')}</span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Arquitectura jurídica para desafíos de alta complejidad' : 'Legal Architecture for High-Complexity Challenges'}
          </h1>
          <p className="hero-subtitle">
            {isEs ? 'Rigor, lealtad y estrategia al servicio de sus intereses' : 'Rigor, loyalty, and strategy serving your interests'}
          </p>
        </div>
      </header>

      {/* BLOQUE 1: TRAYECTORIA INSTITUCIONAL (PROPORCIÓN PERFECTA CON LA FOTO) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{data?.history?.tag || (isEs ? 'NUESTRA HISTORIA' : 'OUR HISTORY')}</span>
              <h2 className="serif section-title mb-1-5rem">
                {isEs ? 'Fundación y Vocación Forense' : 'Foundation and Forensic Vocation'}
              </h2>
              <p className="text-left max-w-100 mb-1rem">{data?.history?.desc_1}</p>
              <p className="text-left max-w-100 mb-2rem">{data?.history?.desc_2}</p>
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

      {/* BLOQUE 2: VALORES Y PILARES INSTITUCIONALES (GRID-3 LIMPIO Y COMPACTO) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3rem">
            <span className="section-tag">{data?.values?.tag || (isEs ? 'PRINCIPIOS RECTORES' : 'GUIDING PRINCIPLES')}</span>
            <h2 className="serif section-title mt-1rem">{data?.values?.title || (isEs ? 'Nuestros Pilares' : 'Our Pillars')}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="section-tag">01</span>
              <h3 className="serif">{data?.values?.card_1?.title || (isEs ? 'Visión Estratégica' : 'Strategic Vision')}</h3>
              <p>{data?.values?.card_1?.desc}</p>
            </div>
            <div className="card">
              <span className="section-tag">02</span>
              <h3 className="serif">{data?.values?.card_2?.title || (isEs ? 'Rigor Técnico' : 'Technical Rigor')}</h3>
              <p>{data?.values?.card_2?.desc}</p>
            </div>
            <div className="card">
              <span className="section-tag">03</span>
              <h3 className="serif">{data?.values?.card_3?.title || (isEs ? 'Reserva Profesional' : 'Professional Secrecy')}</h3>
              <p>{data?.values?.card_3?.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: PROPÓSITO INSTITUCIONAL Y LIDERAZGO FORENSE */}
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
              <span className="section-tag">{isEs ? "LIDERAZGO FORENSE" : "FORENSIC LEADERSHIP"}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {data?.mission?.quote || (isEs ? '“Nuestra misión es transformar desafíos legales en escenarios de seguridad y crecimiento.”' : '“Our mission is to transform legal challenges into security and growth.”')}
              </h2>
              <p className="mb-2rem text-left max-w-100">
                {data?.mission?.desc}
              </p>
              <Link
                href={getRoute(locale, 'ourCeo')}
                className="btn btn-primary"
              >
                {data?.mission?.btn || (isEs ? 'CONOCE A NUESTRO DIRECTOR GENERAL' : 'MEET OUR MANAGING PARTNER')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
