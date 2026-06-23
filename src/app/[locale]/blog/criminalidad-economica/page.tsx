import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

type Props = {
  params: Promise<{ locale: string }>
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict?.seo?.blog_criminalidad_economica?.title || 'Análisis Penal: Evolución de la Criminalidad Económica | Mac Consultores',
  };
}

export default async function BlogCriminalidadEconomica({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/blog`}>Blog</Link> / Análisis Penal
          </span>
          <h1>{dict?.articulo_crimen?.h1 || 'Análisis Penal: Evolución de la Criminalidad Económica'}</h1>
        </div>
      </header>

      <div className="container article-container">
        <article className="article-content">
          <p className="article-meta">{dict?.articulo_crimen?.meta || 'Categoría: Análisis Penal'}</p>

          <p>{dict?.articulo_crimen?.p1 || 'El entorno empresarial contemporáneo es un ecosistema dinámico...'}</p>

          <h2>{dict?.articulo_crimen?.h2_1 || 'Introducción: Contexto y relevancia actual'}</h2>

          <p>{dict?.articulo_crimen?.p2_1}</p>
          <p>{dict?.articulo_crimen?.p2_2}</p>
          <p>{dict?.articulo_crimen?.p2_3}</p>

          <h2>{dict?.articulo_crimen?.h2_2 || 'Breve evolución histórica del Derecho Penal Económico'}</h2>

          <p>{dict?.articulo_crimen?.intro_2}</p>

          <h3>{dict?.articulo_crimen?.h3_2a || 'a) Paso de la Edad Media a la Edad Moderna'}</h3>
          <p>{dict?.articulo_crimen?.p3_2a}</p>

          <h3>{dict?.articulo_crimen?.h3_2b || 'b) Período de entreguerras'}</h3>
          <p>{dict?.articulo_crimen?.p3_2b}</p>

          <h3>{dict?.articulo_crimen?.h3_2c || 'c) Posguerra y Guerra Fría'}</h3>
          <p>{dict?.articulo_crimen?.p3_2c}</p>

          <h3>{dict?.articulo_crimen?.h3_2d || 'd) Posmodernidad y globalización'}</h3>
          <p>{dict?.articulo_crimen?.p3_2d}</p>
          <p>{dict?.articulo_crimen?.p3_2e}</p>

          <h2>{dict?.articulo_crimen?.h2_3 || 'Rasgos distintivos de la criminalidad económica contemporánea'}</h2>

          <p>{dict?.articulo_crimen?.p2_3a}</p>

          <ul>
            <li><strong>Elevada complejidad técnica:</strong> Los delitos se ocultan detrás de operaciones de ingeniería financiera, estructuras societarias multinivel, paraísos fiscales y productos de inversión opacos, requiriendo peritajes contables y financieros avanzados.</li>
            <li><strong>Uso de la persona jurídica:</strong> La empresa deja de ser solo la víctima y se convierte en instrumento delictivo o “pantalla” para difuminar la responsabilidad de sus directivos.</li>
            <li><strong>Frontera difusa entre ilícito y delito:</strong> Existe una línea delgada entre la infracción administrativa y el delito penal, lo que genera tensiones sobre cuándo el Estado debe acudir a la sanción penal.</li>
            <li><strong>Impacto macrosocial vs. visibilidad:</strong> Un fraude bancario puede destruir los ahorros de miles de familias con un daño superior al de muchos delitos violentos, pero su percepción mediática suele ser menor.</li>
            <li><strong>Dimensión transnacional y tecnológica:</strong> El dinero fluye a la velocidad de la luz y los delitos se apoyan en internet, sistemas de compensación electrónica y redes descentralizadas.</li>
          </ul>

          <p>{dict?.articulo_crimen?.p2_3b}</p>

          <h2>{dict?.articulo_crimen?.h2_4 || 'Impacto de la economía digital y los delitos financieros tecnológicos'}</h2>
          <p>{dict?.articulo_crimen?.p2_4}</p>

          <h2>{dict?.articulo_crimen?.h2_5 || 'Enfoque desde el Derecho Penal venezolano y latinoamericano'}</h2>
          <p>{dict?.articulo_crimen?.p2_5}</p>

          <h2>{dict?.articulo_crimen?.h2_6 || 'Perspectiva de análisis económico del Derecho Penal'}</h2>
          <p>{dict?.articulo_crimen?.p2_6}</p>

          <h2>{dict?.articulo_crimen?.h2_7 || 'Conclusiones y recomendaciones prácticas'}</h2>
          <p>{dict?.articulo_crimen?.p2_7a}</p>
          <p>{dict?.articulo_crimen?.p2_7b}</p>
        </article>
      </div>
    </main>
  );
}
