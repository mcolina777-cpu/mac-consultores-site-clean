import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.seo?.nuestro_ceo?.title || 'Nuestro CEO | Mac Consultores Jurídicos & Asociados',
  };
}

export default async function NuestroCEO({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.ceo?.breadcrumb}</span>
          <h1>{dict?.ceo?.h1}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-split">
            <div className="img-reveal">
              <picture>
                <img src="/assets/mac/ceo.png"
                     alt="Fotografía corporativa de Marco A. Colina G., Director General"
                     loading="lazy" />
              </picture>
            </div>
            <div className="about-content">
              <span className="section-tag">{dict?.ceo?.about?.tag}</span>
              <h2 className="section-title">{dict?.ceo?.about?.title}</h2>
              <p>{dict?.ceo?.about?.desc_1}</p>
              <p className="mt-2">{dict?.ceo?.about?.desc_2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="axial-header">
            <span className="section-tag">{dict?.ceo?.profile?.tag}</span>
            <h2 className="section-title">{dict?.ceo?.profile?.title}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="icon">⚖️</div>
              <h3>{dict?.ceo?.profile?.card_1?.title}</h3>
              <p>{dict?.ceo?.profile?.card_1?.desc}</p>
            </div>
            <div className="card">
              <div className="icon">📜</div>
              <h3>{dict?.ceo?.profile?.card_2?.title}</h3>
              <p>{dict?.ceo?.profile?.card_2?.desc}</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3>{dict?.ceo?.profile?.card_3?.title}</h3>
              <p>{dict?.ceo?.profile?.card_3?.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
