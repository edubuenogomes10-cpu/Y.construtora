export type GalleryImage = {
  src: string;
  alt: string;
};

export type CatalogPage =
  | { kind: "cover" }
  | { kind: "spread"; images: [GalleryImage, GalleryImage] }
  | { kind: "final" };

import { basePath } from "./config";

const photo = (filename: string, alt: string): GalleryImage => ({
  src: `${basePath}/imoveis/oliveira/${filename}`,
  alt,
});

const gallery: GalleryImage[] = [
  photo("documento-p3-1.jpg", "Fachada de casa entregue"),
  photo("documento-p3-2.jpg", "Fachada de casa entregue"),
  photo("documento-p2-1.jpg", "Ambiente interno de casa entregue"),
  photo("documento-p2-3.jpg", "Cozinha de casa entregue"),
  photo("documento-p3-3.jpg", "Banheiro de casa entregue"),
  photo("documento-p3-5.jpg", "Quarto de casa entregue"),
  photo("documento-p4-1.jpg", "Fachada de casa entregue"),
  photo("documento-p4-2.jpg", "Fachada de casa entregue"),
  photo("documento-p5-2.jpg", "Ambiente interno de casa entregue"),
  photo("documento-p6-2.jpg", "Banheiro de casa entregue"),
  photo("documento-p7-1.jpg", "Fachada de casa entregue"),
  photo("documento-p7-2.jpg", "Sala de casa entregue"),
  photo("documento-p7-3.jpg", "Banheiro de casa entregue"),
  photo("documento-p8-1.jpg", "Fachada de casa entregue"),
  photo("documento-p8-2.jpg", "Quarto de casa entregue"),
  photo("documento-p9-1.jpg", "Fachada de casa entregue"),
  photo("documento-p9-2.jpg", "Ambiente interno de casa entregue"),
  photo("documento-p9-3.jpg", "Banheiro de casa entregue"),
  photo("documento-p10-1.jpg", "Fachada de casa entregue"),
  photo("documento-p10-2.jpg", "Cozinha de casa entregue"),
  photo("documento-p10-3.jpg", "Banheiro de casa entregue"),
  photo("documento-p11-1.jpg", "Fachada de casa entregue"),
  photo("documento-p11-2.jpg", "Ambiente interno de casa entregue"),
  photo("documento-p11-3.jpg", "Banheiro de casa entregue"),
  photo("documento-p12-2.jpg", "Fachada de casa entregue"),
  photo("documento-p13-1.jpg", "Banheiro de casa entregue"),
  photo("documento-p13-2.jpg", "Fachada de casa entregue"),
  photo("documento-p13-3.jpg", "Ambiente interno de casa entregue"),

  // Novas fotos (28) - visita de obra + interiores + fachadas
  photo("novas-p01.jpg", "Visita de obra"),
  photo("novas-p02.jpg", "Visita de obra"),
  photo("novas-p03.jpg", "Sala de jantar de casa entregue"),
  photo("novas-p04.jpg", "Bar e área gourmet de casa entregue"),
  photo("novas-p05.jpg", "Painel de TV de casa entregue"),
  photo("novas-p06.jpg", "Cozinha de casa entregue"),
  photo("novas-p07.jpg", "Cozinha de casa entregue"),
  photo("novas-p08.jpg", "Bancada com vista para o quintal e piscina"),
  photo("novas-p09.jpg", "Closet e escrivaninha de casa entregue"),
  photo("novas-p10.jpg", "Quarto de casa entregue"),
  photo("novas-p11.jpg", "Suíte com espelho e TV"),
  photo("novas-p12.jpg", "Detalhe do closet espelhado"),
  photo("novas-p13.jpg", "Closet espelhado de casa entregue"),
  photo("novas-p14.jpg", "Cabeceira em ripado de madeira"),
  photo("novas-p15.jpg", "Fachada de casa entregue"),
  photo("novas-p16.jpg", "Casa em fase de construção"),
  photo("novas-p17.jpg", "Fachada de sobrado geminado"),
  photo("novas-p18.jpg", "Fachada de casa entregue"),
  photo("novas-p19.jpg", "Casa em fase de construção"),
  photo("novas-p20.jpg", "Render de fachada de casa"),
  photo("novas-p21.jpg", "Imóvel Oliveira Construtora"),
  photo("novas-p22.jpg", "Imóvel Oliveira Construtora"),
  photo("novas-p23.jpg", "Imóvel Oliveira Construtora"),
  photo("novas-p24.jpg", "Imóvel Oliveira Construtora"),
  photo("novas-p25.jpg", "Imóvel Oliveira Construtora"),
  photo("novas-p26.jpg", "Imóvel Oliveira Construtora"),
  photo("novas-p27.jpg", "Imóvel Oliveira Construtora"),
  photo("novas-p28.jpg", "Imóvel Oliveira Construtora"),
];

export function buildCatalogPages(): CatalogPage[] {
  const pages: CatalogPage[] = [];
  for (let index = 0; index < gallery.length; index += 2) {
    pages.push({ kind: "spread", images: [gallery[index], gallery[index + 1]] });
  }

  return [{ kind: "cover" }, ...pages, { kind: "final" }];
}