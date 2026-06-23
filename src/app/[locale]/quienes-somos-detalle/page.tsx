import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.quienes_somos_detalle?.h1 || 'Arquitectura jurídica | Mac Consultores Jurídicos & Asociados',
  };
}

export default async function QuienesSomosDetalle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-quienes-somos">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.quienes_somos_detalle?.breadcrumb || 'Inicio / La Firma / Nuestra Historia'}</span>
          <h1>{dict?.quienes_somos_detalle?.h1 || 'Arquitectura jurídica para desafíos de alta complejidad'}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="axial-header">
            <span className="section-tag">{dict?.quienes_somos_detalle?.history?.tag || 'Nuestra Historia'}</span>
          </div>
          <p>{dict?.quienes_somos_detalle?.history?.p1 || 'Mac Consultores Jurídicos & Asociados es una firma boutique...'}</p>
          <p>{dict?.quienes_somos_detalle?.history?.p2 || 'Desde su fundación...'}</p>
          <p>{dict?.quienes_somos_detalle?.history?.p3 || 'Bajo su dirección general...'}</p>
          <p>{dict?.quienes_somos_detalle?.history?.p4 || 'Actualmente, el Dr. Marco A. Colina...'}</p>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="axial-header">
            <h2 className="section-title">{dict?.quienes_somos_detalle?.mission?.title || 'Misión y Valores'}</h2>
          </div>
          <p>{dict?.quienes_somos_detalle?.mission?.p1 || 'Nuestra misión es transformar...'}</p>
          <p>{dict?.quienes_somos_detalle?.mission?.p2 || 'Esta misión se sostiene sobre principios...'}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: dict?.quienes_somos_detalle?.mission?.list?.[0] || '<strong>Legalidad y diligencia profesional</strong> — como fundamento inquebrantable de toda actuación jurídica.' }} />
            <li dangerouslySetInnerHTML={{ __html: dict?.quienes_somos_detalle?.mission?.list?.[1] || '<strong>Independencia técnica</strong> — que garantiza criterios objetivos...' }} />
            <li dangerouslySetInnerHTML={{ __html: dict?.quienes_somos_detalle?.mission?.list?.[2] || '<strong>Transparencia y buena fe</strong> — en cada etapa...' }} />
            <li dangerouslySetInnerHTML={{ __html: dict?.quienes_somos_detalle?.mission?.list?.[3] || '<strong>Confidencialidad y secreto profesional</strong> — como compromiso absoluto...' }} />
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="axial-header">
            <h2 className="section-title">{dict?.quienes_somos_detalle?.areas?.title || 'Áreas de Práctica'}</h2>
          </div>
          <p>{dict?.quienes_somos_detalle?.areas?.p1 || 'El ejercicio profesional de la firma...'}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: dict?.quienes_somos_detalle?.areas?.list?.[0] || '<strong>Derecho Penal Corporativo:</strong> Defensa técnica especializada...' }} />
            <li dangerouslySetInnerHTML={{ __html: dict?.quienes_somos_detalle?.areas?.list?.[1] || '<strong>Consultoría Estratégica en Riesgos Jurídicos:</strong> Diagnóstico preventivo...' }} />
            <li dangerouslySetInnerHTML={{ __html: dict?.quienes_somos_detalle?.areas?.list?.[2] || '<strong>Litigación y Defensa Especializada:</strong> Representación técnica...' }} />
          </ul>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="axial-header">
            <h2 className="section-title">{dict?.quienes_somos_detalle?.distinction?.title || 'Lo Que Nos Distingue'}</h2>
          </div>
          <p>{dict?.quienes_somos_detalle?.distinction?.p1 || 'Cada asunto sometido a nuestra consideración...'}</p>
          <p>{dict?.quienes_somos_detalle?.distinction?.p2 || 'Complementamos esta metodología...'}</p>
          <p>{dict?.quienes_somos_detalle?.distinction?.p3 || 'Esta combinación de tradición jurídica y modernidad...'}</p>
          <p>{dict?.quienes_somos_detalle?.distinction?.p4 || 'En Mac Consultores Jurídicos & Asociados no formulamos promesas...'}</p>
          <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', marginTop: '2rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem' }}>
            {dict?.quienes_somos_detalle?.distinction?.quote || '"Nuestra misión es transformar desafíos legales en escenarios de seguridad jurídica y crecimiento."'}
          </blockquote>
        </div>
      </section>
    </main>
  );
}
