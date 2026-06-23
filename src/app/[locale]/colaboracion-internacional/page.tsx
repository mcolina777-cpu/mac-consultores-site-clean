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
          <span className="section-tag" >{dict?.alianzas?.breadcrumb || "Servicios / B2B"}</span>
          <h1 style={{ marginBottom: '1.5rem' }} >{dict?.alianzas?.h1 || "Colaboración con Firmas Internacionales"}</h1>
          <p className="hero-subtitle" >{dict?.alianzas?.subtitle || "Soporte local de excelencia para despachos en el extranjero."}</p>
        </div>
      </header>

      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <p style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '2rem' }} >{dict?.alianzas?.intro_p1 || "Mac Consultores Jurídicos &amp; Asociados actúa como aliado estratégico local para firmas de abogados internacionales que requieren ejecutar diligencias, auditorías o litigios en jurisdicción venezolana. Entendemos el estándar de servicio exigido por despachos en Estados Unidos, Europa y América Latina, y nos adaptamos a sus metodologías de reporte y compliance."}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_DE_ALIANZAS_ESTRATEGICAS.webp" type="image/webp" />
                <img src="/assets/img/SALA_DE_ALIANZAS_ESTRATEGICAS.jpg" alt="Colaboración Internacional" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>

          <h3 className="serif section-title" style={{ marginTop: '4rem', fontSize: '2.2rem' }} >{dict?.alianzas?.areas?.title || "Áreas de Alianza para Firmas Internacionales"}</h3>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="card">
              <h3 >{dict?.alianzas?.areas?.c1?.title || "Auditoría y Due Diligence"}</h3>
              <p >{dict?.alianzas?.areas?.c1?.desc || "Levantamiento de información registral, corporativa y judicial en Venezuela para procesos de fusión, adquisición o verificación de compliance liderados desde el exterior."}</p>
              <Link href="#auditoria-due-diligence" className="card-link" style={{ marginTop: '1rem', display: 'inline-block' }}>{dict?.alianzas?.read_more || 'LEER MÁS →'}</Link>
            </div>
            <div className="card">
              <h3 >{dict?.alianzas?.areas?.c2?.title || "Ejecución de Exhortos y Cartas Rogatorias"}</h3>
              <p >{dict?.alianzas?.areas?.c2?.desc || "Tramitación ágil ante tribunales venezolanos de requerimientos judiciales internacionales, notificaciones, obtención de pruebas y medidas cautelares."}</p>
              <Link href="#ejecucion-exhortos" className="card-link" style={{ marginTop: '1rem', display: 'inline-block' }}>{dict?.alianzas?.read_more || 'LEER MÁS →'}</Link>
            </div>
            <div className="card">
              <h3 >{dict?.alianzas?.areas?.c3?.title || "Opiniones Legales (Legal Opinions)"}</h3>
              <p >{dict?.alianzas?.areas?.c3?.desc || "Elaboración de dictámenes sobre derecho venezolano para ser presentados ante cortes extranjeras o arbitrajes internacionales."}</p>
              <Link href="#opiniones-legales" className="card-link" style={{ marginTop: '1rem', display: 'inline-block' }}>{dict?.alianzas?.read_more || 'LEER MÁS →'}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="grid-split" style={{ marginBottom: '4rem' }}>
            <div className="about-text">
              <span className="section-tag" >{dict?.alianzas?.proposal?.tag || "Nuestra Propuesta"}</span>
              <h2 className="serif section-title" style={{ marginBottom: '1.5rem' }} >{dict?.alianzas?.proposal?.title || "Soporte Local, Estándar Global"}</h2>
              <p >{dict?.alianzas?.proposal?.desc || "Garantizamos una comunicación fluida, reportes periódicos en formatos estandarizados y una estricta política de no competencia para salvaguardar la relación entre la firma extranjera y su cliente."}</p>
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
              <h3 style={{ fontSize: '1.3rem' }} >{dict?.alianzas?.features?.f1?.title || "Corresponsalía Jurídica"}</h3>
              <p style={{ textAlign: 'center', fontSize: '1rem' }} >{dict?.alianzas?.features?.f1?.desc || "Gestión integral de litigios en Venezuela bajo la dirección o en coordinación con la firma principal extranjera."}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div className="icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>🔍</div>
              <h3 style={{ fontSize: '1.3rem' }} >{dict?.alianzas?.features?.f2?.title || "Due Diligence Legal"}</h3>
              <p style={{ textAlign: 'center', fontSize: '1rem' }} >{dict?.alianzas?.features?.f2?.desc || "Investigación corporativa, inmobiliaria y judicial exhaustiva y adaptada a requerimientos foráneos."}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div className="icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>⚖️</div>
              <h3 style={{ fontSize: '1.3rem' }} >{dict?.alianzas?.features?.f3?.title || "Opiniones Legales"}</h3>
              <p style={{ textAlign: 'center', fontSize: '1rem' }} >{dict?.alianzas?.features?.f3?.desc || "Dictámenes técnicos y precisos sobre la aplicación del derecho venezolano en operaciones cross-border."}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
