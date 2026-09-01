import React from 'react';
import Link from 'next/link';
import { getRoute } from '@/lib/routes';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs 
    ? 'El Amparo Constitucional como Garantía Vital | Mac Consultores Jurídicos'
    : 'Constitutional Injunction as a Fundamental Guarantee | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Análisis dogmático y procesal sobre la acción de amparo constitucional como mecanismo de tutela judicial urgente y preferente frente a la vulneración de derechos fundamentales.'
    : 'Doctrinal and procedural analysis on constitutional injunctions as an urgent and preferential judicial remedy against fundamental rights infringements.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog/amparo-garantia-vital`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog/amparo-garantia-vital`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog/amparo-garantia-vital`;

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
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function BlogAmparo({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'DOCTRINA / TUTELA CONSTITUCIONAL' : 'DOCTRINE / CONSTITUTIONAL LAW'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'El Amparo Constitucional como Garantía Vital' 
              : 'Constitutional Injunction as a Fundamental Guarantee'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Naturaleza procesal, urgencia tutelar y presupuestos de admisibilidad de la acción de amparo frente a vías de hecho y actos arbitrarios.'
              : 'Procedural nature, urgent judicial relief, and admissibility standards governing constitutional injunctions against arbitrary state or private actions.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: INTRODUCCIÓN Y NATURALEZA DEL AMPARO */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. La Tutela Constitucional Urgente como Límite al Poder' : '1. Urgent Constitutional Relief as a Check on Power'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La acción de amparo constitucional constituye la cúspide adjetiva del Estado de Derecho. Concebida como una garantía procesal de rango supremo, su propósito esencial no es dilucidar litigios ordinarios ni revisar el fondo de controversias patrimoniales, sino restablecer con inmediatez y eficacia situaciones jurídicas infringidas por actos, hechos u omisiones de autoridades públicas o particulares que vulneren de forma directa derechos fundamentales.'
                : 'The constitutional injunction represents the pinnacle of due process under the rule of law. Conceived as a supreme procedural remedy, its primary objective is not resolving ordinary civil disputes nor reviewing contractual merits, but promptly and effectively restoring legal standing impaired by arbitrary actions, material conduct, or omissions from public authorities or private entities.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Por su naturaleza sumarísima y preferente, el amparo trasciende las formas sacramentales del procedimiento común para priorizar la vigencia material de la Constitución y la dignidad de la persona.'
                : 'Given its summary and preferential nature, constitutional injunctions transcend conventional procedural formalities to prioritize the substantive enforcement of constitutional supremacy and individual liberty.'}
            </p>
          </div>

          {/* BLOQUE 2: PRESUPUESTOS DE ADMISIBILIDAD Y TÉCNICA FORENSE */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Rigor Técnico y Presupuestos Procesales de Admisibilidad' : '2. Technical Diligence and Procedural Admissibility'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'El ejercicio forense del amparo exige un celo dogmático extraordinario. La jurisprudencia constitucional ha delimitado causales estrictas de inadmisibilidad destinadas a evitar la desnaturalización de esta vía extraordinaria. No toda disconformidad judicial o irregularidad administrativa califica como materia de amparo; se requiere demostrar un agravio constitucional directo, lesivo e irreparable mediante las vías ordinarias de impugnación.'
                : 'Forensic practice in constitutional litigation demands rigorous technical precision. Constitutional jurisprudence enforces strict admissibility bars designed to prevent the misuse of this extraordinary remedy. Not every procedural irregularity warrants constitutional review; counsel must demonstrate a direct, harmful, and irreversible constitutional injury that ordinary appeals cannot remedy.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Una demanda de amparo estructurada con solvencia técnica debe acreditar con precisión la actualidad de la lesión, la inexistencia de consentimiento tácito y la acreditación irrefutable de la violación a la garantía invocada.'
                : 'A properly drafted petition must rigorously establish the immediacy of the constitutional breach, the absence of implied consent, and indisputable evidence proving the fundamental right infringement.'}
            </p>
          </div>

          {/* BLOQUE 3: ÁMBITOS DE APLICACIÓN Y TUTELA EFECTIVA (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Escenarios Críticos de Tutela Constitucional' : '3. Critical Scenarios for Constitutional Relief'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'En el ejercicio forense contemporáneo, la protección preferente del amparo constitucional adquiere protagonismo decisivo en los siguientes escenarios procesales:'
                : 'In contemporary legal practice, preferential constitutional protection plays a decisive role across the following forensic contexts:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Amparo contra Decisiones Judiciales:' : 'Injunction against Judicial Decisions:'}</strong>{' '}
                {isEs 
                  ? 'Procedencia excepcional ante fallos que incurren en usurpación de funciones, indefensión manifiesta o violación flagrante del debido proceso.'
                  : 'Exceptional recourse against rulings incurring jurisdictional overreach, manifest lack of defense, or severe due process violations.'}
              </li>
              <li>
                <strong>{isEs ? 'Vías de Hecho Administrativas:' : 'Administrative Arbitrary Actions:'}</strong>{' '}
                {isEs
                  ? 'Intervención cautelar urgente frente a clausuras, intervenciones o medidas sancionatorias ejecutadas al margen del procedimiento legal previo.'
                  : 'Urgent injunctions combating operational shutdowns, corporate seizures, or administrative sanctions executed without prior due process.'}
              </li>
              <li>
                <strong>{isEs ? 'Medidas Cautelares Constitucionales:' : 'Constitutional Precautionary Measures:'}</strong>{' '}
                {isEs
                  ? 'Solicitud de órdenes de suspensión de efectos para neutralizar de inmediato el daño irreparable mientras se sustancia el fondo del amparo.'
                  : 'Petitioning stay orders to immediately neutralize irreparable harm while the constitutional merits are substantively litigated.'}
              </li>
              <li>
                <strong>{isEs ? 'Protección de Derechos Económicos y Propiedad:' : 'Economic Rights and Property Safeguards:'}</strong>{' '}
                {isEs
                  ? 'Defensa técnica urgente ante actos que vulneran la libre empresa, la seguridad jurídica patrimonial y la no confiscatoriedad.'
                  : 'Urgent advocacy safeguarding private enterprise, corporate property rights, and protection against arbitrary asset deprivation.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CAJA DE CIERRE EDITORIAL Y CONVERSIÓN */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'LITIGACIÓN EN DERECHO CONSTITUCIONAL' : 'CONSTITUTIONAL LITIGATION PRACTICE'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“El amparo constitucional no es una instancia más; es el escudo técnico frente a la arbitrariedad procesal.”' 
                : '“Constitutional injunction is not an additional appeal; it is the technical shield against procedural arbitrariness.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados ejercemos la tutela constitucional con rigurosa solvencia dogmática, interponiendo acciones de amparo ante tribunales superiores y la Sala Constitucional del Tribunal Supremo de Justicia.'
                : 'At Mac Consultores Jurídicos & Asociados, we conduct constitutional litigation with rigorous technical solvency, filing injunctions before appellate courts and the Constitutional Chamber of the Supreme Tribunal of Justice.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>
              <Link href={`/${locale}/blog`} className="btn btn-secondary">
                {isEs ? '← VOLVER AL BLOG' : '← BACK TO BLOG'}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
