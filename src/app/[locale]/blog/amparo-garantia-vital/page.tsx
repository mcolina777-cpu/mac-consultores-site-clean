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
    ? 'El amparo constitucional y la protección de derechos | Mac Consultores Jurídicos'
    : 'Constitutional amparo and the protection of rights | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Alcance, requisitos de procedencia y límites de la acción de amparo constitucional en casos concretos.'
    : 'Scope, admissibility requirements, and limits of constitutional amparo in specific matters.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog/amparo-garantia-vital`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog/amparo-garantia-vital`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog/amparo-garantia-vital`;

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

export default async function BlogAmparo({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'CRITERIO JURÍDICO / DERECHO CONSTITUCIONAL' : 'LEGAL INSIGHT / CONSTITUTIONAL LAW'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'El amparo constitucional y la protección de derechos'
              : 'Constitutional amparo and the protection of rights'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Alcance, requisitos de procedencia y análisis de la vía de amparo en casos concretos.'
              : 'Scope, admissibility requirements, and analysis of constitutional amparo in specific matters.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: INTRODUCCIÓN Y NATURALEZA DEL AMPARO */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. Función del amparo constitucional' : '1. The function of constitutional amparo'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La acción de amparo constitucional es un mecanismo de protección de derechos y garantías constitucionales frente a amenazas o vulneraciones atribuibles a autoridades o, en determinados supuestos, a particulares. Su finalidad es procurar el restablecimiento de la situación jurídica afectada cuando esa vía resulte procedente.'
                : 'Constitutional amparo is a mechanism for the protection of constitutional rights and guarantees against threats or violations attributable to public authorities and, in certain circumstances, private parties. Its purpose is to seek the restoration of the affected legal situation when this remedy is appropriate.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'No sustituye los procesos ordinarios ni funciona como una instancia general para revisar cualquier decisión. Su análisis exige considerar el derecho invocado, los hechos del caso, la lesión alegada y la existencia de otros medios judiciales idóneos.'
                : 'It does not replace ordinary proceedings or serve as a general means to review every decision. Its assessment requires consideration of the right invoked, the facts of the matter, the alleged violation, and the availability of other suitable judicial remedies.'}
            </p>
          </div>

          {/* BLOQUE 2: PRESUPUESTOS DE ADMISIBILIDAD Y TÉCNICA FORENSE */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Requisitos y límites de procedencia' : '2. Admissibility requirements and limits'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La admisibilidad de una acción de amparo depende de sus circunstancias particulares. Es necesario identificar una amenaza o vulneración constitucional relevante y examinar si existen vías ordinarias o recursos que puedan ofrecer una protección adecuada.'
                : 'The admissibility of a constitutional amparo action depends on the circumstances of each matter. It is necessary to identify a relevant constitutional threat or violation and to assess whether ordinary proceedings or remedies may provide adequate protection.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La solicitud debe exponer de forma clara los hechos, el derecho o garantía constitucional invocado y la razón por la cual el amparo puede ser la vía aplicable. También deben evaluarse aspectos como la oportunidad de la acción, la posible existencia de consentimiento y la competencia del tribunal.'
                : 'The application should clearly set out the facts, the constitutional right or guarantee invoked, and the reasons why amparo may be the appropriate remedy. Matters such as timing, possible consent, and the jurisdiction of the court must also be assessed.'}
            </p>
          </div>

          {/* BLOQUE 3: ÁMBITOS DE APLICACIÓN Y TUTELA EFECTIVA (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Supuestos que requieren análisis específico' : '3. Matters requiring specific analysis'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La procedencia del amparo debe estudiarse según la naturaleza del acto cuestionado y el medio de protección disponible. Algunos ámbitos que requieren una revisión particular son los siguientes:'
                : 'The availability of constitutional amparo must be assessed according to the nature of the challenged act and the remedies available. The following areas require particular review:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Decisiones judiciales:' : 'Judicial decisions:'}</strong>{' '}
                {isEs 
                  ? 'El análisis debe considerar la competencia, los recursos disponibles y la posible afectación de derechos constitucionales.'
                  : 'The analysis should consider jurisdiction, available remedies, and any potential impact on constitutional rights.'}
              </li>
              <li>
                <strong>{isEs ? 'Actuaciones administrativas:' : 'Administrative actions:'}</strong>{' '}
                {isEs
                  ? 'Deben evaluarse el acto, el procedimiento aplicado y las vías administrativas o judiciales que puedan resultar idóneas.'
                  : 'The challenged act, the procedure followed, and the administrative or judicial remedies that may be suitable should be assessed.'}
              </li>
              <li>
                <strong>{isEs ? 'Medidas cautelares:' : 'Precautionary measures:'}</strong>{' '}
                {isEs
                  ? 'En determinados casos puede solicitarse una medida orientada a preservar la situación mientras se decide la pretensión, según los requisitos aplicables.'
                  : 'In certain matters, a measure may be requested to preserve the situation while the claim is decided, subject to the applicable requirements.'}
              </li>
              <li>
                <strong>{isEs ? 'Derechos económicos y patrimoniales:' : 'Economic and property rights:'}</strong>{' '}
                {isEs
                  ? 'La protección de estos derechos exige examinar los hechos, el marco legal aplicable y la vía procesal correspondiente.'
                  : 'The protection of these rights requires an assessment of the facts, the applicable legal framework, and the relevant procedural route.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CAJA DE CIERRE EDITORIAL Y CONVERSIÓN */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'LITIGACIÓN EN DERECHO CONSTITUCIONAL' : 'CONSTITUTIONAL LITIGATION PRACTICE'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“La protección constitucional exige identificar el derecho afectado y la vía procesal aplicable.”'
                : '“Constitutional protection requires identifying the affected right and the appropriate procedural route.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'MAC Consultores Jurídicos & Asociados analiza asuntos de Derecho constitucional, evalúa la procedencia de las acciones disponibles y acompaña la preparación de estrategias procesales de acuerdo con los hechos y el marco jurídico aplicable.'
                : 'MAC Consultores Jurídicos & Asociados analyzes constitutional-law matters, assesses the availability of legal actions, and supports the preparation of procedural strategies based on the facts and the applicable legal framework.'}
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
