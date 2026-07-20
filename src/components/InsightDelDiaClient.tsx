"use client";

import React, { useState, useEffect } from "react";

type InsightDelDiaClientProps = {
  data: {
    tag?: string;
    title?: string;
    body?: string;
    footer?: string;
  };
};

export default function InsightDelDiaClient({ data }: InsightDelDiaClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="daily-insight-inner">
      <span className="daily-insight-tag">{data.tag}</span>
      <h2 className={`daily-insight-concept ${isLoaded ? "is-loaded" : ""}`}>{data.title}</h2>
      <p className={`daily-insight-definition ${isLoaded ? "is-loaded" : ""}`}>
        {data.body}
      </p>
      <p className={`daily-insight-definition daily-insight-footer ${isLoaded ? "is-loaded" : ""}`}>
        {data.footer}
      </p>
    </div>
  );
}
