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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            <Link href={getRoute(locale, "about.legalidad_diligencia" as any)} className="card">
              <span className="section-tag">01</span>
              <h3>{isEs ? 'Legalidad y Diligencia' : 'Legality & Due Diligence'}</h3>
              <p className="card-desc">
                {isEs 
                  ? 'Como fundamento inquebrantable de toda actuación jurídica y procesal.' 
                  : 'As the unwavering foundation of all legal and procedural actions.'}
              </p>
              <ul className="service-list">
                <li>{isEs ? 'Sometimiento estricto a la Constitución y la Ley' : 'Strict adherence to Constitution and Law'}</li>
                <li>{isEs ? 'Evaluación y diligencia desde el primer contacto' : 'Assessment and diligence from first contact'}</li>
                <li>{isEs ? 'Análisis jurídico y procesal responsable' : 'Responsible legal and procedural analysis'}</li>
                <li>{isEs ? 'Control riguroso de plazos y términos' : 'Strict control of deadlines and proceedings'}</li>
                <li>{isEs ? 'Comunicación transparente y expectativas reales' : 'Transparent communication and realistic expectations'}</li>
                <li>{isEs ? 'Estrategias fundadas en la legitimidad de los medios' : 'Strategies based on legitimate means'}</li>
              </ul>
              <span className="card-link">{isEs ? 'VER DETALLES →' : 'VIEW DETAILS →'}</span>
            </Link>

            <div className="card" style={{ color: 'inherit' }}>
              <span className="section-tag">02</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{isEs ? 'Independencia Técnica' : 'Technical Independence'}</h3>
              <p className="card-desc mb-1rem" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                {isEs ? 'Garantiza criterios objetivos y rigurosos, libres de injerencias ajenas al interés del cliente.' : 'Guarantees objective and rigorous criteria, free from external interference.'}
              </p>
              <span className="card-link mt-auto" style={{ opacity: 0, pointerEvents: 'none' }}>VER DETALLES →</span>
            </div>

            <div className="card" style={{ color: 'inherit' }}>
              <span className="section-tag">03</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{isEs ? 'Transparencia y Buena Fe' : 'Transparency & Good Faith'}</h3>
              <p className="card-desc mb-1rem" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                {isEs ? 'En cada etapa de la relación profesional y procesal con quienes confían en nosotros.' : 'At every stage of the professional and procedural relationship with our clients.'}
              </p>
              <span className="card-link mt-auto" style={{ opacity: 0, pointerEvents: 'none' }}>VER DETALLES →</span>
            </div>

            <div className="card" style={{ color: 'inherit' }}>
              <span className="section-tag">04</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{isEs ? 'Confidencialidad y Secreto' : 'Confidentiality & Secrecy'}</h3>
              <p className="card-desc mb-1rem" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                {isEs ? 'Compromiso absoluto en el tratamiento y custodia de la información confiada.' : 'Absolute commitment to the protection and custody of confidential information.'}
              </p>
              <span className="card-link mt-auto" style={{ opacity: 0, pointerEvents: 'none' }}>VER DETALLES →</span>
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
