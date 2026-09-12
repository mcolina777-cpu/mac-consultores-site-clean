import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.empresas_extranjeras?.seo;

  const title = data?.title || (isEs 
    ? 'Servicios jurídicos para empresas extranjeras en Venezuela | Mac Consultores Jurídicos'
    : 'Legal services for foreign companies in Venezuela | Mac Consultores Jurídicos');
  
  const description = data?.description || (isEs
    ? 'Asesoría local en asuntos corporativos, regulatorios, documentales y procesales para empresas extranjeras con intereses en Venezuela.'
    : 'Local legal advice on corporate, regulatory, documentary, and procedural matters for foreign companies with interests in Venezuela.');

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/services/empresas-extranjeras`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/services/empresas-extranjeras`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/services/empresas-extranjeras`;

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

export default async function EmpresasExtranjerasService({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.empresas_extranjeras;

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.breadcrumb}
          </span>
          <h1 className="mb-1-5rem serif">
            {data?.h1}
          </h1>
          <p className="hero-subtitle">
            {data?.subtitle}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: CAPACIDAD TÉCNICA LOCAL PARA EMPRESAS EXTRANJERAS */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.section_1?.title}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.section_1?.p1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.section_1?.p2}
            </p>
          </div>

          {/* BLOQUE 2: SEGURIDAD JURÍDICA Y EFICACIA OPERATIVA */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.section_2?.title}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.section_2?.p1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.section_2?.p2}
            </p>
          </div>

          {/* BLOQUE 3: ÁMBITOS TRANSFRONTERIZOS (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.section_3?.title}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.section_3?.intro}
            </p>
            <ul className="service-list mb-2rem">
              {data?.section_3?.items?.map((item: { label?: string; title?: string; desc: string }, index: number) => (
                <li key={index}>
                  <strong>{item.title || item.label}</strong>{' '}
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CIERRE INSTITUCIONAL */}
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
              {data?.cta?.tag}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {data?.cta?.title}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {data?.cta?.desc}
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
                {data?.cta?.btn_contact}
              </Link>
              <Link href={getRoute(locale, 'services')} className="btn btn-outline">
                {data?.cta?.btn_back}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
