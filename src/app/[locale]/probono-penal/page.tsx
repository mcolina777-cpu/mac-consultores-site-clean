import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.pro_bono_penal?.seo_title,
    description: dict?.pro_bono_penal?.seo_desc,
    alternates: {
      canonical: `https://macconsultoresjuridicos.com/${locale}/probono-penal`,
    },
  };
}

export default async function ProBonoPenal({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.pro_bono_penal;

  return (
    <main className="page-probono">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{data?.tag}</span>
          <h1 className="serif">{data?.h1}</h1>
          <p className="hero-subtitle text-muted mt-1rem">{data?.subtitle}</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2 contact-grid-start">
            
            {/* Columna Izquierda: Información Institucional y Enlace al Reglamento */}
            <div className="contact-info">
              <p className="text-lg mb-1-5rem font-semibold text-primary">
                {data?.intro}
              </p>
              
              <div className="layout-reading mb-2-5rem">
                <p className="mb-1-5rem text-justify">{data?.p1}</p>
                <p className="mb-1-5rem text-justify">{data?.p2}</p>
                <p className="mb-1-5rem text-justify">{data?.p3}</p>
              </div>

              {/* Bloque de Acceso al Reglamento */}
              <div className="alt-channels mt-2rem">
                <h4 className="contact-subtitle contact-subtitle-border mb-1-5rem">
                  {data?.reglamento_section_title}
                </h4>
                
                <div className="channels-grid grid-1-col gap-1rem">
                  {/* Botón 1 */}
                  <Link
                    href={`/${locale}/probono-penal/reglamento`}
                    className="channel-card"
                  >
                    <span className="channel-icon">⚖️</span>
                    <div className="channel-text">
                      <span className="font-bold text-primary block">Consultar Reglamento Institucional en Línea →</span>
                      <span className="channel-value text-sm text-muted">Conozca los 17 artículos, principios rectores, límites de actuación y el procedimiento de selección.</span>
                    </div>
                  </Link>

                  {/* Botón 2 */}
                  <Link
                    href={`/${locale}/probono-penal/reglamento-completo`}
                    className="channel-card"
                  >
                    <span className="channel-icon">📄</span>
                    <div className="channel-text">
                      <span className="font-bold text-primary block">Consultar Reglamento Oficial</span>
                      <span className="channel-value text-sm text-muted">Documento institucional para consulta en línea.</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Lema de Compromiso */}
              <div className="mt-3rem p-1-5rem bg-soft rounded-8 border-subtle">
                <p className="serif text-center font-bold text-primary mb-0">
                  {data?.commitment_badge}
                </p>
              </div>
            </div>

            {/* Columna Derecha: Formulario de Postulación Sticky */}
            <div className="form-column">
              <div className="form-card sticky-card">
                <h3 className="serif heading-md text-primary mb-1-5rem">
                  {data?.form_title}
                </h3>
                <p className="section-desc text-sm mb-2rem">
                  {data?.form_desc}
                </p>
                <form>
                  <div className="form-group mb-1-5rem">
                    <label className="form-label">{data?.form_nombre_label}</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group mb-1-5rem">
                    <label className="form-label">{data?.form_email_label}</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group mb-1-5rem">
                    <label className="form-label">{data?.form_telefono_label}</label>
                    <input type="tel" className="form-control" required />
                  </div>
                  <div className="form-group mb-1-5rem">
                    <label className="form-label">{data?.form_victima_label}</label>
                    <select className="form-control" required>
                      <option value="">{data?.form_victima_option_default}</option>
                      <option value="si">{data?.form_victima_option_si}</option>
                      <option value="no">{data?.form_victima_option_no}</option>
                    </select>
                  </div>
                  <div className="form-group mb-1-5rem">
                    <label className="form-label">{data?.form_resumen_label}</label>
                    <textarea rows={4} className="form-control" required></textarea>
                  </div>
                  <div className="form-check mb-1-5rem">
                    <label className="text-xs text-muted">
                      <input type="checkbox" required className="mr-0-5rem" />
                      {data?.form_condiciones_text}
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    {data?.form_btn}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
