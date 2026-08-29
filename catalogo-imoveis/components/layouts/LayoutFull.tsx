import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { Property } from "@/lib/properties";

export default function LayoutFull({ property }: { property: Property }) {
  return (
    <div className="relative h-full w-full bg-[--color-paper]">
      <PlaceholderPhoto
        src={property.images.sala}
        alt={`Sala — ${property.title}`}
        className="absolute inset-0"
      />
      <div className="absolute bottom-7 right-7 bg-[--color-paper]/90 px-4 py-3 backdrop-blur-sm sm:bottom-10 sm:right-10">
        <span className="font-body text-[10px] uppercase tracking-[0.24em] text-[--color-ink]">
          {property.title}
        </span>
      </div>
    </div>
  );
}
