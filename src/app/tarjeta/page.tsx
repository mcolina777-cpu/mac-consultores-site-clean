import Image from 'next/image';
import LogoSVG from '@/components/Logo';
import '../globals.css'; // Reutilizamos los estilos globales y variables

// PENDIENTE_CONFIRMAR: Configuración de datos de contacto
const CONTACT_DATA = {
  phone: "", // Ej: "+584121234567"
  whatsapp: "", // Ej: "https://wa.me/584121234567"
  email: "", // Ej: "ceo@mac-consultores.com"
  calendarUrl: "", // Ej: "https://calendly.com/mac-consultores/reunion"
};

export default function TarjetaPage() {
  return (
    <main className="tarjeta-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .tarjeta-container {
          min-height: 100vh;
          background-color: #F4F4F5; /* Gris muy claro para contraste */
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 1rem;
          font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
        }
        .tarjeta-card {
          background: #ffffff;
          max-width: 400px;
          width: 100%;
          border-radius: 28px;
          box-shadow: 0 24px 48px rgba(0, 56, 101, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          position: relative;
        }
        .tarjeta-header {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          padding: 2.5rem 2rem 5.5rem;
          text-align: center;
          color: white;
          position: relative;
        }
        .tarjeta-logo {
          width: 130px;
          margin: 0 auto;
        }
        .tarjeta-logo svg {
          width: 100%;
          height: auto;
          fill: white;
        }
        .tarjeta-photo-wrapper {
          position: relative;
          margin-top: -5rem;
          display: flex;
          justify-content: center;
        }
        .tarjeta-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 6px solid #ffffff;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          background: var(--bg-soft);
          object-fit: cover;
          display: block;
        }
        .tarjeta-info {
          text-align: center;
          padding: 1rem 2rem 2.5rem;
        }
        .tarjeta-name {
          font-family: var(--font-cormorant), "Cormorant Garamond", serif;
          font-size: 2.25rem;
          color: var(--primary-dark);
          margin-bottom: 0.25rem;
          font-weight: 600;
          line-height: 1.1;
        }
        .tarjeta-role {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .tarjeta-firm {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .tarjeta-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }
        .btn-action {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem 0.5rem;
          border-radius: 20px;
          background: #F8FAFC;
          color: var(--primary);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 56, 101, 0.08);
        }
        .btn-action:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 56, 101, 0.15);
          border-color: var(--primary);
        }
        .btn-action svg {
          width: 26px;
          height: 26px;
          margin-bottom: 0.5rem;
          stroke-width: 1.5;
        }
        .btn-action.primary {
          grid-column: span 2;
          background: var(--primary);
          color: white;
          flex-direction: row;
          gap: 0.75rem;
          padding: 1.1rem;
          box-shadow: 0 4px 12px rgba(0, 56, 101, 0.2);
        }
        .btn-action.primary:hover {
          background: var(--primary-dark);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 56, 101, 0.3);
        }
        .btn-action.primary svg {
          margin-bottom: 0;
        }
        .btn-action.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
          filter: grayscale(100%);
        }
        .tarjeta-areas {
          text-align: left;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }
        .tarjeta-areas h3 {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1rem;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
        .tarjeta-areas ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .tarjeta-areas li {
          font-size: 0.95rem;
          color: var(--text-main);
          padding: 0.5rem 0;
          display: flex;
          align-items: flex-start;
          line-height: 1.4;
        }
        .tarjeta-areas li::before {
          content: '•';
          color: var(--accent);
          font-size: 1.5rem;
          margin-right: 0.75rem;
          line-height: 0.8;
          margin-top: 2px;
        }
      `}} />

      <div className="tarjeta-card">
        {/* Encabezado */}
        <div className="tarjeta-header">
          <div className="tarjeta-logo">
            <LogoSVG />
          </div>
        </div>

        {/* Foto CEO */}
        <div className="tarjeta-photo-wrapper">
          <Image 
            src="/assets/mac/CEO 1.png" 
            alt="Marco A. Colina G." 
            width={150} 
            height={150}
            className="tarjeta-photo"
            priority
          />
        </div>

        {/* Información Principal */}
        <div className="tarjeta-info">
          <h1 className="tarjeta-name">Marco A. Colina G.</h1>
          <h2 className="tarjeta-role">Abogado | CEO</h2>
          <p className="tarjeta-firm">MAC Consultores Jurídicos</p>

          {/* Acciones Rápidas */}
          <div className="tarjeta-actions">
            
            {/* Llamar */}
            <a 
              href={CONTACT_DATA.phone ? \`tel:\${CONTACT_DATA.phone}\` : "#"} 
              className={\`btn-action \${!CONTACT_DATA.phone ? 'disabled' : ''}\`}
              title={!CONTACT_DATA.phone ? "Configuración pendiente" : "Llamar"}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Llamar
            </a>
            
            {/* WhatsApp */}
            <a 
              href={CONTACT_DATA.whatsapp || "#"} 
              className={\`btn-action \${!CONTACT_DATA.whatsapp ? 'disabled' : ''}\`}
              title={!CONTACT_DATA.whatsapp ? "Configuración pendiente" : "WhatsApp"}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              WhatsApp
            </a>

            {/* Correo */}
            <a 
              href={CONTACT_DATA.email ? \`mailto:\${CONTACT_DATA.email}\` : "#"} 
              className={\`btn-action \${!CONTACT_DATA.email ? 'disabled' : ''}\`}
              title={!CONTACT_DATA.email ? "Configuración pendiente" : "Correo"}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Correo
            </a>

            {/* Agendar Consulta */}
            <a 
              href={CONTACT_DATA.calendarUrl || "#"} 
              className={\`btn-action \${!CONTACT_DATA.calendarUrl ? 'disabled' : ''}\`}
              title={!CONTACT_DATA.calendarUrl ? "Configuración pendiente" : "Agendar"}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Agendar
            </a>

            {/* Guardar Contacto */}
            {/* TODO (Futuro): Generar dinámicamente o servir archivo estático vCard (.vcf) aquí */}
            <a 
              href="#" 
              className="btn-action primary disabled"
              title="Configuración de vCard pendiente"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Guardar Contacto
            </a>
          </div>

          {/* Áreas de Práctica */}
          <div className="tarjeta-areas">
            <h3>Áreas de Práctica</h3>
            <ul>
              <li>Derecho Penal Corporativo</li>
              <li>Derecho Penal</li>
              <li>Derecho Procesal Penal</li>
              <li>Trámites Consulares y Diplomáticos</li>
            </ul>
          </div>

          {/* 
            TODO (Futuro):
            - Integración de Google Maps (Modal iframe o link directo).
            - Formulario de Contacto en línea (API a CRM / Mailer).
            - Integración de QR (Componente react-qr-code) para compartir.
          */}
        </div>
      </div>
    </main>
  );
}
