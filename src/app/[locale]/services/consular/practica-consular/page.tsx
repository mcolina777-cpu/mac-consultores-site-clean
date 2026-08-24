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

export default async function PracticaConsularPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="page-consular-detail">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            {dict?.tramites_consulares?.breadcrumb} / Práctica Consular
          </span>
          <h1>Práctica Consular</h1>
          <p className="subtitle">Representación y gestión ante autoridades consulares y migratorias.</p>
        </div>
      </header>

      <section className="intro-section">
        <div className="container">
          <p className="text-left max-w-100 mb-0">
            Brindamos asesoría y representación legal especializada ante misiones consulares, embajadas y autoridades migratorias.
          </p>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <h2 className="serif section-title">¿Requiere asistencia legal?</h2>
          <p className="section-desc">Nuestro equipo está preparado para analizar su caso.</p>
          <Link href={getRoute(locale, "contact")} className="btn btn-primary">
            INICIAR PROCESO DE ADMISIÓN
          </Link>
        </div>
      </section>
    </main>
  );
}
