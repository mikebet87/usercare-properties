import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/data/site";

/** Compact services preview for the home page. */
export default function ServicesPreview() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Our Services</p>
            <h2 className="headline mt-6 max-w-2xl text-4xl text-cream md:text-6xl">
              Expertise, <span className="gold-italic normal-case">end to end</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link href="/services" className="btn-outline">
              <span>All Services</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 80}>
              <Link
                href="/services"
                className="group flex w-full items-baseline gap-6 border-b border-line py-7 transition-colors hover:border-gold/40"
              >
                <span className="headline text-sm text-sand/50 transition-colors duration-300 group-hover:text-gold">
                  {s.index}
                </span>
                <span className="flex-1">
                  <span className="headline block text-xl text-cream transition-colors duration-300 group-hover:text-goldlight md:text-2xl">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-sand">
                    {s.market}
                  </span>
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="shrink-0 self-center text-sand transition-all duration-500 group-hover:translate-x-1 group-hover:text-gold"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
