const fs = require('fs');
const file = 'src/app/[locale]/about/legalidad-diligencia/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `          {/* Botón de retorno */}
          <div className="mb-2rem">
            <Link href={getRoute(locale, 'about')} className="btn btn-primary">
              {isEs ? '← VOLVER A LA FIRMA' : '← BACK TO THE FIRM'}
            </Link>
          </div>`;

const replacement = `          {/* CIERRE INSTITUCIONAL */}
          <div
            className="card bg-soft p-3rem text-center"
            style={{
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: '8px',
            }}
          >
            <span className="section-tag">
              {isEs ? 'PRINCIPIO FUNDACIONAL 01' : 'FOUNDATIONAL PRINCIPLE 01'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“La legalidad orienta la estrategia; la diligencia permite ejecutarla con responsabilidad, oportunidad y fundamento.”'
                : '“Legality guides strategy; due diligence enables its responsible, timely, and well-grounded execution.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Mac Consultores Jurídicos & Asociados evalúa cada asunto con rigor técnico, información verificable y respeto irrestricto por el ordenamiento jurídico.'
                : 'Mac Consultores Jurídicos & Asociados evaluates every matter through technical rigor, verifiable information, and strict respect for the legal order.'}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href={getRoute(locale, 'contact')} className="btn btn-primary">
                {isEs ? 'CONTACTAR A LA FIRMA' : 'CONTACT THE FIRM'}
              </Link>

              <Link href={getRoute(locale, 'about')} className="btn btn-secondary">
                {isEs ? '← VOLVER A LA FIRMA' : '← BACK TO THE FIRM'}
              </Link>
            </div>
          </div>`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
