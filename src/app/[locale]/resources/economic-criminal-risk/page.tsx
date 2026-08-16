import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.seo?.economic_criminal_risk?.title,
  };
}

export default async function EconomicCriminalRisk({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = dict?.economic_criminal_risk;

  return (
    <main className="page-economic-criminal-risk">
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">{data?.breadcrumb}</span>
          <h1>{data?.h1}</h1>
          <p className="subtitle">{data?.subtitle}</p>
        </div>
      </header>

      <section className="bg-soft">
        <div className="container">
          <div className="layout-reading">
            <p className="mb-1-5rem">{data?.intro_p_1}</p>
            <p className="mb-1-5rem">{data?.intro_p_2}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="axial-header">
            <span className="section-tag">{data?.protocol?.tag}</span>
            <h2 className="section-title">{data?.protocol?.title}</h2>
          </div>
          <div className="layout-reading mb-3rem">
            <p>{data?.protocol?.intro}</p>
          </div>

          <div className="protocol-steps">
            {[1, 2, 3, 4, 5].map((stepNum) => {
              const step = data?.steps?.[`step_${stepNum}` as keyof typeof data.steps];
              if (!step) return null;
              return (
                <article key={stepNum} className="mb-3rem">
                  <span className="section-tag">{step.tag}</span>
                  <h2 className="mb-1-5rem">{step.title}</h2>
                  <p className="mb-1-5rem">{step.intro}</p>
                  
                  <h3 className="mb-1rem">{step.subheading}</h3>
                  <ul className="mb-1-5rem">
                    {step.items?.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  {step.closing && (
                    <p className="mb-1-5rem">{step.closing}</p>
                  )}

                  <aside className="quote-block">
                    <h3 className="mb-1rem">{step.recommendation?.title}</h3>
                    <ul>
                      {step.recommendation?.items?.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </aside>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="container">
          <div className="axial-header">
            <h2 className="section-title">{data?.matrix?.title}</h2>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>{data?.matrix?.headers?.phase}</th>
                  <th>{data?.matrix?.headers?.actions}</th>
                  <th>{data?.matrix?.headers?.responsible}</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((rowNum) => {
                  const row = data?.matrix?.rows?.[`row_${rowNum}` as keyof typeof data.matrix.rows];
                  if (!row) return null;
                  return (
                    <tr key={rowNum}>
                      <td>{row.phase}</td>
                      <td>{row.actions}</td>
                      <td>{row.responsible}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3rem">
            <p>{data?.notice}</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <h2 className="mb-1-5rem">{data?.cta?.title}</h2>
          <p className="mb-1-5rem">{data?.cta?.desc}</p>
          <Link href={getRoute(locale, "contact")} className="btn btn-primary">
            {data?.cta?.link}
          </Link>
        </div>
      </section>
    </main>
  );
}
