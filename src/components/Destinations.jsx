import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { destinations } from "@/data/site";

/** Destination cards — Kenya leads. */
export default function Destinations() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Choose Your Destination</p>
            <h2 className="headline mt-6 max-w-2xl text-4xl text-cream md:text-6xl">
              Two Markets.
              <br />
              One <span className="gold-italic normal-case">Standard of Excellence</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-sm leading-relaxed text-sand">
              Rooted at home in Kenya, reaching out to Dubai — we hold the keys
              to both, and we hold them to the same standard.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 140}>
              <Link href={d.href} className="card-zoom group relative block overflow-hidden">
                <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[3/4]">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="img-duotone object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-gold">
                    {d.name}
                  </span>
                  <h3 className="headline mt-3 text-3xl text-cream md:text-4xl">
                    {d.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-mist/85 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {d.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-goldlight">
                    Explore
                    <svg
                      width="26"
                      height="10"
                      viewBox="0 0 26 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      className="transition-transform duration-500 group-hover:translate-x-2"
                    >
                      <path d="M0 5h24M20 1l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
