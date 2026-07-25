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
    <main className="bg-soft py-6rem page-probono">
      <div className="container">
        {/* Hero / encabezado */}
        <div className="axial-header text-center mb-3rem">
          <span className="section-tag">
            {dict?.pro_bono_penal?.tag}
          </span>
          <h1 className="section-title">
            {dict?.pro_bono_penal?.h1}
          </h1>
          <p className="section-desc">
            {dict?.pro_bono_penal?.intro}
          </p>
        </div>

        {/* Bloque de texto: en qué consiste y condiciones */}
        <div className="layout-reading mb-3rem">
          <p className="mb-1-5rem">
            {dict?.pro_bono_penal?.p1}
          </p>
          <p className="mb-1-5rem">
            {dict?.pro_bono_penal?.p2}
          </p>
          <p className="mb-1-5rem">
            {dict?.pro_bono_penal?.p3}
          </p>
        </div>

        {/* Formulario exclusivo pro bono (maqueta básica) */}
        <div className="form-card mb-3rem">
          <h2 className="serif section-title mb-1-5rem">
            {dict?.pro_bono_penal?.form_title}
          </h2>
          <p className="section-desc mb-2rem">
            {dict?.pro_bono_penal?.form_desc}
          </p>

          <form className="form-grid">
            <div className="form-field">
              <label htmlFor="nombre">{dict?.pro_bono_penal?.form_nombre_label}</label>
              <input id="nombre" name="nombre" type="text" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">{dict?.pro_bono_penal?.form_email_label}</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className="form-field">
              <label htmlFor="telefono">{dict?.pro_bono_penal?.form_telefono_label}</label>
              <input id="telefono" name="telefono" type="tel" />
            </div>

            <div className="form-field">
              <label htmlFor="resumen">{dict?.pro_bono_penal?.form_resumen_label}</label>
              <textarea id="resumen" name="resumen" rows={5} required />
            </div>

            <div className="form-field">
              <label htmlFor="victima">
                {dict?.pro_bono_penal?.form_victima_label}
              </label>
              <select id="victima" name="victima" required>
                <option value="">
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

            <div className="form-field">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="acepta_condiciones"
                  required
                />
                <span>{dict?.pro_bono_penal?.form_condiciones_text}</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {dict?.pro_bono_penal?.form_btn}
              </button>
            </div>
          </form>
        </div>

        {/* Enlace al PDF reglamento */}
        <div className="layout-reading">
          <p className="mb-1-5rem">
            {dict?.pro_bono_penal?.pdf_note}
          </p>
          <Link
            href="/docs/reglamento-pro-bono-penal-mac-consultores.pdf"
            className="card-action-link"
          >
            <span>{dict?.pro_bono_penal?.pdf_link}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
