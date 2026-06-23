import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Quiénes Somos | Mac Consultores Jurídicos & Asociados',
  description: 'Conozca nuestra trayectoria y equipo.',
};

export default async function QuienesSomos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-quienes-somos">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb" >{dict?.quienes_somos?.breadcrumb || "Inicio / La Firma"}</span>
          <h1 >{dict?.quienes_somos?.h1 || "Quiénes Somos"}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-split">
            <div className="about-content">
              <span className="section-tag" >{dict?.quienes_somos?.history?.tag || "Nuestra Historia"}</span>
              <h2 className="section-title" >{dict?.quienes_somos?.history?.title || "Una trayectoria definida por el rigor y la integridad."}</h2>
              <p >{dict?.quienes_somos?.history?.desc_1 || "Mac Consultores Jurídicos &amp; Asociados es una firma boutique con sede en Caracas, concebida para ofrecer soluciones legales de alta complejidad. Nuestra estructura se fundamenta en la excelencia técnica y el compromiso ético, brindando una defensa especializada y una asesoría estratégica que trasciende la práctica legal tradicional."}</p>
              <p className="mt-2" >{dict?.quienes_somos?.history?.desc_2 || "Entendemos que cada caso es único y requiere una arquitectura de solución propia. Por ello, integramos la experiencia forense con el respaldo académico de más de dos décadas de ejercicio profesional."}</p>
              
              <article className="card quienes-somos-card">
                <span className="section-tag" >{dict?.quienes_somos?.architecture?.tag || "Arquitectura jurídica para desafíos de alta complejidad"}</span>
                <h3 >{dict?.quienes_somos?.architecture?.title || "Conoce la historia y filosofía de la firma"}</h3>
                <p >{dict?.quienes_somos?.architecture?.desc || "Explora en detalle la trayectoria de Mac Consultores Jurídicos &amp; Asociados, nuestro modelo de asesoría integral y los principios que orientan cada decisión estratégica."}</p>
                <Link href={`/${locale}/quienes-somos-detalle`} className="card-link" >{dict?.quienes_somos?.architecture?.link || "LEER MÁS &rarr;"}</Link>
              </article>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/OFICINA_1.webp" type="image/webp" />
                <img src="/assets/img/OFICINA_1.jpg" alt="Sede de Mac Consultores Jurídicos & Asociados" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: ESTRATEGIAS REPRESENTATIVAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag" >{dict?.firma?.strategies?.tag || "Estrategias representativas"}</span>
            <h2 className="section-title" >{dict?.firma?.strategies?.title || "Estrategias que reflejan nuestra forma de litigar"}</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <span className="section-tag" >{dict?.firma?.strategies?.case_selection?.tag || "Selección de casos"}</span>
              <h3 >{dict?.firma?.strategies?.case_selection?.title || "Priorización de casos con viabilidad real"}</h3>
              <p >{dict?.firma?.strategies?.case_selection?.desc || "Priorizamos casos con viabilidad jurídica real, tras un análisis riguroso de los hechos y la normativa aplicable. Esta metodología evita litigios innecesarios y alinea expectativas con escenarios jurídicamente posibles."}</p>
            </article>

            <article className="card">
              <span className="section-tag" >{dict?.firma?.strategies?.case_theory?.tag || "Teoría del caso"}</span>
              <h3 >{dict?.firma?.strategies?.case_theory?.title || "Teoría del caso como eje de la defensa"}</h3>
              <p >{dict?.firma?.strategies?.case_theory?.desc || "Cada asunto se estructura desde el inicio con una teoría del caso clara, coherente y verificable. Integramos hechos, prueba y derecho en una narrativa jurídica sólida que guía toda la actuación procesal, desde la primera diligencia hasta el cierre del caso."}</p>
              <Link href={`/${locale}/estrategia-teoria-del-caso`} className="news-link">
                <span>{dict?.firma?.strategies?.read_more || 'LEER MÁS →'}</span>
              </Link>
            </article>

            <article className="card">
              <span className="section-tag" >{dict?.firma?.strategies?.representative_scenarios?.tag || "Escenarios representativos"}</span>
              <h3 >{dict?.firma?.strategies?.representative_scenarios?.title || "Estrategias aplicadas en contextos sensibles"}</h3>
              <p >{dict?.firma?.strategies?.representative_scenarios?.desc || "Desde investigaciones penales económicas contra empresas hasta acciones de amparo constitucional, nuestro enfoque se centra en anticipar riesgos, asegurar la cadena probatoria y proteger la reputación del cliente en cada decisión estratégica."}</p>
              <Link href={`/${locale}/estrategia-escenarios-representativos`} className="news-link">
                <span>{dict?.firma?.strategies?.read_more || 'LEER MÁS →'}</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES INSTITUCIONALES */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag" >{dict?.quienes_somos?.values?.tag || "Valores Institucionales"}</span>
            <h2 className="section-title" >{dict?.quienes_somos?.values?.title || "Nuestros Pilares"}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="icon">⚖️</div>
              <h3 >{dict?.quienes_somos?.values?.card_1?.title || "Visión Estratégica"}</h3>
              <p >{dict?.quienes_somos?.values?.card_1?.desc || "No solo reaccionamos ante el conflicto; construimos blindajes preventivos y anticipamos riesgos para proteger los intereses de nuestros clientes."}</p>
            </div>
            <div className="card">
              <div className="icon">🛡️</div>
              <h3 >{dict?.quienes_somos?.values?.card_2?.title || "Rigor Técnico"}</h3>
              <p >{dict?.quienes_somos?.values?.card_2?.desc || "Cada actuación está sustentada en un profundo dominio dogmático y un análisis exhaustivo de la realidad jurídica contemporánea."}</p>
            </div>
            <div className="card">
              <div className="icon">🔒</div>
              <h3 >{dict?.quienes_somos?.values?.card_3?.title || "Reserva Profesional"}</h3>
              <p >{dict?.quienes_somos?.values?.card_3?.desc || "La discreción y la confidencialidad son la base de nuestra relación con el cliente, garantizando un entorno de máxima confianza."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section>
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_DE_REUNIONES_4.webp" type="image/webp" />
                <img src="/assets/img/SALA_DE_REUNIONES_4.jpg" alt="Estrategia Legal" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
            <div className="vision-text">
              <h2 className="serif" style={{ fontSize: '2.2rem', marginBottom: '2rem', lineHeight: 1.1 }} >{dict?.quienes_somos?.mission?.quote || "&quot;Nuestra misión es transformar desafíos legales en escenarios de seguridad y crecimiento.&quot;"}</h2>
              <p >{dict?.quienes_somos?.mission?.desc || "Buscamos ser el referente de excelencia en el mercado jurídico venezolano, destacando por nuestra capacidad de resolver asuntos de alta sensibilidad técnica con resultados sólidos y transparentes."}</p>
              <Link href={`/${locale}/nuestro-ceo`} className="btn btn-outline btn-director" >{dict?.quienes_somos?.mission?.btn || "CONOCE A NUESTRO DIRECTOR GENERAL"}</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
