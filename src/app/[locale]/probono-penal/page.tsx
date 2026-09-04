import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.pro_bono_penal?.seo_title,
    description: dict?.pro_bono_penal?.seo_desc,
    alternates: {
      canonical: `https://macconsultoresjuridicos.com/${locale}/probono-penal`,
    },
  };
}

export default async function ProBonoPenal({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.pro_bono_penal;
  const isEs = locale === 'es';

  return (
    <main className="page-probono">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{data?.tag}</span>
          <h1 className="serif">{data?.h1}</h1>
          <p className="hero-subtitle text-muted mt-1rem">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid-start max-w-800 mx-auto">
            
            {/* Columna Izquierda: Información Institucional y Enlace al Reglamento */}
            <div className="contact-info">
              <p className="text-lg mb-1-5rem font-semibold text-primary">
                {data?.intro}
              </p>
              
              <div className="layout-reading mb-2-5rem">
                <p className="mb-1-5rem text-justify">{data?.p1}</p>
                <p className="mb-1-5rem text-justify">{data?.p2}</p>
                <p className="mb-1-5rem text-justify">{data?.p3}</p>
              </div>

              {/* Bloque de Acceso al Reglamento Dinámico */}
              <div className="alt-channels mt-2rem">
                <h4 className="contact-subtitle contact-subtitle-border mb-1-5rem">
                  {data?.reglamento_section_title}
                </h4>
                
                <div className="channels-grid grid-1-col gap-1rem">
                  {/* Botón 1 */}
                  <Link
                    href={`/${locale}/probono-penal/reglamento`}
                    className="channel-card"
                  >
                    <span className="channel-icon">⚖️</span>
                    <div className="channel-text">
                      <span className="font-bold text-primary block">
                        {data?.reglamento_online_title}
                      </span>
                      <span className="channel-value text-sm text-muted">
                        {data?.reglamento_online_desc}
                      </span>
                    </div>
                  </Link>
                  {/* Botón 2 */}
                  <Link
                    href={`/${locale}/probono-penal/reglamento-completo`}
                    className="channel-card"
                  >
                    <span className="channel-icon">📄</span>
                    <div className="channel-text">
                      <span className="font-bold text-primary block">
                        {data?.reglamento_oficial_title}
                      </span>
                      <span className="channel-value text-sm text-muted">
                        {data?.reglamento_oficial_desc}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Lema de Compromiso */}
              <div className="mt-3rem p-1-5rem bg-soft rounded-8 border-subtle">
                <p className="serif text-center font-bold text-primary mb-0">
                  {data?.commitment_badge}
                </p>
              </div>
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
              {isEs
                ? 'COMPROMISO CON EL ACCESO A LA JUSTICIA'
                : 'COMMITMENT TO ACCESS TO JUSTICE'}
            </span>

            <h3
              className="serif mt-1rem mb-1rem"
              style={{ fontSize: '1.4rem' }}
            >
              {isEs
                ? 'La responsabilidad jurídica también exige atender casos que requieren una defensa técnica comprometida.'
                : 'Legal responsibility also requires addressing matters that call for committed technical defense.'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados evalúa solicitudes pro bono de manera individual, conforme a la naturaleza del caso, su relevancia jurídica y las condiciones particulares de la persona solicitante.'
                : 'Mac Consultores Jurídicos & Asociados evaluates pro bono requests individually, considering the nature of the matter, its legal relevance, and the particular circumstances of the applicant.'}
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
                {isEs
                  ? 'SOLICITAR EVALUACIÓN PRO BONO'
                  : 'REQUEST PRO BONO EVALUATION'}
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
