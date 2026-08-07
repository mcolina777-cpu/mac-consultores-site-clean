import type { Metadata } from 'next';
import Image from 'next/image';
import LogoSVG from '@/components/Logo';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Marco A. Colina G. | MAC Consultores Jurídicos',
  description: 'Tarjeta de presentación digital de Marco A. Colina G.',
  robots: {
    index: false,
    follow: false,
  },
};

// PENDIENTE_CONFIRMAR: Sustituir únicamente cuando los datos definitivos estén validados.
const CONTACT_DATA = {
  phone: '',
  whatsapp: '',
  email: '',
  calendarUrl: '',
};

export default function TarjetaPage() {
  return (
    <main className="tarjeta-container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .tarjeta-container {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem 1rem;
              background:
                radial-gradient(circle at top, rgba(184, 147, 74, 0.12), transparent 32%),
                #f4f4f5;
              font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
            }

            .tarjeta-card {
              width: 100%;
              max-width: 420px;
              overflow: hidden;
              position: relative;
              background: #ffffff;
              border: 1px solid rgba(0, 56, 101, 0.08);
              border-radius: 28px;
              box-shadow:
                0 24px 48px rgba(0, 56, 101, 0.12),
                0 4px 12px rgba(0, 0, 0, 0.05);
            }

            .tarjeta-header {
              position: relative;
              padding: 2.25rem 2rem 5.75rem;
              text-align: center;
              color: #ffffff;
              background:
                linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            }

            .tarjeta-header::after {
              content: '';
              position: absolute;
              right: -70px;
              bottom: -90px;
              width: 220px;
              height: 220px;
              border: 1px solid rgba(184, 147, 74, 0.32);
              border-radius: 50%;
            }

            .tarjeta-logo {
              position: relative;
              z-index: 1;
              width: 132px;
              margin: 0 auto;
            }

            .tarjeta-logo svg {
              display: block;
              width: 100%;
              height: auto;
              fill: #ffffff;
            }

            .tarjeta-photo-wrapper {
              position: relative;
              z-index: 2;
              display: flex;
              justify-content: center;
              margin-top: -5.25rem;
            }

            .tarjeta-photo {
              display: block;
              width: 160px;
              height: 160px;
              object-fit: cover;
              object-position: center 18%;
              border: 6px solid #ffffff;
              border-radius: 50%;
              background: var(--bg-soft);
              box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
            }

            .tarjeta-info {
              padding: 1.1rem 2rem 2rem;
              text-align: center;
            }

            .tarjeta-name {
              margin: 0 0 0.3rem;
              color: var(--primary-dark);
              font-family: var(--font-cormorant), "Cormorant Garamond", serif;
              font-size: clamp(2rem, 8vw, 2.4rem);
              font-weight: 600;
              line-height: 1.1;
            }

            .tarjeta-role {
              margin: 0 0 0.55rem;
              color: var(--accent);
              font-size: 0.82rem;
              font-weight: 700;
              letter-spacing: 1.4px;
              text-transform: uppercase;
            }

            .tarjeta-firm {
              margin: 0 0 1.6rem;
              color: var(--text-muted);
              font-size: 0.98rem;
            }

            .tarjeta-actions {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 0.75rem;
              margin-bottom: 1.7rem;
            }

            .btn-action {
              display: flex;
              min-height: 92px;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 0.45rem;
              padding: 0.9rem 0.5rem;
              color: var(--primary);
              background: #f8fafc;
              border: 1px solid rgba(0, 56, 101, 0.1);
              border-radius: 18px;
              font-size: 0.84rem;
              font-weight: 600;
              line-height: 1.2;
              text-decoration: none;
              transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
            }

            .btn-action:hover {
              color: #ffffff;
              background: var(--primary);
              border-color: var(--primary);
              transform: translateY(-2px);
              box-shadow: 0 8px 16px rgba(0, 56, 101, 0.16);
            }

            .btn-action svg {
              width: 25px;
              height: 25px;
              stroke-width: 1.6;
            }

            .btn-action.primary {
              grid-column: span 2;
              min-height: auto;
              flex-direction: row;
              gap: 0.7rem;
              padding: 1.05rem;
              color: #ffffff;
              background: var(--primary);
              border-color: var(--primary);
              box-shadow: 0 4px 12px rgba(0, 56, 101, 0.2);
            }

            .btn-action.primary:hover {
              background: var(--primary-dark);
              border-color: var(--primary-dark);
              box-shadow: 0 8px 20px rgba(0, 56, 101, 0.3);
              transform: translateY(-2px);
            }

            .btn-action.disabled {
              pointer-events: none;
              cursor: not-allowed;
              opacity: 0.48;
              filter: grayscale(100%);
            }

            .tarjeta-site-link {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin: 0 0 1.65rem;
              color: var(--primary);
              font-size: 0.88rem;
              font-weight: 600;
              text-decoration: none;
              text-underline-offset: 4px;
            }

            .tarjeta-site-link:hover {
              color: var(--accent);
              text-decoration: underline;
            }

            .tarjeta-areas {
              padding-top: 1.45rem;
              border-top: 1px solid rgba(0, 0, 0, 0.08);
              text-align: left;
            }

            .tarjeta-areas h3 {
              margin: 0 0 0.9rem;
              color: var(--text-muted);
              font-size: 0.76rem;
              font-weight: 700;
              letter-spacing: 1.4px;
              text-transform: uppercase;
            }

            .tarjeta-areas ul {
              display: grid;
              gap: 0.55rem;
              margin: 0;
              padding: 0;
              list-style: none;
            }

            .tarjeta-areas li {
              display: flex;
              align-items: flex-start;
              color: var(--text-main);
              font-size: 0.92rem;
              line-height: 1.4;
            }

            .tarjeta-areas li::before {
              content: '•';
              flex: 0 0 auto;
              margin: -1px 0.7rem 0 0;
              color: var(--accent);
              font-size: 1.35rem;
              line-height: 1;
            }

            @media (max-width: 380px) {
              .tarjeta-container {
                padding: 1rem 0.7rem;
              }

              .tarjeta-info {
                padding-right: 1.35rem;
                padding-left: 1.35rem;
              }

              .tarjeta-header {
                padding-right: 1.5rem;
                padding-left: 1.5rem;
              }
            }
          `,
        }}
      />

      <section className="tarjeta-card" aria-label="Tarjeta digital profesional">
        <header className="tarjeta-header">
          <div className="tarjeta-logo">
            <LogoSVG />
          </div>
        </header>

        <div className="tarjeta-photo-wrapper">
          <Image
            src="/assets/mac/CEO 1.png"
            alt="Marco A. Colina G."
            width={160}
            height={160}
            className="tarjeta-photo"
            priority
          />
        </div>

        <div className="tarjeta-info">
          <h1 className="tarjeta-name">Marco A. Colina G.</h1>
          <p className="tarjeta-role">Abogado | CEO</p>
          <p className="tarjeta-firm">MAC Consultores Jurídicos</p>

          <div className="tarjeta-actions">
            <a
              href={CONTACT_DATA.phone ? `tel:${CONTACT_DATA.phone}` : '#'}
              className={`btn-action ${!CONTACT_DATA.phone ? 'disabled' : ''}`}
              title={!CONTACT_DATA.phone ? 'Configuración pendiente' : 'Llamar'}
              aria-disabled={!CONTACT_DATA.phone}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Llamar
            </a>

            <a
              href={CONTACT_DATA.whatsapp || '#'}
              className={`btn-action ${!CONTACT_DATA.whatsapp ? 'disabled' : ''}`}
              title={!CONTACT_DATA.whatsapp ? 'Configuración pendiente' : 'WhatsApp'}
              aria-disabled={!CONTACT_DATA.whatsapp}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              WhatsApp
            </a>

            <a
              href={CONTACT_DATA.email ? `mailto:${CONTACT_DATA.email}` : '#'}
              className={`btn-action ${!CONTACT_DATA.email ? 'disabled' : ''}`}
              title={!CONTACT_DATA.email ? 'Configuración pendiente' : 'Correo'}
              aria-disabled={!CONTACT_DATA.email}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Correo
            </a>

            <a
              href={CONTACT_DATA.calendarUrl || '#'}
              className={`btn-action ${!CONTACT_DATA.calendarUrl ? 'disabled' : ''}`}
              title={!CONTACT_DATA.calendarUrl ? 'Configuración pendiente' : 'Agendar consulta'}
              aria-disabled={!CONTACT_DATA.calendarUrl}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Agendar
            </a>

            <a
              href="#"
              className="btn-action primary disabled"
              title="Configuración de vCard pendiente"
              aria-disabled="true"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Guardar contacto
            </a>
          </div>

          <a href="/" className="tarjeta-site-link">
            Visitar MAC Consultores Jurídicos →
          </a>

          <section className="tarjeta-areas" aria-labelledby="areas-practica">
            <h2 id="areas-practica">Áreas de práctica</h2>
            <ul>
              <li>Derecho Penal Corporativo</li>
              <li>Derecho Penal</li>
              <li>Derecho Procesal Penal</li>
              <li>Trámites Consulares y Diplomáticos</li>
            </ul>
          </section>

          {/*
            PENDIENTE PARA UNA ETAPA POSTERIOR:
            - Generación del archivo vCard (.vcf).
            - Integración de agenda.
            - Formulario de contacto o CRM.
            - Google Maps.
            - Código QR definitivo, tras conectar el dominio propio.
          */}
        </div>
      </section>
    </main>
  );
}
