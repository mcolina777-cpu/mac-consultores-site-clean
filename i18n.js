/**
 * i18n.js
 * Motor liviano de internacionalización para traducir dinámicamente todo el sitio web
 * a partir de diccionarios JSON compartidos, persistiendo la preferencia en localStorage.
 * Optimizado para SPA con caché de memoria y soporte de URLs limpias.
 */

// Mapeo de claves lógicas de página a sus respectivos diccionarios JSON
const PAGE_TRANSLATION_MAP = {
  'home': 'home.json',
  'quienes-somos': 'firma.json',
  'nuestro-ceo': 'firma.json',
  'socios-colaboradores': 'firma.json',
  'servicios': 'servicios.json',
  'tramites-consulares': 'internacional.json',
  'colaboracion-internacional': 'internacional.json',
  'contacto': 'contacto.json',
  'aviso-legal': 'contacto.json',
  'privacidad': 'contacto.json',
  'blog': 'blog.json',
  'noticias': 'blog.json',
  'blog-criminalidad-economica': 'blog.json',
  'blog-amparo-garantia-vital': 'blog.json',
  'blog-regimen-poderes-cpc-copp': 'blog.json'
};

// Caché en memoria para no descargar los mismos JSON más de una vez por sesión
const jsonCache = {};

// Diccionario de traducciones fusionadas actual
let currentTranslations = {};

/**
 * Obtener un valor de un objeto usando una ruta separada por puntos (ej. 'home.hero.title')
 */
function getNestedValue(obj, path) {
  if (!obj || !path) return null;
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Extrae la clave lógica de la página a partir de la URL actual.
 * Transforma '/quienes-somos.html' o '/quienes-somos' en 'quienes-somos'
 */
function getPageKey() {
  let path = window.location.pathname;
  if (path === '/' || path === '') return 'home';
  
  // Extraer la última parte de la ruta
  let page = path.substring(path.lastIndexOf('/') + 1);
  if (!page) return 'home'; // En caso de que termine en /
  
  // Eliminar .html si existe
  if (page.endsWith('.html')) {
    page = page.substring(0, page.length - 5);
  }
  
  // Si la ruta era index.html
  if (page === 'index') return 'home';
  
  return page;
}

/**
 * Carga el diccionario JSON común (navbar, footer) utilizando caché
 */
async function loadCommonTranslations(lang) {
  if (!jsonCache['common.json']) {
    try {
      const res = await fetch('common.json?v=3');
      if (res.ok) {
        jsonCache['common.json'] = await res.json();
      }
    } catch (e) {
      console.error('Error cargando common.json:', e);
    }
  }
  return jsonCache['common.json'] ? (jsonCache['common.json'][lang] || {}) : {};
}

/**
 * Carga el diccionario JSON específico para la página actual utilizando caché
 */
async function loadPageTranslations(lang, pageKey) {
  const specificJson = PAGE_TRANSLATION_MAP[pageKey];
  if (!specificJson) return {};
  
  if (!jsonCache[specificJson]) {
    try {
      const res = await fetch(`${specificJson}?v=3`);
      if (res.ok) {
        jsonCache[specificJson] = await res.json();
      }
    } catch (e) {
      console.error(`Error cargando ${specificJson}:`, e);
    }
  }
  return jsonCache[specificJson] ? (jsonCache[specificJson][lang] || {}) : {};
}

/**
 * Evento disparado cada vez que cambia la ruta en el router SPA
 */
async function onRouteChange() {
  const lang = document.documentElement.lang || 'es';
  const pageKey = getPageKey();
  
  const commonLangData = await loadCommonTranslations(lang);
  const specificLangData = await loadPageTranslations(lang, pageKey);
  
  // Fusionar ambos diccionarios para la traducción actual
  currentTranslations = { ...commonLangData, ...specificLangData };
  
  translateDOM(pageKey);
}

/**
 * Traduce todos los elementos con atributo 'data-i18n' en el DOM
 */
function translateDOM(pageKey) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getNestedValue(currentTranslations, key);

    if (translation === null || translation === undefined) {
      return; // Clave no encontrada
    }

    // Si la traducción es un array, se trata de una lista estructurada (como ul/ol)
    if (Array.isArray(translation)) {
      // Reconstruir la lista
      el.innerHTML = '';
      translation.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        el.appendChild(li);
      });
      return;
    }

    const tagName = el.tagName.toLowerCase();

    // Traducir inputs, textareas y selects
    if (tagName === 'input' || tagName === 'textarea') {
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', translation);
      } else if (el.type === 'button' || el.type === 'submit') {
        el.value = translation;
      }
    } else if (tagName === 'select') {
      el.textContent = translation;
    } else {
      // Reemplazar texto conservando estructura interna si contiene tags HTML (como strong/em)
      el.innerHTML = translation;
    }
  });

  // Actualizar document.title simplificado para SPA y JSONs múltiples
  // Busca en la sección específica de la página primero, y si no en la raíz
  const pageData = currentTranslations[pageKey];
  const title = (pageData && pageData.meta && pageData.meta.title) || 
                (currentTranslations.meta && currentTranslations.meta.title);
                
  if (title) {
    document.title = title;
  }
}

/**
 * Función principal para cambiar de idioma (por interacción del usuario)
 */
async function changeLanguage(lang) {
  // Sincronizar el atributo HTML lang
  document.documentElement.lang = lang;
  
  // Guardar en localStorage
  localStorage.setItem('preferred-lang', lang);

  // Recargar las traducciones de la ruta actual
  await onRouteChange();

  // Refrescar el selector visual de idioma
  syncLanguageSelector(lang);

  // Desencadenar el refresco del Insight Jurídico del Día
  if (window.initDailyInsight) {
    window.initDailyInsight();
  }
}

/**
 * Sincroniza visualmente el estado del selector en el nav
 */
function syncLanguageSelector(lang) {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Inicialización inicial de traducción
 */
async function initI18n() {
  // Detectar idioma: 1. LocalStorage, 2. Atributo HTML inicial, 3. Navegador
  let lang = localStorage.getItem('preferred-lang');
  if (!lang) {
    lang = document.documentElement.lang || (navigator.language.startsWith('en') ? 'en' : 'es');
  }

  // Asegurar formato de dos letras
  lang = lang.toLowerCase().startsWith('en') ? 'en' : 'es';

  document.documentElement.lang = lang;
  
  // Procesar traducciones de la primera carga
  await onRouteChange();
  
  syncLanguageSelector(lang);
}

// Escuchar eventos globales de click para el selector de idiomas en el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Registrar listeners de click para los botones de idioma
  document.body.addEventListener('click', event => {
    const langBtn = event.target.closest('.lang-btn');
    if (langBtn) {
      const selectedLang = langBtn.getAttribute('data-lang');
      if (selectedLang) {
        changeLanguage(selectedLang);
      }
    }
  });

  // Ejecutar inicialización del i18n
  initI18n();
});

// Exportar funciones a nivel de window para ser invocadas por el enrutador o scripts locales
window.changeLanguage = changeLanguage;
window.translateDOM = translateDOM;
window.initI18n = initI18n;
window.onRouteChange = onRouteChange;
