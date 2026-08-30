import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs 
    ? 'Confidencialidad y Secreto | Mac Consultores Jurídicos & Asociados' 
    : 'Confidentiality & Professional Secrecy | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Principio fundacional: La información del cliente constituye un ámbito de especial protección profesional y garantía del derecho de defensa.'
    : 'Foundational principle: Client information constitutes a domain of special professional protection and guarantee of the right of defense.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://macconsultoresjuridicos.com/${locale}/about/confidencialidad-secreto`,
      languages: {
        es: `https://macconsultoresjuridicos.com/es/about/confidencialidad-secreto`,
        en: `https://macconsultoresjuridicos.com/en/about/confidencialidad-secreto`,
      },
    },
  };
}

export default async function ConfidencialidadSecretoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-confidencialidad-secreto">
      {/* HEADER DE LA PÁGINA */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{isEs ? 'PRINCIPIO FUNDACIONAL 04' : 'FOUNDATIONAL PRINCIPLE 04'}</span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Confidencialidad y Secreto' : 'Confidentiality & Professional Secrecy'}
          </h1>
          <p className="hero-subtitle">
            {isEs 
              ? 'La información confiada al abogado exige reserva, criterio y responsabilidad profesional.' 
              : 'Information entrusted to counsel demands reserve, discretion, and professional responsibility.'}
          </p>
        </div>
      </header>

      {/* CONTENIDO DOCTRINAL ÍNTEGRO */}
      <section className="section-padding-asym">
        <div className="container">
          
          {/* Sección 1 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs 
                ? 'La información del cliente constituye un ámbito de especial protección profesional' 
                : 'Client information constitutes a domain of special professional protection'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La relación entre abogado y cliente puede involucrar información de extraordinaria sensibilidad: antecedentes personales, documentación patrimonial, información empresarial, estrategias procesales, comunicaciones privadas, datos financieros, documentos corporativos, investigaciones y circunstancias cuya divulgación podría afectar seriamente los intereses de una persona o entidad.'
                : 'The attorney-client relationship can involve information of extraordinary sensitivity: personal history, asset documentation, business information, procedural strategies, private communications, financial data, corporate records, investigations, and circumstances whose disclosure could seriously affect the interests of an individual or entity.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados entendemos la confidencialidad y el secreto profesional como elementos esenciales de la relación jurídica y como condiciones necesarias para que el cliente pueda comunicar a su abogado la información que requiere una adecuada evaluación del asunto.'
                : 'At Mac Consultores Jurídicos & Asociados, we view confidentiality and professional secrecy as essential elements of the legal relationship and as necessary conditions for the client to communicate the information required for an adequate evaluation of the matter.'}
            </p>
          </div>

          {/* Sección 2 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Confidencialidad desde el inicio' : 'Confidentiality from the outset'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La protección de la información no comienza cuando se presenta una demanda ni cuando se formaliza una representación judicial.'
                : 'The protection of information does not begin when a lawsuit is filed or when judicial representation is formalized.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Comienza desde el momento en que se recibe información relacionada con un asunto jurídico, dentro del marco de los deberes profesionales y obligaciones jurídicas aplicables.'
                : 'It begins from the moment information related to a legal matter is received, within the framework of applicable professional duties and legal obligations.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La información proporcionada para evaluar un caso debe ser tratada con criterios de reserva y utilizada únicamente para las finalidades legítimas relacionadas con la intervención profesional correspondiente.'
                : 'Information provided to evaluate a case must be treated with strict reserve criteria and used solely for legitimate purposes related to the corresponding professional intervention.'}
            </p>
          </div>

          {/* Sección 3 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '¿Qué tipo de información puede estar involucrada?' : 'What type of information may be involved?'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Dependiendo de la naturaleza del asunto, pueden existir:'
                : 'Depending on the nature of the matter, there may be:'}
            </p>
            <ul className="mb-1-5rem" style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
              <li>{isEs ? 'Documentos de identidad y representación;' : 'Identity and representation documents;'}</li>
              <li>{isEs ? 'Información patrimonial y financiera;' : 'Asset and financial information;'}</li>
              <li>{isEs ? 'Contratos y documentación corporativa;' : 'Contracts and corporate documentation;'}</li>
              <li>{isEs ? 'Comunicaciones privadas;' : 'Private communications;'}</li>
              <li>{isEs ? 'Antecedentes procesales;' : 'Procedural history and filings;'}</li>
              <li>{isEs ? 'Estrategias de defensa;' : 'Defense strategies;'}</li>
              <li>{isEs ? 'Documentos probatorios;' : 'Evidentiary documents;'}</li>
              <li>{isEs ? 'Información relacionada con investigaciones;' : 'Information related to investigations;'}</li>
              <li>{isEs ? 'Información empresarial sensible; y' : 'Sensitive business information; and'}</li>
              <li>{isEs ? 'Datos proporcionados por terceros vinculados con el asunto.' : 'Data provided by third parties linked to the matter.'}</li>
            </ul>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Cada categoría puede presentar riesgos diferentes y requiere un manejo acorde con su naturaleza.'
                : 'Each category may present distinct risks and requires handling aligned with its specific nature.'}
            </p>
          </div>

          {/* Sección 4 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'El secreto profesional como garantía' : 'Professional secrecy as a guarantee'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'El secreto profesional cumple una función que trasciende la relación privada entre abogado y cliente.'
                : 'Professional secrecy fulfills a function that transcends the private attorney-client relationship.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Constituye una condición esencial para el ejercicio efectivo del Derecho de defensa y para que una persona pueda comunicar a su abogado circunstancias relevantes sin temor a que la información sea utilizada indebidamente.'
                : 'It constitutes an essential condition for the effective exercise of the right of defense and for an individual or entity to communicate relevant circumstances without fear of undue disclosure.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'En materia penal, esta garantía adquiere especial importancia debido a la naturaleza de la información que puede llegar a conocimiento del abogado durante la preparación de una defensa.'
                : 'In criminal matters, this guarantee takes on special importance due to the sensitive nature of information received during defense preparation.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La posibilidad de desarrollar una estrategia jurídica adecuada depende de que exista un espacio profesional de confianza.'
                : 'The ability to develop an adequate legal strategy relies fundamentally on a professional space of trust.'}
            </p>
          </div>

          {/* Sección 5 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Gestión responsable de la información' : 'Responsible information management'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La confidencialidad también exige establecer criterios de manejo de documentación.'
                : 'Confidentiality also requires establishing clear document management criteria.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'En asuntos complejos puede existir intercambio de documentos físicos y digitales, comunicaciones electrónicas, información proveniente de otras jurisdicciones y participación de distintos profesionales.'
                : 'Complex matters often involve exchanging physical and digital records, electronic communications, cross-jurisdictional data, and multi-professional coordination.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Cuando intervienen terceros, la circulación de información debe responder a una finalidad profesional legítima y a una delimitación adecuada de las responsabilidades.'
                : 'When third parties intervene, information flow must answer to a legitimate professional purpose with clearly defined responsibilities.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'En relaciones B2B y asuntos internacionales, esta cuestión adquiere particular relevancia, especialmente cuando participan firmas extranjeras, Local Counsel, consultores, traductores u otros profesionales.'
                : 'In B2B relationships and international matters, this takes on heightened relevance, especially when foreign firms, Local Counsel, consultants, or translators participate.'}
            </p>
          </div>

          {/* Sección 6 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs 
                ? 'Confidencialidad no significa ausencia de límites jurídicos' 
                : 'Confidentiality does not imply the absence of legal limits'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'El deber de reserva debe entenderse dentro del marco constitucional, legal y profesional aplicable.'
                : 'The duty of reserve must be understood within the applicable constitutional, statutory, and professional framework.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La protección de la información no autoriza a desconocer obligaciones jurídicas, órdenes legítimas de autoridad o disposiciones que resulten aplicables a una determinada situación.'
                : 'Information protection does not permit ignoring statutory obligations, lawful authority orders, or mandatory legal provisions applicable to a given situation.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Por ello, cada circunstancia que pueda comprometer información protegida debe ser evaluada individualmente, considerando la naturaleza de los datos, el contexto jurídico y las obligaciones profesionales correspondientes.'
                : 'Consequently, any circumstance involving protected information must be evaluated individually, considering data nature, legal context, and professional obligations.'}
            </p>
          </div>

          {/* Sección 7 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Protección estratégica de la información' : 'Strategic information protection'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'En determinados asuntos, la información no solo tiene valor probatorio: también posee valor estratégico.'
                : 'In certain matters, information possesses not only evidentiary value, but also strategic value.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La anticipación de una línea de defensa, la existencia de determinados documentos, una negociación en curso o la identificación de una contingencia pueden modificar sustancialmente la posición jurídica del cliente si llegan indebidamente al conocimiento de terceros.'
                : 'Anticipating defense lines, document existence, ongoing negotiations, or identified contingencies can substantially alter client posture if prematurely disclosed to third parties.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Por ello, la confidencialidad forma parte también de la estrategia.'
                : 'Therefore, confidentiality forms an integral component of legal strategy.'}
            </p>
          </div>

          {/* Sección 8 */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Un principio inseparable de la confianza' : 'A principle inseparable from trust'}
            </h2>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'El cliente debe poder comunicar aquello que resulta necesario para que el abogado comprenda realmente el problema.'
                : 'Clients must be able to communicate whatever is necessary for counsel to truly understand the legal issue.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Sin confianza informativa, el análisis jurídico queda incompleto.'
                : 'Without full informational trust, legal analysis remains incomplete.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Sin confidencialidad, esa confianza se debilita.'
                : 'Without confidentiality, that trust is compromised.'}
            </p>
            <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Por ello, entendemos el secreto profesional no como una formalidad, sino como una condición estructural de la relación abogado-cliente y de una defensa jurídicamente responsable.'
                : 'We therefore understand professional secrecy not as a mere formality, but as a structural pillar of the attorney-client relationship and of responsible advocacy.'}
            </p>
            <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La información confiada al abogado exige reserva, criterio y responsabilidad.'
                : 'Information entrusted to counsel demands reserve, discretion, and responsibility.'}
            </p>
          </div>

          {/* Botón de retorno */}
          <div className="mb-2rem">
            <Link href={getRoute(locale, 'about')} className="btn btn-primary">
              {isEs ? '← VOLVER A LA FIRMA' : '← BACK TO THE FIRM'}
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
