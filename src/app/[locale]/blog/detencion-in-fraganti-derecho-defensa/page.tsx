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
    ? 'Detención en flagrancia y derecho a la defensa | Mac Consultores Jurídicos'
    : 'Arrest in flagrante delicto and the right to defense | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Garantías aplicables, control judicial y defensa desde las primeras actuaciones en casos de detención en flagrancia.'
    : 'Applicable safeguards, judicial review, and defense from the earliest stages in arrest-in-flagrante-delicto matters.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog/detencion-in-fraganti-derecho-defensa`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog/detencion-in-fraganti-derecho-defensa`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog/detencion-in-fraganti-derecho-defensa`;

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

export default async function DetencionInFragantiArticle({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'CRITERIO JURÍDICO / DERECHO PROCESAL PENAL' : 'LEGAL INSIGHT / CRIMINAL PROCEDURAL LAW'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'Detención en flagrancia y derecho a la defensa'
              : 'Arrest in flagrante delicto and the right to defense'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Garantías aplicables, control judicial y defensa desde las primeras actuaciones.'
              : 'Applicable safeguards, judicial review, and defense from the earliest stages.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: INTRODUCCIÓN Y NATURALEZA DE LA FLAGRANCIA */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. Flagrancia y garantías constitucionales' : '1. Flagrancy and constitutional safeguards'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La aprehensión en flagrancia puede producirse cuando existen las circunstancias previstas por la legislación aplicable respecto de un hecho presuntamente delictivo. Esa situación no elimina las garantías constitucionales de la persona aprehendida ni la necesidad de examinar las actuaciones realizadas por las autoridades.'
                : 'An arrest in flagrante delicto may take place where the circumstances set out in the applicable law are present in connection with an alleged criminal act. That situation does not remove the detained person’s constitutional safeguards or the need to examine the actions taken by the authorities.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La apreciación de la flagrancia requiere considerar los hechos, la proximidad temporal, los elementos disponibles y las condiciones en que se produjo la aprehensión. La intervención policial y fiscal permanece sujeta al control judicial y a las reglas aplicables al procedimiento penal.'
                : 'The assessment of flagrancy requires consideration of the facts, temporal proximity, the available elements, and the circumstances of the arrest. Police and prosecutorial action remains subject to judicial review and to the rules applicable to criminal proceedings.'}
            </p>
          </div>

          {/* BLOQUE 2: PRESUNCIÓN DE INOCENCIA Y DEFENSA TEMPRANA */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Presunción de inocencia y defensa oportuna' : '2. Presumption of innocence and timely defense'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La aprehensión no equivale a una declaración de responsabilidad penal. La persona investigada conserva la presunción de inocencia, el derecho a conocer los hechos que se le atribuyen y las garantías vinculadas con el debido proceso.'
                : 'An arrest is not a finding of criminal responsibility. The person under investigation retains the presumption of innocence, the right to be informed of the alleged facts, and the safeguards associated with due process.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La asistencia de defensa debe considerarse desde las primeras actuaciones. Su intervención permite revisar la información disponible, las condiciones de la aprehensión y el respeto de las garantías aplicables, sin anticipar la valoración definitiva del caso.'
                : 'Access to defense should be considered from the earliest stages. Its involvement allows for a review of the information available, the circumstances of the arrest, and compliance with the applicable safeguards, without anticipating the final assessment of the matter.'}
            </p>
          </div>

          {/* BLOQUE 3: AUDITORÍA JUDICIAL Y CONTROL PROBATORIO (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Aspectos para revisar durante el control judicial' : '3. Matters to review during judicial oversight'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La presentación ante el tribunal permite revisar aspectos relevantes de la aprehensión y del procedimiento inicial. Entre ellos se encuentran los siguientes:'
                : 'Presentation before the court allows relevant aspects of the arrest and initial procedure to be reviewed. These may include:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Circunstancias de la aprehensión:' : 'Circumstances of the arrest:'}</strong>{' '}
                {isEs 
                  ? 'Revisión de los hechos reportados, los elementos disponibles y la relación de estos con el supuesto de flagrancia alegado.'
                  : 'Reviewing the facts reported, the available elements, and their connection to the alleged flagrancy.'}
              </li>
              <li>
                <strong>{isEs ? 'Actuaciones iniciales y evidencia:' : 'Initial actions and evidence:'}</strong>{' '}
                {isEs
                  ? 'Examen de la recolección, registro, preservación y traslado de elementos materiales o digitales, según corresponda.'
                  : 'Examining the collection, recording, preservation, and transfer of physical or digital material, as applicable.'}
              </li>
              <li>
                <strong>{isEs ? 'Garantías de la persona aprehendida:' : 'Safeguards of the detained person:'}</strong>{' '}
                {isEs
                  ? 'Verificación de información sobre los hechos atribuidos, acceso a la defensa y comunicación con las personas autorizadas conforme al marco aplicable.'
                  : 'Verifying information about the alleged facts, access to defense, and communication with authorized persons under the applicable framework.'}
              </li>
              <li>
                <strong>{isEs ? 'Presentación y control judicial:' : 'Presentation and judicial review:'}</strong>{' '}
                {isEs
                  ? 'Revisión de los plazos y actuaciones aplicables desde la aprehensión hasta la presentación ante la autoridad judicial competente.'
                  : 'Reviewing the applicable time limits and actions from the arrest through presentation before the competent judicial authority.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CONCLUSIÓN DOCTRINAL Y CTA INSTITUCIONAL */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'CRITERIO JURÍDICO DE LA FIRMA' : 'THE FIRM’S LEGAL INSIGHT'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“El análisis temprano de las actuaciones permite identificar las cuestiones procesales relevantes.”'
                : '“Early review of procedural actions helps identify relevant legal issues.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'MAC Consultores Jurídicos & Asociados analiza asuntos de Derecho penal y constitucional, y acompaña la preparación de estrategias de defensa de acuerdo con los hechos, las garantías aplicables y el marco jurídico correspondiente.'
                : 'MAC Consultores Jurídicos & Asociados analyzes criminal and constitutional-law matters and supports the preparation of defense strategies based on the facts, applicable safeguards, and relevant legal framework.'}
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
