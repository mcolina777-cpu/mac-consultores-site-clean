import React from "react";
import { getDictionary } from "@/i18n/getDictionary";

type InsightDelDiaProps = {
  locale?: string;
};

export default async function InsightDelDia({ locale = "es" }: InsightDelDiaProps) {
  const dict: any = await getDictionary(locale);
  const data = dict?.insight || {};

  return (
    <section className="daily-insight">
      <div className="daily-insight-inner">
        <span className="daily-insight-tag">{data.tag || "Insight"}</span>
        <h2 className="daily-insight-concept is-loaded">{data.title || "Concept"}</h2>
        <p className="daily-insight-definition is-loaded">
          {data.body || "Definition"}
        </p>
        <p className="daily-insight-definition daily-insight-footer is-loaded">
          {data.footer || "Footer"}
        </p>
      </div>
    </section>
  );
}
