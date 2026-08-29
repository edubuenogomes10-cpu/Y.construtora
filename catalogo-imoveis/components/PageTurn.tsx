"use client";

import { useEffect, useRef, useState } from "react";
import { CatalogPage } from "@/lib/catalogPages";
import PageRenderer from "@/components/PageRenderer";

type Props = {
  page: CatalogPage;
  pageIndex: number;
  direction: "next" | "prev";
};

type TurningPage = {
  page: CatalogPage;
  direction: "next" | "prev";
  key: number;
};

export default function PageTurn({ page, pageIndex, direction }: Props) {
  const previousPage = useRef(page);
  const [turningPage, setTurningPage] = useState<TurningPage | null>(null);

  useEffect(() => {
    if (previousPage.current === page) return;
    setTurningPage({ page: previousPage.current, direction, key: pageIndex });
    previousPage.current = page;
  }, [direction, page, pageIndex]);

  useEffect(() => {
    if (!turningPage) return;

    const finishTurn = window.setTimeout(() => setTurningPage(null), 820);
    return () => window.clearTimeout(finishTurn);
  }, [turningPage]);

  return (
    <div className="catalog-page-stage h-full w-full">
      <div className="catalog-page-current h-full w-full">
        <PageRenderer page={page} />
      </div>

      {turningPage && (
        <div
          key={turningPage.key}
          className={`catalog-page-leaf catalog-page-leaf--${turningPage.direction}`}
          onAnimationEnd={() => setTurningPage(null)}
        >
          <PageRenderer page={turningPage.page} />
        </div>
      )}
    </div>
  );
}
