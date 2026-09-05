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
    ? 'Servicios Jurídicos para Empresas Extranjeras en Venezuela | Mac Consultores Jurídicos'
    : 'Legal Services for Foreign Companies in Venezuela | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Asesoría jurídica directa, evaluación de riesgos, opiniones doctrinales y representación local en Venezuela para corporaciones extranjeras, departamentos legales e inversionistas.'
    : 'Direct legal advisory, corporate risk assessments, formal legal opinions, and domestic representation in Venezuela for foreign corporations, legal departments, and international investors.';

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
            {isEs ? 'PRÁCTICA INTERNACIONAL / SERVICIOS CORPORATIVOS EN VENEZUELA' : 'INTERNATIONAL PRACTICE / CORPORATE SERVICES IN VENEZUELA'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'Servicios Jurídicos para Empresas Extranjeras en Venezuela' 
              : 'Legal Services for Foreign Companies in Venezuela'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Capacidad jurídica local para evaluar riesgos penales corporativos, validar documentación transfronteriza, emitir opiniones legales y representar a empresas extranjeras en Venezuela.'
              : 'Local legal capacity to assess corporate criminal risks, validate cross-border documentation, issue formal legal opinions, and represent foreign companies in Venezuela.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: CAPACIDAD TÉCNICA LOCAL PARA EMPRESAS EXTRANJERAS */}
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
                ? 'Nuestra intervención aporta la capacidad técnica local indispensable para analizar, auditar y ejecutar actuaciones jurídicas en territorio venezolano, coordinando de manera directa con directores generales, departamentos legales internos o apoderados corporativos de la empresa matriz.'
                : 'Our practice provides the essential domestic technical capacity to analyze, audit, and execute legal proceedings in Venezuelan territory, coordinating directly with corporate directors, internal legal departments, or designated counsel of the parent company.'}
            </p>
          </div>

          {/* BLOQUE 2: SEGURIDAD JURÍDICA Y EFICACIA OPERATIVA */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Seguridad Jurídica y Eficacia Operativa en Venezuela' : '2. Legal Certainty and Operational Execution in Venezuela'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Estructuramos cada actuación bajo estándares estrictos de confidencialidad, rigor técnico y delimitación precisa del encargo profesional. Esto permite a corporaciones extranjeras e inversionistas contar con respaldo jurídico sólido en el país, mitigando contingencias operativas y garantizando que sus decisiones estratégicas se ajusten plenamente al ordenamiento venezolano.'
                : 'We structure each engagement under strict standards of confidentiality, technical rigor, and precise professional scope. This enables foreign corporations and investors to rely on solid legal footing in the country, mitigating operational liabilities and ensuring strategic decisions fully align with the Venezuelan legal framework.'}
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
                ? 'Nuestra práctica forense y de asesoría corporativa responde a requerimientos específicos en los siguientes ejes de actuación:'
                : 'Our forensic practice and corporate advisory address specific requirements across the following practice areas:'}
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
                ? 'Respaldo técnico y representación profesional para sus operaciones en Venezuela.'
                : 'Technical support and professional advocacy for your operations in Venezuela.'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Asesoramos a directores generales, departamentos legales internos y grupos transfronterizos que requieren certeza técnica y gestión procesal en el entorno jurídico venezolano.'
                : 'We assist corporate directors, general counsel, and multinational groups requiring technical certainty and reliable procedural execution in Venezuela.'}
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
                {isEs ? 'CONSULTAR REQUERIMIENTO CORPORATIVO' : 'SUBMIT CORPORATE INQUIRY'}
              </Link>
              <Link href={getRoute(locale, 'services')} className="btn btn-outline">
                {isEs ? '← VOLVER A SERVICIOS' : '← BACK TO SERVICES'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
