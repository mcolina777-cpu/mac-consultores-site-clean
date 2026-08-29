import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Legalidad y Diligencia | Mac Consultores' : 'Legality & Due Diligence | Mac Consultores',
  };
}

export default async function LegalidadDiligenciaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = (dict as any)?.deontologia?.legalidad_diligencia?.landing;
  
  if (!data) return null;

  return (
    <main className="page-legalidad-diligencia">
      <header className="page-header header-soft-bg">
        <div className="container">
          <span className="section-tag">{locale === 'es' ? 'INICIO / LA FIRMA / DEONTOLOGÍA Y VALORES' : 'HOME / THE FIRM / DEONTOLOGY & VALUES'}</span>
          <h1 className="mb-1-5rem serif">{data.title}</h1>
          <p className="hero-subtitle">{data.subtitle}</p>
        </div>
      </header>

      <section className="section-padding-asym">
        <div className="container">
          <div className="layout-reading" style={{ textAlign: 'left' }}>
            <p className="mb-1-5rem" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text)' }}>{data.intro_1}</p>
            <p className="mb-1-5rem" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text)' }}>{data.intro_2}</p>
            <p className="mb-3rem" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text)' }}>{data.intro_3}</p>
            
            <h2 className="serif mb-1-5rem mt-3rem">{data.sec1_title}</h2>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec1_p1}</p>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec1_p2}</p>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec1_p3}</p>
            <p className="mb-3rem" style={{ lineHeight: 1.7 }}>{data.sec1_p4}</p>
            
            <h2 className="serif mb-1-5rem mt-3rem">{data.sec2_title}</h2>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec2_p1}</p>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec2_p2}</p>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec2_p3}</p>
            <p className="mb-3rem" style={{ lineHeight: 1.7 }}>{data.sec2_p4}</p>
            
            <h2 className="serif mb-1-5rem mt-3rem">{data.sec3_title}</h2>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec3_p1}</p>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec3_p2}</p>
            <p className="mb-3rem" style={{ lineHeight: 1.7 }}>{data.sec3_p3}</p>
            
            <h2 className="serif mb-1-5rem mt-3rem">{data.sec4_title}</h2>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec4_p1}</p>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec4_p2}</p>
            <p className="mb-3rem" style={{ lineHeight: 1.7 }}>{data.sec4_p3}</p>
            
            <h2 className="serif mb-1-5rem mt-3rem">{data.sec5_title}</h2>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec5_p1}</p>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec5_p2}</p>
            <p className="mb-3rem" style={{ lineHeight: 1.7 }}>{data.sec5_p3}</p>
            
            <h2 className="serif mb-1-5rem mt-3rem">{data.sec6_title}</h2>
            <p className="mb-1rem" style={{ lineHeight: 1.7 }}>{data.sec6_p1}</p>
            <p className="mb-3rem" style={{ lineHeight: 1.7 }}>{data.sec6_p2}</p>
          </div>
          
          <div className="layout-reading mt-3rem" style={{ textAlign: 'left' }}>
             <Link href={getRoute(locale, "about")} className="btn btn-primary">
               {data.back_link}
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
