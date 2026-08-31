import React from 'react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? "Official Pro Bono Program Guidelines | Mac Consultores Jurídicos & Asociados"
      : "Reglamento Oficial del Programa Pro Bono | Mac Consultores Jurídicos & Asociados",
    description: isEn
      ? "Institutional terms, operational scope, and admission procedures of the Pro Bono Program."
      : "Términos institucionales, alcance operativo y procedimiento de admisión del Programa Pro Bono.",
  };
}

export default async function ReglamentoCompleto({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <main className="page-reglamento-completo">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/probono-penal`}>
              {isEn ? 'Pro Bono Program' : 'Programa Pro Bono'}
            </Link> / {isEn ? 'Official Guidelines' : 'Reglamento Completo'}
          </span>
          <h1 className="serif">{isEn ? 'PRO BONO PROGRAM' : 'PROGRAMA PRO BONO'}</h1>
          <p className="hero-subtitle text-muted mt-1rem">
            MAC CONSULTORES JURÍDICOS & ASOCIADOS — {isEn ? 'PROFESSIONAL RESPONSIBILITY AND ACCESS TO LEGAL GUIDANCE' : 'RESPONSABILIDAD PROFESIONAL Y ACCESO A LA ORIENTACIÓN JURÍDICA'}
          </p>

          {/* Selector bilingüe de versión */}
          <div className="mt-1-5rem">
            <span className="text-xs text-muted mr-0-5rem">{isEn ? 'Switch version:' : 'Cambiar idioma:'}</span>
            <Link
              href="/es/probono-penal/reglamento-completo"
              className={`text-xs px-2 py-1 rounded ${!isEn ? 'font-bold bg-primary text-white' : 'text-muted border'}`}
            >
              Español
            </Link>
            {' '}
            <Link
              href="/en/probono-penal/reglamento-completo"
              className={`text-xs px-2 py-1 rounded ${isEn ? 'font-bold bg-primary text-white' : 'text-muted border'}`}
            >
              English
            </Link>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="layout-reading">

            {isEn ? (
              /* ======================= ENGLISH VERSION ======================= */
              <>
                {/* SECTION I */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">I. INSTITUTIONAL PRESENTATION</h2>
                  <h3 className="font-bold text-primary mb-0-5rem">WHAT IS THE PRO BONO PROGRAM?</h3>
                  <p className="mb-1-5rem text-justify">
                    The Pro Bono Program of Mac Consultores Jurídicos & Asociados is an institutional initiative of professional social responsibility designed to facilitate, within the firm's capacity and availability, access to initial legal guidance for individuals who, due to their specific circumstances, require assistance in understanding the legal dimensions of a concrete situation.
                  </p>
                  <p className="mb-1-5rem text-justify">
                    The Program expresses the firm's commitment to access to justice, the protection of rights, and the promotion of a legal culture based on knowledge of the law, prevention, and the responsible use of institutional mechanisms.
                  </p>
                  <p className="mb-1-5rem text-justify">
                    Pro bono work is understood by the firm as a manifestation of professional responsibility and social commitment, and not as a method for the ordinary provision of legal services.
                  </p>
                  <p className="mb-1-5rem text-justify font-semibold">
                    Consequently, the Program is limited, selective, and subject to prior evaluation.
                  </p>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">SOCIAL FUNCTION</h3>
                  <p className="mb-1rem text-justify">
                    The social function of the Program consists of contributing, within a strictly defined professional framework, to reducing barriers to legal guidance. The initiative aims to:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Facilitate an initial legal approach to situations involving legally relevant rights or interests.</li>
                    <li>b) Guide applicants on the preliminary legal nature of their circumstances.</li>
                    <li>c) Identify potential legal or institutional avenues that may be relevant.</li>
                    <li>d) Promote knowledge of available rights, duties, and legal mechanisms.</li>
                    <li>e) Foster a culture of prevention and responsible legal action.</li>
                    <li>f) Advise applicants on the necessity of seeking assistance from other professionals, public bodies, or specialized institutions when appropriate.</li>
                  </ul>
                  <p className="mb-1-5rem text-justify text-muted">
                    The Program does not intend to substitute public legal aid, public defense, relevant institutional services, or the retention of private legal counsel when necessary.
                  </p>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">NATURE OF THE PROGRAM</h3>
                  <p className="mb-1rem">The Pro Bono Program is:</p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Institutional.</li>
                    <li>b) Voluntary.</li>
                    <li>c) Free of charge regarding the expressly accepted scope.</li>
                    <li>d) Limited.</li>
                    <li>e) Selective.</li>
                    <li>f) Documentary and advisory in nature.</li>
                    <li>g) Subject to legal, technical, ethical, and operational evaluation.</li>
                  </ul>
                  <div className="callout-box bg-soft p-1-5rem rounded-8 mb-2rem border-left-accent">
                    <p className="font-bold text-primary mb-0">
                      The receipt of an application does not constitute case acceptance, legal representation, power of attorney, retaining counsel, or an obligation of intervention by the firm.
                    </p>
                  </div>

                  <h3 className="font-bold text-primary mt-2rem mb-1rem">PROGRAM PRINCIPLES</h3>
                  <p className="mb-1-5rem text-justify"><strong>4.1. LEGALITY:</strong> All interventions will be conducted strictly within the applicable legal framework and corresponding constitutional, statutory, and professional principles.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.2. TECHNICAL INDEPENDENCE:</strong> The decision to accept, reject, or limit an application will be based on legal, technical, ethical, institutional, and operational capacity criteria.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.3. PROFESSIONAL RESPONSIBILITY:</strong> Admitted interventions will be conducted with seriousness, prudence, diligence, and technical rigor.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.4. CONFIDENTIALITY:</strong> All submitted information will be treated with professional privilege and confidentiality, in compliance with applicable statutory and professional standards.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.5. TRANSPARENCY:</strong> Applicants will be informed, where appropriate, of the exact scope of intervention, its limits, and actions excluded from the Program.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.6. APPLICANT AUTONOMY:</strong> The guidance provided does not replace the applicant's autonomy or decisions. Subsequent decisions remain the applicant's sole responsibility.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.7. NON-DISCRIMINATION:</strong> Evaluation of applications will be conducted under objective legal, technical, and professional standards without arbitrary discrimination.</p>
                </div>

                {/* SECTION II */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">II. PROGRAM SCOPE</h2>
                  <h3 className="font-bold text-primary mb-0-5rem">MONTHLY CAPACITY</h3>
                  <p className="mb-1-5rem text-justify">
                    Mac Consultores Jurídicos & Asociados will handle between <strong>ONE (1) and TWO (2)</strong> pro bono cases per month. The effective number of cases may be fewer when:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) No compatible applications are received.</li>
                    <li>b) Received applications do not satisfy admission criteria.</li>
                    <li>c) Conflicts of interest arise.</li>
                    <li>d) The firm's operational capacity precludes responsible handling.</li>
                    <li>e) The matter exceeds the Program's designated scope.</li>
                  </ul>
                  <p className="mb-1-5rem text-justify text-muted">
                    This capacity limit does not confer an enforceable right upon the applicant nor does it guarantee admission.
                  </p>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">AREAS OF FOCUS</h3>
                  <p className="mb-1rem text-justify">
                    The Pro Bono Program is tied to the practice areas of Mac Consultores Jurídicos & Asociados. Special consideration will be given to applications concerning:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Criminal Law.</li>
                    <li>b) Criminal Procedural Law.</li>
                    <li>c) Constitutional Law.</li>
                    <li>d) White-Collar & Corporate Criminal Law.</li>
                    <li>e) Related legal disciplines.</li>
                  </ul>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">FORM OF INTERVENTION</h3>
                  <p className="mb-1rem text-justify">
                    Pro bono intervention is documentary and focused on initial legal orientation. Subject to case circumstances, it may include:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Preliminary review of submitted facts.</li>
                    <li>b) Limited review of relevant documentation.</li>
                    <li>c) Preliminary legal issue identification.</li>
                    <li>d) Initial legal orientation.</li>
                    <li>e) Identification of viable legal/institutional channels.</li>
                    <li>f) Guidance on necessary documentation.</li>
                    <li>g) Formulation of a preliminary legal opinion or recommendation where appropriate.</li>
                  </ul>
                </div>

                {/* SECTION III */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">III. SPECIAL RULES REGARDING CRIMINAL COMPLAINTS</h2>
                  <div className="callout-box bg-soft p-1-5rem rounded-8 mb-1-5rem border-left-accent">
                    <p className="font-bold text-primary mb-0-5rem">GUIDANCE ON COMPLAINTS: MAXIMUM OF TWO (2) PAGES</p>
                    <p className="mb-0 text-justify">
                      When an application concerns the drafting or review of a criminal complaint, pro bono intervention is strictly limited to a maximum of TWO (2) PAGES. This limit reflects the preliminary and advisory nature of the Program.
                    </p>
                  </div>
                  <p className="mb-1-5rem text-justify">
                    The firm is under no obligation to prepare addenda, extensive annexes, successive complaints, or conduct subsequent proceedings exceeding the initial scope.
                  </p>
                </div>

                {/* SECTION IV */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">IV. EXCLUSION OF LITIGATION AND COURT REPRESENTATION</h2>
                  <p className="mb-1rem font-bold text-primary">NO LITIGATION: The Pro Bono Program DOES NOT include litigation or court representation.</p>
                  <p className="mb-1rem">Admission to the Program specifically excludes:</p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Court appearances and representation before judicial tribunals.</li>
                    <li>b) Attendance at hearings.</li>
                    <li>c) Ongoing trial advocacy or public defender services.</li>
                    <li>d) Continuous procedural docket tracking.</li>
                    <li>e) Successive appellate filings or motions.</li>
                    <li>f) Direct representation before the Public Prosecutor's Office or law enforcement agencies.</li>
                    <li>g) Unlimited drafting of procedural briefs.</li>
                    <li>h) Comprehensive legal management of the proceeding.</li>
                    <li>i) Continuous out-of-court negotiations.</li>
                  </ul>
                </div>

                {/* SECTION V TO XVI */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">V. EXCLUSIONS</h2>
                  <p className="mb-1rem">Applications may be rejected if they:</p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Are unrelated to the firm's core practice areas.</li>
                    <li>b) Require permanent representation or active litigation.</li>
                    <li>c) Present conflicts of interest.</li>
                    <li>d) Lack minimal verifiable information.</li>
                    <li>e) Contain demonstrably false, contradictory, or intentionally incomplete facts.</li>
                    <li>f) Seek urgent intervention incompatible with available capacity.</li>
                  </ul>

                  <h2 className="serif heading-lg text-primary mb-1rem mt-2rem">VI. ADMISSION PROCEDURE</h2>
                  <p className="mb-1-5rem text-justify">
                    Applications undergo preliminary verification to evaluate legal subject matter, conflicts of interest, and material availability. Formal admission is notified expressly.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">VII. APPLICANT RESPONSIBILITY</h2>
                  <p className="mb-1-5rem text-justify">
                    Applicants are solely responsible for providing truthful, accurate, and complete information. The firm assumes no liability for omissions or falsities provided by applicants.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">VIII. COSTS AND THIRD-PARTY EXPENSES</h2>
                  <p className="mb-1-5rem text-justify">
                    Intervention is strictly free of attorney fees. It does not cover third-party disbursements, court filing fees, expert witness fees, notary charges, copies, or travel expenses.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">IX. STATUTORY DEADLINES AND URGENT MATTERS</h2>
                  <p className="mb-1-5rem text-justify">
                    Submitting an application does not toll, suspend, or extend any statute of limitations or procedural deadlines. Applicants facing imminent statutory deadlines must immediately retain independent counsel.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">X. NO GUARANTEE OF OUTCOME</h2>
                  <p className="mb-1-5rem text-justify">
                    Guidance represents an initial professional opinion and carries no warranty or guarantee regarding administrative or judicial outcomes.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">XI. ACCEPTANCE OF TERMS</h2>
                  <p className="mb-1-5rem text-justify">
                    Submission of an application constitutes full knowledge and acceptance of all terms, limits, and conditions set forth in these Guidelines.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">XII. SUMMARY PROCEDURE (4 STEPS)</h2>
                  <div className="grid-2 gap-1rem mb-2rem">
                    <div className="bg-soft p-1rem rounded-6"><strong>1. Application:</strong> Clear factual description & documents.</div>
                    <div className="bg-soft p-1rem rounded-6"><strong>2. Evaluation:</strong> Technical check & conflicts review.</div>
                    <div className="bg-soft p-1rem rounded-6"><strong>3. Scope:</strong> Determination of specific advisory scope.</div>
                    <div className="bg-soft p-1rem rounded-6"><strong>4. Conclusion:</strong> Formal delivery of guidance and closing.</div>
                  </div>

                  <h2 className="serif heading-lg text-primary mb-1rem">XIII. INSTITUTIONAL STATEMENT</h2>
                  <div className="bg-soft p-2rem rounded-8 text-center border-subtle">
                    <p className="serif heading-md text-primary font-bold mb-1rem">
                      ONE OR TWO CASES PER MONTH.<br />
                      A TARGETED INTERVENTION.<br />
                      AN ETHICAL COMMITMENT.
                    </p>
                    <p className="text-sm font-bold text-primary mb-0">
                      MAC CONSULTORES JURÍDICOS & ASOCIADOS — PRO BONO PROGRAM
                    </p>
                    <p className="text-xs text-muted mt-0-5rem mb-0">
                      Professional responsibility dedicated to access to legal guidance.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              /* ======================= VERSIÓN ESPAÑOL ======================= */
              <>
                {/* SECCIÓN I */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">I. PRESENTACIÓN INSTITUCIONAL</h2>
                  <h3 className="font-bold text-primary mb-0-5rem">¿QUÉ ES EL PROGRAMA PRO BONO?</h3>
                  <p className="mb-1-5rem text-justify">
                    El Programa Pro Bono de Mac Consultores Jurídicos & Asociados constituye una iniciativa institucional de responsabilidad social profesional destinada a facilitar, dentro de las capacidades y disponibilidad de la firma, el acceso a una primera orientación jurídica a personas que, por sus circunstancias particulares, requieran apoyo para comprender la dimensión jurídica de una situación concreta.
                  </p>
                  <p className="mb-1-5rem text-justify">
                    El Programa expresa el compromiso de la firma con el acceso a la justicia, la protección de los derechos y la promoción de una cultura jurídica basada en el conocimiento de la ley, la prevención y el ejercicio responsable de los mecanismos institucionales.
                  </p>
                  <p className="mb-1-5rem text-justify">
                    El trabajo pro bono es entendido por la firma como una manifestación de responsabilidad profesional y compromiso social, y no como una modalidad de prestación ordinaria de servicios jurídicos.
                  </p>
                  <p className="mb-1-5rem text-justify font-semibold">
                    En consecuencia, el Programa tiene carácter limitado, selectivo y sujeto a evaluación previa.
                  </p>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">FUNCIÓN SOCIAL</h3>
                  <p className="mb-1rem text-justify">
                    La función social del Programa consiste en contribuir, dentro de un marco profesional delimitado, a disminuir determinadas barreras de acceso a la orientación jurídica. La iniciativa procura:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Facilitar una primera aproximación jurídica frente a situaciones que puedan involucrar derechos o intereses jurídicamente relevantes.</li>
                    <li>b) Orientar al solicitante acerca de la naturaleza jurídica preliminar de su situación.</li>
                    <li>c) Identificar posibles vías legales o institucionales que pudieran resultar pertinentes.</li>
                    <li>d) Promover el conocimiento de los derechos, deberes y mecanismos jurídicos disponibles.</li>
                    <li>e) Fomentar una cultura de prevención y actuación jurídica responsable.</li>
                    <li>f) Orientar al solicitante acerca de la necesidad de acudir, cuando corresponda, a otros profesionales, organismos públicos o instituciones especializadas.</li>
                  </ul>
                  <p className="mb-1-5rem text-justify text-muted">
                    El Programa no pretende sustituir la asistencia jurídica pública, la defensa pública, los servicios institucionales correspondientes ni la contratación de representación profesional cuando esta resulte necesaria.
                  </p>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">NATURALEZA DEL PROGRAMA</h3>
                  <p className="mb-1rem">El Programa Pro Bono tiene carácter:</p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Institucional.</li>
                    <li>b) Voluntario.</li>
                    <li>c) Gratuito respecto de la intervención expresamente admitida.</li>
                    <li>d) Limitado.</li>
                    <li>e) Selectivo.</li>
                    <li>f) Documental y orientativo.</li>
                    <li>g) Sujeto a evaluación jurídica, técnica, ética y operativa.</li>
                  </ul>
                  <div className="callout-box bg-soft p-1-5rem rounded-8 mb-2rem border-left-accent">
                    <p className="font-bold text-primary mb-0">
                      La recepción de una solicitud no constituye aceptación del caso, asesoría jurídica, representación, mandato, patrocinio ni obligación de intervención por parte de la firma.
                    </p>
                  </div>

                  <h3 className="font-bold text-primary mt-2rem mb-1rem">PRINCIPIOS DEL PROGRAMA</h3>
                  <p className="mb-1-5rem text-justify"><strong>4.1. LEGALIDAD:</strong> Toda intervención se desarrollará dentro del ordenamiento jurídico aplicable y de los principios constitucionales, legales y profesionales correspondientes.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.2. INDEPENDENCIA TÉCNICA:</strong> La decisión de aceptar, rechazar o limitar una solicitud responderá a criterios jurídicos, técnicos, éticos, institucionales y de capacidad operativa.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.3. RESPONSABILIDAD PROFESIONAL:</strong> La intervención admitida será desarrollada con criterios de seriedad, prudencia, diligencia y rigor técnico.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.4. CONFIDENCIALIDAD:</strong> La información suministrada será tratada con la debida reserva profesional, de conformidad con las obligaciones legales y profesionales aplicables.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.5. TRANSPARENCIA:</strong> El solicitante será informado, dentro de lo correspondiente, acerca del alcance de la intervención, sus límites y las actuaciones que quedan fuera del Programa.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.6. AUTONOMÍA DEL SOLICITANTE:</strong> La orientación proporcionada no sustituye la voluntad ni las decisiones del solicitante. Las decisiones que este adopte posteriormente serán de su propia responsabilidad.</p>
                  <p className="mb-1-5rem text-justify"><strong>4.7. NO DISCRIMINACIÓN:</strong> La evaluación de las solicitudes se realizará conforme a criterios jurídicos, técnicos, profesionales y operativos, sin discriminaciones arbitrarias.</p>
                </div>

                {/* SECCIÓN II */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">II. ALCANCE DEL PROGRAMA</h2>
                  <h3 className="font-bold text-primary mb-0-5rem">CUPO MENSUAL</h3>
                  <p className="mb-1-5rem text-justify">
                    Mac Consultores Jurídicos & Asociados atenderá entre <strong>UNO (1) y DOS (2)</strong> casos pro bono por mes. El número efectivo de casos podrá ser inferior cuando:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) No existan solicitudes compatibles con el Programa.</li>
                    <li>b) Las solicitudes recibidas no cumplan los criterios de admisión.</li>
                    <li>c) Existan conflictos de interés.</li>
                    <li>d) La capacidad operativa de la firma no permita una intervención responsable.</li>
                    <li>e) La naturaleza de los asuntos exceda el alcance del Programa.</li>
                  </ul>
                  <p className="mb-1-5rem text-justify text-muted">
                    El establecimiento de este cupo no constituye un derecho subjetivo del solicitante ni garantiza la admisión de una solicitud.
                  </p>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">LÍNEA EDITORIAL Y ÁREAS DE INTERÉS</h3>
                  <p className="mb-1rem text-justify">
                    El Programa Pro Bono se encuentra vinculado a la línea de especialización de Mac Consultores Jurídicos & Asociados. Tendrán especial consideración aquellas solicitudes relacionadas con:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Derecho Penal.</li>
                    <li>b) Derecho Procesal Penal.</li>
                    <li>c) Derecho Constitucional.</li>
                    <li>d) Criminalidad económica y delitos relacionados con la actividad empresarial.</li>
                    <li>e) Otras materias jurídicas conexas con las anteriores.</li>
                  </ul>

                  <h3 className="font-bold text-primary mt-2rem mb-0-5rem">MODALIDAD DE INTERVENCIÓN</h3>
                  <p className="mb-1rem text-justify">
                    La intervención pro bono tendrá carácter fundamentalmente documental y de orientación jurídica inicial. Según las circunstancias del caso, podrá comprender:
                  </p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Revisión preliminar de la información suministrada.</li>
                    <li>b) Revisión limitada de documentación relevante.</li>
                    <li>c) Identificación preliminar de la cuestión jurídica.</li>
                    <li>d) Orientación jurídica inicial.</li>
                    <li>e) Identificación de posibles vías legales o institucionales.</li>
                    <li>f) Orientación sobre documentación necesaria.</li>
                    <li>g) Elaboración de una observación, recomendación o criterio jurídico preliminar, cuando resulte procedente.</li>
                  </ul>
                </div>

                {/* SECCIÓN III */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">III. RÉGIMEN ESPECIAL DE DENUNCIAS</h2>
                  <div className="callout-box bg-soft p-1-5rem rounded-8 mb-1-5rem border-left-accent">
                    <p className="font-bold text-primary mb-0-5rem">ORIENTACIÓN SOBRE DENUNCIAS: MÁXIMO DE DOS (2) FOLIOS</p>
                    <p className="mb-0 text-justify">
                      Cuando la solicitud se encuentre relacionada con la formulación de una denuncia, la intervención pro bono estará limitada a un máximo de DOS (2) FOLIOS. Este límite responde a la naturaleza documental, orientativa y limitada del Programa.
                    </p>
                  </div>
                  <p className="mb-1-5rem text-justify">
                    La firma no estará obligada a elaborar ampliaciones, anexos, escritos complementarios, denuncias sucesivas, diligencias posteriores o actuaciones derivadas que excedan el alcance originalmente establecido.
                  </p>
                </div>

                {/* SECCIÓN IV */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">IV. EXCLUSIÓN DE LITIGACIÓN Y REPRESENTACIÓN</h2>
                  <p className="mb-1rem font-bold text-primary">NO LITIGACIÓN: El Programa Pro Bono NO comprende litigación ni representación judicial.</p>
                  <p className="mb-1rem">Por tanto, la admisión de una solicitud no comprende:</p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) Representación ante tribunales.</li>
                    <li>b) Comparecencia judicial.</li>
                    <li>c) Asistencia a audiencias.</li>
                    <li>d) Ejercicio de defensa técnica permanente.</li>
                    <li>e) Seguimiento procesal continuado.</li>
                    <li>f) Interposición sucesiva de recursos.</li>
                    <li>g) Contestación permanente de actuaciones procesales.</li>
                    <li>h) Representación ante el Ministerio Público u otros órganos.</li>
                    <li>i) Elaboración ilimitada de escritos procesales.</li>
                    <li>j) Dirección jurídica integral del caso.</li>
                    <li>k) Actuaciones extrajudiciales continuadas.</li>
                  </ul>
                  <p className="mb-1-5rem text-justify">
                    <strong>AUSENCIA DE MANDATO O REPRESENTACIÓN:</strong> La admisión de una solicitud dentro del Programa no constituye por sí misma poder, mandato, patrocinio, representación judicial ni relación profesional permanente.
                  </p>
                </div>

                {/* SECCIÓN V A XVI */}
                <div className="editorial-block mb-3rem">
                  <h2 className="serif heading-lg text-primary mb-1rem">V. EXCLUSIONES</h2>
                  <p className="mb-1rem">Podrán ser rechazadas aquellas solicitudes que:</p>
                  <ul className="editorial-list mb-1-5rem pl-1-5rem">
                    <li>a) No guarden relación razonable con la línea editorial o especialización de la firma.</li>
                    <li>b) Requieran litigación o representación profesional permanente.</li>
                    <li>c) Exijan una dedicación incompatible con la naturaleza limitada del Programa.</li>
                    <li>d) Presenten conflictos de interés.</li>
                    <li>e) Carezcan de información mínima que permita realizar una evaluación responsable.</li>
                    <li>f) Contengan información manifiestamente falsa, contradictoria o deliberadamente incompleta.</li>
                    <li>g) Pretendan obtener una representación jurídica gratuita permanente.</li>
                    <li>h) Requieran actuaciones urgentes que no puedan ser atendidas responsablemente dentro de la capacidad disponible.</li>
                    <li>i) Exijan conocimientos, recursos o especialidades que excedan las capacidades concretas disponibles.</li>
                    <li>j) Persigan finalidades incompatibles con la ley, la ética profesional o la naturaleza institucional del Programa.</li>
                  </ul>

                  <h2 className="serif heading-lg text-primary mb-1rem mt-2rem">VI. PROCEDIMIENTO DE ADMISIÓN</h2>
                  <p className="mb-1-5rem text-justify">
                    <strong>PRESENTACIÓN DE LA SOLICITUD:</strong> El interesado deberá proporcionar una descripción clara, concreta y veraz de su situación (naturaleza del problema, antecedentes, actuaciones realizadas, procedimientos en curso, fechas y documentación disponible).
                  </p>
                  <p className="mb-1-5rem text-justify">
                    <strong>EVALUACIÓN PRELIMINAR:</strong> Recibida la solicitud, la firma determinará la naturaleza jurídica del asunto, su compatibilidad, posibles conflictos de interés y la posibilidad material de intervenir.
                  </p>
                  <p className="mb-1-5rem text-justify">
                    <strong>DECISIÓN DE ADMISIÓN:</strong> La firma podrá admitir la solicitud, admitirla con alcance limitado, solicitar información adicional o rechazarla. La admisión será comunicada expresamente.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">VII. DOCUMENTACIÓN Y RESPONSABILIDAD DEL SOLICITANTE</h2>
                  <p className="mb-1-5rem text-justify">
                    El solicitante será responsable de proporcionar información verdadera, completa y verificable. La firma no será responsable por consecuencias derivadas de información falsa u omitida.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">VIII. GRATUIDAD Y GASTOS</h2>
                  <p className="mb-1-5rem text-justify">
                    La intervención admitida es estrictamente gratuita en cuanto a honorarios. No comprende gastos de terceros (tasas, aranceles, peritajes, certificaciones, copias o traslados).
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">IX. PLAZOS Y SITUACIONES URGENTES</h2>
                  <p className="mb-1-5rem text-justify">
                    La presentación de una solicitud no suspende, interrumpe ni modifica ningún plazo legal o procesal. Ante términos próximos a vencer, el solicitante debe buscar asistencia profesional de inmediato.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">X. CONFIDENCIALIDAD</h2>
                  <p className="mb-1-5rem text-justify">
                    La información recibida será tratada con la debida reserva profesional conforme a las normas deontológicas y legales aplicables.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">XI. AUSENCIA DE GARANTÍA DE RESULTADOS</h2>
                  <p className="mb-1-5rem text-justify">
                    La orientación constituye un criterio inicial y no una garantía de resultados judiciales o administrativos.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">XII. CIERRE DE LA INTERVENCIÓN</h2>
                  <p className="mb-1-5rem text-justify">
                    La intervención concluye al cumplirse el objeto de la orientación, alcanzarse el límite previsto, detectarse conflictos o requerirse litigación.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">XIII. MODIFICACIÓN Y FINALIZACIÓN DEL PROGRAMA</h2>
                  <p className="mb-1-5rem text-justify">
                    La firma se reserva la facultad de modificar, suspender o finalizar el Programa cuando las circunstancias operativas o profesionales lo ameriten.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">XIV. ACEPTACIÓN DE LAS CONDICIONES</h2>
                  <p className="mb-1-5rem text-justify">
                    La presentación de una solicitud supone que el interesado declara conocer y aceptar plenamente todas las condiciones y límites de este Reglamento.
                  </p>

                  <h2 className="serif heading-lg text-primary mb-1rem">XV. PROCEDIMIENTO RESUMIDO (4 ETAPAS)</h2>
                  <div className="grid-2 gap-1rem mb-2rem">
                    <div className="bg-soft p-1rem rounded-6"><strong>1. Solicitud:</strong> Descripción clara y documentación.</div>
                    <div className="bg-soft p-1rem rounded-6"><strong>2. Evaluación:</strong> Verificación técnica y de compatibilidad.</div>
                    <div className="bg-soft p-1rem rounded-6"><strong>3. Alcance:</strong> Determinación de límites de la intervención.</div>
                    <div className="bg-soft p-1rem rounded-6"><strong>4. Cierre:</strong> Orientación y conclusión formal.</div>
                  </div>

                  <h2 className="serif heading-lg text-primary mb-1rem">XVI. DECLARACIÓN INSTITUCIONAL FINAL</h2>
                  <div className="bg-soft p-2rem rounded-8 text-center border-subtle">
                    <p className="serif heading-md text-primary font-bold mb-1rem">
                      UNO O DOS CASOS AL MES.<br />
                      UNA INTERVENCIÓN CONCRETA.<br />
                      UN COMPROMISO PROFESIONAL.
                    </p>
                    <p className="text-sm font-bold text-primary mb-0">
                      MAC CONSULTORES JURÍDICOS & ASOCIADOS — PROGRAMA PRO BONO
                    </p>
                    <p className="text-xs text-muted mt-0-5rem mb-0">
                      Responsabilidad profesional al servicio del acceso a la orientación jurídica.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Botón de Retorno */}
            <div className="text-center mt-3rem mb-2rem">
              <Link href={`/${locale}/probono-penal`} className="btn btn-primary">
                {isEn ? 'Return to Pro Bono Program' : 'Volver al Programa Pro Bono'}
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
