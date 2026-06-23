import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contacto | Mac Consultores Jurídicos & Asociados',
  description: 'Contáctenos para una consulta profesional de alta complejidad.',
};

export default function Contacto() {
  return (
    <main className="page-contacto">
      <header className="page-header" style={{ padding: '80px 0 40px', backgroundColor: 'var(--bg-soft)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag" data-i18n="contacto.tag">Contacto Institucional</span>
          <h1 data-i18n="contacto.h1">Programe una Consulta de Admisión</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-split">
            <div className="contact-info">
              <h2 className="section-title" data-i18n="contacto.info.title">Atención Estratégica</h2>
              <p data-i18n="contacto.info.desc" style={{ marginBottom: '2rem' }}>
                Atendemos consultas presenciales y virtuales con estricta confidencialidad. 
                Complete el formulario de admisión o contáctenos por nuestros canales directos.
              </p>
              
              <div className="contact-list">
                <div className="contact-item" style={{ marginBottom: '1.5rem' }}>
                  <h4 className="contact-subtitle" data-i18n="contacto.info.hq">Sede Principal</h4>
                  <p data-i18n="footer.location">Caracas, Venezuela</p>
                </div>
                <div className="contact-item" style={{ marginBottom: '1.5rem' }}>
                  <h4 className="contact-subtitle" data-i18n="contacto.info.email">Correo Electrónico</h4>
                  <p><a href="mailto:infomacconsul@gmail.com" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>infomacconsul@gmail.com</a></p>
                </div>
                <div className="contact-item" style={{ marginBottom: '1.5rem' }}>
                  <h4 className="contact-subtitle" data-i18n="contacto.info.hours">Horario de Atención</h4>
                  <p data-i18n="contacto.info.hours_val">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="form-column">
              <div className="form-card" style={{ background: '#fff', padding: '2rem', border: '1px solid #E1E1E1' }}>
                <form action="https://formsubmit.co/infomacconsul@gmail.com" method="POST">
                  <input type="hidden" name="_next" value="https://mac-consultores.vercel.app/contacto" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label data-i18n="contacto.form.label_name">Nombre completo</label>
                    <input type="text" name="nombre" required style={{ width: '100%', padding: '0.8rem' }} />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label data-i18n="contacto.form.label_email">Correo electrónico</label>
                    <input type="email" name="email" required style={{ width: '100%', padding: '0.8rem' }} />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label data-i18n="contacto.form.label_desc">Descripción breve de su consulta</label>
                    <textarea name="descripcion" rows={4} maxLength={500} required style={{ width: '100%', padding: '0.8rem' }}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} data-i18n="contacto.form.btn">
                    ENVIAR SOLICITUD DE ADMISIÓN
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
