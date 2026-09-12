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
    ? 'Derecho constitucional | Mac Consultores Jurídicos'
    : 'Constitutional law | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Asesoría y representación en asuntos de derechos constitucionales, garantías procesales y vías de protección aplicables en Venezuela.'
    : 'Advice and representation in matters involving constitutional rights, procedural safeguards, and available legal remedies in Venezuela.';

  const url = isEs
    ? 'https://mac-consultores-site-clean.vercel.app/es/services/constitucional'
    : 'https://mac-consultores-site-clean.vercel.app/en/services/constitutional';
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/constitucional';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/constitutional';

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

export default async function ServicesConstitucional({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.services?.constitucional;
  const isEs = locale === 'es';

  const paragraphStyle = {
    lineHeight: 1.75,
    fontSize: '1.05rem',
    color: 'var(--text-main, #1f2937)',
  };

  return (
    <main className="page-constitucional">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.breadcrumb || (isEs ? 'TUTELA CONSTITUCIONAL' : 'CONSTITUTIONAL PROTECTION')}
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
              <h3 className="serif mb-1rem">{data?.areas?.rights?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.rights?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.amparo?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.amparo?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.habeas?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.habeas?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.due_process?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.due_process?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.review?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.review?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.consulting?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.consulting?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.strategy?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.strategy?.desc}
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
              {isEs ? 'DERECHO CONSTITUCIONAL' : 'CONSTITUTIONAL LAW'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? 'La protección de los derechos exige identificar los hechos y la vía jurídica aplicable.'
                : 'The protection of rights requires identifying the facts and the applicable legal avenue.'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'MAC Consultores Jurídicos & Asociados asesora a personas y empresas en asuntos que involucran derechos constitucionales, garantías procesales y decisiones que puedan requerir análisis especializado.'
                : 'MAC Consultores Jurídicos & Asociados advises individuals and companies on matters involving constitutional rights, procedural safeguards, and decisions that may require specialized analysis.'}
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
