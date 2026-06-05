import os
import re

html_files = []
for root, _, files in os.walk('.'):
    if '.git' in root or 'PAGINA MODELO' in root: continue
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

broken_links = []
broken_assets = []

for html_file in html_files:
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    hrefs = re.findall(r'href="([^"]+)"', content)
    for href in hrefs:
        if href.startswith('http') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('whatsapp:') or href.startswith('#') or href == '':
            continue
            
        if href.startswith('/'):
            target_path = os.path.normpath(os.path.join('.', href.lstrip('/')))
        else:
            dir_path = os.path.dirname(html_file)
            target_path = os.path.normpath(os.path.join(dir_path, href))
        
        if not os.path.exists(target_path) and target_path != 'favicon.ico':
            if href.endswith('.css') or href.endswith('.ico') or href.endswith('.js'):
                broken_assets.append((html_file, href, target_path))
            else:
                broken_links.append((html_file, href, target_path))
                
    srcs = re.findall(r'src="([^"]+)"', content)
    for src in srcs:
        if src.startswith('http') or src.startswith('data:'):
            continue
            
        if src.startswith('/'):
            target_path = os.path.normpath(os.path.join('.', src.lstrip('/')))
        else:
            dir_path = os.path.dirname(html_file)
            target_path = os.path.normpath(os.path.join(dir_path, src))
        
        if not os.path.exists(target_path):
            broken_assets.append((html_file, src, target_path))

print("Broken Links:")
for bl in broken_links:
    print(f"File: {bl[0]}, Link: {bl[1]}, Target: {bl[2]}")

print("\nBroken Assets:")
for ba in broken_assets:
    print(f"File: {ba[0]}, Asset: {ba[1]}, Target: {ba[2]}")
