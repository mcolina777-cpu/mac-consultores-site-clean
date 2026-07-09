import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';
  const title = dict?.seo?.contacto?.title || (isEs ? 'Contacto | Mac Consultores Jurídicos & Asociados' : 'Contact | Mac Consultores Jurídicos & Asociados');
  const description = dict?.seo?.contacto?.description || (isEs 
    ? 'Contáctenos para una consulta profesional de alta complejidad.' 
    : 'Contact us for a highly complex professional consultation.');
  
  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/contact`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/contact`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/contact`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'es': esUrl,
        'en': enUrl,
      },
    },
    openGraph: {
      title: dict?.seo?.contacto?.og_title || title,
      description: dict?.seo?.contacto?.og_description || description,
      url,
      siteName: 'Mac Consultores Jurídicos & Asociados',
      images: [
        {
          url: '/assets/img/logo-mac-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Logo de Mac Consultores Jurídicos & Asociados',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict?.seo?.contacto?.og_title || title,
      description: dict?.seo?.contacto?.og_description || description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function Contacto({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="page-contacto">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.contacto?.breadcrumb}</span>
          <h1>{dict?.contacto?.h1}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-2 contact-grid-start">
            <div className="contact-info">
              <span className="section-tag">{dict?.contacto?.info?.tag}</span>

              {/* AJUSTE 1: título sin margen excesivo */}
              <h2 className="section-title">
                {dict?.contacto?.info?.title}
              </h2>

              <p>{dict?.contacto?.info?.desc}</p>
              
              <div className="contact-list contact-info-list mt-2rem">
                <div className="contact-item mb-0">
                  <h4 className="contact-subtitle">{dict?.contacto?.info?.hq}</h4>
                  <p className="mb-0">{dict?.footer?.location}</p>
                </div>
                <div className="contact-item mb-0">
                  <h4 className="contact-subtitle">{dict?.contacto?.info?.email}</h4>
                  <p className="mb-0">
                    <a className="text-accent-bold" href="mailto:infomacconsul@gmail.com">
                      infomacconsul@gmail.com
                    </a>
                  </p>
                </div>
                <div className="contact-item mb-0">
                  <h4 className="contact-subtitle">{dict?.contacto?.info?.hours}</h4>
                  <p className="mb-0">{dict?.contacto?.info?.hours_val}</p>
                </div>
              </div>

              <div className="alt-channels mt-3rem">
                <h4 className="contact-subtitle contact-subtitle-border mb-1-5rem">
                  {dict?.contacto?.channels?.title}
                </h4>
                
                <div className="channels-grid grid-1-col gap-1rem">
                  <a href="tel:+584241950908" className="channel-card">
                    <span className="channel-icon">📞</span>
                    <div className="channel-text">
                      <span className="channel-label">{dict?.contacto?.channels?.phone1}</span>
                      <span className="channel-value">+58 424-195-09-08</span>
                    </div>
                  </a>
                  
                  <a href="tel:+582124142324" className="channel-card">
                    <span className="channel-icon">☎️</span>
                    <div className="channel-text">
                      <span className="channel-label">{dict?.contacto?.channels?.landline}</span>
                      <span className="channel-value">+58 212-414-23-24</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://meet.google.com/npx-yhyh-cxy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-card"
                  >
                    <span className="channel-icon">💻</span>
                    <div className="channel-text">
                      <span className="channel-label">{dict?.contacto?.channels?.virtual}</span>
                      <span className="channel-value">Google Meet (Previa cita)</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="social-channels mt-3rem">
                <h4 className="contact-subtitle contact-subtitle-border mb-1-5rem">
                  {dict?.contacto?.channels?.follow}
                </h4>
                
                {/* AJUSTE 2: asegurar alineación y flex-wrap ordenado */}
                <div className="social-cards flex-wrap gap-1-5rem">
                  <a
                    href="https://www.linkedin.com/in/mac-consultores-jurídicos-b00473277?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-brand-card"
                  >
                    <div className="brand-avatar">
                      <img src="/assets/img/logo-mac-nuevo.jpeg" alt="Mac Consultores Jurídicos Logo" />
                    </div>
                    <div className="brand-text">
                      <span className="brand-name">LinkedIn</span>
                      <span className="brand-handle">Perfil Oficial</span>
                    </div>
                  </a>

                  <a
                    href="https://x.com/MacConsultoresV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-brand-card"
                    aria-label="Perfil oficial en X (Twitter)"
                  >
                    <div className="brand-avatar">
                      <img src="/assets/img/logo-mac-nuevo.jpeg" alt="Mac Consultores Jurídicos Logo" />
                    </div>
                    <div className="brand-text">
                      <span className="brand-name">X (Twitter)</span>
                      <span className="brand-handle">@MacConsultoresV</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="form-column">
              <div className="form-card sticky-card">
                <h3 className="serif heading-md text-primary mb-1-5rem">
                  {dict?.contacto?.form?.title}
                </h3>
                
                {dict?.contacto?.form?.admission_hint && (
                  <p
                    className="admission-hint text-sm mb-1-5rem"
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(0,0,0,0.03)',
                      borderRadius: '4px',
                      borderLeft: '3px solid var(--color-primary)',
                      lineHeight: '1.5',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: dict.contacto.form.admission_hint.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong>$1</strong>'
                      ),
                    }}
                  ></p>
                )}
                
                <form
                  action="https://formsubmit.co/infomacconsul@gmail.com"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_next"
                    value="https://mac-consultores.vercel.app/contacto"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva solicitud de admisión web"
                  />

                  <div className="grid-2 form-grid-mobile mb-1rem gap-20px">
                    <div className="form-group">
                      <label className="form-label">
                        {dict?.contacto?.form?.label_name}
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="nombre"
                        placeholder={dict?.contacto?.form?.placeholder_name}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        {dict?.contacto?.form?.label_email}
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder={dict?.contacto?.form?.placeholder_email}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group mb-1rem">
                    <label className="form-label">
                      {dict?.contacto?.form?.label_role}
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      name="profesion"
                      placeholder={dict?.contacto?.form?.placeholder_role}
                      required
                    />
                  </div>

                  <div className="form-group mb-1-5rem">
                    <label className="form-label">
                      {dict?.contacto?.form?.label_reason}
                    </label>
                    <select
                      className="form-input font-inherit"
                      name="motivo"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {dict?.contacto?.form?.reason_default}
                      </option>
                      <option value="Defensa Penal Preventiva">
                        {dict?.contacto?.form?.reason_opt1}
                      </option>
                      <option value="Proceso Penal en Curso">
                        {dict?.contacto?.form?.reason_opt2}
                      </option>
                      <option value="Amparo Constitucional">
                        {dict?.contacto?.form?.reason_opt3}
                      </option>
                      <option value="Asesoría Corporativa / Compliance">
                        {dict?.contacto?.form?.reason_opt4}
                      </option>
                      <option value="Otros">
                        {dict?.contacto?.form?.reason_opt6}
                      </option>
                    </select>
                  </div>

                  <div className="form-group mb-1-5rem">
                    <label className="form-label">
                      {dict?.contacto?.form?.label_penal}
                    </label>
                    <select
                      className="form-input font-inherit"
                      name="naturaleza-penal"
                      defaultValue="No aplica"
                    >
                      <option value="No aplica">
                        {dict?.contacto?.form?.penal_default}
                      </option>
                      <option value="Delitos Económicos / Financieros">
                        {dict?.contacto?.form?.penal_opt1}
                      </option>
                      <option value="Delitos Informáticos">
                        {dict?.contacto?.form?.penal_opt2}
                      </option>
                      <option value="Delitos Ordinarios">
                        {dict?.contacto?.form?.penal_opt3}
                      </option>
                    </select>
                  </div>

                  <div className="form-group mb-1-5rem">
                    <label className="form-label">
                      {dict?.contacto?.form?.label_desc}
                    </label>
                    <textarea
                      className="form-textarea"
                      name="descripcion"
                      rows={4}
                      maxLength={500}
                      placeholder={dict?.contacto?.form?.placeholder_desc}
                      required
                    ></textarea>
                    <small className="form-hint form-hint-text">
                      {dict?.contacto?.form?.hint_admin}
                    </small>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    {dict?.contacto?.form?.btn}
                  </button>
                  
                  <p className="form-hint-center">
                    {dict?.contacto?.form?.hint_relation}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
