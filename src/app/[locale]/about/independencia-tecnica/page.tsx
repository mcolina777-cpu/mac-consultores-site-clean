import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs 
    ? 'Independencia Técnica | Mac Consultores Jurídicos & Asociados' 
    : 'Technical Independence | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Principio fundacional: Criterio jurídico objetivo, innegociable y libre de injerencias ajenas al análisis técnico del Derecho.'
    : 'Foundational principle: Objective, non-negotiable legal criteria free from interference outside technical legal analysis.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://macconsultoresjuridicos.com/${locale}/about/independencia-tecnica`,
      languages: {
        es: `https://macconsultoresjuridicos.com/es/about/independencia-tecnica`,
        en: `https://macconsultoresjuridicos.com/en/about/independencia-tecnica`,
      },
    },
  };
}

export default async function IndependenciaTecnicaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-independencia-tecnica">
      {/* HEADER DE LA PÁGINA */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{isEs ? 'PRINCIPIO FUNDACIONAL 02' : 'FOUNDATIONAL PRINCIPLE 02'}</span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Independencia Técnica' : 'Technical Independence'}
          </h1>
          <p className="hero-subtitle">
            {isEs 
              ? 'Autonomía funcional, rigor probatorio y criterio profesional innegociable.' 
              : 'Functional autonomy, evidentiary rigor, and non-negotiable professional judgment.'}
          </p>
        </div>
      </header>

      {/* CONTENIDO DOCTRINAL COMPLETO */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* Bloque 1: El criterio jurídico no se negocia */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'El criterio jurídico no se negocia' : 'Legal criteria is non-negotiable'}
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
                ? 'La relación abogado-cliente exige confianza, pero la confianza profesional no significa subordinación del criterio jurídico a las expectativas del cliente.'
                : 'The attorney-client relationship demands trust, yet professional trust does not mean subordinating legal judgment to client expectations.'}
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
                ? 'En Mac Consultores Jurídicos & Asociados entendemos la independencia técnica como la capacidad y obligación de formular criterios jurídicos libres de presiones, intereses externos o conveniencias ajenas al análisis profesional del asunto.'
                : 'At Mac Consultores Jurídicos & Asociados, we define technical independence as both the capacity and the duty to formulate legal opinions free from external pressures, conflicts of interest, or considerations alien to rigorous professional analysis.'}
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
                ? 'El abogado debe escuchar al cliente, comprender sus objetivos y considerar sus legítimos intereses. Pero la decisión sobre la viabilidad jurídica de una actuación debe sustentarse en el Derecho, los hechos comprobables, la prueba disponible y la estrategia técnicamente más adecuada.'
                : 'The attorney must listen to the client, understand their objectives, and consider their legitimate interests. However, decisions regarding the legal viability of any action must be grounded in the law, verifiable facts, available evidence, and technically sound strategy.'}
            </p>
          </div>

          {/* Bloque 2: Independencia frente a las expectativas */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Independencia frente a las expectativas' : 'Independence from unrealistic expectations'}
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
                ? 'Uno de los mayores riesgos de la práctica jurídica consiste en confundir lo que el cliente desea obtener con aquello que jurídicamente puede obtenerse.'
                : 'One of the greatest risks in legal practice lies in confusing what the client wishes to achieve with what can legally be attained.'}
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
                ? 'Una expectativa legítima no transforma una pretensión jurídicamente inviable en una estrategia recomendable.'
                : 'A legitimate expectation does not transform a legally unfeasible claim into an advisable course of action.'}
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
                ? 'Por ello, nuestra metodología exige comunicar tanto las fortalezas como las debilidades del caso. Cuando consideramos que una determinada actuación presenta riesgos significativos, carece de fundamento suficiente o no constituye la alternativa más conveniente, lo señalamos con claridad.'
                : 'Therefore, our methodology demands candid communication regarding both the strengths and weaknesses of a case. When an action carries substantial risk, lacks sufficient basis, or proves suboptimal, we state it with absolute clarity.'}
            </p>
          </div>

          {/* Bloque 3: Criterio profesional */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Criterio profesional y elementos objetivos' : 'Professional judgment and objective elements'}
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
                ? 'La independencia técnica exige que las decisiones jurídicas se construyan a partir de elementos objetivos:'
                : 'Technical independence requires constructing legal decisions upon objective, verifiable foundations:'}
            </p>
            <ul className="service-list mb-1-5rem" style={{ listStyle: 'none', paddingLeft: 0, borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.2rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'Los hechos acreditados o susceptibles de acreditación;' : 'Facts proven or capable of being proven;'}</li>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'El marco constitucional y legal aplicable;' : 'The applicable constitutional and statutory framework;'}</li>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'La jurisprudencia relevante y doctrina vinculante;' : 'Relevant case law and binding doctrine;'}</li>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'La situación procesal concreta del expediente;' : 'The specific procedural posture of the case;'}</li>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'Los elementos probatorios disponibles y su fuerza de convicción;' : 'Available evidentiary elements and their probative value;'}</li>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'Los riesgos jurídicos y procesales identificados;' : 'Identified legal and procedural risks;'}</li>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'Las alternativas estratégicas existentes; y' : 'Existing strategic alternatives; and'}</li>
              <li style={{ marginBottom: '0.8rem' }}>{isEs ? 'Los objetivos legítimos y transparentes del cliente.' : 'The client’s legitimate and transparent objectives.'}</li>
            </ul>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}
            >
              {isEs
                ? 'Esta estructura permite diferenciar el criterio jurídico profesional de una simple opinión intuitiva.'
                : 'This methodical structure decisively distinguishes rigorous professional judgment from intuitive opinion.'}
            </p>
          </div>

          {/* Bloque 4: Independencia y estrategia de defensa */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Independencia y estrategia de defensa' : 'Independence and defense strategy'}
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
                ? 'En materia penal y procesal penal, la independencia adquiere una dimensión particularmente relevante. La defensa puede verse sometida a presión por la urgencia, por la exposición pública del asunto o por la necesidad de responder rápidamente a una actuación de la contraparte.'
                : 'In criminal and procedural criminal defense, independence assumes a critical role. Defense counsel may face acute pressure arising from urgency, public exposure, or the need to counter immediate actions by opposing parties.'}
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
                ? 'Precisamente en estos escenarios, el criterio técnico debe conservar su autonomía. Una decisión procesal puede producir consecuencias posteriores; por ello, la conveniencia de una actuación debe evaluarse no solo por su efecto inmediato, sino por su impacto dentro de la estrategia general.'
                : 'In such high-stakes scenarios, technical judgment must preserve absolute autonomy. A procedural choice carries lasting effects; hence, any action must be weighed not solely by its immediate outcome, but by its long-term strategic impact.'}
            </p>
          </div>

          {/* Bloque 5: Independencia frente a terceros */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Independencia frente a terceros' : 'Independence from third parties'}
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
                ? 'La autonomía profesional también requiere preservar el criterio jurídico frente a intereses de terceros. En asuntos corporativos, empresariales o transfronterizos pueden intervenir socios, administradores, asesores, otras firmas, consultores o representantes.'
                : 'Professional autonomy also demands safeguarding legal criteria against third-party interests. In corporate, commercial, or cross-border matters, partners, officers, co-counsel, consultants, or corporate agents frequently intervene.'}
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
                ? 'La coordinación entre profesionales es compatible con la independencia siempre que cada participante conozca su función y conserve responsabilidad sobre el ámbito técnico que le corresponde. Cuando actuamos como Local Counsel, por ejemplo, nuestra función consiste en aportar criterio jurídico venezolano, sin interferir indebidamente en la dirección estratégica que corresponda a la firma extranjera.'
                : 'Interprofessional coordination aligns fully with independence when each party recognizes their role and retains technical responsibility over their domain. When serving as Local Counsel, for instance, our duty is to deliver rigorous Venezuelan legal insight without overstepping the global strategy led by lead counsel.'}
            </p>
          </div>

          {/* Bloque 6: Decir lo jurídicamente necesario */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Decir lo jurídicamente necesario' : 'Stating what is legally necessary'}
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
                ? 'La independencia técnica puede exigir transmitir conclusiones que el cliente preferiría no recibir. Una evaluación profesional responsable debe poder señalar con honestidad la viabilidad, los riesgos, la insuficiencia probatoria o desaconsejar el inicio de acciones en condiciones desfavorables.'
                : 'Technical independence may require delivering conclusions the client might prefer not to hear. Responsible advocacy involves honestly highlighting risks, evidentiary deficiencies, or advising against initiating proceedings under unfavorable terms.'}
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
                ? 'Esta capacidad de discrepar profesionalmente constituye una expresión de lealtad y confianza, no una falta de alineación con el cliente.'
                : 'This capacity for principled professional dissent represents a profound expression of loyalty and trust, not a divergence from client advocacy.'}
            </p>
          </div>

          {/* Bloque 7: Independencia como garantía de calidad */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? 'Independencia como garantía de calidad' : 'Independence as a quality guarantee'}
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
                ? 'La independencia técnica protege tanto al cliente como al abogado. Protege al cliente porque evita que las decisiones jurídicas sean determinadas por factores ajenos al Derecho; y protege al profesional porque permite mantener una actuación coherente con sus deberes, responsabilidades y estándares técnicos.'
                : 'Technical independence protects both client and counsel. It protects the client by ensuring legal decisions are never swayed by extraneous factors, and shields counsel by upholding high standards of ethical and technical coherence.'}
            </p>
            <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.75 }}>
              {isEs
                ? 'Nuestra finalidad no es decir al cliente aquello que desea escuchar, sino proporcionar el criterio jurídico que necesita para tomar una decisión informada.'
                : 'Our purpose is not merely to echo what a client wishes to hear, but to deliver the robust legal judgment necessary to make truly informed decisions.'}
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
              {isEs ? 'PRINCIPIO FUNDACIONAL 02' : 'FOUNDATIONAL PRINCIPLE 02'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La independencia técnica exige formular el criterio jurídico que corresponde, incluso cuando no coincida con la expectativa inicial.”'
                : '“Technical independence requires delivering the legal judgment that is warranted, even when it differs from an initial expectation.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados fundamenta cada recomendación en el Derecho, los hechos verificables, la prueba disponible y una evaluación objetiva de los riesgos.'
                : 'Mac Consultores Jurídicos & Asociados grounds every recommendation in the law, verifiable facts, available evidence, and an objective assessment of risk.'}
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
