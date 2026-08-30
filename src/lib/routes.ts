export type AppLocale = "es" | "en";

export type RouteKey =
  | "home"
  | "about"
  | "about.legalidad_diligencia"
  | "about.independencia_tecnica"
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
  | "services.consultoria_preventiva"
  | "services.consular"
  | "services.international_cooperation"
  | "estrategiaTeoriaDelCaso"
  | "estrategiaSeleccionDeCasos"
  | "estrategiaEscenariosRepresentativos"
  | "probonoPenal"
  | "resources.economic_criminal_risk"
  | "resources.defense_documentation"
  | "resources.international_legal_services"
  | "consular.practica_consular"
  | "consular.gestion_documental"
  | "consular.contratos_internacionales"
  | "consular.materia_energetica"
  | "consular.representacion_judicial"
  | "consular.poderes_y_mandatos";

const routes: Record<AppLocale, Record<RouteKey, string>> = {
  es: {
    home: "/es",
    about: "/es/about",
    "about.legalidad_diligencia": "/es/about/legalidad-diligencia",
    "about.independencia_tecnica": "/es/about/independencia-tecnica",
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
    "services.consultoria_preventiva": "/es/services/consultoria-preventiva",
    "services.consular": "/es/services/consular",
    "services.international_cooperation": "/es/services/international-cooperation",
    estrategiaTeoriaDelCaso: "/es/estrategia-teoria-del-caso",
    estrategiaSeleccionDeCasos: "/es/seleccion-de-casos",
    estrategiaEscenariosRepresentativos: "/es/estrategia-escenarios-representativos",
    probonoPenal: "/es/probono-penal",
    "resources.economic_criminal_risk": "/es/resources/economic-criminal-risk",
    "resources.defense_documentation": "/es/resources/defense-documentation",
    "resources.international_legal_services": "/es/resources/international-legal-services",
    "consular.practica_consular": "/es/services/consular/practica-consular",
    "consular.gestion_documental": "/es/services/consular/gestion-documental",
    "consular.contratos_internacionales": "/es/services/consular/contratos-internacionales",
    "consular.materia_energetica": "/es/services/consular/materia-energetica",
    "consular.representacion_judicial": "/es/services/consular/representacion-judicial",
    "consular.poderes_y_mandatos": "/es/services/consular/poderes-y-mandatos",
  },
  en: {
    home: "/en",
    about: "/en/about",
    "about.legalidad_diligencia": "/en/about/legality-due-diligence",
    "about.independencia_tecnica": "/en/about/technical-independence",
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
    "services.consultoria_preventiva": "/en/services/consultoria-preventiva",
    "services.consular": "/en/services/consular",
    "services.international_cooperation": "/en/services/international-cooperation",
    estrategiaTeoriaDelCaso: "/en/estrategia-teoria-del-caso",
    estrategiaSeleccionDeCasos: "/en/case-selection",
    estrategiaEscenariosRepresentativos: "/en/estrategia-escenarios-representativos",
    probonoPenal: "/en/probono-penal",
    "resources.economic_criminal_risk": "/en/resources/economic-criminal-risk",
    "resources.defense_documentation": "/en/resources/defense-documentation",
    "resources.international_legal_services": "/en/resources/international-legal-services",
    "consular.practica_consular": "/en/services/consular/consular-practice",
    "consular.gestion_documental": "/en/services/consular/document-management",
    "consular.contratos_internacionales": "/en/services/consular/international-contracts",
    "consular.materia_energetica": "/en/services/consular/energy-law",
    "consular.representacion_judicial": "/en/services/consular/judicial-representation",
    "consular.poderes_y_mandatos": "/en/services/consular/strategic-powers",
  },
};

export function getRoute(locale: string, key: RouteKey): string {
  const normalized = locale.toLowerCase().startsWith("en") ? "en" : "es";
  return routes[normalized as AppLocale][key];
}
