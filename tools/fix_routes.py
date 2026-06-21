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
    
    is_en = '/en/' in filepath.replace('\\', '/') or filepath.startswith('./en/')
    prefix = '../assets/' if is_en else 'assets/'

    # CSS
    content = re.sub(r'href="(?:\.\./|/assets/css/|assets/css/|/)?index\.css(\?v=\d+)?"', f'href="{prefix}css/index.css\\1"', content)
    
    # JS
    content = re.sub(r'src="(?:\.\./|/assets/js/|assets/js/|/)?i18n\.js"', f'src="{prefix}js/i18n.js"', content)
    content = re.sub(r'src="(?:\.\./|/assets/js/|assets/js/|/)?router\.js"', f'src="{prefix}js/router.js"', content)
    content = re.sub(r'src="(?:\.\./|/assets/js/|assets/js/|/)?clock\.js"', f'src="{prefix}js/clock.js"', content)
    content = re.sub(r'src="(?:\.\./|/assets/js/|assets/js/|/)?insight\.js"', f'src="{prefix}js/insight.js"', content)

    # Add defer if missing (and clean up duplicate defers)
    content = re.sub(r'(src="[^"]+\.js")(?!\s+defer)', r'\1 defer', content)
    content = re.sub(r'(src="[^"]+\.js"\s+defer)\s+defer', r'\1', content)
    
    # Images
    for img in images:
        content = re.sub(r'src="(?:\.\./|/assets/img/|assets/img/|/)?' + re.escape(img) + r'"', f'src="{prefix}img/{img}"', content)
        content = re.sub(r"url\('(?:\.\./|/assets/img/|assets/img/|/)?" + re.escape(img) + r"'\)", f"url('{prefix}img/{img}')", content)

    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)

print("Fixed routes")
