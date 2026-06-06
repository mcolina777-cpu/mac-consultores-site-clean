import re

with open('contacto.html', 'r', encoding='utf-8') as f:
    es_html = f.read()

with open('en/contacto.html', 'r', encoding='utf-8') as f:
    en_html = f.read()

# Replace body tag
en_html = en_html.replace('<body>', '<body class="page-contacto">')

# 1. Nav links
en_nav_old = '''    <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="quienes-somos.html">The Firm</a></li>
    <li><a href="servicios.html">Services</a></li>
    <li><a href="tramites-consulares.html">International</a></li>
    <li><a href="colaboracion-internacional.html">Alliances</a></li>
    <li><a href="contacto.html">Contact</a></li>
    <li class="lang-selector" style="display:flex; align-items:center;">
        <a href="/contacto.html" class="lang-btn" data-lang="es">ES</a>
        <span class="lang-separator">/</span>
        <a href="/en/contacto.html" class="lang-btn active" data-lang="en">EN</a>
    </li>
</ul>'''

en_nav_new = '''    <ul class="nav-links">
    <li><a href="index.html" data-i18n="nav.inicio">Home</a></li>
    <li><a href="quienes-somos.html" data-i18n="nav.firma">The Firm</a></li>
    <li><a href="servicios.html" data-i18n="nav.servicios">Services</a></li>
    <li><a href="tramites-consulares.html" data-i18n="nav.internacional">International</a></li>
    <li><a href="colaboracion-internacional.html" data-i18n="nav.alianzas">Alliances</a></li>
    <li><a href="contacto.html" data-i18n="nav.contacto">Contact</a></li>
    <li class="lang-selector">
        <a href="/contacto.html" class="lang-btn" data-lang="es">ES</a>
        <span class="lang-separator">/</span>
        <a href="/en/contacto.html" class="lang-btn active" data-lang="en">EN</a>
    </li>
</ul>'''

en_html = en_html.replace(en_nav_old, en_nav_new)

# 2. Header
en_header_old = '''    <header class="page-header">
        <div class="container">
            <span class="breadcrumb">Client Intake</span>
            <h1>Contact & Inquiries</h1>
        </div>
    </header>'''

en_header_new = '''    <header class="page-header">
        <div class="container">
            <span class="breadcrumb" data-i18n="contacto.breadcrumb">Client Intake</span>
            <h1 data-i18n="contacto.h1">Contact & Inquiries</h1>
        </div>
    </header>'''

en_html = en_html.replace(en_header_old, en_header_new)

# 3. Footer is mostly identical, but let's replace the whole section block.
# I'll extract section from ES and put EN texts in it.

es_section_match = re.search(r'<section>.*?</section>', es_html, re.DOTALL)
es_section = es_section_match.group(0)

# Replace the texts in es_section with English equivalents from en_section
# Instead of doing that, let's just replace the exact tags in en_html with data-i18n
import json

# Manual replacements for section

