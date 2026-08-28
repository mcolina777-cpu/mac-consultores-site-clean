import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const title = dict?.quienes_somos?.meta_title || (isEs ? 'Quiénes Somos | Mac Consultores Jurídicos & Asociados' : 'About Us | Mac Consultores Jurídicos & Asociados');
  const description = dict?.quienes_somos?.meta_description || '';
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
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const data = dict?.quienes_somos;
  const detalleData = dict?.quienes_somos_detalle;

  return (
    <main className="page-quienes-somos">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{data?.breadcrumb || (isEs ? 'NUESTRA FIRMA' : 'OUR FIRM')}</span>
          <h1 className="mb-1-5rem serif">
            {isEs ? 'Arquitectura jurídica para desafíos de alta complejidad' : 'Legal Architecture for High-Complexity Challenges'}
          </h1>
          <p className="hero-subtitle">
            {isEs ? 'Rigor, lealtad y estrategia al servicio de sus intereses' : 'Rigor, loyalty, and strategy serving your interests'}
          </p>
        </div>
      </header>

      {/* BLOQUE 1: TRAYECTORIA INSTITUCIONAL + FOTO VERTICAL */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag">{data?.history?.tag || (isEs ? 'TRAYECTORIA INSTITUCIONAL' : 'INSTITUTIONAL HISTORY')}</span>
              <h2 className="serif section-title mb-1-5rem">
                {(data?.history as any)?.subtitle || (isEs ? 'Fundación y Expansión (2015)' : 'Foundation and Expansion (2015)')}
              </h2>
              <p className="text-left max-w-100 mb-1-5rem">
                {detalleData?.history?.p1 || (isEs 
                  ? 'Fundada en el año 2015 bajo la dirección del Dr. Marco A. Colina G., Mac Consultores Jurídicos & Asociados nació con la vocación de ofrecer un modelo de asesoría integral y litigación estratégica.' 
                  : 'Founded in 2015 under the leadership of Dr. Marco A. Colina G., Mac Consultores Jurídicos & Asociados was established to offer comprehensive advisory and strategic litigation.')}
              </p>
              <p className="text-left max-w-100 mb-2rem">
                {detalleData?.history?.p2 || (isEs 
                  ? 'A lo largo de nuestra trayectoria, hemos consolidado una práctica profesional que atiende con idéntico rigor mandatos de clientes nacionales e internacionales, desarrollando soluciones a la medida para cada caso.'
                  : 'Throughout our history, we have consolidated a professional practice that handles mandates from national and international clients with identical rigor, developing tailored solutions for each case.')}
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

      {/* BLOQUE 2: VALORES Y PRINCIPIOS RECTORES */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3rem">
            <span className="section-tag">{isEs ? 'PRINCIPIOS RECTORES' : 'GUIDING PRINCIPLES'}</span>
            <h2 className="serif section-title mt-1rem">{detalleData?.mission?.title || (isEs ? 'Valores y Principios' : 'Values and Principles')}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="serif text-primary" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>I</span>
              <h3 className="serif">{isEs ? 'Legalidad' : 'Legality'}</h3>
              <p>{isEs ? 'Como fundamento inquebrantable de toda actuación jurídica y procesal.' : 'As the unwavering foundation of all legal and procedural actions.'}</p>
            </div>
            <div className="card">
              <span className="serif text-primary" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>II</span>
              <h3 className="serif">{isEs ? 'Independencia Técnica' : 'Technical Independence'}</h3>
              <p>{isEs ? 'Para garantizar criterios objetivos, libres de conflictos de interés.' : 'To guarantee objective criteria, free from conflicts of interest.'}</p>
            </div>
            <div className="card">
              <span className="serif text-primary" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>III</span>
              <h3 className="serif">{isEs ? 'Confidencialidad' : 'Confidentiality'}</h3>
              <p>{isEs ? 'Secreto profesional como compromiso absoluto para la protección del cliente.' : 'Professional secrecy as an absolute commitment to client protection.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: ÁREAS DE PRÁCTICA ESPECIALIZADAS */}
      <section className="section-padding-asym">
        <div className="container">
          <div className="axial-header axial-centered text-center mb-3rem">
            <span className="section-tag">{isEs ? 'CAPACIDAD TÉCNICA' : 'TECHNICAL CAPACITY'}</span>
            <h2 className="serif section-title mt-1rem">{detalleData?.areas?.title || (isEs ? 'Áreas de Práctica Especializadas' : 'Specialized Practice Areas')}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3 className="serif">{isEs ? 'Derecho Penal Corporativo' : 'Corporate Criminal Law'}</h3>
              <p>{isEs ? 'Defensa técnica especializada y representación de intereses patrimoniales y corporativos ante la jurisdicción penal.' : 'Specialized technical defense and representation of patrimonial and corporate interests before the criminal jurisdiction.'}</p>
            </div>
            <div className="card">
              <h3 className="serif">{isEs ? 'Consultoría en Riesgos Jurídicos' : 'Legal Risk Consulting'}</h3>
              <p>{isEs ? 'Diagnóstico preventivo e implementación de estrategias de mitigación para blindar las operaciones de nuestros patrocinados.' : 'Preventive diagnosis and implementation of mitigation strategies to shield our clients’ operations.'}</p>
            </div>
            <div className="card">
              <h3 className="serif">{isEs ? 'Litigación Especializada' : 'Specialized Litigation'}</h3>
              <p>{isEs ? 'Representación de alta complejidad, incluyendo recursos extraordinarios ante tribunales superiores y de casación.' : 'High-complexity representation, including extraordinary appeals before higher courts and supreme tribunals.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 4: PROPÓSITO INSTITUCIONAL Y LIDERAZGO FORENSE */}
      <section className="bg-soft section-padding-asym">
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
              <span className="section-tag">{(data?.mission as any)?.tag || (isEs ? "LIDERAZGO FORENSE" : "LEGAL LEADERSHIP")}</span>
              <h2 className="serif heading-lg mb-1-5rem line-height-1-1">
                {data?.mission?.quote || (isEs ? '“El rigor metodológico es la garantía de nuestra efectividad.”' : '“Methodological rigor is the guarantee of our effectiveness.”')}
              </h2>
              <p className="mb-2rem text-left max-w-100">
                {detalleData?.distinction?.p1 || (isEs 
                  ? 'Más allá de la práctica tradicional, concebimos cada caso como un desafío de arquitectura jurídica, donde cada elemento probatorio y dogmático se estructura con precisión milimétrica.'
                  : 'Beyond traditional practice, we conceive each case as a challenge in legal architecture, where every evidentiary and doctrinal element is structured with millimeter precision.')}
              </p>
              <Link
                href={getRoute(locale, 'ourCeo')}
                className="btn btn-primary"
              >
                {data?.mission?.btn || (isEs ? 'CONOCE A NUESTRO DIRECTOR' : 'MEET OUR DIRECTOR')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
