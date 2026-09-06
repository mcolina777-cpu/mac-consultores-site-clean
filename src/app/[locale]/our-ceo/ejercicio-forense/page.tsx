import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Años de Ejercicio Forense | Dr. Marco A. Colina G. | Mac Consultores'
    : 'Years of Forensic Practice | Dr. Marco A. Colina G. | Mac Consultores';
  const description = isEs
    ? 'Más de dos décadas de práctica forense ininterrumpida en litigios penales y constitucionales complejos en Venezuela.'
    : 'Over two decades of uninterrupted forensic practice in complex criminal and constitutional litigation in Venezuela.';
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/our-ceo/ejercicio-forense`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/our-ceo/ejercicio-forense`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/our-ceo/ejercicio-forense`;

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
          alt: 'Dr. Marco A. Colina G. - Práctica Forense',
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

export default async function EjercicioForensePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-ejercicio-forense">
      {/* HEADER DE LA PÁGINA */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'TRAYECTORIA FORENSE / LITIGIO ESTRATÉGICO' : 'FORENSIC PRACTICE / STRATEGIC LITIGATION'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Más de dos décadas de ejercicio profesional ininterrumpido' : 'Over Two Decades of Uninterrupted Forensic Practice'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Dirección técnica, litigación en estrados y conducción procesal en asuntos penales y constitucionales de alta complejidad.'
              : 'Technical direction, courtroom advocacy, and procedural management in complex criminal and constitutional litigation.'}
          </p>
        </div>
      </header>

      {/* CONTENIDO DOCTRINAL */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>

          {/* Sección 1 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. La práctica forense como disciplina de rigor continuado' : '1. Forensic practice as continuous technical discipline'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'El litigio penal y constitucional en Venezuela no admite aproximaciones empíricas o improvisadas. Más de veinte años de presencia activa en tribunales de control, juicio y cortes de apelaciones han forjado un criterio técnico sustentado en la realidad procesal del foro, donde la técnica probatoria y el control de los lapsos procesales son factores relevantes para evaluar la viabilidad de una estrategia de defensa.'
                : 'Criminal and constitutional litigation in Venezuela demands far more than empirical methods. Over twenty years of active presence before trial, preliminary, and appellate courts have forged a rigorous technical criterion grounded in procedural reality, where evidentiary precision and the management of statutory deadlines are relevant factors in assessing the viability of a defense strategy.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La experiencia forense acumulada contribuye a identificar contingencias previsibles, evaluar con realismo los escenarios de riesgo y diseñar esquemas de intervención técnica ajustados a las particularidades de cada jurisdicción y órgano decisor.'
                : 'Accumulated courtroom experience contributes to identifying foreseeable procedural contingencies and supports realistic risk assessment, designing technical defense strategies tailored to the specific dynamics of each jurisdiction.'}
            </p>
          </div>

          {/* Sección 2 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Dirección estratégica en tribunales de instancia y cortes superiores' : '2. Strategic direction before trial and appellate courts'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La intervención forense del Dr. Marco A. Colina G. abarca la conducción directa en audiencias orales, la articulación oportuna de excepciones procesales, la formulación fundada de nulidades por vicios sustanciales y la defensa técnica frente a medidas cautelares o restricciones patrimoniales.'
                : 'Dr. Marco A. Colina G.’s advocacy encompasses courtroom representation in oral hearings, timely assertion of procedural exceptions, substantiation of statutory nullities, and technical defense against precautionary measures or asset restrictions.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La labor en estrados se encuentra enfocada en someter a estricto control técnico la legalidad, pertinencia y necesidad de los medios probatorios promovidos por los órganos de investigación y acusación, resguardando la incolumidad de las garantías judiciales.'
                : 'Courtroom advocacy focuses on exercising strict technical scrutiny over the legality, relevance, and necessity of evidence submitted by prosecutorial authorities, upholding judicial guarantees.'}
            </p>
          </div>

          {/* Sección 3 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Obligación de medios y compromiso deontológico' : '3. Professional obligation of means and ethical commitment'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Cada mandato procesal se asume bajo el principio inquebrantable de la obligación de medios. La firma no formula promesas de resultados ni promueve expectativas infundadas; el patrocinio descansa en la solvencia técnica del argumento, la disciplina en el estudio del expediente y la lealtad absoluta a los intereses legítimos del mandante.'
                : 'Every judicial mandate is undertaken under the strict principle of a professional obligation of means. The firm formulates no outcome promises or unfounded expectations; representation relies strictly on technical argument, meticulous case analysis, and uncompromising loyalty to legitimate client interests.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La ética en el ejercicio forense exige comunicar al cliente con total honestidad la realidad procesal de su caso, evaluando con objetividad tanto las oportunidades jurídicas disponibles como los riesgos inherentes a la controversia.'
                : 'Forensic ethics require communicating the procedural realities of the case with complete transparency, assessing available legal avenues alongside the inherent risks of judicial disputes.'}
            </p>
          </div>

          {/* Sección 4 */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '4. Coordinación de litigios corporativos e intereses internacionales' : '4. Corporate litigation and cross-border coordination'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Asesoría y representación de directivos, accionistas y corporaciones con intereses jurídicos y empresariales en Venezuela y en el exterior, coordinando estrategias forenses integradas ante requerimientos de órganos de investigación y del sistema de justicia penal.'
                : 'Advising and representing executives, shareholders, and corporate entities with legal and business interests in Venezuela and abroad, coordinating integrated forensic strategies before investigative agencies and the judicial system.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La firma actúa con solvencia en la articulación con despachos internacionales y asesores corporativos que requieren un Local Counsel riguroso, confiable y con capacidad de respuesta técnica inmediata en territorio venezolano.'
                : 'The firm regularly collaborates with international law firms and corporate counsel requiring a rigorous, reliable Local Counsel with immediate technical responsiveness within Venezuelan jurisdiction.'}
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
                ? '“La práctica forense rigurosa se sustenta en la disciplina procesal, la preparación técnica del caso y la lealtad al ordenamiento jurídico.”'
                : '“Rigorous forensic practice rests upon procedural discipline, thorough case preparation, and commitment to the rule of law.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Consulte con nuestro equipo profesional para evaluar la viabilidad técnica y la estrategia procesal de su asunto ante los tribunales competentes.'
                : 'Consult with our legal team to evaluate the technical viability and procedural strategy of your matter before the competent courts.'}
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
