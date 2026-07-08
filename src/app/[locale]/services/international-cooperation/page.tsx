import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);
  
  return {
    title: dict?.seo?.colaboracion_internacional?.title || 'Colaboración Internacional | Mac Consultores Jurídicos & Asociados',
    description: dict?.seo?.colaboracion_internacional?.description || 'Colaboración estratégica con firmas internacionales. Soporte local de excelencia en Venezuela.',
  };
}

export default async function ColaboracionInternacional({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);
  const data = dict?.colaboracion_internacional;

  return (
    <main className="page-colaboracion-internacional">
      <header className="page-header" style={{ textAlign: 'left', padding: '120px 0 40px', backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <span className="section-tag" >{data?.breadcrumb}</span>
          <h1 style={{ marginBottom: '1.5rem' }} >{data?.h1}</h1>
          <p className="hero-subtitle" >{data?.title}</p>
        </div>
      </header>

      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <span className="section-tag">{data?.intro?.tag}</span>
              <h2 className="serif section-title" style={{ marginBottom: '1.5rem' }}>{data?.intro?.title}</h2>
              <p style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '1rem' }} >{data?.intro?.p1}</p>
              <p style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }} >{data?.intro?.p2}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_DE_ALIANZAS_ESTRATEGICAS.webp" type="image/webp" />
                <img src="/assets/img/SALA_DE_ALIANZAS_ESTRATEGICAS.jpg" alt="Colaboración Internacional" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <span className="section-tag">{data?.proposal?.tag}</span>
            <h2 className="serif section-title" style={{ marginTop: '1rem', marginBottom: '3rem' }}>{data?.proposal?.title}</h2>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <h3>{data?.proposal?.card_1?.title}</h3>
              <p>{data?.proposal?.card_1?.desc}</p>
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
