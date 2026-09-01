import { basePath } from "./config";

const filenames = [
  // Renders das casas (Casa 01 a Casa 08) — manter
  "apresentacao-p1-1.jpg",
  "apresentacao-p3-1.jpg",
  "apresentacao-p5-1.jpg",
  "apresentacao-p7-1.jpg",
  "apresentacao-p9-1.jpg",
  "apresentacao-p11-1.jpg",
  "apresentacao-p13-1.jpg",
  "apresentacao-p15-1.jpg",

  // Casas entregues - portfólio real (revisão: fotos de banheiro,
  // suja e repetidas retiradas)
  "documento-p3-2.jpg",
  "documento-p3-3.jpg",
  "documento-p3-4.jpg", // MELHORAR: aproximar o enquadramento
  "documento-p3-5.jpg", // MELHORAR: aproximar o enquadramento
  "documento-p4-1.jpg",
  "documento-p4-2.jpg", // MELHORAR: aproximar o enquadramento
  "documento-p5-1.jpg", // MELHORAR: aproximar, evitar sujeira/objetos na frente
  "documento-p6-1.jpg",
  "documento-p6-3.jpg", // MELHORAR: aproximar o enquadramento
  "documento-p8-1.jpg",
  "documento-p8-3.jpg",
  "documento-p9-2.jpg",
  "documento-p10-1.jpg",
  "documento-p13-2.jpg",

  // Novas fotos - pendente de avaliação (sem observação específica no PDF)
  "novas-p03.jpg",
  "novas-p04.jpg",
  "novas-p05.jpg",
  "novas-p06.jpg",
  "novas-p07.jpg",
  "novas-p25.jpg",
  "novas-p26.jpg",
  "novas-p27.jpg",
  "novas-p28.jpg",
];

export const allPhotos = filenames.map((filename, index) => ({
  src: `${basePath}/imoveis/oliveira/${filename}`,
  alt: `Obra Y. Construtora ${index + 1}`,
}));