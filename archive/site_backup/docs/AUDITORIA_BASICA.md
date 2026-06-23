# Auditoría Básica de Código y Rendimiento

Este archivo documenta los hallazgos y acciones tomadas durante la revisión técnica de salud del código y rendimiento del sitio web.

## 1. Salud del Código y Enlaces

Tras el análisis automático de todos los archivos HTML en la raíz y en la versión `/en/`:

- **Enlaces Internos**: 100% funcionales. Se verificó que todas las anclas y referencias a páginas cruzadas existen. *Nota: Las referencias absolutas a la raíz (como `/index.html`) se evaluaron y se confirmaron válidas para el entorno Vercel.*
- **Enlaces Externos**: 100% funcionales. Se sondearon las salidas externas (ej. el dominio principal) arrojando respuestas HTTP de estado `200 OK`. No se encontraron códigos de error 4xx/5xx.
- **Salud de Scripts (JS)**: Todos los scripts vitales y lógicos (`router.js`, `i18n.js`, `insight.js`) ya estaban implementando el atributo `defer`, evitando que se bloquee el renderizado de la página.

## 2. Rendimiento (Pintado y Bloqueo LCP)

Se detectaron dos áreas principales de mejora rápida que no requerían alterar el diseño:

- **Pre-carga (Preload) de CSS:** Anteriormente, `assets/css/index.css` se enlazaba con un atributo clásico `rel="stylesheet"`, lo que detenía el renderizado de HTML. 
  - **Mejora:** Se modificaron todos los archivos `.html` para cargarlo asíncronamente a través del patrón `rel="preload" as="style" onload="..."`, logrando que la pantalla inicial (LCP) pinte de forma mucho más veloz sin interrupciones.
- **Diferición de Carga (Lazy Loading) de Imágenes:** Los logotipos principales en el pie de página (`mac-icon-192.png` y `Logo blanco.png`) se descargaban durante el inflado de la pantalla inicial a pesar de estar completamente ocultos al inicio (*below the fold*).
  - **Mejora:** Se inyectó automáticamente el atributo `loading="lazy"` a todos estos activos gráficos a lo largo del sitio, previniendo su descarga hasta que el usuario hace scroll hacia el fondo.

## Archivos Modificados

- `AUDITORIA_BASICA.md` (Este archivo, agregado).
- Todos los archivos `*.html` en el directorio raíz (implementación preload CSS y lazy images).
- Todos los archivos `*.html` en el directorio `/en/` (implementación preload CSS y lazy images).
