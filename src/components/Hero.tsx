import React from 'react';
import Link from 'next/link';


export default function Hero() {
  return (
    <header className="hero" style={{ backgroundImage: "url('/assets/img/MAC_HOME_2.jpg')" }}>
      <div className="container">
        <div className="hero-content">

          <span className="section-tag" data-i18n="hero.tag">Rigor &amp; Estrategia</span>
          <h1 data-i18n="hero.h1">Arquitectura jurídica para casos de alta complejidad.</h1>
          <p data-i18n="hero.desc">
            Defensa penal y constitucional diseñada a medida, con foco en la protección efectiva de derechos, patrimonio y reputación en entornos sensibles.
          </p>
          <div className="hero-btns" style={{ marginTop: '2.5rem' }}>
            <Link href="/contacto" className="btn btn-primary" data-i18n="hero.btn">
              Solicitar consulta privada
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
