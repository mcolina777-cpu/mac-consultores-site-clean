import React from 'react';
import Link from 'next/link';
import { getRoute } from "@/lib/routes";

export default function Hero({ dict, locale }: { dict: any, locale: string }) {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">

          <span className="section-tag">{dict?.tag}</span>
          <h1>{dict?.h1}</h1>
          <p>
            {dict?.desc}
          </p>
          <div className="hero-btns">
            <Link href={getRoute(locale, "contact")} className="btn btn-primary">
              {dict?.btn}
            </Link>
            {dict?.btn_hint && (
              <p className="hero-btn-hint mt-1rem text-sm" style={{ opacity: 0.8, fontSize: '0.85rem' }}>
                {dict.btn_hint}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
