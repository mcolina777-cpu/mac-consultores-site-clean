import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = dict?.seo?.nuestro_ceo?.title || (isEs ? 'Nuestro CEO | Mac Consultores Jurídicos & Asociados' : 'Our CEO | Mac Consultores Jurídicos & Asociados');
  const description = isEs 
    ? 'Conoce a nuestro CEO, Marco A. Colina G., con más de 20 años de ejercicio en el foro penal y constitucional venezolano.' 
    : 'Meet our CEO, Marco A. Colina G., with over 20 years of practice in the Venezuelan criminal and constitutional forum.';
  
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/our-ceo`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/our-ceo`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/our-ceo`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'es': esUrl,
        'en': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mac Consultores Jurídicos & Asociados',
      images: [
        {
          url: '/assets/img/logo-mac-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Logo de Mac Consultores Jurídicos & Asociados',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
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
