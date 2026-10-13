import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { destinations, kenyaBullets, whyDubai } from "@/data/site";
import Image from "next/image";

export const metadata = {
  title: "Destinations | UserCare Properties — Kenya & Dubai",
  description:
    "Invest at home in Kenya's fastest-growing gated communities, or reach for Dubai's tax-free yields. Two markets, one standard of excellence.",
};

function MarketBlock({ market, flip = false }) {
  const isKenya = market.name === "Kenya";
  return (
    <div className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
      <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
        <div className="card-zoom relative aspect-[4/3] overflow-hidden">
          <Image
            src={market.image}
            alt={market.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="img-duotone object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          <span className="absolute bottom-6 left-6 text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-goldlight">
            {market.name}
          </span>
        </div>
      </Reveal>

      <div className={flip ? "lg:order-1" : ""}>
        <Reveal>
          <p className="eyebrow">{isKenya ? "Rooted in Home" : "Reaching Further"}</p>
          <h2 className="headline mt-6 text-4xl text-cream md:text-5xl">{market.title}</h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-mist/85">{market.copy}</p>
        </Reveal>

        {isKenya ? (
          <Reveal delay={140} className="mt-8 grid gap-3 sm:grid-cols-2">
            {kenyaBullets.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-gold">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-sm leading-relaxed text-sand">{b}</span>
              </div>
            ))}
          </Reveal>
        ) : (
          <Reveal delay={140} className="mt-8 grid grid-cols-2 gap-x-8">
            {whyDubai.map((s) => (
              <div key={s.label} className="border-b border-line py-5">
                <span className="headline block text-2xl text-goldlight">{s.value}</span>
                <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-sand">
                  {s.label}
                </span>
              </div>
            ))}
          </Reveal>
        )}

        <Reveal delay={240} className="mt-10">
          <Link href={market.href} className="btn-gold">
            <span>{isKenya ? "Explore Joska Palms" : "Explore Dubai Properties"}</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

export default function DestinationsPage() {
  const kenya = destinations.find((d) => d.name === "Kenya");
  const dubai = destinations.find((d) => d.name === "Dubai");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          image="/images/suburb-aerial.jpg"
          alt="Aerial view of a master-planned estate"
          eyebrow="Destinations"
          title="Two Markets, One Standard"
          copy="Wherever your ambitions live — behind a guarded gate in Nairobi East or above the Dubai canal — we bring the same rigour, the same candour and the same keys."
        />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10">
          <MarketBlock market={kenya} />
          <div className="border-t border-line" />
          <MarketBlock market={dubai} flip />
        </section>
        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
