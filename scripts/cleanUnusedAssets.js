const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const reportPath = path.join(ROOT, "asset-audit-report.json");

function runClean() {
  if (!fs.existsSync(reportPath)) {
    console.error("No se encontró asset-audit-report.json. Ejecuta primero `npm run audit:assets`.");
    process.exit(1);
  }

  const raw = fs.readFileSync(reportPath, "utf8");
  const reports = JSON.parse(raw);

  const candidates = reports.filter((r) => r.referencesCount === 0);

  console.log("Archivos candidatos a eliminación (sin referencias detectadas):");
  candidates.forEach((c) => {
    console.log("-", c.assetPath);
  });

  // IMPORTANTE: no borrar automáticamente sin confirmación humana.
  // Si se decide permitir borrado programático, se podría hacer:
  //
  // candidates.forEach((c) => {
  //   const fullPath = path.join(ROOT, c.assetPath);
  //   if (fs.existsSync(fullPath)) {
  //     fs.unlinkSync(fullPath);
  //     console.log("Eliminado:", fullPath);
  //   }
  // });
}

runClean();
