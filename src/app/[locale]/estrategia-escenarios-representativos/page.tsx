import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.strategy_representative_scenarios?.title || 'Estrategias en escenarios sensibles | Mac Consultores Jurídicos & Asociados',
  };
}

export default async function EstrategiaEscenariosRepresentativos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="bg-soft" style={{ padding: '6rem 0' }}>
        <div className="container">
            <div className="axial-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="section-title">{dict?.strategy_representative_scenarios?.h1}</h1>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_representative_scenarios?.p1}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_representative_scenarios?.p2}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    {dict?.strategy_representative_scenarios?.p3}
                </p>
            </div>
        </div>
    </main>
  );
}
