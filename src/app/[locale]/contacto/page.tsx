import React from 'react';
import Link from 'next/link';
import { getDictionary } from "@/i18n/getDictionary";

export const metadata = {
  title: 'Contacto | Mac Consultores Jurídicos & Asociados',
  description: 'Contáctenos para una consulta profesional de alta complejidad.',
};

export default async function Contacto({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict: any = await getDictionary(locale);

  return (
    <main className="page-contacto">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb" >{dict?.contacto?.breadcrumb || "Inicio / Contacto"}</span>
          <h1 >{dict?.contacto?.h1 || "Programe una Consulta de Admisión"}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="contact-info">
              <span className="section-tag" >{dict?.contacto?.info?.tag || "Atención Estratégica"}</span>
              <h2 className="section-title" >{dict?.contacto?.info?.title || "Atendemos consultas presenciales y virtuales con estricta confidencialidad."}</h2>
              <p >{dict?.contacto?.info?.desc || "Debido a la naturaleza sensible de nuestros casos, operamos bajo un protocolo de admisión estricto. Complete el formulario detallado o contáctenos por nuestros canales directos para evaluar su requerimiento."}</p>
              
              <div className="contact-list">
                <div className="contact-item">
                  <h4 className="contact-subtitle" >{dict?.contacto?.info?.hq || "Sede Principal"}</h4>
                  <p >{dict?.footer?.location || "Caracas, Venezuela"}</p>
                </div>
                <div className="contact-item">
                  <h4 className="contact-subtitle" >{dict?.contacto?.info?.email || "Correo Electrónico"}</h4>
                  <p><a href="mailto:infomacconsul@gmail.com" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>infomacconsul@gmail.com</a></p>
                </div>
                <div className="contact-item">
                  <h4 className="contact-subtitle" >{dict?.contacto?.info?.hours || "Horario de Atención"}</h4>
                  <p >{dict?.contacto?.info?.hours_val || "Lunes a Viernes: 8:00 AM - 5:00 PM"}</p>
                </div>
              </div>
            </div>

            <div className="form-column">
              <div className="form-card">
                <h3 className="serif" style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }} >{dict?.contacto?.form?.title || "Formulario de Admisión Legal"}</h3>
                
                <form action="https://formsubmit.co/infomacconsul@gmail.com" method="POST">
                  <input type="hidden" name="_next" value="https://mac-consultores.vercel.app/contacto" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Nueva solicitud de admisión web" />

                  <div className="grid-2" style={{ marginBottom: '1rem', gap: '20px' }}>
                    <div className="form-group">
                      <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.contacto?.form?.label_name || "Nombre completo o Razón Social *"}</label>
                      <input type="text" name="nombre" placeholder={dict?.contacto?.form?.placeholder_name || "Ej. Juan Pérez"} required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                    <div className="form-group">
                      <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.contacto?.form?.label_email || "Correo electrónico *"}</label>
                      <input type="email" name="email" placeholder={dict?.contacto?.form?.placeholder_email || "ejemplo@correo.com"} required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.contacto?.form?.label_profession || "Profesión / Cargo / Rol *"}</label>
                    <input type="text" name="profesion" placeholder={dict?.contacto?.form?.placeholder_profession || "Ej. Gerente, Empresario..."} required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.contacto?.form?.label_reason || "Motivo principal de su consulta *"}</label>
                    <select name="motivo" required defaultValue="" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit' }}>
                      <option value="" disabled >{dict?.contacto?.form?.reason_opt_1 || "Seleccione una opción..."}</option>
                      <option value="Defensa Penal Preventiva" >{dict?.contacto?.form?.reason_opt_2 || "Defensa Penal Preventiva"}</option>
                      <option value="Proceso Penal en Curso" >{dict?.contacto?.form?.reason_opt_3 || "Proceso Penal en Curso"}</option>
                      <option value="Amparo Constitucional" >{dict?.contacto?.form?.reason_opt_4 || "Amparo Constitucional"}</option>
                      <option value="Asesoría Corporativa / Compliance" >{dict?.contacto?.form?.reason_opt_5 || "Asesoría Corporativa / Compliance"}</option>
                      <option value="Otros" >{dict?.contacto?.form?.reason_opt_6 || "Otros"}</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.contacto?.form?.label_nature || "Naturaleza del asunto penal (Solo si aplica)"}</label>
                    <select name="naturaleza-penal" defaultValue="No aplica" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit' }}>
                      <option value="No aplica" >{dict?.contacto?.form?.nature_opt_1 || "No aplica"}</option>
                      <option value="Delitos Económicos / Financieros" >{dict?.contacto?.form?.nature_opt_2 || "Delitos Económicos / Financieros"}</option>
                      <option value="Delitos Informáticos" >{dict?.contacto?.form?.nature_opt_3 || "Delitos Informáticos"}</option>
                      <option value="Delitos Ordinarios" >{dict?.contacto?.form?.nature_opt_4 || "Delitos Ordinarios"}</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label  style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{dict?.contacto?.form?.label_desc || "Descripción breve de la situación jurídica *"}</label>
                    <textarea name="descripcion" rows={4} maxLength={500} placeholder={dict?.contacto?.form?.placeholder_desc || "Sea preciso sin incluir nombres de terceros o información altamente sensible en esta primera fase."} required style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                    <small className="form-hint" style={{ display: 'block', marginTop: '0.5rem', color: '#777', fontSize: '0.85rem' }} >{dict?.contacto?.form?.hint_1 || "Máximo 500 caracteres. Un miembro de nuestro equipo evaluará esta información preliminar para agendar la entrevista de admisión."}</small>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} >{dict?.contacto?.form?.btn || "ENVIAR SOLICITUD DE ADMISIÓN"}</button>
                  
                  <p style={{ marginTop: '1rem', fontSize: '0.8rem', textAlign: 'center', color: '#666' }} >{dict?.contacto?.form?.hint_2 || "Al enviar este formulario, usted acepta nuestra política de reserva profesional y confidencialidad."}</p>
                </form>
              </div>

              <div className="contact-list" style={{ marginTop: '3rem' }}>
                <h4 className="contact-subtitle" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }} >{dict?.contacto?.alt_channels?.title || "Canales Alternativos"}</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>📱</span>
                    <div>
                      <strong>Móvil / WhatsApp:</strong><br />
                      <a href="tel:+584144342398">+58 414-4342398</a>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>📱</span>
                    <div>
                      <strong>Móvil / WhatsApp:</strong><br />
                      <a href="tel:+584242686161">+58 424-2686161</a>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>☎️</span>
                    <div>
                      <strong>Línea Fija:</strong><br />
                      <a href="tel:+582122340578">+58 212-2340578</a>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>💻</span>
                    <div>
                      <strong >{dict?.contacto?.alt_channels?.meet || "Reunión Virtual:"}</strong><br />
                      <a href="https://meet.google.com/npx-yhyh-cxy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Google Meet (Previa cita)</a>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>𝕏</span>
                    <div>
                      <strong>Twitter (X):</strong><br />
                      <a href="https://twitter.com/AbgLuisMacia" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>@AbgLuisMacia</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
