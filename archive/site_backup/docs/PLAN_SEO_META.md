# Plan SEO y Metatags - Mac Consultores Jurídicos & Asociados

## 1. Mapa de URLs Públicas
A continuación, el mapeo de las URLs estructurales que deben ser indexadas por los motores de búsqueda, separadas por idioma:

**Versión en Español (Principal)**
- `https://macconsultores.com/` (index.html)
- `https://macconsultores.com/quienes-somos.html`
- `https://macconsultores.com/servicios.html`
- `https://macconsultores.com/tramites-consulares.html`
- `https://macconsultores.com/colaboracion-internacional.html`
- `https://macconsultores.com/contacto.html`
- `https://macconsultores.com/nuestro-ceo.html`
- `https://macconsultores.com/blog.html`
- `https://macconsultores.com/noticias.html`

**Versión en Inglés**
- `https://macconsultores.com/en/` (en/index.html)
- `https://macconsultores.com/en/quienes-somos.html`
- `https://macconsultores.com/en/servicios.html`
- `https://macconsultores.com/en/tramites-consulares.html`
- `https://macconsultores.com/en/colaboracion-internacional.html`
- `https://macconsultores.com/en/contacto.html`
- `https://macconsultores.com/en/nuestro-ceo.html`
- `https://macconsultores.com/en/blog.html`
- `https://macconsultores.com/en/noticias.html`

## 2. Implementación Realizada y Validada

### Creación de `sitemap.xml` y `robots.txt`
Se generó exitosamente el archivo estático `sitemap.xml` en la raíz del proyecto. Este archivo incluye todas las URLs listadas anteriormente (y sus correspondientes atributos Hreflang). 

Adicionalmente, se actualizó el archivo `robots.txt` existente (que ya permitía indexación universal mediante `Allow: /`) para que la directiva final sea explícitamente:
```txt
User-agent: *
Allow: /

Sitemap: https://macconsultores.com/sitemap.xml
```

Ambos archivos fueron validados en el despliegue de Vercel y se sirven correctamente (Código HTTP 200).

### Inyección Limpia de Metatags en Archivos Clave
Se aplicó un script que limpió absolutamente todos los conflictos preexistentes en la cabecera `<head>` de los siguientes archivos:
1. `index.html` y `en/index.html`
2. `quienes-somos.html` y `en/quienes-somos.html`
3. `servicios.html` y `en/servicios.html`
4. `noticias.html` y `en/noticias.html`

**Logros de la limpieza:**
- Se erradicó la duplicación severa de `<meta name="twitter:card">`.
- Se introdujo `<meta name="description">` de forma obligatoria en todas las subpáginas para que Google indexe los textos ricos, y no solo lo que aparezca en redes.
- Cada versión `/en/` recibió su propio set de metatags traducidas al inglés ("Boutique law firm...", "Highly complex criminal litigation...").

### Resumen de Metatags por Página
- **Home (ES/EN):** Descripción general de la "Firma boutique en Caracas...". `og:image` usa `Logo/mac-social-hero.png`.
- **La Firma (ES/EN):** Descripción centrada en "Conoce la historia, valores y el equipo...". `og:image` usa `Logo/mac-social-hero.png`.
- **Servicios (ES/EN):** Descripción enumerada: "Derecho Penal, Constitucional, Extradiciones...". Para impactar más a nivel corporativo al compartir, usa la imagen personalizada `assets/img/SALA_REUNIONES_B_OPT.jpg`.
- **Noticias (ES/EN):** Descripción dinámica apuntando a "Manténgase informado con los últimos boletines legales...". `og:image` usa `Logo/mac-social-hero.png`.

### Criterio de Preservación
No se modificó en absoluto ninguna estructura visual o texto dentro del `<body>`. La estética y las rutas de las imágenes en la página permanecen exactamente iguales a como estaban diseñadas. Todo el ajuste de SEO ocurrió "detrás de escena" en el DOM (`<head>`).
