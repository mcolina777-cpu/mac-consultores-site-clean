"use client";

import React, { useState, useEffect } from "react";

type LocalClockProps = {
  locale?: string;
};

export default function LocalClock({ locale = "es" }: LocalClockProps) {
  const [localTime, setLocalTime] = useState("--:--");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const isEn = locale.toLowerCase().startsWith("en");
      const intlLocale = isEn ? "en-US" : "es-VE";
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Caracas",
        hour: isEn ? "numeric" : "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat(intlLocale, options).format(now));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, [locale]);

  return (
    <span 
      id="local-clock" 
      className="footer-localtime-value"
      style={{ display: "inline-block", minWidth: "85px" }}
    >
      {localTime}
    </span>
  );
}
