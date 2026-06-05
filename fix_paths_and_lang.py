import os
import re

REPO_DIR = "/Users/macbook/Documents/GitHub/Mac-Consultores-"

def fix_html_files():
    # Fix root files (Spanish)
    root_files = [f for f in os.listdir(REPO_DIR) if f.endswith('.html')]
    for file in root_files:
        path = os.path.join(REPO_DIR, file)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Add data-lang to lang-btn
        # Find: <a href="([^"]+)" class="lang-btn([^"]*)">ES</a>
        content = re.sub(r'<a href="([^"]+)" class="lang-btn([^"]*)"[^>]*>ES</a>',
                         r'<a href="\1" class="lang-btn\2" data-lang="es">ES</a>', content)
        content = re.sub(r'<a href="([^"]+)" class="lang-btn([^"]*)"[^>]*>EN</a>',
                         r'<a href="\1" class="lang-btn\2" data-lang="en">EN</a>', content)
                         
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

    # Fix English files
    en_dir = os.path.join(REPO_DIR, "en")
    if not os.path.exists(en_dir):
        return
        
    en_files = [f for f in os.listdir(en_dir) if f.endswith('.html')]
    for file in en_files:
        path = os.path.join(en_dir, file)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Fix relative assets (images, css, js) not starting with ../ or http or /
        # Exclude anchor links (#) or empty
        # Regex matches src="file.ext" and replaces with src="../file.ext"
        # We target specifically files ending in known extensions to avoid replacing actual paths we shouldn't
        
        # Replace src="..."
        content = re.sub(r'(src=")(?!http|/|\.\.)([^"]+\.(?:jpg|jpeg|png|svg|gif|js|pdf))(")', r'\1../\2\3', content, flags=re.IGNORECASE)
        
        # Replace href="..." for css
        content = re.sub(r'(href=")(?!http|/|\.\.)([^"]+\.(?:css))(")', r'\1../\2\3', content, flags=re.IGNORECASE)
        
        # Replace background-image: url('...')
        content = re.sub(r"(url\(')(?!http|/|\.\.)([^']+\.(?:jpg|jpeg|png|svg|gif))('\))", r'\1../\2\3', content, flags=re.IGNORECASE)
        content = re.sub(r'(url\(")(?!http|/|\.\.)([^"]+\.(?:jpg|jpeg|png|svg|gif))("\))', r'\1../\2\3', content, flags=re.IGNORECASE)

        # Remove data-i18n attributes from elements in /en/ to prevent any JS from ever overwriting it
        content = re.sub(r'\sdata-i18n="[^"]+"', '', content)

        # Add data-lang to lang-btn
        content = re.sub(r'<a href="([^"]+)" class="lang-btn([^"]*)"[^>]*>ES</a>',
                         r'<a href="\1" class="lang-btn\2" data-lang="es">ES</a>', content)
        content = re.sub(r'<a href="([^"]+)" class="lang-btn([^"]*)"[^>]*>EN</a>',
                         r'<a href="\1" class="lang-btn\2" data-lang="en">EN</a>', content)

        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == "__main__":
    fix_html_files()
    print("Fixed HTMLs")
