import os

file1 = 'estrategia-teoria-del-caso.html'
with open(file1, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<title>', '<title data-i18n="strategy_case_theory.title">')
content = content.replace('<h1 class="section-title">Teoría del caso: de la hipótesis a la estrategia procesal</h1>', '<h1 class="section-title" data-i18n="strategy_case_theory.h1">Teoría del caso: de la hipótesis a la estrategia procesal</h1>')

content = content.replace('<p style="margin-bottom: 1.5rem;">\n                    La teoría del caso', '<p style="margin-bottom: 1.5rem;" data-i18n="strategy_case_theory.p1">\n                    La teoría del caso')
content = content.replace('<p style="margin-bottom: 1.5rem;">\n                    Desde las primeras', '<p style="margin-bottom: 1.5rem;" data-i18n="strategy_case_theory.p2">\n                    Desde las primeras')
content = content.replace('<p style="margin-bottom: 1.5rem;">\n                    El resultado es', '<p style="margin-bottom: 1.5rem;" data-i18n="strategy_case_theory.p3">\n                    El resultado es')

with open(file1, 'w', encoding='utf-8') as f:
    f.write(content)

file2 = 'estrategia-escenarios-representativos.html'
with open(file2, 'r', encoding='utf-8') as f:
    content2 = f.read()

content2 = content2.replace('<title>', '<title data-i18n="strategy_representative_scenarios.title">')
content2 = content2.replace('<h1 class="section-title">Escenarios de actuación representativos</h1>', '<h1 class="section-title" data-i18n="strategy_representative_scenarios.h1">Escenarios de actuación representativos</h1>')
content2 = content2.replace('<p style="margin-bottom: 1.5rem;">\n                    A continuación', '<p style="margin-bottom: 1.5rem;" data-i18n="strategy_representative_scenarios.intro">\n                    A continuación')

content2 = content2.replace('<li style="margin-bottom: 1rem;">Defensa o querella', '<li style="margin-bottom: 1rem;" data-i18n="strategy_representative_scenarios.li1">Defensa o querella')
content2 = content2.replace('<li style="margin-bottom: 1rem;">Defensa técnica frente a', '<li style="margin-bottom: 1rem;" data-i18n="strategy_representative_scenarios.li2">Defensa técnica frente a')
content2 = content2.replace('<li style="margin-bottom: 1rem;">Asesoría preventiva y defensa', '<li style="margin-bottom: 1rem;" data-i18n="strategy_representative_scenarios.li3">Asesoría preventiva y defensa')
content2 = content2.replace('<li style="margin-bottom: 1rem;">Litigio penal asociado a', '<li style="margin-bottom: 1rem;" data-i18n="strategy_representative_scenarios.li4">Litigio penal asociado a')
content2 = content2.replace('<li style="margin-bottom: 1rem;">Consultoría para la prevención', '<li style="margin-bottom: 1rem;" data-i18n="strategy_representative_scenarios.li5">Consultoría para la prevención')

with open(file2, 'w', encoding='utf-8') as f:
    f.write(content2)

print("Added data-i18n tags to strategy htmls.")
