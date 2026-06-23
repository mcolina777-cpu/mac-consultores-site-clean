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
    title: 'Procesal Penal: El Régimen de Poderes en el CPC y el COPP | Mac Consultores',
  };
}

export default async function BlogPoderes({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            <Link href={`/${locale}/blog`}>Blog</Link> / Análisis Penal
          </span>
          <h1>Procesal Penal: El Régimen de Poderes en el CPC y el COPP venezolano</h1>
        </div>
      </header>

      <div className="container article-container">
        <article className="article-content">
          <p className="article-meta">Categoría: Procesal Penal</p>
          
          <p>Actos procesales habilitados y acusación privada: Con poder especialmente otorgado, el apoderado de la víctima puede acceder al expediente de investigación, solicitar la práctica de diligencias, asistir a audiencias, ejercer el derecho a réplica y, en los delitos de acción privada, formular querella o acusación en nombre de su representado.</p>
          
          <h2>I. Exigencia del Artículo 406 COPP</h2>
          <p>El artículo 406 del COPP va más allá: exige que la acusación privada identifique con precisión al acusado —nombre, apellidos, datos de identificación— y describa el hecho punible de manera clara y circunstanciada.</p>
          <p>Acusado individualizado: Nombre completo, cédula de identidad u otros datos que permitan su identificación inequívoca.</p>
          <p>Hecho punible delimitado: Descripción circunstanciada del tiempo, modo y lugar, así como la calificación jurídica propuesta. Poder especial habilitante: El apoderado debe acreditar que su representado lo autorizó específicamente para ese acto. Sin este requisito, la acusación es inadmisible.</p>
          
          <h2>II. Diferencias entre poder civil y poder penal</h2>
          <p>La representación penal de la víctima no admite fórmulas genéricas. Cada acto relevante exige una autorización clara. No hay atajos que no conduzcan a la inadmisibilidad.</p>
          
          <h3>Objeto del mandato</h3>
          <p>En el Proceso Civil (CPC) son derechos patrimoniales y pretensiones disponibles. En el Proceso Penal (COPP) son derechos procesales de la víctima; acción pública o privada.</p>
          
          <h3>Nivel de especificidad</h3>
          <p>En civil, general para impulso; especial para actos de disposición. En penal, especial para todos los actos de intervención relevante.</p>
          
          <h3>Naturaleza del litigio</h3>
          <p>Disponible en civil (las partes pueden renunciar, transigir y comprometer). Predominantemente indisponible en penal (el Estado es titular de la acción pública).</p>
          
          <h3>Consecuencia de insuficiencia</h3>
          <p>En civil, ineficacia del acto de disposición; el proceso puede continuar. En penal, inadmisibilidad o nulidad; puede comprometer todo el proceso.</p>
          
          <h2>III. Por qué el poder especial es indispensable en la representación de la víctima</h2>
          <p>La exigencia de poder especial en la representación penal de la víctima responde a tres fundamentos de primera importancia:</p>
          
          <ul>
            <li><strong>Principio de Personalidad de la Acción:</strong> El Estado es el titular de la acción penal, pero cuando la víctima decide intervenir, lo hace de manera personalísima.</li>
            <li><strong>Protección del Imputado:</strong> Evitar acusaciones temerarias o anónimas.</li>
            <li><strong>Seguridad Jurídica:</strong> Garantizar que quien actúa en nombre de la víctima tiene la potestad real para hacerlo.</li>
          </ul>
          
          <p>En procesos de criminalidad económica, donde los plazos de prescripción son determinantes, una nulidad por defecto de representación puede traducirse en la pérdida irreversible del derecho de acción.</p>
          
          <h2>IV. Consecuencias prácticas y recomendaciones</h2>
          <p>Redacte poderes penales con precisión técnica. El poder para representar a una víctima en proceso penal debe identificar con claridad el tipo de delito o la causa concreta. Distinga el poder civil del poder penal en los instrumentos de representación corporativa. Verifique la suficiencia del poder antes de cada actuación relevante. Actúe con asesoría penal especializada desde el primer momento.</p>
          
          <h2>V. Protocolos corporativos y Compliance</h2>
          <p>Contemple el poder especial en el protocolo de compliance penal. Las empresas con programas de cumplimiento normativo deberían incorporar en sus protocolos de gestión de crisis la previsión de otorgamiento de poderes penales específicos, con los parámetros de suficiencia que el COPP exige.</p>
          
          <h2>VI. Conclusión</h2>
          <p>El régimen de poderes en el proceso venezolano no es uniforme: obedece a lógicas distintas según la naturaleza del proceso. Esta diferencia no es solo doctrinal. Tiene consecuencias directas sobre la validez de las actuaciones, la admisibilidad de los escritos y la eficacia de la representación en el momento más crítico del proceso.</p>
          
          <h2>VII. Asesoría Especializada en Mac Consultores Jurídicos & Asociados</h2>
          <p>Para empresas y directivos que enfrentan investigaciones penales o que actúan como víctimas en procesos de criminalidad económica, comprender estas diferencias no es opcional: es una condición de ejercicio del derecho de acción y de acceso real a la justicia. La representación de la víctima en el proceso penal no admite fórmulas genéricas.</p>
          <p>Nuestro equipo cuenta con experiencia consolidada en la redacción de instrumentos de representación judicial para procesos penales complejos, en la representación de víctimas corporativas ante los órganos jurisdiccionales venezolanos y en el diseño de protocolos de compliance penal.</p>
        </article>
      </div>
    </main>
  );
}
