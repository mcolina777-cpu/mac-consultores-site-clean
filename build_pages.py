import json
import os

amparo_html_content = """            <article class="article-content">
                <p class="article-meta" data-i18n="articulo_amparo.meta">Categoría: Constitucional</p>
 
                <p data-i18n="articulo_amparo.p1">En el contexto del Derecho Penal corporativo, el amparo constitucional representa la última y más contundente línea de defensa frente a actuaciones arbitrarias o desproporcionadas del Estado que amenacen la continuidad operativa de una empresa o la libertad de sus directivos.</p>
 
                <h2 data-i18n="articulo_amparo.h2_1">I. El amparo en el entorno procesal contemporáneo</h2>
 
                <p data-i18n="articulo_amparo.p2_1">Una empresa bajo investigación por presuntos delitos tributarios ve bloqueadas la totalidad de sus cuentas bancarias, incluyendo aquellas destinadas a pagar nómina y obligaciones tributarias corrientes. La medida, dictada sin audiencia previa, amenaza la continuidad del negocio y los derechos de terceros no investigados. El amparo, solicitando el levantamiento parcial de la medida, permite restablecer la proporcionalidad.</p>
 
                <p data-i18n="articulo_amparo.p2_2">Vulneración del derecho de defensa: obstaculización del acceso al expediente, restricción del contacto con el abogado defensor o negativa injustificada a la práctica de pruebas.</p>
 
                <p data-i18n="articulo_amparo.p2_3">Violación de la garantía del juez natural: desviación del conocimiento del asunto hacia tribunales no competentes por razón de la materia o el territorio.</p>
 
                <h2 data-i18n="articulo_amparo.h2_2">II. Casos ilustrativos: cuándo el amparo se vuelve imprescindible</h2>
 
                <p data-i18n="articulo_amparo.intro_2">Imaginemos los siguientes escenarios hipotéticos, representativos de situaciones reales que enfrentan empresas y directivos:</p>
 
                <h3 data-i18n="articulo_amparo.h3_2a">Caso I — Bloqueo total de cuentas operativas:</h3>
                <p data-i18n="articulo_amparo.p3_2a">Una empresa bajo investigación por presuntos delitos tributarios ve bloqueadas la totalidad de sus cuentas bancarias, incluyendo aquellas destinadas a pagar nómina y obligaciones tributarias corrientes. La medida, dictada sin audiencia previa, amenaza la continuidad del negocio y los derechos de terceros no investigados. El amparo, solicitando el levantamiento parcial de la medida, permite restablecer la proporcionalidad.</p>
 
                <h3 data-i18n="articulo_amparo.h3_2b">Caso II — Privación preventiva sin motivación suficiente:</h3>
                <p data-i18n="articulo_amparo.p3_2b">Un director financiero es privado de libertad bajo la imputación de fraude corporativo, sin que el acta de audiencia refleje los elementos de convicción que fundan la medida ni justifique el peligro de fuga alegado. La interposición de amparo ante el tribunal superior logra obtener la revisión y sustitución de la medida por una menos gravosa.</p>
 
                <h3 data-i18n="articulo_amparo.h3_2c">Caso III — Restricción de acceso al expediente:</h3>
                <p data-i18n="articulo_amparo.p3_2c">La defensa de un oficial de cumplimiento (compliance officer) imputado por omisión de control en operaciones sospechosas solicita sistemáticamente acceso al expediente, siendo negado de forma reiterada y sin fundamentación. El amparo, invocando la violación del derecho de defensa y el debido proceso, obliga al órgano jurisdiccional a garantizar el acceso.</p>
 
                <h3 data-i18n="articulo_amparo.h3_2d">Caso IV — Jurisdicción inadecuada:</h3>
                <p data-i18n="articulo_amparo.p3_2d">Una causa penal por presuntos delitos financieros es remitida, sin fundamento legal, a un tribunal especial distinto del competente por razón de la materia. Ante la inacción de los recursos ordinarios, el amparo constitucional permite restablecer el derecho al juez natural, garantía de primer orden en cualquier proceso.</p>
 
                <h2 data-i18n="articulo_amparo.h2_3">III. Límites y riesgos del uso del amparo</h2>
 
                <p data-i18n="articulo_amparo.p2_3a">Una comprensión cabal del amparo exige reconocer, con la misma claridad con que se afirman sus virtudes, sus límites y los riesgos de su empleo indebido. El amparo no es ni puede convertirse en un mecanismo para eludir el proceso penal, enervar la actividad legítima de investigación del Estado o sustituir a los recursos ordinarios cuando estos son idóneos y efectivos.</p>
 
                <ul data-i18n="articulo_amparo.list_2_3">
                    <li><strong>Subsidiaridad:</strong> Antes de acudir a él, la parte afectada debe agotar los remedios que el propio proceso penal ofrece.</li>
                    <li><strong>Estrategia frente a táctica:</strong> Un uso meramente dilatorio o táctico del amparo no solo expone al solicitante a su declaración de inadmisibilidad, sino que puede erosionar la credibilidad procesal.</li>
                    <li><strong>Diagnóstico riguroso:</strong> Requiere identificar con precisión el derecho fundamental vulnerado, verificar que no existen vías ordinarias y construir una argumentación constitucional sólida.</li>
                </ul>
 
                <p data-i18n="articulo_amparo.p2_3b">El uso responsable del amparo requiere que el abogado penalista realice un diagnóstico riguroso de la situación. El amparo estratégico —que protege derechos genuinamente amenazados— es un instrumento de alto impacto; el amparo dilatorio es una apuesta arriesgada.</p>
 
                <h2 data-i18n="articulo_amparo.h2_4">IV. Recomendaciones para empresas y directivos</h2>
 
                <p data-i18n="articulo_amparo.p2_4">La mejor defensa es, sin duda, la prevención. Las empresas que cuentan con sistemas robustos de compliance penal están en condiciones de detectar tempranamente situaciones de riesgo. Implemente un programa de compliance penal efectivo. Documente todas las actuaciones corporativas relevantes. Actúe de forma temprana ante cualquier irregularidad procesal. Coordine a su equipo de defensa penal con su área de compliance. Evalúe el amparo como herramienta estratégica, no como último recurso desesperado. Establezca protocolos internos de respuesta ante medidas cautelares.</p>
 
                <h2 data-i18n="articulo_amparo.h2_5">V. El amparo como garantía del Estado de Derecho</h2>
 
                <p data-i18n="articulo_amparo.p2_5">El amparo constitucional no es una anomalía del sistema; es su expresión más depurada. Su existencia como acción autónoma, expedita y de rango constitucional refleja la convicción de que ningún proceso —por legítimas que sean sus finalidades— puede convertirse en instrumento de lesión de los derechos que la Constitución reconoce.</p>
 
                <h2 data-i18n="articulo_amparo.h2_6">VI. Conclusión</h2>
 
                <p data-i18n="articulo_amparo.p2_6">En el entorno procesal contemporáneo, el amparo cumple una función de contrapeso esencial. No defiende la impunidad; defiende la legalidad del camino que conduce a la verdad y a la eventual responsabilidad penal. Y esa función, lejos de ser obstáculo para la justicia, es condición de su legitimidad.</p>
 
                <h2 data-i18n="articulo_amparo.h2_7">VII. Asesoría Especializada</h2>
 
                <p data-i18n="articulo_amparo.p2_7a">Para quienes se desempeñan en el mundo empresarial —propietarios, directivos, contadores, oficiales de cumplimiento—, comprender el amparo no es una cuestión académica: es una herramienta de gestión de riesgos jurídicos de primer orden que puede, en el momento crítico, preservar la libertad, la reputación y la continuidad del negocio.</p>
 
                <p data-i18n="articulo_amparo.p2_7b">Nuestro equipo en Mac Consultores Jurídicos & Asociados cuenta con experiencia consolidada en la evaluación, prevención y litigio de casos de criminalidad económica, en el diseño de programas de compliance penal y en el uso estratégico del amparo constitucional para la defensa de víctimas corporativas, directivos y personas jurídicas. Si su empresa enfrenta una investigación penal, lo invitamos a contactarnos.</p>
            </article>"""

