import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

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
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';

  return (
    <main className="page-blog">
      {/* HEADER PRINCIPAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{dict?.blog?.breadcrumb || (isEs ? 'INICIO / CRITERIO FORENSE' : 'HOME / LEGAL INSIGHTS')}</span>
          <h1 className="mb-1-5rem serif">{dict?.blog?.h1 || (isEs ? 'Doctrina, Análisis y Criterio Jurídico' : 'Doctrine, Analysis and Legal Insights')}</h1>
          <p className="hero-subtitle">
            {dict?.blog?.intro || (isEs 
              ? 'Reflexiones doctrinales, análisis jurisprudenciales y criterios técnico-jurídicos sobre desafíos forenses de alta complejidad.' 
              : 'Doctrinal reflections, jurisprudential analysis, and high-complexity forensic legal insights.')}
          </p>
        </div>
      </header>

      {/* BLOQUE DE TARJETAS EDITORIALES DE ARTÍCULOS */}
      <section className="bg-soft section-padding-asym">
        <div className="container">
          <div className="grid-3 mb-3rem">
            {/* ARTÍCULO 01 */}
            <Link 
              href={`/${locale}/blog/criminalidad-economica`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict?.blog?.article1?.tag || (isEs ? 'DERECHO PENAL ECONÓMICO' : 'ECONOMIC CRIMINAL LAW')}</span>
              <h3 className="serif">{dict?.blog?.article1?.title || (isEs ? 'Criminalidad Económica y Compliance Penal' : 'Economic Crime and Corporate Compliance')}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {dict?.blog?.article1?.desc || (isEs
                  ? 'El ejercicio de la actividad corporativa contemporánea impone una rigurosa evaluación de riesgos frente a las exigencias del Derecho penal económico. La adecuada estructuración de programas de cumplimiento normativo y la delimitación de deberes fiduciarios permiten mitigar contingencias penales de alta complejidad, garantizando una defensa técnica especializada sustentada en el control previo de imputación y la preservación del patrimonio societario.'
                  : 'Modern corporate operations require rigorous legal assessment regarding the growing complexities of economic criminal law. Implementing sound compliance frameworks and clearly defining executive fiduciary duties effectively mitigates high-stakes criminal liabilities, establishing a robust defense strategy grounded in procedural oversight, doctrinal scrutiny, and the comprehensive protection of corporate governance and asset integrity.')}
              </p>
              <span className="card-link mt-auto">
                {dict?.blog?.readmore || (isEs ? 'Leer más →' : 'Read more →')}
              </span>
            </Link>

            {/* ARTÍCULO 02 */}
            <Link 
              href={`/${locale}/blog/amparo-garantia-vital`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict?.blog?.article2?.tag || (isEs ? 'TUTELA CONSTITUCIONAL' : 'CONSTITUTIONAL LAW')}</span>
              <h3 className="serif">{dict?.blog?.article2?.title || (isEs ? 'El Amparo Constitucional como Garantía Vital' : 'Constitutional Injunction as a Fundamental Guarantee')}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {dict?.blog?.article2?.desc || (isEs
                  ? 'La acción de tutela constitucional representa el instrumento forense por excelencia para restablecer de manera inmediata situaciones jurídicas infringidas por actos de autoridad o particulares. Su interposición exige una técnica jurídica depurada orientada a acreditar la violación directa a garantías fundamentales, evitando dilaciones indebidas y asegurando el restablecimiento pleno de la tutela judicial efectiva en estrados constitucionales.'
                  : 'The constitutional protection remedy serves as an essential forensic mechanism designed to instantly restore legal standing impaired by arbitrary actions from public authorities or private entities. Filing this action demands precise legal argumentation to demonstrate direct constitutional violations, preventing procedural delays while securing immediate judicial relief and due process enforcement across all constitutional courts.')}
              </p>
              <span className="card-link mt-auto">
                {dict?.blog?.readmore || (isEs ? 'Leer más →' : 'Read more →')}
              </span>
            </Link>

            {/* ARTÍCULO 03 */}
            <Link 
              href={`/${locale}/blog/regimen-poderes-cpc-copp`}
              className="card hover-lift"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <span className="section-tag">{dict?.blog?.article4?.tag || (isEs ? 'TÉCNICA FORENSE' : 'FORENSIC PRACTICE')}</span>
              <h3 className="serif">{dict?.blog?.article4?.title || (isEs ? 'El Régimen de Poderes en el CPC y el COPP' : 'Representation and Power of Attorney in CPC & COPP')}</h3>
              <p 
                className="card-editorial-text"
                style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--text-muted, #4b5563)', marginBottom: '1.5rem' }}
              >
                {dict?.blog?.article4?.desc || (isEs
                  ? 'La correcta acreditación de la cualidad procesal constituye un presupuesto insoslayable para la validez de cualquier actuación judicial. El examen riguroso de las facultades de representación en las jurisdicciones civil y penal exige analizar con celo técnico los requisitos de otorgamiento, sustitución y delimitación del mandato, previniendo excepciones procesales que puedan comprometer la eficacia de la defensa en juicio.'
                  : 'Proper verification of legal standing represents an indispensable procedural prerequisite for judicial validity across all court proceedings. A thorough technical analysis of power of attorney requirements within civil and criminal procedural codes ensures proper delegation, formal substitution, and scope definition, effectively preventing procedural exceptions and safeguarding the integrity of courtroom advocacy.')}
              </p>
              <span className="card-link mt-auto">
                {dict?.blog?.readmore || (isEs ? 'Leer más →' : 'Read more →')}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
