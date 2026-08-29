"use client";

import Image from "next/image";
import { useState } from "react";
import BrandMark from "@/components/BrandMark";
import { siteConfig, whatsappLink } from "@/lib/config";

const photos = Array.from({ length: 44 }, (_, index) => ({
  src: `/projects/y-construtora/obra-${String(index + 1).padStart(2, "0")}.jpeg`,
  alt: `Obra Y. Construtora ${index + 1}`,
}));

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
        <div><p className="catalog-eyebrow">Y. CONSTRUTORA</p><h1><em>Somos especialistas em</em> <mark>Aquisição de terreno e construção.</mark> <em>Do seu jeito.</em></h1></div>
        <div className="catalog-contact"><a href={whatsappLink()} target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>{siteConfig.contact.phone}</strong></a><a href={siteConfig.contact.instagramUrl} target="_blank" rel="noreferrer"><small>INSTAGRAM</small><strong>{siteConfig.contact.instagram}</strong></a></div>
      </section>

      <section className="catalog-gallery" aria-label="Galeria de obras Y. Construtora">
        <p>OBRAS E PROJETOS — AS FOTOS SE MOVEM AUTOMATICAMENTE · TOQUE PARA AMPLIAR</p>
        <div className="catalog-marquee"><div className="catalog-marquee-track">{[...photos, ...photos].map((photo, index) => <button type="button" key={index} onClick={() => setSelectedIndex(index % photos.length)} aria-label={`Ampliar ${photo.alt}`}><Image src={photo.src} alt={photo.alt} fill sizes="360px" className="object-cover" /></button>)}</div></div>
      </section>

      {selected && <div className="catalog-lightbox" role="dialog" aria-label="Foto de obra ampliada" aria-modal="true" onClick={() => setSelectedIndex(null)}><div className="catalog-lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={selected.src} alt={selected.alt} fill sizes="100vw" className="object-contain" priority /><button type="button" className="catalog-close" onClick={() => setSelectedIndex(null)} aria-label="Fechar">×</button><button type="button" className="catalog-photo-nav catalog-photo-prev" onClick={() => showPhoto(-1)} aria-label="Anterior">←</button><button type="button" className="catalog-photo-nav catalog-photo-next" onClick={() => showPhoto(1)} aria-label="Próxima">→</button><span>{(selectedIndex ?? 0) + 1} / {photos.length}</span></div></div>}
    </main>
  );
}
