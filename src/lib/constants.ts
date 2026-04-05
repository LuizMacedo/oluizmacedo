export const siteConfig = {
  name: "Luiz Macedo",
  title: "Luiz Macedo — Produto, Senioridade e Carreira Internacional em Tech",
  description:
    "Luiz Macedo é Senior Product Manager na Microsoft. Compartilha reflexões, mentoria e comunidade para profissionais de Tech interessados em produto, senioridade e carreira internacional.",
  url: "https://oluizmacedo.com.br",
  email: "contato@oluizmacedo.com.br",
  links: {
    instagram: "https://instagram.com/quasebomemtudo",
    linkedin: "https://www.linkedin.com/in/luizfmacedo/",
    tally: {
      waitlist: "https://tally.so/r/GxDg8L",
      mentoria: "https://tally.so/r/xXyoAd",
      contato: "https://tally.so/r/MeYgok",
    },
  },
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
};

export const navigation = [
  { name: "Início", href: "/" },
  { name: "Mentoria", href: "/mentoria" },
  { name: "Comunidade", href: "/comunidade" },
  { name: "Contato", href: "/contato" },
];

export const footerLinks = {
  principal: [
    { name: "Mentoria", href: "/mentoria" },
    { name: "Comunidade", href: "/comunidade" },
    { name: "Contato", href: "/contato" },
    { name: "Links", href: "/links" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/politica-de-privacidade" },
    { name: "Termos de Uso", href: "/termos-de-uso" },
  ],
};
