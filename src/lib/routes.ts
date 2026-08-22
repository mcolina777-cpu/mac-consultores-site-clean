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
  | "services.delitos_informaticos"
  | "services.consular"
  | "services.international_cooperation"
  | "quienesSomosDetalle"
  | "estrategiaTeoriaDelCaso"
  | "estrategiaSeleccionDeCasos"
  | "estrategiaEscenariosRepresentativos"
  | "probonoPenal"
  | "resources.economic_criminal_risk"
  | "resources.defense_documentation"
  | "resources.international_legal_services";

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
    "services.penal": "/es/services/penal",
    "services.constitucional": "/es/services/constitucional",
    "services.delitos_informaticos": "/es/services/delitos-informaticos",
    "services.consular": "/es/services/consular",
    "services.international_cooperation": "/es/services/international-cooperation",
    quienesSomosDetalle: "/es/quienes-somos-detalle",
    estrategiaTeoriaDelCaso: "/es/estrategia-teoria-del-caso",
    estrategiaSeleccionDeCasos: "/es/seleccion-de-casos",
    estrategiaEscenariosRepresentativos: "/es/estrategia-escenarios-representativos",
    probonoPenal: "/es/probono-penal",
    "resources.economic_criminal_risk": "/es/resources/economic-criminal-risk",
    "resources.defense_documentation": "/es/resources/defense-documentation",
    "resources.international_legal_services": "/es/resources/international-legal-services",
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
    "services.penal": "/en/services/penal",
    "services.constitucional": "/en/services/constitutional",
    "services.delitos_informaticos": "/en/services/delitos-informaticos",
    "services.consular": "/en/services/consular",
    "services.international_cooperation": "/en/services/international-cooperation",
    quienesSomosDetalle: "/en/quienes-somos-detalle",
    estrategiaTeoriaDelCaso: "/en/estrategia-teoria-del-caso",
    estrategiaSeleccionDeCasos: "/en/case-selection",
    estrategiaEscenariosRepresentativos: "/en/estrategia-escenarios-representativos",
    probonoPenal: "/en/probono-penal",
    "resources.economic_criminal_risk": "/en/resources/economic-criminal-risk",
    "resources.defense_documentation": "/en/resources/defense-documentation",
    "resources.international_legal_services": "/en/resources/international-legal-services",
  },
};

export function getRoute(locale: string, key: RouteKey): string {
  const normalized = locale.toLowerCase().startsWith("en") ? "en" : "es";
  return routes[normalized as AppLocale][key];
}
