import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html') and not f.startswith('vercel')]
en_html_files = [f for f in os.listdir('en') if f.endswith('.html')] if os.path.isdir('en') else []

print("=== 1. Checking ES to EN mapping ===")
missing_en = []
for f in html_files:
    if f not in en_html_files:
        missing_en.append(f)

if missing_en:
    print(f"Missing EN counterparts for: {', '.join(missing_en)}")
else:
    print("All ES files have an EN counterpart.")

print("\n=== 2. Checking internal broken links and i18n scripts ===")
def get_links(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    hrefs = re.findall(r'href="([^"]+)"', content)
    srcs = re.findall(r'src="([^"]+)"', content)
    return hrefs, srcs, content

all_files = html_files + [f"en/{f}" for f in en_html_files]
valid_targets = set(html_files + [f"en/{f}" for f in en_html_files] + os.listdir('.') + [f"en/{f}" for f in os.listdir('en') if os.path.isdir('en')])

broken_links = []
missing_i18n = []

for filepath in all_files:
    hrefs, srcs, content = get_links(filepath)
    if 'i18n.js' not in content and '../i18n.js' not in content:
        missing_i18n.append(filepath)
    
    for link in hrefs + srcs:
        if link.startswith('http') or link.startswith('mailto:') or link.startswith('tel:') or link.startswith('#'):
            continue
        
        # strip query and fragment
        link_clean = link.split('?')[0].split('#')[0]
        if not link_clean: continue
        
        # Determine actual file path
        if filepath.startswith('en/'):
            # It might be ../something.html
            if link_clean.startswith('../'):
                target = link_clean[3:]
            elif link_clean.startswith('/'):
                target = link_clean[1:]
            else:
                target = f"en/{link_clean}"
        else:
            if link_clean.startswith('/'):
                target = link_clean[1:]
            else:
                target = link_clean
                
        if not os.path.exists(target):
            # Special case for directories (like Logo/something)
            if target not in valid_targets and not os.path.exists(target):
                broken_links.append((filepath, link))

if broken_links:
    print("Broken links found:")
    for f, l in broken_links:
        print(f"  {f} -> {l}")
else:
    print("No broken internal links found.")

if missing_i18n:
    print(f"Missing i18n.js in: {', '.join(missing_i18n)}")
else:
    print("i18n.js is included in all files.")

print("\n=== 3. Checking CSS duplicates ===")
css_links = set()
for filepath in all_files:
    hrefs, srcs, content = get_links(filepath)
    css_files = [h for h in hrefs if h.endswith('.css')]
    css_links.update(css_files)
print(f"CSS files referenced: {', '.join(css_links)}")

