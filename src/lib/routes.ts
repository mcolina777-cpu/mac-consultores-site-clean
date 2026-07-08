export type AppLocale = "es" | "en";

export type RouteKey =
  | "home"
  | "about"
  | "ourCeo"
  | "news"
  | "services"
  | "consularServices"
  | "internationalCooperation"
  | "blog"
  | "contact"
  | "legalNotice"
  | "privacy"
  | "servicesPenal"
  | "servicesConstitucional";

const routes: Record<AppLocale, Record<RouteKey, string>> = {
  es: {
    home: "/es",
    about: "/es/about",
    ourCeo: "/es/our-ceo",
    news: "/es/news",
    services: "/es/services",
    consularServices: "/es/consular-services",
    internationalCooperation: "/es/international-cooperation",
    blog: "/es/blog",
    contact: "/es/contacto",
    legalNotice: "/es/aviso-legal",
    privacy: "/es/privacidad",
    servicesPenal: "/es/services/penal",
    servicesConstitucional: "/es/services/constitucional",
  },
  en: {
    home: "/en",
    about: "/en/about",
    ourCeo: "/en/our-ceo",
    news: "/en/news",
    services: "/en/services",
    consularServices: "/en/consular-services",
    internationalCooperation: "/en/international-cooperation",
    blog: "/en/blog",
    contact: "/en/contacto",
    legalNotice: "/en/aviso-legal",
    privacy: "/en/privacidad",
    servicesPenal: "/en/services/penal",
    servicesConstitucional: "/en/services/constitucional",
  },
};

export function getRoute(locale: string, key: RouteKey): string {
  const normalized = locale.toLowerCase().startsWith("en") ? "en" : "es";
  return routes[normalized as AppLocale][key];
}
