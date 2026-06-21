import os
import re

html_files = []
for root, _, files in os.walk('.'):
    if '.vercel' in root or 'node_modules' in root or '.git' in root or 'tools' in root or '_ARCHIVO_INTERNO' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

for fp in html_files:
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Fix CSS
    # If not using preload yet
    if '<link rel="preload" href="assets/css/index.css"' not in content and '<link rel="preload" href="../assets/css/index.css"' not in content:
        # root level
        content = re.sub(
            r'<link\s+rel="stylesheet"\s+href="assets/css/index\.css(\?v=4)?">',
            r'''<link rel="preload" href="assets/css/index.css\1" as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="assets/css/index.css\1"></noscript>''',
            content
        )
        # /en level
        content = re.sub(
            r'<link\s+rel="stylesheet"\s+href="\.\./assets/css/index\.css(\?v=4)?">',
            r'''<link rel="preload" href="../assets/css/index.css\1" as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="../assets/css/index.css\1"></noscript>''',
            content
        )
        
    # 2. Fix images lazy load in footer
    def add_lazy(m):
        full_tag = m.group(0)
        if 'loading=' in full_tag:
            return full_tag
        return m.group(1) + ' loading="lazy"' + m.group(2)
        
    content = re.sub(
        r'(<img[^>]*src="[^"]*(?:mac-icon-192\.png|Logo blanco\.png)"[^>]*?)(/?>)',
        add_lazy,
        content,
        flags=re.IGNORECASE
    )
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
print("Fixes applied.")
