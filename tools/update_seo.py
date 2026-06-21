import os
import json
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html') and os.path.isfile(os.path.join('en', f))]

seo_data = {'es': {}, 'en': {}}

def extract_meta(content, tag_name):
    # Regex to extract <meta name="tag_name" content="..."> or <meta property="tag_name" content="...">
    match = re.search(r'<meta\s+(?:name|property)="'+tag_name+r'"\s+content="([^"]*)"', content)
    if not match:
        match = re.search(r'<meta\s+content="([^"]*)"\s+(?:name|property)="'+tag_name+r'"', content)
    return match.group(1) if match else None

def extract_title(content):
    match = re.search(r'<title[^>]*>(.*?)</title>', content)
    return match.group(1) if match else None

for f in html_files:
    page_key = f.replace('.html', '').replace('-', '_')
    seo_data['es'][page_key] = {}
    seo_data['en'][page_key] = {}
    
    with open(f, 'r', encoding='utf-8') as file_es:
        content_es = file_es.read()
    
    with open(os.path.join('en', f), 'r', encoding='utf-8') as file_en:
        content_en = file_en.read()
    
    for lang, content in [('es', content_es), ('en', content_en)]:
        seo_data[lang][page_key]['title'] = extract_title(content)
        seo_data[lang][page_key]['description'] = extract_meta(content, 'description')
        seo_data[lang][page_key]['og_title'] = extract_meta(content, 'og:title')
        seo_data[lang][page_key]['og_description'] = extract_meta(content, 'og:description')

# Now inject the data-i18n tags into the Spanish files
for f in html_files:
    page_key = f.replace('.html', '').replace('-', '_')
    with open(f, 'r', encoding='utf-8') as file_es:
        content_es = file_es.read()
    
    # Replace <title>
    content_es = re.sub(r'<title.*?>.*?</title>', f'<title data-i18n="seo.{page_key}.title">{seo_data["es"][page_key]["title"]}</title>', content_es)
    
    # Replace meta description
    content_es = re.sub(r'<meta\s+name="description"\s+content="([^"]*)"[^>]*>', f'<meta name="description" content="{seo_data["es"][page_key]["description"]}" data-i18n="seo.{page_key}.description">', content_es)
    
    # Replace og:title
    if seo_data["es"][page_key].get("og_title"):
        content_es = re.sub(r'<meta\s+property="og:title"\s+content="([^"]*)"[^>]*>', f'<meta property="og:title" content="{seo_data["es"][page_key]["og_title"]}" data-i18n="seo.{page_key}.og_title">', content_es)
    
    # Replace og:description
    if seo_data["es"][page_key].get("og_description"):
        content_es = re.sub(r'<meta\s+property="og:description"\s+content="([^"]*)"[^>]*>', f'<meta property="og:description" content="{seo_data["es"][page_key]["og_description"]}" data-i18n="seo.{page_key}.og_description">', content_es)
        
    with open(f, 'w', encoding='utf-8') as file_es:
        file_es.write(content_es)

# Save the SEO data to locales/seo.json
with open('locales/seo.json', 'w', encoding='utf-8') as f:
    json.dump({'es': {'seo': seo_data['es']}, 'en': {'seo': seo_data['en']}}, f, ensure_ascii=False, indent=2)

print("SEO extraction and injection complete!")
