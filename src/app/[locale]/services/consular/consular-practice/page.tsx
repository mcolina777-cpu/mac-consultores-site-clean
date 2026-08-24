import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const title = isEs
    ? 'Práctica Consular | Mac Consultores'
    : 'Consular Practice | Mac Consultores';
  const description = isEs
    ? 'Apoderamiento legal y representación ante autoridades consulares y migratorias.'
    : 'Legal empowerment and representation before consular and migration authorities.';

  return {
    title,
    description,
  };
}

export default async function ConsularPracticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="page-consular-detail">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            {dict?.tramites_consulares?.breadcrumb} / Consular Practice
          </span>
          <h1>{dict?.consular?.practica_consular?.page_title}</h1>
          <p className="subtitle">{dict?.consular?.practica_consular?.page_subtitle}</p>
        </div>
      </header>

      <section className="intro-section">
        <div className="container">
          <p className="text-left max-w-100 mb-0">
            {dict?.consular?.practica_consular?.intro}
          </p>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <h2 className="serif section-title">Do you require legal assistance?</h2>
          <p className="section-desc">Our team is prepared to analyze your case.</p>
          <Link href={getRoute(locale, "contact")} className="btn btn-primary">
            START ADMISSION PROCESS
          </Link>
        </div>
      </section>
    </main>
  );
}
