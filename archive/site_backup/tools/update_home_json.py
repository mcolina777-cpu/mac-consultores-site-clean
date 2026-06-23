import json

with open('locales/home.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Add strategy_case_theory
data['es']['strategy_case_theory'] = {
    'title': 'Teoría del caso | Mac Consultores',
    'h1': 'Teoría del caso: de la hipótesis a la estrategia procesal',
    'p1': 'La teoría del caso no es un discurso retórico; es la columna vertebral de toda defensa seria. Partimos de una hipótesis central que explica qué ocurrió, por qué ocurrió y cómo los elementos de prueba la sostienen frente a la versión acusatoria.',
    'p2': 'Desde las primeras diligencias, definimos cuál será la narrativa probatoria que queremos que el tribunal escuche y entienda: qué hechos se admiten, cuáles se disputan, qué vacíos tiene la acusación y qué indicadores revelan que la imputación es forzada o desproporcionada. Esta teoría guía la preparación de declaraciones, la selección de peritos, el contrainterrogatorio y el uso de la prueba documental.',
    'p3': 'El resultado es una estrategia procesal coherente: cada escrito, cada actuación y cada alegato responde a un mismo eje argumental, evitando contradicciones defensivas, improvisaciones y giros que restan credibilidad al cliente ante los jueces y el Ministerio Público.'
}

data['en']['strategy_case_theory'] = {
    'title': 'Case Theory | Mac Consultores',
    'h1': 'Case Theory: From Hypothesis to Procedural Strategy',
    'p1': 'Case theory is not rhetorical discourse; it is the backbone of any serious defense. We start from a central hypothesis that explains what happened, why it happened, and how the evidentiary elements support it against the accusatory version.',
    'p2': 'From the earliest proceedings, we define the evidentiary narrative we want the court to hear and understand: what facts are admitted, which are disputed, what gaps the accusation has, and what indicators reveal that the imputation is forced or disproportionate. This theory guides the preparation of statements, selection of experts, cross-examination, and the use of documentary evidence.',
    'p3': 'The result is a coherent procedural strategy: every writ, every action, and every plea responds to the same argumentative axis, avoiding defensive contradictions, improvisations, and shifts that undermine the client\'s credibility before the judges and the Public Prosecutor.'
}

# Add strategy_representative_scenarios
data['es']['strategy_representative_scenarios'] = {
    'title': 'Escenarios representativos | Mac Consultores',
    'h1': 'Escenarios de actuación representativos',
    'intro': 'A continuación, presentamos ejemplos genéricos de asuntos en los que la firma asume representación, resguardando siempre la confidencialidad inherente a nuestra práctica:',
    'li1': 'Defensa o querella por defraudación patrimonial compleja en el seno de grupos empresariales (desvío de fondos, falsedad documental, ocultación de patrimonio).',
    'li2': 'Defensa técnica frente a investigaciones por legitimación de capitales, delincuencia organizada y corrupción administrativa.',
    'li3': 'Asesoría preventiva y defensa en materia penal-tributaria y penal-bancaria.',
    'li4': 'Litigio penal asociado a conflictos de accionistas, apropiación indebida y administración desleal.',
    'li5': 'Consultoría para la prevención de riesgos penales corporativos y protocolos de cumplimiento legal (Compliance).'
}

data['en']['strategy_representative_scenarios'] = {
    'title': 'Representative Scenarios | Mac Consultores',
    'h1': 'Representative Acting Scenarios',
    'intro': 'Below are generic examples of matters in which the firm assumes representation, always safeguarding the confidentiality inherent to our practice:',
    'li1': 'Defense or complaint for complex financial fraud within corporate groups (misappropriation of funds, documentary falsification, concealment of assets).',
    'li2': 'Technical defense against investigations for money laundering, organized crime, and administrative corruption.',
    'li3': 'Preventive advice and defense in criminal-tax and criminal-banking matters.',
    'li4': 'Criminal litigation associated with shareholder conflicts, misappropriation, and disloyal administration.',
    'li5': 'Consulting for the prevention of corporate criminal risks and legal compliance protocols (Compliance).'
}

with open('locales/home.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Added strategy keys to home.json")
