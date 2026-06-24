import React from 'react';
import Link from 'next/link';
import heroBg from '../../public/assets/img/OFICINA_PRINCIPAL.jpg';

export default function Hero({ dict, locale }: { dict: any, locale: string }) {
  return (
    <header className="hero" style={{ backgroundImage: `url(${heroBg.src})` }}>
      <div className="container">
        <div className="hero-content">

          <span className="section-tag">{dict?.tag || 'Rigor & Estrategia'}</span>
          <h1>{dict?.h1 || 'Arquitectura jurídica para casos de alta complejidad.'}</h1>
          <p>
            {dict?.desc || 'Defensa penal y constitucional diseñada a medida, con foco en la protección efectiva de derechos, patrimonio y reputación en entornos sensibles.'}
          </p>
          <div className="hero-btns" style={{ marginTop: '2.5rem' }}>
            <Link href={`/${locale}/contacto`} className="btn btn-primary">
              {dict?.btn || 'Solicitar consulta privada'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
