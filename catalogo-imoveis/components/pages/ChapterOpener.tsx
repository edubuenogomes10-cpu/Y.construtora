import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import BrandMark from "@/components/BrandMark";
import { Property } from "@/lib/properties";

export default function ChapterOpener({ property }: { property: Property }) {
  return (
    <div className="relative h-full w-full bg-[--color-paper]">
      <PlaceholderPhoto
        src={property.images.fachada}
        alt={`Fachada — ${property.title}`}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f2]/95 via-[#fbf8f2]/72 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-14 lg:p-20">
        <BrandMark />

        <div className="max-w-md rounded-sm border border-black/10 bg-[--color-paper]/90 p-6 shadow-[0_12px_45px_rgba(38,34,31,0.09)] backdrop-blur-sm sm:p-9">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-[--color-red]">
            Casa {property.number}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none text-[--color-ink] sm:text-6xl">
            {property.title}
          </h2>
          <p className="mt-5 border-t border-black/10 pt-4 font-body text-xs uppercase tracking-[0.24em] text-[--color-muted]">
            {property.details}
          </p>
        </div>
      </div>
    </div>
  );
}
