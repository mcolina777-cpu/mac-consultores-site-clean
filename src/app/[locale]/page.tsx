import React from 'react';
export const revalidate = 3600;
import Image from 'next/image';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);

  const fallbackTitleEs =
    'Mac Consultores Jurídicos | Penal Corporativo en Venezuela';
  const fallbackTitleEn =
    'MAC Consultores | Corporate Criminal Law in Venezuela';

  const fallbackDescEs =
    'Firma boutique especializada en derecho penal corporativo, litigio complejo y consultoría jurídica estratégica en Venezuela para empresas y firmas globales.';
  const fallbackDescEn =
    'Boutique law firm specializing in corporate criminal law, complex litigation, and strategic legal counsel in Venezuela for corporations and global firms.';

  const title =
    dict?.home?.meta_title || (isEs ? fallbackTitleEs : fallbackTitleEn);

  const description =
    dict?.home?.meta_description || (isEs ? fallbackDescEs : fallbackDescEn);

  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL ||
    'https://mac-consultores-site-clean.vercel.app';

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
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
type Props = {
  params: Promise<{ locale: string }>
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const blogRoute = getRoute(locale, 'blog');

  return (
    <main>
      <Hero dict={dict.hero} locale={locale} />

      {/* SECCIÓN FIRMA (PRESENTACIÓN EJECUTIVA) */}
      <section className="bg-soft section-firma">
        <div className="container">
          <div className="grid-split home-about-split">
            <div className="img-reveal-wrapper">
              <div 
                className="img-reveal img-vertical" 
                style={{ aspectRatio: "9/16", width: "100%", overflow: "hidden", position: "relative" }}
              >
                <Image 
                  src="/assets/img/MAC CONSULTORES JURIDICOS & ASOCIADOS- Mac-Consultores - Lobby 1.jpeg" 
                  alt={dict?.home?.alt_lobby || "Lobby principal de Mac Consultores Jurídicos & Asociados"}
                  width={1080} 
                  height={1920} 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="our-firm-img-vertical"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
            <div className="about-text">
              <span className="section-tag">{dict.about.tag}</span>
              <h2 className="section-title">{dict.about.title}</h2>
              <p>{dict.about.desc_1}</p>
              <p>{dict.about.desc_2}</p>
              <div className="mt-1-5rem">
                <Link href={getRoute(locale, "about")} className="btn btn-outline">
                  {dict.about.btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUATRO PILARES EDITORIALES (DISTRIBUIDOR CENTRAL) */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{dict.home.pillars.tag}</span>
            <h2 className="serif section-title mt-1rem">{dict.home.pillars.title}</h2>
          </div>
          <div className="grid-2 mb-3rem">
            {/* PILAR 01: FIRMA */}
            <Link 
              href={getRoute(locale, "about")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict.home.pillars.firm.tag}</span>
              <h3 className="serif">{dict.home.pillars.firm.title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {dict.home.pillars.firm.desc}
              </p>
              <span className="card-link mt-auto">
                {dict.home.pillars.firm.link}
              </span>
            </Link>

            {/* PILAR 02: SERVICIOS */}
            <Link 
              href={getRoute(locale, "services")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict.home.pillars.services.tag}</span>
              <h3 className="serif">{dict.home.pillars.services.title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {dict.home.pillars.services.desc}
              </p>
              <span className="card-link mt-auto">
                {dict.home.pillars.services.link}
              </span>
            </Link>

            {/* PILAR 03: INTERNACIONAL */}
            <Link 
              href={getRoute(locale, "services.consular")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict.home.pillars.international.tag}</span>
              <h3 className="serif">{dict.home.pillars.international.title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {dict.home.pillars.international.desc}
              </p>
              <span className="card-link mt-auto">
                {dict.home.pillars.international.link}
              </span>
            </Link>

            {/* PILAR 04: ALIANZAS */}
            <Link 
              href={getRoute(locale, "services.international_cooperation")}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict.home.pillars.alliances.tag}</span>
              <h3 className="serif">{dict.home.pillars.alliances.title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {dict.home.pillars.alliances.desc}
              </p>
              <span className="card-link mt-auto">
                {dict.home.pillars.alliances.link}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PUBLICACIONES PROPIAS (CRITERIO FORENSE Y ANÁLISIS) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{dict.home.publications.tag}</span>
            <h2 className="serif section-title mt-1rem">{dict.home.publications.title}</h2>
          </div>
          <div className="grid-3 mb-3rem">
            {/* ARTÍCULO 01 */}
            <Link 
              href={`${blogRoute}/criminalidad-economica`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict.home.publications.article_1_tag}</span>
              <h3 className="serif">{dict.home.publications.article_1_title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {dict.home.publications.article_1_desc}
              </p>
              <span className="card-link mt-auto">
                {dict.home.publications.read_more}
              </span>
            </Link>

            {/* ARTÍCULO 02 */}
            <Link 
              href={`${blogRoute}/regimen-poderes-cpc-copp`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict.home.publications.article_2_tag}</span>
              <h3 className="serif">{dict.home.publications.article_2_title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {dict.home.publications.article_2_desc}
              </p>
              <span className="card-link mt-auto">
                {dict.home.publications.read_more}
              </span>
            </Link>

            {/* ARTÍCULO 03 */}
            <Link 
              href={`${blogRoute}/amparo-garantia-vital`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict.home.publications.article_3_tag}</span>
              <h3 className="serif">{dict.home.publications.article_3_title}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {dict.home.publications.article_3_desc}
              </p>
              <span className="card-link mt-auto">
                {dict.home.publications.read_more}
              </span>
            </Link>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href={blogRoute} className="btn btn-outline">
              {dict.home.publications.view_all}
            </Link>
          </div>
        </div>
      </section>

      {/* CIERRE INSTITUCIONAL */}
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
              {dict.home.closing.tag}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {dict.home.closing.quote}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {dict.home.closing.desc}
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
                {dict.home.closing.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}