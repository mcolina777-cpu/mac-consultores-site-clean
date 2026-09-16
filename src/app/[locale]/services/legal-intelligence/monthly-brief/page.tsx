import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';
import { getDictionary } from '@/i18n/getDictionary';
import B2BContactBox from '@/components/B2BContactBox';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.legal_intelligence?.monthly_brief?.seo;

  const title = data?.title || (isEs
    ? 'Informe Mensual de Riesgo Jurídico y Regulatorio en Venezuela | Mac Legal Intelligence'
    : 'Venezuela Monthly Legal & Regulatory Risk Brief | Mac Legal Intelligence');

  const description = data?.description || (isEs
    ? 'Informe mensual bilingüe con análisis de novedades legislativas, regulatorias, jurisprudencia y consideraciones de compliance y sanciones para empresas con exposición a Venezuela.'
    : 'Bilingual monthly report analyzing legislative and regulatory developments, case law, compliance considerations, and sanctions risk for companies exposed to Venezuela.');

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mac-consultores-site-clean.vercel.app';
  const url = `${BASE_URL}/${locale}/services/legal-intelligence/monthly-brief`;
  const esUrl = `${BASE_URL}/es/services/legal-intelligence/monthly-brief`;
  const enUrl = `${BASE_URL}/en/services/legal-intelligence/monthly-brief`;

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

export default async function MonthlyBriefPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.legal_intelligence?.monthly_brief;

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mac-consultores-site-clean.vercel.app';
  const redirectUrl = `${BASE_URL}/${locale}/services/legal-intelligence/monthly-brief?sent=success#contacto`;

  const breadcrumbHome = dict?.nav?.inicio || (isEs ? 'Inicio' : 'Home');
  const breadcrumbServices = dict?.nav?.servicios || (isEs ? 'Servicios' : 'Services');
  const breadcrumbParent = dict?.legal_intelligence?.breadcrumb?.current || 'Mac Legal Intelligence';
  const breadcrumbCurrent = data?.breadcrumb?.current || (isEs ? 'Informe mensual' : 'Monthly Brief');
  const breadcrumbText = `${breadcrumbHome.toUpperCase()} / ${breadcrumbServices.toUpperCase()} / ${breadcrumbParent.toUpperCase()} / ${breadcrumbCurrent.toUpperCase()}`;

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL Y BREADCRUMB */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {breadcrumbText}
          </span>
          <span className="section-tag mt-0-5rem" style={{ display: 'block', color: 'var(--accent, #990000)' }}>
            {data?.hero?.tag}
          </span>
          <h1 className="mb-1-5rem serif">
            {data?.hero?.h1}
          </h1>
          <p className="hero-subtitle mb-1rem" style={{ fontWeight: 600, color: 'var(--primary, #002845)' }}>
            {data?.hero?.subtitle}
          </p>
          <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.75, fontSize: '1.1rem', color: 'var(--text-main, #1f2937)' }}>
            {data?.hero?.intro}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#contacto" className="btn btn-primary">
              {data?.hero?.primary_cta}
            </a>
            <a href="#modulos" className="btn btn-outline">
              {data?.hero?.secondary_cta}
            </a>
          </div>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>

          {/* BLOQUE 1: PROPUESTA DE VALOR / ENFOQUE */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.value_proposition?.title}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.value_proposition?.paragraph_1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.value_proposition?.paragraph_2}
            </p>
          </div>

          {/* BLOQUE 2: MÓDULOS DE COBERTURA */}
          <div id="modulos" className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.modules?.title}
            </h2>
            {data?.modules?.intro && (
              <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
                {data.modules.intro}
              </p>
            )}
            <div className="grid-2 gap-1-5rem">
              {data?.modules?.items?.map((item: { tag: string; title: string; text: string }, index: number) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-color, #e5e7eb)',
                    borderRadius: '6px',
                    padding: '1.75rem',
                  }}
                >
                  <span className="section-tag">{item.tag}</span>
                  <h3 className="serif mb-0-75rem" style={{ fontSize: '1.15rem', color: 'var(--primary, #002845)' }}>
                    {item.title}
                  </h3>
                  <p className="card-editorial-text" style={{ margin: 0, lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BLOQUE 3: METODOLOGÍA Y CALENDARIO */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.delivery?.title}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.delivery?.paragraph_1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.delivery?.paragraph_2}
            </p>
            {data?.delivery?.note && (
              <p
                className="text-left text-sm max-w-100"
                style={{
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  color: 'var(--text-muted, #4b5563)',
                  paddingLeft: '1rem',
                  borderLeft: '2px solid var(--accent, #990000)',
                }}
              >
                {data.delivery.note}
              </p>
            )}
          </div>

          {/* BLOQUE 4: SANCIONES Y OPERACIONES CON VENEZUELA */}
          <div className="content-section mb-3rem">
            <div
              style={{
                padding: '1.75rem',
                backgroundColor: 'rgba(0, 40, 69, 0.03)',
                borderRadius: '6px',
                borderLeft: '4px solid var(--primary, #002845)',
              }}
            >
              <h2 className="serif section-title mb-1rem" style={{ fontSize: '1.35rem' }}>
                {data?.sanctions?.title}
              </h2>
              <p className="text-left max-w-100" style={{ lineHeight: 1.75, fontSize: '1rem', color: 'var(--text-main, #1f2937)', margin: 0 }}>
                {data?.sanctions?.text}
              </p>
            </div>
          </div>

          {/* BLOQUE 5: FORMULARIO B2B DE SUSCRIPCIÓN */}
          <div className="content-section mb-4rem">
            <B2BContactBox
              data={data?.contactBox}
              locale={locale}
              redirectUrl={redirectUrl}
              id="contacto"
            />
          </div>

          {/* BLOQUE 6: PREGUNTAS FRECUENTES (FAQ) */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {data?.faq?.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data?.faq?.items?.map((item: { question: string; answer: string }, idx: number) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-color, #e5e7eb)',
                    borderRadius: '6px',
                    padding: '1.5rem',
                  }}
                >
                  <h3 className="serif" style={{ fontSize: '1.1rem', color: 'var(--primary, #002845)', marginBottom: '0.5rem' }}>
                    {item.question}
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.65, color: 'var(--text-muted, #4b5563)', fontSize: '0.95rem' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BLOQUE 7: AVISO LEGAL / DISCLAIMER */}
          <div className="content-section mb-3rem">
            <div
              className="scope-disclaimer-box text-sm"
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'rgba(0,0,0,0.02)',
                borderRadius: '6px',
                border: '1px solid var(--border-color, #e5e7eb)',
                borderLeft: '4px solid var(--color-primary, #002845)',
                lineHeight: '1.6',
              }}
            >
              <h4 className="serif font-bold text-primary mb-0-5rem" style={{ fontSize: '1rem' }}>
                {data?.disclaimer?.title}
              </h4>
              <p className="mb-0 text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>
                {data?.disclaimer?.text}
              </p>
            </div>
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
              {data?.closing_card?.tag}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {data?.closing_card?.title}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {data?.closing_card?.text}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a href="#contacto" className="btn btn-primary">
                {data?.closing_card?.primary_cta}
              </a>
              <Link href={getRoute(locale, "services.legal_intelligence")} className="btn btn-outline">
                {data?.closing_card?.secondary_cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
