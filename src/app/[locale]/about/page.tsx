import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Quiénes Somos | Mac Consultores Jurídicos & Asociados'
    : 'About Us | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Conoce la historia, valores y el equipo de profesionales detrás de Mac Consultores Jurídicos & Asociados. Dedicados al ejercicio impecable del Derecho en Venezuela.'
    : 'Learn about the history, values, and the team of professionals behind Mac Consultores Jurídicos & Asociados. Dedicated to the impeccable practice of Law in Venezuela.';

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

  return (
    <main className="page-quienes-somos">
      {/* BLOQUE 1: LA FIRMA / HISTORIA + FOTO */}
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            {dict?.quienes_somos?.breadcrumb}
          </span>
          <h1>{dict?.quienes_somos?.h1}</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="grid-split">
            {/* Columna izquierda: historia + bloque arquitectura */}
            <div className="about-content">
              <span className="section-tag">
                {dict?.quienes_somos?.history?.tag}
              </span>
              <h2 className="section-title">
                {dict?.quienes_somos?.history?.title}
              </h2>

              {/* Historia compactada en bloques cortos */}
              <p>{dict?.quienes_somos?.history?.desc_1}</p>
              <p className="mt-2">{dict?.quienes_somos?.history?.desc_2}</p>

              {/* Bloque arquitectura destacado como eje de la firma */}
              <article className="card quienes-somos-card mt-2rem">
                <span className="section-tag">
                  {dict?.quienes_somos?.architecture?.tag}
                </span>
                <h3>{dict?.quienes_somos?.architecture?.title}</h3>
                <p>{dict?.quienes_somos?.architecture?.desc}</p>
                <Link
                  href={getRoute(locale, 'quienesSomosDetalle')}
                  className="card-link"
                >
                  {dict?.quienes_somos?.architecture?.link}
                </Link>
              </article>
            </div>

            {/* Columna derecha: imagen de la firma (OFICINA_3_vertical) */}
            <div className="img-reveal img-vertical">
              <picture>
                <source
                  srcSet="/assets/img-webp/OFICINA_3_vertical.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/OFICINA_3_vertical.jpg"
                  alt="Sede de Mac Consultores Jurídicos & Asociados"
                  width={864}
                  height={1536}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: ARQUITECTURA + ESTRATEGIAS REPRESENTATIVAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">
              {dict?.firma?.strategies?.tag}
            </span>
            <h2 className="section-title">
              {dict?.firma?.strategies?.title}
            </h2>
          </div>

          {/* Tres tarjetas de estrategias clave de la firma */}
          <div className="grid-3">
            <article className="card">
              <span className="section-tag">
                {dict?.firma?.strategies?.case_selection?.tag}
              </span>
              <h3>{dict?.firma?.strategies?.case_selection?.title}</h3>
              <p>{dict?.firma?.strategies?.case_selection?.desc}</p>
            </article>

            <article className="card">
              <span className="section-tag">
                {dict?.firma?.strategies?.case_theory?.tag}
              </span>
              <h3>{dict?.firma?.strategies?.case_theory?.title}</h3>
              <p>{dict?.firma?.strategies?.case_theory?.desc}</p>
              <Link
                href={getRoute(locale, 'estrategiaTeoriaDelCaso')}
                className="news-link"
              >
                <span>{dict?.firma?.strategies?.read_more}</span>
              </Link>
            </article>

            <article className="card">
              <span className="section-tag">
                {dict?.firma?.strategies?.representative_scenarios?.tag}
              </span>
              <h3>{dict?.firma?.strategies?.representative_scenarios?.title}</h3>
              <p>{dict?.firma?.strategies?.representative_scenarios?.desc}</p>
              <Link
                href={getRoute(locale, 'estrategiaEscenariosRepresentativos')}
                className="news-link"
              >
                <span>{dict?.firma?.strategies?.read_more}</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: VALORES INSTITUCIONALES Y MISIÓN / VISIÓN */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">
              {dict?.quienes_somos?.values?.tag}
            </span>
            <h2 className="section-title">
              {dict?.quienes_somos?.values?.title}
            </h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="icon">⚖️</div>
              <h3>{dict?.quienes_somos?.values?.card_1?.title}</h3>
              <p>{dict?.quienes_somos?.values?.card_1?.desc}</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3>{dict?.quienes_somos?.values?.card_2?.title}</h3>
              <p>{dict?.quienes_somos?.values?.card_2?.desc}</p>
            </div>
            <div className="card">
              <div className="icon">🔒</div>
              <h3>{dict?.quienes_somos?.values?.card_3?.title}</h3>
              <p>{dict?.quienes_somos?.values?.card_3?.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section>
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <source
                  srcSet="/assets/img-webp/SALA_DE_REUNIONES_4.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/SALA_DE_REUNIONES_4.jpg"
                  alt="Estrategia Legal"
                  width={2752}
                  height={1536}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="vision-text">
              <h2 className="serif heading-lg mb-2rem line-height-1-1">
                {dict?.quienes_somos?.mission?.quote}
              </h2>
              <p>{dict?.quienes_somos?.mission?.desc}</p>
              <Link
                href={getRoute(locale, 'ourCeo')}
                className="btn btn-outline btn-director"
              >
                {dict?.quienes_somos?.mission?.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
