import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const seo = dict?.seo?.consular_diplomatic;

  const title = seo?.title || (isEs
    ? 'Asesoría jurídica a embajadas y consulados en Venezuela | Mac Consultores'
    : 'Legal advice for embassies and consulates in Venezuela | Mac Consultores');

  const description = seo?.description || (isEs
    ? 'Asesoramiento institucional a embajadas y consulados en Venezuela. Dictámenes de derecho venezolano y asistencia jurídica penal y constitucional.'
    : 'Institutional legal advice for embassies and consulates in Venezuela. Venezuelan law opinions and criminal and constitutional legal support.');

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/services/consular/diplomatic-advisory`;
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular/diplomatic-advisory';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular/diplomatic-advisory';

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
      title: seo?.og_title || title,
      description: seo?.og_description || description,
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
      title: seo?.og_title || title,
      description: seo?.og_description || description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function DiplomaticAdvisoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular_diplomatic;
  const sec = data?.sections;

  const contactUrl = `${getRoute(locale, 'contact')}?materia=internacional#formulario-contacto`;
  const returnUrl = getRoute(locale, 'services.consular');

  return (
    <main className="page-consular-detail">
      {/* Encabezado principal */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <div className="layout-reading">
            <h1 className="mb-1-5rem serif">{data?.h1}</h1>
            <p className="hero-subtitle mb-1-5rem">{data?.lead}</p>
            <p className="text-left mb-2rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.introduction}
            </p>
            <div className="btn-group" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href={contactUrl} className="btn btn-primary">
                {data?.cta}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Secciones editoriales */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="layout-reading">

            {/* 1. Objeto y alcance del asesoramiento */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.scope?.title}</h2>
              {sec?.scope?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
              <ul className="service-list mb-2rem">
                {sec?.scope?.items?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {sec?.scope?.closing_paragraph && (
                <p className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {sec.scope.closing_paragraph}
                </p>
              )}
            </article>

            {/* 2. Asistencia técnico-jurídica en materia de protección consular */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.consular_support?.title}</h2>
              {sec?.consular_support?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
              <ul className="service-list mb-2rem">
                {sec?.consular_support?.items?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {sec?.consular_support?.closing_paragraph && (
                <p className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {sec.consular_support.closing_paragraph}
                </p>
              )}
            </article>

            {/* 3. Fundamento jurídico */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.legal_framework?.title}</h2>

              {/* Subapartado 1: Marco diplomático y consular */}
              <div className="mb-2-5rem">
                <h3 className="serif mb-1rem" style={{ fontSize: '1.25rem', color: 'var(--primary, #0c1a2c)' }}>
                  {sec?.legal_framework?.diplomatic_consular?.title}
                </h3>
                {sec?.legal_framework?.diplomatic_consular?.paragraphs?.map((p: string, i: number) => (
                  <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Subapartado 2: Garantías consulares y ordenamiento constitucional venezolano */}
              <div className="mb-1-5rem">
                <h3 className="serif mb-1rem" style={{ fontSize: '1.25rem', color: 'var(--primary, #0c1a2c)' }}>
                  {sec?.legal_framework?.constitutional?.title}
                </h3>
                {sec?.legal_framework?.constitutional?.paragraphs?.map((p: string, i: number) => (
                  <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                    {p}
                  </p>
                ))}
                <ul className="service-list mb-2rem">
                  {sec?.legal_framework?.constitutional?.items?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {sec?.legal_framework?.constitutional?.paragraphs_post?.map((p: string, i: number) => (
                  <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                    {p}
                  </p>
                ))}
              </div>
            </article>

            {/* 4. Evaluación de incidencias y alternativas de actuación jurídica */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.remedies?.title}</h2>
              {sec?.remedies?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
              <ul className="service-list mb-2rem">
                {sec?.remedies?.items?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {sec?.remedies?.paragraphs_post?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
            </article>

            {/* 5. Dictámenes e informes jurídicos */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.deliverables?.title}</h2>
              {sec?.deliverables?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
              <ul className="service-list mb-2rem">
                {sec?.deliverables?.items?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {sec?.deliverables?.paragraphs_post?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
            </article>

            {/* 6. Poderes, mandatos y documentación otorgada en el exterior */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.documents?.title}</h2>
              {sec?.documents?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
            </article>

            {/* 7. Relación profesional y reserva de la información */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.confidentiality?.title}</h2>
              {sec?.confidentiality?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
            </article>

            {/* 8. Independencia y condiciones del servicio */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.independence?.title}</h2>
              {sec?.independence?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
            </article>

            {/* 9. Solicitudes institucionales */}
            <article className="content-section mb-3rem">
              <h2 className="serif section-title mb-1-5rem">{sec?.enquiries?.title}</h2>
              {sec?.enquiries?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-left mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                  {p}
                </p>
              ))}
            </article>

          </div>
        </div>
      </section>

      {/* Cierre institucional */}
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
              MAC CONSULTORES JURÍDICOS &amp; ASOCIADOS
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {sec?.enquiries?.title}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {data?.enquiry_notice}
            </p>

            <div
              className="btn-group"
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href={contactUrl}
                className="btn btn-primary"
              >
                {data?.cta}
              </Link>
              <Link
                href={returnUrl}
                className="btn btn-secondary btn-compact"
              >
                {data?.back}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
