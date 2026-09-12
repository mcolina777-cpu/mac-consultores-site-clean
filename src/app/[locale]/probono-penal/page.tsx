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
      // AJUSTE SEO TEMPORAL:
      // Durante la etapa de desarrollo, los canonicals utilizan
      // el dominio de Vercel. El dominio permanente se configurará
      // únicamente al finalizar y publicar el website.
      canonical: `https://mac-consultores-site-clean.vercel.app/${locale}/probono-penal`,
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
                  <Link
                    href={getRoute(locale, "probono_reglamento")}
                    className="channel-card"
                  >
                    <span className="channel-icon">⚖️</span>
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
                ? 'La responsabilidad jurídica también exige ofrecer una primera orientación técnica cuando un caso lo requiere.'
                : 'Professional responsibility also requires providing initial technical guidance when a matter calls for it.'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados evalúa cada solicitud pro bono de forma individual, considerando la naturaleza y viabilidad jurídica del asunto, la disponibilidad operativa y la inexistencia de conflictos de interés. Cuando una solicitud sea admitida, la intervención se limitará estrictamente al alcance comunicado por la firma.'
                : 'Mac Consultores Jurídicos & Asociados evaluates each pro bono application individually, considering the nature and legal viability of the matter, operational availability, and the absence of conflicts of interest. If admitted, assistance is strictly limited to the scope expressly communicated by the firm.'}
            </p>

            {/* Aviso visible antes de iniciar la solicitud */}
            <div
              className="text-left mx-auto mb-2rem"
              style={{
                maxWidth: '680px',
                padding: '1.25rem 1.5rem',
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                border: '1px solid var(--border-color, #e5e7eb)',
                borderLeft: '4px solid var(--color-primary, #1e3a8a)',
              }}
            >
              <h4
                className="serif font-bold text-primary mb-0-5rem"
                style={{ fontSize: '1.1rem' }}
              >
                {isEs ? 'Antes de iniciar una solicitud' : 'Before starting an application'}
              </h4>
              <p className="text-sm text-muted mb-0-75rem" style={{ lineHeight: 1.6 }}>
                {isEs
                  ? 'El Programa Pro Bono ofrece orientación jurídica inicial de carácter técnico y documental. No incluye litigación, audiencias, comparecencias ante tribunales o el Ministerio Público, representación judicial, patrocinio ni seguimiento procesal.'
                  : 'The Pro Bono Program provides preliminary technical and documentary legal guidance. It does not include litigation, hearings, appearances before courts or prosecutors, judicial representation, legal sponsorship, or procedural monitoring.'}
              </p>
              <p className="text-sm text-muted mb-0" style={{ lineHeight: 1.6 }}>
                {isEs
                  ? 'Cada solicitud está sujeta a evaluación individual, disponibilidad operativa y verificación de conflictos de interés. El envío de información no implica admisión del caso ni crea una relación abogado-cliente.'
                  : 'Each application is subject to individual evaluation, operational availability, and conflict-of-interest review. Submitting information does not imply case admission or create an attorney-client relationship.'}
              </p>
            </div>

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
                  ? 'INICIAR SOLICITUD PRO BONO'
                  : 'START A PRO BONO APPLICATION'}
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
