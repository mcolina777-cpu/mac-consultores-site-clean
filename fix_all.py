import os
import glob

# HTML files in root
root_files = glob.glob('*.html')
en_files = glob.glob('en/*.html')

for f in root_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    changed = False
    if 'href="favicon.ico"' in content:
        content = content.replace('href="favicon.ico" type="image/x-icon"', 'href="Logo/Logo blanco.png" type="image/png"')
        changed = True
        
    if changed:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Fixed favicon in {f}")

for f in en_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        
    changed = False
    if 'href="../favicon.ico"' in content:
        content = content.replace('href="../favicon.ico" type="image/x-icon"', 'href="../Logo/Logo blanco.png" type="image/png"')
        changed = True
        
    if '<script src="../i18n.js" defer></script>' not in content and 'i18n.js' not in content:
        # Add before </head>
        content = content.replace('</head>', '    <script src="../i18n.js" defer></script>\n</head>')
        changed = True
        
    if changed:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Fixed issues in {f}")

