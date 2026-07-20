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
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Caracas",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("es-VE", options).format(now));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

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
