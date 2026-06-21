import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or '.vercel' in root or 'archive' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

# Definir los metatags base a inyectar / reemplazar por página
metas_es = {
    'index.html': {
        'title': '<title data-i18n="title">Mac Consultores Jurídicos & Asociados | Excelencia Legal</title>',
        'desc': '<meta name="description" content="Firma boutique en Caracas especializada en litigio penal de alta complejidad, derecho constitucional y compliance corporativo preventivo a nivel nacional e internacional.">',
        'og_title': '<meta property="og:title" content="Mac Consultores Jurídicos & Asociados | Excelencia Legal">',
        'og_desc': '<meta property="og:description" content="Firma boutique en Caracas especializada en litigio penal de alta complejidad, derecho constitucional y compliance corporativo preventivo.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
        'tw_title': '<meta name="twitter:title" content="Mac Consultores Jurídicos & Asociados">',
        'tw_desc': '<meta name="twitter:description" content="Litigio penal de alta complejidad y derecho corporativo en Caracas.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
    },
    'quienes-somos.html': {
        'title': '<title data-i18n="quienes_somos.title">La Firma | Mac Consultores Jurídicos & Asociados</title>',
        'desc': '<meta name="description" content="Conoce la historia, valores y el equipo de profesionales detrás de Mac Consultores Jurídicos & Asociados. Dedicados al ejercicio impecable del Derecho en Venezuela.">',
        'og_title': '<meta property="og:title" content="La Firma | Mac Consultores Jurídicos">',
        'og_desc': '<meta property="og:description" content="Conoce la historia, valores y el equipo de profesionales detrás de Mac Consultores Jurídicos & Asociados.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
        'tw_title': '<meta name="twitter:title" content="Nuestra Firma - Mac Consultores">',
        'tw_desc': '<meta name="twitter:description" content="Conoce la historia y filosofía de nuestra firma boutique legal en Caracas.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
    },
    'servicios.html': {
        'title': '<title data-i18n="servicios.title">Áreas de Práctica y Servicios | Mac Consultores</title>',
        'desc': '<meta name="description" content="Nuestros servicios legales incluyen: Derecho Penal, Constitucional, Compliance Corporativo, Extradiciones, y consultoría para particulares y corporaciones.">',
        'og_title': '<meta property="og:title" content="Servicios Jurídicos Especializados | Mac Consultores">',
        'og_desc': '<meta property="og:description" content="Derecho Penal, Constitucional, Extradiciones y Compliance Corporativo preventivo.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/assets/img/SALA_REUNIONES_B_OPT.jpg">',
        'tw_title': '<meta name="twitter:title" content="Áreas de Práctica - Mac Consultores">',
        'tw_desc': '<meta name="twitter:description" content="Nuestros servicios legales especializados en Caracas.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/assets/img/SALA_REUNIONES_B_OPT.jpg">',
    },
    'noticias.html': {
        'title': '<title data-i18n="noticias.title">Noticias & Actualidad Jurídica | Mac Consultores</title>',
        'desc': '<meta name="description" content="Manténgase informado con los últimos boletines legales, sentencias destacadas del TSJ, reformas penales y opiniones expertas de nuestra firma.">',
        'og_title': '<meta property="og:title" content="Actualidad Jurídica y Noticias Legales | Mac Consultores">',
        'og_desc': '<meta property="og:description" content="Últimas noticias, sentencias destacadas y análisis legal de nuestros expertos en derecho venezolano e internacional.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
        'tw_title': '<meta name="twitter:title" content="Actualidad Jurídica | Mac Consultores">',
        'tw_desc': '<meta name="twitter:description" content="Manténgase informado con nuestros boletines y noticias legales.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
    }
}

