import { basePath } from "./config";

const filenames = [
  // Renders das casas (Casa 01 a Casa 08)
  "apresentacao-p1-1.jpg",
  "apresentacao-p3-1.jpg",
  "apresentacao-p5-1.jpg",
  "apresentacao-p7-1.jpg",
  "apresentacao-p9-1.jpg",
  "apresentacao-p11-1.jpg",
  "apresentacao-p13-1.jpg",
  "apresentacao-p15-1.jpg",

  // Casas entregues - portfólio real
  "documento-p2-1.jpg",
  "documento-p2-2.jpg",
  "documento-p2-3.jpg",
  "documento-p3-1.jpg",
  "documento-p3-2.jpg",
  "documento-p3-3.jpg",
  "documento-p3-4.jpg",
  "documento-p3-5.jpg",
  "documento-p4-1.jpg",
  "documento-p4-2.jpg",
  "documento-p5-1.jpg",
  "documento-p5-2.jpg",
  "documento-p6-1.jpg",
  "documento-p6-2.jpg",
  "documento-p6-3.jpg",
  "documento-p7-1.jpg",
  "documento-p7-2.jpg",
  "documento-p7-3.jpg",
  "documento-p8-1.jpg",
  "documento-p8-2.jpg",
  "documento-p8-3.jpg",
  "documento-p9-1.jpg",
  "documento-p9-2.jpg",
  "documento-p9-3.jpg",
  "documento-p10-1.jpg",
  "documento-p10-2.jpg",
  "documento-p10-3.jpg",
  "documento-p11-1.jpg",
  "documento-p11-2.jpg",
  "documento-p11-3.jpg",
  "documento-p11-4.jpg",
  "documento-p12-1.jpg",
  "documento-p12-2.jpg",
  "documento-p13-1.jpg",
  "documento-p13-2.jpg",
  "documento-p13-3.jpg",

  // Casas com preço por m² (fachada + endereço, sem o icone de coracao)
  "oliveira-p2-1.jpg",
  "oliveira-p2-3.jpg",
  "oliveira-p3-1.jpg",
  "oliveira-p3-3.jpg",
  "oliveira-p4-1.jpg",
  "oliveira-p4-3.jpg",
];

export const allPhotos = filenames.map((filename, index) => ({
  src: `${basePath}/imoveis/oliveira/${filename}`,
  alt: `Obra Y. Construtora ${index + 1}`,
}));