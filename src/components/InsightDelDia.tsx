import React from "react";
import { getDictionary } from "@/i18n/getDictionary";

type InsightDelDiaProps = {
  locale?: string;
};

export default async function InsightDelDia({ locale = "es" }: InsightDelDiaProps) {
  const dict = await getDictionary(locale);
  const data = dict?.insight || {};

  return (
    <section className="daily-insight">
      <div className="daily-insight-inner">
        <span className="daily-insight-tag">{data.tag}</span>
        <h2 className="daily-insight-concept is-loaded">{data.title}</h2>
        <p className="daily-insight-definition is-loaded">
          {data.body}
        </p>
        <p className="daily-insight-definition daily-insight-footer is-loaded">
          {data.footer}
        </p>
      </div>
    </section>
  );
}
