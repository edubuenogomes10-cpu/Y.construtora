import { siteConfig, whatsappLink } from "@/lib/config";
import BrandMark from "@/components/BrandMark";

export default function FinalPage() {
  return (
    <div className="catalog-backdrop flex h-full w-full items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="paper-texture flex h-full w-full max-w-3xl flex-col items-center justify-center px-8 text-center shadow-[0_12px_34px_rgba(53,43,33,0.16)]">
        <BrandMark />
        <p className="mt-8 font-display text-3xl text-[--color-ink] sm:text-5xl">Construindo qualidade de vida.</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 border border-[#8e1820] bg-[#b51f29] px-8 py-3 font-body text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_8px_18px_rgba(150,29,36,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#961d24] hover:shadow-[0_12px_22px_rgba(150,29,36,0.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b51f29]"
        >
          Entre em contato
        </a>
        <div className="mt-10 flex flex-col gap-2 font-body text-xs tracking-[0.1em] text-[--color-muted] sm:text-sm">
          <span>{siteConfig.contact.phone}</span>
          <span>{siteConfig.contact.instagram}</span>
          <span>Pelotas · Rio Grande do Sul</span>
        </div>
      </div>
    </div>
  );
}
