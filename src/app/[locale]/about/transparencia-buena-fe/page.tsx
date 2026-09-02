import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs 
    ? 'Transparencia y Buena Fe | Mac Consultores Jurídicos & Asociados' 
    : 'Transparency & Good Faith | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Principio fundacional: Una relación profesional construida sobre información clara, lealtad y honestidad recíproca.'
    : 'Foundational principle: A professional relationship built on clear information, loyalty, and mutual honesty.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://macconsultoresjuridicos.com/${locale}/about/transparencia-buena-fe`,
      languages: {
        es: `https://macconsultoresjuridicos.com/es/about/transparencia-buena-fe`,
        en: `https://macconsultoresjuridicos.com/en/about/transparencia-buena-fe`,
      },
    },
  };
}

export default async function TransparenciaBuenaFePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-transparencia-buena-fe">
      {/* HEADER DE LA PÁGINA */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{isEs ? 'PRINCIPIO FUNDACIONAL 03' : 'FOUNDATIONAL PRINCIPLE 03'}</span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Transparencia y Buena Fe' : 'Transparency & Good Faith'}
          </h1>
          <p className="hero-subtitle">
            {isEs 
              ? 'Una relación profesional construida sobre información clara, lealtad y honestidad recíproca.' 
              : 'A professional relationship built on clear information, loyalty, and mutual honesty.'}
          </p>
        </div>
      </header>

      {/* CONTENIDO DOCTRINAL ÍNTEGRO */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* Sección 1 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Una relación profesional construida sobre información clara' : 'A professional relationship built on clear information'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La confianza entre abogado y cliente no se construye únicamente mediante conocimiento técnico. También depende de la claridad con la que se establecen las condiciones de la relación profesional.'
                : 'Trust between attorney and client is not built solely on technical knowledge. It also depends on the clarity with which the conditions of the professional relationship are established.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados entendemos la transparencia y la buena fe como principios que deben estar presentes desde la evaluación inicial del asunto hasta la conclusión de la intervención profesional.'
                : 'At Mac Consultores Jurídicos & Asociados, we understand transparency and good faith as principles that must be present from the initial evaluation of the matter until the conclusion of professional intervention.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'El cliente debe conocer, dentro de lo razonablemente posible, qué servicio se prestará, cuál será su alcance, qué información se necesita, cuáles son los riesgos, qué responsabilidades corresponden a cada parte y bajo qué condiciones se desarrollará la relación.'
                : 'The client must know, within what is reasonably possible, what service will be provided, what its scope will be, what information is needed, what the risks are, what responsibilities belong to each party, and under what conditions the relationship will develop.'}
            </p>
          </div>

          {/* Sección 2 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Alcance claramente definido' : 'Clearly defined scope'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Cada asunto debe comenzar con una determinación precisa de aquello que se solicita.'
                : 'Every matter must begin with a precise determination of what is being requested.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'No es lo mismo una consulta jurídica que una investigación, una opinión legal, una representación judicial, una gestión documental o una estrategia integral de defensa.'
                : 'A legal consultation is not the same as an investigation, a legal opinion, judicial representation, document management, or a comprehensive defense strategy.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Por ello, procuramos delimitar previamente el objeto de la intervención y evitar que las expectativas del cliente excedan el servicio efectivamente contratado.'
                : 'Therefore, we seek to define beforehand the object of the intervention and prevent client expectations from exceeding the service actually retained.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Esta delimitación también permite identificar cuándo un asunto requiere una actuación adicional o una ampliación del encargo.'
                : 'This delimitation also makes it possible to identify when a matter requires additional action or an expansion of the mandate.'}
            </p>
          </div>

          {/* Sección 3 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Información completa y verificable' : 'Complete and verifiable information'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La calidad del asesoramiento jurídico depende, en buena medida, de la calidad de la información proporcionada.'
                : 'The quality of legal advice depends, to a large extent, on the quality of the information provided.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'El cliente debe comunicar los hechos relevantes de manera completa y proporcionar la documentación disponible, incluyendo aquellos elementos que puedan resultar desfavorables para su posición.'
                : 'The client must communicate relevant facts fully and provide available documentation, including elements that may be unfavorable to their position.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Ocultar información jurídicamente relevante puede alterar la evaluación del riesgo y conducir a una estrategia equivocada.'
                : 'Concealing legally relevant information can distort risk assessment and lead to a misguided strategy.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'De nuestra parte, corresponde analizar la información recibida con criterio profesional, identificar vacíos relevantes y solicitar los elementos adicionales que sean necesarios para una evaluación adecuada.'
                : 'On our part, it is our duty to analyze the information received with professional judgment, identify relevant gaps, and request any additional elements necessary for an appropriate evaluation.'}
            </p>
          </div>

          {/* Sección 4 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Riesgos y posibilidades' : 'Risks and possibilities'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La buena fe profesional exige evitar promesas de resultados.'
                : 'Professional good faith requires avoiding promises of outcomes.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'En un procedimiento judicial o administrativo existen variables que no dependen exclusivamente del abogado: decisiones de tribunales, autoridades, contrapartes, terceros, circunstancias probatorias y evolución procesal.'
                : 'In a judicial or administrative proceeding, there are variables that do not depend exclusively on the attorney: decisions of courts, authorities, opposing parties, third parties, evidentiary circumstances, and procedural developments.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Por ello, distinguimos entre posibilidades jurídicas, riesgos identificables y resultados que no pueden garantizarse.'
                : 'Therefore, we distinguish between legal possibilities, identifiable risks, and outcomes that cannot be guaranteed.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Una evaluación honesta puede ser menos atractiva que una promesa optimista, pero proporciona al cliente una base mucho más segura para decidir.'
                : 'An honest evaluation may be less appealing than an optimistic promise, but it provides the client with a much safer foundation for decision-making.'}
            </p>
          </div>

          {/* Sección 5 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Honorarios y condiciones económicas' : 'Fees and economic conditions'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La transparencia también debe alcanzar los aspectos económicos de la relación.'
                : 'Transparency must also extend to the economic aspects of the relationship.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Siempre que las características del asunto lo permitan, deben establecerse de manera clara el alcance del trabajo, la estructura de honorarios, los gastos que eventualmente puedan generarse y las condiciones relevantes para su ejecución.'
                : 'Whenever the characteristics of the matter allow, the scope of work, fee structure, expenses that may eventually arise, and relevant conditions for execution must be clearly established.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La claridad económica evita confusiones posteriores y permite que ambas partes conozcan las condiciones bajo las cuales se desarrolla la relación profesional.'
                : 'Financial clarity prevents subsequent misunderstandings and allows both parties to know the conditions under which the professional relationship develops.'}
            </p>
          </div>

          {/* Sección 6 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Buena fe en la relación profesional' : 'Good faith in the professional relationship'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La buena fe no corresponde exclusivamente al abogado.'
                : 'Good faith does not belong exclusively to the attorney.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'También exige una conducta colaborativa del cliente: proporcionar información verdadera, comunicar oportunamente cambios relevantes, atender solicitudes documentales y respetar las condiciones acordadas.'
                : 'It also requires collaborative conduct from the client: providing truthful information, communicating relevant changes promptly, responding to document requests, and respecting agreed conditions.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La relación profesional funciona adecuadamente cuando ambas partes actúan con lealtad, cooperación y honestidad.'
                : 'The professional relationship works properly when both parties act with loyalty, cooperation, and honesty.'}
            </p>
          </div>

          {/* Sección 7 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Transparencia como mecanismo de prevención' : 'Transparency as a prevention mechanism'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Una comunicación clara permite detectar tempranamente problemas que podrían afectar la estrategia.'
                : 'Clear communication allows early detection of issues that could affect strategy.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Si surge nueva información, cambia la situación procesal o aparece una contingencia no prevista, la estrategia puede necesitar ser revisada.'
                : 'If new information arises, the procedural situation changes, or an unforeseen contingency appears, the strategy may need to be revised.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Informar oportunamente permite adoptar decisiones antes de que una circunstancia se convierta en un problema mayor.'
                : 'Timely reporting enables decisions to be made before a circumstance turns into a major problem.'}
            </p>
          </div>

          {/* Sección 8 */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Una relación basada en confianza verificable' : 'A relationship based on verifiable trust'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Para nosotros, la transparencia no significa simplemente proporcionar información.'
                : 'For us, transparency does not simply mean providing information.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Significa establecer una relación profesional en la que el cliente pueda comprender qué estamos haciendo, por qué lo hacemos, qué riesgos existen y cuáles son las alternativas disponibles.'
                : 'It means establishing a professional relationship in which the client can understand what we are doing, why we are doing it, what risks exist, and what alternatives are available.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'La buena fe completa esa estructura mediante una conducta profesional caracterizada por lealtad, honestidad y coherencia.'
                : 'Good faith completes that structure through professional conduct characterized by loyalty, honesty, and consistency.'}
            </p>
            <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'La confianza jurídica no se solicita: se construye mediante actuaciones transparentes.'
                : 'Legal trust is not requested: it is built through transparent actions.'}
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
              {isEs ? 'PRINCIPIO FUNDACIONAL 03' : 'FOUNDATIONAL PRINCIPLE 03'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La confianza profesional se construye mediante información clara, honestidad en la evaluación y coherencia en cada actuación.”'
                : '“Professional trust is built through clear information, honest assessment, and consistency in every action.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados promueve relaciones profesionales definidas por la transparencia, la buena fe y una comunicación responsable durante cada etapa del asunto.'
                : 'Mac Consultores Jurídicos & Associates promotes professional relationships defined by transparency, good faith, and responsible communication throughout every stage of a matter.'}
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
