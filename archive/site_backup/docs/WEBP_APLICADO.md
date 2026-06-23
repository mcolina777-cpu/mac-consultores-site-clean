# WebP Aplicado con Éxito

## 1. Conversión
Se generaron las versiones `.webp` de todas las imágenes principales (calidad 85) en la carpeta `assets/img-webp/`. 

*Nota técnica: Se utilizó la librería Python `Pillow` en lugar de `cwebp` en el sistema para agilizar la compresión sin dependencias externas bloqueantes, manteniendo exactamente los mismos algoritmos (método 6, calidad 85).*

## 2. Archivos Actualizados (`<picture>`)
Se ha envuelto cuidadosamente la etiqueta `<img>` con el contenedor `<picture>` y un `<source type="image/webp">` para las imágenes candidatas en todos los `.html` correspondientes (incluyendo la versión en inglés `/en/`).

Las imágenes que pasaron a usar WebP son:
- `RECEPCION_2_OPT.jpg` (Home)
- `OFICINA_1.jpg`, `OFICINA_2.jpg`, `OFICINA_3.jpg` (Home y Noticias)
- `OFICINA_4.jpg` (CEO)
- `SALA_DE_REUNIONES_4.jpg` (Quiénes Somos)
- `SALA_REUNIONES_1_OPT.jpg` (Trámites Consulares)
- `SALA_REUNIONES_B_OPT.jpg` (Servicios)

### Excepciones por Calidad
- **No hubo excepciones.** La revisión visual (ver sección 3) confirmó que la compresión "lossy" al 85% preserva las líneas rectas y texturas de las oficinas sin "banding" (degradado pixelado) ni borrosidad. Las imágenes de fondo (CSS `background-image`) se mantuvieron intactas sin cambios para no romper selectores CSS y por el limitado impacto en el LCP comparado con el Hero.

## 3. Resultado Visual y Encapsulado
Los atributos originales (`alt`, `width`, `height`, `loading="lazy"`, y las `class`) de la etiqueta original `<img>` quedaron totalmente intactos. Esto garantiza que el navegador respete exactamente los mismos tamaños y encuadres estipulados en tu diseño previo.

## 4. ¿Cómo revertir esto rápidamente?
Si en el futuro deseas deshabilitar WebP por cualquier motivo:
1. Las imágenes originales `.jpg` **siguen existiendo intactas** en `assets/img/`.
2. Como usamos la etiqueta `<picture>`, basta con borrar (o comentar) la línea `<source srcset="..." type="image/webp">` en los archivos HTML. El navegador cargará inmediatamente el fallback `<img>` en JPG/PNG normal sin alterar el layout.
