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
    ? 'Local Counsel for Venezuela | Mac Consultores Jurídicos'
    : 'Local Counsel for Venezuela | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Plataforma de cooperación jurídica y Local Counsel en Venezuela para firmas internacionales, departamentos legales corporativos y empresas extranjeras.'
    : 'Legal cooperation platform and Local Counsel in Venezuela for international law firms, corporate legal departments, and global enterprises.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/services/local-counsel-venezuela`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/services/local-counsel-venezuela`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/services/local-counsel-venezuela`;

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

export default async function LocalCounselService({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'PRÁCTICA INTERNACIONAL / COOPERACIÓN JURÍDICA' : 'INTERNATIONAL PRACTICE / LEGAL COOPERATION'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'Local Counsel for Venezuela' 
              : 'Local Counsel for Venezuela'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Capacidad jurídica local estratégica para firmas internacionales, departamentos legales corporativos y operaciones transfronterizas.'
              : 'Strategic local legal capacity for international law firms, corporate legal departments, and cross-border transactions.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: CONCEPTO Y FUNCIÓN DEL LOCAL COUNSEL */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. Capacidad Jurídica Local para Operaciones Globales' : '1. Local Legal Capacity for Global Transactions'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La creciente complejidad de los negocios transfronterizos exige un conocimiento simultáneo de múltiples jurisdicciones. Cuando una corporación extranjera o cliente internacional mantiene activos, inversiones, contratos, representantes o contingencias vinculadas con Venezuela, la intervención de un asesor jurídico local resulta determinante para comprender y ejecutar correctamente los aspectos sometidos al ordenamiento jurídico nacional.'
                : 'The growing complexity of cross-border transactions demands concurrent knowledge across multiple jurisdictions. When an international corporation or overseas client holds assets, investments, contracts, representatives, or legal liabilities connected with Venezuela, local counsel intervention is essential to execute matters governed by Venezuelan law.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Nuestra función no consiste en sustituir al abogado que conduce la relación principal con el cliente, sino en aportar la capacidad técnica local indispensable para analizar, auditar y ejecutar actuaciones en territorio venezolano, asegurando que la firma extranjera mantenga el control estratégico integral de la operación.'
                : 'Our role does not replace lead international counsel managing the primary client relationship; instead, we provide the indispensable technical capacity to analyze, audit, and execute proceedings in Venezuela, ensuring lead counsel retains overall strategic dominance.'}
            </p>
          </div>

          {/* BLOQUE 2: COOPERACIÓN JURÍDICA SIN DUPLICIDAD */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Alianza Estratégica: Cooperación, no Competencia' : '2. Strategic Alliance: Cooperation over Competition'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Partimos de una premisa clara e innegociable: la firma internacional preserva la titularidad del mandato de su cliente; Mac Consultores Jurídicos & Asociados proporciona el soporte técnico en el foro local. Esta dinámica previene duplicidades operativas y delimita con precisión el alcance de la intervención.'
                : 'We operate under a clear principle: the international law firm maintains full client relationship ownership; Mac Consultores Jurídicos & Asociados provides technical support in the domestic forum. This framework prevents operational overlap and strictly defines collaborative scopes.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Intervenimos en auditorías de riesgo penal económico, investigaciones regulatorias, opiniones legales especializadas (*legal opinions*), due diligence corporativo y validación de instrumentos transfronterizos destinados a producir plenos efectos en Venezuela o en el extranjero.'
                : 'We assist in corporate criminal risk audits, regulatory inquiries, formal legal opinions, corporate due diligence, and cross-border document authentication destined to produce legal effects in Venezuela or overseas.'}
            </p>
          </div>

          {/* BLOQUE 3: ÁMBITOS TRANSFRONTERIZOS (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Escenarios de Intervención para Asuntos Transfronterizos' : '3. Cross-Border Practice Scenarios'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Nuestra estructura como Local Counsel responde a requerimientos forenses específicos en los siguientes ejes de práctica:'
                : 'Our Local Counsel structure addresses specific forensic requirements across the following core practice axes:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Riesgo Penal Corporativo y Compliance:' : 'Corporate Criminal Risk & Compliance:'}</strong>{' '}
                {isEs 
                  ? 'Evaluación dogmática sobre contingencias penales de subsidiarias, socios o directivos en territorio venezolano.'
                  : 'Technical risk assessment regarding criminal liabilities of local subsidiaries, partners, or executives in Venezuela.'}
              </li>
              <li>
                <strong>{isEs ? 'Documentación y Mandatos Internacionales:' : 'Cross-Border Documentation & Powers:'}</strong>{' '}
                {isEs
                  ? 'Protocolización, legalización consular, apostillas y adecuación formal de poderes foráneos para su plena validez procesal.'
                  : 'Authentication, consular legalization, Hague apostilles, and procedural validation of foreign powers of attorney.'}
              </li>
              <li>
                <strong>{isEs ? 'Asistencia Procesal y Coordinación Local:' : 'Procedural Advocacy & Domestic Coordination:'}</strong>{' '}
                {isEs
                  ? 'Representación ante tribunales, cortes superiores y entes regulatorios en defensa de intereses internacionales.'
                  : 'Direct representation before courts, appellate jurisdictions, and regulatory bodies defending international interests.'}
              </li>
              <li>
                <strong>{isEs ? 'Informes Doctrinales y Opiniones Legales:' : 'Doctrinal Reports & Formal Legal Opinions:'}</strong>{' '}
                {isEs
                  ? 'Emisión de criterios jurídicos fundamentados para arbitrajes internacionales o tribunales extranjeros sobre Derecho venezolano.'
                  : 'Issuance of authoritative legal opinions for international arbitrations or foreign courts interpreting Venezuelan law.'}
              </li>
            </ul>
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
                ? '“Una firma local para quienes necesitan actuar en Venezuela con claridad, respaldo técnico y coordinación estratégica.”'
                : '“A local firm for those who need to act in Venezuela with clarity, technical support, and strategic coordination.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Acompañamos a clientes, empresas y organizaciones internacionales en asuntos que requieren conocimiento del entorno jurídico venezolano y representación profesional confiable.'
                : 'We assist clients, companies, and international organizations with matters requiring knowledge of the Venezuelan legal environment and reliable professional representation.'}
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
