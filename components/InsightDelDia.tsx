import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import insightsData from "@/data/insights.json";

import InsightDelDiaClient from "./InsightDelDiaClient";

type InsightDelDiaProps = {
  locale?: string;
};

export default async function InsightDelDia({ locale = "es" }: InsightDelDiaProps) {
  const dict = await getDictionary(locale);
  const baseData = dict?.insight || {};

  const caracasTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Caracas"
  });
  const dayOfMonth = new Date(caracasTime).getDate();

  const currentInsight =
    insightsData.length > 0
      ? insightsData[(dayOfMonth - 1) % insightsData.length]
      : null;

  const selectedLang = locale === "en" ? "en" : "es";

  const data = {
    tag:
      baseData.tag ||
      (selectedLang === "en"
        ? "Daily Legal Insight"
        : "Insight Jurídico del Día"),
    title: currentInsight
      ? selectedLang === "en"
        ? currentInsight.en.concept
        : currentInsight.es.concepto
      : baseData.title,
    body: currentInsight
      ? selectedLang === "en"
        ? currentInsight.en.definition
        : currentInsight.es.definicion
      : baseData.body,
    footer:
      baseData.footer ||
      (selectedLang === "en"
        ? "Updated daily by Mac Consultores Jurídicos & Asociados."
        : "Actualizado diariamente por Mac Consultores Jurídicos & Asociados.")
  };

  return (
    <section className="daily-insight">
      <InsightDelDiaClient data={data} />
    </section>
  );
}
