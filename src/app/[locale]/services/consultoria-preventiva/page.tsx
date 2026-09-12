import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Consultoría jurídica preventiva | Mac Consultores Jurídicos'
    : 'Preventive legal consulting | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Evaluación de riesgos jurídicos, compliance, gobernanza corporativa y revisión contractual para empresas y directivos en Venezuela.'
    : 'Legal-risk assessment, compliance, corporate governance, and contract review for companies and executives in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/services/consultoria-preventiva`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consultoria-preventiva';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consultoria-preventiva';

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

export default async function ServicesConsultoriaPreventiva({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consultoria_preventiva;
  const isEs = locale === 'es';

  const paragraphStyle = {
    lineHeight: 1.75,
    fontSize: '1.05rem',
    color: 'var(--text-main, #1f2937)',
  };

  return (
    <main className="page-article">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.breadcrumb || (isEs ? 'CONSULTORÍA JURÍDICA PREVENTIVA' : 'PREVENTIVE LEGAL CONSULTING')}
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
            <span className="section-tag">{data?.areas?.tag}</span>
            <h2 className="serif section-title mt-1rem">{data?.areas?.title}</h2>
          </div>

          <div className="content-section mb-3rem">
            <p className="text-left max-w-100" style={paragraphStyle}>
              {data?.areas?.intro}
            </p>
          </div>

          <div className="content-section">
            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.risk_management?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.risk_management?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.compliance?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.compliance?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.penal_risk?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.penal_risk?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.contractual?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.contractual?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.governance?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.governance?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.operations?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.operations?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.methodology?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.methodology?.desc}
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
              {isEs ? 'CONSULTORÍA JURÍDICA PREVENTIVA' : 'PREVENTIVE LEGAL CONSULTING'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? 'La prevención jurídica comienza con la revisión de los hechos, los riesgos y las decisiones disponibles.'
                : 'Legal prevention begins with reviewing the facts, risks, and available decisions.'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'MAC Consultores Jurídicos & Asociados asesora a empresas, directivos y particulares en la evaluación de riesgos, la revisión de decisiones y la preparación de medidas jurídicas preventivas.'
                : 'MAC Consultores Jurídicos & Asociados advises companies, executives, and individuals on risk assessment, decision review, and the preparation of preventive legal measures.'}
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

              <Link href={getRoute(locale, 'services')} className="btn btn-secondary">
                {isEs ? '← VOLVER A SERVICIOS' : '← BACK TO SERVICES'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
