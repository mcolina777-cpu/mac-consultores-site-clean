import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";
import { getRoute } from "@/lib/routes";
import ContactFormSelectors from './ContactFormSelectors';
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

type ContactoProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Contacto({ params, searchParams }: ContactoProps) {
  const { locale } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const isSuccess = resolvedSearchParams?.sent === 'success';
  const dict = await getDictionary(locale);
  const isEs = locale === 'es';

  return (
    <main className="page-contacto">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{dict?.contacto?.breadcrumb}</span>
          <h1>{dict?.contacto?.h1}</h1>
        </div>
      </header>

      <section>
        <style>{`
          @media (min-width: 769px) {
            .page-contacto .contact-grid-start {
              grid-template-columns: 380px 1fr;
              gap: 2.5rem;
              align-items: start;
            }
            .page-contacto .contact-info.sticky-card {
              position: sticky;
              top: 120px;
              align-self: start;
            }
          }
          @media (max-width: 768px) {
            .page-contacto .contact-info.sticky-card {
              position: static !important;
            }
          }
        `}</style>
        <div className="container">
          <div className="grid-2 contact-grid-start">
            <div className="contact-info sticky-card">
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
              <div className="form-card">
                {isSuccess && dict?.contacto?.form?.success && (
                  <div
                    className="form-success-message text-sm mb-1-5rem"
                    style={{
                      padding: '1rem 1.25rem',
                      backgroundColor: '#f0fdf4',
                      borderRadius: '4px',
                      border: '1px solid #bbf7d0',
                      borderLeft: '4px solid #16a34a',
                      color: '#166534',
                      lineHeight: '1.5',
                    }}
                    role="status"
                  >
                    {dict.contacto.form.success}
                  </div>
                )}

                <h3 className="serif heading-md text-primary mb-1-5rem">
                  {dict?.contacto?.form?.title}
                </h3>
                
                {dict?.contacto?.form?.admission_hint && (
                  <div
                    className="admission-hint text-sm mb-1-5rem"
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(0,0,0,0.03)',
                      borderRadius: '4px',
                      borderLeft: '3px solid var(--color-primary)',
                      lineHeight: '1.5',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {dict.contacto.form.admission_hint}
                  </div>
                )}

                <div
                  className="probono-contact-hint text-sm mb-1-5rem"
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.03)',
                    borderRadius: '4px',
                    borderLeft: '3px solid var(--color-primary)',
                    lineHeight: '1.5',
                  }}
                >
                  <strong>
                    {locale === 'es'
                      ? '¿Solicita una evaluación Pro Bono?'
                      : 'Are you requesting a pro bono evaluation?'}
                  </strong>
                  <br />
                  {locale === 'es'
                    ? 'Seleccione “Solicitud de Evaluación Pro Bono” en el campo “Motivo principal de su consulta”.'
                    : 'Select “Pro Bono Evaluation Request” in the “Main reason for inquiry” field.'}
                </div>
                
                <form
                  action="https://formsubmit.co/infomacconsul@gmail.com"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_next"
                    value={`https://mac-consultores-site-clean.vercel.app/${locale}/contact?sent=success`}
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

                  <div className="form-group mb-1rem">
                    <label className="form-label">
                      {locale === 'es' ? 'País' : 'Country'}
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      name="pais"
                      placeholder={locale === 'es' ? 'Indique su país' : 'Enter your country'}
                      required
                    />
                  </div>

                  <ContactFormSelectors dict={dict} locale={locale} />

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
                  </div>

                  {/* Alcance de la solicitud */}
                  <div
                    className="scope-disclaimer-box text-sm mb-1-5rem"
                    style={{
                      padding: '1.25rem',
                      backgroundColor: 'rgba(0,0,0,0.02)',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color, #e5e7eb)',
                      borderLeft: '4px solid var(--color-primary)',
                      lineHeight: '1.6',
                    }}
                  >
                    <h4
                      className="serif font-bold text-primary mb-0-75rem"
                      style={{ fontSize: '1.05rem' }}
                    >
                      {isEs ? 'Alcance de la solicitud' : 'Scope of the request'}
                    </h4>
                    <p className="mb-0-75rem text-muted">
                      {isEs
                        ? 'Este canal no está habilitado para emitir criterios legales ni indicar qué debe hacer en su caso concreto. Su finalidad es exclusivamente administrativa: recopilar información básica para valorar la pertinencia del asunto y, según corresponda, coordinar una consulta profesional privada o evaluar una solicitud Pro Bono.'
                        : 'This channel is not authorized to issue legal criteria or indicate what you should do in your specific case. Its purpose is exclusively administrative: to collect basic information to evaluate the relevance of the matter and, as appropriate, coordinate a private professional consultation or evaluate a Pro Bono application.'}
                    </p>
                    <p className="mb-0-75rem text-muted">
                      {isEs
                        ? 'Las consultas profesionales privadas están sujetas a honorarios, facturables por hora o según el alcance del encargo. La eventual admisión de una solicitud dentro del Programa Pro Bono se rige por su Reglamento y está limitada a orientación jurídica inicial de carácter técnico y documental.'
                        : 'Private professional consultations are subject to fees, billable hourly or according to the scope of the engagement. The eventual admission of an application within the Pro Bono Program is governed by its Regulations and is limited to initial technical and documentary legal guidance.'}
                    </p>
                    <p className="mb-0-75rem text-muted">
                      {isEs
                        ? 'El Programa Pro Bono no incluye litigación, comparecencias ante tribunales o el Ministerio Público, asistencia a audiencias, representación judicial, patrocinio ni seguimiento procesal. Si una solicitud vinculada con una denuncia penal fuese admitida, cualquier orientación o apoyo documental estará limitado al alcance que determine la firma y, en su caso, a un máximo de dos (2) folios.'
                        : 'The Pro Bono Program does not include litigation, appearances before courts or prosecutors, attendance at hearings, judicial representation, legal sponsorship, or procedural monitoring. If an application related to a criminal complaint is admitted, any orientation or documentary support will be limited to the scope determined by the firm and, where applicable, to a maximum of two (2) pages.'}
                    </p>
                    <p className="mb-0 text-muted">
                      {isEs
                        ? 'Para actuaciones de representación privada —incluidas denuncias o querellas, trámites consulares y comparecencias en nombre del cliente— será indispensable un poder de representación previamente analizado y redactado de forma personalizada.'
                        : 'For private representation matters—including complaints, lawsuits, consular procedures, and appearances on the client\'s behalf—a power of attorney previously analyzed and drafted in a personalized manner will be indispensable.'}
                    </p>
                  </div>

                  {/* Casillas obligatorias de admisión legal */}
                  <div className="form-group mb-1rem" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <input
                      type="checkbox"
                      id="checkbox_veracidad"
                      name="declaracion_veracidad"
                      required
                      style={{ marginTop: '0.25rem', cursor: 'pointer' }}
                    />
                    <label htmlFor="checkbox_veracidad" className="text-sm" style={{ cursor: 'pointer', lineHeight: 1.4 }}>
                      {isEs
                        ? 'Declaro que la información proporcionada es completa y veraz.'
                        : 'I declare that the information provided is complete and truthful.'}
                    </label>
                  </div>

                  <div className="form-group mb-1-5rem" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <input
                      type="checkbox"
                      id="checkbox_no_relacion"
                      name="declaracion_no_relacion"
                      required
                      style={{ marginTop: '0.25rem', cursor: 'pointer' }}
                    />
                    <label htmlFor="checkbox_no_relacion" className="text-sm" style={{ cursor: 'pointer', lineHeight: 1.4 }}>
                      {isEs
                        ? 'Entiendo que el envío de esta solicitud no crea una relación abogado–cliente, no implica admisión del asunto y no genera obligación de representación por parte de la firma.'
                        : 'I understand that submitting this request does not create an attorney-client relationship, does not imply acceptance of the matter, and does not create an obligation of representation by the firm.'}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    {dict?.contacto?.form?.btn}
                  </button>
                  
                  <p className="form-hint form-hint-text">
                    {dict?.contacto?.form?.hint_relation}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE INSTITUCIONAL */}
      <section className="bg-soft section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {isEs ? 'CONFIDENCIALIDAD Y ADMISIÓN TÉCNICA' : 'CONFIDENTIALITY AND TECHNICAL ADMISSION'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? 'Toda comunicación inicial merece reserva, criterio y evaluación profesional.'
                : 'Every initial communication deserves discretion, judgment, and professional assessment.'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Cada asunto es examinado individualmente bajo criterios de confidencialidad, rigor jurídico y viabilidad técnica, antes de determinar el alcance de cualquier eventual relación profesional.'
                : 'Each matter is individually assessed under standards of confidentiality, legal rigor, and technical viability before determining the scope of any potential professional relationship.'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href={getRoute(locale as any, 'about.confidencialidad_secreto')} className="btn btn-primary">
                {isEs ? 'CONOCER NUESTRO COMPROMISO' : 'LEARN ABOUT OUR COMMITMENT'}
              </Link>

              <Link href={`/${locale}`} className="btn btn-secondary">
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
