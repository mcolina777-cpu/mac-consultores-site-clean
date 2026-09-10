import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.quienes_somos;
  const title = data?.meta_title;
  const description = data?.meta_description;
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
  const d = dict.quienes_somos;

  return (
    <main className="page-quienes-somos">
      {/* 1. HERO INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{d.hero.eyebrow}</span>
          <h1 className="mb-1-5rem serif">{d.hero.h1}</h1>
          <p className="hero-subtitle">{d.hero.subtitle}</p>
        </div>
      </header>

      {/* 2. HISTORIA INSTITUCIONAL */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{d.history.tag}</span>
              <h2 className="serif section-title mb-1-5rem">{d.history.title}</h2>
              <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.7 }}>
                {d.history.p1}
              </p>
              <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.7 }}>
                {d.history.p2}
              </p>
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

      {/* 3. MODELO BOUTIQUE */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{d.boutique.tag}</span>
            <h2 className="serif section-title mt-1rem">{d.boutique.title}</h2>
          </div>

          <div className="grid-2">
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="card-editorial-text" style={{ lineHeight: 1.7, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                {d.boutique.p1}
              </p>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="card-editorial-text" style={{ lineHeight: 1.7, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                {d.boutique.p2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CRITERIO DE ADMISIÓN SELECTIVA */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{d.intake.tag}</span>
            <h2 className="serif section-title mt-1rem">{d.intake.title}</h2>
          </div>

          <div className="grid-2">
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="card-editorial-text" style={{ lineHeight: 1.7, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                {d.intake.p1}
              </p>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="card-editorial-text" style={{ lineHeight: 1.7, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                {d.intake.p2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MÉTODO DE TRABAJO EN TRES FASES */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{d.method.tag}</span>
            <h2 className="serif section-title mt-1rem">{d.method.title}</h2>
          </div>

          <div className="grid-3">
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="section-tag">{d.method.phase_1_tag}</span>
              <h3 className="serif mb-0-5rem">{d.method.phase_1_title}</h3>
              <p className="text-muted mb-1rem" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
                {d.method.phase_1_subtitle}
              </p>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                {d.method.phase_1_desc}
              </p>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="section-tag">{d.method.phase_2_tag}</span>
              <h3 className="serif mb-0-5rem">{d.method.phase_2_title}</h3>
              <p className="text-muted mb-1rem" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
                {d.method.phase_2_subtitle}
              </p>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                {d.method.phase_2_desc}
              </p>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="section-tag">{d.method.phase_3_tag}</span>
              <h3 className="serif mb-0-5rem">{d.method.phase_3_title}</h3>
              <p className="text-muted mb-1rem" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
                {d.method.phase_3_subtitle}
              </p>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                {d.method.phase_3_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRINCIPIOS DEONTOLÓGICOS (4 PILARES) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{d.principles.tag}</span>
            <h2 className="serif section-title mt-1rem">{d.principles.title}</h2>
            <p className="max-w-800 mx-auto mt-1-5rem serif" style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--color-primary)' }}>
              {d.principles.mission_quote}
            </p>
          </div>

          <div className="grid-2">
            <Link
              href={getRoute(locale, "about.legalidad_diligencia")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.principles.card_1_number}</span>
              <h3 className="serif">{d.principles.card_1_title}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {d.principles.card_1_desc}
              </p>
              <span className="card-link mt-auto">
                {d.principles.card_1_link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "about.independencia_tecnica")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.principles.card_2_number}</span>
              <h3 className="serif">{d.principles.card_2_title}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {d.principles.card_2_desc}
              </p>
              <span className="card-link mt-auto">
                {d.principles.card_2_link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "about.transparencia_buena_fe")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.principles.card_3_number}</span>
              <h3 className="serif">{d.principles.card_3_title}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {d.principles.card_3_desc}
              </p>
              <span className="card-link mt-auto">
                {d.principles.card_3_link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "about.confidencialidad_secreto")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.principles.card_4_number}</span>
              <h3 className="serif">{d.principles.card_4_title}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {d.principles.card_4_desc}
              </p>
              <span className="card-link mt-auto">
                {d.principles.card_4_link}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PUENTE HACIA EL DIRECTOR GENERAL */}
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
              <span className="section-tag">{d.director_bridge.tag}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {d.director_bridge.quote}
              </h2>
              <p className="mb-2rem text-left max-w-100" style={{ lineHeight: 1.7 }}>
                {d.director_bridge.desc}
              </p>
              <Link
                href={getRoute(locale, 'ourCeo')}
                className="btn btn-primary btn-director"
              >
                {d.director_bridge.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DESPLIEGUE INSTITUCIONAL (DERIVACIÓN HACIA SERVICIOS, INTERNACIONAL Y ALIANZAS) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{d.dispatch.tag}</span>
            <h2 className="serif section-title mt-1rem">{d.dispatch.title}</h2>
          </div>

          <div className="grid-3 mb-1rem">
            <Link
              href={getRoute(locale, "services")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.dispatch.card_1_tag}</span>
              <h3 className="serif">{d.dispatch.card_1_title}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {d.dispatch.card_1_desc}
              </p>
              <span className="card-link mt-auto">
                {d.dispatch.card_1_link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "services.consular")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.dispatch.card_2_tag}</span>
              <h3 className="serif">{d.dispatch.card_2_title}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {d.dispatch.card_2_desc}
              </p>
              <span className="card-link mt-auto">
                {d.dispatch.card_2_link}
              </span>
            </Link>

            <Link
              href={getRoute(locale, "services.international_cooperation")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{d.dispatch.card_3_tag}</span>
              <h3 className="serif">{d.dispatch.card_3_title}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {d.dispatch.card_3_desc}
              </p>
              <span className="card-link mt-auto">
                {d.dispatch.card_3_link}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. CIERRE INSTITUCIONAL Y CTA */}
      <section className="bg-soft section-padding-asym">
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

              <Link href={getRoute(locale, 'services')} className="btn btn-secondary">
                {d.closing.btn_secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
