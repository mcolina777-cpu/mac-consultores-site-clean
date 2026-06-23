import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Servicios | Mac Consultores Jurídicos & Asociados',
  description: 'Nuestras áreas de práctica estratégica.',
};

export default async function Servicios({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-servicios">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb" >{dict?.breadcrumb || "Áreas de Excelencia"}</span>
          <h1 >{dict?.h1 || "Servicios Jurídicos"}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-split" style={{ marginBottom: '4rem' }}>
            <div className="about-text">
              <span className="section-tag" >{dict?.intro?.tag || "Áreas de Excelencia"}</span>
              <h2 className="serif section-title" style={{ marginBottom: 0 }} >{dict?.intro?.h2 || "Soluciones integrales diseñadas a la medida de los desafíos más exigentes."}</h2>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_REUNIONES_B_OPT.webp" type="image/webp" />
                <img src="/assets/img/SALA_REUNIONES_B_OPT.jpg" alt="Sala de Reuniones y Despacho en Mac Consultores" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>
          
          <div className="grid-2">
            <div className="card">
              <span className="section-tag">01</span>
              <h3 >{dict?.services?.card_1?.title || "Derecho Penal y Procesal Penal"}</h3>
              <p >{dict?.services?.card_1?.desc || "Asumimos la defensa técnica integral en procedimientos de alta complejidad, criminalidad económica y delitos financieros. Nos enfocamos en el control de garantías procesales y el diseño de estrategias de litigio sólidas."}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_1?.list || `<li>Defensa frente a acusaciones penales</li>
                <li>Recursos de Casación y Apelación</li>
                <li>Criminalidad Corporativa</li>
                <li>Legitimación de Capitales</li>` }}></ul>
              <Link href="/servicios#penal-procesal" className="card-link" >{dict?.services?.card_1?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">02</span>
              <h3 >{dict?.services?.card_2?.title || "Derecho Constitucional"}</h3>
              <p >{dict?.services?.card_2?.desc || "Protección efectiva de derechos fundamentales mediante la activación de mecanismos de tutela constitucional. Blindamos la seguridad jurídica de nuestros clientes frente a vulneraciones institucionales."}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_2?.list || `<li>Acción de Amparo Constitucional</li>
                <li>Hábeas Corpus y Hábeas Data</li>
                <li>Control de Convencionalidad</li>
                <li>Consultoría en Interpretación Normativa</li>` }}></ul>
              <Link href="/servicios#constitucional" className="card-link" >{dict?.services?.card_2?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">03</span>
              <h3 >{dict?.services?.card_3?.title || "Delitos Informáticos y Evidencia Digital"}</h3>
              <p >{dict?.services?.card_3?.desc || "Especialización en el abordaje jurídico de contingencias tecnológicas. Gestión de incidentes de seguridad, fraude electrónico y análisis legal de elementos probatorios digitales."}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_3?.list || `<li>Defensa en Delitos Informáticos</li>
                <li>Gestión de Fraude y Sabotaje Digital</li>
                <li>Auditoría Jurídica de Evidencia</li>
                <li>Protección de Privacidad de Datos</li>` }}></ul>
              <Link href="/servicios#delitos-informaticos" className="card-link" >{dict?.services?.card_3?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">04</span>
              <h3 >{dict?.services?.card_4?.title || "Consultoría Jurídica Preventiva"}</h3>
              <p >{dict?.services?.card_4?.desc || "Diseño de estructuras legales para la mitigación de riesgos. Acompañamos a empresas y particulares en la toma de decisiones estratégicas para evitar contingencias procesales."}</p>
              <ul className="service-list"  dangerouslySetInnerHTML={{ __html: dict?.services?.card_4?.list || `<li>Compliance y Cumplimiento Normativo</li>
                <li>Gestión de Riesgo Legal</li>
                <li>Estructuración Contractual Compleja</li>
                <li>Asesoría en Gobernanza Corporativa</li>` }}></ul>
              <Link href="/servicios#consultoria-preventiva" className="card-link" >{dict?.services?.card_4?.link || "LEER MÁS &rarr;"}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <h2 className="serif section-title" >{dict?.cta?.title || "¿Requiere una evaluación estratégica de su situación legal?"}</h2>
          <p className="section-desc" >{dict?.cta?.desc || "Nuestro equipo de expertos está preparado para analizar su caso con el rigor técnico que merece."}</p>
          <Link href="/contacto" className="btn btn-primary" >{dict?.cta?.btn || "INICIAR CONSULTA PRIVADA"}</Link>
        </div>
      </section>

    </main>
  );
}
