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
  };
}

export default async function ProBonoPenal({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="page-probono">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.pro_bono_penal?.tag}</span>
          <h1>{dict?.pro_bono_penal?.h1}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-2 contact-grid-start">
            
            {/* Columna Izquierda: Información */}
            <div className="contact-info">
              <p className="text-lg mb-2rem">
                {dict?.pro_bono_penal?.intro}
              </p>

              <div className="layout-reading mb-3rem">
                <p className="mb-1-5rem">{dict?.pro_bono_penal?.p1}</p>
                <p className="mb-1-5rem">{dict?.pro_bono_penal?.p2}</p>
                <p className="mb-1-5rem">{dict?.pro_bono_penal?.p3}</p>
              </div>

              {/* Enlace al PDF reglamento */}
              <div className="alt-channels mt-3rem">
                <h4 className="contact-subtitle contact-subtitle-border mb-1-5rem">
                  {dict?.pro_bono_penal?.pdf_note}
                </h4>
                <div className="channels-grid grid-1-col gap-1rem">
                  <Link
                    href="/docs/reglamento-pro-bono-penal-mac-consultores.pdf"
                    className="channel-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="channel-icon">📄</span>
                    <div className="channel-text">
                      <span className="channel-value">{dict?.pro_bono_penal?.pdf_link}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Formulario */}
            <div className="form-column">
              <div className="form-card sticky-card">
                <h3 className="serif heading-md text-primary mb-1-5rem">
                  {dict?.pro_bono_penal?.form_title}
                </h3>
                <p className="section-desc text-sm mb-2rem">
                  {dict?.pro_bono_penal?.form_desc}
                </p>

                <form>
                  <div className="form-group mb-1rem">
                    <label className="form-label" htmlFor="nombre">
                      {dict?.pro_bono_penal?.form_nombre_label}
                    </label>
                    <input className="form-input" id="nombre" name="nombre" type="text" required />
                  </div>

                  <div className="grid-2 form-grid-mobile mb-1rem gap-20px">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        {dict?.pro_bono_penal?.form_email_label}
                      </label>
                      <input className="form-input" id="email" name="email" type="email" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="telefono">
                        {dict?.pro_bono_penal?.form_telefono_label}
                      </label>
                      <input className="form-input" id="telefono" name="telefono" type="tel" />
                    </div>
                  </div>

                  <div className="form-group mb-1-5rem">
                    <label className="form-label" htmlFor="victima">
                      {dict?.pro_bono_penal?.form_victima_label}
                    </label>
                    <select className="form-input font-inherit" id="victima" name="victima" required defaultValue="">
                      <option value="" disabled>
                        {dict?.pro_bono_penal?.form_victima_option_default}
                      </option>
                      <option value="si">
                        {dict?.pro_bono_penal?.form_victima_option_si}
                      </option>
                      <option value="no">
                        {dict?.pro_bono_penal?.form_victima_option_no}
                      </option>
                    </select>
                  </div>

                  <div className="form-group mb-1-5rem">
                    <label className="form-label" htmlFor="resumen">
                      {dict?.pro_bono_penal?.form_resumen_label}
                    </label>
                    <textarea className="form-textarea" id="resumen" name="resumen" rows={5} required></textarea>
                  </div>

                  <div className="form-group mb-1-5rem">
                    <label className="checkbox-label flex items-start gap-2">
                      <input type="checkbox" name="acepta_condiciones" required className="mt-1" />
                      <span className="text-sm">{dict?.pro_bono_penal?.form_condiciones_text}</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    {dict?.pro_bono_penal?.form_btn}
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
