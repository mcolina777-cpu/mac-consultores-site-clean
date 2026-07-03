import React from 'react';

type InsightProps = {
  dict: any;
};

export default function InsightDelDia({ dict }: InsightProps) {
  const insight = dict?.insight || {};

  return (
    <section className="daily-insight">
      <div className="container">
        <div className="daily-insight-inner">
          <span className="section-tag daily-insight-tag">
            {insight.tag || 'Insight Jurídico del Día'}
          </span>
          <h2 className="daily-insight-concept is-loaded" id="daily-insight-concept">
            {insight.title || 'Título de Insight (ES por defecto)'}
          </h2>
          <p className="daily-insight-definition is-loaded" id="daily-insight-definition">
            {insight.body || 'Contenido del insight jurídico del día. (fallback en español)'}
          </p>
          <p className="daily-insight-definition is-loaded" style={{ fontSize: '0.85rem', marginTop: '1rem', opacity: 0.8 }}>
            {insight.footer || 'Actualizado por Mac Consultores Jurídicos & Asociados.'}
          </p>
        </div>
      </div>
    </section>
  );
}
