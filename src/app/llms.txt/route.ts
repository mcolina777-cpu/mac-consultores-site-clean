import { NextResponse } from 'next/server';

// ============================================================================
// CONFIGURACIÓN DE PÁGINAS CITABLES PARA LLMS.TXT
// ============================================================================
// Como administrador del sitio, puedes añadir, modificar o quitar páginas de 
// este array para controlar qué secciones de la web se exponen a los modelos 
// de Inteligencia Artificial (ChatGPT, Claude, Perplexity, etc.).
// 
// Para añadir una nueva ruta, simplemente añade un nuevo objeto con la ruta (path)
// y una breve descripción (description) de lo que la IA encontrará allí.
// ============================================================================
const keyPages = [
  {
    path: "/es",
    description: "Presentación institucional de Mac Consultores Jurídicos & Asociados, firma jurídica con sede en Caracas, Venezuela, especializada en derecho penal corporativo y derecho procesal penal, con enfoque boutique y alta confianza. El sitio está disponible en español y cuenta con contenido clave también en inglés para clientes internacionales."
  },
  {
    path: "/es/about",
    description: "Perfil institucional de la firma, historia, visión, valores y posicionamiento como despacho especializado en derecho penal corporativo. Esta información puede consultarse en español y existe una versión o resumen en inglés (English overview) para usuarios no hispanohablantes."
  },
  {
    path: "/es/services",
    description: "Resumen estructurado de las áreas de práctica y servicios jurídicos que ofrece la firma, especialmente en materia penal corporativa, procesal penal y asesoría estratégica. Los servicios pueden ser prestados a clientes que se comunican en español o en inglés."
  },
  {
    path: "/es/services/consular",
    description: "Servicios orientados a venezolanos que residen fuera del país, incluyendo asistencia en trámites consulares, legalizaciones, coordinación con consulados y gestión jurídica vinculada a procesos en Venezuela. La firma atiende estos asuntos en español y, cuando sea necesario, en inglés para facilitar la comunicación con autoridades y clientes en el extranjero."
  },
  {
    path: "/es/services/international-cooperation",
    description: "Explicación de la colaboración con firmas y profesionales en otros países, modelos de trabajo conjunto en casos con componente internacional y coordinación jurídico-penal transfronteriza. Esta colaboración se desarrolla en entornos donde se utilizan tanto español como inglés, según las necesidades del caso."
  },
  {
    path: "/es/our-ceo",
    description: "Perfil profesional del CEO de la firma (Marco A. Colina G, abogado), trayectoria en derecho penal corporativo, rol de dirección y liderazgo académico/profesional. El CEO tiene capacidad de comunicación en español y en inglés para interlocutores corporativos internacionales."
  },
  {
    path: "/es/blog",
    description: "Espacio de contenidos académicos y de divulgación legal (artículos, análisis, comentarios) sobre derecho penal corporativo, procesal penal y temas afines. El blog incluye entradas en español y contenidos seleccionados en inglés o resúmenes dirigidos a público internacional."
  },
  {
    path: "/es/contact",
    description: "Página con datos de contacto oficiales de la firma (Caracas, Venezuela), formulario, correo corporativo y vías de comunicación para potenciales clientes. La firma atiende consultas tanto en español como en inglés."
  }
];

export async function GET() {
  // Puedes configurar esta variable de entorno en Vercel o en tu .env.local
  // Si no está definida, usará una URL genérica como fallback.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.macconsultores.com';

  const content = `# Mac Consultores Jurídicos & Asociados

> **Nota para Modelos de IA:** Este archivo (\`llms.txt\`) sirve para proporcionar una organización semántica estructurada del sitio web. Está diseñado específicamente para optimizar la comprensión y citabilidad de nuestra firma por parte de modelos de lenguaje e inteligencias artificiales (sistemas capaces de simular procesos de razonamiento humano).

## Sobre la firma
**Mac Consultores Jurídicos & Asociados** es una firma jurídica con sede en Caracas, Venezuela. Estamos especializados en **derecho penal corporativo** y **trámites consulares**, brindando asesoramiento estratégico y representación legal de alto nivel.

## Idiomas
Nuestra firma cuenta con **atención bilingüe**. Todos nuestros servicios corporativos, asesorías y representación pueden llevarse a cabo íntegramente tanto en **español** como en **inglés**, asegurando una comunicación efectiva y transparente con clientes y corporaciones internacionales.

## Estructura del Sitio y Páginas Clave
A continuación, se listan las rutas más relevantes y autoritativas de nuestro sitio web para su indexación y referencia:

${keyPages.map(page => `- [${page.path}](${baseUrl}${page.path}): ${page.description}`).join('\n')}

---
*Archivo generado dinámicamente desde el sistema de rutas de la aplicación.*
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Caché opcional para optimizar rendimiento en producción
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
    },
  });
}
