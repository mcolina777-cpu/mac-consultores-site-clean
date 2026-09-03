import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict?.seo?.colaboracion_internacional?.title,
    description: dict?.seo?.colaboracion_internacional?.description,
  };
}

export default async function ColaboracionInternacional({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.colaboracion_internacional;

  return (
    <main className="page-colaboracion-internacional">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb}</span>
          <h1 className="mb-1-5rem">{data?.h1}</h1>
          <p className="hero-subtitle">{data?.title}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container">
          {/* Bloque de Introducción con Imagen */}
          <div className="grid-split mb-4rem">
            <div className="about-text">
              <span className="section-tag">{data?.intro?.tag}</span>
              <h2 className="serif section-title mb-1-5rem">{data?.intro?.title}</h2>
              <p className="text-left max-w-100 mb-1rem">{data?.intro?.p1}</p>
              <p className="text-left max-w-100 mb-2rem">{data?.intro?.p2}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_DE_ALIANZAS_ESTRATEGICAS.webp" type="image/webp" />
                <img src="/assets/img/SALA_DE_ALIANZAS_ESTRATEGICAS.jpg" alt="Colaboración Internacional" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>

          {/* Encabezado de la Propuesta / Tarjetas */}
          <div className="mt-4rem text-center">
            <span className="section-tag">{data?.proposal?.tag}</span>
            <h2 className="serif section-title mt-1rem mb-3rem">{data?.proposal?.title}</h2>
          </div>
          
          {/* Grid de Tarjetas */}
          <div className="grid-3 mb-5rem">
            {/* TARJETA 1 (T1) */}
            <Link href={`/${locale}/services/international-cooperation/local-counsel`} className="card block-link">
              <span className="section-tag">{data?.proposal?.card_1?.tag || "01"}</span>
              <h3>{data?.proposal?.card_1?.title}</h3>
              <p className="card-editorial-text">
                {data?.proposal?.card_1?.desc}
              </p>
              <span className="card-link">{data?.proposal?.card_1?.link || "VER DETALLES →"}</span>
            </Link>

            {/* TARJETA 2 (T2) */}
            <Link href={`/${locale}/services/international-cooperation/areas-cooperacion`} className="card block-link">
              <span className="section-tag">{data?.proposal?.card_2?.tag || "02"}</span>
              <h3>{data?.proposal?.card_2?.title}</h3>
              <p className="card-editorial-text">
                {data?.proposal?.card_2?.desc}
              </p>
              <span className="card-link">{data?.proposal?.card_2?.link || "VER DETALLES →"}</span>
            </Link>

            {/* TARJETA 3 (T3) */}
            <Link href={`/${locale}/services/international-cooperation/modelo-b2b`} className="card block-link">
              <span className="section-tag">{data?.proposal?.card_3?.tag || "03"}</span>
              <h3>{data?.proposal?.card_3?.title}</h3>
              <p className="card-editorial-text">
                {data?.proposal?.card_3?.desc}
              </p>
              <span className="card-link">{data?.proposal?.card_3?.link || "VER DETALLES →"}</span>
            </Link>
          </div>

          <div className="mt-5rem pb-5rem">
            <div
              className="card text-center"
              style={{
                maxWidth: '840px',
                margin: '0 auto',
              }}
            >
              <h2 className="serif">
                {isEs
                  ? 'Alianzas estratégicas para una expansión jurídica segura en Venezuela.'
                  : 'Strategic partnerships for secure legal expansion in Venezuela.'}
              </h2>

              <p
                className="max-w-800 mx-auto mb-2rem text-muted"
                style={{
                  lineHeight: 1.6,
                  fontSize: '0.95rem',
                  textAlign: 'center',
                }}
              >
                {isEs
                  ? 'Acompañamos a firmas, empresas y organizaciones internacionales en la estructuración de relaciones de cooperación, corresponsalía y representación jurídica con alcance en Venezuela.'
                  : 'We assist firms, companies, and international organizations in structuring cooperation, correspondent, and legal representation relationships with reach in Venezuela.'}
              </p>

              <div className="flex justify-center gap-1rem flex-wrap">
                <Link
                  href={getRoute(locale, 'contact')}
                  className="btn btn-primary"
                >
                  {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
                </Link>

                <Link
                  href={getRoute(locale, 'services.international_cooperation')}
                  className="btn btn-secondary"
                >
                  {isEs
                    ? '← VOLVER A ALIANZAS'
                    : '← BACK TO INTERNATIONAL COOPERATION'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
