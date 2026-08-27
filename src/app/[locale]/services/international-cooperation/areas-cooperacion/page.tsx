import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Áreas de Cooperación Jurídica | Mac Consultores Jurídicos & Asociados'
    : 'Areas of Legal Cooperation | Mac Consultores Jurídicos & Asociados';
  const description = isEs
    ? 'Capacidad jurídica local para asuntos y operaciones con conexión con Venezuela.'
    : 'Local legal capacity for cross-border matters and transactions connected to Venezuela.';

  return {
    title,
    description,
  };
}

export default async function AreasCooperacionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.colaboracion_internacional?.landing_t2;

  return (
    <main className="page-consular-detail">
      <header className="page-header header-soft-bg">
        <div className="container">
          <h1 className="mb-1-5rem serif">{data?.h1}</h1>
          <p className="subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container">
          {/* Intro Section */}
          <div className="mb-3rem">
            {data?.intro?.p1 && <p className="text-left max-w-100 mb-1rem">{data?.intro?.p1}</p>}
            {data?.intro?.p2 && <p className="text-left max-w-100 mb-2rem">{data?.intro?.p2}</p>}
          </div>

          {/* When we intervene */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">{data?.when_we_intervene?.title}</h2>
            <ul className="service-list">
              {data?.when_we_intervene?.items?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Our approach */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">{data?.approach?.title}</h2>
            {data?.approach?.p1 && <p className="mb-1rem">{data?.approach?.p1}</p>}
            {data?.approach?.p2 && <p className="mb-1rem">{data?.approach?.p2}</p>}
          </div>
        </div>
      </section>

      <section className="bg-soft text-center section-padding-asym">
        <div className="container">
          <h2 className="serif section-title mb-1-5rem">
            {locale === 'en' ? 'Let us build a strategic partnership' : 'Construyamos una alianza estratégica'}
          </h2>
          <p className="section-desc mb-2rem">
            {locale === 'en' 
              ? 'Our team is available to learn about your needs.' 
              : 'Nuestro equipo está disponible para conocer sus necesidades.'}
          </p>
          <Link href={getRoute(locale, "contact")} className="btn btn-primary">
            {locale === 'en' ? 'CONTACT US' : 'CONTÁCTENOS'}
          </Link>
        </div>
      </section>
    </main>
  );
}
