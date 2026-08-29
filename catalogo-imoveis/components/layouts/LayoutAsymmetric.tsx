import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { Property } from "@/lib/properties";

export default function LayoutAsymmetric({ property }: { property: Property }) {
  return (
    <div className="flex h-full w-full gap-2 bg-[--color-paper] p-2 sm:gap-3 sm:p-3">
      <PlaceholderPhoto
        src={property.images.quarto}
        alt={`Quarto — ${property.title}`}
        className="w-[40%]"
      />
      <PlaceholderPhoto
        src={property.images.banheiro}
        alt={`Banheiro — ${property.title}`}
        className="w-[60%]"
      />
    </div>
  );
}
