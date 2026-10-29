import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Poderes y Mandatos | Mac Consultores'
    : 'Powers of Attorney and Mandates | Mac Consultores';
  const description = isEs
    ? 'Revisión y delimitación jurídica de poderes y mandatos para actuaciones específicas en Venezuela.'
    : 'Legal review and scope delimitation of powers of attorney for specific actions in Venezuela.';

  const canonical = isEs
    ? 'https://mac-consultores-site-clean.vercel.app/es/services/consular/poderes-y-mandatos'
    : 'https://mac-consultores-site-clean.vercel.app/en/services/consular/strategic-powers';
  const esUrl = 'https://mac-consultores-site-clean.vercel.app/es/services/consular/poderes-y-mandatos';
  const enUrl = 'https://mac-consultores-site-clean.vercel.app/en/services/consular/strategic-powers';

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: esUrl,
        en: enUrl,
      },
    },
  };
}

export default async function StrategicPowersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.poderes_y_mandatos;
  const isEs = locale === 'es';

  return (
    <main className="page-consular-detail">
      <header className="page-header header-soft-bg">
        <div className="container">
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div
          className="container"
          style={{ maxWidth: '840px', margin: '0 auto' }}
        >
          {/* Intro Section */}
          <div className="mb-3rem">
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.intro?.p1}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.intro?.p2}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.intro?.p3}</p>
          </div>

          {/* When we intervene */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.when_we_intervene?.title}</h2>
            <ul className="service-list">
              {data?.when_we_intervene?.items?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Our approach */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.approach?.title}</h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p1}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p2}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p3}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p4}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>{data?.approach?.p5}</p>
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
              {isEs
                ? 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'
                : 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“Revisión y delimitación de poderes y mandatos para actuar en Venezuela.”'
                : '“Review and scope delimitation of powers of attorney to act in Venezuela.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem', textAlign: 'center' }}
            >
              {isEs
                ? 'Examinamos la suficiencia jurídica de las facultades requeridas para las actuaciones que asume la firma, evaluando su adecuación a las normas venezolanas aplicables.'
                : 'We examine the legal sufficiency of authorities required for matters handled by the firm, reviewing their compliance with applicable Venezuelan statutory standards.'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href={`${getRoute(locale, 'contact')}?materia=consular#formulario-contacto`}
                className="btn btn-primary"
              >
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>
              <Link href={getRoute(locale, 'services.consular')} className="btn btn-secondary">
                {isEs ? '← VOLVER A INTERNACIONAL' : '← BACK TO INTERNATIONAL'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
