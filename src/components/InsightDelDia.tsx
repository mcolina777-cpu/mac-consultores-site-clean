"use client";

import React from "react";

type InsightDelDiaProps = {
  locale?: string;
};

// Componente simple que muestra un texto distinto según el idioma.
// Más adelante se puede conectar con contenido dinámico.
const InsightDelDia: React.FC<InsightDelDiaProps> = ({ locale = "es" }) => {
  const isEnglish = locale.toLowerCase().startsWith("en");

  const title = isEnglish ? "Insight of the Day" : "Insight del día";
  const text = isEnglish
    ? "Strategic legal criteria to anticipate risks and strengthen your decisions."
    : "Criterio jurídico estratégico para anticipar riesgos y fortalecer tus decisiones.";

  return (
    <section className="insight-del-dia">
      <h2 className="insight-title">{title}</h2>
      <p className="insight-text">{text}</p>
    </section>
  );
};

export default InsightDelDia;
