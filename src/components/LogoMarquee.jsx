import { marqueePhrases } from "@/data/site";

/** Infinite gold ticker of positioning phrases. */
export default function LogoMarquee() {
  const row = [...marqueePhrases, ...marqueePhrases];
  return (
    <div className="relative overflow-hidden border-y border-line bg-coal py-6">
      <div className="flex w-max animate-marquee items-center gap-0 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="headline px-8 text-sm tracking-[0.3em] text-cream/60 md:text-base">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
