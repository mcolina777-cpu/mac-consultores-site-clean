import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs 
    ? 'Legalidad y Diligencia | Mac Consultores Jurídicos & Asociados' 
    : 'Legality & Due Diligence | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Principio fundacional: Sometimiento estricto a la Constitución, control riguroso de plazos procesales y evaluación técnica con debida diligencia.'
    : 'Foundational principle: Strict adherence to the Constitution, rigorous procedural deadline control, and technical due diligence.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://macconsultoresjuridicos.com/${locale}/about/legalidad-diligencia`,
      languages: {
        es: `https://macconsultoresjuridicos.com/es/about/legalidad-diligencia`,
        en: `https://macconsultoresjuridicos.com/en/about/legalidad-diligencia`,
      },
    },
  };
}

export default async function LegalidadDiligenciaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-legalidad-diligencia">
      {/* HEADER DE LA PÁGINA */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{isEs ? 'PRINCIPIO FUNDACIONAL 01' : 'FOUNDATIONAL PRINCIPLE 01'}</span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Legalidad y Diligencia' : 'Legality & Due Diligence'}
          </h1>
          <p className="hero-subtitle">
            {isEs 
              ? 'Fundamento inquebrantable de toda actuación jurídica y forense.' 
              : 'Unwavering foundation of all legal and forensic action.'}
          </p>
        </div>
      </header>

      {/* CONTENIDO EXTENDIDO CON BALANCE VISUAL */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="detail-content">
              <span className="section-tag">{isEs ? 'MARCO DOCTRINAL' : 'DOCTRINAL FRAMEWORK'}</span>
              <h2 className="serif section-title mb-1-5rem">
                {isEs ? 'Rigor Técnico y Deber Procesal' : 'Technical Rigor and Procedural Duty'}
              </h2>
              <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.7 }}>
                {isEs
                  ? 'En Mac Consultores Jurídicos & Asociados concebimos la legalidad no como una mera formalidad, sino como el eje rector que legitima y robustece cada acto procesal y dictamen consultivo. Nuestro ejercicio profesional descansa en la observancia irrestricta de las garantías constitucionales y procesales sustantivas.'
                  : 'At Mac Consultores Jurídicos & Asociados, we understand legality not as a mere formality, but as the governing axis that legitimizes and strengthens every procedural act and advisory opinion. Our professional practice rests on strict adherence to substantive constitutional and procedural guarantees.'}
              </p>
              <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.7 }}>
                {isEs
                  ? 'La debida diligencia se instrumenta desde la primera conferencia con el cliente, implementando un análisis previo de admisibilidad, procedencia y riesgo que evita litigios temerarios y asegura la máxima protección de los derechos encomendados.'
                  : 'Due diligence is implemented from the initial client conference, conducting a preliminary admissibility, merits, and risk assessment that prevents reckless litigation and secures maximum protection for entrusted rights.'}
              </p>

              <h3 className="serif mb-1rem">{isEs ? 'Pilares de Actuación Forense' : 'Pillars of Forensic Action'}</h3>
              <ul className="service-list mb-2-5rem" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>{isEs ? 'Sometimiento estricto a la Constitución y la Ley: ' : 'Strict adherence to Constitution and Law: '}</strong>
                  {isEs ? 'Alineación de cada tesis defensiva con la doctrina vinculante y el bloque de constitucionalidad.' : 'Alignment of every defensive argument with binding doctrine and constitutional law.'}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>{isEs ? 'Evaluación y diligencia desde el primer contacto: ' : 'Assessment and diligence from first contact: '}</strong>
                  {isEs ? 'Estudio minucioso de elementos probatorios y viabilidad fáctica antes de ejercer acciones.' : 'Meticulous examination of evidence and factual viability prior to initiating actions.'}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>{isEs ? 'Análisis jurídico y procesal responsable: ' : 'Responsible legal and procedural analysis: '}</strong>
                  {isEs ? 'Estructuración metódica de estrategias basadas en precedentes jurisprudenciales consolidados.' : 'Methodical structuring of strategies grounded in established jurisprudence.'}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>{isEs ? 'Control riguroso de plazos y términos: ' : 'Strict control of deadlines and proceedings: '}</strong>
                  {isEs ? 'Supervisión técnica diaria del decurso procesal para precaver caducidades o preclusiones.' : 'Daily technical monitoring of proceedings to prevent forfeitures or lapses.'}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>{isEs ? 'Comunicación transparente y expectativas reales: ' : 'Transparent communication and realistic expectations: '}</strong>
                  {isEs ? 'Claridad absoluta frente al cliente sobre escenarios, riesgos y alcances reales del litigio.' : 'Complete clarity with the client regarding scenarios, risks, and realistic scopes of litigation.'}
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>{isEs ? 'Estrategias fundadas en la legitimidad de los medios: ' : 'Strategies based on legitimate means: '}</strong>
                  {isEs ? 'Prohibición deontológica de tácticas dilatorias o fraudulentas, primando la lealtad procesal.' : 'Deontological prohibition of dilatory or fraudulent tactics, prioritizing procedural loyalty.'}
                </li>
              </ul>

              <Link href={getRoute(locale, 'about')} className="btn btn-primary">
                {isEs ? '← VOLVER A LA FIRMA' : '← BACK TO THE FIRM'}
              </Link>
            </div>

            {/* COLUMNA VISUAL DE BALANCE */}
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_REUNIONES_1_OPT.webp" type="image/webp" />
                <img
                  src="/assets/img/SALA_REUNIONES_1_OPT.jpg"
                  alt="Despacho institucional de Mac Consultores Jurídicos & Asociados"
                  width={2752}
                  height={1536}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
