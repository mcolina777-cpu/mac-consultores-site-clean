import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = (dict as any)?.quienes_somos;
  const title = data?.meta_title || (isEs ? 'Quiénes Somos | Mac Consultores Jurídicos & Asociados' : 'About Us | Mac Consultores Jurídicos & Asociados');
  const description = data?.meta_description || '';
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/about`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/about`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/about`;

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

export default async function QuienesSomos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = (dict as any)?.quienes_somos;
  const isEs = locale === 'es';

  return (
    <main className="page-quienes-somos">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb || (isEs ? 'INICIO / LA FIRMA' : 'HOME / THE FIRM')}</span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Arquitectura jurídica para desafíos de alta complejidad' : 'Legal Architecture for High-Complexity Challenges'}
          </h1>
          <p className="hero-subtitle">
            {isEs ? 'Rigor, lealtad y estrategia al servicio de sus intereses' : 'Rigor, loyalty, and strategy serving your interests'}
          </p>
        </div>
      </header>

      {/* BLOQUE 1: NUESTRA HISTORIA Y TRAYECTORIA COMPLETA */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{isEs ? 'NUESTRA HISTORIA' : 'OUR HISTORY'}</span>
              <h2 className="serif section-title mb-1-5rem">
                {isEs ? 'Fundación y Vocación Forense' : 'Foundation and Forensic Vocation'}
              </h2>
              <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.7 }}>
                {data?.history?.p1 || "Mac Consultores Jurídicos & Asociados es una firma boutique especializada en servicios jurídicos de alta complejidad, con sede en la ciudad de Caracas, Venezuela, fundada en el año 2015 por el abogado y docente universitario Marco A. Colina G."}
              </p>
              <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.7 }}>
                {data?.history?.p2 || "Desde su fundación, la firma se concibió como un punto de encuentro entre la formación académica y la práctica profesional del Derecho. Su socio fundador acredita más de veinte años de ejercicio profesional ininterrumpido, complementados con estudios de cuarto nivel en Derecho Constitucional y Ciencias Penales y Jurídicas."}
              </p>
              <p className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.7 }}>
                {data?.history?.p3 || "Bajo su dirección general, Mac Consultores ha construido un modelo de asesoría jurídica integral dirigido tanto a personas naturales como jurídicas, con capacidad para atender mandatos de clientes dentro y fuera de Venezuela."}
              </p>
              <p className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.7 }}>
                {data?.history?.p4 || "Actualmente, el Dr. Marco A. Colina G. ejerce la función de Director General (CEO), siendo responsable de la conducción estratégica, administrativa y operativa de la firma."}
              </p>
            </div>
            
            <div className="img-reveal img-vertical">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1_1.webp" type="image/webp" />
                <img
                  src="/assets/img/OFICINA_1_1.jpeg"
                  alt="Sede de Mac Consultores Jurídicos & Asociados"
                  width={1536}
                  height={2752}
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: MISIÓN Y LOS 4 PRINCIPIOS RECTORES (DISEÑO EDITORIAL TIPOGRÁFICO) */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3-5rem">
            <span className="section-tag">{isEs ? 'DEONTOLOGÍA & VALORES' : 'DEONTOLOGY & VALUES'}</span>
            <h2 className="serif section-title mt-1rem">{isEs ? 'Misión y Principios Fundacionales' : 'Mission and Foundational Principles'}</h2>
            <p className="max-w-800 mx-auto mt-1-5rem serif" style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--color-primary)' }}>
              “{isEs 
                ? 'Nuestra misión es transformar los desafíos legales de nuestros clientes en escenarios de seguridad jurídica y crecimiento, mediante soluciones estratégicas, técnicamente sólidas y desarrolladas con absoluto apego a la ética profesional.' 
                : 'Our mission is to transform our clients’ legal challenges into scenarios of legal certainty and growth, through strategic, technically sound solutions developed with absolute adherence to professional ethics.'}”
            </p>
          </div>

          <div className="grid-2">
            {/* Tarjeta 01 */}
            <Link href={getRoute(locale, "about.legalidad_diligencia" as any)} className="card">
              <span className="section-tag">01</span>
              <h3>{isEs ? 'Legalidad y Diligencia' : 'Legality & Due Diligence'}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {isEs 
                  ? 'Constituye el fundamento inquebrantable de nuestra práctica forense, asegurando el sometimiento estricto al ordenamiento constitucional y a la legalidad vigente en cada etapa procesal. Desde el contacto inicial, evaluamos con riguroso celo técnico la viabilidad del caso, el control estricto de los términos procesales y las expectativas reales del mandante, estructurando defensas y mandatos que descansan invariablemente en la legitimidad de los medios jurídicos empleados.'
                  : 'Constitutes the unwavering foundation of our forensic practice, ensuring strict adherence to the constitutional order and current legal framework throughout every procedural stage. From the initial consultation, we assess case feasibility, strict management of procedural deadlines, and realistic client expectations with rigorous technical diligence, structuring defenses and mandates grounded strictly in the legitimacy of legal means.'}
              </p>
              <span className="card-link">{isEs ? 'VER DETALLES →' : 'VIEW DETAILS →'}</span>
            </Link>

            {/* Tarjeta 02 */}
            <Link href={getRoute(locale, "about.independencia_tecnica" as any)} className="card">
              <span className="section-tag">02</span>
              <h3>{isEs ? 'Independencia Técnica' : 'Technical Independence'}</h3>
              <p className="card-editorial-text" style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}>
                {isEs 
                  ? 'Garantiza un criterio jurídico objetivo, riguroso e innegociable, libre de presiones o conveniencias ajenas al análisis técnico del caso. Evaluamos la realidad fáctica y probatoria con plena autonomía funcional, comunicando con honestidad tanto fortalezas como riesgos, para proporcionar el juicio profesional certero e indispensable que permite al cliente tomar decisiones estratégicas debidamente informadas.'
                  : 'Guarantees an objective, rigorous, and non-negotiable legal criterion, free from external pressures or convenience outside strict technical analysis. We evaluate factual and evidentiary realities with complete functional autonomy, honestly communicating strengths and risks to provide the indispensable professional judgment required for clients to make thoroughly informed strategic and procedural decisions.'}
              </p>
              <span className="card-link">{isEs ? 'VER DETALLES →' : 'VIEW DETAILS →'}</span>
            </Link>

            {/* Tarjeta 03 */}
            <Link 
              href={getRoute(locale, "about.transparencia_buena_fe" as any)} 
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">03</span>
              <h3>{isEs ? 'Transparencia y Buena Fe' : 'Transparency & Good Faith'}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {isEs 
                  ? "La confianza jurídica se construye sobre información clara, delimitación del encargo y honestidad recíproca. Exige comunicar con objetividad los riesgos reales del asunto, evitar promesas infundadas de resultados y definir con total precisión los honorarios y el alcance de la intervención. Asimismo, requiere una conducta leal y colaborativa de ambas partes, garantizando una relación profesional transparente, coherente y plenamente verificable."
                  : "Legal trust is built upon clear information, defined scope, and reciprocal honesty. It requires objectively communicating real risks, avoiding unfounded promises of results, and precisely defining fee structures and the scope of intervention. Furthermore, it demands loyal and collaborative conduct from both parties, ensuring a transparent, consistent, and fully verifiable professional relationship."}
              </p>
              <span className="card-link mt-auto">
                {isEs ? "Leer más →" : "Read more →"}
              </span>
            </Link>

            {/* Tarjeta 04 */}
            <div className="card">
              <span className="section-tag">04</span>
              <h3>{isEs ? 'Confidencialidad y Secreto' : 'Confidentiality & Secrecy'}</h3>
              <p>
                {isEs 
                  ? 'Compromiso absoluto en el tratamiento y custodia de la información.' 
                  : 'Absolute commitment to the protection of confidential information.'}
              </p>
              <ul className="service-list">
                <li>{isEs ? 'Deber deontológico de sigilo profesional' : 'Deontological duty of professional secrecy'}</li>
                <li>{isEs ? 'Custodia segura de expedientes y documentos' : 'Secure custody of case files and documents'}</li>
                <li>{isEs ? 'Protección estricta de datos confidenciales' : 'Strict protection of confidential data'}</li>
                <li>{isEs ? 'Privacidad en todas las consultas y trámites' : 'Privacy in all consultations and procedures'}</li>
                <li>{isEs ? 'Garantía de reserva legal permanente' : 'Permanent guarantee of legal privilege'}</li>
                <li>{isEs ? 'Entorno confiable para la toma de decisiones' : 'Trusted environment for decision making'}</li>
              </ul>
              <span className="card-link">{isEs ? 'VER DETALLES →' : 'VIEW DETAILS →'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: PROPÓSITO INSTITUCIONAL Y LIDERAZGO FORENSE */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <img
                  src="/assets/img/OFICINA-4-SIN-ICONO.jpeg"
                  alt="Oficina ejecutiva de Mac Consultores Jurídicos & Asociados"
                  width={2752}
                  height={1536}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="vision-text">
              <span className="section-tag">{isEs ? "LIDERAZGO FORENSE" : "FORENSIC LEADERSHIP"}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {data?.mission?.quote || (isEs ? '“Nuestra misión es transformar desafíos legales en escenarios de seguridad y crecimiento.”' : '“Our mission is to transform legal challenges into security and growth.”')}
              </h2>
              <p className="mb-2rem text-left max-w-100">
                {data?.mission?.desc}
              </p>
              <Link
                href={getRoute(locale, 'ourCeo')}
                className="btn btn-primary"
              >
                {data?.mission?.btn || (isEs ? 'CONOCE A NUESTRO DIRECTOR GENERAL' : 'MEET OUR MANAGING PARTNER')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
