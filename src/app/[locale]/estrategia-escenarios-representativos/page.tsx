import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const fallbackTitle = isEs 
    ? 'Estrategias Aplicadas en Contextos Sensibles | Mac Consultores'
    : 'Strategies Applied in Sensitive Contexts | Mac Consultores';

  return {
    title: dict?.landing_estrategia_escenarios?.h1 || fallbackTitle,
  };
}

export default async function EstrategiaEscenariosRepresentativos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.landing_estrategia_escenarios;

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
            {data?.intro?.p3 && <p className="text-left max-w-100 mb-2rem">{data?.intro?.p3}</p>}
          </div>

          {/* Scenarios */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.scenarios?.title}</h2>
            {data?.scenarios?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.scenarios?.p1}</p>}
            {data?.scenarios?.p2 && <p className="text-left max-w-100 mb-1rem">{data?.scenarios?.p2}</p>}
            {data?.scenarios?.p3 && <p className="text-left max-w-100 mb-1rem">{data?.scenarios?.p3}</p>}
            {data?.scenarios?.p4 && <p className="text-left max-w-100 mb-1rem">{data?.scenarios?.p4}</p>}
            {data?.scenarios?.p5 && <p className="text-left max-w-100 mb-2rem">{data?.scenarios?.p5}</p>}
          </div>

          {/* Anticipation */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.anticipation?.title}</h2>
            {data?.anticipation?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.anticipation?.p1}</p>}
            {data?.anticipation?.p2 && <p className="text-left max-w-100 mb-2rem">{data?.anticipation?.p2}</p>}
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
