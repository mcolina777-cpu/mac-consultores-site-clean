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
          </div>
        </div>
      </div>
    </header>
  );
}
