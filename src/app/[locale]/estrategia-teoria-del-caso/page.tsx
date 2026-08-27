import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const fallbackTitle = isEs 
    ? 'Teoría del Caso como Eje de la Defensa | Mac Consultores'
    : 'Case Theory as the Axis of Defense | Mac Consultores';

  return {
    title: dict?.landing_estrategia_teoria_caso?.h1 || fallbackTitle,
  };
}

export default async function EstrategiaTeoriaDelCaso({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.landing_estrategia_teoria_caso;

  return (
    <main className="page-consular-detail">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.tag}</span>
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container">
          {/* Intro Section */}
          <div className="mb-4rem">
            {data?.intro?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.intro?.p1}</p>}
            {data?.intro?.p2 && <p className="text-left max-w-100 mb-1rem">{data?.intro?.p2}</p>}
            {data?.intro?.p3 && <p className="text-left max-w-100 mb-1rem">{data?.intro?.p3}</p>}
            {data?.intro?.p4 && <p className="text-left max-w-100 mb-2rem">{data?.intro?.p4}</p>}
          </div>

          {/* Facts */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.facts?.title}</h2>
            {data?.facts?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.facts?.p1}</p>}
            {data?.facts?.p2 && <p className="text-left max-w-100 mb-1rem">{data?.facts?.p2}</p>}
            {data?.facts?.p3 && <p className="text-left max-w-100 mb-1rem">{data?.facts?.p3}</p>}
            {data?.facts?.p4 && <p className="text-left max-w-100 mb-2rem">{data?.facts?.p4}</p>}
          </div>

          {/* Evidence and Law */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.evidence_and_law?.title}</h2>
            {data?.evidence_and_law?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.evidence_and_law?.p1}</p>}
            {data?.evidence_and_law?.p2 && <p className="text-left max-w-100 mb-2rem">{data?.evidence_and_law?.p2}</p>}
          </div>

          {/* Coherence */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.coherence?.title}</h2>
            {data?.coherence?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.coherence?.p1}</p>}
            {data?.coherence?.p2 && <p className="text-left max-w-100 mb-2rem">{data?.coherence?.p2}</p>}
          </div>

          {/* Approach */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.approach?.title}</h2>
            {data?.approach?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.approach?.p1}</p>}
            {data?.approach?.p2 && <p className="text-left max-w-100 mb-2rem font-bold">{data?.approach?.p2}</p>}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-soft text-center section-padding-asym">
        <div className="container">
          <h2 className="serif section-title mb-1-5rem">
            {dict?.cta?.title}
          </h2>
          <p className="section-desc mb-2rem">
            {dict?.cta?.desc}
          </p>
          <Link href={getRoute(locale, "contact")} className="btn btn-primary">
            {dict?.cta?.btn}
          </Link>
        </div>
      </section>
    </main>
  );
}
