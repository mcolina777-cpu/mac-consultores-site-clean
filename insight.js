/**
 * Inicializa el componente "Insight Jurídico del Día".
 * Se encarga de la carga asíncrona, control de estados (loading, success, error)
 * y de aplicar transiciones suaves sin parpadeos, soportando estructura bilingüe ES/EN.
 */
async function initDailyInsight() {
  const conceptEl = document.getElementById('daily-insight-concept');
  const definitionEl = document.getElementById('daily-insight-definition');

  // Inicializar o sincronizar el selector de idioma visualmente si existe en la página
  initLanguageSelector();

  if (!conceptEl || !definitionEl) return;

  // Estado inicial: remover clase is-loaded para asegurar que comience invisible (opacity: 0)
  conceptEl.classList.remove('is-loaded');
  definitionEl.classList.remove('is-loaded');

  // Detectar idioma actual basado en la etiqueta html lang (por defecto 'es')
  const htmlLang = document.documentElement.lang || 'es';
  const isEnglish = htmlLang.toLowerCase().startsWith('en');

  try {
    const response = await fetch('/insights.json');
    if (!response.ok) {
      throw new Error(`Error HTTP: status ${response.status}`);
    }
    const insights = await response.json();

    if (!Array.isArray(insights) || insights.length === 0) {
      throw new Error('El JSON de insights está vacío o no es un array');
    }

    // Obtener el día del mes actual en la zona horaria de Caracas de forma robusta e independiente del navegador
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Caracas',
      day: 'numeric'
    });
    const dayOfMonth = parseInt(formatter.format(new Date()), 10);
    
    // Calcular el índice basado en el día del mes
    const index = (dayOfMonth - 1) % insights.length;
    const selected = insights[index];

    // Asignar contenido bilingüe según corresponda
    if (isEnglish && selected.en) {
      conceptEl.textContent = selected.en.concept;
      definitionEl.textContent = selected.en.definition;
    } else {
      conceptEl.textContent = selected.es.concepto;
      definitionEl.textContent = selected.es.definicion;
    }
  } catch (error) {
    console.error('ERROR INSIGHT DEL DIA:', error);
    // Mensaje de fallback editorial neutral localizado
    if (isEnglish) {
      conceptEl.textContent = 'Concept available soon.';
      definitionEl.textContent = 'We will update this insight shortly.';
    } else {
      conceptEl.textContent = 'Concepto disponible próximamente.';
      definitionEl.textContent = 'Actualizaremos este insight en breve.';
    }
  } finally {
    // Activar la transición suave a visible (opacity: 1)
    requestAnimationFrame(() => {
      conceptEl.classList.add('is-loaded');
      definitionEl.classList.add('is-loaded');
    });
  }
}

/**
 * Inicializa y gestiona el selector de idiomas de la barra de navegación.
 * Sincroniza el estado visual con document.documentElement.lang y registra los manejadores de eventos.
 */
function initLanguageSelector() {
  const langButtons = document.querySelectorAll('.lang-btn');
  if (langButtons.length === 0) return;

  // Obtener el idioma actual de la página (por defecto 'es')
  const currentLang = document.documentElement.lang || 'es';

  langButtons.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    
    // Sincronizar estado visual activo
    if (btnLang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    // Si el motor global i18n.js está cargado, el listener global se encargará del evento.
    if (window.changeLanguage) {
      return;
    }

    // Registrar manejador de clic si no ha sido registrado (fallback de seguridad)
    if (!btn.dataset.hasListener) {
      btn.dataset.hasListener = 'true';
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        
        // Modificar el idioma del documento HTML
        document.documentElement.lang = selectedLang;
        
        // Sincronizar y actualizar visualmente todos los botones en la página
        document.querySelectorAll('.lang-btn').forEach(b => {
          if (b.getAttribute('data-lang') === selectedLang) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });

        // Refrescar el Insight Jurídico del Día con transición animada
        initDailyInsight();
      });
    }
  });
}

// Exportar funciones a nivel global para el enrutador
window.initDailyInsight = initDailyInsight;
window.initLanguageSelector = initLanguageSelector;

// Ejecutar al cargar la página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDailyInsight);
} else {
  initDailyInsight();
}