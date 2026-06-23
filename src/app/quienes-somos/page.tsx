import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Quiénes Somos | Mac Consultores Jurídicos & Asociados',
  description: 'Conozca nuestra trayectoria y equipo.',
};

export default function QuienesSomos() {
  return (
    <main className="page-firma">
      <header className="page-header" style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-soft)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">Nuestra Firma</span>
          <h1>Trayectoria y Excelencia</h1>
        </div>
      </header>

      <section className="bg-soft">
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <h2 className="section-title">Cimientos sólidos para desafíos complejos.</h2>
              <p>
                En Mac Consultores Jurídicos & Asociados, entendemos el derecho como una disciplina de alta precisión. 
                Nuestra práctica se define por la integridad, el rigor técnico y la capacidad de anticipación estratégica.
              </p>
              <Link href="/nuestro-ceo" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Conocer a nuestro CEO
              </Link>
            </div>
            <div className="img-reveal">
              <picture>
                <img src="/assets/img/RECEPCION_2_OPT.jpg" alt="Firma" width="100%" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
