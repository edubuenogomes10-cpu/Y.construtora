import Image from "next/image";
import BrandMark from "@/components/BrandMark";

export default function Cover() {
  return (
    <div className="catalog-backdrop flex h-full w-full items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="paper-texture grid h-full w-full max-w-7xl grid-cols-1 overflow-hidden shadow-[0_12px_34px_rgba(53,43,33,0.16)] sm:grid-cols-2">
        <div className="flex min-w-0 flex-col justify-between p-6 sm:p-8">
          <BrandMark />

          <div>
            <p className="font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[--color-red] sm:text-[10px]">Portfólio</p>
            <h1 className="mt-3 whitespace-nowrap font-display text-3xl leading-none text-[--color-ink] sm:text-4xl">
              Obras
              <br />
              entregues
            </h1>
            <div className="mt-5 h-px w-12 bg-[--color-red]" />
          </div>

          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-[--color-muted]">Pelotas · RS</span>
        </div>

        <div className="relative min-h-0 bg-[#f6f0e7] p-3 sm:p-5">
          <Image
            src="/imoveis/oliveira/apresentacao-p1-1.jpg"
            alt="Casa construída pela Y. Construtora"
            fill
            priority
            sizes="(min-width: 640px) 46vw, 90vw"
            className="object-contain p-3 sm:p-5"
          />
        </div>
      </div>
    </div>
  );
}
