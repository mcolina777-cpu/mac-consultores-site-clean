import React from 'react';
import Link from 'next/link';

export default async function ReglamentoCompleto({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="page-reglamento-completo">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/probono-penal`}>Programa Pro Bono</Link> / Reglamento Completo
          </span>
          <h1 className="serif">PROGRAMA PRO BONO</h1>
          <p className="hero-subtitle text-muted mt-1rem">
            MAC CONSULTORES JURÍDICOS & ASOCIADOS — RESPONSABILIDAD PROFESIONAL Y ACCESO A LA ORIENTACIÓN JURÍDICA
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="layout-reading">
            
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
              <p className="mb-1-5rem text-justify text-muted">
                La pertenencia de un asunto a alguna de estas materias no determina su admisión automática. La firma conservará plena autonomía técnica para determinar la compatibilidad con el Programa.
              </p>

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

            {/* SECCIÓN V */}
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
            </div>

            {/* SECCIÓN VI */}
            <div className="editorial-block mb-3rem">
              <h2 className="serif heading-lg text-primary mb-1rem">VI. PROCEDIMIENTO DE ADMISIÓN</h2>
              <p className="mb-1-5rem text-justify">
                <strong>PRESENTACIÓN DE LA SOLICITUD:</strong> El interesado deberá proporcionar una descripción clara, concreta y veraz de su situación (naturaleza del problema, antecedentes, actuaciones realizadas, procedimientos en curso, fechas y documentación disponible).
              </p>
              <p className="mb-1-5rem text-justify">
                <strong>EVALUACIÓN PRELIMINAR:</strong> Recibida la solicitud, la firma determinará la naturaleza jurídica del asunto, su compatibilidad, posibles conflictos de interés y la posibilidad material de intervenir.
              </p>
              <p className="mb-1-5rem text-justify">
                <strong>DECISIÓN DE ADMISIÓN:</strong> La firma podrá admitir la solicitud, admitirla con alcance limitado, solicitar información adicional o rechazarla. La admisión será comunicada expresamente.
              </p>
            </div>

            {/* SECCIÓN VII A XVI */}
            <div className="editorial-block mb-3rem">
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

            {/* Botón de Retorno */}
            <div className="text-center mt-3rem mb-2rem">
              <Link href={`/${locale}/probono-penal`} className="btn btn-primary">
                Volver al Programa Pro Bono
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
