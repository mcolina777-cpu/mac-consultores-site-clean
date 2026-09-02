const fs = require('fs');
const file = 'src/app/[locale]/about/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "<h3>{isEs ? 'Legalidad y Diligencia' : 'Legality & Due Diligence'}</h3>", 
  "<h3 className=\"serif\">{isEs ? 'Legalidad y Diligencia' : 'Legality & Due Diligence'}</h3>"
);
content = content.replace(
  "<h3>{isEs ? 'Independencia Técnica' : 'Technical Independence'}</h3>", 
  "<h3 className=\"serif\">{isEs ? 'Independencia Técnica' : 'Technical Independence'}</h3>"
);
content = content.replace(
  "<h3>{isEs ? 'Transparencia y Buena Fe' : 'Transparency & Good Faith'}</h3>", 
  "<h3 className=\"serif\">{isEs ? 'Transparencia y Buena Fe' : 'Transparency & Good Faith'}</h3>"
);
content = content.replace(
  "<h3>{isEs ? 'Confidencialidad y Secreto' : 'Confidentiality & Professional Secrecy'}</h3>", 
  "<h3 className=\"serif\">{isEs ? 'Confidencialidad y Secreto' : 'Confidentiality & Professional Secrecy'}</h3>"
);

const section = `      {/* CIERRE INSTITUCIONAL */}
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
              {isEs ? 'MAC CONSULTORES JURÍDICOS & ASOCIADOS' : 'MAC CONSULTORES JURÍDICOS & ASOCIADOS'}
            </span>

            <h3 className="serif mt-1rem mb-1rem" style={{ fontSize: '1.4rem' }}>
              {isEs
                ? '“Una firma construida sobre rigor técnico, lealtad profesional y estrategia jurídica para asuntos de alta complejidad.”'
                : '“A firm built on technical rigor, professional loyalty, and legal strategy for high-complexity matters.”'}
            </h3>

            <p
              className="max-w-800 mx-auto mb-2rem text-muted"
              style={{ lineHeight: 1.6, fontSize: '0.95rem' }}
            >
              {isEs
                ? 'Conozca nuestro enfoque institucional y contacte a la firma para evaluar asuntos que requieran criterio jurídico especializado en Venezuela.'
                : 'Learn about our institutional approach and contact the firm to assess matters requiring specialized legal judgment in Venezuela.'}
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

              <Link href={\`/\${locale}\`} className="btn btn-secondary">
                {isEs ? '← VOLVER AL INICIO' : '← BACK TO HOME'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>`;

content = content.replace("    </main>", section);
fs.writeFileSync(file, content);
