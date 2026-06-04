import json
import os
import glob

files = [
    'home.json', 'firma.json', 'servicios.json',
    'internacional.json', 'contacto.json', 'blog.json'
]

def add_meta_title(obj):
    if isinstance(obj, dict):
        if 'title' in obj and isinstance(obj['title'], str):
            if 'meta' in obj and isinstance(obj['meta'], str):
                obj['meta'] = {'category': obj['meta']}
            if 'meta' not in obj:
                obj['meta'] = {}
            if 'title' not in obj['meta'] or not obj['meta']['title']:
                obj['meta']['title'] = obj['title']
        for k, v in obj.items():
            if k != 'meta' and isinstance(v, dict):
                add_meta_title(v)

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
        for lang in ['es', 'en']:
            if lang in data:
                add_meta_title(data[lang])
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Updated {filename}")

# Fix HTML files to use meta.category instead of meta
for html_file in glob.glob('*.html'):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = content.replace('data-i18n="articulo_amparo.meta"', 'data-i18n="articulo_amparo.meta.category"')
    new_content = new_content.replace('data-i18n="articulo_crimen.meta"', 'data-i18n="articulo_crimen.meta.category"')
    new_content = new_content.replace('data-i18n="articulo_poderes.meta"', 'data-i18n="articulo_poderes.meta.category"')
    if new_content != content:
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {html_file}")
