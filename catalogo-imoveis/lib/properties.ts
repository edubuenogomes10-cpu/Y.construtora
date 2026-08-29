export type PropertyImages = {
  fachada: string;
  sala: string;
  cozinha: string;
  quarto: string;
  banheiro: string;
};

export type Property = {
  id: number;
  number: string;
  title: string;
  details: string;
  images: PropertyImages;
};

import { basePath } from "./config";

const image = (filename: string) => `${basePath}/imoveis/oliveira/${filename}`;

export const properties: Property[] = [
  {
    id: 1,
    number: "01",
    title: "Casa de 41 m²",
    details: "2 quartos",
    images: {
      fachada: image("documento-p3-1.jpg"),
      sala: image("documento-p2-1.jpg"),
      cozinha: image("documento-p2-3.jpg"),
      quarto: image("documento-p3-5.jpg"),
      banheiro: image("documento-p3-3.jpg"),
    },
  },
  {
    id: 2,
    number: "02",
    title: "Casa de 43 m²",
    details: "2 quartos",
    images: {
      fachada: image("documento-p3-2.jpg"),
      sala: image("documento-p2-3.jpg"),
      cozinha: image("documento-p3-4.jpg"),
      quarto: image("documento-p5-2.jpg"),
      banheiro: image("documento-p6-2.jpg"),
    },
  },
  {
    id: 3,
    number: "03",
    title: "Casa de 60 m²",
    details: "2 quartos",
    images: {
      fachada: image("documento-p7-1.jpg"),
      sala: image("documento-p7-2.jpg"),
      cozinha: image("documento-p8-1.jpg"),
      quarto: image("documento-p8-2.jpg"),
      banheiro: image("documento-p7-3.jpg"),
    },
  },
  {
    id: 4,
    number: "04",
    title: "Casa de 50 m²",
    details: "2 quartos",
    images: {
      fachada: image("documento-p9-1.jpg"),
      sala: image("documento-p9-2.jpg"),
      cozinha: image("documento-p10-2.jpg"),
      quarto: image("documento-p9-3.jpg"),
      banheiro: image("documento-p10-3.jpg"),
    },
  },
  {
    id: 5,
    number: "05",
    title: "Casa de 48 m²",
    details: "2 quartos",
    images: {
      fachada: image("documento-p10-1.jpg"),
      sala: image("documento-p10-2.jpg"),
      cozinha: image("documento-p11-2.jpg"),
      quarto: image("documento-p11-4.jpg"),
      banheiro: image("documento-p11-3.jpg"),
    },
  },
  {
    id: 6,
    number: "06",
    title: "Casa de 130 m²",
    details: "3 quartos",
    images: {
      fachada: image("documento-p13-2.jpg"),
      sala: image("documento-p13-3.jpg"),
      cozinha: image("documento-p11-2.jpg"),
      quarto: image("documento-p12-2.jpg"),
      banheiro: image("documento-p13-1.jpg"),
    },
  },
];
