import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = (dict as Record<string, any>)?.our_ceo;
  const title = data?.meta_title || (isEs ? 'Dr. Marco A. Colina G. | Director General | Mac Consultores Jurídicos & Asociados' : 'Dr. Marco A. Colina G. | Managing Director | Mac Consultores Jurídicos & Asociados');
  const description = data?.meta_description || (isEs
    ? 'Perfil profesional y trayectoria del Dr. Marco A. Colina G., fundador y Director General de Mac Consultores Jurídicos & Asociados. Litigio penal y constitucional en Venezuela.'
    : 'Professional profile and legal trajectory of Dr. Marco A. Colina G., founder and Managing Director of Mac Consultores Jurídicos & Asociados. Criminal and constitutional litigation in Venezuela.');
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
          <p className="hero-subtitle">{data?.title || (isEs ? 'Director General (CEO) & Fundador' : 'Founder & Managing Director (CEO)')}</p>
        </div>
      </header>

      {/* BLOQUE 1: SEMBLANZA Y FOTOGRAFÍA EJECUTIVA VERTICAL */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{data?.profile?.tag || (isEs ? 'TRAYECTORIA & LIDERAZGO' : 'PROFILE & LEADERSHIP')}</span>
              <h2 className="serif section-title mb-1-5rem">
                {data?.profile?.heading || (isEs ? 'Visión Estratégica y Rigor Jurídico' : 'Strategic Vision and Legal Rigor')}
              </h2>
              <p className="text-left max-w-100 mb-1rem">
                {data?.profile?.bio_1 || (isEs 
                  ? 'Abogado litigante y docente universitario con más de dos décadas de ejercicio profesional ininterrumpido en el foro penal y constitucional. Fundador y Director General de Mac Consultores Jurídicos & Asociados.'
                  : 'Trial attorney and university professor with over two decades of continuous forensic practice in criminal and constitutional law. Founder and Managing Director of Mac Consultores Jurídicos & Asociados.')}
              </p>
              <p className="text-left max-w-100 mb-1-5rem">
                {data?.profile?.bio_2 || (isEs
                  ? 'Su práctica articula una sólida formación dogmática con la dirección estratégica en litigios complejos, consultoría corporativa y casación ante el Tribunal Supremo de Justicia.'
                  : 'His practice combines rigorous doctrinal foundations with strategic direction in complex litigation, corporate consulting, and cassation before the Supreme Tribunal of Justice.')}
              </p>
              <p className="text-left max-w-100 mb-2rem">
                {data?.profile?.bio_3 || (isEs
                  ? 'Conduce la firma bajo un modelo de asesoría integral y representación judicial rigurosa para clientes con intereses jurídicos y empresariales en Venezuela y en el exterior.'
                  : 'He leads the firm under a model of comprehensive legal advisory and rigorous judicial representation for clients with legal and business interests in Venezuela and abroad.')}
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
              href={getRoute(locale, 'ourCeo.ejercicio_forense')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">01</span>
              <h3 className="serif">{isEs ? 'Años de Ejercicio Forense' : 'Years of Forensic Practice'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {isEs
                  ? 'Más de dos décadas de práctica ininterrumpida respaldan una dirección procesal rigurosa en litigios penales y constitucionales de alta complejidad, desde tribunales de instancia hasta cortes superiores.'
                  : 'Over two decades of uninterrupted practice support rigorous procedural direction in high-complexity criminal and constitutional litigation, from trial courts to higher appellate jurisdictions.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? 'Conocer trayectoria forense →' : 'View forensic practice →'}
              </span>
            </Link>

            {/* TARJETA 02 */}
            <Link 
              href={getRoute(locale, 'ourCeo.nivel_academico')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">02</span>
              <h3 className="serif">{isEs ? 'Nivel Académico & Docencia' : 'Academic Credentials & Teaching'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {isEs
                  ? 'Estudios superiores de cuarto nivel en Derecho Constitucional y Ciencias Penales y Criminológicas, complementados por una sostenida trayectoria docente universitaria e investigación dogmática avanzada.'
                  : 'Postgraduate credentials in Constitutional Law and Criminal and Criminological Sciences, complemented by dedicated university lecturing and advanced legal scholarship.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? 'Conocer formación académica →' : 'View academic credentials →'}
              </span>
            </Link>

            {/* TARJETA 03 */}
            <Link 
              href={getRoute(locale, 'ourCeo.casacion_tutela')}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">03</span>
              <h3 className="serif">{isEs ? 'Casación y Tutela Constitucional' : 'Cassation & Constitutional Protection'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {isEs
                  ? 'Especialización técnica en la formalización y sustanciación de recursos extraordinarios de casación ante el TSJ y acciones de amparo, orientadas a la tutela efectiva del debido proceso y las garantías fundamentales.'
                  : 'Specialized technical advocacy in drafting and substantiating extraordinary cassation appeals before the Supreme Court and constitutional protection actions, aimed at safeguarding due process and fundamental rights.'}
              </p>
              <span className="card-link mt-auto">
                {isEs ? 'Conocer litigio superior →' : 'View appellate practice →'}
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
                ? '“La dirección de cada asunto exige criterio, método y una comprensión rigurosa de los riesgos jurídicos involucrados.”'
                : '“The direction of every matter requires judgment, method, and a rigorous understanding of the legal risks involved.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Conozca el enfoque directivo que articula experiencia forense, formación académica y estrategia jurídica en litigios de alta complejidad.'
                : 'Learn about the executive approach that combines forensic experience, academic background, and legal strategy in complex litigation.'}
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

              <Link href={getRoute(locale, 'about')} className="btn btn-secondary">
                {isEs ? '← VOLVER A LA FIRMA' : '← BACK TO THE FIRM'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
