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
    ? 'El Régimen de Poderes en el CPC y el COPP | Mac Consultores Jurídicos'
    : 'Powers of Attorney under the CPC and COPP | Mac Consultores Jurídicos';
  
  const description = isEs
    ? 'Análisis comparativo dogmático y procesal sobre la representación judicial, facultades expresas y formalidades de apoderamiento en el CPC y el COPP.'
    : 'Comparative doctrinal and procedural analysis regarding legal representation, express authority, and power of attorney formalities under the CPC and COPP.';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/blog/regimen-poderes-cpc-copp`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/blog/regimen-poderes-cpc-copp`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/blog/regimen-poderes-cpc-copp`;

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

export default async function BlogPoderes({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="page-article">
      {/* HEADER INSTITUCIONAL */}
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">
            {isEs ? 'DOCTRINA / TÉCNICA FORENSE' : 'DOCTRINE / FORENSIC PRACTICE'}
          </span>
          <h1 className="mb-1-5rem serif">
            {isEs 
              ? 'El Régimen de Poderes en el CPC y el COPP' 
              : 'Representation and Power of Attorney in CPC & COPP'}
          </h1>
          <p className="hero-subtitle">
            {isEs
              ? 'Presupuestos de legitimación, facultades de disposición y formalidades de otorgamiento en las jurisdicciones civil y penal.'
              : 'Procedural standing requirements, discretionary powers, and formal execution standards under civil and criminal procedural frameworks.'}
          </p>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL DE LECTURA CONTINUA */}
      <section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          {/* BLOQUE 1: LA LEGITIMACIÓN COMO PRESUPUESTO PROCESAL */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '1. La Representación Judicial como Presupuesto de Validez' : '1. Legal Representation as a Prerequisite for Validity'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'La correcta postulación procesal y la acreditación formal de la representación en juicio constituyen presupuestos insoslayables para la validez de cualquier acto de defensa. En el ejercicio forense venezolano, la coexistencia de regímenes normativos diferenciados —el Código de Procedimiento Civil (CPC) y el Código Orgánico Procesal Penal (COPP)— exige un dominio riguroso de las exigencias sustantivas y adjetivas que regulan el mandato judicial.'
                : 'Proper procedural standing and the formal verification of representation in court constitute indispensable prerequisites for the validity of any defense act. Within Venezuelan forensic practice, the coexistence of distinct procedural frameworks—the Code of Civil Procedure (CPC) and the Organic Code of Criminal Procedure (COPP)—requires rigorous mastery of the substantive and adjective rules governing powers of attorney.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Un defecto en el otorgamiento del poder, la insuficiencia de facultades o una sustitución defectuosa pueden acarrear la inadmisibilidad de recursos, la nulidad de actuaciones procesales o la declaratoria de falta de cualidad, comprometiendo gravemente la tutela de los derechos del mandante.'
                : 'A defect in the execution of the power of attorney, insufficient discretionary authority, or an invalid substitution can trigger the dismissal of appeals, procedural nullity, or lack of standing, severely compromising the client’s legal position.'}
            </p>
          </div>

          {/* BLOQUE 2: DIFERENCIAS SISTEMÁTICAS ENTRE CPC Y COPP */}
          <div className="content-section mb-3rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '2. Distinciones Clave entre la Vía Civil y el Foro Penal' : '2. Key Distinctions between Civil and Criminal Frameworks'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'Mientras que en la jurisdicción civil el poder judicial responde a un contrato solemne tipificado con rigidez formal (requiriendo instrumento público o auténtico con facultades expresas para transigir, desistir o convenir conforme al CPC), en el proceso penal rige una dinámica flexible orientada a la garantía inviolable de la defensa técnica. La designación y juramentación del defensor técnico en el COPP puede formalizarse *apud acta*, sin requerir necesariamente un poder notarial previo.'
                : 'While in civil jurisdiction judicial representation stems from a formal mandate strictly codified under the CPC (requiring a public instrument with express powers to settle, withdraw, or compromise), the criminal process operates under flexible mechanisms prioritizing the inviolable right to technical defense. Appointing and swearing in defense counsel under the COPP can be executed directly in court records (*apud acta*), without strictly mandating a prior notarized instrument.'}
            </p>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'No obstante, cuando se trata de la representación de la víctima, la interposición de acusaciones particulares propias o la personación de personas jurídicas en el foro penal, la técnica de redacción del mandato notariado vuelve a cobrar una relevancia procesal estricta.'
                : 'However, regarding victim representation, filing private criminal complaints, or corporate standing within criminal proceedings, the precise drafting of notarized authority reassumes strict procedural relevance.'}
            </p>
          </div>

          {/* BLOQUE 3: AUDITORÍA TÉCNICA DEL MANDATO (LISTA ESTRUCTURADA) */}
          <div className="content-section mb-4rem">
            <h2 className="serif section-title mb-1-5rem">
              {isEs ? '3. Aspectos Críticos en la Auditoría de Poderes Judiciales' : '3. Critical Checkpoints in Power of Attorney Audits'}
            </h2>
            <p className="text-left max-w-100 mb-1-5rem" style={{ lineHeight: 1.75, fontSize: '1.05rem', color: 'var(--text-main, #1f2937)' }}>
              {isEs
                ? 'El control previo de la representación exige auditar de manera minuciosa los siguientes presupuestos legales antes de cualquier intervención en estrados:'
                : 'Prior audit of legal representation requires meticulously verifying the following statutory prerequisites before appearing before the courts:'}
            </p>
            <ul className="service-list mb-2rem">
              <li>
                <strong>{isEs ? 'Cadena de Facultades Estatutarias:' : 'Corporate Authority Chain:'}</strong>{' '}
                {isEs 
                  ? 'Verificación en actas constitutivas de las atribuciones expresas del otorgante (juntas directivas o administradores) para delegar representación judicial.'
                  : 'Verification of corporate bylaws confirming the grantor’s explicit authority (board of directors or managing partners) to delegate judicial powers.'}
              </li>
              <li>
                <strong>{isEs ? 'Cláusulas de Disposición Especial:' : 'Special Authority Clauses:'}</strong>{' '}
                {isEs
                  ? 'Inclusión inequívoca de facultades para convenir, transigir, desistir, comprometer en árbitros y recibir cantidades de dinero conforme al artículo 154 del CPC.'
                  : 'Explicit inclusion of powers to settle, compromise, withdraw, submit to arbitration, and receive funds pursuant to Article 154 of the CPC.'}
              </li>
              <li>
                <strong>{isEs ? 'Validez de Sustituciones:' : 'Validity of Substitutions:'}</strong>{' '}
                {isEs
                  ? 'Examen de la reserva o no de facultades al sustituir el mandato y fiscalización de que el apoderado sustituto ostente título de abogado habilitado.'
                  : 'Reviewing reservation of powers during substitution and ensuring that substitute counsel holds valid professional accreditation.'}
              </li>
              <li>
                <strong>{isEs ? 'Poderes Otorgados en el Extranjero:' : 'Foreign Executed Powers:'}</strong>{' '}
                {isEs
                  ? 'Cumplimiento riguroso de la legalización o Apostilla de La Haya, traducción pública colegiada y protocolización ante el Registro Principal correspondiente.'
                  : 'Strict compliance with Hague Apostille or legalization, certified legal translation, and official registration before the appropriate public registry.'}
              </li>
            </ul>
          </div>

          {/* BLOQUE 4: CAJA DE CIERRE EDITORIAL Y CONVERSIÓN */}
          <div className="card bg-soft p-3rem text-center" style={{ border: '1px solid var(--border-color, #e5e7eb)', borderRadius: '8px' }}>
            <span className="section-tag">{isEs ? 'CONSULTORÍA Y TÉCNICA FORENSE' : 'FORENSIC LITIGATION PRACTICE'}</span>
            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs 
                ? '“La solvencia de un litigio comienza en el rigor formal de su postulación procesal.”' 
                : '“Litigation success begins with the formal diligence of procedural standing.”'}
            </h3>
            <p className="max-w-800 mx-auto mb-2rem text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
              {isEs
                ? 'En Mac Consultores Jurídicos & Asociados auditamos y estructuramos esquemas de representación judicial civil, mercantil y penal para personas naturales y empresas nacionales e internacionales.'
                : 'At Mac Consultores Jurídicos & Asociados, we audit and structure civil, commercial, and criminal representation frameworks for domestic and international clients.'}
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
