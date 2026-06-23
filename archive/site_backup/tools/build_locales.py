import os
import json

locales_dir = 'locales'
merged = {'es': {}, 'en': {}}

for f in os.listdir(locales_dir):
    if f.endswith('.json'):
        with open(os.path.join(locales_dir, f), 'r', encoding='utf-8') as file:
            data = json.load(file)
            if isinstance(data, dict):
                for lang in ['es', 'en']:
                    if lang in data:
                        merged[lang].update(data[lang])

i18n_code = f"""/**
 * i18n.js
 * Motor liviano de internacionalización para traducir dinámicamente todo el sitio web
 * a partir del diccionario JSON embebido, persistiendo la preferencia en localStorage.
 */

// Diccionario de traducciones fusionado
const siteTranslations = {json.dumps(merged, ensure_ascii=False, indent=2)};

/**
 * Obtener un valor de un objeto usando una ruta separada por puntos (ej. 'home.hero.title')
 */
function getNestedValue(obj, path) {{
  if (!obj || !path) return null;
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}}

/**
 * Obtiene el nombre del archivo HTML actual
 */
function getCurrentPageName() {{
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1);
  return page || 'index.html';
}}

/**
 * Traduce todos los elementos con atributo 'data-i18n' en el DOM
 */
function translateDOM() {{
  const lang = document.documentElement.lang || 'es';
  const currentTranslations = siteTranslations[lang] || {{}};

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {{
    const key = el.getAttribute('data-i18n');
    const translation = getNestedValue(currentTranslations, key);

    if (translation === null || translation === undefined) {{
      return; // Clave no encontrada
    }}

    // Si la traducción es un array, se trata de una lista estructurada (como ul/ol)
    if (Array.isArray(translation)) {{
      // Reconstruir la lista (ej. para ul.service-list o listas en artículos)
      el.innerHTML = '';
      translation.forEach(item => {{
        const li = document.createElement('li');
        li.innerHTML = item;
        el.appendChild(li);
      }});
      return;
    }}

    const tagName = el.tagName.toLowerCase();

    // Traducir inputs, textareas y selects
    if (tagName === 'input' || tagName === 'textarea') {{
      if (el.hasAttribute('placeholder')) {{
        el.setAttribute('placeholder', translation);
      }} else if (el.type === 'button' || el.type === 'submit') {{
        el.value = translation;
      }}
    }} else if (tagName === 'select') {{
      el.textContent = translation;
    }} else if (tagName === 'meta') {{
      el.setAttribute('content', translation);
    }} else {{
      // Reemplazar texto conservando estructura interna si contiene tags HTML (como strong/em)
      el.innerHTML = translation;
    }}
  }});
}}

/**
 * Sincroniza visualmente el estado del selector en el nav
 */
function syncLanguageSelector(lang) {{
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {{
    if (btn.getAttribute('data-lang') === lang) {{
      btn.classList.add('active');
    }} else {{
      btn.classList.remove('active');
    }}
  }});
}}

/**
 * Función principal para cambiar de idioma
 */
function changeLanguage(lang) {{
  // Sincronizar el atributo HTML lang
  document.documentElement.lang = lang;
  
  // Guardar en localStorage
  localStorage.setItem('preferred-lang', lang);

  // Manejar la URL usando history.pushState para reflejar el idioma
  const currentPath = window.location.pathname;
  if (lang === 'en') {{
    if (!currentPath.startsWith('/en/')) {{
      window.history.pushState({{}}, '', '/en' + (currentPath.startsWith('/') ? currentPath : '/' + currentPath));
    }}
  }} else {{
    if (currentPath.startsWith('/en/')) {{
      window.history.pushState({{}}, '', currentPath.replace('/en/', '/'));
    }} else if (currentPath === '/en') {{
      window.history.pushState({{}}, '', '/');
    }}
  }}

  // Cargar traducciones y aplicarlas
  translateDOM();

  // Refrescar el selector visual de idioma
  syncLanguageSelector(lang);

  // Desencadenar el refresco del Insight Jurídico del Día si la función global existe
  if (window.initDailyInsight) {{
    window.initDailyInsight();
  }}
}}

/**
 * Inicialización inicial de traducción
 */
function initI18n() {{
  // 1. Detectar idioma de la URL primero (SEO first)
  const currentPath = window.location.pathname;
  let lang = currentPath.startsWith('/en') ? 'en' : null;
  
  // 2. Fallback a LocalStorage o Navegador
  if (!lang) {{
    lang = localStorage.getItem('preferred-lang');
    if (!lang) {{
      lang = document.documentElement.lang || (navigator.language.startsWith('en') ? 'en' : 'es');
    }}
  }}

  // Asegurar formato de dos letras
  lang = lang.toLowerCase().startsWith('en') ? 'en' : 'es';

  // Sincronizar e iniciar traducción
  document.documentElement.lang = lang;
  translateDOM();
  syncLanguageSelector(lang);
}}

// Escuchar eventos globales de click para el selector de idiomas en el DOM
document.addEventListener('DOMContentLoaded', () => {{
  // Registrar listeners de click para los botones de idioma
  document.body.addEventListener('click', event => {{
    const langBtn = event.target.closest('.lang-btn');
    if (langBtn) {{
      event.preventDefault(); // Evitar salto de página al presionar el botón de idioma
      const selectedLang = langBtn.getAttribute('data-lang');
      if (selectedLang) {{
        changeLanguage(selectedLang);
      }}
    }}
  }});

  // Ejecutar inicialización del i18n
  initI18n();
}});

// Exportar funciones a nivel de window para ser invocadas por el enrutador o scripts locales
window.changeLanguage = changeLanguage;
window.translateDOM = translateDOM;
window.initI18n = initI18n;
"""

with open('assets/js/i18n.js', 'w', encoding='utf-8') as f:
    f.write(i18n_code)
