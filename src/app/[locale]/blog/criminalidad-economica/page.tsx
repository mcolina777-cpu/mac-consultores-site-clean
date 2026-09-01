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
    ? 'Criminalidad Económica y Compliance Penal | Mac Consultores Jurídicos'
    : 'Economic Crime and Corporate Compliance | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Análisis dogmático y procesal sobre los riesgos penales en la gestión empresarial moderna, la responsabilidad directiva y los programas de prevención delictiva.'
    : 'Doctrinal and procedural analysis regarding criminal liability risks in corporate management, executive accountability, and criminal compliance programs.';

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
            {isEs ? 'DOCTRINA / DERECHO PENAL ECONÓMICO' : 'DOCTRINE / ECONOMIC CRIMINAL LAW'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'Criminalidad Económica y Compliance Penal' 
              : 'Economic Crime and Corporate Compliance'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Riesgos penales en la gestión corporativa moderna, delimitación de la responsabilidad directiva y modelos de prevención delictiva.'
              : 'Criminal liability risks in modern corporate governance, defining executive accountability, and structured compliance frameworks.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: INTRODUCCIÓN Y EXPANSIÓN DEL DERECHO PENAL SOCIETARIO */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. La Expansión del Derecho Penal en la Actividad Empresarial' : '1. Expansion of Criminal Law within Corporate Governance'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La dinámica de los negocios contemporáneos enfrenta un entorno regulatorio crecientemente punitivo. La tradicional frontera entre el ilícito civil o mercantil y la infracción penal se ha difuminado progresivamente, trasladando hacia la esfera penal conductas vinculadas a la gestión tributaria, financiera, cambiaria, ambiental y de contratación mercantil. Esta tendencia impone una revisión profunda sobre cómo se concibe la responsabilidad jurídica en el seno de las organizaciones.'
                : 'Contemporary business dynamics face an increasingly punitive regulatory environment. The traditional boundary between civil or commercial misconduct and criminal liability has progressively blurred, shifting tax, financial, currency, environmental, and contractual governance matters into the criminal sphere. This trend demands a profound reassessment of legal risk management within corporate structures.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'En este escenario, el Derecho penal económico no actúa únicamente frente a fraudes evidentes o insolvencias dolosas, sino que proyecta sus tipos delictivos sobre decisiones de administración, atribución de facultades directivas y deberes de supervisión fiduciaria.'
                : 'In this context, economic criminal law operates beyond overt fraud or fraudulent bankruptcy, actively extending its statutory reach over executive administration, delegated managerial powers, and fiduciary supervisory duties.'}
            </p>
          </div>

          {/* BLOQUE 2: IMPUTACIÓN Y RESPONSABILIDAD DE ÓRGANOS DIRECTIVOS */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Criterios de Imputación y Responsabilidad del Órgano Directivo' : '2. Imputation Standards and Executive Liability'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Uno de los desafíos técnicos más complejos en los litigios penales societarios radica en la imputación personal dentro de estructuras corporativas descentralizadas. La persecución penal suele formularse bajo presunciones genéricas que pretenden atribuir responsabilidad a directores y administradores por el mero hecho de ostentar el cargo, desconociendo el principio fundamental de culpabilidad individual y la división funcional del trabajo.'
                : 'One of the most complex forensic challenges in corporate criminal litigation lies in individual liability attribution across decentralized organizational structures. Prosecutorial theories often rely on generic presumptions, attempting to hold directors accountable purely based on their corporate title, disregarding individual guilt principles and functional delegation.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Una defensa técnica de alta jerarquía exige auditar con precisión los ámbitos de competencia funcional, las delegaciones estatutarias válidas y la inexistencia de dolo directo en la adopción de acuerdos colegiados, desmontando imputaciones indiscriminadas desde la fase preliminar de investigación.'
                : 'High-level defense advocacy requires rigorously auditing functional scopes of duty, valid statutory delegations, and the absence of intentional wrongdoing in collective board decisions, dismantling indiscriminate prosecutorial theories from the earliest investigative stages.'}
            </p>
          </div>

          {/* BLOQUE 3: PROGRAMAS DE CUMPLIMIENTO (COMPLIANCE) COMO EXIMENTE */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Pilares del Compliance Penal y Prevención Forense' : '3. Core Pillars of Criminal Compliance and Prevention'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La implementación de programas efectivos de cumplimiento penal (*Criminal Compliance*) no constituye un mero catálogo ético ni un protocolo documental inerte; es un instrumento de blindaje dogmático que permite acreditar el debido control organizacional y la diligencia debida de los administradores frente a los siguientes ejes rectores:'
                : 'Implementing effective Criminal Compliance frameworks is not a cosmetic ethical handbook or static documentation; it constitutes an indispensable technical defense mechanism establishing organizational due diligence across the following critical axes:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Mapa Integral de Riesgos Penales:' : 'Comprehensive Criminal Risk Mapping:'}</strong>{' '}
                {isEs 
                  ? 'Identificación pormenorizada de los procesos operativos y transaccionales susceptibles de generar contingencias penales corporativas.'
                  : 'Detailed identification of operational and transactional procedures susceptible to corporate criminal liabilities.'}
              </li>
              <li>
                <strong>{isEs ? 'Delimitación Estatutaria de Deberes:' : 'Statutory Delegation of Duties:'}</strong>{' '}
                {isEs
                  ? 'Estructuración clara de poderes de decisión, líneas de reporte y facultades de disposición patrimonial debidamente protocolizadas.'
                  : 'Clear structuring of decision-making authority, reporting hierarchies, and formally registered powers of attorney.'}
              </li>
              <li>
                <strong>{isEs ? 'Protocolos de Auditoría y Control Interno:' : 'Auditing and Internal Control Protocols:'}</strong>{' '}
                {isEs
                  ? 'Mecanismos de fiscalización periódica sobre operaciones financieras, régimen cambiario y contratación pública y privada.'
                  : 'Periodic oversight mechanisms monitoring financial operations, regulatory filings, and public or private contracting.'}
              </li>
              <li>
                <strong>{isEs ? 'Gestión Temprana de Contingencias Forenses:' : 'Early Forensic Crisis Response:'}</strong>{' '}
                {isEs
                  ? 'Activación de protocolos de respuesta inmediata ante requerimientos fiscales, inspecciones de órganos reguladores o medidas cautelares.'
                  : 'Immediate protocol activation when facing prosecutorial requests, regulatory inspections, or precautionary asset freezes.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CONCLUSIÓN Y CTA INSTITUCIONAL */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'CONSULTORÍA EN DERECHO PENAL ECONÓMICO' : 'ECONOMIC CRIMINAL LAW PRACTICE'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“La mejor estrategia frente al riesgo penal corporativo radica en la prevención técnica y la intervención procesal temprana.”' 
                : '“The soundest corporate defense lies in proactive risk prevention and early procedural intervention.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados asesoramos a directores, accionistas y empresas en el diseño de esquemas de prevención delictiva y en la defensa penal técnica ante investigaciones complejas.'
                : 'At Mac Consultores Jurídicos & Asociados, we advise executive boards, shareholders, and corporations on risk prevention design and technical defense during complex investigations.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'SOLICITAR CONSULTA CORPORATIVA' : 'REQUEST CORPORATE CONSULTATION'}
              </Link>
              <Link href={`/${locale}/blog`} className="btn btn-secondary">
                {isEs ? '← VOLVER AL BLOG' : '← BACK TO BLOG'}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
