import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Estructura Contractual para Servicios Legales Internacionales | Mac Consultores Jurídicos'
    : 'Contractual Framework for International Legal Services | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Elementos jurídicos esenciales para estructurar la contratación de servicios legales internacionales y la cooperación profesional en asuntos con conexión en Venezuela.'
    : 'Essential legal elements for structuring international legal services engagements and professional cooperation in matters connected to Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/resources/international-legal-services`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/resources/international-legal-services';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/resources/international-legal-services';

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

export default async function InternationalLegalServices({
  params,
}: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.international_legal_services;
  const isEs = locale === 'es';

  const paragraphStyle = {
    lineHeight: 1.75,
    fontSize: '1.05rem',
    color: 'var(--text-main, #1f2937)',
  };

  return (
    <main className="page-international-legal-services">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.breadcrumb || (isEs ? 'CONTRATACIÓN TRANSFRONTERIZA' : 'CROSS-BORDER CONTRACTS')}
          </span>
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="hero-subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="content-section">
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.intro_p_1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.intro_p_2}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="axial-header mb-2rem">
            <span className="section-tag">{data?.elements?.tag}</span>
            <h2 className="serif section-title mt-1rem">{data?.elements?.title}</h2>
          </div>

          <div className="content-section mb-3rem">
            <p className="text-left max-w-100" style={paragraphStyle}>
              {data?.elements?.intro}
            </p>
          </div>

          <div className="content-section">
            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.elements?.scope?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.elements?.scope?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.elements?.jurisdiction?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.elements?.jurisdiction?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.elements?.fees?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.elements?.fees?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.elements?.confidentiality?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.elements?.confidentiality?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.elements?.conflicts?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.elements?.conflicts?.desc}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="axial-header mb-2rem">
            <h2 className="serif section-title">{data?.value?.title}</h2>
          </div>

          <div className="content-section">
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.value?.p_1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={paragraphStyle}>
              {data?.value?.p_2}
            </p>
          </div>

          {data?.notice && (
            <p
              className="text-left max-w-100 mt-3rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {data.notice}
            </p>
          )}
        </div>
      </section>

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
              {isEs ? 'COOPERACIÓN JURÍDICA INTERNACIONAL' : 'INTERNATIONAL LEGAL COOPERATION'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“Un encargo internacional bien estructurado define responsabilidades, preserva la confidencialidad y permite coordinar jurisdicciones con certeza.”'
                : '“A well-structured international engagement defines responsibilities, preserves confidentiality, and coordinates jurisdictions with certainty.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados acompaña a firmas, empresas y profesionales que requieren integrar conocimiento venezolano dentro de una relación jurídica internacional.'
                : 'Mac Consultores Jurídicos & Asociados supports firms, companies, and professionals that need to incorporate Venezuelan legal knowledge into an international legal relationship.'}
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
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>

              <Link href={`/${locale}`} className="btn btn-secondary">
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
