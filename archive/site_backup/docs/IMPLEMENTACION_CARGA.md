# Plan de Acción y Resultados de Optimización de Carga y Navegación

Este documento resume los pasos tomados para resolver los problemas de parpadeo de carga, layout shifts e incorporar transiciones de página suaves en la firma jurídica "Mac Consultores Jurídicos & Asociados".

## Plan de Acción en 5 Pasos

1. **Aislamiento y Gestión de Estados del Insight**:
   Refactorización de `insight.js` para encapsular la lógica en `initDailyInsight()`. El componente inicia de forma invisible (`opacity: 0`), previniendo que se muestren los textos estáticos "Cargando..." del HTML. Se aplican las clases de transición de forma controlada tras recibir la respuesta del JSON.

2. **Control de Fallbacks Editoriales**:
   Implementación en `insight.js` de flujos de captura de errores (`try/catch/finally`) para cargar textos alternativos neutros aprobados ("Concepto disponible próximamente." / "Actualizaremos este insight en breve.") en caso de fallos de red o errores HTTP.

3. **Prevención de Layout Shifts (CLS)**:
   - Modificación de `index.css` para incorporar un valor de `min-height: 190px` en `.daily-insight-inner`, reservando el espacio que ocupará el texto dinámico y evitando desplazamientos bruscos del resto de las secciones.
   - Adición de dimensiones físicas explícitas (`width="2752" height="1536"`) en las etiquetas de imágenes de alto formato del sitio para que el navegador configure el aspect-ratio y reserve el espacio antes de descargarlas.

4. **Desarrollo del Enrutador No Intrusivo (`router.js`)**:
   Creación de un script desacoplado que intercepta clics en los enlaces de navegación internos del mismo dominio, realiza el fetch y swap dinámico del contenido central (comprendido entre `<nav>` e `<footer>`) y utiliza la API nativa de **View Transitions** para un efecto de fundido suave y fluido.

5. **Automatización de Despliegue e Integración**:
   Inserción no intrusiva de `<script src="router.js" defer></script>` al final de las 12 páginas HTML del sitio institucional, garantizando la compatibilidad total con el despliegue estático de Vercel y el funcionamiento normal de enlaces tradicionales en caso de fallo (progressive enhancement).
