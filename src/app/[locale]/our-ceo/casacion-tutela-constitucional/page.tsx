import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Casación y Tutela Constitucional | Dr. Marco A. Colina G. | Mac Consultores'
    : 'Cassation & Constitutional Protection | Dr. Marco A. Colina G. | Mac Consultores';
  const description = isEs
    ? 'Sustanciación técnica de recursos extraordinarios de casación penal y acciones de amparo constitucional ante el Tribunal Supremo de Justicia.'
    : 'Specialized substantiation of extraordinary criminal cassation appeals and constitutional amparo actions before the Supreme Tribunal of Justice.';
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/our-ceo/casacion-tutela-constitucional`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/our-ceo/casacion-tutela-constitucional`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/our-ceo/casacion-tutela-constitucional`;

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
          alt: 'Dr. Marco A. Colina G. - Casación y Tutela Constitucional',
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

export default async function CasacionTutelaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-casacion-tutela">
      {/* HEADER DE LA PÁGINA */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'RECURSOS EXTRAORDINARIOS Y GARANTÍAS FUNDAMENTALES' : 'EXTRAORDINARY APPEALS & FUNDAMENTAL RIGHTS'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Casación Penal y Tutela Constitucional ante el TSJ' : 'Criminal Cassation and Constitutional Protection before the TSJ'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Impugnación extraordinaria por quebrantamiento de forma y vicios de juzgamiento, orientada a instar la tutela de garantías fundamentales.'
              : 'Extraordinary appeals addressing procedural breaches and judicial errors, aimed at seeking the protection of fundamental constitutional rights.'}
          </p>
        </div>
      </header>

      {/* CONTENIDO DOCTRINAL */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>

          {/* Sección 1 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. La naturaleza técnica y extraordinaria de la casación penal' : '1. The technical nature of extraordinary cassation appeals'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'El recurso extraordinario de casación ante la Sala de Casación Penal del Tribunal Supremo de Justicia no constituye una tercera instancia procesal sobre los hechos probados. Es una vía extraordinaria de estricto derecho procesal destinada a fiscalizar la correcta aplicación de la ley sustantiva y el cumplimiento ineludible de las formalidades esenciales del debido proceso por parte de las Cortes de Apelaciones.'
                : 'The extraordinary appeal in cassation before the Criminal Cassation Chamber of the Supreme Tribunal of Justice is not a third factual instance. It is a strict procedural remedy designed to review the proper application of substantive law and procedural compliance by Appellate Courts.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Su interposición exige una técnica recursiva de máxima precisión, donde cada vicio imputado a la sentencia recurrida debe estar rigurosamente articulado bajo los supuestos taxativos establecidos en el Código Orgánico Procesal Penal (COPP).'
                : 'Filing extraordinary appeals demands high procedural precision, where every error attributed to the challenged ruling must be rigorously articulated under the statutory grounds set forth in the Organic Code of Criminal Procedure (COPP).'}
            </p>
          </div>

          {/* Sección 2 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Formalización técnica: vicios in procedendo e in iudicando' : '2. Procedural formalization: in procedendo and in iudicando errors'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La admisión y sustanciación de la casación penal requiere denunciar con exactitud técnica la infracción de ley, la errónea interpretación o la indebida aplicación de normas sustanciales (errores in iudicando), así como los quebrantamientos de formas sustanciales que causen indefensión o la falta manifiesta de motivación en los fallos de alzada (errores in procedendo).'
                : 'The admission and substantiation of criminal cassation requires demonstrating substantive statutory infractions, misinterpretations, or wrongful applications (in iudicando errors), alongside procedural breaches causing defenselessness or lack of motivation in appellate rulings (in procedendo errors).'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Un planteamiento deficiente o la confusión entre cuestiones de hecho y de derecho puede conducir a una decisión de inadmisibilidad o desestimación. Por ello, la formalización recursiva se aborda como una labor de alta orfebrería forense.'
                : 'Deficient pleadings or conflating factual disputes with questions of law may lead to a finding of inadmissibility or dismissal. Consequently, extraordinary appellate advocacy is conducted as a disciplined forensic endeavor.'}
            </p>
          </div>

          {/* Sección 3 */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Tutela constitucional y acción de amparo ante el máximo tribunal' : '3. Constitutional amparo and extraordinary protection'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'Paralelamente a la casación, la activación de acciones de amparo constitucional ante los tribunales superiores y la revisión constitucional ante la Sala Constitucional del Tribunal Supremo de Justicia pueden constituir mecanismos extraordinarios de protección, según el supuesto y la vía procedente, frente a sentencias u omisiones judiciales lesivas de derechos humanos.'
                : 'Alongside cassation, pursuing constitutional protection remedies (amparo actions) before higher courts and constitutional review before the Constitutional Chamber of the TSJ may constitute extraordinary protection mechanisms, depending on the circumstances and the appropriate procedural avenue, in response to judicial acts or omissions infringing upon constitutional rights.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La actuación técnica se orienta a solicitar el restablecimiento de la situación jurídica infringida, denunciando la vulneración flagrante de garantías como el juez natural, la presunción de inocencia, el derecho a la defensa y el debido proceso.'
                : 'Technical advocacy is aimed at seeking the restoration of the infringed legal standing, challenging violations of judicial guarantees such as the natural judge, presumption of innocence, right to defense, and due process.'}
            </p>
          </div>

          {/* Sección 4 */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '4. Examen previo de admisibilidad y viabilidad procesal' : '4. Pre-filing admissibility and technical viability assessment'}
            </h2>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'La formalización de recursos extraordinarios ante el Tribunal Supremo de Justicia exige un control previo y exhaustivo de viabilidad técnica.'
                : 'Pursuing extraordinary remedies before the Supreme Court demands prior viability screening.'}
            </p>
            <p
              className="text-left max-w-100 mb-1-5rem"
              style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}
            >
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados examinamos minuciosamente las actuaciones del expediente para procurar que cada impugnación repose sobre una fundamentación dogmática sólida y doctrina jurisprudencial aplicable, con el objeto de evitar recursos manifiestamente improcedentes y preservar la posición jurídica del justiciable.'
                : 'At Mac Consultores Jurídicos & Asociados, we examine the record carefully to assess whether an appeal has a sound doctrinal basis and applicable case-law support, with the aim of avoiding clearly unviable filings and preserving the client’s procedural position.'}
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
                ? '“La impugnación extraordinaria exige una fundamentación técnica rigurosa para denunciar vicios de juzgamiento y solicitar el restablecimiento de garantías constitucionales.”'
                : '“Extraordinary appellate review demands rigorous technical substantiation to identify and properly raise judicial errors and seek the restoration of constitutional guarantees.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Solicite una consulta profesional para examinar la admisibilidad y viabilidad jurídica de recursos de casación penal o acciones de amparo constitucional.'
                : 'Request a professional consultation to examine the admissibility and legal viability of criminal cassation appeals or constitutional protection remedies.'}
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
