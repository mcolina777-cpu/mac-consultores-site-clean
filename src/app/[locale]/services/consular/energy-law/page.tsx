import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Materia Energética | Mac Consultores'
    : 'Energy Law & Regulatory Practice | Mac Consultores';
  const description = isEs
    ? 'Asesoría jurídica estratégica en contratación, regulación y estructuras corporativas para el sector energético en Venezuela.'
    : 'Strategic legal advisory in contractual, regulatory, and corporate structures for the Venezuelan energy sector.';

  return {
    title,
    description,
  };
}

export default async function EnergyLawPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.consular?.materia_energetica;

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
            <p className="text-left max-w-100 mb-1rem">{data?.intro?.p1}</p>
            <p className="text-left max-w-100 mb-1rem">{data?.intro?.p2}</p>
            <p className="text-left max-w-100 mb-1rem">{data?.intro?.p3}</p>
            <p className="text-left max-w-100 mb-2rem">{data?.intro?.p4}</p>
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
            <p className="mb-1rem">{data?.approach?.p1}</p>
            <p className="mb-1rem">{data?.approach?.p2}</p>
            <p className="mb-1rem">{data?.approach?.p3}</p>
            <p className="mb-1rem">{data?.approach?.p4}</p>
            <p className="mb-1rem">{data?.approach?.p5}</p>
          </div>
        </div>
      </section>

      <section className="bg-soft text-center section-padding-asym">
        <div className="container">
          <h2 className="serif section-title mb-1-5rem">
            {locale === 'en' ? 'Do you require legal assistance?' : '¿Requiere asistencia legal?'}
          </h2>
          <p className="section-desc mb-2rem">
            {locale === 'en' ? 'Our team is prepared to analyze your case.' : 'Nuestro equipo está preparado para analizar su caso.'}
          </p>
          <Link href={getRoute(locale, "contact")} className="btn btn-primary">
            {locale === 'en' ? 'START ADMISSION PROCESS' : 'INICIAR PROCESO DE ADMISIÓN'}
          </Link>
        </div>
      </section>
    </main>
  );
}
