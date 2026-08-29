"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useCatalogNavigation(totalPages: number) {
  const [{ index, direction }, setNavigation] = useState({
    index: 0,
    direction: "next" as "next" | "prev",
  });
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => {
      setNavigation((current) => {
        const nextIndex = Math.min(Math.max(i, 0), totalPages - 1);
        if (nextIndex === current.index) return current;
        return {
          index: nextIndex,
          direction: nextIndex > current.index ? "next" : "prev",
        };
      });
    },
    [totalPages]
  );

  const next = useCallback(() => {
    setNavigation((current) => {
      if (current.index === totalPages - 1) return current;
      return { index: current.index + 1, direction: "next" };
    });
  }, [totalPages]);

  const prev = useCallback(() => {
    setNavigation((current) => {
      if (current.index === 0) return current;
      return { index: current.index - 1, direction: "prev" };
    });
  }, []);
  const goHome = useCallback(() => goTo(0), [goTo]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") next();
      if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
      if (e.key === "Home") goHome();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, goHome]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50;
    if (delta < -threshold) next();
    if (delta > threshold) prev();
    touchStartX.current = null;
  }

  return {
    index,
    direction,
    total: totalPages,
    isFirst: index === 0,
    isLast: index === totalPages - 1,
    next,
    prev,
    goTo,
    goHome,
    touchHandlers: { onTouchStart, onTouchEnd },
  };
}
