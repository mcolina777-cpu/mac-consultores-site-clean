import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { getRoute } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const dict = await getDictionary(locale);
  const title = dict?.quienes_somos?.meta_title || '';
  const description = dict?.quienes_somos?.meta_description || '';

  const url = `https://mac-consultores-site-clean.vercel.app/${locale}/about`;
  const esUrl = `https://mac-consultores-site-clean.vercel.app/es/about`;
  const enUrl = `https://mac-consultores-site-clean.vercel.app/en/about`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: esUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Mac Consultores Jurídicos & Asociados',
      images: [
        {
          url: '/assets/img/logo-mac-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Logo de Mac Consultores Jurídicos & Asociados',
        },
      ],
      locale: isEs ? 'es_VE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/img/logo-mac-og.jpg'],
    },
  };
}

export default async function QuienesSomos({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="page-quienes-somos">
      {/* BLOQUE 1: LA FIRMA / HISTORIA + FOTO */}
      <header className="page-header">
        <div className="container">
          <span className="breadcrumb">
            {dict?.quienes_somos?.breadcrumb}
          </span>
          <h1>{dict?.quienes_somos?.h1}</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="grid-split">
            {/* Columna izquierda: historia + bloque arquitectura */}
            <div className="about-content">
              <span className="section-tag">
                {dict?.quienes_somos?.history?.tag}
              </span>
              <h2 className="section-title">
                {dict?.quienes_somos?.history?.title}
              </h2>

              {/* Historia compactada en bloques cortos */}
              <p>{dict?.quienes_somos?.history?.desc_1}</p>
              <p className="mt-2">{dict?.quienes_somos?.history?.desc_2}</p>

              {/* Bloque arquitectura destacado como eje de la firma */}
              <article className="card quienes-somos-card mt-2rem">
                <span className="section-tag">
                  {dict?.quienes_somos?.architecture?.tag}
                </span>
                <h3>{dict?.quienes_somos?.architecture?.title}</h3>
                <p>{dict?.quienes_somos?.architecture?.desc}</p>
                <Link
                  href={getRoute(locale, 'quienesSomosDetalle')}
                  className="card-link"
                >
                  {dict?.quienes_somos?.architecture?.link}
                </Link>
              </article>
            </div>

            {/* Columna derecha: imagen de la firma (OFICINA_1_1) */}
            <div className="img-reveal img-vertical">
              <picture>
                <source
                  srcSet="/assets/img-webp/OFICINA_1_1.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/img/OFICINA_1_1.jpeg"
                  alt="Sede de Mac Consultores Jurídicos & Asociados"
                  width={1536}
                  height={2752}
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: ARQUITECTURA + ESTRATEGIAS REPRESENTATIVAS */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">
              {dict?.firma?.strategies?.tag}
            </span>
            <h2 className="section-title">
              {dict?.firma?.strategies?.title}
            </h2>
          </div>

          {/* Tres tarjetas de estrategias clave de la firma */}
          <div className="grid-3">
            <article className="card">
              <span className="section-tag">
                {dict?.firma?.strategies?.case_selection?.tag}
              </span>
              <h3>{dict?.firma?.strategies?.case_selection?.title}</h3>
              <p>{dict?.firma?.strategies?.case_selection?.desc}</p>
            </article>

            <article className="card">
              <span className="section-tag">
                {dict?.firma?.strategies?.case_theory?.tag}
              </span>
              <h3>{dict?.firma?.strategies?.case_theory?.title}</h3>
              <p>{dict?.firma?.strategies?.case_theory?.desc}</p>
              <Link
                href={getRoute(locale, 'estrategiaTeoriaDelCaso')}
                className="news-link"
              >
                <span>{dict?.firma?.strategies?.read_more}</span>
              </Link>
            </article>

            <article className="card">
              <span className="section-tag">
                {dict?.firma?.strategies?.representative_scenarios?.tag}
              </span>
              <h3>{dict?.firma?.strategies?.representative_scenarios?.title}</h3>
              <p>{dict?.firma?.strategies?.representative_scenarios?.desc}</p>
              <Link
                href={getRoute(locale, 'estrategiaEscenariosRepresentativos')}
                className="news-link"
              >
                <span>{dict?.firma?.strategies?.read_more}</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: VALORES INSTITUCIONALES Y MISIÓN / VISIÓN */}
      <section className="bg-soft">
        <div className="container">
          <div className="axial-header axial-centered">
            <span className="section-tag">
              {dict?.quienes_somos?.values?.tag}
            </span>
            <h2 className="section-title">
              {dict?.quienes_somos?.values?.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {/* Columna izquierda: texto Quiénes Somos */}
            <div className="md:col-span-2">
              <h3 className="serif text-xl font-semibold">
                {dict?.quienes_somos?.values?.intro_title}
              </h3>
              <p className="mt-3 text-base leading-relaxed">
                {dict?.quienes_somos?.values?.intro_text}
              </p>
            </div>

            {/* Columna derecha: caja de contacto */}
            <div className="md:col-span-3">
              <div className="card form-card">
                <h4 className="serif text-lg font-semibold">
                  {dict?.quienes_somos?.values?.contact_box?.title}
                </h4>
                <p className="mt-1 text-sm">
                  {dict?.quienes_somos?.values?.contact_box?.subtitle}
                </p>

                <form
                  className="mt-5 space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Nombre */}
                  <div className="form-group">
                    <label htmlFor="nombre">
                      {dict?.quienes_somos?.values?.contact_box?.form_fields?.nombre?.label}
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">
                      {dict?.quienes_somos?.values?.contact_box?.form_fields?.email?.label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="form-group">
                    <label htmlFor="telefono">
                      {dict?.quienes_somos?.values?.contact_box?.form_fields?.telefono?.label}
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                    />
                  </div>

                  {/* Área de interés */}
                  <div className="form-group">
                    <label htmlFor="area">
                      {dict?.quienes_somos?.values?.contact_box?.form_fields?.area?.label}
                    </label>
                    <select
                      id="area"
                      name="area"
                      required
                    >
                      <option value="">
                        {dict?.quienes_somos?.values?.contact_box?.form_fields?.area?.placeholder}
                      </option>
                      <option value="asesoria_corporativa">
                        {dict?.quienes_somos?.values?.contact_box?.form_fields?.area?.options?.asesoria_corporativa}
                      </option>
                      <option value="litigio">
                        {dict?.quienes_somos?.values?.contact_box?.form_fields?.area?.options?.litigio}
                      </option>
                      <option value="consultoria_particular">
                        {dict?.quienes_somos?.values?.contact_box?.form_fields?.area?.options?.consultoria_particular}
                      </option>
                      <option value="otro">
                        {dict?.quienes_somos?.values?.contact_box?.form_fields?.area?.options?.otro}
                      </option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div className="form-group">
                    <label htmlFor="mensaje">
                      {dict?.quienes_somos?.values?.contact_box?.form_fields?.mensaje?.label}
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                    />
                  </div>

                  {/* Botón */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                  >
                    {dict?.quienes_somos?.values?.contact_box?.cta_button}
                  </button>

                  {/* Micro-copy de confianza */}
                  <div className="mt-4 flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span>🔒</span>
                      <span>
                        {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>
                        {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[1]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🛡️</span>
                      <span>
                        {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.text}
                        {" "}
                        <a
                          href={dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.link}
                          className="underline"
                        >
                          {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.link_text}
                        </a>
                        {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.suffix}
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section>
        <div className="container">
          <div className="grid-split reverse">
            <div className="img-reveal">
              <picture>
                <img src="/assets/img/OFICINA-4-SIN-ICONO.jpeg" alt="Oficina ejecutiva de Mac Consultores Jurídicos & Asociados" width={2752} height={1536} loading="lazy" />
              </picture>
            </div>
            <div className="vision-text">
              <h2 className="serif heading-lg mb-2rem line-height-1-1">
                {dict?.quienes_somos?.mission?.quote}
              </h2>
              <p>{dict?.quienes_somos?.mission?.desc}</p>
              <Link
                href={getRoute(locale, 'ourCeo')}
                className="btn btn-outline btn-director"
              >
                {dict?.quienes_somos?.mission?.btn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
