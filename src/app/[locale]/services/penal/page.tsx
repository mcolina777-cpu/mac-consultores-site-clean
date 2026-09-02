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
    ? 'Penal Económico y Corporativo | Mac Consultores Jurídicos'
    : 'Economic & Corporate Criminal Law | Mac Consultores Jurídicos';

  const description = isEs
    ? 'Defensa penal corporativa, litigación estratégica, recursos y evaluación de riesgos penales económicos para empresas, directivos y accionistas en Venezuela.'
    : 'Corporate criminal defense, strategic litigation, appeals, and economic criminal-risk assessment for companies, executives, and shareholders in Venezuela.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/services/penal`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/penal';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/penal';

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

export default async function ServicesPenal({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.services?.penal;
  const isEs = locale === 'es';

  const paragraphStyle = {
    lineHeight: 1.75,
    fontSize: '1.05rem',
    color: 'var(--text-main, #1f2937)',
  };

  return (
    <main className="page-penal">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {data?.breadcrumb || (isEs ? 'DERECHO PENAL CORPORATIVO' : 'CORPORATE CRIMINAL LAW')}
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
              <h3 className="serif mb-1rem">{data?.areas?.defense?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.defense?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.appeals?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.appeals?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.corporate?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.corporate?.desc}
              </p>
            </article>

            <article className="mb-3rem">
              <h3 className="serif mb-1rem">{data?.areas?.laundering?.title}</h3>
              <p className="text-left max-w-100" style={paragraphStyle}>
                {data?.areas?.laundering?.desc}
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
              {isEs ? 'DEFENSA PENAL CORPORATIVA' : 'CORPORATE CRIMINAL DEFENSE'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La defensa penal corporativa exige anticipación, rigor probatorio y dirección estratégica desde el primer momento.”'
                : '“Corporate criminal defense demands anticipation, evidentiary rigor, and strategic direction from the very first stage.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados acompaña a empresas, directivos y accionistas ante investigaciones y procesos penales que requieren una respuesta jurídica especializada.'
                : 'Mac Consultores Jurídicos & Asociados advises companies, executives, and shareholders in criminal investigations and proceedings requiring specialized legal representation.'}
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
