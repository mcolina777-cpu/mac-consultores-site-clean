import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or '.vercel' in root or 'archive' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

images = ["FRONT.jpg", "RECEPCION_2_OPT.jpg", "OFICINA_1.jpg", "OFICINA_2.jpg", "OFICINA_3.jpg", "OFICINA_4.jpg", "OFICINA_PRINCIPAL.jpg", "SALA_DE_REUNIONES_4.jpg", "SALA_REUNIONES_B_OPT.jpg", "SALA_REUNIONES_1_OPT.jpg", "SERVICIOS_DETALLE.jpg", "SERVICIOS_NUEVO.jpg", "ALIANZAS_DETALLE.jpg", "SALA_DE_ALIANZAS_ESTRATEGICAS.jpg"]

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # CSS
    content = content.replace('href="index.css"', 'href="/assets/css/index.css"')
    # JS
    content = content.replace('src="router.js"', 'src="/assets/js/router.js" defer')
    content = content.replace('src="i18n.js"', 'src="/assets/js/i18n.js" defer')
    content = content.replace('src="clock.js"', 'src="/assets/js/clock.js" defer')
    content = content.replace('src="insight.js"', 'src="/assets/js/insight.js" defer')
    
    # Remove duplicate defer if accidentally added twice
    content = content.replace(' defer defer', ' defer')
    
    # Images
    for img in images:
        content = content.replace(f'src="{img}"', f'src="/assets/img/{img}"')
        content = content.replace(f"url('{img}')", f"url('/assets/img/{img}')")

    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)

