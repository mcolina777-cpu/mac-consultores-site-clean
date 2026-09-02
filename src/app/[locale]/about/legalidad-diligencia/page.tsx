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
    ? 'Principio fundacional: El ejercicio jurídico como actuación sometida al Derecho, diligencia desde el primer contacto y análisis jurídico responsable.'
    : 'Foundational principle: Legal practice under the rule of law, due diligence from first contact, and responsible legal analysis.';

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

      {/* CONTENIDO DOCTRINAL COMPLETO */}
      <section className="section-padding-asym">
        <div className="container">
          
          {/* Bloque 1: El ejercicio jurídico como actuación sometida al Derecho */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'El ejercicio jurídico como actuación sometida al Derecho' : 'Legal practice under the rule of law'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La actuación profesional de Mac Consultores Jurídicos & Asociados parte de una premisa esencial: toda estrategia jurídica debe desarrollarse dentro del marco establecido por la Constitución, las leyes y las normas que regulan la actuación de los profesionales del Derecho.'
                : 'The professional practice of Mac Consultores Jurídicos & Asociados is rooted in an essential premise: every legal strategy must be developed strictly within the framework established by the Constitution, the laws, and the standards governing legal practitioners.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La defensa de los intereses del cliente no puede confundirse con la utilización de cualquier medio para alcanzar un resultado. El ejercicio profesional exige determinar previamente qué puede hacerse jurídicamente, qué debe hacerse y cuáles son los límites que no pueden ser traspasados.'
                : 'Advocating for a client’s interests must never be confused with employing any means to achieve an outcome. Professional practice demands determining beforehand what is legally permissible, what ought to be done, and the boundaries that must never be crossed.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La legalidad constituye, por tanto, un parámetro de actuación y, al mismo tiempo, un criterio para evaluar la viabilidad de cada estrategia.'
                : 'Legality thus constitutes both an operational parameter and a fundamental criterion for assessing the viability of every strategy.'}
            </p>
          </div>

          {/* Bloque 2: Diligencia desde el primer contacto */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Diligencia desde el primer contacto' : 'Due diligence from first contact'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La diligencia profesional comienza antes de asumir formalmente un asunto.'
                : 'Professional diligence begins prior to formally assuming any matter.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Una adecuada intervención requiere conocer suficientemente los hechos relevantes, identificar la documentación disponible, determinar los objetivos del cliente y establecer cuáles son las cuestiones jurídicas que deben ser examinadas.'
                : 'Proper intervention requires a thorough grasp of the relevant facts, identifying available documentation, defining the client’s objectives, and establishing the key legal questions to be examined.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Por ello, procuramos evitar decisiones sustentadas en información incompleta o en apreciaciones preliminares que todavía no hayan sido verificadas.'
                : 'Consequently, we seek to avoid decisions based on incomplete information or unverified preliminary assumptions.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Cada asunto exige una evaluación proporcional a su naturaleza, complejidad y urgencia.'
                : 'Each matter requires an evaluation proportionate to its nature, complexity, and urgency.'}
            </p>
          </div>

          {/* Bloque 3: Análisis jurídico responsable */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Análisis jurídico responsable' : 'Responsible legal analysis'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La diligencia no significa actuar apresuradamente. Significa actuar oportunamente, técnicamente y con fundamento.'
                : 'Diligence does not mean hasty action. It means acting opportunely, technically, and with sound legal grounds.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'El análisis comprende la identificación de las normas aplicables, la revisión de antecedentes jurisprudenciales cuando resulten pertinentes, la valoración de los riesgos jurídicos y procesales y la determinación de las alternativas disponibles.'
                : 'Our analysis encompasses identifying applicable statutes, reviewing relevant judicial precedents, assessing legal and procedural risks, and determining available alternatives.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'En materia penal y procesal penal, esta exigencia adquiere especial importancia debido a las consecuencias que pueden derivarse de una decisión incorrecta o inoportuna.'
                : 'In criminal and procedural criminal law, this requirement assumes particular significance given the serious ramifications of an incorrect or untimely decision.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Una estrategia defensiva debe considerar no solamente la actuación inmediata, sino también sus posibles efectos sobre las etapas posteriores del procedimiento.'
                : 'A defense strategy must account not only for immediate tactical steps, but also for their subsequent effects throughout all future procedural stages.'}
            </p>
          </div>

          {/* Bloque 4: Control de plazos y actuaciones */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Control de plazos y actuaciones' : 'Control of deadlines and proceedings'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La diligencia profesional también se manifiesta en la gestión ordenada del asunto. La identificación de términos, oportunidades procesales, actuaciones pendientes, documentos necesarios y decisiones que requieren intervención del cliente forma parte de la estructura básica de una representación responsable.'
                : 'Professional diligence is equally evident in the orderly management of the case. Identifying statutory terms, procedural opportunities, pending filings, necessary documentation, and decisions requiring client input forms the core structure of responsible representation.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La complejidad de un caso no justifica la improvisación. Por el contrario, cuanto mayor sea su complejidad, mayor debe ser el nivel de organización requerido para preservar las oportunidades jurídicas disponibles.'
                : 'Case complexity never justifies improvisation. On the contrary, the greater the complexity, the higher the level of organization required to preserve all available legal avenues.'}
            </p>
          </div>

          {/* Bloque 5: Información y expectativas */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Información y expectativas' : 'Information and realistic expectations'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La diligencia comprende igualmente una comunicación responsable con el cliente.'
                : 'Diligence equally demands responsible and transparent communication with the client.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'No consideramos adecuado presentar como certeza aquello que jurídicamente constituye una posibilidad, ni garantizar resultados que dependen de decisiones de autoridades, tribunales, terceros o circunstancias ajenas al control profesional.'
                : 'We do not consider it appropriate to present mere legal possibilities as certainties, nor to guarantee outcomes that depend on courts, public authorities, third parties, or factors outside professional control.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'El cliente debe conocer, dentro de lo razonablemente posible, qué se sabe, qué debe verificarse, cuáles son los riesgos y qué alternativas existen. La honestidad en la evaluación del caso forma parte de la diligencia.'
                : 'The client must know, to the extent reasonably possible, what is established, what requires further verification, what the risks are, and what alternatives exist. Honesty in case assessment is an integral part of due diligence.'}
            </p>
          </div>

          {/* Bloque 6: Legalidad como límite y como garantía */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Legalidad como límite y como garantía' : 'Legality as a boundary and a guarantee'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La legalidad no constituye una restricción externa a la estrategia jurídica. Es precisamente el marco que permite construir una defensa legítima, sostenible y profesionalmente responsable.'
                : 'Legality is not an external constraint on legal strategy; it is the exact framework that makes a defense legitimate, sustainable, and professionally responsible.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Una actuación jurídicamente eficaz debe poder resistir el análisis de su fundamento, procedimiento y finalidad.'
                : 'A legally effective action must withstand scrutiny regarding its legal basis, procedure, and underlying purpose.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Por ello, nuestra metodología procura que cada decisión relevante responda a una pregunta fundamental: ¿Es jurídicamente admisible, técnicamente necesaria y estratégicamente conveniente?'
                : 'Therefore, our methodology ensures every significant decision addresses a fundamental question: Is it legally admissible, technically necessary, and strategically advantageous?'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Cuando estas tres dimensiones coinciden, la actuación profesional adquiere una base sólida.'
                : 'When these three dimensions converge, professional action rests upon solid ground.'}
            </p>
          </div>

          {/* Bloque 7: Un compromiso permanente */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Un compromiso permanente' : 'An enduring commitment'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Legalidad y diligencia no son declaraciones abstractas. Se expresan en la forma de estudiar un expediente, analizar una prueba, revisar un documento, preparar una actuación procesal, evaluar un riesgo o recomendar al cliente una determinada alternativa.'
                : 'Legality and diligence are not abstract declarations. They are expressed in how we study a case file, examine evidence, review documentation, prepare procedural filings, assess risk, or counsel a client on a specific course of action.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Nuestro compromiso consiste en desarrollar cada asunto con rigor jurídico, atención profesional y respeto por los límites que impone el ordenamiento jurídico.'
                : 'Our commitment consists in handling every matter with legal rigor, professional attentiveness, and strict respect for the boundaries imposed by the legal system.'}
            </p>
            <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Porque una estrategia verdaderamente profesional no se mide únicamente por el resultado que pretende alcanzar, sino también por la forma jurídicamente legítima en que procura alcanzarlo.'
                : 'Because a truly professional strategy is measured not merely by the intended result, but also by the legally legitimate means through which it strives to achieve it.'}
            </p>
          </div>

          {/* CIERRE INSTITUCIONAL */}
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {isEs ? 'PRINCIPIO FUNDACIONAL 01' : 'FOUNDATIONAL PRINCIPLE 01'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La legalidad orienta la estrategia; la diligencia permite ejecutarla con responsabilidad, oportunidad y fundamento.”'
                : '“Legality guides strategy; due diligence enables its responsible, timely, and well-grounded execution.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados evalúa cada asunto con rigor técnico, información verificable y respeto irrestricto por el ordenamiento jurídico.'
                : 'Mac Consultores Jurídicos & Asociados evaluates every matter through technical rigor, verifiable information, and strict respect for the legal order.'}
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
