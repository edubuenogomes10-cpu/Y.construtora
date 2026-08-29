import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { Property } from "@/lib/properties";

export default function LayoutFacadeDetail({ property }: { property: Property }) {
  return (
    <div className="relative h-full w-full bg-[--color-paper]">
      <PlaceholderPhoto
        src={property.images.fachada}
        alt={`Fachada — ${property.title}`}
        className="absolute inset-0"
      />
      <div className="absolute left-0 top-10 h-16 w-1.5 bg-[--color-red] sm:top-14 sm:h-24" />
      <span className="absolute bottom-8 left-8 bg-[--color-paper]/90 px-4 py-3 font-body text-[10px] uppercase tracking-[0.26em] text-[--color-ink] backdrop-blur-sm sm:bottom-10 sm:left-12">
        {property.title}
      </span>
    </div>
  );
}
