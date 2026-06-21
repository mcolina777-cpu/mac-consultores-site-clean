import os
import re
import urllib.request
from urllib.error import URLError

def check_files():
    html_files = []
    for root, _, files in os.walk('.'):
        if '.vercel' in root or 'node_modules' in root or '.git' in root or 'tools' in root or '_ARCHIVO_INTERNO' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))

    broken_links = []
    missing_defer = []
    missing_lazy = []
    external_links = set()

    for fp in html_files:
        with open(fp, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check a href
        hrefs = re.findall(r'<a[^>]+href=["\'](.*?)["\']', content)
        for h in hrefs:
            if h.startswith(('http://', 'https://')):
                external_links.add(h)
                continue
            if h.startswith(('mailto:', 'tel:', 'javascript:', '#')) or not h:
                continue
            
            # internal path
            base = os.path.dirname(fp)
            target = os.path.normpath(os.path.join(base, h.split('#')[0].split('?')[0]))
            if not os.path.exists(target) and target != '.':
                broken_links.append((fp, h))

        # Check scripts
        script_tags = re.findall(r'<script(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
        for tag in script_tags:
            src_match = re.search(r'src=["\'](.*?)["\']', tag)
            if src_match:
                src = src_match.group(1)
                if not re.search(r'\b(defer|async)\b', tag):
                    missing_defer.append((fp, src))
                
                if not src.startswith(('http://', 'https://')):
                    base = os.path.dirname(fp)
                    target = os.path.normpath(os.path.join(base, src.split('?')[0]))
                    if not os.path.exists(target):
                        broken_links.append((fp, src))

        # Check images (naive missing lazy check)
        img_tags = re.findall(r'<img([^>]+)>', content, re.IGNORECASE)
        for tag in img_tags:
            if 'loading="lazy"' not in tag and "loading='lazy'" not in tag:
                src_match = re.search(r'src=["\'](.*?)["\']', tag)
                src = src_match.group(1) if src_match else 'unknown'
                missing_lazy.append((fp, src))

    print("--- BROKEN INTERNAL LINKS ---")
    for fp, href in broken_links:
        print(f"{fp}: {href}")

    print("\n--- SCRIPTS MISSING DEFER/ASYNC ---")
    # Only print unique scripts
    unique_scripts = set([src for fp, src in missing_defer])
    for src in unique_scripts:
        print(f"Missing on: {src}")

if __name__ == "__main__":
    check_files()
