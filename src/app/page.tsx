import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="daily-insight">
        <div className="container">
          <div className="daily-insight-inner">
            <span className="section-tag daily-insight-tag">Insight Jurídico del Día</span>
            <h2 className="daily-insight-concept is-loaded" id="daily-insight-concept">
              Prevención Estratégica
            </h2>
            <p className="daily-insight-definition is-loaded" id="daily-insight-definition">
              La anticipación y el blindaje corporativo previenen el 80% de las contingencias penales económicas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="grid-split">
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/RECEPCION_2_OPT.webp" type="image/webp" />
                <img src="/assets/img/RECEPCION_2_OPT.jpg" alt="Recepción" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
            <div className="about-text">
              <span className="section-tag" data-i18n="about.tag">Nuestra Firma</span>
              <h2 className="section-title" data-i18n="about.title">Cimientos sólidos para desafíos complejos.</h2>
              <p data-i18n="about.desc_1">En Mac Consultores Jurídicos &amp; Asociados, entendemos el derecho como una disciplina de alta precisión. Nuestra práctica se define por la integridad, el rigor técnico y la capacidad de anticipación estratégica en cada etapa del proceso.</p>
              <p data-i18n="about.desc_2">Liderados por el Abg. Marco A. Colina G., combinamos más de dos décadas de experiencia en el litigio penal y constitucional con una visión académica de vanguardia, garantizando resultados sólidos y éticos para una clientela nacional e internacional.</p>
              <Link href="/quienes-somos" className="btn btn-outline" style={{ marginTop: '1rem' }} data-i18n="about.btn">
                Conocer nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESTRATEGIAS REPRESENTATIVAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag" data-i18n="home.strategies.tag">Estrategias representativas</span>
            <h2 className="section-title" data-i18n="home.strategies.title">Estrategias que reflejan nuestra forma de litigar</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="section-tag" data-i18n="home.strategies.case_selection.tag">Selección de casos</span>
              <h3 data-i18n="home.strategies.case_selection.title">Priorización de casos con viabilidad real</h3>
              <p data-i18n="home.strategies.case_selection.desc">Priorizamos casos con viabilidad jurídica real, tras un análisis riguroso de los hechos y la normativa aplicable.</p>
            </article>

            <article className="card">
              <span className="section-tag" data-i18n="home.strategies.case_theory.tag">Teoría del caso</span>
              <h3 data-i18n="home.strategies.case_theory.title">Teoría del caso como eje de la defensa</h3>
              <p data-i18n="home.strategies.case_theory.desc">Cada asunto se estructura desde el inicio con una teoría del caso clara, coherente y verificable.</p>
              <Link href="/estrategia-teoria-del-caso" className="news-link"><span>LEER MÁS &rarr;</span></Link>
            </article>

            <article className="card">
              <span className="section-tag" data-i18n="home.strategies.representative_scenarios.tag">Escenarios representativas</span>
              <h3 data-i18n="home.strategies.representative_scenarios.title">Estrategias aplicadas en contextos sensibles</h3>
              <p data-i18n="home.strategies.representative_scenarios.desc">En investigaciones penales económicas y acciones de amparo, nuestro enfoque combina análisis jurídico y cuidado de la prueba.</p>
              <Link href="/estrategia-escenarios-representativos" className="news-link"><span>LEER MÁS &rarr;</span></Link>
            </article>
          </div>
        </div>
      </section>
      
      {/* ESPECIALIDADES */}
      <section>
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag" data-i18n="specialties.tag">Especialidades</span>
            <h2 className="section-title" data-i18n="specialties.title">Áreas de Práctica Estratégica</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3 data-i18n="specialties.card_1.title">Defensa Penal Técnica</h3>
              <p data-i18n="specialties.card_1.desc">Estrategias de defensa integral en asuntos penales de alta complejidad, criminalidad económica y delitos informáticos.</p>
              <Link href="/servicios" style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px' }}>
                <span data-i18n="specialties.details_link">VER DETALLES &rarr;</span>
              </Link>
            </div>
            <div className="card">
              <h3 data-i18n="specialties.card_2.title">Tutela Constitucional</h3>
              <p data-i18n="specialties.card_2.desc">Protección efectiva de derechos fundamentales mediante Amparo Constitucional, Hábeas Corpus y Hábeas Data.</p>
              <Link href="/servicios" style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px' }}>
                <span data-i18n="specialties.details_link">VER DETALLES &rarr;</span>
              </Link>
            </div>
            <div className="card">
              <h3 data-i18n="specialties.card_3.title">Derecho Internacional</h3>
              <p data-i18n="specialties.card_3.desc">Representación estratégica ante misiones consulares y organismos multilaterales para la diáspora venezolana.</p>
              <Link href="/tramites-consulares" style={{ marginTop: 'auto', color: 'var(--accent)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px' }}>
                <span data-i18n="specialties.details_link">VER DETALLES &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
