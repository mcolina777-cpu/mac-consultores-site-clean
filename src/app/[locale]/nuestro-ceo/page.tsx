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
          <span className="breadcrumb">{dict?.ceo?.breadcrumb || 'Liderazgo Institucional'}</span>
          <h1>{dict?.ceo?.h1 || 'Abg. Marco A. Colina G.'}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-split">
            <div className="img-reveal">
              <picture>
                <img src="/assets/img/ceo.png"
                     alt="Fotografía corporativa de Marco A. Colina G., Director General"
                     loading="lazy" />
              </picture>
            </div>
            <div className="about-content">
              <span className="section-tag">{dict?.ceo?.about?.tag || 'Director General'}</span>
              <h2 className="section-title">{dict?.ceo?.about?.title || 'Visión técnica y liderazgo forense.'}</h2>
              <p>{dict?.ceo?.about?.desc_1 || 'El Abg. Marco A. Colina G. es el fundador y Director General de Mac Consultores Jurídicos & Asociados. Con más de 20 años de ejercicio profesional ininterrumpido...'}</p>
              <p className="mt-2">{dict?.ceo?.about?.desc_2 || 'Su enfoque combina el rigor dogmático con una visión pragmática de la justicia...'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="axial-header">
            <span className="section-tag">{dict?.ceo?.profile?.tag || 'Perfil Profesional'}</span>
            <h2 className="section-title">{dict?.ceo?.profile?.title || 'Especialidades de Liderazgo'}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="icon">⚖️</div>
              <h3>{dict?.ceo?.profile?.card_1?.title || 'Litigio de Casación'}</h3>
              <p>{dict?.ceo?.profile?.card_1?.desc || 'Experto en la interposición y defensa de recursos extraordinarios...'}</p>
            </div>
            <div className="card">
              <div className="icon">📜</div>
              <h3>{dict?.ceo?.profile?.card_2?.title || 'Derecho Penal Superior'}</h3>
              <p>{dict?.ceo?.profile?.card_2?.desc || 'Abordaje de delitos de cuello blanco, criminalidad organizada...'}</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3>{dict?.ceo?.profile?.card_3?.title || 'Tutela Constitucional'}</h3>
              <p>{dict?.ceo?.profile?.card_3?.desc || 'Especialista en la activación de garantías jurisdiccionales...'}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
