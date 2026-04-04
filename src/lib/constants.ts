export const siteConfig = {
  name: "Luiz Macedo",
  title: "Luiz Macedo — Produto, Carreira Internacional e Alta Performance",
  description:
    "Senior Product Manager na Microsoft. Mentoria e comunidade para profissionais de tech que querem crescer com intenção, estratégia e resultado.",
  url: "https://oluizmacedo.com.br",
  email: "contato@oluizmacedo.com.br",
  links: {
    instagram: "https://instagram.com/quasebomemtudo",
    linkedin: "https://www.linkedin.com/in/luizfmacedo/",
    tally: {
      waitlist: "https://tally.so/r/PLACEHOLDER_WAITLIST",
      mentoria: "https://tally.so/r/PLACEHOLDER_MENTORIA",
      contato: "https://tally.so/r/PLACEHOLDER_CONTATO",
    },
  },
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
};

export const navigation = [
  { name: "Início", href: "/" },
  { name: "Os Intencionais", href: "/mentoria" },
  { name: "Comunidade", href: "/comunidade" },
  { name: "Contato", href: "/contato" },
];

export const footerLinks = {
  principal: [
    { name: "Os Intencionais", href: "/mentoria" },
    { name: "Comunidade", href: "/comunidade" },
    { name: "Treinamentos", href: "/#programas" },
    { name: "Contato", href: "/contato" },
    { name: "Links", href: "/links" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/politica-de-privacidade" },
    { name: "Termos de Uso", href: "/termos-de-uso" },
  ],
};
