import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.strategy_representative_scenarios?.h1 || 'Estrategias en escenarios sensibles | Mac Consultores Jurídicos & Asociados',
  };
}

export default async function EstrategiaEscenariosRepresentativos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="bg-soft" style={{ padding: '6rem 0' }}>
        <div className="container">
            <div className="axial-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="section-title">{dict?.strategy_representative_scenarios?.h1 || 'Estrategias en escenarios penales y constitucionales sensibles'}</h1>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_representative_scenarios?.p1 || 'En los asuntos más sensibles —investigaciones penales económicas contra empresas, procedimientos con impacto mediático o acciones de amparo constitucional— diseñamos la estrategia combinando tres planos: jurídico, probatorio y reputacional.'}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_representative_scenarios?.p2 || 'En el plano jurídico, identificamos el marco normativo aplicable y los criterios jurisprudenciales relevantes, para saber con precisión cuáles son los márgenes reales de maniobra y qué vías procesales ofrecen mayor protección al cliente. En el plano probatorio, nos enfocamos en preservar la cadena de custodia, depurar la evidencia disponible y anticipar los ataques que la contraparte intentará dirigir contra los soportes documentales y testimoniales.'}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_representative_scenarios?.p3 || 'Finalmente, analizamos el impacto reputacional de cada decisión: cómo comunicamos las actuaciones al cliente, qué riesgos existen de filtraciones o exposiciones públicas y qué medidas pueden tomarse para minimizar daños a la imagen personal o corporativa, sin sacrificar la solidez de la defensa técnica.'}
                </p>
            </div>
        </div>
    </main>
  );
}
