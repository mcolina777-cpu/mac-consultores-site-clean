import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.seo?.tramites_consulares?.title,
  };
}

export default async function TramitesConsulares({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';

  return (
    <main className="page-tramites-consulares">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag" >{dict?.tramites_consulares?.breadcrumb}</span>
          <h1 className="mb-1-5rem">{dict?.tramites_consulares?.h1}</h1>
          <p className="hero-subtitle" >{dict?.tramites_consulares?.subtitle}</p>
        </div>
      </header>

      <section className="intro-section section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <p className="text-left max-w-100 mb-0">{dict?.tramites_consulares?.intro_p}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_REUNIONES_1_OPT.webp" type="image/webp" />
                <img src="/assets/img/SALA_REUNIONES_1_OPT.jpg" alt="Sala de Reuniones Internacionales en Mac Consultores" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="section-header text-left mb-4rem">
            <span className="section-tag" >{dict?.tramites_consulares?.support?.tag}</span>
            <h2 className="section-title heading-xl mb-0-5rem">{dict?.tramites_consulares?.support?.title}</h2>
          </div>
          <div className="grid-3">
            {/* T1: Práctica Consular */}
            <Link href={getRoute(locale, "consular.practica_consular")} className="card">
              <span className="section-tag">{dict?.tramites_consulares?.support?.card_1?.tag || "01"}</span>
              <h3>{dict?.tramites_consulares?.support?.card_1?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.support?.card_1?.desc}
              </p>
              <span className="card-link">
                {dict?.tramites_consulares?.support?.card_1?.link || "VER DETALLES →"}
              </span>
            </Link>
            
            {/* T2: Gestión Jurídico-Documental */}
            <Link href={getRoute(locale, "consular.gestion_documental")} className="card block-link">
              <span className="section-tag">{dict?.tramites_consulares?.support?.card_2?.tag || "02"}</span>
              <h3>{dict?.tramites_consulares?.support?.card_2?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.support?.card_2?.desc}
              </p>
              <span className="card-link">{dict?.tramites_consulares?.support?.card_2?.link || "VER DETALLES →"}</span>
            </Link>
            
            {/* T3: Contratos y Negocios Internacionales */}
            <Link href={getRoute(locale, "consular.contratos_internacionales")} className="card block-link">
              <span className="section-tag">{dict?.tramites_consulares?.support?.card_3?.tag || "03"}</span>
              <h3>{dict?.tramites_consulares?.support?.card_3?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.support?.card_3?.desc}
              </p>
              <span className="card-link">{dict?.tramites_consulares?.support?.card_3?.link || "VER DETALLES →"}</span>
            </Link>
            
            {/* T4: Materia Energética */}
            <Link href={getRoute(locale, "consular.materia_energetica")} className="card block-link">
              <span className="section-tag">{dict?.tramites_consulares?.support?.card_4?.tag || "04"}</span>
              <h3>{dict?.tramites_consulares?.support?.card_4?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.support?.card_4?.desc}
              </p>
              <span className="card-link">{dict?.tramites_consulares?.support?.card_4?.link || "VER DETALLES →"}</span>
            </Link>
            
            {/* T5: Representación Judicial */}
            <Link href={getRoute(locale, "consular.representacion_judicial")} className="card block-link">
              <span className="section-tag">{dict?.tramites_consulares?.support?.card_5?.tag || "05"}</span>
              <h3>{dict?.tramites_consulares?.support?.card_5?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.support?.card_5?.desc}
              </p>
              <span className="card-link">{dict?.tramites_consulares?.support?.card_5?.link || "VER DETALLES →"}</span>
            </Link>
            
            {/* T6: Poderes y Mandatos Estratégicos */}
            <Link href={getRoute(locale, "consular.poderes_y_mandatos")} className="card block-link">
              <span className="section-tag">{dict?.tramites_consulares?.support?.card_6?.tag || "06"}</span>
              <h3>{dict?.tramites_consulares?.support?.card_6?.title}</h3>
              <p className="card-editorial-text">
                {dict?.tramites_consulares?.support?.card_6?.desc}
              </p>
              <span className="card-link">{dict?.tramites_consulares?.support?.card_6?.link || "VER DETALLES →"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CIERRE INSTITUCIONAL */}
      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {isEs
                ? 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'
                : 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La asistencia jurídica en Venezuela exige claridad, diligencia profesional y una comprensión precisa del entorno local.”'
                : '“Legal assistance in Venezuela requires clarity, professional diligence, and a precise understanding of the local environment.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Acompañamos a ciudadanos, empresas y organizaciones en la evaluación de asuntos consulares y requerimientos jurídicos vinculados con Venezuela.'
                : 'We assist individuals, companies, and organizations in assessing consular matters and legal requirements connected to Venezuela.'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>
              <Link href={getRoute(locale, 'home')} className="btn btn-secondary">
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
