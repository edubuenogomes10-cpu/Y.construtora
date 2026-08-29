type BrandMarkProps = { compact?: boolean };

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return <span className="brand-mark"><svg viewBox="0 0 64 64" aria-hidden="true" className="brand-symbol"><rect width="64" height="64" rx="13" fill="#090909" /><path d="M12 13h13.2l7.1 13.4L39.5 13H53L38.8 38.1V51H26V38.1L12 13Z" fill="#ffcb16" /><path d="M39.3 39.5h12.2V51H39.3z" fill="#ffcb16" /></svg>{!compact && <span className="brand-name">CONSTRUTORA</span>}</span>;
}
