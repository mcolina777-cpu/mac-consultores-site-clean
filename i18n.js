/**
 * i18n.js
 * Motor liviano de internacionalización para traducir dinámicamente todo el sitio web
 * a partir de diccionarios JSON compartidos, persistiendo la preferencia en localStorage.
 */

// Mapeo de archivos HTML a sus respectivos diccionarios específicos
const PAGE_TRANSLATION_MAP = {
  'index.html': 'home.json',
  '': 'home.json', // Para la raíz del servidor
  'quienes-somos.html': 'firma.json',
  'nuestro-ceo.html': 'firma.json',
  'socios-colaboradores.html': 'firma.json',
  'servicios.html': 'servicios.json',
  'tramites-consulares.html': 'internacional.json',
  'colaboracion-internacional.html': 'internacional.json',
  'contacto.html': 'contacto.json',
  'aviso-legal.html': 'contacto.json',
  'privacidad.html': 'contacto.json',
  'blog.html': 'blog.json',
  'noticias.html': 'blog.json',
  'blog-criminalidad-economica.html': 'blog.json',
  'blog-amparo-garantia-vital.html': 'blog.json',
  'blog-regimen-poderes-cpc-copp.html': 'blog.json'
};

// Diccionario de caché de traducciones en memoria para evitar fetch repetidos
let currentTranslations = {};

/**
 * Obtener un valor de un objeto usando una ruta separada por puntos (ej. 'home.hero.title')
 */
function getNestedValue(obj, path) {
  if (!obj || !path) return null;
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Obtiene el nombre del archivo HTML actual
 */
function getCurrentPageName() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1);
  return page || 'index.html';
}

/**
 * Carga los archivos JSON de traducciones para el idioma seleccionado
 */
async function loadTranslations(lang) {
  try {
    // 1. Cargar el vocabulario común (navbar, footer, general)
    const commonRes = await fetch('common.json?v=2');
    if (!commonRes.ok) throw new Error('No se pudo cargar common.json');
    const commonData = await commonRes.json();
    const commonLangData = commonData[lang] || {};

    // 2. Determinar y cargar el vocabulario específico de la página actual
    const currentPage = getCurrentPageName();
    const specificJson = PAGE_TRANSLATION_MAP[currentPage];
    let specificLangData = {};

    if (specificJson) {
      const specificRes = await fetch(`${specificJson}?v=2`);
      if (specificRes.ok) {
        const specificData = await specificRes.json();
        specificLangData = specificData[lang] || {};
      } else {
        console.warn(`No se pudo cargar el archivo específico ${specificJson}`);
      }
    }

    // Fusionar ambos diccionarios para la traducción actual
    currentTranslations = { ...commonLangData, ...specificLangData };
  } catch (error) {
    console.error('Error cargando traducciones:', error);
  }
}

/**
 * Traduce todos los elementos con atributo 'data-i18n' en el DOM
 */
function translateDOM() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getNestedValue(currentTranslations, key);

    if (translation === null || translation === undefined) {
      return; // Clave no encontrada
    }

    // Si la traducción es un array, se trata de una lista estructurada (como ul/ol)
    if (Array.isArray(translation)) {
      // Reconstruir la lista (ej. para ul.service-list o listas en artículos)
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
      // Para selects, a veces queremos traducir las opciones dinámicamente si tienen data-i18n
      // Sin embargo, por defecto reemplazamos texto
      el.textContent = translation;
    } else {
      // Reemplazar texto conservando estructura interna si contiene tags HTML (como strong/em)
      el.innerHTML = translation;
    }
  });

  // Traducir el título de la página si existe en el JSON
  if (currentTranslations.title) {
    document.title = currentTranslations.title;
  } else if (currentTranslations.quienes_somos && currentTranslations.quienes_somos.title && getCurrentPageName() === 'quienes-somos.html') {
    document.title = currentTranslations.quienes_somos.title;
  } else if (currentTranslations.ceo && currentTranslations.ceo.title && getCurrentPageName() === 'nuestro-ceo.html') {
    document.title = currentTranslations.ceo.title;
  } else if (currentTranslations.tramites_consulares && currentTranslations.tramites_consulares.title && getCurrentPageName() === 'tramites-consulares.html') {
    document.title = currentTranslations.tramites_consulares.title;
  } else if (currentTranslations.colaboracion_internacional && currentTranslations.colaboracion_internacional.title && getCurrentPageName() === 'colaboracion-internacional.html') {
    document.title = currentTranslations.colaboracion_internacional.title;
  } else if (currentTranslations.contacto && currentTranslations.contacto.title && getCurrentPageName() === 'contacto.html') {
    document.title = currentTranslations.contacto.title;
  } else if (currentTranslations.blog && currentTranslations.blog.title && getCurrentPageName() === 'blog.html') {
    document.title = currentTranslations.blog.title;
  } else if (currentTranslations.noticias && currentTranslations.noticias.title && getCurrentPageName() === 'noticias.html') {
    document.title = currentTranslations.noticias.title;
  } else if (currentTranslations.articulo_crimen && currentTranslations.articulo_crimen.title && getCurrentPageName() === 'blog-criminalidad-economica.html') {
    document.title = currentTranslations.articulo_crimen.title;
  } else if (currentTranslations.articulo_amparo && currentTranslations.articulo_amparo.title && getCurrentPageName() === 'blog-amparo-garantia-vital.html') {
    document.title = currentTranslations.articulo_amparo.title;
  } else if (currentTranslations.articulo_poderes && currentTranslations.articulo_poderes.title && getCurrentPageName() === 'blog-regimen-poderes-cpc-copp.html') {
    document.title = currentTranslations.articulo_poderes.title;
  } else if (currentTranslations.socios && currentTranslations.socios.title && getCurrentPageName() === 'socios-colaboradores.html') {
    document.title = currentTranslations.socios.title;
  }
}

/**
 * Función principal para cambiar de idioma
 */
async function changeLanguage(lang) {
  // Sincronizar el atributo HTML lang
  document.documentElement.lang = lang;
  
  // Guardar en localStorage
  localStorage.setItem('preferred-lang', lang);

  // Cargar traducciones y aplicarlas
  await loadTranslations(lang);
  translateDOM();

  // Refrescar el selector visual de idioma
  syncLanguageSelector(lang);

  // Desencadenar el refresco del Insight Jurídico del Día si la función global existe
  if (window.initDailyInsight) {
    // Evitamos bucles recursivos ya que initDailyInsight llama a initLanguageSelector
    // pero no a changeLanguage.
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
  // Detectar idioma: 1. LocalStorage, 2. Atributo HTML inicial, 3. Navegador, 4. 'es'
  let lang = localStorage.getItem('preferred-lang');
  if (!lang) {
    lang = document.documentElement.lang || (navigator.language.startsWith('en') ? 'en' : 'es');
  }

  // Asegurar formato de dos letras
  lang = lang.toLowerCase().startsWith('en') ? 'en' : 'es';

  // Sincronizar e iniciar traducción
  document.documentElement.lang = lang;
  await loadTranslations(lang);
  translateDOM();
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
