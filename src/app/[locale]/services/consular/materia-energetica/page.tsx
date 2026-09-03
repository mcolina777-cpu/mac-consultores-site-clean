import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Materia Energética | Mac Consultores'
    : 'Energy Law & Regulatory Practice | Mac Consultores';
  const description = isEs
    ? 'Asesoría jurídica estratégica en contratación, regulación y estructuras corporativas para el sector energético en Venezuela.'
    : 'Strategic legal advisory in contractual, regulatory, and corporate structures for the Venezuelan energy sector.';

  return {
    title,
    description,
  };
}

export default async function MateriaEnergeticaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.materia_energetica;
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
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.intro?.p1}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.intro?.p2}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.intro?.p3}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.intro?.p4}</p>
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
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.approach?.p1}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.approach?.p2}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.approach?.p3}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.approach?.p4}</p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)', textAlign: 'justify' }}>{data?.approach?.p5}</p>
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
                ? '“Asesoría legal especializada para el sector energético, petrolero y minero vinculada a Venezuela.”'
                : '“Specialized legal advisory for the energy, oil, and mining sector linked to Venezuela.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem', textAlign: 'center' }}
            >
              {isEs
                ? 'Nuestro equipo técnico-jurídico brinda estructuración, representación y cumplimiento normativo integral, garantizando seguridad y eficiencia en sus proyectos de hidrocarburos.'
                : 'Our technical-legal team provides structuring, representation, and comprehensive regulatory compliance, ensuring security and efficiency in your hydrocarbon projects.'}
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
              <Link href={getRoute(locale, 'services.consular')} className="btn btn-secondary">
                {isEs ? '← VOLVER A GESTIÓN CONSULAR' : '← BACK TO CONSULAR SERVICES'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