metas_en = {
    'index.html': {
        'title': '<title data-i18n="title">Mac Legal Consultants & Associates | Legal Excellence</title>',
        'desc': '<meta name="description" content="Boutique law firm in Caracas specialized in highly complex criminal litigation, constitutional law, and preventive corporate compliance at a national and international level.">',
        'og_title': '<meta property="og:title" content="Mac Legal Consultants & Associates | Legal Excellence">',
        'og_desc': '<meta property="og:description" content="Boutique law firm in Caracas specialized in highly complex criminal litigation, constitutional law, and corporate compliance.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
        'tw_title': '<meta name="twitter:title" content="Mac Legal Consultants & Associates">',
        'tw_desc': '<meta name="twitter:description" content="Highly complex criminal litigation and corporate law in Caracas.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
    },
    'quienes-somos.html': {
        'title': '<title data-i18n="quienes_somos.title">The Firm | Mac Legal Consultants</title>',
        'desc': '<meta name="description" content="Learn about the history, values, and the team of professionals behind Mac Legal Consultants & Associates. Dedicated to the impeccable practice of Law in Venezuela.">',
        'og_title': '<meta property="og:title" content="The Firm | Mac Legal Consultants">',
        'og_desc': '<meta property="og:description" content="Learn about the history, values, and team behind Mac Legal Consultants & Associates.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
        'tw_title': '<meta name="twitter:title" content="Our Firm - Mac Consultants">',
        'tw_desc': '<meta name="twitter:description" content="Learn about the history and philosophy of our boutique law firm in Caracas.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
    },
    'servicios.html': {
        'title': '<title data-i18n="servicios.title">Practice Areas and Services | Mac Consultants</title>',
        'desc': '<meta name="description" content="Our legal services include: Criminal Law, Constitutional Law, Corporate Compliance, Extraditions, and consulting for individuals and corporations.">',
        'og_title': '<meta property="og:title" content="Specialized Legal Services | Mac Consultants">',
        'og_desc': '<meta property="og:description" content="Criminal Law, Constitutional Law, Extraditions, and preventive Corporate Compliance.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/assets/img/SALA_REUNIONES_B_OPT.jpg">',
        'tw_title': '<meta name="twitter:title" content="Practice Areas - Mac Consultants">',
        'tw_desc': '<meta name="twitter:description" content="Our specialized legal services in Caracas.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/assets/img/SALA_REUNIONES_B_OPT.jpg">',
    },
    'noticias.html': {
        'title': '<title data-i18n="noticias.title">News & Legal Updates | Mac Consultants</title>',
        'desc': '<meta name="description" content="Stay informed with the latest legal bulletins, landmark rulings, criminal reforms, and expert opinions from our firm.">',
        'og_title': '<meta property="og:title" content="Legal Updates and News | Mac Consultants">',
        'og_desc': '<meta property="og:description" content="Latest news, landmark rulings, and legal analysis from our experts in Venezuelan and international law.">',
        'og_image': '<meta property="og:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
        'tw_title': '<meta name="twitter:title" content="Legal Updates | Mac Consultants">',
        'tw_desc': '<meta name="twitter:description" content="Stay informed with our legal bulletins and news.">',
        'tw_image': '<meta name="twitter:image" content="https://macconsultores.com/Logo/mac-social-hero.png">',
    }
}

for filepath in html_files:
    filename = os.path.basename(filepath)
    is_en = '/en/' in filepath.replace('\\', '/') or filepath.startswith('./en/')
    
    meta_dict = metas_en if is_en else metas_es
    
    if filename not in meta_dict:
        continue
        
    m = meta_dict[filename]
    
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Eliminar duplicados peligrosos (deja el primero, aunque igual lo limpiaremos abajo de forma masiva)
    
    # 1. Quitar todas las etiquetas conflictivas antiguas para reinyectar limpiamente.
    # Eliminamos cualquier <title ...>, <meta name="description" ...>, <meta property="og:* ...>, <meta name="twitter:* ...>
    content = re.sub(r'<title.*?</title>', '', content, flags=re.DOTALL)
    content = re.sub(r'<meta name="description".*?>', '', content)
    content = re.sub(r'<meta property="og:.*?">', '', content)
    content = re.sub(r'<meta name="twitter:.*?">', '', content)
    
    # 2. Construir bloque inyectable
    # Las og:url dependen del idioma y archivo
    url_path = ('en/' if is_en else '') + ('' if filename == 'index.html' else filename)
    og_url = f'<meta property="og:url" content="https://macconsultores.com/{url_path}">'
    
    new_metas = f"""{m['title']}
    {m['desc']}
    {m['og_title']}
    {m['og_desc']}
    {og_url}
    <meta property="og:type" content="website">
    {m['og_image']}
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    {m['tw_title']}
    {m['tw_desc']}
    {m['tw_image']}"""

    # Inyectar justo después del <head>
    content = re.sub(r'(<head.*?>)', r'\1\n    ' + new_metas, content, count=1)
    
    # Clean up empty lines created by regex removes in <head>
    content = re.sub(r'\n\s*\n\s*</head>', '\n</head>', content)

    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)

print("Metatags updated successfully")
