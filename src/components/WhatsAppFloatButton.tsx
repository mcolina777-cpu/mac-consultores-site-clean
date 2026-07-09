"use client";

import React from "react";

const WHATSAPP_PHONE = "582124142324";
const WHATSAPP_MESSAGE =
  "Buenos días, deseo información sobre una consulta profesional y honorarios.";

const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappUrl}
      className="mac-whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="WhatsApp solo para coordinación inicial"
    >
      <span className="mac-whatsapp-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M12 2.25C7.444 2.25 3.75 5.944 3.75 10.5c0 1.65.44 3.186 1.205 4.53L3 21l6.162-1.934A8.17 8.17 0 0 0 12 18.75c4.556 0 8.25-3.694 8.25-8.25S16.556 2.25 12 2.25z"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.4"
          />
          <path
            d="M9.35 8.1c-.18-.41-.37-.42-.55-.43-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.58 4.09 3.52.57.22 1.01.35 1.36.45.57.17 1.09.15 1.5.09.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.55.12-.17.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.21-1.42-1.36-1.66-.14-.24-.01-.37.1-.49.1-.1.24-.27.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.75-1.77z"
            fill="rgba(255,255,255,0.9)"
          />
        </svg>
      </span>
    </a>
  );
}
