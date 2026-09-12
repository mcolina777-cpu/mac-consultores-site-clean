import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = dict?.seo?.blog?.title || (isEs ? 'Blog Jurídico | Mac Consultores' : 'Legal Blog | Mac Consultores');
  const description = dict?.seo?.blog?.description || (isEs 
    ? 'Firma jurídica boutique en Caracas especializada en derecho penal, constitucional y asesoría internacional de alta complejidad.' 
    : 'Boutique law firm in Caracas specializing in highly complex criminal law, constitutional law, and international consulting.');
  
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog`;

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
      title: dict?.seo?.blog?.og_title || title,
      description: dict?.seo?.blog?.og_description || description,
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
      title: dict?.seo?.blog?.og_title || title,
      description: dict?.seo?.blog?.og_description || description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function BlogIndex({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-blog">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{isEs ? 'INICIO / CRITERIO FORENSE' : 'HOME / LEGAL INSIGHTS'}</span>
          <h1 className="mb-1-5rem serif">{isEs ? 'Doctrina, análisis y criterio jurídico' : 'Doctrine, analysis and legal insight'}</h1>
          <p className="hero-subtitle">
            {isEs 
              ? 'Notas sobre Derecho penal económico, Derecho constitucional y proceso penal. Cada publicación aborda un problema jurídico específico y ofrece criterios de análisis para su estudio y discusión profesional.'
              : 'Notes on economic criminal law, constitutional law, and criminal procedure. Each publication addresses a specific legal issue and offers analytical criteria for professional study and discussion.'}
          </p>
        </div>
      </header>

      {/* BLOQUE DE TARJETAS EDITORIALES (GRID-2 SIMÉTRICO: 4 ARTÍCULOS) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="grid-2">
            {/* ARTÍCULO 01 */}
            <Link 
              href={`/${locale}/blog/criminalidad-economica`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{isEs ? 'DERECHO PENAL ECONÓMICO' : 'ECONOMIC CRIMINAL LAW'}</span>
              <h3 className="serif">{isEs ? 'Criminalidad económica y compliance penal' : 'Economic crime and corporate compliance'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {isEs
                  ? 'Las decisiones y operaciones empresariales pueden generar riesgos penales en materias financieras, tributarias, cambiarias, ambientales o de contratación. Esta nota examina la responsabilidad individual de directivos y la función del compliance penal en la prevención y respuesta ante contingencias.'
                  : 'Business decisions and operations may give rise to criminal-law risks in financial, tax, foreign-exchange, environmental, or contracting matters. This note examines individual executive responsibility and the role of criminal compliance in prevention and response to potential issues.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* ARTÍCULO 02 */}
            <Link 
              href={`/${locale}/blog/amparo-garantia-vital`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{isEs ? 'DERECHO CONSTITUCIONAL' : 'CONSTITUTIONAL LAW'}</span>
              <h3 className="serif">{isEs ? 'El amparo constitucional y la protección de derechos' : 'Constitutional amparo and the protection of rights'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {isEs
                  ? 'El amparo constitucional es una vía de protección de derechos cuya procedencia depende de los hechos, del derecho invocado y de la existencia de otros medios judiciales idóneos. Esta nota revisa su alcance, requisitos y límites.'
                  : 'Constitutional amparo is a rights-protection mechanism whose availability depends on the facts, the right invoked, and the existence of other suitable judicial remedies. This note reviews its scope, requirements, and limits.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* ARTÍCULO 03 */}
            <Link 
              href={`/${locale}/blog/regimen-poderes-cpc-copp`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{isEs ? 'TÉCNICA PROCESAL' : 'PROCEDURAL PRACTICE'}</span>
              <h3 className="serif">{isEs ? 'Poderes y representación en los procesos civil y penal' : 'Powers of attorney and representation in civil and criminal proceedings'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {isEs
                  ? 'La representación judicial exige revisar el alcance del mandato, las facultades conferidas y los requisitos aplicables a cada actuación. Esta nota compara aspectos relevantes de la representación en los procesos civil y penal.'
                  : 'Legal representation requires reviewing the scope of authority, the powers granted, and the requirements applicable to each procedural action. This note compares relevant aspects of representation in civil and criminal proceedings.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>

            {/* ARTÍCULO 04 */}
            <Link 
              href={`/${locale}/blog/detencion-in-fraganti-derecho-defensa`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{isEs ? 'DERECHO PROCESAL PENAL' : 'CRIMINAL PROCEDURAL LAW'}</span>
              <h3 className="serif">{isEs ? 'Detención en flagrancia y derecho a la defensa' : 'Arrest in flagrante delicto and the right to defense'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem', width: '100%' }}
              >
                {isEs
                  ? 'La aprehensión en flagrancia no equivale a una declaración de responsabilidad penal. Esta nota examina las garantías aplicables, la defensa desde las primeras actuaciones y los aspectos que pueden revisarse durante el control judicial.'
                  : 'An arrest in flagrante delicto is not a finding of criminal responsibility. This note examines applicable safeguards, access to defense from the earliest stages, and matters that may be reviewed during judicial oversight.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? 'Leer más →' : 'Read more →'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CIERRE INSTITUCIONAL */}
      <section className="bg-soft section-padding-asym">
        <div
          className="container"
          style={{ maxWidth: '840px', margin: '0 auto' }}
        >
          <div
            className="card bg-soft text-center"
            style={{
              padding: '3rem',
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              MAC CONSULTORES JURÍDICOS & ASOCIADOS
            </span>

            <h3
              className="serif mt-1rem mb-1rem"
              style={{ fontSize: '1.4rem' }}
            >
              {isEs
                ? '“El análisis jurídico comienza por comprender los hechos y la norma aplicable.”'
                : '“Legal analysis begins with an understanding of the facts and the applicable law.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Las publicaciones de esta sección tienen fines informativos y académicos. No sustituyen el estudio de los hechos, los riesgos y las vías jurídicas disponibles en cada asunto.'
                : 'The publications in this section are provided for informational and academic purposes. They do not replace an assessment of the facts, risks, and legal options available in a particular matter.'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href={getRoute(locale, 'contact')}
                className="btn btn-primary"
              >
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>

              <Link
                href={getRoute(locale, 'home')}
                className="btn btn-secondary"
              >
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
