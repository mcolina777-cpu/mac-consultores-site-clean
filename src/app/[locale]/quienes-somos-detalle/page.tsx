import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.quienes_somos_detalle?.h1,
  };
}

export default async function QuienesSomosDetalle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="page-quienes-somos">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.quienes_somos_detalle?.breadcrumb}</span>
          <h1>{dict?.quienes_somos_detalle?.h1}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="axial-header">
            <span className="section-tag">{dict?.quienes_somos_detalle?.history?.tag}</span>
          </div>
          <p>{dict?.quienes_somos_detalle?.history?.p1}</p>
          <p>{dict?.quienes_somos_detalle?.history?.p2}</p>
          <p>{dict?.quienes_somos_detalle?.history?.p3}</p>
          <p>{dict?.quienes_somos_detalle?.history?.p4}</p>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="axial-header">
            <h2 className="section-title">{dict?.quienes_somos_detalle?.mission?.title}</h2>
          </div>
          <p>{dict?.quienes_somos_detalle?.mission?.p1}</p>
          <p>{dict?.quienes_somos_detalle?.mission?.p2}</p>
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
            <h2 className="section-title">{dict?.quienes_somos_detalle?.areas?.title}</h2>
          </div>
          <p>{dict?.quienes_somos_detalle?.areas?.p1}</p>
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
            <h2 className="section-title">{dict?.quienes_somos_detalle?.distinction?.title}</h2>
          </div>
          <p>{dict?.quienes_somos_detalle?.distinction?.p1}</p>
          <p>{dict?.quienes_somos_detalle?.distinction?.p2}</p>
          <p>{dict?.quienes_somos_detalle?.distinction?.p3}</p>
          <p>{dict?.quienes_somos_detalle?.distinction?.p4}</p>
          <blockquote className="quote-block">
            {dict?.quienes_somos_detalle?.distinction?.quote}
          </blockquote>
        </div>
      </section>
    </main>
  );
}