reps = [
    ('<span class="section-tag">Direct Channels</span>', '<span class="section-tag" data-i18n="contacto.info.tag">Direct Channels</span>'),
    ('<h2 class="section-title">We are here to protect your interests.</h2>', '<h2 class="section-title" data-i18n="contacto.info.title">We are here to protect your interests.</h2>'),
    ('<p>To schedule a private consultation or request a technical assessment of your case, please use the following channels or complete the attached form.</p>', '<p data-i18n="contacto.info.desc">To schedule a private consultation or request a technical assessment of your case, please use the following channels or complete the attached form.</p>'),
    ('<h4 class="contact-subtitle">Headquarters</h4>', '<h4 class="contact-subtitle" data-i18n="contacto.info.hq">Headquarters</h4>'),
    ('<p>Caracas, Venezuela</p>', '<p data-i18n="footer.location">Caracas, Venezuela</p>'),
    ('<h4 class="contact-subtitle">Email Address</h4>', '<h4 class="contact-subtitle" data-i18n="contacto.info.email">Email Address</h4>'),
    ('<h4 class="contact-subtitle">Business Hours</h4>', '<h4 class="contact-subtitle" data-i18n="contacto.info.hours">Business Hours</h4>'),
    ('<p>Monday to Friday: 8:00 AM - 5:00 PM</p>', '<p data-i18n="contacto.info.hours_val">Monday to Friday: 8:00 AM - 5:00 PM</p>'),
    ('<label>Full name</label>', '<label data-i18n="contacto.form.label_name">Full name</label>'),
    ('<input type="text" name="nombre" placeholder="e.g., John Doe" required>', '<input type="text" name="nombre" placeholder="e.g., John Doe" data-i18n="contacto.form.placeholder_name" required>'),
    ('<label>Email address</label>', '<label data-i18n="contacto.form.label_email">Email address</label>'),
    ('<input type="email" name="email" placeholder="example@email.com" required>', '<input type="email" name="email" placeholder="example@email.com" data-i18n="contacto.form.placeholder_email" required>'),
    ('<label>Profession / Main role</label>', '<label data-i18n="contacto.form.label_role">Profession / Main role</label>'),
    ('<input type="text" name="profesion" placeholder="e.g., Chief Financial Officer, entrepreneur, university professor">', '<input type="text" name="profesion" placeholder="e.g., Chief Financial Officer, entrepreneur, university professor" data-i18n="contacto.form.placeholder_role">'),
    ('<label>Main reason for inquiry</label>', '<label data-i18n="contacto.form.label_reason">Main reason for inquiry</label>'),
    ('<option value="">Select an option</option>', '<option value="" data-i18n="contacto.form.reason_default">Select an option</option>'),
    ('<option value="consultoria-penal-corporativa">\n                                        Strategic criminal consulting on corporate matters (corporate criminal risks)\n                                    </option>', '<option value="consultoria-penal-corporativa" data-i18n="contacto.form.reason_opt1">\n                                        Strategic criminal consulting on corporate matters (corporate criminal risks)\n                                    </option>'),
    ('<option value="denuncia-querella-economica">\n                                        Filing a complaint or accusation for economic or corporate actions (case without prior proceedings)\n                                    </option>', '<option value="denuncia-querella-economica" data-i18n="contacto.form.reason_opt2">\n                                        Filing a complaint or accusation for economic or corporate actions (case without prior proceedings)\n                                    </option>'),
    ('<option value="segunda-opinion-penal-corporativa">\n                                        Second opinion on an ongoing criminal proceeding of economic or corporate content (without replacing your attorney)\n                                    </option>', '<option value="segunda-opinion-penal-corporativa" data-i18n="contacto.form.reason_opt3">\n                                        Second opinion on an ongoing criminal proceeding of economic or corporate content (without replacing your attorney)\n                                    </option>'),
    ('<option value="tramites-consulares">\n                                        Consular procedures and document management in Venezuela for clients abroad\n                                    </option>', '<option value="tramites-consulares" data-i18n="contacto.form.reason_opt4">\n                                        Consular procedures and document management in Venezuela for clients abroad\n                                    </option>'),
    ('<option value="operaciones-patrimoniales">\n                                        Asset and corporate transactions (real estate purchases/sales, company incorporation or mergers, etc.)\n                                    </option>', '<option value="operaciones-patrimoniales" data-i18n="contacto.form.reason_opt5">\n                                        Asset and corporate transactions (real estate purchases/sales, company incorporation or mergers, etc.)\n                                    </option>'),
    ('<small class="form-hint">\n                                    The firm centers its practice on corporate criminal law and matters of an economic, asset, and consular nature.\n                                </small>', '<small class="form-hint" data-i18n="contacto.form.hint_practice">\n                                    The firm centers its practice on corporate criminal law and matters of an economic, asset, and consular nature.\n                                </small>'),
    ('<label>Type of facts (only if your inquiry is criminal)</label>', '<label data-i18n="contacto.form.label_penal">Type of facts (only if your inquiry is criminal)</label>'),
    ('<option value="">Not applicable / Non-criminal</option>', '<option value="" data-i18n="contacto.form.penal_default">Not applicable / Non-criminal</option>'),
    ('<option value="economico-corporativo">\n                                        Acts of an economic or corporate nature (fraud, corruption, embezzlement, corporate crimes)\n                                    </option>', '<option value="economico-corporativo" data-i18n="contacto.form.penal_opt1">\n                                        Acts of an economic or corporate nature (fraud, corruption, embezzlement, corporate crimes)\n                                    </option>'),
    ('<option value="violento-u-otros">\n                                        Violent crimes or other non-economic offenses (assault, homicide, domestic violence, etc.)\n                                    </option>', '<option value="violento-u-otros" data-i18n="contacto.form.penal_opt2">\n                                        Violent crimes or other non-economic offenses (assault, homicide, domestic violence, etc.)\n                                    </option>'),
    ('<small class="form-hint">\n                                    Mac Consultores Jurídicos &amp; Asociados no asume casos de delitos violentos comunes u otras materias penales ajenas al ámbito corporativo.\n                                </small>', '<small class="form-hint" data-i18n="contacto.form.hint_violent">\n                                    Mac Consultores Jurídicos &amp; Asociados no asume casos de delitos violentos comunes u otras materias penales ajenas al ámbito corporativo.\n                                </small>'),
    ('<label>Brief description of inquiry</label>', '<label data-i18n="contacto.form.label_desc">Brief description of inquiry</label>'),
    ('<textarea name="descripcion" rows="4" maxlength="500"\n                                    placeholder="Describe briefly and objectively the reason for your inquiry (maximum 500 characters)."></textarea>', '<textarea name="descripcion" rows="4" maxlength="500"\n                                    placeholder="Describe briefly and objectively the reason for your inquiry (maximum 500 characters)." data-i18n="contacto.form.placeholder_desc"></textarea>'),
    ('<small class="form-hint">\n                                    Este canal no está habilitado para emitir criterios legales ni indicar qué debe hacer en su caso concreto.\n                                    Su finalidad es exclusivamente administrativa: recopilar información básica para valorar la pertinencia de una consulta profesional sujeta a honorarios.\n                                </small>', '<small class="form-hint" data-i18n="contacto.form.hint_admin">\n                                    Este canal no está habilitado para emitir criterios legales ni indicar qué debe hacer en su caso concreto.\n                                    Su finalidad es exclusivamente administrativa: recopilar información básica para valorar la pertinencia de una consulta profesional sujeta a honorarios.\n                                </small>'),
    ('<small class="form-hint">\n                                    Toda consulta profesional está sujeta a honorarios, que podrán ser facturados por hora o según el alcance del encargo.\n                                    Para cualquier actuación de representación (por ejemplo, interposición de denuncias o querellas, gestión de trámites consulares\n                                    o comparecencias en su nombre), es imprescindible el otorgamiento de un poder de representación previamente analizado\n                                    y redactado de forma personalizada para su caso.\n                                </small>', '<small class="form-hint" data-i18n="contacto.form.hint_fees">\n                                    Toda consulta profesional está sujeta a honorarios, que podrán ser facturados por hora o según el alcance del encargo.\n                                    Para cualquier actuación de representación (por ejemplo, interposición de denuncias o querellas, gestión de trámites consulares\n                                    o comparecencias en su nombre), es imprescindible el otorgamiento de un poder de representación previamente analizado\n                                    y redactado de forma personalizada para su caso.\n                                </small>'),
    ('<small class="form-hint">\n                                    Las comunicaciones remitidas a través de este formulario no constituyen, por sí mismas, relación abogado–cliente\n                                    ni implican aceptación del asunto por parte de la firma.\n                                </small>', '<small class="form-hint" data-i18n="contacto.form.hint_relation">\n                                    Las comunicaciones remitidas a través de este formulario no constituyen, por sí mismas, relación abogado–cliente\n                                    ni implican aceptación del asunto por parte de la firma.\n                                </small>'),
    ('<button type="submit" class="btn">SUBMIT REQUEST FOR ADMISSION</button>', '<button type="submit" class="btn" data-i18n="contacto.form.btn">SUBMIT REQUEST FOR ADMISSION</button>'),
    ('<div id="mensaje-admision" class="form-hint" style="display: none; margin-top: 1rem;">', '<div id="mensaje-admision" class="form-hint" style="display: none; margin-top: 1rem;" data-i18n="contacto.form.success">'),
    ('<h4 class="contact-subtitle">Alternative Channels</h4>', '<h4 class="contact-subtitle" data-i18n="contacto.channels.title">Alternative Channels</h4>'),
    ('<strong>📞 Direct Calls (Mobile 1):</strong>', '<strong data-i18n="contacto.channels.phone1">📞 Direct Calls (Mobile 1):</strong>'),
    ('<strong>📞 Direct Calls (Mobile 2):</strong>', '<strong data-i18n="contacto.channels.phone2">📞 Direct Calls (Mobile 2):</strong>'),
    ('<strong>☎ Landline (Caracas):</strong>', '<strong data-i18n="contacto.channels.landline">☎ Landline (Caracas):</strong>'),
    ('<strong>💻 Virtual Inquiries:</strong>', '<strong data-i18n="contacto.channels.virtual">💻 Virtual Inquiries:</strong>'),
    ('<a href="https://meet.google.com" target="_blank" style="color: var(--accent); font-weight: 600;">\n                                    Meeting via Google Meet\n                                </a>', '<a href="https://meet.google.com" target="_blank" style="color: var(--accent); font-weight: 600;" data-i18n="contacto.channels.virtual_link">\n                                    Meeting via Google Meet\n                                </a>'),
    ('<strong>📱 X (Twitter):</strong>', '<strong data-i18n="contacto.channels.follow">📱 X (Twitter):</strong>'),
    ('<a href="https://x.com/MacConsultoresV" target="_blank" style="color: var(--accent); font-weight: 600;">\n                                    Follow us on X for updates\n                                </a>', '<a href="https://x.com/MacConsultoresV" target="_blank" style="color: var(--accent); font-weight: 600;" data-i18n="contacto.channels.follow_link">\n                                    Follow us on X for updates\n                                </a>'),
    ('<p class="footer-desc">High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients\' interests.</p>', '<p class="footer-desc" data-i18n="footer.desc">High-complexity legal solutions focused on strategy, prevention, and the comprehensive protection of our clients\' interests.</p>'),
    ('<h4 class="footer-title">Navigation</h4>', '<h4 class="footer-title" data-i18n="footer.nav_title">Navigation</h4>'),
    ('<li><a href="index.html">Home</a></li>\n                        <li><a href="quienes-somos.html">About Us</a></li>\n                        <li><a href="nuestro-ceo.html">Our CEO</a></li>\n                        <li><a href="blog.html">Legal Blog</a></li>\n                        <li><a href="noticias.html">News</a></li>', '<li><a href="index.html" data-i18n="nav.inicio">Home</a></li>\n                        <li><a href="quienes-somos.html" data-i18n="nav.quienes_somos">About Us</a></li>\n                        <li><a href="nuestro-ceo.html" data-i18n="nav.nuestro_ceo">Our CEO</a></li>\n                        <li><a href="blog.html" data-i18n="nav.blog">Legal Blog</a></li>\n                        <li><a href="noticias.html" data-i18n="nav.noticias">News</a></li>'),
    ('<h4 class="footer-title">Services</h4>', '<h4 class="footer-title" data-i18n="footer.services_title">Services</h4>'),
    ('<li><a href="servicios.html">Criminal Law</a></li>\n                        <li><a href="servicios.html">Constitutional Defense</a></li>\n                        <li><a href="tramites-consulares.html">Consular Management</a></li>\n                        <li><a href="colaboracion-internacional.html">Intl. Collaboration</a></li>', '<li><a href="servicios.html" data-i18n="footer.penal">Criminal Law</a></li>\n                        <li><a href="servicios.html" data-i18n="footer.constitucional">Constitutional Defense</a></li>\n                        <li><a href="tramites-consulares.html" data-i18n="footer.consular">Consular Management</a></li>\n                        <li><a href="colaboracion-internacional.html" data-i18n="footer.colaboracion">Intl. Collaboration</a></li>'),
    ('<h4 class="footer-title">Offices</h4>', '<h4 class="footer-title" data-i18n="footer.offices_title">Offices</h4>'),
    ('<li>Torre Financiera, Caracas</li>', '<li data-i18n="footer.location">Torre Financiera, Caracas</li>'),
    ('<a href="contacto.html" class="footer-cta">SCHEDULE APPOINTMENT →</a>', '<a href="contacto.html" class="footer-cta" data-i18n="footer.cta">SCHEDULE APPOINTMENT →</a>'),
    ('<p>&copy; 2026 Mac Consultores Jurídicos & Asociados. Todos los derechos reservados.</p>', '<p data-i18n="footer.copyright">&copy; 2026 Mac Consultores Jurídicos & Asociados. Todos los derechos reservados.</p>'),
    ('<span>Caracas, Venezuela</span>', '<span data-i18n="footer.location">Caracas, Venezuela</span>'),
    ('<span>Local time</span>', '<span data-i18n="footer.local_time">Local time</span>'),
    ('<a href="aviso-legal.html">Legal Notice</a>', '<a href="aviso-legal.html" data-i18n="footer.legal_notice">Legal Notice</a>'),
    ('<a href="privacidad.html">Privacy</a>', '<a href="privacidad.html" data-i18n="footer.privacy">Privacy</a>')
]

for old, new in reps:
    if old in en_html:
        en_html = en_html.replace(old, new)
    else:
        print(f"Warning: Could not find '{old}' in en/contacto.html")

with open('en/contacto.html', 'w', encoding='utf-8') as f:
    f.write(en_html)

print("Done replacing.")
