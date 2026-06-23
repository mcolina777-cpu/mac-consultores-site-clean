import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Venezolanos en el Exterior | Mac Consultores Jurídicos & Asociados',
  description: 'Gestión jurídica para venezolanos en el exterior. Trámites consulares, legales y representación remota.',
};

export default async function TramitesConsulares({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-tramites-consulares">
      <header className="page-header" style={{ textAlign: 'left', padding: '120px 0 40px', backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <span className="section-tag" >{dict?.tramites_consulares?.breadcrumb || "Servicios / Diáspora"}</span>
          <h1 style={{ marginBottom: '1.5rem' }} >{dict?.tramites_consulares?.h1 || "Gestión Jurídica para Venezolanos en el Exterior"}</h1>
          <p className="hero-subtitle" >{dict?.tramites_consulares?.subtitle || "Protegemos sus intereses en Venezuela desde cualquier lugar del mundo."}</p>
        </div>
      </header>

      <section className="intro-section" style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div className="grid-split">
            <div className="about-text">
              <p style={{ textAlign: 'left', maxWidth: '100%', marginBottom: 0 }} >{dict?.tramites_consulares?.intro_p || "La globalización y la diáspora venezolana han multiplicado los casos en los que las personas mantienen vínculos patrimoniales, familiares y procesales en el país, aun residiendo de forma permanente en el extranjero. Asimismo, atendemos a ciudadanos de otras nacionalidades que requieren soporte jurídico local confiable en Venezuela. En Mac Consultores Jurídicos &amp; Asociados brindamos una tutela judicial y extrajudicial efectiva, diseñada para quienes necesitan representación jurídica remota sin trasladarse al territorio nacional."}</p>
            </div>
            <div className="img-reveal">
              <picture>
                <source srcSet="/assets/img-webp/SALA_REUNIONES_1_OPT.webp" type="image/webp" />
                <img src="/assets/img/SALA_REUNIONES_1_OPT.jpg" alt="Sala de Reuniones Internacionales en Mac Consultores" width="2752" height="1536" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '4rem' }}>
            <span className="section-tag" >{dict?.tramites_consulares?.support?.tag || "Áreas de Soporte"}</span>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }} >{dict?.tramites_consulares?.support?.title || "Servicios Especializados para el Exterior"}</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <span className="section-tag">01</span>
              <h3 >{dict?.tramites_consulares?.support?.card_1?.title || "Práctica Consular"}</h3>
              <p >{dict?.tramites_consulares?.support?.card_1?.desc || "Apoderamiento legal y representación estratégica ante misiones consulares y autoridades migratorias para garantizar su movilidad y derechos fundamentales."}</p>
              <Link href="#practica-consular" className="card-link" >{dict?.tramites_consulares?.support?.card_1?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">02</span>
              <h3 >{dict?.tramites_consulares?.support?.card_2?.title || "Gestión Documental"}</h3>
              <p >{dict?.tramites_consulares?.support?.card_2?.desc || "Legalización internacional, Apostilla de La Haya y validación de documentos públicos con eficacia garantizada y rigor técnico procesal."}</p>
              <Link href="#gestion-documental" className="card-link" >{dict?.tramites_consulares?.support?.card_2?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">03</span>
              <h3 >{dict?.tramites_consulares?.support?.card_3?.title || "Derecho de Familia"}</h3>
              <p >{dict?.tramites_consulares?.support?.card_3?.desc || "Litigio especializado en casos de sustracción internacional de menores y ejecución de obligaciones alimentarias transnacionales con enfoque humano."}</p>
              <Link href="#derecho-familia" className="card-link" >{dict?.tramites_consulares?.support?.card_3?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">04</span>
              <h3 >{dict?.tramites_consulares?.support?.card_4?.title || "Sucesiones"}</h3>
              <p >{dict?.tramites_consulares?.support?.card_4?.desc || "Resolución de conflictos hereditarios y planificación patrimonial integral con activos o herederos dispersos en distintas jurisdicciones globales."}</p>
              <Link href="#sucesiones" className="card-link" >{dict?.tramites_consulares?.support?.card_4?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">05</span>
              <h3 >{dict?.tramites_consulares?.support?.card_5?.title || "Representación Judicial"}</h3>
              <p >{dict?.tramites_consulares?.support?.card_5?.desc || "Defensa técnica de alta gama en procesos penales, civiles o administrativos en territorio venezolano, sin requerir su traslado físico al país."}</p>
              <Link href="#representacion-judicial" className="card-link" >{dict?.tramites_consulares?.support?.card_5?.link || "LEER MÁS &rarr;"}</Link>
            </div>
            <div className="card">
              <span className="section-tag">06</span>
              <h3 >{dict?.tramites_consulares?.support?.card_6?.title || "Poderes Estratégicos"}</h3>
              <p >{dict?.tramites_consulares?.support?.card_6?.desc || "Asesoría y redacción de mandatos y facultades especiales para que sus intereses patrimoniales y legales en Venezuela estén siempre blindados."}</p>
              <Link href="#poderes-estrategicos" className="card-link" >{dict?.tramites_consulares?.support?.card_6?.link || "LEER MÁS &rarr;"}</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="form-card">
            <h2 className="serif" style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '2rem' }} >{dict?.tramites_consulares?.form?.title || "Solicite Asistencia desde el Exterior"}</h2>
            <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)' }} >{dict?.tramites_consulares?.form?.desc || "Indíquenos su situación y el país donde reside. Un experto le contactará para coordinar su representación en Venezuela."}</p>
            <form action="https://formsubmit.co/infomacconsul@gmail.com" method="POST">
              <input type="hidden" name="_next" value="https://mac-consultores.vercel.app/tramites-consulares" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nueva solicitud de Trámites Consulares / Exterior" />
              
              <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.tramites_consulares?.form?.label_name || "Nombre y Apellido"}</label>
                  <input type="text" name="nombre" placeholder={dict?.tramites_consulares?.form?.placeholder_name || "Ej. Juan Pérez"} required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
                <div className="form-group">
                  <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.tramites_consulares?.form?.label_country || "País de Residencia"}</label>
                  <input type="text" name="pais" placeholder={dict?.tramites_consulares?.form?.placeholder_country || "Ej. España, Estados Unidos, Chile"} required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.tramites_consulares?.form?.label_message || "Mensaje / Requerimiento"}</label>
                <textarea name="mensaje" rows={5} placeholder={dict?.tramites_consulares?.form?.placeholder_message || "Describa brevemente el trámite o caso judicial en Venezuela"} required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" >{dict?.tramites_consulares?.form?.btn || "ENVIAR SOLICITUD DE EVALUACIÓN"}</button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
