/**
 * i18n.js (Versión Estática Optimizada)
 * Maneja la preferencia de idioma del usuario y la interfaz visual.
 * El contenido ya está traducido estáticamente en los HTML (/ = ES, /en/ = EN).
 */

function getCurrentLangFromUrl() {
  return window.location.pathname.startsWith('/en') ? 'en' : 'es';
}

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

function initI18n() {
  // 1. Set html lang attribute according to URL
  const lang = getCurrentLangFromUrl();
  document.documentElement.lang = lang;
  
  // 2. Sync visual selector
  syncLanguageSelector(lang);
}

// Escuchar clics en los botones de idioma para guardar la preferencia
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', event => {
    const langBtn = event.target.closest('.lang-btn');
    if (langBtn) {
      const selectedLang = langBtn.getAttribute('data-lang');
      if (selectedLang) {
        localStorage.setItem('preferred-lang', selectedLang);
      }
    }
  });

  initI18n();
});

// Exportar funciones stub/globales para mantener compatibilidad con router.js o insight.js
window.initI18n = initI18n;
window.syncLanguageSelector = syncLanguageSelector;
window.changeLanguage = async function(lang) {
    localStorage.setItem('preferred-lang', lang);
    const isEnUrl = window.location.pathname.startsWith('/en');
    if (lang === 'en' && !isEnUrl) {
        window.location.href = '/en' + window.location.pathname;
    } else if (lang === 'es' && isEnUrl) {
        window.location.href = window.location.pathname.replace('/en', '') || '/';
    }
};
window.translateDOM = function() {}; // No-op
