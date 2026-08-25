import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import B2BContactBox from "@/components/B2BContactBox";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict?.seo?.colaboracion_internacional?.title,
    description: dict?.seo?.colaboracion_internacional?.description,
  };
}

export default async function ColaboracionInternacional({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.colaboracion_internacional;

  return (
    <main className="page-colaboracion-internacional">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag" >{data?.breadcrumb}</span>
          <h1 className="mb-1-5rem">{data?.h1}</h1>
          <p className="hero-subtitle" >{data?.title}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <span className="section-tag">{data?.intro?.tag}</span>
              <h2 className="serif section-title mb-1-5rem">{data?.intro?.title}</h2>
              <p className="text-left max-w-100 mb-1rem">{data?.intro?.p1}</p>
              <p className="text-left max-w-100 mb-2rem">{data?.intro?.p2}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_DE_ALIANZAS_ESTRATEGICAS.webp" type="image/webp" />
                <img src="/assets/img/SALA_DE_ALIANZAS_ESTRATEGICAS.jpg" alt="Colaboración Internacional" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>

          <B2BContactBox data={data?.contactBox} locale={locale} />

          <div className="mt-4rem text-center">
            <span className="section-tag">{data?.proposal?.tag}</span>
            <h2 className="serif section-title mt-1rem mb-3rem">{data?.proposal?.title}</h2>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <span className="section-tag">{data?.proposal?.card_1?.tag || "01"}</span>
              <h3>{data?.proposal?.card_1?.title}</h3>
              
              <p className="font-medium text-muted">
                {data?.proposal?.card_1?.subtitle}
              </p>

              <p>{data?.proposal?.card_1?.p1}</p>
              <p>{data?.proposal?.card_1?.p2}</p>
              <p>{data?.proposal?.card_1?.p3}</p>

              <h4 className="mt-4 mb-2 font-semibold">
                {data?.proposal?.card_1?.section_when}
              </h4>

              <ul className="service-list">
                {data?.proposal?.card_1?.list?.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="mt-4 mb-2 font-semibold">
                {data?.proposal?.card_1?.section_approach}
              </h4>

              <p>{data?.proposal?.card_1?.approach_p1}</p>
              <p>{data?.proposal?.card_1?.approach_p2}</p>
              <p>{data?.proposal?.card_1?.approach_p3}</p>
              <p>{data?.proposal?.card_1?.approach_p4}</p>

              <span className="card-link">
                {data?.proposal?.card_1?.link}
              </span>
            </div>
            <div className="card">
              <h3>{data?.proposal?.card_2?.title}</h3>
              <p>{data?.proposal?.card_2?.desc}</p>
            </div>
            <div className="card">
              <h3>{data?.proposal?.card_3?.title}</h3>
              <p>{data?.proposal?.card_3?.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
