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
    ? 'Poderes y representación en los procesos civil y penal | Mac Consultores Jurídicos'
    : 'Powers of attorney and representation in civil and criminal proceedings | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Representación judicial, alcance del mandato y facultades aplicables en los procesos civil y penal.'
    : 'Legal representation, scope of authority, and applicable powers in civil and criminal proceedings.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog/regimen-poderes-cpc-copp`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog/regimen-poderes-cpc-copp`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog/regimen-poderes-cpc-copp`;

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

export default async function BlogPoderes({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'CRITERIO JURÍDICO / TÉCNICA PROCESAL' : 'LEGAL INSIGHT / PROCEDURAL PRACTICE'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'Poderes y representación en los procesos civil y penal'
              : 'Powers of attorney and representation in civil and criminal proceedings'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Requisitos de representación, alcance del mandato y revisión de facultades en actuaciones judiciales.'
              : 'Representation requirements, scope of authority, and review of powers for court proceedings.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: LA LEGITIMACIÓN COMO PRESUPUESTO PROCESAL */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. Representación judicial y actuación procesal' : '1. Legal representation and procedural action'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La representación judicial permite actuar en nombre de una persona o empresa dentro de un proceso. Antes de presentar una demanda, recurso, escrito o actuación de defensa, conviene verificar quién otorga el poder, qué facultades confiere y si el documento responde a las exigencias aplicables al caso.'
                : 'Legal representation allows a person to act on behalf of an individual or company in court proceedings. Before filing a claim, appeal, submission, or defense-related document, it is important to verify who grants the authority, what powers it confers, and whether the document meets the requirements applicable to the matter.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Un poder insuficiente, una delegación incompleta o una sustitución que no refleje las facultades necesarias puede generar objeciones procesales. Sus efectos dependen del tipo de actuación, de la norma aplicable y de la posibilidad de corregir el defecto dentro de la oportunidad correspondiente.'
                : 'An insufficient power of attorney, an incomplete delegation, or a substitution that does not include the required authority may give rise to procedural objections. The consequences depend on the type of action, the applicable rules, and whether the issue can be corrected at the relevant stage.'}
            </p>
          </div>

          {/* BLOQUE 2: DIFERENCIAS SISTEMÁTICAS ENTRE CPC Y COPP */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Diferencias entre procesos civil y penal' : '2. Differences between civil and criminal proceedings'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'En el proceso civil, la representación judicial y el alcance del poder deben examinarse de acuerdo con las formalidades y facultades requeridas para cada actuación. Algunos actos de disposición requieren una autorización expresa del representado, conforme al Código de Procedimiento Civil.'
                : 'In civil proceedings, legal representation and the scope of a power of attorney should be assessed in light of the formalities and authority required for each action. Certain acts of disposition require the represented party’s express authorization under the Code of Civil Procedure.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'En el proceso penal, deben distinguirse la defensa técnica de la persona investigada o acusada, la intervención de la víctima y la representación de personas jurídicas. Cada supuesto puede requerir una revisión específica de la forma de designación, las facultades conferidas y el acto procesal que se pretende realizar.'
                : 'In criminal proceedings, a distinction must be made between technical defense for the person under investigation or accused, participation by the victim, and representation of legal entities. Each situation may require a specific review of the form of appointment, the authority granted, and the procedural act to be undertaken.'}
            </p>
          </div>

          {/* BLOQUE 3: AUDITORÍA TÉCNICA DEL MANDATO (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Aspectos para revisar antes de actuar' : '3. Matters to review before acting'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La revisión de un poder o documento de representación requiere atender al proceso, a la persona representada y al alcance de la actuación prevista. Entre los aspectos que conviene examinar se encuentran los siguientes:'
                : 'Reviewing a power of attorney or representation document requires attention to the proceeding, the represented party, and the scope of the proposed action. Relevant matters may include:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Facultades de quien otorga el poder:' : 'Authority of the grantor:'}</strong>{' '}
                {isEs 
                  ? 'Verificación de la capacidad y autorización para representar a una persona natural o jurídica.'
                  : 'Verifying the capacity and authorization to represent an individual or legal entity.'}
              </li>
              <li>
                <strong>{isEs ? 'Alcance del mandato:' : 'Scope of authority:'}</strong>{' '}
                {isEs
                  ? 'Revisión de las facultades generales y de aquellas que deben otorgarse de forma expresa para determinados actos.'
                  : 'Reviewing general powers and those that must be expressly granted for particular acts.'}
              </li>
              <li>
                <strong>{isEs ? 'Sustitución y designación profesional:' : 'Substitution and professional appointment:'}</strong>{' '}
                {isEs
                  ? 'Evaluación de las facultades para sustituir, de las condiciones de la designación y de la habilitación profesional correspondiente.'
                  : 'Assessing authority to appoint a substitute, the terms of appointment, and the relevant professional authorization.'}
              </li>
              <li>
                <strong>{isEs ? 'Documentos otorgados en el extranjero:' : 'Documents executed abroad:'}</strong>{' '}
                {isEs
                  ? 'Revisión del país de origen, las formalidades aplicables, la autenticación o apostilla cuando corresponda, el idioma y su uso ante autoridades venezolanas.'
                  : 'Reviewing the country of origin, applicable formalities, authentication or apostille where required, language, and use before Venezuelan authorities.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CAJA DE CIERRE EDITORIAL Y CONVERSIÓN */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'CONSULTORÍA Y TÉCNICA PROCESAL' : 'PROCEDURAL REPRESENTATION ADVISORY'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“La representación judicial debe revisarse antes de cada actuación relevante.”'
                : '“Legal representation should be reviewed before each significant procedural action.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'MAC Consultores Jurídicos & Asociados asesora a personas y empresas en la revisión de poderes, facultades de representación y documentación necesaria para actuaciones en materia civil, mercantil y penal.'
                : 'MAC Consultores Jurídicos & Asociados advises individuals and companies on powers of attorney, authority to represent, and documentation required for civil, commercial, and criminal proceedings.'}
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
