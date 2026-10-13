import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

/**
 * Home hero — leads with the Kenyan flagship.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/images/kenya-home.jpg"
          alt="Modern family home inside the Joska Palms gated community, Kenya"
          fill
          priority
          sizes="100vw"
          className="img-duotone animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-40 md:px-10 md:pb-28">
        <p className="eyebrow animate-rise" style={{ animationDelay: "150ms" }}>
          Joska Palms · Kenya&apos;s Finest Gated Community
        </p>

        <h1 className="headline mt-7 max-w-5xl text-[clamp(2.6rem,8.5vw,7rem)] text-cream">
          <span className="block animate-rise" style={{ animationDelay: "280ms" }}>
            Home is where
          </span>
          <span className="block animate-rise" style={{ animationDelay: "420ms" }}>
            <span className="gold-italic normal-case">your story</span> begins
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p
            className="max-w-md animate-rise text-[0.95rem] leading-relaxed text-mist/90"
            style={{ animationDelay: "560ms" }}
          >
            Walled, guarded and master-planned, Joska Palms is Nairobi East&apos;s
            most compelling address — freehold title deeds from KES 6.9M, with a
            dedicated diaspora purchase desk. And when your ambitions stretch
            further, our Dubai portfolio awaits.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 animate-rise"
            style={{ animationDelay: "700ms" }}
          >
            <Link href="/properties/joska-palms" className="btn-gold">
              <span>Discover Joska Palms</span>
            </Link>
            <Link href="/properties" className="btn-outline">
              <span>Explore Dubai Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.5em] text-cream/50">
          Scroll
        </span>
        <span className="block h-16 w-px animate-scroll-line bg-gold" />
      </div>
    </section>
  );
}
