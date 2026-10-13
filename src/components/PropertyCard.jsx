import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const whatsappLink = (project) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello UserCare Properties, I would like to know more about ${project}.`
  )}`;

/**
 * Property card — links to the detail page; WhatsApp shortcut included.
 * `wide` renders a landscape editorial card (used for the Kenyan flagship).
 */
export default function PropertyCard({ property, wide = false }) {
  return (
    <article className="card-zoom group flex h-full flex-col">
      <Link
        href={`/properties/${property.slug}`}
        className="relative block overflow-hidden"
        aria-label={`View ${property.name}`}
      >
        <div className={`relative w-full ${wide ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"}`}>
          <Image
            src={property.heroImage}
            alt={property.heroAlt}
            fill
            sizes={wide ? "(min-width: 768px) 100vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="img-duotone object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 border border-gold/50 bg-ink/60 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.4em] text-goldlight backdrop-blur-sm">
            {property.badge}
          </span>
          {wide && property.highlight && (
            <span className="absolute right-5 top-5 bg-gold px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.3em] text-ink">
              Kenyan Flagship
            </span>
          )}
          <span className="absolute bottom-5 right-5 bg-ink/70 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur-sm">
            {property.price}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 items-start justify-between gap-6 border-b border-line pb-7 pt-6">
        <div>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-sand">
            {property.location} · {property.type}
          </span>
          <Link href={`/properties/${property.slug}`}>
            <h3 className="headline mt-2 text-2xl text-cream transition-colors duration-500 hover:text-goldlight md:text-3xl">
              {property.name}
            </h3>
          </Link>
          <p className="mt-3 line-clamp-2 max-w-md text-sm leading-relaxed text-sand">
            {property.tagline}
          </p>
        </div>
        <a
          href={whatsappLink(property.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${property.name} on WhatsApp`}
          className="mt-1 grid h-11 w-11 shrink-0 place-items-center border border-line text-cream transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </article>
  );
}
