import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.strategy_case_theory?.h1 || 'Teoría del caso | Mac Consultores Jurídicos & Asociados',
  };
}

export default async function EstrategiaTeoriaDelCaso({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="bg-soft" style={{ padding: '6rem 0' }}>
        <div className="container">
            <div className="axial-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="section-title">{dict?.strategy_case_theory?.h1 || 'Teoría del caso: de la hipótesis a la estrategia procesal'}</h1>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_case_theory?.p1 || 'La teoría del caso no es un discurso retórico; es la columna vertebral de toda defensa seria. Partimos de una hipótesis central que explica qué ocurrió, por qué ocurrió y cómo los elementos de prueba la sostienen frente a la versión acusatoria.'}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_case_theory?.p2 || 'Desde las primeras diligencias, definimos cuál será la narrativa probatoria que queremos que el tribunal escuche y entienda: qué hechos se admiten, cuáles se disputan, qué vacíos tiene la acusación y qué indicadores revelan que la imputación es forzada o desproporcionada. Esta teoría guía la preparación de declaraciones, la selección de peritos, el contrainterrogatorio y el uso de la prueba documental.'}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_case_theory?.p3 || 'El resultado es una estrategia procesal coherente: cada escrito, cada actuación y cada alegato responde a un mismo eje argumental, evitando contradicciones defensivas, improvisaciones y giros que restan credibilidad al cliente ante los jueces y el Ministerio Público.'}
                </p>
            </div>
        </div>
    </main>
  );
}
