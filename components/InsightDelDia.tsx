import React from "react";
import { getDictionary } from "@/i18n/getDictionary";

import InsightDelDiaClient from "./InsightDelDiaClient";

type InsightDelDiaProps = {
  locale?: string;
};

export default async function InsightDelDia({ locale = "es" }: InsightDelDiaProps) {
  const dict = await getDictionary(locale);
  const data = dict?.insight || {};

  return (
    <section className="daily-insight">
      <InsightDelDiaClient data={data} />
    </section>
  );
}
