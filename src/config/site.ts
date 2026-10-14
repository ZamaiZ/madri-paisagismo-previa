export type JsonLd = Record<string, unknown>;

export interface NavigationItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Madri Paisagismo e Serviços",
  legalName: "",
  locale: "pt-BR",
  url: "https://zamaiz.github.io/madri-paisagismo-previa/",
  description:
    "Paisagismo, soluções ambientais e segurança do trabalho. Conheça os serviços da Madri e entre em contato.",
  logo: "images/madri-logo.png",
  favicon: "images/madri-logo.png",

  contact: {
    email: "",
    phone: "+5511976039331",
    phoneDisplay: "(11) 97603-9331",
    whatsapp: "",
  },

  navigation: [
    { label: "Serviços", href: "#servicos" },
    { label: "O grupo", href: "#grupo" },
    { label: "Contato", href: "#contato" },
  ] as NavigationItem[],

  seo: {
    titleTemplate: "{page} | {site}",
    defaultImage: "",
    noindex: true,
  },

  schema: undefined as JsonLd | JsonLd[] | undefined,
} as const;
