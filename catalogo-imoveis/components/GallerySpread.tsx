import Image from "next/image";
import { GalleryImage } from "@/lib/catalogPages";

function BookPage({ image, side }: { image: GalleryImage; side: "left" | "right" }) {
  return (
    <article
      className={`paper-texture relative min-h-0 overflow-hidden p-3 shadow-[0_8px_26px_rgba(53,43,33,0.13)] sm:p-5 ${
        side === "left" ? "sm:rounded-l-sm" : "sm:rounded-r-sm"
      }`}
    >
      <div className="relative h-full w-full">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 46vw, 90vw" className="object-contain" />
      </div>
    </article>
  );
}

export default function GallerySpread({ images }: { images: [GalleryImage, GalleryImage] }) {
  return (
    <div className="catalog-backdrop relative flex h-full w-full items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="grid h-full w-full max-w-7xl grid-rows-2 gap-3 sm:grid-cols-2 sm:grid-rows-1 sm:gap-0">
        <BookPage image={images[0]} side="left" />
        <BookPage image={images[1]} side="right" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-black/10 shadow-[0_0_12px_rgba(0,0,0,0.2)] sm:block" />
    </div>
  );
}
