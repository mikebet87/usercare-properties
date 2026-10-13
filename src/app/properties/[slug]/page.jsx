import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { properties, site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};
  return {
    title: `${property.name} | UserCare Properties`,
    description: property.tagline,
    openGraph: {
      title: `${property.name} — ${property.location}`,
      description: property.tagline,
      images: [{ url: property.heroImage, alt: property.heroAlt }],
    },
  };
}

const whatsappLink = (name) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello UserCare Properties, I would like to reserve a viewing / slot at ${name}.`
  )}`;

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  const others = properties.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-28">
          <div className="absolute inset-0">
            <Image
              src={property.heroImage}
              alt={property.heroAlt}
              fill
              priority
              sizes="100vw"
              className="img-duotone animate-kenburns object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-20">
            <nav aria-label="Breadcrumb" className="animate-fade-in">
              <Link
                href="/properties"
                className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-sand transition-colors hover:text-goldlight"
              >
                ← Back to Portfolio
              </Link>
            </nav>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="border border-gold/50 bg-ink/60 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.4em] text-goldlight backdrop-blur-sm">
                {property.badge}
              </span>
              {property.highlight && (
                <span className="bg-gold px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.3em] text-ink">
                  Kenyan Flagship
                </span>
              )}
            </div>
            <h1 className="headline mt-5 max-w-4xl animate-rise text-[clamp(2.4rem,7vw,5.5rem)] text-cream" style={{ animationDelay: "120ms" }}>
              {property.name}
            </h1>
            <p className="mt-4 max-w-xl animate-rise text-[0.95rem] leading-relaxed text-mist/90" style={{ animationDelay: "240ms" }}>
              {property.tagline}
            </p>
          </div>
        </section>

        {/* Overview + facts */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow">Overview</p>
                <h2 className="headline mt-6 text-3xl text-cream md:text-4xl">
                  {property.location}
                  <span className="gold-italic normal-case"> — {property.type}</span>
                </h2>
              </Reveal>
              {property.overview.map((para, i) => (
                <Reveal key={i} delay={120 + i * 100}>
                  <p className="mt-6 max-w-2xl text-sm leading-relaxed text-mist/85">{para}</p>
                </Reveal>
              ))}

              <Reveal delay={200} className="mt-12">
                <p className="eyebrow">Amenities</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-start gap-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-gold">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm leading-relaxed text-sand">{a}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* At a glance card */}
            <Reveal delay={150}>
              <aside className="border border-line bg-coal p-8 lg:sticky lg:top-28">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-6">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-sand">
                    Pricing
                  </span>
                  <span className="headline text-2xl text-goldlight">{property.price}</span>
                </div>
                <dl className="mt-6 space-y-5">
                  {property.facts.map((f) => (
                    <div key={f.label} className="flex items-start justify-between gap-6">
                      <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-sand">
                        {f.label}
                      </dt>
                      <dd className="text-right text-sm text-cream">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-col gap-3">
                  <a href={whatsappLink(property.name)} target="_blank" rel="noopener noreferrer" className="btn-gold w-full">
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <a href={`tel:+${site.phoneIntl}`} className="btn-outline w-full">
                    <span>Call an Advisor</span>
                  </a>
                </div>
                <p className="mt-5 text-center text-[0.6rem] tracking-[0.16em] text-sand">
                  {property.payment}
                </p>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-[1440px] px-5 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <p className="eyebrow">Gallery</p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {property.gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 100} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                <div className="card-zoom relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                    className="img-duotone object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* More residences */}
        <section className="border-t border-line bg-coal py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <p className="eyebrow">Continue Exploring</p>
              <h2 className="headline mt-6 text-3xl text-cream md:text-4xl">
                More <span className="gold-italic normal-case">residences</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <Link href={`/properties/${p.slug}`} className="card-zoom group relative block overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.heroImage}
                        alt={p.heroAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="img-duotone object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-gold">
                          {p.badge} · {p.location}
                        </span>
                        <h3 className="headline mt-1.5 text-xl text-cream transition-colors group-hover:text-goldlight">
                          {p.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
