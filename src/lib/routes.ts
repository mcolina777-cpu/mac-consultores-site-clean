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
  | "services.international_cooperation";

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
    "services.penal": "/es/services",
    "services.constitucional": "/es/services",
    "services.consular": "/es/services/consular",
    "services.international_cooperation": "/es/services/international-cooperation",
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
    "services.penal": "/en/services",
    "services.constitucional": "/en/services",
    "services.consular": "/en/services/consular",
    "services.international_cooperation": "/en/services/international-cooperation",
  },
};

export function getRoute(locale: string, key: RouteKey): string {
  const normalized = locale.toLowerCase().startsWith("en") ? "en" : "es";
  return routes[normalized as AppLocale][key];
}
