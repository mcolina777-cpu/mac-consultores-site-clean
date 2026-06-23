import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Servicios | Mac Consultores Jurídicos & Asociados',
  description: 'Nuestras áreas de práctica estratégica.',
};

export default async function Servicios({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb" >{dict?.breadcrumb}</span>
          <h1 >{dict?.h1}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-split" style={{ marginBottom: '4rem' }}>
            <div className="about-text">
              <span className="section-tag" >{dict?.intro?.tag}</span>
              <h2 className="serif section-title" style={{ marginBottom: 0 }} >{dict?.intro?.h2}</h2>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_REUNIONES_B_OPT.webp" type="image/webp" />
                <img src="/assets/img/SALA_REUNIONES_B_OPT.jpg" alt="Sala de Reuniones y Despacho en Mac Consultores" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>
          
          <div className="grid-2">
            <div className="card">
              <span className="section-tag">01</span>
              <h3 >{dict?.services?.card_1?.title}</h3>
              <p >{dict?.services?.card_1?.desc}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_1?.list }}></ul>
              <Link href="/servicios#penal-procesal" className="card-link" >{dict?.services?.card_1?.link}</Link>
            </div>
            <div className="card">
              <span className="section-tag">02</span>
              <h3 >{dict?.services?.card_2?.title}</h3>
              <p >{dict?.services?.card_2?.desc}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_2?.list }}></ul>
              <Link href="/servicios#constitucional" className="card-link" >{dict?.services?.card_2?.link}</Link>
            </div>
            <div className="card">
              <span className="section-tag">03</span>
              <h3 >{dict?.services?.card_3?.title}</h3>
              <p >{dict?.services?.card_3?.desc}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_3?.list }}></ul>
              <Link href="/servicios#delitos-informaticos" className="card-link" >{dict?.services?.card_3?.link}</Link>
            </div>
            <div className="card">
              <span className="section-tag">04</span>
              <h3 >{dict?.services?.card_4?.title}</h3>
              <p >{dict?.services?.card_4?.desc}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_4?.list }}></ul>
              <Link href="/servicios#consultoria-preventiva" className="card-link" >{dict?.services?.card_4?.link}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <h2 className="serif section-title" >{dict?.cta?.title}</h2>
          <p className="section-desc" >{dict?.cta?.desc}</p>
          <Link href="/contacto" className="btn btn-primary" >{dict?.cta?.btn}</Link>
        </div>
      </section>

    </main>
  );
}
