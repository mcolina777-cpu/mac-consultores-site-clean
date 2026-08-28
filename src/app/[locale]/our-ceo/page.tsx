import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const title = ((dict as any)?.our_ceo as any)?.meta_title || (isEs ? 'Dr. Marco A. Colina G. | Director General | Mac Consultores' : 'Dr. Marco A. Colina G. | CEO | Mac Consultores');
  const description = ((dict as any)?.our_ceo as any)?.meta_description || '';
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/our-ceo`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/our-ceo`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/our-ceo`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: esUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mac Consultores Jurídicos & Asociados',
      images: [
        {
          url: '/assets/img/OFICINA_2_1.jpeg',
          width: 1200,
          height: 630,
          alt: 'Dr. Marco A. Colina G. - Director General',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/OFICINA_2_1.jpeg'],
    },
  };
}

export default async function OurCeo({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = (dict as any)?.our_ceo as any;
  const isEs = locale === 'es';

  return (
    <main className="page-our-ceo">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb || (isEs ? 'DIRECCIÓN GENERAL' : 'EXECUTIVE LEADERSHIP')}</span>
          <h1 className="mb-1-5rem serif">{data?.name || 'Dr. Marco A. Colina G.'}</h1>
          <p className="hero-subtitle">{data?.title || (isEs ? 'Director General (CEO) & Fundador' : 'Managing Partner (CEO) & Founder')}</p>
        </div>
      </header>

      {/* BLOQUE 1: SEMBLANZA Y FOTOGRAFÍA EJECUTIVA */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{data?.profile?.tag || (isEs ? 'TRAYECTORIA & LIDERAZGO' : 'PROFILE & LEADERSHIP')}</span>
              <h2 className="serif section-title mb-1-5rem">
                {data?.profile?.heading || (isEs ? 'Visión Estratégica y Rigor Jurídico' : 'Strategic Vision and Juridical Rigor')}
              </h2>
              <p className="text-left max-w-100 mb-1rem">
                {data?.profile?.bio_1 || (isEs 
                  ? 'Abogado y docente universitario con más de veinte años de ejercicio profesional ininterrumpido en el foro penal y constitucional. Fundador y Director General de Mac Consultores Jurídicos & Asociados desde el año 2015.'
                  : 'Lawyer and university professor with more than twenty years of continuous professional practice in criminal and constitutional law. Founder and CEO of Mac Consultores Jurídicos & Asociados since 2015.')}
              </p>
              <p className="text-left max-w-100 mb-1-5rem">
                {data?.profile?.bio_2 || (isEs
                  ? 'Su práctica se distingue por la articulación de una sólida formación dogmática con una rigurosa técnica de litigación estratégica en asuntos penales corporativos, consultoría en riesgos de alta complejidad y casación.'
                  : 'His practice combines solid academic background with rigorous strategic litigation in corporate criminal law, high-complexity risk consulting, and supreme court appeals.')}
              </p>
              <p className="text-left max-w-100 mb-2rem">
                {data?.profile?.bio_3 || (isEs
                  ? 'Bajo su conducción, la firma ha consolidado un modelo de asesoría integral con capacidad para atender mandatos judiciales de clientes residenciados tanto en Venezuela como en el ámbito internacional.'
                  : 'Under his leadership, the firm has established a comprehensive legal advisory model capable of handling judicial mandates for clients based in Venezuela and internationally.')}
              </p>

              <div className="mt-1-5rem">
                <Link
                  href={getRoute(locale, 'contact')}
                  className="btn btn-primary"
                >
                  {isEs ? 'SOLICITAR CONSULTA ESTRATÉGICA' : 'REQUEST STRATEGIC CONSULTATION'}
                </Link>
              </div>
            </div>

            <div className="img-reveal img-vertical">
              <picture>
                <img
                  src="/assets/img/OFICINA_2_1.jpeg"
                  alt="Dr. Marco A. Colina G. - Director General de Mac Consultores"
                  width={1536}
                  height={2048}
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: PILARES DE AUTORIDAD Y CREDENCIALES FORENSES (REDISEÑO APPLE PREMIUM) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{isEs ? 'SOLVENCIA TÉCNICA' : 'TECHNICAL RIGOR'}</span>
            <h2 className="serif section-title mt-1rem">
              {isEs ? 'Pilares de Práctica y Trayectoria' : 'Pillars of Practice and Trajectory'}
            </h2>
          </div>

          <div className="grid-3">
            {/* Pilar 1 */}
            <div className="card">
              <span className="serif" style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', lineHeight: 1 }}>
                +20
              </span>
              <h3 className="serif mb-0-75rem" style={{ fontSize: '1.25rem' }}>
                {isEs ? 'Años de Ejercicio Forense' : 'Years of Legal Practice'}
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                {isEs
                  ? 'Litigación estratégica y dirección procesal ininterrumpida ante tribunales de instancia, cortes superiores y jurisdicción especializada.'
                  : 'Strategic litigation and uninterrupted procedural leadership before trial courts, appellate courts, and specialized jurisdictions.'}
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="card">
              <span className="serif" style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', lineHeight: 1 }}>
                IV
              </span>
              <h3 className="serif mb-0-75rem" style={{ fontSize: '1.25rem' }}>
                {isEs ? 'Nivel Académico & Docencia' : 'Postgraduate Degree & Teaching'}
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                {isEs
                  ? 'Estudios de cuarto nivel en Derecho Constitucional y Ciencias Penales y Criminológicas, complementados con una destacada labor en la formación universitaria.'
                  : 'Advanced studies in Constitutional and Criminal Law, complemented by extensive university teaching and academic scholarship.'}
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="card">
              <span className="serif" style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', lineHeight: 1 }}>
                TSJ
              </span>
              <h3 className="serif mb-0-75rem" style={{ fontSize: '1.25rem' }}>
                {isEs ? 'Casación y Tutela Constitucional' : 'Supreme Court & Constitutional Law'}
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                {isEs
                  ? 'Interposición y sustanciación de recursos extraordinarios de casación penal y acciones de amparo para la protección efectiva de garantías fundamentales.'
                  : 'Filing and substantiation of extraordinary appeals before the Supreme Tribunal of Justice and constitutional protection mechanisms.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: DECLARACIÓN DE PRINCIPIOS Y COMPROMISO ÉTICO */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <img
                  src="/assets/img/OFICINA_3_1.jpeg"
                  alt="Despacho del Director General de Mac Consultores"
                  width={2752}
                  height={1536}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="vision-text">
              <span className="section-tag">{isEs ? 'CRITERIO DIRECTIVO' : 'EXECUTIVE APPROACH'}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {isEs
                  ? '“No formulamos promesas de resultados; garantizamos rigor técnico, método y lealtad profesional.”'
                  : '“We do not make outcome promises; we guarantee technical rigor, structured methodology, and professional loyalty.”'}
              </h2>
              <p className="mb-2rem text-left max-w-100">
                {isEs
                  ? 'La defensa de los intereses corporativos y personales de nuestros patrocinados exige un análisis desprovisto de ligerezas. Cada planteamiento jurídico es sometido a un control previo de viabilidad dogmática y probatoria para asegurar la máxima solidez en estrados.'
                  : 'The defense of our clients’ corporate and individual interests requires rigorous analysis. Every legal theory undergoes strict doctrinal and evidentiary viability checks to ensure strength before the courts.'}
              </p>
              <Link
                href={getRoute(locale, 'quienesSomosDetalle')}
                className="btn btn-outline"
              >
                {isEs ? 'CONOCER LA FIRMA' : 'ABOUT THE FIRM'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
