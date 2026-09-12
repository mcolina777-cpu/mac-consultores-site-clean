import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs 
    ? 'Criminalidad económica y compliance penal | Mac Consultores Jurídicos'
    : 'Economic crime and corporate compliance | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Riesgos penales en la actividad empresarial, responsabilidad individual de directivos y compliance penal para la prevención y respuesta ante contingencias.'
    : 'Criminal-law risks in business operations, individual executive responsibility, and criminal compliance for prevention and response to potential issues.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog/criminalidad-economica`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog/criminalidad-economica`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog/criminalidad-economica`;

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

export default async function BlogCriminalidadEconomica({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'CRITERIO JURÍDICO / DERECHO PENAL ECONÓMICO' : 'LEGAL INSIGHT / ECONOMIC CRIMINAL LAW'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'Criminalidad económica y compliance penal'
              : 'Economic crime and corporate compliance'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Riesgos penales en la actividad empresarial, responsabilidad de directivos y medidas de prevención.'
              : 'Criminal-law risks in business operations, executive responsibility, and preventive measures.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: INTRODUCCIÓN Y EXPANSIÓN DEL DERECHO PENAL SOCIETARIO */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. Riesgo penal en la actividad empresarial' : '1. Criminal-law risk in business operations'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Las decisiones y operaciones de una empresa pueden generar riesgos penales en materias tributarias, financieras, cambiarias, ambientales o de contratación. Identificar esos riesgos permite revisar cómo se toman las decisiones, qué controles existen y quién interviene en cada proceso.'
                : 'Business decisions and operations may give rise to criminal-law risks in tax, financial, foreign-exchange, environmental, or contracting matters. Identifying those risks makes it possible to review how decisions are made, what controls are in place, and who is involved in each process.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'El Derecho penal económico no se limita a supuestos de fraude o insolvencia dolosa. También puede examinar decisiones de administración, distribución de funciones, facultades de representación y deberes de supervisión dentro de la organización.'
                : 'Economic criminal law is not limited to fraud or fraudulent insolvency. It may also examine management decisions, the allocation of functions, authority to act on behalf of the company, and supervisory duties within an organization.'}
            </p>
          </div>

          {/* BLOQUE 2: IMPUTACIÓN Y RESPONSABILIDAD DE ÓRGANOS DIRECTIVOS */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Responsabilidad individual de directivos y administradores' : '2. Individual responsibility of directors and executives'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'En estructuras corporativas con funciones distribuidas, la atribución de responsabilidad penal debe analizarse de manera individual. El cargo que ocupa una persona no basta, por sí solo, para establecer su participación o responsabilidad en un hecho investigado.'
                : 'In corporate structures with distributed functions, potential criminal responsibility must be assessed individually. A person’s title alone does not establish participation in, or responsibility for, the conduct under investigation.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La revisión del caso debe considerar las funciones asignadas, las delegaciones vigentes, las decisiones adoptadas y los elementos que permitan establecer o descartar una actuación intencional. Este análisis es relevante desde las primeras actuaciones de una investigación.'
                : 'The assessment should consider assigned functions, current delegations, decisions made, and the available evidence of intentional conduct. This review is relevant from the earliest stages of an investigation.'}
            </p>
          </div>

          {/* BLOQUE 3: PROGRAMAS DE CUMPLIMIENTO (COMPLIANCE) COMO EXIMENTE */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Compliance penal y prevención' : '3. Criminal compliance and prevention'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Un programa de cumplimiento penal ayuda a identificar riesgos, asignar responsabilidades y establecer controles adecuados a la operación de cada empresa. No sustituye la evaluación de un caso concreto, pero puede aportar elementos relevantes para la prevención y la respuesta ante una contingencia.'
                : 'A criminal compliance program can help identify risks, allocate responsibilities, and establish controls suited to a company’s operations. It does not replace an assessment of a specific matter, but it can provide relevant support for prevention and for responding to a potential issue.'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Mapa de riesgos penales:' : 'Criminal risk mapping:'}</strong>{' '}
                {isEs 
                  ? 'Identificación de procesos y operaciones que requieren controles específicos.'
                  : 'Identifying processes and operations that require specific controls.'}
              </li>
              <li>
                <strong>{isEs ? 'Asignación de funciones:' : 'Allocation of functions:'}</strong>{' '}
                {isEs
                  ? 'Definición de responsabilidades, niveles de decisión y líneas de reporte.'
                  : 'Defining responsibilities, decision-making levels, and reporting lines.'}
              </li>
              <li>
                <strong>{isEs ? 'Controles internos:' : 'Internal controls:'}</strong>{' '}
                {isEs
                  ? 'Revisión de operaciones financieras, obligaciones regulatorias y procesos de contratación.'
                  : 'Reviewing financial operations, regulatory obligations, and contracting processes.'}
              </li>
              <li>
                <strong>{isEs ? 'Respuesta temprana:' : 'Early response:'}</strong>{' '}
                {isEs
                  ? 'Organización de la actuación de la empresa ante requerimientos, inspecciones o medidas cautelares.'
                  : 'Organizing the company’s response to requests, inspections, or precautionary measures.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CONCLUSIÓN Y CTA INSTITUCIONAL */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'CONSULTORÍA EN DERECHO PENAL ECONÓMICO' : 'ECONOMIC CRIMINAL LAW PRACTICE'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“La prevención y la reacción temprana ayudan a gestionar el riesgo penal corporativo.”'
                : '“Prevention and early response can help manage corporate criminal-law risk.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'MAC Consultores Jurídicos & Asociados asesora a empresas, accionistas y directivos en la identificación de riesgos, el diseño de medidas de prevención y la preparación de respuestas ante investigaciones o actuaciones de autoridades.'
                : 'MAC Consultores Jurídicos & Asociados advises companies, shareholders, and executives on risk identification, preventive measures, and the preparation of responses to investigations or actions by authorities.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>
              <Link href={getRoute(locale, 'blog')} className="btn btn-secondary">
                {isEs ? '← VOLVER AL BLOG' : '← BACK TO THE BLOG'}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
