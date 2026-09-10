import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.ceo;
  const title = data?.meta_title;
  const description = data?.meta_description;
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/our-ceo`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/our-ceo`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/our-ceo`;

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
          url: '/assets/img/OFICINA_2_1.jpeg',
          width: 1200,
          height: 630,
          alt: 'Dr. Marco A. Colina G. - Director General',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/OFICINA_2_1.jpeg'],
    },
  };
}

export default async function OurCeo({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const d = dict.ceo;

  return (
    <main className="page-our-ceo">
      {/* 1. HERO PROFESIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{d.hero.eyebrow}</span>
          <h1 className="mb-1-5rem serif">{d.hero.h1}</h1>
          <p className="hero-subtitle">{d.hero.subtitle}</p>
        </div>
      </header>

      {/* 2. TRAYECTORIA Y PERFIL PROCESAL */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{d.bio.tag}</span>
              <h2 className="serif section-title mb-1-5rem">
                {d.bio.title}
              </h2>
              <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.7 }}>
                {d.bio.p1}
              </p>
              <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.7 }}>
                {d.bio.p2}
              </p>
              <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.7 }}>
                {d.bio.p3}
              </p>
            </div>
            <div className="img-reveal img-vertical">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_2_1.webp" type="image/webp" />
                <img
                  src="/assets/img/OFICINA_2_1.jpeg"
                  alt="Dr. Marco A. Colina G. - Director General de Mac Consultores"
                  width={1536}
                  height={2048}
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PILARES DE AUTORIDAD Y CREDENCIALES */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{d.pillars.tag}</span>
            <h2 className="serif section-title mt-1rem">
              {d.pillars.title}
            </h2>
          </div>

          <div className="grid-3 mb-1rem">
            <Link 
              href={getRoute(locale, 'ourCeo.ejercicio_forense')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.pillars.card_1.number}</span>
              <h3 className="serif">{d.pillars.card_1.title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {d.pillars.card_1.desc}
              </p>
              <span className="card-link mt-auto">
                {d.pillars.card_1.link}
              </span>
            </Link>

            <Link 
              href={getRoute(locale, 'ourCeo.nivel_academico')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.pillars.card_2.number}</span>
              <h3 className="serif">{d.pillars.card_2.title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {d.pillars.card_2.desc}
              </p>
              <span className="card-link mt-auto">
                {d.pillars.card_2.link}
              </span>
            </Link>

            <Link 
              href={getRoute(locale, 'ourCeo.casacion_tutela')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.pillars.card_3.number}</span>
              <h3 className="serif">{d.pillars.card_3.title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {d.pillars.card_3.desc}
              </p>
              <span className="card-link mt-auto">
                {d.pillars.card_3.link}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DIRECCIÓN TÉCNICA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="card bg-soft text-center p-3rem" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{d.technical_direction.tag}</span>
            <h2 className="serif section-title mt-1rem mb-1-5rem">{d.technical_direction.title}</h2>
            <p className="max-w-800 mx-auto card-editorial-text" style={{ lineHeight: 1.7, fontSize: '1.05rem', color: 'var(--text-color, #1f2937)' }}>
              {d.technical_direction.desc}
            </p>
          </div>
        </div>
      </section>

      {/* 5. COMPROMISO ÉTICO */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_3_1.webp" type="image/webp" />
                <img
                  src="/assets/img/OFICINA_3_1.jpeg"
                  alt="Despacho del Director General de Mac Consultores"
                  width={2752}
                  height={1536}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="vision-text">
              <span className="section-tag">{d.ethics.tag}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {d.ethics.quote}
              </h2>
              <p className="mb-2rem text-left max-w-100" style={{ lineHeight: 1.7 }}>
                {d.ethics.desc}
              </p>
              <Link
                href={getRoute(locale, 'contact')}
                className="btn btn-primary"
              >
                {d.closing.btn_primary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CIERRE INSTITUCIONAL Y CTA */}
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
              {d.closing.tag}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {d.closing.title}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {d.closing.desc}
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
                {d.closing.btn_primary}
              </Link>

              <Link href={getRoute(locale, 'about')} className="btn btn-secondary">
                {d.closing.btn_secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
