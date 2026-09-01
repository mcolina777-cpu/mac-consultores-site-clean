"use client";

import React from "react";

type InsightDelDiaClientProps = {
  data: {
    tag?: string;
    title?: string;
    body?: string;
    footer?: string;
  };
};

export default function InsightDelDiaClient({ data }: InsightDelDiaClientProps) {
  return (
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
  );
}
