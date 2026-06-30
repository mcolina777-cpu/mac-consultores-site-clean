import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Quiénes Somos | Mac Consultores Jurídicos & Asociados',
  description: 'Conozca nuestra trayectoria y equipo.',
  openGraph: {
    title: 'Quiénes Somos | Mac Consultores Jurídicos & Asociados',
    description: 'Conozca nuestra trayectoria y equipo.',
    url: 'https://mac-consultores-site-clean.vercel.app/es/quienes-somos',
    siteName: 'Mac Consultores Jurídicos & Asociados',
    images: [
      {
        url: 'https://mac-consultores-site-clean.vercel.app/assets/img/logo-mac-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo de Mac Consultores Jurídicos & Asociados',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiénes Somos | Mac Consultores Jurídicos & Asociados',
    description: 'Conozca nuestra trayectoria y equipo.',
    images: [
      {
        url: 'https://mac-consultores-site-clean.vercel.app/assets/img/logo-mac-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo de Mac Consultores Jurídicos & Asociados',
      },
    ],
  },
};

export default async function QuienesSomos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-quienes-somos">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb" >{dict?.quienes_somos?.breadcrumb}</span>
          <h1 >{dict?.quienes_somos?.h1}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag" >{dict?.quienes_somos?.history?.tag}</span>
              <h2 className="section-title" >{dict?.quienes_somos?.history?.title}</h2>
              <p >{dict?.quienes_somos?.history?.desc_1}</p>
              <p className="mt-2" >{dict?.quienes_somos?.history?.desc_2}</p>
              
              <article className="card quienes-somos-card">
                <span className="section-tag" >{dict?.quienes_somos?.architecture?.tag}</span>
                <h3 >{dict?.quienes_somos?.architecture?.title}</h3>
                <p >{dict?.quienes_somos?.architecture?.desc}</p>
                <Link href={`/${locale}/quienes-somos-detalle`} className="card-link" >{dict?.quienes_somos?.architecture?.link}</Link>
              </article>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_1.jpg" alt="Sede de Mac Consultores Jurídicos & Asociados" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: ESTRATEGIAS REPRESENTATIVAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag" >{dict?.firma?.strategies?.tag}</span>
            <h2 className="section-title" >{dict?.firma?.strategies?.title}</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="section-tag" >{dict?.firma?.strategies?.case_selection?.tag}</span>
              <h3 >{dict?.firma?.strategies?.case_selection?.title}</h3>
              <p >{dict?.firma?.strategies?.case_selection?.desc}</p>
            </article>

            <article className="card">
              <span className="section-tag" >{dict?.firma?.strategies?.case_theory?.tag}</span>
              <h3 >{dict?.firma?.strategies?.case_theory?.title}</h3>
              <p >{dict?.firma?.strategies?.case_theory?.desc}</p>
              <Link href={`/${locale}/estrategia-teoria-del-caso`} className="news-link">
                <span>{dict?.firma?.strategies?.read_more}</span>
              </Link>
            </article>

            <article className="card">
              <span className="section-tag" >{dict?.firma?.strategies?.representative_scenarios?.tag}</span>
              <h3 >{dict?.firma?.strategies?.representative_scenarios?.title}</h3>
              <p >{dict?.firma?.strategies?.representative_scenarios?.desc}</p>
              <Link href={`/${locale}/estrategia-escenarios-representativos`} className="news-link">
                <span>{dict?.firma?.strategies?.read_more}</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES INSTITUCIONALES */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag" >{dict?.quienes_somos?.values?.tag}</span>
            <h2 className="section-title" >{dict?.quienes_somos?.values?.title}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="icon">⚖️</div>
              <h3 >{dict?.quienes_somos?.values?.card_1?.title}</h3>
              <p >{dict?.quienes_somos?.values?.card_1?.desc}</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3 >{dict?.quienes_somos?.values?.card_2?.title}</h3>
              <p >{dict?.quienes_somos?.values?.card_2?.desc}</p>
            </div>
            <div className="card">
              <div className="icon">🔒</div>
              <h3 >{dict?.quienes_somos?.values?.card_3?.title}</h3>
              <p >{dict?.quienes_somos?.values?.card_3?.desc}</p>
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
                <source srcSet="/assets/img-webp/SALA_DE_REUNIONES_4.webp" type="image/webp" />
                <img src="/assets/img/SALA_DE_REUNIONES_4.jpg" alt="Estrategia Legal" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
            <div className="vision-text">
              <h2 className="serif" style={{ fontSize: '2.2rem', marginBottom: '2rem', lineHeight: 1.1 }} >{dict?.quienes_somos?.mission?.quote}</h2>
              <p >{dict?.quienes_somos?.mission?.desc}</p>
              <Link href={`/${locale}/nuestro-ceo`} className="btn btn-outline btn-director" >{dict?.quienes_somos?.mission?.btn}</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
