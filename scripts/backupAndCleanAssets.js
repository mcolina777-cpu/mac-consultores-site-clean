const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const reportPath = path.join(ROOT, "asset-audit-report.json");
const backupDir = path.join(ROOT, "public", "backup-unused-assets");

/**
 * @typedef {Object} AssetReport
 * @property {string} assetPath
 * @property {string} fileName
 * @property {number} referencesCount
 * @property {string[]} referencedIn
 */

function ensureBackupDir() {
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
    console.log("Carpeta de backup creada en:", backupDir);
  } else {
    console.log("Carpeta de backup ya existe:", backupDir);
  }
}

function runBackupAndClean() {
  if (!fs.existsSync(reportPath)) {
    console.error(
      "No se encontró asset-audit-report.json. Ejecuta primero `npm run audit:assets`."
    );
    process.exit(1);
  }

  const raw = fs.readFileSync(reportPath, "utf8");
  /** @type {AssetReport[]} */
  const reports = JSON.parse(raw);

  // Filtrar assets con 0 referencias (candidatos a eliminación)
  const candidates = reports.filter((r) => r.referencesCount === 0);

  if (candidates.length === 0) {
    console.log("No hay archivos candidatos a eliminación según el reporte.");
    return;
  }

  console.log("Archivos candidatos a backup + eliminación:");
  candidates.forEach((c) => {
    console.log("-", c.assetPath);
  });

  // Asegurar carpeta de backup
  ensureBackupDir();

  // Copiar y luego eliminar cada archivo candidato
  candidates.forEach((c) => {
    const originalFullPath = path.join(ROOT, c.assetPath);
    const backupFullPath = path.join(backupDir, c.fileName);

    if (!fs.existsSync(originalFullPath)) {
      console.warn("Archivo no encontrado, se omite:", originalFullPath);
      return;
    }

    try {
      // Copia al backup
      fs.copyFileSync(originalFullPath, backupFullPath);
      console.log("Copiado a backup:", backupFullPath);

      // Eliminación del archivo original
      fs.unlinkSync(originalFullPath);
      console.log("Eliminado archivo original:", originalFullPath);
    } catch (err) {
      console.error("Error al procesar archivo:", originalFullPath, err);
    }
  });

  console.log(
    "Proceso de backup + limpieza completado. Todos los candidatos fueron copiados a public/backup-unused-assets y luego borrados de su ubicación original."
  );
}

runBackupAndClean();
