import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = isEs 
    ? 'Reglamento del Programa Pro Bono | Mac Consultores Jurídicos' 
    : 'Pro Bono Program Regulations | Mac Consultores Jurídicos';
  const description = isEs
    ? 'Condiciones de funcionamiento, admisión, evaluación y alcance del Programa Pro Bono de Mac Consultores Jurídicos & Asociados.'
    : 'Operating conditions, admission, evaluation, and scope of the Pro Bono Program at Mac Consultores Jurídicos & Asociados.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://macconsultoresjuridicos.com/${locale}/probono-penal/reglamento`,
    },
  };
}

export default async function ReglamentoProBono({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.reglamento_pro_bono;

  return (
    <main className="page-reglamento-probono">
      {/* Header Institucional */}
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/probono-penal`}>
              {data?.breadcrumb_parent || "Programa Pro Bono"}
            </Link>{" "}
            / {data?.breadcrumb_current || "Reglamento"}
          </span>
          <h1 className="serif">{data?.h1}</h1>
          <p className="hero-subtitle text-muted mt-1rem">{data?.subtitle}</p>
        </div>
      </header>

      {/* Cuerpo Editorial del Reglamento */}
      <section className="section-padding">
        <div className="container">
          <div className="layout-reading">
            
            {/* Introducción Institucional */}
            <div className="editorial-block mb-3rem">
              <h2 className="serif heading-lg text-primary mb-1rem">{data?.intro_title}</h2>
              <p className="mb-1-5rem text-justify">{data?.intro_p1}</p>
              <p className="mb-1-5rem text-justify">{data?.intro_p2}</p>
              <p className="mb-1-5rem text-justify">{data?.intro_p3}</p>
            </div>

            {/* Función Social */}
            <div className="editorial-block mb-3rem">
              <h3 className="serif heading-md text-primary mb-1rem">{data?.social_title}</h3>
              <p className="mb-1-5rem text-justify">{data?.social_desc}</p>
              <ul className="editorial-list mb-1-5rem">
                {data?.social_items?.map((item: string, idx: number) => (
                  <li key={idx} className="mb-0-5rem">{item}</li>
                ))}
              </ul>
            </div>

            {/* Principios */}
            <div className="editorial-block mb-3rem">
              <h3 className="serif heading-md text-primary mb-1-5rem">{data?.principles_title}</h3>
              {data?.principles?.map((p: { title: string; desc: string }, idx: number) => (
                <div key={idx} className="mb-1-5rem">
                  <h4 className="font-semibold text-primary mb-0-25rem">{p.title}</h4>
                  <p className="text-justify">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Alcance, Límites y Exclusiones */}
            <div className="editorial-block mb-3rem">
              <h3 className="serif heading-md text-primary mb-1rem">{data?.limits_title}</h3>
              <p className="mb-1-5rem text-justify">{data?.limits_p1}</p>
              
              <div className="callout-box bg-soft p-2rem rounded-8 mb-2rem border-left-accent">
                <h4 className="font-bold text-primary mb-0-5rem">{data?.no_litigation_title}</h4>
                <p className="mb-1rem">{data?.no_litigation_desc}</p>
                <p className="text-sm font-semibold">{data?.denuncias_limit}</p>
              </div>
            </div>

            <hr className="divider-subtle my-3rem" />



            {/* Procedimiento de 4 Etapas */}
            <div className="editorial-block bg-soft p-2-5rem rounded-8 mb-4rem">
              <h3 className="serif heading-md text-primary text-center mb-2rem">{data?.procedure_title}</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem'
                }}
              >
                {data?.procedure_steps?.map((step: { step: string; title: string; desc: string }, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white rounded-6 border-subtle"
                    style={{
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <span className="section-tag" style={{ marginBottom: '1rem' }}>{step.step}</span>
                    <h5
                      className="font-bold text-primary"
                      style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.2rem', lineHeight: 1.4 }}
                    >
                      {step.title}
                    </h5>
                    <p
                      className="text-muted"
                      style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}
                    >
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>



            {/* Cierre Institucional y Enlace de Retorno */}
            <div className="text-center mt-4rem mb-2rem">
              <p className="serif heading-md text-primary font-semibold mb-1rem">
                {data?.closing_quote}
              </p>
              <p className="text-sm text-muted mb-2rem">
                MAC CONSULTORES JURÍDICOS & ASOCIADOS
              </p>
              <Link 
                href={`/${locale}/probono-penal`}
                className="btn btn-primary"
              >
                {data?.back_btn}
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
