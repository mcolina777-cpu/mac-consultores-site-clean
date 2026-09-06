import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Nivel Académico & Docencia | Dr. Marco A. Colina G. | Mac Consultores'
    : 'Academic Credentials & Teaching | Dr. Marco A. Colina G. | Mac Consultores';
  const description = isEs
    ? 'Formación de postgrado en Derecho Constitucional y Ciencias Penales y Criminológicas, y trayectoria docente universitaria del Dr. Marco A. Colina G.'
    : 'Postgraduate credentials in Constitutional Law and Criminal and Criminological Sciences, and university teaching career of Dr. Marco A. Colina G.';
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/our-ceo/nivel-academico-docencia`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/our-ceo/nivel-academico-docencia`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/our-ceo/nivel-academico-docencia`;

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
          url: '/assets/img/OFICINA_2_1.jpeg',
          width: 1200,
          height: 630,
          alt: 'Dr. Marco A. Colina G. - Formación Académica y Docencia',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/OFICINA_2_1.jpeg'],
    },
  };
}

export default async function NivelAcademicoDocenciaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-nivel-academico">
      {/* HEADER DE LA PÁGINA */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'FORMACIÓN DOGMÁTICA Y CÁTEDRA UNIVERSITARIA' : 'DOCTRINAL FOUNDATIONS & UNIVERSITY TEACHING'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Nivel Académico de Postgrado y Docencia Universitaria' : 'Postgraduate Academic Credentials and University Lecturing'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Estudios superiores de cuarto nivel en Derecho Constitucional y Ciencias Penales y Criminológicas como base del rigor jurídico.'
              : 'Advanced postgraduate studies in Constitutional Law and Criminal and Criminological Sciences as the pillar of legal rigor.'}
          </p>
        </div>
      </header>

      {/* CONTENIDO DOCTRINAL */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>

          {/* Sección 1 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. La dogmática jurídica como sustento insustituible del litigio' : '1. Legal doctrine as the irreplaceable foundation of litigation'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La práctica forense contemporánea exige una sólida formación teórica que trascienda la mera aplicación mecánica de la ley. El dominio profundo de la teoría del delito, los criterios de imputación objetiva, el principio de culpabilidad y el sistema de garantías constitucionales contribuye a estructurar teorías del caso coherentes y a examinar críticamente imputaciones de alcance impreciso desde fases tempranas.'
                : 'Contemporary forensic practice requires advanced theoretical mastery beyond mechanical statutory citations. A thorough grasp of criminal theory, objective imputation criteria, personal culpability standards, and constitutional guarantees contributes to the development of cohesive defense theories and to the critical examination of imprecisely framed allegations at early procedural stages.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados concebimos el estudio dogmático como el pilar insustituible para evaluar la viabilidad de cada causa penal y para dotar a la defensa técnica de solidez analítica ante los órganos jurisdiccionales.'
                : 'At Mac Consultores Jurídicos & Asociados, we view doctrinal analysis as the irreplaceable pillar for evaluating the viability of criminal proceedings and equipping technical defense with analytical rigor before judicial bodies.'}
            </p>
          </div>

          {/* Sección 2 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Especialización en Derecho Constitucional' : '2. Postgraduate credentials in Constitutional Law'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Formación de cuarto nivel centrada en la supremacía de la Constitución, los límites formales y sustanciales del poder punitivo del Estado, el debido proceso legal y los estándares de motivación judicial.'
                : 'Postgraduate studies focused on constitutional supremacy, substantive limits on state prosecutorial power, procedural due process, and judicial motivation standards.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Estos fundamentos orientan la identificación temprana de violaciones al debido proceso, quebrantamientos del derecho a la defensa y transgresiones al orden constitucional en las distintas fases del proceso penal venezolano.'
                : 'These foundations guide the early identification of due process violations, infringements upon the right to defense, and constitutional breaches across the stages of Venezuelan criminal procedure.'}
            </p>
          </div>

          {/* Sección 3 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Especialización en Ciencias Penales y Criminológicas' : '3. Specialization in Criminal and Criminological Sciences'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Estudios avanzados orientados al análisis riguroso de las tipologías delictivas corporativas, la criminalidad económica, los delitos funcionales y los factores criminológicos que determinan la política penal y el juzgamiento forense en Venezuela.'
                : 'Advanced academic scholarship addressing corporate crime, white-collar offenses, fiduciary offenses, and criminological factors shaping criminal policy and judicial adjudication in Venezuela.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Esta formación sustantiva resulta relevante para examinar imputaciones penales complejas en materia societaria, fiscal y regulatoria, distinguiendo con precisión técnica entre ilícitos civiles o mercantiles y conductas con verdadera relevancia penal.'
                : 'This substantive training is relevant to examining complex corporate, tax, and regulatory criminal charges, establishing clear technical distinctions between civil or commercial disputes and genuine criminal conduct.'}
            </p>
          </div>

          {/* Sección 4 */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '4. La cátedra universitaria como disciplina de actualización constante' : '4. University teaching as continuous analytical update'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'El ejercicio sostenido de la docencia en facultades de Derecho demanda una revisión analítica permanente de la doctrina comparada y la jurisprudencia vinculante.'
                : 'Dedicated legal scholarship in law faculties demands ongoing analysis of comparative doctrine and binding judicial precedents.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Esta labor académica se proyecta directamente en la precisión conceptual, la claridad expositiva y la solvencia dogmática con que se elaboran los dictámenes y alegatos de la firma.'
                : 'This academic commitment directly informs the conceptual clarity, precision, and doctrinal rigor with which the firm crafts legal opinions and courtroom pleadings.'}
            </p>
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
                ? '“El análisis dogmático no constituye una abstracción teórica; es el instrumento técnico indispensable para sustentar una defensa procesal efectiva.”'
                : '“Doctrinal analysis is not an abstract theory; it is an indispensable technical instrument for effective procedural defense.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Consulte con nuestro despacho para una evaluación técnica fundada en dogmática penal contemporánea, doctrina constitucional y análisis jurisprudencial especializado.'
                : 'Consult with our firm for a technical evaluation grounded in contemporary criminal doctrine, constitutional principles, and specialized case law analysis.'}
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

              <Link href={getRoute(locale, 'about')} className="btn btn-secondary">
                {isEs ? '← VOLVER A LA FIRMA' : '← BACK TO THE FIRM'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
