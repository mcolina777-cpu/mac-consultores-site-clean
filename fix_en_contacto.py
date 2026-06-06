import re

with open('contacto.html', 'r', encoding='utf-8') as f:
    es_html = f.read()

with open('en/contacto.html', 'r', encoding='utf-8') as f:
    en_html = f.read()

# 1. Fix body
en_html = en_html.replace('<body>', '<body class="page-contacto">')

# 2. Fix lang-selector
old_lang_selector = '''    <li class="lang-selector" style="display:flex; align-items:center;">
        <a href="/contacto.html" class="lang-btn" data-lang="es">ES</a>
        <span class="lang-separator">/</span>
        <a href="/en/contacto.html" class="lang-btn active" data-lang="en">EN</a>
    </li>'''
new_lang_selector = '''    <li class="lang-selector">
        <a href="/contacto.html" class="lang-btn" data-lang="es">ES</a>
        <span class="lang-separator">/</span>
        <a href="/en/contacto.html" class="lang-btn active" data-lang="en">EN</a>
    </li>'''
en_html = en_html.replace(old_lang_selector, new_lang_selector)

# 3. We need to add data-i18n tags. The easiest way is to extract tags with data-i18n from ES and map them to EN.
# Actually, the user says "Mantén el formulario y textos de Contacto con las mismas claves data-i18n que en la versión ES, de modo que contacto.json controle tanto los textos en español como en inglés."
# Let's write a simple script that matches text and replaces the HTML tags.
# Given it's a bit complex, maybe we just manually replace the entire body content of en/contacto.html with the body content of contacto.html BUT KEEPING THE ENGLISH TEXTS?
# Actually, since i18n translates it anyway if the keys are there, do we even need the English text hardcoded? Yes, for SEO.

import html

# We will use regex to find all elements with data-i18n in ES.
es_elements = re.findall(r'<([^>]+?data-i18n="([^"]+)".*?)>(.*?)</', es_html, flags=re.DOTALL)
# It's tricky to map them perfectly with regex. Let's just do manual replacements for the blocks.

# Let's just do it directly.
