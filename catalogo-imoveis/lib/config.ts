export const basePath = "/Y.construtora";

export const siteConfig = {
  companyName: "Y. Construtora",
  contact: {
    phone: "(53) 99137-3378",
    phoneLink: "+5553991373378",
    whatsapp: "5553991373378",
    instagram: "@y.construtoraa",
    instagramUrl: "https://www.instagram.com/y.construtoraa/",
  },
} as const;

export const whatsappLink = (
  message: string = "Olá! Vi o site da Y. Construtora e gostaria de mais informações.",
) => `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
