import React from "react";

type InsightDelDiaProps = {
  locale?: string;
};

const InsightDelDia: React.FC<InsightDelDiaProps> = ({ locale = "es" }) => {
  const isEnglish = locale.toLowerCase().startsWith("en");

  const title = isEnglish
    ? "Legal Insight of the Day"
    : "INSIGHT JURÍDICO DEL DÍA";

  const concept = isEnglish
    ? "Corporate criminal liability"
    : "Responsabilidad penal de las personas jurídicas";

  const description = isEnglish
    ? "In Venezuela, corporate criminal liability is built primarily on the actions of company organs and representatives, which demands effective compliance and prevention programs."
    : "En Venezuela, la responsabilidad penal de las personas jurídicas se estructura principalmente a partir de la participación de sus órganos y representantes, lo que exige programas efectivos de cumplimiento y prevención.";

  const updatedBy = isEnglish
    ? "Updated daily by Mac Consultores Jurídicos & Asociados."
    : "Actualizado diariamente por Mac Consultores Jurídicos & Asociados.";

  return (
    <section className="daily-insight">
      <div className="daily-insight-inner">
        <span className="daily-insight-tag">{title}</span>
        <h2 className="daily-insight-concept is-loaded">{concept}</h2>
        <p className="daily-insight-definition is-loaded">
          {description}
        </p>
        <p
          className="daily-insight-definition is-loaded"
          style={{ marginTop: "0.75rem", fontSize: "1.1rem", opacity: 0.9 }}
        >
          {updatedBy}
        </p>
      </div>
    </section>
  );
};

export default InsightDelDia;
