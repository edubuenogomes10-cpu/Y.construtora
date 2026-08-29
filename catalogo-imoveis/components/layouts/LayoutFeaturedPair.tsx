import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { Property } from "@/lib/properties";

export default function LayoutFeaturedPair({ property }: { property: Property }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-[--color-paper] p-2 sm:gap-3 sm:p-3">
      <PlaceholderPhoto
        src={property.images.cozinha}
        alt={`Cozinha — ${property.title}`}
        className="h-[68%] w-full"
      />
      <div className="flex h-[32%] w-full gap-2 sm:gap-3">
        <PlaceholderPhoto
          src={property.images.quarto}
          alt={`Quarto — ${property.title}`}
          className="w-1/2"
        />
        <PlaceholderPhoto
          src={property.images.banheiro}
          alt={`Banheiro — ${property.title}`}
          className="w-1/2"
        />
      </div>
    </div>
  );
}
