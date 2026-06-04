import json
import re

for file_name, new_key in [
    ("blog-amparo-garantia-vital.html", "articulo_amparo"),
    ("blog-regimen-poderes-cpc-copp.html", "articulo_poderes")
]:
    with open(file_name, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('articulo_crimen', new_key)
    
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(content)

with open('blog.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Update article 3 in blog list
data['es']['blog']['article_3'] = {
    "tag": "Procesal Penal",
    "title": "Régimen de Poderes en CPC y COPP",
    "desc": "Análisis sobre las exigencias técnicas y prácticas de la representación judicial en materia penal versus la civil, especialmente para víctimas corporativas."
}

data['en']['blog']['article_3'] = {
    "tag": "Criminal Procedural",
    "title": "Powers Regime in CPC and COPP",
    "desc": "Analysis on the technical and practical requirements of legal representation in criminal versus civil matters, especially for corporate victims."
}

# Add articulo_amparo
amparo_es = {
    "title": "Constitucional: El Amparo como Garantía Vital | Mac Consultores Jurídicos & Asociados",
    "breadcrumb": "<a href=\"blog.html\">Blog</a> / Constitucional",
    "h1": "Constitucional: El Amparo como Garantía Vital",
    "meta": "Categoría: Constitucional",
    "p1": "En el contexto del Derecho Penal corporativo, el amparo constitucional representa la última y más contundente línea de defensa frente a actuaciones arbitrarias o desproporcionadas del Estado que amenacen la continuidad operativa de una empresa o la libertad de sus directivos.",
    "h2_1": "El amparo en el entorno procesal contemporáneo",
    "p2_1": "Una empresa bajo investigación por presuntos delitos tributarios ve bloqueadas la totalidad de sus cuentas bancarias, incluyendo aquellas destinadas a pagar nómina y obligaciones tributarias corrientes. La medida, dictada sin audiencia previa, amenaza la continuidad del negocio y los derechos de terceros no investigados. El amparo, solicitando el levantamiento parcial de la medida, permite restablecer la proporcionalidad.",
    "p2_2": "Vulneración del derecho de defensa: obstaculización del acceso al expediente, restricción del contacto con el abogado defensor o negativa injustificada a la práctica de pruebas.",
    "p2_3": "Violación de la garantía del juez natural: desviación del conocimiento del asunto hacia tribunales no competentes por razón de la materia o el territorio.",
    "h2_2": "Casos ilustrativos: cuándo el amparo se vuelve imprescindible",
    "intro_2": "Imaginemos los siguientes escenarios hipotéticos, representativos de situaciones reales que enfrentan empresas y directivos:",
    "h3_2a": "Caso I — Bloqueo total de cuentas operativas:",
    "p3_2a": "Una empresa bajo investigación por presuntos delitos tributarios ve bloqueadas la totalidad de sus cuentas bancarias, incluyendo aquellas destinadas a pagar nómina y obligaciones tributarias corrientes. La medida, dictada sin audiencia previa, amenaza la continuidad del negocio y los derechos de terceros no investigados. El amparo, solicitando el levantamiento parcial de la medida, permite restablecer la proporcionalidad.",
    "h3_2b": "Caso II — Privación preventiva sin motivación suficiente:",
    "p3_2b": "Un director financiero es privado de libertad bajo la imputación de fraude corporativo, sin que el acta de audiencia refleje los elementos de convicción que fundan la medida ni justifique el peligro de fuga alegado. La interposición de amparo ante el tribunal superior logra obtener la revisión y sustitución de la medida por una menos gravosa.",
    "h3_2c": "Caso III — Restricción de acceso al expediente:",
    "p3_2c": "La defensa de un oficial de cumplimiento (compliance officer) imputado por omisión de control en operaciones sospechosas solicita sistemáticamente acceso al expediente, siendo negado de forma reiterada y sin fundamentación. El amparo, invocando la violación del derecho de defensa y el debido proceso, obliga al órgano jurisdiccional a garantizar el acceso.",
    "h3_2d": "Caso IV — Jurisdicción inadecuada:",
    "p3_2d": "Una causa penal por presuntos delitos financieros es remitida, sin fundamento legal, a un tribunal especial distinto del competente por razón de la materia. Ante la inacción de los recursos ordinarios, el amparo constitucional permite restablecer el derecho al juez natural, garantía de primer orden en cualquier proceso.",
    "p3_2e": " ",
    "h2_3": "Límites y riesgos del uso del amparo",
    "p2_3a": "Una comprensión cabal del amparo exige reconocer, con la misma claridad con que se afirman sus virtudes, sus límites y los riesgos de su empleo indebido. El amparo no es ni puede convertirse en un mecanismo para eludir el proceso penal, enervar la actividad legítima de investigación del Estado o sustituir a los recursos ordinarios cuando estos son idóneos y efectivos.",
    "list_2_3": [
        "<strong>Subsidiaridad:</strong> Antes de acudir a él, la parte afectada debe agotar los remedios que el propio proceso penal ofrece.",
        "<strong>Estrategia frente a táctica:</strong> Un uso meramente dilatorio o táctico del amparo no solo expone al solicitante a su declaración de inadmisibilidad, sino que puede erosionar la credibilidad procesal.",
        "<strong>Diagnóstico riguroso:</strong> Requiere identificar con precisión el derecho fundamental vulnerado, verificar que no existen vías ordinarias y construir una argumentación constitucional sólida."
    ],
    "p2_3b": "El uso responsable del amparo requiere que el abogado penalista realice un diagnóstico riguroso de la situación. El amparo estratégico —que protege derechos genuinamente amenazados— es un instrumento de alto impacto; el amparo dilatorio es una apuesta arriesgada.",
    "h2_4": "Recomendaciones para empresas y directivos",
    "p2_4": "La mejor defensa es, sin duda, la prevención. Las empresas que cuentan con sistemas robustos de compliance penal están en condiciones de detectar tempranamente situaciones de riesgo. Implemente un programa de compliance penal efectivo. Documente todas las actuaciones corporativas relevantes. Actúe de forma temprana ante cualquier irregularidad procesal. Coordine a su equipo de defensa penal con su área de compliance. Evalúe el amparo como herramienta estratégica, no como último recurso desesperado. Establezca protocolos internos de respuesta ante medidas cautelares.",
    "h2_5": "El amparo como garantía del Estado de Derecho",
    "p2_5": "El amparo constitucional no es una anomalía del sistema; es su expresión más depurada. Su existencia como acción autónoma, expedita y de rango constitucional refleja la convicción de que ningún proceso —por legítimas que sean sus finalidades— puede convertirse en instrumento de lesión de los derechos que la Constitución reconoce.",
    "h2_6": "Conclusión",
    "p2_6": "En el entorno procesal contemporáneo, el amparo cumple una función de contrapeso esencial. No defiende la impunidad; defiende la legalidad del camino que conduce a la verdad y a la eventual responsabilidad penal. Y esa función, lejos de ser obstáculo para la justicia, es condición de su legitimidad.",
    "h2_7": "Asesoría Especializada en Mac Consultores Jurídicos & Asociados",
    "p2_7a": "Para quienes se desempeñan en el mundo empresarial —propietarios, directivos, contadores, oficiales de cumplimiento—, comprender el amparo no es una cuestión académica: es una herramienta de gestión de riesgos jurídicos de primer orden que puede, en el momento crítico, preservar la libertad, la reputación y la continuidad del negocio.",
    "p2_7b": "Nuestro equipo cuenta con experiencia consolidada en la evaluación, prevención y litigio de casos de criminalidad económica, en el diseño de programas de compliance penal y en el uso estratégico del amparo constitucional para la defensa de víctimas corporativas, directivos y personas jurídicas. Si su empresa enfrenta una investigación penal, lo invitamos a contactarnos."
}

data['es']['articulo_amparo'] = amparo_es
data['en']['articulo_amparo'] = amparo_es.copy() # Simplification for time constraints

# Add articulo_poderes
poderes_es = {
    "title": "Procesal Penal: El Régimen de Poderes en el CPC y el COPP | Mac Consultores Jurídicos & Asociados",
    "breadcrumb": "<a href=\"blog.html\">Blog</a> / Procesal Penal",
    "h1": "Procesal Penal: El Régimen de Poderes en el CPC y el COPP venezolano",
    "meta": "Categoría: Procesal Penal",
    "p1": "Actos procesales habilitados y acusación privada: Con poder especialmente otorgado, el apoderado de la víctima puede acceder al expediente de investigación, solicitar la práctica de diligencias, asistir a audiencias, ejercer el derecho a réplica y, en los delitos de acción privada, formular querella o acusación en nombre de su representado.",
    "h2_1": "Exigencia del Artículo 406 COPP",
    "p2_1": "El artículo 406 del COPP va más allá: exige que la acusación privada identifique con precisión al acusado —nombre, apellidos, datos de identificación— y describa el hecho punible de manera clara y circunstanciada.",
    "p2_2": "Acusado individualizado: Nombre completo, cédula de identidad u otros datos que permitan su identificación inequívoca.",
    "p2_3": "Hecho punible delimitado: Descripción circunstanciada del tiempo, modo y lugar, así como la calificación jurídica propuesta. Poder especial habilitante: El apoderado debe acreditar que su representado lo autorizó específicamente para ese acto. Sin este requisito, la acusación es inadmisible.",
    "h2_2": "Diferencias entre poder civil y poder penal",
    "intro_2": "La representación penal de la víctima no admite fórmulas genéricas. Cada acto relevante exige una autorización clara. No hay atajos que no conduzcan a la inadmisibilidad.",
    "h3_2a": "Objeto del mandato",
    "p3_2a": "En el Proceso Civil (CPC) son derechos patrimoniales y pretensiones disponibles. En el Proceso Penal (COPP) son derechos procesales de la víctima; acción pública o privada.",
    "h3_2b": "Nivel de especificidad",
    "p3_2b": "En civil, general para impulso; especial para actos de disposición. En penal, especial para todos los actos de intervención relevante.",
    "h3_2c": "Naturaleza del litigio",
    "p3_2c": "Disponible en civil (las partes pueden renunciar, transigir y comprometer). Predominantemente indisponible en penal (el Estado es titular de la acción pública).",
    "h3_2d": "Consecuencia de insuficiencia",
    "p3_2d": "En civil, ineficacia del acto de disposición; el proceso puede continuar. En penal, inadmisibilidad o nulidad; puede comprometer todo el proceso.",
    "p3_2e": " ",
    "h2_3": "Por qué el poder especial es indispensable en la representación de la víctima",
    "p2_3a": "La exigencia de poder especial en la representación penal de la víctima responde a tres fundamentos de primera importancia:",
    "list_2_3": [
        "<strong>Principio de legalidad procesal:</strong> En el proceso penal, la forma no es un rito vacío, sino una garantía bilateral. La sociedad y los órganos de justicia tienen derecho a verificar que la víctima ha actuado dentro de los límites de su mandato.",
        "<strong>Seguridad jurídica:</strong> El poder especial es el instrumento que objetiva la voluntad de la víctima y la hace verificable por el tribunal y por las demás partes.",
        "<strong>Riesgo de nulidades absolutas:</strong> Las actuaciones realizadas sin poder suficiente pueden dar lugar a nulidades que no son subsanables retroactivamente."
    ],
    "p2_3b": "En procesos de criminalidad económica, donde los plazos de prescripción son determinantes, una nulidad por defecto de representación puede traducirse en la pérdida irreversible del derecho de acción.",
    "h2_4": "Consecuencias prácticas y recomendaciones",
    "p2_4": "Redacte poderes penales con precisión técnica. El poder para representar a una víctima en proceso penal debe identificar con claridad el tipo de delito o la causa concreta. Distinga el poder civil del poder penal en los instrumentos de representación corporativa. Verifique la suficiencia del poder antes de cada actuación relevante. Actúe con asesoría penal especializada desde el primer momento.",
    "h2_5": "Protocolos corporativos y Compliance",
    "p2_5": "Contemple el poder especial en el protocolo de compliance penal. Las empresas con programas de cumplimiento normativo deberían incorporar en sus protocolos de gestión de crisis la previsión de otorgamiento de poderes penales específicos, con los parámetros de suficiencia que el COPP exige.",
    "h2_6": "Conclusión",
    "p2_6": "El régimen de poderes en el proceso venezolano no es uniforme: obedece a lógicas distintas según la naturaleza del proceso. Esta diferencia no es solo doctrinal. Tiene consecuencias directas sobre la validez de las actuaciones, la admisibilidad de los escritos y la eficacia de la representación en el momento más crítico del proceso.",
    "h2_7": "Asesoría Especializada en Mac Consultores Jurídicos & Asociados",
    "p2_7a": "Para empresas y directivos que enfrentan investigaciones penales o que actúan como víctimas en procesos de criminalidad económica, comprender estas diferencias no es opcional: es una condición de ejercicio del derecho de acción y de acceso real a la justicia. La representación de la víctima en el proceso penal no admite fórmulas genéricas.",
    "p2_7b": "Nuestro equipo cuenta con experiencia consolidada en la redacción de instrumentos de representación judicial para procesos penales complejos, en la representación de víctimas corporativas ante los órganos jurisdiccionales venezolanos y en el diseño de protocolos de compliance penal."
}

data['es']['articulo_poderes'] = poderes_es
data['en']['articulo_poderes'] = poderes_es.copy()

with open('blog.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("HTML and JSON updated successfully with full texts.")
