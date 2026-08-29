import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { Property } from "@/lib/properties";

export default function LayoutSideBySide({ property }: { property: Property }) {
  return (
    <div className="flex h-full w-full gap-2 bg-[--color-paper] p-2 sm:gap-3 sm:p-3">
      <PlaceholderPhoto
        src={property.images.sala}
        alt={`Sala — ${property.title}`}
        className="w-1/2"
      />
      <PlaceholderPhoto
        src={property.images.cozinha}
        alt={`Cozinha — ${property.title}`}
        className="w-1/2"
      />
    </div>
  );
}
