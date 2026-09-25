import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      error: "method_not_allowed",
      message: "Método no permitido. Utilice POST.",
    },
    {
      status: 405,
      headers: { Allow: "POST" },
    }
  );
}

function sanitizeString(val: unknown, maxLen = 4000): string {
  if (typeof val !== "string") return "";
  // Elimina caracteres de control ASCII excepto saltos de línea y tabulaciones
  return val
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim()
    .slice(0, maxLen);
}

export async function POST(request: NextRequest) {
  // 1. Verificación de tipo de contenido
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      {
        error: "unsupported_media_type",
        message: "El encabezado Content-Type debe ser application/json.",
      },
      { status: 415 }
    );
  }

  // 2. Control de tamaño del payload (máximo 100 KB)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 100 * 1024) {
    return NextResponse.json(
      {
        error: "payload_too_large",
        message: "El tamaño de la solicitud excede el límite permitido.",
      },
      { status: 413 }
    );
  }

  // 3. Parseo seguro de JSON
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "invalid_json",
        message: "Formato de cuerpo de solicitud JSON inválido.",
      },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      {
        error: "invalid_body",
        message: "El cuerpo de la solicitud debe ser un objeto JSON válido.",
      },
      { status: 400 }
    );
  }

  // 4. Protección antispam mediante Honeypot
  const honeypot = typeof body._hp === "string" ? body._hp.trim() : "";
  if (honeypot.length > 0) {
    // Rechazo controlado sin detallar la detección de bot
    return NextResponse.json(
      {
        error: "invalid_request",
        message: "Solicitud no procesable.",
      },
      { status: 400 }
    );
  }

  // 5. Verificación temporal opcional (tiempo de llenado mínimo)
  const formLoadedAt = typeof body.formLoadedAt === "number" ? body.formLoadedAt : 0;
  if (formLoadedAt > 0 && Date.now() - formLoadedAt < 1000) {
    return NextResponse.json(
      {
        error: "submission_too_fast",
        message: "Envío demasiado rápido. Por favor intente nuevamente.",
      },
      { status: 400 }
    );
  }

  // 6. Extracción y sanitización de datos del formulario
  const fullName = sanitizeString(body.fullName, 200);
  const email = sanitizeString(body.email, 200);
  const country = sanitizeString(body.country, 150);
  const actingAs = typeof body.actingAs === "string" ? body.actingAs : "organization";
  const organization = sanitizeString(body.organization, 200);
  const role = sanitizeString(body.role, 200);
  const isAuthorized = body.isAuthorized === true;

  const exposureNature = sanitizeString(body.exposureNature, 500);
  const factualContext = sanitizeString(body.factualContext, 4000);
  const venezuelaRelationship = sanitizeString(body.venezuelaRelationship, 4000);

  const decisionIssue = sanitizeString(body.decisionIssue, 4000);
  const practicalPurpose = sanitizeString(body.practicalPurpose, 500);
  const mainJurisdiction = sanitizeString(body.mainJurisdiction, 100);
  const additionalJurisdictions = sanitizeString(body.additionalJurisdictions, 2000);
  const hasDeadline = sanitizeString(body.hasDeadline, 50);
  const deadlineDate = sanitizeString(body.deadlineDate, 100);
  const unknownExactDate = body.unknownExactDate === true;
  const deadlineDesc = sanitizeString(body.deadlineDesc, 4000);
  const urgencyLevel = sanitizeString(body.urgencyLevel, 100);

  const decl1 = body.decl1 === true;
  const decl2 = body.decl2 === true;
  const decl3 = body.decl3 === true;
  const decl4 = body.decl4 === true;
  const decl5 = body.decl5 === true;

  // 7. Validación lógica y obligatoriedad de campos
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationErrors: string[] = [];

  if (!fullName) validationErrors.push("fullName es obligatorio");
  if (!email || !emailRegex.test(email)) validationErrors.push("email válido es obligatorio");
  if (!country) validationErrors.push("country es obligatorio");

  if (actingAs === "organization") {
    if (!organization) validationErrors.push("organization es obligatoria cuando actúa en nombre de organización");
    if (!role) validationErrors.push("role es obligatorio cuando actúa en nombre de organización");
    if (!isAuthorized) validationErrors.push("isAuthorized debe ser aceptado cuando actúa en nombre de organización");
  }

  if (!exposureNature) validationErrors.push("exposureNature es obligatorio");
  if (!factualContext) validationErrors.push("factualContext es obligatorio");
  if (!venezuelaRelationship) validationErrors.push("venezuelaRelationship es obligatorio");

  if (!decisionIssue) validationErrors.push("decisionIssue es obligatorio");
  if (!practicalPurpose) validationErrors.push("practicalPurpose es obligatorio");
  if (!mainJurisdiction) validationErrors.push("mainJurisdiction es obligatorio");

  if ((mainJurisdiction === "other" || mainJurisdiction === "both") && !additionalJurisdictions) {
    validationErrors.push("additionalJurisdictions es obligatorio cuando mainJurisdiction es distinto de solo venezuela");
  }

  if (!hasDeadline) validationErrors.push("hasDeadline es obligatorio");
  if (hasDeadline === "yes") {
    if (!unknownExactDate && !deadlineDate) {
      validationErrors.push("deadlineDate o unknownExactDate es obligatorio cuando hasDeadline es yes");
    }
    if (!deadlineDesc) {
      validationErrors.push("deadlineDesc es obligatorio cuando hasDeadline es yes");
    }
  }

  if (!urgencyLevel) validationErrors.push("urgencyLevel es obligatorio");

  if (!decl1 || !decl2 || !decl3 || !decl4 || !decl5) {
    validationErrors.push("Todas las declaraciones obligatorias (decl1 a decl5) deben ser aceptadas");
  }

  if (validationErrors.length > 0) {
    return NextResponse.json(
      {
        error: "validation_failed",
        message: "Validación de datos fallida en el servidor.",
        details: validationErrors,
      },
      { status: 400 }
    );
  }

  // 8. Verificación de configuración segura en el servidor
  // Las variables de entorno de despacho son estrictamente del servidor (sin NEXT_PUBLIC_).
  // Durante esta fase, al no existir credencial real configurada, se responde con 503 controlado.
  const emailApiKey = process.env.RESEND_API_KEY;
  const isServiceConfigured = typeof emailApiKey === "string" && emailApiKey.trim().length > 0;

  if (!isServiceConfigured) {
    return NextResponse.json(
      {
        error: "service_not_configured",
        message: "El servicio de recepción de solicitudes se encuentra temporalmente en configuración.",
      },
      { status: 503 }
    );
  }

  // 9. Punto de extensión para fase futura autorizada:
  // - Compilación de plantilla de correo institucional
  // - Generación de documento PDF estructurado adjunto
  // - Envío autenticado mediante proveedor transaccional por API
  // - Retorno de estado 200 con código de referencia institucional único:
  //   return NextResponse.json({ success: true, reference: generatedRef });

  return NextResponse.json(
    {
      error: "service_not_configured",
      message: "El servicio de recepción de solicitudes se encuentra temporalmente en configuración.",
    },
    { status: 503 }
  );
}