poderes_html_content = """            <article class="article-content">
                <p class="article-meta" data-i18n="articulo_poderes.meta">Categoría: Procesal Penal</p>
 
                <p data-i18n="articulo_poderes.p1">Actos procesales habilitados y acusación privada: Con poder especialmente otorgado, el apoderado de la víctima puede acceder al expediente de investigación, solicitar la práctica de diligencias, asistir a audiencias, ejercer el derecho a réplica y, en los delitos de acción privada, formular querella o acusación en nombre de su representado.</p>
 
                <h2 data-i18n="articulo_poderes.h2_1">I. Exigencia del Artículo 406 COPP</h2>
 
                <p data-i18n="articulo_poderes.p2_1">El artículo 406 del COPP va más allá: exige que la acusación privada identifique con precisión al acusado —nombre, apellidos, datos de identificación— y describa el hecho punible de manera clara y circunstanciada.</p>
 
                <p data-i18n="articulo_poderes.p2_2">Acusado individualizado: Nombre completo, cédula de identidad u otros datos que permitan su identificación inequívoca.</p>
 
                <p data-i18n="articulo_poderes.p2_3">Hecho punible delimitado: Descripción circunstanciada del tiempo, modo y lugar, así como la calificación jurídica propuesta. Poder especial habilitante: El apoderado debe acreditar que su representado lo autorizó específicamente para ese acto. Sin este requisito, la acusación es inadmisible.</p>
 
                <h2 data-i18n="articulo_poderes.h2_2">II. Diferencias entre poder civil y poder penal</h2>
 
                <p data-i18n="articulo_poderes.intro_2">La representación penal de la víctima no admite fórmulas genéricas. Cada acto relevante exige una autorización clara. No hay atajos que no conduzcan a la inadmisibilidad.</p>
 
                <h3 data-i18n="articulo_poderes.h3_2a">Objeto del mandato</h3>
                <p data-i18n="articulo_poderes.p3_2a">En el Proceso Civil (CPC) son derechos patrimoniales y pretensiones disponibles. En el Proceso Penal (COPP) son derechos procesales de la víctima; acción pública o privada.</p>
 
                <h3 data-i18n="articulo_poderes.h3_2b">Nivel de especificidad</h3>
                <p data-i18n="articulo_poderes.p3_2b">En civil, general para impulso; especial para actos de disposición. En penal, especial para todos los actos de intervención relevante.</p>
 
                <h3 data-i18n="articulo_poderes.h3_2c">Naturaleza del litigio</h3>
                <p data-i18n="articulo_poderes.p3_2c">Disponible en civil (las partes pueden renunciar, transigir y comprometer). Predominantemente indisponible en penal (el Estado es titular de la acción pública).</p>
 
                <h3 data-i18n="articulo_poderes.h3_2d">Consecuencia de insuficiencia</h3>
                <p data-i18n="articulo_poderes.p3_2d">En civil, ineficacia del acto de disposición; el proceso puede continuar. En penal, inadmisibilidad o nulidad; puede comprometer todo el proceso.</p>
 
                <h2 data-i18n="articulo_poderes.h2_3">III. Por qué el poder especial es indispensable en la representación de la víctima</h2>
 
                <p data-i18n="articulo_poderes.p2_3a">La exigencia de poder especial en la representación penal de la víctima responde a tres fundamentos de primera importancia:</p>
 
                <ul data-i18n="articulo_poderes.list_2_3">
                    <li><strong>Principio de legalidad procesal:</strong> En el proceso penal, la forma no es un rito vacío, sino una garantía bilateral. La sociedad y los órganos de justicia tienen derecho a verificar que la víctima ha actuado dentro de los límites de su mandato.</li>
                    <li><strong>Seguridad jurídica:</strong> El poder especial es el instrumento que objetiva la voluntad de la víctima y la hace verificable por el tribunal y por las demás partes.</li>
                    <li><strong>Riesgo de nulidades absolutas:</strong> Las actuaciones realizadas sin poder suficiente pueden dar lugar a nulidades que no son subsanables retroactivamente.</li>
                </ul>
 
                <p data-i18n="articulo_poderes.p2_3b">En procesos de criminalidad económica, donde los plazos de prescripción son determinantes, una nulidad por defecto de representación puede traducirse en la pérdida irreversible del derecho de acción.</p>
 
                <h2 data-i18n="articulo_poderes.h2_4">IV. Consecuencias prácticas y recomendaciones</h2>
 
                <p data-i18n="articulo_poderes.p2_4">Redacte poderes penales con precisión técnica. El poder para representar a una víctima en proceso penal debe identificar con claridad el tipo de delito o la causa concreta. Distinga el poder civil del poder penal en los instrumentos de representación corporativa. Verifique la suficiencia del poder antes de cada actuación relevante. Actúe con asesoría penal especializada desde el primer momento.</p>
 
                <h2 data-i18n="articulo_poderes.h2_5">V. Protocolos corporativos y Compliance</h2>
 
                <p data-i18n="articulo_poderes.p2_5">Contemple el poder especial en el protocolo de compliance penal. Las empresas con programas de cumplimiento normativo deberían incorporar en sus protocolos de gestión de crisis la previsión de otorgamiento de poderes penales específicos, con los parámetros de suficiencia que el COPP exige.</p>
 
                <h2 data-i18n="articulo_poderes.h2_6">VI. Conclusión</h2>
 
                <p data-i18n="articulo_poderes.p2_6">El régimen de poderes en el proceso venezolano no es uniforme: obedece a lógicas distintas según la naturaleza del proceso. Esta diferencia no es solo doctrinal. Tiene consecuencias directas sobre la validez de las actuaciones, la admisibilidad de los escritos y la eficacia de la representación en el momento más crítico del proceso.</p>
 
                <h2 data-i18n="articulo_poderes.h2_7">VII. Asesoría Especializada en Mac Consultores Jurídicos & Asociados</h2>
 
                <p data-i18n="articulo_poderes.p2_7a">Para empresas y directivos que enfrentan investigaciones penales o que actúan como víctimas en procesos de criminalidad económica, comprender estas diferencias no es opcional: es una condición de ejercicio del derecho de acción y de acceso real a la justicia. La representación de la víctima en el proceso penal no admite fórmulas genéricas.</p>
 
                <p data-i18n="articulo_poderes.p2_7b">Nuestro equipo cuenta con experiencia consolidada en la redacción de instrumentos de representación judicial para procesos penales complejos, en la representación de víctimas corporativas ante los órganos jurisdiccionales venezolanos y en el diseño de protocolos de compliance penal.</p>
            </article>"""

