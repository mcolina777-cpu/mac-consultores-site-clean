export type AppLocale = "es" | "en";

export type RouteKey =
  | "home"
  | "about"
  | "ourCeo"
  | "news"
  | "services"
  | "blog"
  | "contact"
  | "legalNotice"
  | "privacy"
  | "services.penal"
  | "services.constitucional"
  | "services.consular"
  | "services.international_cooperation"
  | "quienesSomosDetalle"
  | "estrategiaTeoriaDelCaso"
  | "estrategiaEscenariosRepresentativos";

const routes: Record<AppLocale, Record<RouteKey, string>> = {
  es: {
    home: "/es",
    about: "/es/about",
    ourCeo: "/es/our-ceo",
    news: "/es/news",
    services: "/es/services",
    blog: "/es/blog",
    contact: "/es/contact",
    legalNotice: "/es/legal",
    privacy: "/es/privacy",
    "services.penal": "/es/services#penal",
    "services.constitucional": "/es/services#constitucional",
    "services.consular": "/es/services/consular",
    "services.international_cooperation": "/es/services/international-cooperation",
    quienesSomosDetalle: "/es/quienes-somos-detalle",
    estrategiaTeoriaDelCaso: "/es/estrategia-teoria-del-caso",
    estrategiaEscenariosRepresentativos: "/es/estrategia-escenarios-representativos",
  },
  en: {
    home: "/en",
    about: "/en/about",
    ourCeo: "/en/our-ceo",
    news: "/en/news",
    services: "/en/services",
    blog: "/en/blog",
    contact: "/en/contact",
    legalNotice: "/en/legal",
    privacy: "/en/privacy",
    "services.penal": "/en/services#penal",
    "services.constitucional": "/en/services#constitucional",
    "services.consular": "/en/services/consular",
    "services.international_cooperation": "/en/services/international-cooperation",
    quienesSomosDetalle: "/en/quienes-somos-detalle",
    estrategiaTeoriaDelCaso: "/en/estrategia-teoria-del-caso",
    estrategiaEscenariosRepresentativos: "/en/estrategia-escenarios-representativos",
  },
};

export function getRoute(locale: string, key: RouteKey): string {
  const normalized = locale.toLowerCase().startsWith("en") ? "en" : "es";
  return routes[normalized as AppLocale][key];
}
