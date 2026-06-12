import os

base_dir = "/Users/macbook/Desktop/MAC CONSULTORES JURIDICOS & ASOCIADOS/Mac-Consultores"

with open(os.path.join(base_dir, "index.html"), "r", encoding="utf-8") as f:
    es_html = f.read()

with open(os.path.join(base_dir, "en/index.html"), "r", encoding="utf-8") as f:
    en_html = f.read()

def get_head_nav(html):
    return html.split('<header class="hero"')[0]

def get_footer(html):
    return '<footer class="footer">' + html.split('<footer class="footer">')[1]

es_head = get_head_nav(es_html)
es_footer = get_footer(es_html)

en_head = get_head_nav(en_html)
en_footer = get_footer(en_html)

def fix_lang_selector(head_html, new_es_link, new_en_link):
    # This is a bit brittle, but we can replace the hrefs in the lang-selector
    # Or just leave them as they are pointing to /index.html and /en/index.html, which is fine for switching back to home.
    # The prompt didn't say to fix the language selector specifically to point to the translated page. It said: "Reutilizar el mismo <head>, navegación y footer de index.html." So leaving it as is.
    return head_html

# CONTENT
es_teoria = """
    <main class="bg-soft" style="padding: 6rem 0;">
        <div class="container">
            <div class="axial-header" style="text-align: center; margin-bottom: 3rem;">
                <h1 class="section-title">Teoría del caso: de la hipótesis a la estrategia procesal</h1>
            </div>
            <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem; color: #444;">
                <p style="margin-bottom: 1.5rem;">
                    La teoría del caso no es un discurso retórico; es la columna vertebral de toda defensa seria. Partimos de una hipótesis central que explica qué ocurrió, por qué ocurrió y cómo los elementos de prueba la sostienen frente a la versión acusatoria.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    Desde las primeras diligencias, definimos cuál será la narrativa probatoria que queremos que el tribunal escuche y entienda: qué hechos se admiten, cuáles se disputan, qué vacíos tiene la acusación y qué indicadores revelan que la imputación es forzada o desproporcionada. Esta teoría guía la preparación de declaraciones, la selección de peritos, el contrainterrogatorio y el uso de la prueba documental.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    El resultado es una estrategia procesal coherente: cada escrito, cada actuación y cada alegato responde a un mismo eje argumental, evitando contradicciones defensivas, improvisaciones y giros que restan credibilidad al cliente ante los jueces y el Ministerio Público.
                </p>
            </div>
        </div>
    </main>
"""

es_escenarios = """
    <main class="bg-soft" style="padding: 6rem 0;">
        <div class="container">
            <div class="axial-header" style="text-align: center; margin-bottom: 3rem;">
                <h1 class="section-title">Estrategias en escenarios penales y constitucionales sensibles</h1>
            </div>
            <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem; color: #444;">
                <p style="margin-bottom: 1.5rem;">
                    En los asuntos más sensibles —investigaciones penales económicas contra empresas, procedimientos con impacto mediático o acciones de amparo constitucional— diseñamos la estrategia combinando tres planos: jurídico, probatorio y reputacional.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    En el plano jurídico, identificamos el marco normativo aplicable y los criterios jurisprudenciales relevantes, para saber con precisión cuáles son los márgenes reales de maniobra y qué vías procesales ofrecen mayor protección al cliente. En el plano probatorio, nos enfocamos en preservar la cadena de custodia, depurar la evidencia disponible y anticipar los ataques que la contraparte intentará dirigir contra los soportes documentales y testimoniales.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    Finalmente, analizamos el impacto reputacional de cada decisión: cómo comunicamos las actuaciones al cliente, qué riesgos existen de filtraciones o exposiciones públicas y qué medidas pueden tomarse para minimizar daños a la imagen personal o corporativa, sin sacrificar la solidez de la defensa técnica.
                </p>
            </div>
        </div>
    </main>
"""

en_teoria = """
    <main class="bg-soft" style="padding: 6rem 0;">
        <div class="container">
            <div class="axial-header" style="text-align: center; margin-bottom: 3rem;">
                <h1 class="section-title">Case theory: from hypothesis to procedural strategy</h1>
            </div>
            <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem; color: #444;">
                <p style="margin-bottom: 1.5rem;">
                    Case theory is not rhetorical decoration; it is the backbone of any serious defense. We start from a central hypothesis that explains what happened, why it happened, and how the evidence supports that version against the prosecution’s narrative.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    From the very first steps, we define the evidentiary story we want the court to hear and understand: which facts are admitted, which are disputed, where the accusation has gaps, and which indicators reveal that the charges are overstated or disproportionate. This theory guides the preparation of statements, the selection of experts, cross‑examination, and the use of documentary evidence.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    The result is a coherent procedural strategy: every brief, every appearance, and every argument responds to a single guiding axis, avoiding defensive contradictions, improvisation, and shifts that undermine the client’s credibility before judges and the Public Prosecutor’s Office.
                </p>
            </div>
        </div>
    </main>
"""

en_escenarios = """
    <main class="bg-soft" style="padding: 6rem 0;">
        <div class="container">
            <div class="axial-header" style="text-align: center; margin-bottom: 3rem;">
                <h1 class="section-title">Strategies in sensitive criminal and constitutional scenarios</h1>
            </div>
            <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem; color: #444;">
                <p style="margin-bottom: 1.5rem;">
                    In the most sensitive matters —economic criminal investigations against companies, proceedings with media exposure, or constitutional protection actions— we design strategy across three levels: legal, evidentiary, and reputational.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    On the legal level, we identify the applicable legal framework and the relevant case law, to know precisely what the real margins of maneuver are and which procedural avenues offer the strongest protection for the client. On the evidentiary level, we focus on preserving the chain of custody, refining the available evidence, and anticipating the attacks the opposing party will direct at documents and witnesses.
                </p>
                <p style="margin-bottom: 1.5rem;">
                    Finally, we analyze the reputational impact of each decision: how we communicate developments to the client, the risk of leaks or public exposure, and which measures can be taken to minimize damage to personal or corporate image, without sacrificing the strength of the technical defense.
                </p>
            </div>
        </div>
    </main>
"""

with open(os.path.join(base_dir, "estrategia-teoria-del-caso.html"), "w", encoding="utf-8") as f:
    f.write(es_head + es_teoria + es_footer)

with open(os.path.join(base_dir, "estrategia-escenarios-representativos.html"), "w", encoding="utf-8") as f:
    f.write(es_head + es_escenarios + es_footer)

with open(os.path.join(base_dir, "en/strategy-case-theory.html"), "w", encoding="utf-8") as f:
    f.write(en_head + en_teoria + en_footer)

with open(os.path.join(base_dir, "en/strategy-representative-scenarios.html"), "w", encoding="utf-8") as f:
    f.write(en_head + en_escenarios + en_footer)