def update_html(filename, new_article_content, new_h1_text, new_h1_key, new_title_text, new_title_key):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Replace the whole <article class="article-content"> block
    import re
    article_pattern = re.compile(r'<article class="article-content">.*?</article>', re.DOTALL)
    html = article_pattern.sub(new_article_content, html)
    
    # Replace H1
    h1_pattern = re.compile(r'<h1[^>]*>.*?</h1>', re.DOTALL)
    html = h1_pattern.sub(f'<h1 data-i18n="{new_h1_key}">{new_h1_text}</h1>', html)
    
    # Replace Title
    title_pattern = re.compile(r'<title[^>]*>.*?</title>', re.DOTALL)
    html = title_pattern.sub(f'<title data-i18n="{new_title_key}">{new_title_text}</title>', html)
    
    # Replace Breadcrumb text
    if "amparo" in filename:
        html = html.replace('>Análisis Penal</span>', '>Constitucional</span>')
    else:
        html = html.replace('>Análisis Penal</span>', '>Procesal Penal</span>')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(html)

update_html('blog-amparo-garantia-vital.html', amparo_html_content, "Constitucional: El Amparo como Garantía Vital", "articulo_amparo.h1", "Constitucional: El Amparo como Garantía Vital | Mac Consultores Jurídicos & Asociados", "articulo_amparo.title")
update_html('blog-regimen-poderes-cpc-copp.html', poderes_html_content, "Procesal Penal: El Régimen de Poderes en el CPC y el COPP venezolano", "articulo_poderes.h1", "Procesal Penal: El Régimen de Poderes en el CPC y el COPP | Mac Consultores Jurídicos & Asociados", "articulo_poderes.title")

