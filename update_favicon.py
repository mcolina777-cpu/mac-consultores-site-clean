import os

for root, _, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root or '.vercel' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = content.replace('href="Logo/Logo blanco.png" type="image/png"', 'href="/favicon.ico" type="image/x-icon"')
            new_content = new_content.replace('href="../Logo/Logo blanco.png" type="image/png"', 'href="/favicon.ico" type="image/x-icon"')
            
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(new_content)
print("Done")
