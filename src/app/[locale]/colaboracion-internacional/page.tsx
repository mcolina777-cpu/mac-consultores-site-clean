import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Colaboración Internacional | Mac Consultores Jurídicos & Asociados',
  description: 'Colaboración estratégica con firmas internacionales. Soporte local de excelencia en Venezuela.',
};

export default async function ColaboracionInternacional({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-colaboracion-internacional">
      <header className="page-header" style={{ textAlign: 'left', padding: '120px 0 40px', backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <span className="section-tag" >{dict?.alianzas?.breadcrumb}</span>
          <h1 style={{ marginBottom: '1.5rem' }} >{dict?.alianzas?.h1}</h1>
          <p className="hero-subtitle" >{dict?.alianzas?.subtitle}</p>
        </div>
      </header>

      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <p style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }} >{dict?.alianzas?.intro_p1}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_DE_ALIANZAS_ESTRATEGICAS.webp" type="image/webp" />
                <img src="/assets/img/SALA_DE_ALIANZAS_ESTRATEGICAS.jpg" alt="Colaboración Internacional" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>

          <h3 className="serif section-title" style={{ marginTop: '4rem', fontSize: '2.2rem' }} >{dict?.alianzas?.areas?.title}</h3>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="card">
              <h3 >{dict?.alianzas?.areas?.c1?.title}</h3>
              <p >{dict?.alianzas?.areas?.c1?.desc}</p>
              <Link href="#auditoria-due-diligence" className="card-link" style={{ marginTop: '1rem', display: 'inline-block' }}>{dict?.alianzas?.read_more}</Link>
            </div>
            <div className="card">
              <h3 >{dict?.alianzas?.areas?.c2?.title}</h3>
              <p >{dict?.alianzas?.areas?.c2?.desc}</p>
              <Link href="#ejecucion-exhortos" className="card-link" style={{ marginTop: '1rem', display: 'inline-block' }}>{dict?.alianzas?.read_more}</Link>
            </div>
            <div className="card">
              <h3 >{dict?.alianzas?.areas?.c3?.title}</h3>
              <p >{dict?.alianzas?.areas?.c3?.desc}</p>
              <Link href="#opiniones-legales" className="card-link" style={{ marginTop: '1rem', display: 'inline-block' }}>{dict?.alianzas?.read_more}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="grid-split" style={{ marginBottom: '4rem' }}>
            <div className="about-text">
              <span className="section-tag" >{dict?.alianzas?.proposal?.tag}</span>
              <h2 className="serif section-title" style={{ marginBottom: '1.5rem' }} >{dict?.alianzas?.proposal?.title}</h2>
              <p >{dict?.alianzas?.proposal?.desc}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/ALIANZAS_DETALLE.webp" type="image/webp" />
                <img src="/assets/img/ALIANZAS_DETALLE.jpg" alt="Alianzas Detalle" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>

          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div className="icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>🤝</div>
              <h3 style={{ fontSize: '1.3rem' }} >{dict?.alianzas?.features?.f1?.title}</h3>
              <p style={{ textAlign: 'center', fontSize: '1rem' }} >{dict?.alianzas?.features?.f1?.desc}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div className="icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>🔍</div>
              <h3 style={{ fontSize: '1.3rem' }} >{dict?.alianzas?.features?.f2?.title}</h3>
              <p style={{ textAlign: 'center', fontSize: '1rem' }} >{dict?.alianzas?.features?.f2?.desc}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div className="icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>⚖️</div>
              <h3 style={{ fontSize: '1.3rem' }} >{dict?.alianzas?.features?.f3?.title}</h3>
              <p style={{ textAlign: 'center', fontSize: '1rem' }} >{dict?.alianzas?.features?.f3?.desc}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
