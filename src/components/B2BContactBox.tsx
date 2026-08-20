import React from 'react';

interface ContactBoxData {
  tag: string;
  title: string;
  description: string;
  emailPrefix: string;
  email: string;
  form: {
    subject: string;
    fullName: string;
    organization: string;
    country: string;
    email: string;
    website: string;
    interest: string;
    selectPlaceholder: string;
    options: {
      corresponsalia: string;
      representacion: string;
      consultoria: string;
      alianza: string;
      otro: string;
    };
    message: string;
    submit: string;
    privacy: string;
  };
}

interface B2BContactBoxProps {
  data: ContactBoxData;
  locale: string;
}

export default function B2BContactBox({ data, locale }: B2BContactBoxProps) {
  if (!data) return null;

  return (
    <section id="alianzas-contacto" className="b2b-contact-box">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="form-card">
          <span className="section-tag">{data.tag}</span>
          
          <h2 className="serif heading-lg text-primary mb-2rem">
            {data.title}
          </h2>
          
          <p className="mb-2-5rem text-muted">
            {data.description}
          </p>

          <a
            href={`mailto:${data.email}`}
            className="channel-card mb-2-5rem"
            aria-label={`${data.emailPrefix}: ${data.email}`}
          >
            <span className="channel-icon" aria-hidden="true">✉️</span>
            <div className="channel-text">
              <span className="channel-label">{data.emailPrefix}</span>
              <span className="channel-value">{data.email}</span>
            </div>
          </a>

          <form
            action="https://formsubmit.co/infomacconsul@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value={data.form?.subject || "Solicitud de alianza estratégica"}
            />
            <input
              type="hidden"
              name="_next"
              value={`https://mac-consultores-site-clean.vercel.app/${locale}/services/international-cooperation?sent=success#alianzas-contacto`}
            />

            <div className="form-group mb-1rem">
              <label htmlFor="b2b_full_name" className="form-label">
                {data.form.fullName}
              </label>
              <input
                id="b2b_full_name"
                className="form-input"
                type="text"
                name="full_name"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group mb-1rem">
              <label htmlFor="b2b_organization" className="form-label">
                {data.form.organization}
              </label>
              <input
                id="b2b_organization"
                className="form-input"
                type="text"
                name="organization"
                required
                autoComplete="organization"
              />
            </div>

            <div className="form-group mb-1rem">
              <label htmlFor="b2b_country" className="form-label">
                {data.form.country}
              </label>
              <input
                id="b2b_country"
                className="form-input"
                type="text"
                name="country"
                required
                autoComplete="country-name"
              />
            </div>

            <div className="form-group mb-1rem">
              <label htmlFor="b2b_email" className="form-label">
                {data.form.email}
              </label>
              <input
                id="b2b_email"
                className="form-input"
                type="email"
                name="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group mb-1rem">
              <label htmlFor="b2b_website" className="form-label">
                {data.form.website}
              </label>
              <input
                id="b2b_website"
                className="form-input"
                type="url"
                name="website"
                autoComplete="url"
              />
            </div>

            <div className="form-group mb-1rem">
              <label htmlFor="b2b_interest" className="form-label">
                {data.form.interest}
              </label>
              <select
                id="b2b_interest"
                className="form-input"
                name="interest"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  {data.form.selectPlaceholder}
                </option>
                <option value="corresponsalia">{data.form.options.corresponsalia}</option>
                <option value="representacion">{data.form.options.representacion}</option>
                <option value="consultoria">{data.form.options.consultoria}</option>
                <option value="alianza">{data.form.options.alianza}</option>
                <option value="otro">{data.form.options.otro}</option>
              </select>
            </div>

            <div className="form-group mb-1-5rem">
              <label htmlFor="b2b_message" className="form-label">
                {data.form.message}
              </label>
              <textarea
                id="b2b_message"
                className="form-textarea"
                name="message"
                required
                rows={5}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {data.form.submit}
            </button>
          </form>

          <p className="text-muted text-sm text-center mt-1rem">
            {data.form.privacy}
          </p>
        </div>
      </div>
    </section>
  );
}
