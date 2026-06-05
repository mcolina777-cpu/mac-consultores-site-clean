import os

for root, _, files in os.walk('./en'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = content.replace('href="favicon.ico"', 'href="../favicon.ico"')
            
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(new_content)
