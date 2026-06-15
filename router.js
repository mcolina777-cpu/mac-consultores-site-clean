/**
 * router.js
 * Enrutador liviano de mejora progresiva para navegación sin recarga completa.
 * Utiliza View Transitions API si está disponible en el navegador.
 */

// Función auxiliar para separar el body en zonas (antes de nav, nav, contenido, footer, después de footer)
function getBodySections(bodyEl) {
  const nav = bodyEl.querySelector('nav');
  const footer = bodyEl.querySelector('footer, .footer');
  const children = Array.from(bodyEl.childNodes);

  const beforeNav = [];
  const between = [];
  const afterFooter = [];

  let stage = 'beforeNav'; // 'beforeNav', 'between', 'afterFooter'

  for (const node of children) {
    if (node === nav) {
      stage = 'between';
      continue;
    }
    if (node === footer) {
      stage = 'afterFooter';
      continue;
    }

    if (stage === 'beforeNav') {
      beforeNav.push(node);
    } else if (stage === 'between') {
      between.push(node);
    } else if (stage === 'afterFooter') {
      afterFooter.push(node);
    }
  }

  return { nav, footer, beforeNav, between, afterFooter };
}

// Función principal para cargar la página
async function loadPage(url, pushToHistory = true) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`No se pudo cargar la página: ${response.status}`);
    }
    const htmlText = await response.text();

    // Parsear el HTML recibido
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    // Función que realiza el intercambio real del DOM
    const performSwap = () => {
      // 1. Actualizar el título de la página
      document.title = doc.title;

      // 1.5. Actualizar meta tags críticos para compartir en móvil (Open Graph, Twitter, Canonical)
      // Esto garantiza que la URL sea 100% compartible y los metadatos correspondan a la vista actual
      const tagsToRemove = document.head.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"], link[rel="canonical"], link[rel="alternate"]');
      tagsToRemove.forEach(tag => tag.remove());
      
      const tagsToAdd = doc.head.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"], link[rel="canonical"], link[rel="alternate"]');
      tagsToAdd.forEach(tag => {
        document.head.appendChild(tag.cloneNode(true));
      });

      // 2. Actualizar las clases del body (para mantener estilos específicos de página)
      document.body.className = doc.body.className;

      // 3. Separar secciones de la página actual y de la página cargada
      const currentSections = getBodySections(document.body);
      const fetchedSections = getBodySections(doc.body);

      // 4. Eliminar el contenido actual que está entre nav y footer
      currentSections.between.forEach(node => node.remove());

      // 5. Insertar el nuevo contenido justo antes del footer actual
      const footerElement = currentSections.footer;
      fetchedSections.between.forEach(node => {
        document.body.insertBefore(node, footerElement);
      });

      // 6. Cerrar el menú móvil si está activo
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        navLinks.classList.remove('active');
      }

      // 7. Re-vincular y ejecutar scripts de la página
      const dailyInsightConcept = document.getElementById('daily-insight-concept');
      if (dailyInsightConcept) {
        if (window.initDailyInsight) {
          window.initDailyInsight();
        } else {
          // Si el script de insight.js no está en la memoria del documento, cargarlo dinámicamente
          const script = document.createElement('script');
          script.src = 'insight.js';
          document.body.appendChild(script);
        }
      }

      // 8. Re-traducir la nueva página cargada para mantener la preferencia de idioma
      if (window.initI18n) {
        window.initI18n();
      }
    };

    // Aplicar View Transition si el navegador lo soporta
    if (document.startViewTransition) {
      document.startViewTransition(performSwap);
    } else {
      performSwap();
    }

    // Actualizar historial si corresponde
    if (pushToHistory) {
      history.pushState(null, '', url);
    }

    // Desplazar al inicio de la página tras la navegación
    // Usar (0,0) estándar fuerza a Chrome móvil a recalcular la barra de direcciones 
    // y evita el "bug de pantalla completa" que hace desaparecer los tres puntos
    window.scrollTo(0, 0);

  } catch (error) {
//     console.error('Error de navegación:', error);
    // En caso de error severo, forzar navegación tradicional como fallback de seguridad
    window.location.href = url;
  }
}

// Determinar si el clic debe ser interceptado por el enrutador
function shouldIntercept(event, anchor) {
  // Ignorar clics con modificadores (Ctrl, Cmd, Shift, Alt) o botón secundario
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }

  // Ignorar enlaces sin href o externos
  const href = anchor.getAttribute('href');
  if (!href) return false;

  // Ignorar enlaces con target o que sean descargas
  if (anchor.target && anchor.target !== '_self') return false;
  if (anchor.hasAttribute('download')) return false;

  // Ignorar protocolos especiales (mailto:, tel:, javascript:, etc.)
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
    return false;
  }

  // Verificar que apunte al mismo dominio
  const url = new URL(anchor.href);
  if (url.origin !== window.location.origin) {
    return false;
  }

  // Ignorar clics en la misma sección (hashes)
  if (url.pathname === window.location.pathname && url.hash) {
    return false;
  }

  // Solo interceptar archivos .html o directorios locales
  const path = url.pathname;
  const isHtml = path.endsWith('.html') || path.endsWith('/') || !path.split('/').pop().includes('.');
  return isHtml;
}

// Escuchar clics globales en el documento
document.addEventListener('click', event => {
  const anchor = event.target.closest('a');
  if (anchor && shouldIntercept(event, anchor)) {
    event.preventDefault();
    loadPage(anchor.href, true);
  }
});

// Manejar navegación con botones Atrás/Adelante del navegador
window.addEventListener('popstate', () => {
  loadPage(window.location.href, false);
});