with open('blog.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# The keys in JSON MUST perfectly match the data-i18n keys used in the HTML.
# And we must provide English translations.

amparo_en = {
    "title": "Constitutional: Amparo as a Vital Guarantee | Mac Consultores",
    "breadcrumb": "<a href=\"blog.html\">Blog</a> / Constitutional",
    "h1": "Constitutional: Amparo as a Vital Guarantee",
    "meta": "Category: Constitutional",
    "p1": "In the context of corporate Criminal Law, constitutional amparo represents the last and most forceful line of defense against arbitrary or disproportionate State actions that threaten a company's operational continuity or its executives' freedom.",
    "h2_1": "I. Amparo in the contemporary procedural environment",
    "p2_1": "A company under investigation for alleged tax crimes has all its bank accounts blocked, including those intended for payroll and current tax obligations. The measure, issued without a prior hearing, threatens business continuity and the rights of uninvestigated third parties. The amparo, requesting the partial lifting of the measure, restores proportionality.",
    "p2_2": "Violation of the right to defense: obstruction of access to the file, restriction of contact with the defense attorney, or unjustified refusal to practice evidence.",
    "p2_3": "Violation of the natural judge guarantee: deviation of the matter to courts lacking subject matter or territorial jurisdiction.",
    "h2_2": "II. Illustrative cases: when amparo becomes essential",
    "intro_2": "Imagine the following hypothetical scenarios, representing real situations faced by companies and executives:",
    "h3_2a": "Case I — Total block of operational accounts:",
    "p3_2a": "A company under investigation for alleged tax crimes has all its bank accounts blocked, including those intended for payroll and current tax obligations. The measure, issued without a prior hearing, threatens business continuity and the rights of uninvestigated third parties. The amparo, requesting the partial lifting of the measure, restores proportionality.",
    "h3_2b": "Case II — Preventive deprivation without sufficient motivation:",
    "p3_2b": "A CFO is deprived of liberty under the imputation of corporate fraud, without the hearing record reflecting the elements of conviction that found the measure or justifying the alleged flight risk. Filing an amparo before the superior court manages to obtain a review and substitution of the measure for a less burdensome one.",
    "h3_2c": "Case III — Restriction of access to the file:",
    "p3_2c": "The defense of a compliance officer charged with failing to control suspicious operations systematically requests access to the file, being repeatedly denied without justification. The amparo, invoking the violation of the right to defense and due process, forces the jurisdictional body to guarantee access.",
    "h3_2d": "Case IV — Inadequate jurisdiction:",
    "p3_2d": "A criminal case for alleged financial crimes is remitted, without legal basis, to a special court other than the one competent by reason of the matter. Given the inaction of ordinary resources, the constitutional amparo allows the right to the natural judge to be restored, a first-order guarantee in any process.",
    "h2_3": "III. Limits and risks of using amparo",
    "p2_3a": "A full understanding of amparo requires recognizing, with the same clarity with which its virtues are affirmed, its limits and the risks of its improper use. Amparo is not and cannot become a mechanism to evade the criminal process, weaken the legitimate investigative activity of the State, or replace ordinary resources when these are suitable and effective.",
    "list_2_3": [
        "<strong>Subsidiarity:</strong> Before resorting to it, the affected party must exhaust the remedies offered by the criminal process itself.",
        "<strong>Strategy vs. tactics:</strong> A merely dilatory or tactical use of amparo not only exposes the applicant to its declaration of inadmissibility, but can also erode procedural credibility.",
        "<strong>Rigorous diagnosis:</strong> It requires accurately identifying the violated fundamental right, verifying that there are no ordinary routes, and building solid constitutional argumentation."
    ],
    "p2_3b": "The responsible use of amparo requires the criminal lawyer to make a rigorous diagnosis of the situation. Strategic amparo—which protects genuinely threatened rights—is a high-impact instrument; dilatory amparo is a risky bet.",
    "h2_4": "IV. Recommendations for companies and executives",
    "p2_4": "The best defense is, without a doubt, prevention. Companies with robust criminal compliance systems are able to detect risk situations early. Implement an effective criminal compliance program. Document all relevant corporate actions. Act early on any procedural irregularity. Coordinate your criminal defense team with your compliance area. Evaluate amparo as a strategic tool, not as a desperate last resort. Establish internal protocols to respond to precautionary measures.",
    "h2_5": "V. Amparo as a guarantee of the Rule of Law",
    "p2_5": "Constitutional amparo is not an anomaly in the system; it is its most refined expression. Its existence as an autonomous, expeditious, and constitutional action reflects the conviction that no process—however legitimate its purposes may be—can become an instrument to harm the rights that the Constitution recognizes.",
    "h2_6": "VI. Conclusion",
    "p2_6": "In the contemporary procedural environment, amparo fulfills an essential counterweight function. It does not defend impunity; it defends the legality of the path leading to the truth and eventual criminal liability. And this function, far from being an obstacle to justice, is a condition for its legitimacy.",
    "h2_7": "VII. Specialized Advice",
    "p2_7a": "For those working in the business world—owners, executives, accountants, compliance officers—understanding amparo is not an academic matter: it is a first-order legal risk management tool that can, at the critical moment, preserve freedom, reputation, and business continuity.",
    "p2_7b": "Our team at Mac Consultores Jurídicos & Asociados has solid experience in assessing, preventing, and litigating cases of economic crime, designing criminal compliance programs, and strategically using constitutional amparo to defend corporate victims, executives, and legal entities. If your company faces a criminal investigation, we invite you to contact us."
}

poderes_en = {
    "title": "Criminal Procedural: Powers Regime in CPC and COPP | Mac Consultores",
    "breadcrumb": "<a href=\"blog.html\">Blog</a> / Criminal Procedural",
    "h1": "Criminal Procedural: Powers Regime in CPC and COPP",
    "meta": "Category: Criminal Procedural",
    "p1": "Enabled procedural acts and private accusation: With specially granted power, the victim's proxy can access the investigation file, request the practice of procedures, attend hearings, exercise the right of reply and, in private action crimes, file a complaint or accusation on behalf of their represented party.",
    "h2_1": "I. Requirement of Article 406 COPP",
    "p2_1": "Article 406 of the COPP goes further: it requires the private accusation to accurately identify the accused—name, surname, identification data—and describe the punishable act clearly and circumstantially.",
    "p2_2": "Individualized accused: Full name, identity card or other data allowing unequivocal identification.",
    "p2_3": "Delimited punishable act: Circumstantial description of time, mode and place, as well as the proposed legal qualification. Special enabling power: The proxy must accredit that their represented party specifically authorized them for that act. Without this requirement, the accusation is inadmissible.",
    "h2_2": "II. Differences between civil power and criminal power",
    "intro_2": "The criminal representation of the victim does not admit generic formulas. Every relevant act requires clear authorization. There are no shortcuts that do not lead to inadmissibility.",
    "h3_2a": "Object of the mandate",
    "p3_2a": "In the Civil Process (CPC) they are patrimonial rights and available claims. In the Criminal Process (COPP) they are procedural rights of the victim; public or private action.",
    "h3_2b": "Level of specificity",
    "p3_2b": "In civil, general for impulse; special for acts of disposition. In criminal, special for all acts of relevant intervention.",
    "h3_2c": "Nature of the litigation",
    "p3_2c": "Available in civil (parties can resign, compromise and commit). Predominantly unavailable in criminal (the State is the titleholder of the public action).",
    "h3_2d": "Consequence of insufficiency",
    "p3_2d": "In civil, ineffectiveness of the act of disposition; the process can continue. In criminal, inadmissibility or nullity; can compromise the entire process.",
    "h2_3": "III. Why special power is essential in victim representation",
    "p2_3a": "The requirement of special power in the criminal representation of the victim responds to three fundamentals of prime importance:",
    "list_2_3": [
        "<strong>Principle of procedural legality:</strong> In the criminal process, form is not an empty rite, but a bilateral guarantee. Society and justice organs have the right to verify that the victim has acted within the limits of their mandate.",
        "<strong>Legal certainty:</strong> The special power is the instrument that objectifies the victim's will and makes it verifiable by the court and other parties.",
        "<strong>Risk of absolute nullities:</strong> Actions taken without sufficient power can lead to nullities that are not retroactively correctable."
    ],
    "p2_3b": "In economic crime processes, where prescription periods are determinant, a nullity due to representation defects can translate into the irreversible loss of the right of action.",
    "h2_4": "IV. Practical consequences and recommendations",
    "p2_4": "Draft criminal powers with technical precision. The power to represent a victim in a criminal process must clearly identify the type of crime or the specific cause. Distinguish civil power from criminal power in corporate representation instruments. Verify the sufficiency of the power before every relevant action. Act with specialized criminal advice from the first moment.",
    "h2_5": "V. Corporate Protocols and Compliance",
    "p2_5": "Contemplate special power in the criminal compliance protocol. Companies with regulatory compliance programs should incorporate in their crisis management protocols the provision for granting specific criminal powers, with the sufficiency parameters that the COPP demands.",
    "h2_6": "VI. Conclusion",
    "p2_6": "The powers regime in the Venezuelan process is not uniform: it obeys different logics depending on the nature of the process. This difference is not merely doctrinal. It has direct consequences on the validity of actions, admissibility of writings, and the effectiveness of representation in the most critical moment of the process.",
    "h2_7": "VII. Specialized Advice at Mac Consultores",
    "p2_7a": "For companies and executives facing criminal investigations or acting as victims in economic crime processes, understanding these differences is not optional: it is a condition for exercising the right of action and real access to justice. The victim's representation in the criminal process does not admit generic formulas.",
    "p2_7b": "Our team has consolidated experience in drafting legal representation instruments for complex criminal processes, representing corporate victims before Venezuelan courts, and designing criminal compliance protocols."
}

data['en']['articulo_amparo'] = amparo_en
data['en']['articulo_poderes'] = poderes_en

with open('blog.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updates complete.")
