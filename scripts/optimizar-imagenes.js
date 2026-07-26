import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = path.join(process.cwd(), "public", "assets", "img");
const MAX_WIDTH = 1200;
const QUALITY = 80; // calidad alta sin excesivo peso

async function procesarArchivo(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    console.log(`➡️ Se omite (formato no soportado): ${filePath}`);
    return;
  }

  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);
  const outputWebp = path.join(dir, `${base}.webp`);

  console.log(`⚙️ Procesando: ${filePath}`);

  await sharp(filePath)
    .resize({ width: MAX_WIDTH })   // reduce el ancho máximo a 1200px
    .webp({ quality: QUALITY })     // convierte a WebP optimizado
    .toFile(outputWebp);

  console.log(`✅ Generado WebP: ${outputWebp}`);
}

async function recorrerDirectorio(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await recorrerDirectorio(fullPath);
    } else {
      await procesarArchivo(fullPath);
    }
  }
}

async function main() {
  console.log(`📂 Carpeta de entrada: ${INPUT_DIR}`);
  await recorrerDirectorio(INPUT_DIR);
  console.log("🎉 Optimización completada.");
}

main().catch((err) => {
  console.error("❌ Error durante la optimización:", err);
  process.exit(1);
});
