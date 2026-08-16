import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.seo?.defense_documentation?.title,
  };
}

export default async function DefenseDocumentation({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.defense_documentation;

  return (
    <main className="page-defense-documentation">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{data?.breadcrumb}</span>
          <h1>{data?.h1}</h1>
          <p className="subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="bg-soft">
        <div className="container">
          <div className="layout-reading">
            <p className="mb-1-5rem">{data?.intro_p_1}</p>
            <p className="mb-1-5rem">{data?.intro_p_2}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="axial-header">
            <span className="section-tag">{data?.areas?.tag}</span>
            <h2 className="section-title">{data?.areas?.title}</h2>
          </div>
          <div className="layout-reading mb-3rem">
            <p>{data?.areas?.intro}</p>
          </div>

          <div>
            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.areas?.corporate?.title}</h3>
              <p>{data?.areas?.corporate?.desc}</p>
            </article>

            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.areas?.commercial?.title}</h3>
              <p>{data?.areas?.commercial?.desc}</p>
            </article>

            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.areas?.financial?.title}</h3>
              <p>{data?.areas?.financial?.desc}</p>
            </article>

            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.areas?.digital?.title}</h3>
              <p>{data?.areas?.digital?.desc}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="axial-header">
            <h2 className="section-title">{data?.value?.title}</h2>
          </div>
          <div className="layout-reading">
            <p className="mb-1-5rem">{data?.value?.p_1}</p>
            <p className="mb-1-5rem">{data?.value?.p_2}</p>
          </div>
          <div className="mt-3rem">
            <p>{data?.notice}</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <h2 className="mb-1-5rem">{data?.cta?.title}</h2>
          <p className="mb-1-5rem">{data?.cta?.desc}</p>
          <Link href={getRoute(locale, "contact")} className="btn btn-primary">
            {data?.cta?.link}
          </Link>
        </div>
      </section>
    </main>
  );
}
