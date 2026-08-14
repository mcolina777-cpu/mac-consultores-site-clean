import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict?.strategy_case_selection?.title,
  };
}

export default async function SeleccionDeCasos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="bg-soft py-6rem">
      <div className="container">
        <div className="axial-header text-center mb-3rem">
          <h1 className="section-title">{dict?.strategy_case_selection?.h1}</h1>
        </div>

        <div className="layout-reading">
          <p className="mb-1-5rem">
            {dict?.strategy_case_selection?.p1}
          </p>
          <p className="mb-1-5rem">
            {dict?.strategy_case_selection?.p2}
          </p>
          <p className="mb-1-5rem">
            {dict?.strategy_case_selection?.p3}
          </p>
        </div>
      </div>
    </main>
  );
}
