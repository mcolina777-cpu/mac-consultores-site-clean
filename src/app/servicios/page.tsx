import React from 'react';

export const metadata = {
  title: 'Servicios | Mac Consultores Jurídicos & Asociados',
  description: 'Nuestras áreas de práctica estratégica.',
};

export default function Servicios() {
  return (
    <main className="page-servicios">
      <header className="page-header" style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-soft)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Especialidades</span>
          <h1>Áreas de Práctica Estratégica</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <h3>Defensa Penal Técnica</h3>
              <p>Estrategias de defensa integral en asuntos penales de alta complejidad, criminalidad económica y delitos informáticos.</p>
            </div>
            <div className="card">
              <h3>Tutela Constitucional</h3>
              <p>Protección efectiva de derechos fundamentales mediante Amparo Constitucional, Hábeas Corpus y Hábeas Data.</p>
            </div>
            <div className="card">
              <h3>Derecho Internacional</h3>
              <p>Representación estratégica ante misiones consulares y organismos multilaterales para la diáspora venezolana.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
