import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = (dict as Record<string, any>)?.our_ceo;
  const title = data?.meta_title || (isEs ? 'Dr. Marco A. Colina G. | Director General | Mac Consultores' : 'Dr. Marco A. Colina G. | CEO | Mac Consultores');
  const description = data?.meta_description || '';
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
  const data = (dict as Record<string, any>)?.our_ceo;
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

      {/* BLOQUE 1: SEMBLANZA Y FOTOGRAFÍA EJECUTIVA VERTICAL */}
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
            </div>
            <div className="img-reveal img-vertical">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_2_1.webp" type="image/webp" />
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

      {/* BLOQUE 2: PILARES DE AUTORIDAD Y CREDENCIALES FORENSES (CLICABLES) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          {/* Encabezado centrado */}
          <div className="mt-2rem mb-3rem text-center">
            <span className="section-tag">{isEs ? 'SOLVENCIA TÉCNICA' : 'TECHNICAL RIGOR'}</span>
            <h2 className="serif section-title mt-1rem">
              {isEs ? 'Pilares de Práctica y Trayectoria' : 'Pillars of Practice and Trajectory'}
            </h2>
          </div>

          {/* Grid de 3 Tarjetas Interactivas con numeración 01, 02, 03 */}
          <div className="grid-3 mb-3rem">
            {/* TARJETA 01 */}
            <Link 
              href={getRoute(locale, 'contact')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">01</span>
              <h3 className="serif">{isEs ? 'Años de Ejercicio Forense' : 'Years of Legal Practice'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {isEs
                  ? 'Más de dos décadas de ejercicio profesional ininterrumpido respaldan una práctica forense caracterizada por la dirección técnica, estratégica y procesal en litigios de alta complejidad. La intervención en estrados abarca desde tribunales de instancia hasta cortes superiores, garantizando la articulación oportuna de medios probatorios, el control estricto de términos y una representación judicial rigurosa en cada etapa del proceso.'
                  : 'Over two decades of uninterrupted professional practice support a forensic approach characterized by strategic and procedural direction in high-complexity litigation. Representation before trial and appellate courts ensures the timely presentation of evidence, rigorous management of procedural deadlines, and meticulous defense standards designed to safeguard our clients’ legal standing throughout every stage of judicial proceedings.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? "Leer más →" : "Read more →"}
              </span>
            </Link>

            {/* TARJETA 02 */}
            <Link 
              href={getRoute(locale, 'contact')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">02</span>
              <h3 className="serif">{isEs ? 'Nivel Académico & Docencia' : 'Postgraduate Degree & Teaching'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {isEs
                  ? 'La sólida formación dogmática constituye el pilar fundamental para el abordaje de controversias sustantivas y procesales complejas. Con estudios superiores de cuarto nivel en Derecho Constitucional y Ciencias Penales, complementados por una sostenida trayectoria docente universitaria, el análisis jurídico trasciende la mera aplicación formal de la norma, integrando criterios doctrinales y jurisprudenciales avanzados al diseño de cada estrategia defensiva.'
                  : 'Advanced legal education provides the essential foundation for addressing complex substantive and procedural disputes. Holding postgraduate credentials in Constitutional and Criminal Law, complemented by dedicated university teaching experience, our legal analysis integrates advanced doctrinal and jurisprudence criteria, delivering high-level technical frameworks tailored to the specific evidentiary and regulatory realities of each case.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? "Leer más →" : "Read more →"}
              </span>
            </Link>

            {/* TARJETA 03 */}
            <Link 
              href={getRoute(locale, 'contact')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">03</span>
              <h3 className="serif">{isEs ? 'Casación y Tutela Constitucional' : 'Supreme Court & Constitutional Law'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {isEs
                  ? 'Especialización forense orientada a la interposición, formalización y sustanciación de recursos extraordinarios de casación ante el Tribunal Supremo de Justicia, así como acciones de tutela constitucional. La labor técnica se enfoca en denunciar vicios de juzgamiento, quebrantamientos de formas sustanciales y violaciones a garantías procesales, restableciendo el orden jurídico y resguardando los derechos fundamentales del justiciable.'
                  : 'Highly specialized practice focused on drafting, filing, and substantiating extraordinary appeals before the Supreme Tribunal of Justice, alongside constitutional protection remedies. Technical advocacy concentrates on identifying jurisdictional errors, procedural breaches, and due process infringements, actively securing judicial review and upholding the fundamental constitutional guarantees required to protect our clients against arbitrary or flawed rulings.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? "Leer más →" : "Read more →"}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: DECLARACIÓN INSTITUCIONAL Y BOTÓN ÚNICO DE CONTACTO */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_3_1.webp" type="image/webp" />
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
                href={getRoute(locale, 'contact')}
                className="btn btn-primary"
              >
                {isEs ? 'SOLICITAR CONSULTA ESTRATÉGICA' : 'REQUEST STRATEGIC CONSULTATION'}
              </Link>
            </div>
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
                ? '“Una firma construida sobre rigor técnico, lealtad profesional y estrategia jurídica para asuntos de alta complejidad.”'
                : '“A firm built on technical rigor, professional loyalty, and legal strategy for high-complexity matters.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Conozca nuestro enfoque institucional y contacte a la firma para evaluar asuntos que requieran criterio jurídico especializado en Venezuela.'
                : 'Learn about our institutional approach and contact the firm to assess matters requiring specialized legal judgment in Venezuela.'}
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
