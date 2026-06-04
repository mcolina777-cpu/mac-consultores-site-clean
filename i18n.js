/**
 * I18nManager - Nuevo sistema de internacionalización orientado a objetos para SPA
 * Diseñado sin dependencias de nombres de archivo (.html) y con claves lógicas exactas.
 */
class I18nManager {
    constructor() {
        this.cacheBuster = 'v4'; // Forzar limpieza de caché en el navegador
        this.currentLang = localStorage.getItem('lang') || document.documentElement.lang || 'es';
        this.jsonCache = {};
        
        // Tabla de enrutamiento estricta: URL -> { key (clave lógica), file (archivo JSON) }
        this.ROUTE_MAP = {
            '/': { key: 'home', file: 'home.json' },
            '/index': { key: 'home', file: 'home.json' },
            '/quienes-somos': { key: 'quienes_somos', file: 'firma.json' },
            '/nuestro-ceo': { key: 'ceo', file: 'firma.json' },
            '/servicios': { key: 'servicios', file: 'servicios.json' },
            '/tramites-consulares': { key: 'tramites_consulares', file: 'internacional.json' },
            '/colaboracion-internacional': { key: 'colaboracion_internacional', file: 'internacional.json' },
            '/contacto': { key: 'contacto', file: 'contacto.json' },
            '/blog': { key: 'blog_lista', file: 'blog.json' },
            '/noticias': { key: 'noticias', file: 'blog.json' }, // noticias usa blog.json (según el JSON)
            '/blog-criminalidad-economica': { key: 'blog_detalle_1', file: 'blog.json' },
            '/blog-amparo-garantia-vital': { key: 'blog_detalle_2', file: 'blog.json' },
            '/blog-regimen-poderes-cpc-copp': { key: 'blog_detalle_3', file: 'blog.json' },
            '/aviso-legal': { key: 'aviso_legal', file: 'common.json' },
            '/privacidad': { key: 'privacidad', file: 'common.json' }
        };
        
        this.init();
    }
    
    init() {
        document.documentElement.lang = this.currentLang;
        
        // Configurar botones de selector de idioma
        document.addEventListener('click', (e) => {
            if (e.target.matches('.lang-btn')) {
                const lang = e.target.getAttribute('data-lang');
                if (lang && lang !== this.currentLang) {
                    this.changeLanguage(lang);
                }
            }
        });
        
        // Carga inicial basada en la URL actual
        this.onRouteUpdate(window.location.pathname);
    }
    
    getRouteInfo(path) {
        // Limpiar la ruta para que coincida con el mapa
        let cleanPath = path;
        if (cleanPath.endsWith('.html')) {
            cleanPath = cleanPath.substring(0, cleanPath.length - 5);
        }
        if (!cleanPath.startsWith('/')) {
            cleanPath = '/' + cleanPath;
        }
        if (cleanPath === '' || cleanPath === '/') {
            cleanPath = '/index'; // Default
        }
        
        const info = this.ROUTE_MAP[cleanPath];
        if (info) return info;
        
        // Fallback robusto por si se añade una página nueva no mapeada
        const parts = cleanPath.split('/');
        const lastPart = parts[parts.length - 1];
        return { key: lastPart, file: 'home.json' }; // Por defecto usa home.json
    }
    
    async fetchJson(file) {
        if (this.jsonCache[file]) {
            return this.jsonCache[file];
        }
        try {
            const res = await fetch(`/${file}?v=${this.cacheBuster}`);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            this.jsonCache[file] = data;
            return data;
        } catch (e) {
            console.error(`[I18nManager] Error cargando ${file}:`, e);
            return null;
        }
    }
    
    async changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        
        // Actualizar UI de los botones
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        await this.onRouteUpdate(window.location.pathname);
    }
    
    async onRouteUpdate(path) {
        const routeInfo = this.getRouteInfo(path);
        
        // Cargar en paralelo el diccionario común y el específico de la página
        const [commonData, specificData] = await Promise.all([
            this.fetchJson('common.json'),
            this.fetchJson(routeInfo.file)
        ]);
        
        // Unir ambos diccionarios para el idioma actual
        const langData = {};
        
        if (commonData && commonData[this.currentLang]) {
            Object.assign(langData, commonData[this.currentLang]);
        }
        if (specificData && specificData[this.currentLang]) {
            Object.assign(langData, specificData[this.currentLang]);
        }
        
        // Ejecutar traducción en el DOM y actualizar meta título
        console.log("DEBUG langData:", langData);
        this.translateDOM(langData);
        this.updateDocumentTitle(langData, routeInfo.key);
    }
    
    translateDOM(langData) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const keyPath = el.getAttribute('data-i18n');
            const translation = this.getNestedValue(langData, keyPath);
            
            if (translation) {
                // Manejar inputs y textareas
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.type === 'submit' || el.type === 'button') {
                        el.value = translation;
                    } else {
                        el.placeholder = translation;
                    }
                } else {
                    // Elementos estándar (p, h1, span, etc.)
                    el.innerHTML = translation;
                }
            }
        });
    }
    
    getNestedValue(obj, path) {
        // Recorre el objeto anidado (ej. "blog_detalle_1.p1")
        return path.split('.').reduce((acc, part) => {
            return acc && acc[part] !== undefined ? acc[part] : null;
        }, obj);
    }
    
    updateDocumentTitle(langData, pageKey) {
        // Intenta buscar el título en meta.title (inyectado por el script)
        if (langData[pageKey] && langData[pageKey].meta && langData[pageKey].meta.title) {
            document.title = langData[pageKey].meta.title;
        } else if (langData.meta && langData.meta.title) {
            document.title = langData.meta.title;
        }
    }
}

// Inicializar la instancia global al cargar el script
window.i18nSystem = new I18nManager();

// Exponer función global para el router (SPA)
window.onRouteChange = function(path) {
    window.i18nSystem.onRouteUpdate(path || window.location.pathname);
};

// Escuchar eventos de retroceso/avance del navegador
window.addEventListener('popstate', () => {
    window.onRouteChange(window.location.pathname);
});
