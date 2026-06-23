#!/bin/bash
# Script de Conversión Segura a WebP para Mac Consultores
# 
# Requisitos: Tener instalado cwebp (ej: brew install webp en macOS, o apt install webp en Linux)
# Este script buscará imágenes en assets/img/ y las convertirá a WebP en assets/img-webp/
# NO borra los archivos originales.

INPUT_DIR="assets/img"
OUTPUT_DIR="assets/img-webp"

# Parámetros de calidad propuestos:
# -q 85: Calidad alta para evitar distorsiones en logos o texto.
# -m 6: Método de compresión más lento pero más eficiente en tamaño/calidad.
# -mt: Multi-threading.
# -af: Auto-filtro para mejorar la calidad en detalles finos.
CWEBP_PARAMS="-q 85 -m 6 -mt -af"

echo "Iniciando conversión a WebP para mantener la máxima calidad..."

# Crear la carpeta de salida si no existe
mkdir -p "$OUTPUT_DIR"

# Contadores
COUNT=0
TOTAL=$(ls -1 "$INPUT_DIR"/*.{jpg,jpeg,png} 2>/dev/null | wc -l)

if [ "$TOTAL" -eq 0 ]; then
    echo "No se encontraron imágenes JPG/PNG en $INPUT_DIR"
    exit 0
fi

echo "Se encontraron $TOTAL imágenes para procesar."

for IMG in "$INPUT_DIR"/*.{jpg,jpeg,png}; do
    # Si no hay imágenes, se saltará
    [ -e "$IMG" ] || continue
    
    FILENAME=$(basename "$IMG")
    NAME="${FILENAME%.*}"
    WEBP_OUT="$OUTPUT_DIR/${NAME}.webp"

    # Si ya existe el WebP y es más nuevo, saltar (opcional, pero útil si se interrumpe)
    if [ -f "$WEBP_OUT" ]; then
        echo "Omitiendo $FILENAME (ya convertido: $WEBP_OUT)"
        continue
    fi

    echo "Convirtiendo $FILENAME..."
    
    # Ejecutar la conversión
    cwebp $CWEBP_PARAMS "$IMG" -o "$WEBP_OUT" -quiet
    
    # Comprobar el código de salida
    if [ $? -eq 0 ]; then
        COUNT=$((COUNT + 1))
        # Calcular ahorro de espacio (opcional)
        ORIG_SIZE=$(stat -f%z "$IMG" 2>/dev/null || stat -c%s "$IMG")
        NEW_SIZE=$(stat -f%z "$WEBP_OUT" 2>/dev/null || stat -c%s "$WEBP_OUT")
        SAVING=$(( 100 - (NEW_SIZE * 100 / ORIG_SIZE) ))
        echo "  -> Éxito. Ahorro aprox: $SAVING%"
    else
        echo "  -> Error al convertir $FILENAME"
    fi
done

echo "Conversión finalizada. $COUNT imágenes procesadas y guardadas en $OUTPUT_DIR."
echo "IMPORTANTE: Aún no se han modificado las referencias en los archivos HTML/CSS."
