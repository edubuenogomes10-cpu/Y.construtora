import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { Property } from "@/lib/properties";

export default function LayoutCollage({ property }: { property: Property }) {
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2 bg-[--color-paper] p-2 sm:gap-3 sm:p-3">
      <PlaceholderPhoto
        src={property.images.sala}
        alt={`Sala — ${property.title}`}
        className="col-span-1 row-span-2"
      />
      <PlaceholderPhoto
        src={property.images.cozinha}
        alt={`Cozinha — ${property.title}`}
        className="col-span-1 row-span-1"
      />
      <PlaceholderPhoto
        src={property.images.quarto}
        alt={`Quarto — ${property.title}`}
        className="col-span-1 row-span-1"
      />
    </div>
  );
}
