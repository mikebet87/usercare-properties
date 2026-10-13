import Link from "next/link";
import Reveal from "@/components/Reveal";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/site";

/**
 * Featured portfolio for the home page.
 * The Kenyan flagship renders as a wide editorial card; Dubai follows.
 */
export default function Projects({ heading = true }) {
  const flagship = properties.find((p) => p.highlight);
  const rest = properties.filter((p) => p !== flagship);

  return (
    <section id="portfolio" className="bg-coal py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {heading && (
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">Curated Portfolio</p>
              <h2 className="headline mt-6 text-4xl text-cream md:text-6xl">
                Signature <span className="gold-italic normal-case">Residences</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="max-w-sm text-sm leading-relaxed text-sand">
                Kenya leads our story. Dubai extends it. Every listing is
                hand-picked, developer-direct and personally vetted.
              </p>
            </Reveal>
          </div>
        )}

        <Reveal className="mt-16">
          <PropertyCard property={flagship} wide />
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 110}>
              <PropertyCard property={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <Link href="/properties" className="btn-outline">
            <span>View Full Portfolio</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
