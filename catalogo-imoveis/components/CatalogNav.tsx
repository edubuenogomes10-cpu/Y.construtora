"use client";

type Props = {
  index: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CatalogNav({ index, total, isFirst, isLast, onNext, onPrev, onHome }: Props) {
  return (
    <>
      {/* Botão voltar ao início */}
      <button
        onClick={onHome}
        aria-label="Voltar ao início"
        className="fixed left-4 top-4 z-30 rounded-full bg-[--color-paper]/85 px-3 py-2 font-body text-[10px] uppercase tracking-[0.25em] text-[--color-ink]/65 shadow-sm backdrop-blur transition-colors hover:text-[--color-ink] sm:left-6 sm:top-6"
      >
        Início
      </button>

      {/* Setas — desktop */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Página anterior"
        className="fixed left-2 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-[--color-paper]/85 p-3 text-[--color-ink]/55 shadow-sm backdrop-blur transition-colors hover:text-[--color-ink] disabled:opacity-0 sm:flex sm:left-4"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={onNext}
        disabled={isLast}
        aria-label="Próxima página"
        className="fixed right-2 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-[--color-paper]/85 p-3 text-[--color-ink]/55 shadow-sm backdrop-blur transition-colors hover:text-[--color-ink] disabled:opacity-0 sm:flex sm:right-4"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Indicador de página + toques mobile */}
      <div className="fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 rounded-full bg-[--color-paper]/85 px-4 py-2 shadow-sm backdrop-blur sm:bottom-6">
        <button
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Página anterior"
          className="text-[--color-ink]/60 transition-colors hover:text-[--color-ink] disabled:opacity-20 sm:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[--color-ink]/60">
          {pad(index + 1)} / {pad(total)}
        </span>

        <button
          onClick={onNext}
          disabled={isLast}
          aria-label="Próxima página"
          className="text-[--color-ink]/60 transition-colors hover:text-[--color-ink] disabled:opacity-20 sm:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
