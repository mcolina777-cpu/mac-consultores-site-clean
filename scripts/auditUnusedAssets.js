const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

// Lista de archivos a auditar
const assetsToCheck = [
  "public/assets/img/1.webp",
  "public/assets/img/SALA_DE_REUNIONES_4.webp",
  "public/assets/img/SALA_DE_REUNIONES_4.jpg",
  "public/assets/img/ALIANZAS_DETALLE.webp",
  "public/assets/img/ALIANZAS_DETALLE.jpg",
  "public/assets/img/OFICINA_3_vertical.webp",
  "public/assets/img/OFICINA_3_vertical.jpg",
  "public/assets/img/SERVICIOS_DETALLE.webp",
  "public/assets/img/OFICINA_PRINCIPAL.webp",
  "public/assets/img/OFICINA_PRINCIPAL.jpg",
  "public/assets/img/SERVICIOS_NUEVO.webp",
  "public/file.svg",
  "public/vercel.svg",
  "public/next.svg",
  "public/globe.svg",
  "public/window.svg",
];

// Extensiones de archivos donde buscar referencias
const codeExtensions = [
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".css",
  ".scss",
  ".md",
  ".mdx",
  ".json",
  ".yml",
  ".yaml",
];

const reports = [];

function walkDir(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

function isCodeFile(filePath) {
  return codeExtensions.some((ext) => filePath.endsWith(ext));
}

// Ejecutar análisis
function runAudit() {
  console.log("Iniciando auditoría de assets huérfanos...");

  const srcDir = path.join(ROOT, "src");
  const publicDir = path.join(ROOT, "public");

  const allCodeFiles = [];

  // Recolectar todos los archivos de código donde buscar referencias
  [srcDir, publicDir].forEach((baseDir) => {
    if (fs.existsSync(baseDir)) {
      walkDir(baseDir, (filePath) => {
        if (isCodeFile(filePath)) {
          allCodeFiles.push(filePath);
        }
      });
    }
  });

  // Para cada asset, buscar apariciones en allCodeFiles
  for (const asset of assetsToCheck) {
    const fileName = path.basename(asset);
    const report = {
      assetPath: asset,
      fileName,
      referencesCount: 0,
      referencedIn: [],
    };

    for (const codeFile of allCodeFiles) {
      const content = fs.readFileSync(codeFile, "utf8");
      if (content.includes(fileName)) {
        report.referencesCount += 1;
        report.referencedIn.push(path.relative(ROOT, codeFile));
      }
    }

    reports.push(report);
  }

  // Imprimir resultado en JSON para poder copiarlo y guardarlo si se desea
  const outputPath = path.join(ROOT, "asset-audit-report.json");
  fs.writeFileSync(outputPath, JSON.stringify(reports, null, 2), "utf8");

  console.log("Auditoría completada. Reporte generado en:", outputPath);
}

runAudit();
