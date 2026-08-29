import { CatalogPage } from "@/lib/catalogPages";
import Cover from "@/components/pages/Cover";
import FinalPage from "@/components/pages/FinalPage";
import GallerySpread from "@/components/GallerySpread";

export default function PageRenderer({ page }: { page: CatalogPage }) {
  switch (page.kind) {
    case "cover":
      return <Cover />;
    case "spread":
      return <GallerySpread images={page.images} />;
    case "final":
      return <FinalPage />;
  }
}
