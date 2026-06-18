interface KingdomBackgroundProps {
  src: string;
  alt: string;
}

export function KingdomBackground({ src, alt }: KingdomBackgroundProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 shadow-royal">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.45))]" />
    </div>
  );
}
