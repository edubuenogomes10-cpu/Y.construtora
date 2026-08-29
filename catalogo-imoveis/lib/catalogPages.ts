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
];

export function buildCatalogPages(): CatalogPage[] {
  const pages: CatalogPage[] = [];
  for (let index = 0; index < gallery.length; index += 2) {
    pages.push({ kind: "spread", images: [gallery[index], gallery[index + 1]] });
  }

  return [{ kind: "cover" }, ...pages, { kind: "final" }];
}
