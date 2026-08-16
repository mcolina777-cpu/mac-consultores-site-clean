import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.seo?.international_legal_services?.title,
  };
}

export default async function InternationalLegalServices({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.international_legal_services;

  return (
    <main className="page-international-legal-services">
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
            <span className="section-tag">{data?.elements?.tag}</span>
            <h2 className="section-title">{data?.elements?.title}</h2>
          </div>
          <div className="layout-reading mb-3rem">
            <p>{data?.elements?.intro}</p>
          </div>

          <div>
            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.elements?.scope?.title}</h3>
              <p>{data?.elements?.scope?.desc}</p>
            </article>

            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.elements?.jurisdiction?.title}</h3>
              <p>{data?.elements?.jurisdiction?.desc}</p>
            </article>

            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.elements?.fees?.title}</h3>
              <p>{data?.elements?.fees?.desc}</p>
            </article>

            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.elements?.confidentiality?.title}</h3>
              <p>{data?.elements?.confidentiality?.desc}</p>
            </article>

            <article className="mb-3rem">
              <h3 className="mb-1rem">{data?.elements?.conflicts?.title}</h3>
              <p>{data?.elements?.conflicts?.desc}</p>
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
