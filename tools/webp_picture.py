import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or '.vercel' in root or 'archive' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

# Only target <img> tags with these images
target_images = [
    "RECEPCION_2_OPT.jpg", 
    "OFICINA_1.jpg", 
    "OFICINA_2.jpg", 
    "OFICINA_3.jpg", 
    "OFICINA_4.jpg",
    "SALA_REUNIONES_B_OPT.jpg", 
    "SALA_REUNIONES_1_OPT.jpg", 
    "SALA_DE_REUNIONES_4.jpg"
]

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    is_en = '/en/' in filepath.replace('\\', '/') or filepath.startswith('./en/')
    prefix = '../assets/' if is_en else 'assets/'

    for img in target_images:
        # Regex to find the <img> tag
        # We look for <img ... src="prefix/img/imgname" ... >
        # and we replace it with the <picture> block.
        # But we must be careful not to wrap it if it's already wrapped in <picture>
        
        pattern = r'(<img[^>]*src="(' + re.escape(prefix) + r'img/' + re.escape(img) + r')"[^>]*>)'
        
        def replacer(match):
            img_tag = match.group(1)
            # If the img_tag is already inside a picture (we can't easily regex backward, but we can check if <picture> is right before it, 
            # though it's easier to just assume it's not since we haven't added it yet).
            webp_path = f"{prefix}img-webp/{img.replace('.jpg', '.webp')}"
            return f'<picture>\n<source srcset="{webp_path}" type="image/webp">\n{img_tag}\n</picture>'
            
        content = re.sub(pattern, replacer, content)

    # Clean up double wrapping just in case
    content = re.sub(r'<picture>\s*<picture>', '<picture>', content)
    content = re.sub(r'</picture>\s*</picture>', '</picture>', content)
    
    # Wait, also we need to remove double source if it happened
    # We will just trust it only runs once per file.

    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)

print("Updated picture tags")
