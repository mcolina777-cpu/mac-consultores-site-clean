import os
import re
from pathlib import Path

base_dir = "/Users/macbook/Desktop/MAC CONSULTORES JURIDICOS & ASOCIADOS/Mac-Consultores"

html_files = list(Path(base_dir).rglob("*.html"))
# exclude .vercel and node_modules
html_files = [f for f in html_files if '.vercel' not in f.parts and 'node_modules' not in f.parts]

print(f"Found {len(html_files)} HTML files")

all_links = set()
broken_links = []

for html_file in html_files:
    content = html_file.read_text(encoding='utf-8')
    
    # check links
    hrefs = re.findall(r'href="([^"]+)"', content)
    srcs = re.findall(r'src="([^"]+)"', content)
    
    file_dir = html_file.parent
    
    for link in hrefs + srcs:
        if link.startswith('http') or link.startswith('mailto:') or link.startswith('tel:') or link.startswith('#'):
            continue
            
        # check if it exists
        # handle absolute paths from root vs relative paths
        if link.startswith('/'):
            target = Path(base_dir) / link.lstrip('/')
        else:
            target = file_dir / link
            
        if not target.exists():
            # sometimes links are like "index.html" but we are in en/
            broken_links.append((str(html_file.relative_to(base_dir)), link))

if broken_links:
    print("\nBroken links found:")
    for f, l in broken_links:
        print(f"  {f} -> {l}")
else:
    print("\nNo broken links found!")

# check i18n structure
i18n_files = list(Path(base_dir).rglob("*.json"))
print("\nJSON files:")
for f in i18n_files:
    if '.vercel' not in f.parts:
        print(f"  {f.relative_to(base_dir)}")

