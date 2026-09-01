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
    ? 'Detención in Fraganti y Derecho a la Defensa | Mac Consultores Jurídicos'
    : 'In Flagrante Arrest and Right to Defense | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Análisis dogmático y procesal sobre las garantías constitucionales del imputado en situaciones de flagrancia y la necesidad de una defensa penal técnica temprana.'
    : 'Doctrinal and procedural analysis regarding constitutional guarantees of the accused during in flagrante arrests and the necessity of early technical criminal defense.';

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
            {isEs ? 'DOCTRINA / DERECHO PROCESAL PENAL' : 'DOCTRINE / CRIMINAL PROCEDURAL LAW'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'Detención in Fraganti y Derecho a la Defensa' 
              : 'In Flagrante Arrest and the Right to Defense'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'La flagrancia como situación procesal excepcional no suspende la vigencia de las garantías constitucionales ni convalida la arbitrariedad en la persecución penal.'
              : 'In flagrante situations as an exceptional procedural condition do not suspend constitutional guarantees nor validate arbitrary state intervention.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: INTRODUCCIÓN Y NATURALEZA DE LA FLAGRANCIA */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. La Flagrancia frente al Orden Constitucional' : '1. In Flagrante Arrest under Constitutional Scrutiny'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La detención de una persona en situación de flagrancia constituye una de las actuaciones más sensibles dentro del proceso penal. La inmediatez de la intervención policial puede resultar jurídicamente necesaria frente a un hecho delictivo que está ocurriendo o acaba de ocurrir; sin embargo, esa circunstancia no convierte al aprehendido en un sujeto desprovisto de derechos ni faculta a los órganos de seguridad para prescindir de las garantías inherentes al debido proceso.'
                : 'The arrest of an individual in flagrante delicto constitutes one of the most sensitive interventions within criminal procedure. While immediate police intervention may be legally warranted when an alleged crime is actively occurring or has just transpired, such circumstance does not strip the detained person of fundamental rights nor authorize law enforcement to bypass procedural due process safeguards.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La flagrancia responde a una proximidad temporal y fáctica estricta entre la persona y el hecho punible investigado. No obstante, rapidez procesal no equivale a discrecionalidad arbitraria: toda actuación policial y fiscal debe permanecer subordinada al control judicial y al principio de legalidad probatoria.'
                : 'In flagrante status requires strict temporal and factual proximity between the individual and the investigated offense. However, procedural speed is never equivalent to arbitrary discretion: every police and prosecutorial action remains strictly subordinated to judicial control and evidentiary legality.'}
            </p>
          </div>

          {/* BLOQUE 2: PRESUNCIÓN DE INOCENCIA Y DEFENSA TEMPRANA */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Presunción de Inocencia y Asistencia Técnica Oportuna' : '2. Presumption of Innocence and Early Technical Counsel'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Uno de los equívocos más graves en la práctica forense consiste en equiparar la aprehensión física con una declaración anticipada de responsabilidad penal. La privación preventiva de libertad es una medida cautelar de coerción personal, no una condena. La persona aprehendida conserva intacta su presunción de inocencia, su derecho a conocer con precisión los hechos atribuidos y la prerrogativa innegociable a no autoincriminarse ni ser coaccionada a declarar.'
                : 'One of the most dangerous misconceptions in criminal practice is conflating physical arrest with an early declaration of criminal liability. Preventive detention is merely a coercive precautionary measure, not a conviction. The detainee retains full presumption of innocence, the right to clearly understand attributed facts, and the non-negotiable right against self-incrimination.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'El derecho a la defensa no nace en la sala de juicio ni con la presentación del acto conclusivo: se activa desde el primer minuto de la intervención estatal. La presencia temprana del abogado defensor equilibra la asimetría entre el poder punitivo y el justiciable, permitiendo auditar la legalidad del acta policial y prevenir la consolidación de irregularidades procesales irreversibles.'
                : 'The right to defense does not begin at trial: it activates from the very first moment of state custody. Early presence of defense counsel restores procedural balance between prosecutorial power and the citizen, allowing immediate auditing of police reports and preventing irreversible procedural flaws.'}
            </p>
          </div>

          {/* BLOQUE 3: AUDITORÍA JUDICIAL Y CONTROL PROBATORIO (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Ejes Críticos del Control Judicial de la Aprehensión' : '3. Critical Axes of Judicial Oversight'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La audiencia de calificación de flagrancia no puede entenderse como un mero trámite formal. Constituye el escenario procesal determinante donde la defensa técnica debe someter a escrutinio riguroso los siguientes presupuestos:'
                : 'The preliminary detention review hearing cannot be approached as a routine formality. It constitutes the decisive procedural forum where defense counsel must rigorously scrutinize the following elements:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Licitud de la Aprehensión:' : 'Legality of Custody:'}</strong>{' '}
                {isEs 
                  ? 'Verificación de la concurrencia real y objetiva de los supuestos normativos de flagrancia, distinguiendo la inmediatez fáctica de meras sospechas policiales.'
                  : 'Verification of actual statutory criteria for flagrancy, strictly distinguishing factual immediacy from unfounded police suspicion.'}
              </li>
              <li>
                <strong>{isEs ? 'Cadena de Custodia Probatoria:' : 'Chain of Custody:'}</strong>{' '}
                {isEs
                  ? 'Fiscalización de las condiciones de recolección, fijación, embalaje y traslado de evidencias materiales o registros digitales incautados durante el procedimiento.'
                  : 'Auditing the handling, preservation, sealing, and transfer of physical or digital evidence seized during the operation.'}
              </li>
              <li>
                <strong>{isEs ? 'Integridad de los Derechos Fundamentales:' : 'Fundamental Rights Integrity:'}</strong>{' '}
                {isEs
                  ? 'Constatación formal del respeto a la integridad física del detenido, comunicación inmediata con sus familiares y acceso irrestricto a su defensa de confianza.'
                  : 'Verification of personal integrity standards, immediate family notification, and unhindered access to chosen legal counsel.'}
              </li>
              <li>
                <strong>{isEs ? 'Debido Control de Términos:' : 'Strict Term Compliance:'}</strong>{' '}
                {isEs
                  ? 'Examen del cumplimiento estricto de los lapsos constitucionales de presentación ante el tribunal de control competente.'
                  : 'Strict enforcement of mandatory constitutional deadlines governing judicial presentation before magistrate courts.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CONCLUSIÓN DOCTRINAL Y CTA INSTITUCIONAL */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'CRITERIO FORENSE DE LA FIRMA' : 'FORENSIC FIRM CRITERION'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“La defensa penal eficaz exige análisis temprano, control de legalidad y estrategia procesal rigurosa.”' 
                : '“Effective criminal defense requires early analysis, strict legality control, and structured strategy.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados asumimos la representación penal y constitucional con el más alto rigor dogmático, interviniendo de manera inmediata para la salvaguarda efectiva de las garantías procesales de nuestros patrocinados.'
                : 'At Mac Consultores Jurídicos & Asociados, we conduct criminal and constitutional defense under the highest dogmatic standards, providing prompt representation to safeguard our clients’ procedural rights.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'SOLICITAR ASESORÍA PENAL' : 'REQUEST CRIMINAL DEFENSE CONSULTATION'}
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
