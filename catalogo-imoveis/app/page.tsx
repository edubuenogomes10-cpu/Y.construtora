"use client";

import Image from "next/image";
import { useState } from "react";
import BrandMark from "@/components/BrandMark";
import { siteConfig, whatsappLink } from "@/lib/config";
import { allPhotos } from "@/lib/allPhotos";

const photos = allPhotos;

const processSteps = [
  { title: "1. Avaliação do cliente", description: "Análise da renda, capacidade de financiamento e condições de crédito." },
  { title: "2. Definição do valor disponível", description: "Identificação do limite para aquisição do terreno e construção." },
  { title: "3. Escolha do terreno", description: "Busca e avaliação de um terreno adequado ao projeto e ao financiamento." },
  { title: "4. Definição do projeto", description: "Desenvolvimento da casa conforme necessidades do cliente, terreno e orçamento." },
  { title: "5. Documentação e aprovação", description: "Elaboração dos projetos, documentos e encaminhamento para análise do financiamento." },
  { title: "6. Assinatura do financiamento", description: "Aprovação final e formalização da aquisição do terreno + construção." },
  { title: "7. Execução da obra", description: "Início da construção, seguindo projeto, cronograma e etapas previstas." },
  { title: "8. Conclusão e entrega", description: "Finalização, regularização e entrega da casa pronta ao cliente." },
];

type TrackItem =
  | { kind: "photo"; photoIndex: number; src: string; alt: string }
  | { kind: "step"; title: string; description: string };

function buildTrackItems(interval = 7): TrackItem[] {
  const items: TrackItem[] = [];
  let stepIndex = 0;

  photos.forEach((photo, index) => {
    items.push({ kind: "photo", photoIndex: index, src: photo.src, alt: photo.alt });

    if ((index + 1) % interval === 0) {
      items.push({ kind: "step", ...processSteps[stepIndex % processSteps.length] });
      stepIndex += 1;
    }
  });

  return items;
}

const trackItems = buildTrackItems();

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : photos[selectedIndex];
  const showPhoto = (direction: number) => setSelectedIndex((index) => index === null ? null : (index + direction + photos.length) % photos.length);

  return (
    <main className="catalog-one-page">
      <header className="catalog-header">
        <BrandMark />
        <span className="catalog-label">CATÁLOGO DE OBRAS · PELOTAS, RS</span>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="catalog-header-link">WhatsApp ↗</a>
      </header>

      <section className="catalog-intro">
  <div>
    <p className="catalog-eyebrow">Y. CONSTRUTORA</p>

    <h1>
      <span className="somos">Somos</span>{" "}
      <span className="especialistas">especialistas em</span>{" "}
      <mark>Aquisição de terreno e construção.</mark>{" "}
      <em>Do seu jeito.</em>
    </h1>
  </div>

  <div className="catalog-contact">
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
    >
      <small>WHATSAPP</small>
      <strong>{siteConfig.contact.phone}</strong>
    </a>

    <a
      href={siteConfig.contact.instagramUrl}
      target="_blank"
      rel="noreferrer"
    >
      <small>INSTAGRAM</small>
      <strong>{siteConfig.contact.instagram}</strong>
    </a>
  </div>
</section>

      <section className="catalog-gallery" aria-label="Galeria de obras Y. Construtora">
        <p>OBRAS E PROJETOS — AS FOTOS SE MOVEM AUTOMATICAMENTE · TOQUE PARA AMPLIAR</p>
        <div className="catalog-marquee">
          <div className="catalog-marquee-track">
            {[...trackItems, ...trackItems].map((item, index) =>
              item.kind === "photo" ? (
                <button
                  type="button"
                  key={`photo-${index}`}
                  onClick={() => setSelectedIndex(item.photoIndex)}
                  aria-label={`Ampliar ${item.alt}`}
                >
                  <Image src={item.src} alt={item.alt} fill sizes="360px" className="object-cover" />
                </button>
              ) : (
                <div className="catalog-step-card" key={`step-${index}`}>
                  <span className="catalog-step-title">{item.title}</span>
                  <p className="catalog-step-description">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {selected && <div className="catalog-lightbox" role="dialog" aria-label="Foto de obra ampliada" aria-modal="true" onClick={() => setSelectedIndex(null)}><div className="catalog-lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={selected.src} alt={selected.alt} fill sizes="100vw" className="object-contain" priority /><button type="button" className="catalog-close" onClick={() => setSelectedIndex(null)} aria-label="Fechar">×</button><button type="button" className="catalog-photo-nav catalog-photo-prev" onClick={() => showPhoto(-1)} aria-label="Anterior">←</button><button type="button" className="catalog-photo-nav catalog-photo-next" onClick={() => showPhoto(1)} aria-label="Próxima">→</button><span>{(selectedIndex ?? 0) + 1} / {photos.length}</span></div></div>}
    </main>
  );
}