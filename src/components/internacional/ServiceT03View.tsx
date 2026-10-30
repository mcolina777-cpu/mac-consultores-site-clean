import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export default function ServiceT03View({ locale, data }: { locale: string; data: any }) {
  const isEs = locale === 'es';

  return (
    <main className="page-consular-detail">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.tag}</span>
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          {/* INTRODUCCIÓN */}
          <div className="mb-3rem">
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.intro?.p1}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.intro?.p2}
            </p>

            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <Link
                href={`${getRoute(locale, 'contact')}?materia=internacional#formulario-contacto`}
                className="btn btn-primary"
              >
                {data?.cta || (isEs ? 'SOLICITAR EVALUACIÓN DE UNA CONSULTA JURÍDICA' : 'REQUEST EVALUATION OF A LEGAL INQUIRY')}
              </Link>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                borderLeft: '3px solid var(--primary, #0c1a2c)',
                backgroundColor: 'var(--bg-soft, #f9fafb)',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <p style={{ lineHeight: 1.6, fontSize: '0.9rem', color: 'var(--text-muted, #4b5563)', margin: 0 }}>
                <strong>{isEs ? "Evaluación de la consulta: " : "Inquiry assessment terms: "}</strong>
                {data?.nota}
              </p>
            </div>
          </div>

          {/* OBJETO DE LA CONSULTA */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.objeto?.title}</h2>
            {data?.objeto?.items?.map((item: any, i: number) => (
              <div key={i} className="mb-2rem">
                <h3 className="serif mb-0-5rem" style={{ fontSize: '1.2rem', color: 'var(--primary, #0c1a2c)' }}>
                  {item.title}
                </h3>
                <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-main, #1f2937)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* MODALIDADES DE OPINIÓN PROFESIONAL */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.modalidades?.title}</h2>
            {data?.modalidades?.items?.map((item: any, i: number) => (
              <div key={i} className="mb-2rem">
                <h3 className="serif mb-0-5rem" style={{ fontSize: '1.2rem', color: 'var(--primary, #0c1a2c)' }}>
                  {item.title}
                </h3>
                <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-main, #1f2937)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* MÉTODO DE ELABORACIÓN */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.metodo?.title}</h2>
            {data?.metodo?.items?.map((item: any, i: number) => (
              <div key={i} className="mb-2rem">
                <h3 className="serif mb-0-5rem" style={{ fontSize: '1.2rem', color: 'var(--primary, #0c1a2c)' }}>
                  {item.title}
                </h3>
                <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-main, #1f2937)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* DESTINATARIOS Y UTILIZACIÓN DEL DOCUMENTO */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.destinatarios?.title}</h2>
            <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-main, #1f2937)', marginBottom: '1rem' }}>
              {data?.destinatarios?.p1}
            </p>
            <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-main, #1f2937)', marginBottom: '1rem' }}>
              {data?.destinatarios?.p2}
            </p>
            <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-main, #1f2937)' }}>
              {data?.destinatarios?.p3}
            </p>
          </div>

          {/* ALCANCE DEL SERVICIO */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.alcance?.title}</h2>
            <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-main, #1f2937)', marginBottom: '1rem' }}>
              {data?.alcance?.intro}
            </p>
            <ul className="service-list mb-1-5rem">
              {data?.alcance?.items?.map((it: string, idx: number) => (
                <li key={idx} style={{ lineHeight: 1.6, fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {it}
                </li>
              ))}
            </ul>
            <p style={{ lineHeight: 1.75, fontSize: '1.02rem', color: 'var(--text-muted, #4b5563)', fontStyle: 'italic' }}>
              {data?.alcance?.closing}
            </p>
          </div>

          {/* SERVICIOS RELACIONADOS */}
          <div className="content-section mb-4rem" style={{ padding: '2rem', backgroundColor: 'var(--bg-soft, #f9fafb)', borderRadius: '6px' }}>
            <h2 className="serif mb-1rem" style={{ fontSize: '1.3rem', color: 'var(--primary, #0c1a2c)' }}>
              {data?.servicios_relacionados?.title}
            </h2>
            <p style={{ lineHeight: 1.75, fontSize: '1rem', color: 'var(--text-main, #1f2937)', marginBottom: '1.25rem' }}>
              {data?.servicios_relacionados?.text}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Link href={getRoute(locale, 'consular.representacion_judicial')} className="card-link" style={{ fontSize: '0.95rem' }}>
                → {data?.servicios_relacionados?.link1_label}
              </Link>
              <Link href={getRoute(locale, 'consular.casacion_tutela')} className="card-link" style={{ fontSize: '0.95rem' }}>
                → {data?.servicios_relacionados?.link2_label}
              </Link>
              <Link href={getRoute(locale, 'consular.extradicion')} className="card-link" style={{ fontSize: '0.95rem' }}>
                → {data?.servicios_relacionados?.link3_label}
              </Link>
            </div>
            {data?.servicios_relacionados?.extra_intro && (
              <div style={{ borderTop: '1px solid var(--border-color, #e5e7eb)', paddingTop: '1.25rem' }}>
                <p style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '0.75rem' }}>
                  {data?.servicios_relacionados?.extra_intro}
                </p>
                <Link href={getRoute(locale, 'services.international_cooperation')} className="btn btn-outline">
                  {data?.servicios_relacionados?.extra_link} →
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CIERRE / EVALUACIÓN Y CONTRATACIÓN */}
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
              MAC CONSULTORES JURÍDICOS & ASOCIADOS
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {data?.evaluacion?.title}
            </h3>

            <p className="max-w-800 mx-auto mb-1rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {data?.evaluacion?.p1}
            </p>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {data?.evaluacion?.p2}
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
                href={`${getRoute(locale, 'contact')}?materia=internacional#formulario-contacto`}
                className="btn btn-primary"
              >
                {data?.evaluacion?.cta}
              </Link>
              <Link href={getRoute(locale, 'services.consular')} className="btn btn-secondary">
                {data?.evaluacion?.back}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
