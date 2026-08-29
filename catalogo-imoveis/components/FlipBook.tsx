"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { CatalogPage } from "@/lib/catalogPages";
import PageRenderer from "@/components/PageRenderer";

export type FlipBookHandle = {
  next: () => void;
  prev: () => void;
  home: () => void;
};

type PageFlipApi = {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    flip: (page: number) => void;
    getCurrentPageIndex: () => number;
  };
};

type Props = {
  pages: CatalogPage[];
  onPageChange: (index: number) => void;
};

const Leaf = forwardRef<HTMLDivElement, { page: CatalogPage }>(function Leaf({ page }, ref) {
  return (
    <div ref={ref} className="flipbook-leaf h-full w-full overflow-hidden" data-density={page.kind === "cover" || page.kind === "final" ? "hard" : "soft"}>
      <PageRenderer page={page} />
    </div>
  );
});

const FlipBook = forwardRef<FlipBookHandle, Props>(function FlipBook({ pages, onPageChange }, ref) {
  const bookRef = useRef<PageFlipApi>(null);

  useImperativeHandle(ref, () => ({
    next: () => bookRef.current?.pageFlip().flipNext(),
    prev: () => bookRef.current?.pageFlip().flipPrev(),
    home: () => bookRef.current?.pageFlip().flip(0),
  }));

  useEffect(() => {
    const book = bookRef.current?.pageFlip();
    if (book) onPageChange(book.getCurrentPageIndex());
  }, [onPageChange]);

  return (
    <div className="catalog-book-scene flex h-full w-full items-center justify-center overflow-hidden">
      <HTMLFlipBook
        ref={bookRef}
        className="catalog-flipbook"
        style={{}}
        width={620}
        height={820}
        minWidth={300}
        maxWidth={720}
        minHeight={400}
        maxHeight={920}
        size="stretch"
        startPage={0}
        drawShadow
        flippingTime={950}
        usePortrait
        startZIndex={0}
        autoSize
        maxShadowOpacity={0.72}
        showCover
        mobileScrollSupport
        clickEventForward
        useMouseEvents
        swipeDistance={20}
        showPageCorners
        disableFlipByClick={false}
        onFlip={(event) => onPageChange(event.data)}
      >
        {pages.map((page, index) => (
          <Leaf key={index} page={page} />
        ))}
      </HTMLFlipBook>
    </div>
  );
});

export default FlipBook;
