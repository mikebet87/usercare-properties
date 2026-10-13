import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { kenyaBullets } from "@/data/site";

/** Editorial feature of the Kenyan flagship — Joska Palms. */
export default function KenyaHighlight() {
  const flagship = {
    name: "Joska Palms",
    location: "Joska, Kangundo Road · Nairobi East",
  };

  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Collage */}
          <div className="relative">
            <Reveal className="card-zoom relative aspect-[4/5] max-w-lg overflow-hidden">
              <Image
                src="/images/kenya-home.jpg"
                alt="A modern bungalow inside the Joska Palms estate"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="img-duotone object-cover"
              />
            </Reveal>
            <Reveal
              delay={200}
              className="card-zoom absolute -bottom-10 right-0 hidden w-[46%] overflow-hidden border-8 border-ink sm:block"
            >
              <div className="relative aspect-square">
                <Image
                  src="/images/savanna-giraffe.jpg"
                  alt="Giraffe silhouetted against a golden Kenyan sunrise"
                  fill
                  sizes="(min-width: 1024px) 22vw, 46vw"
                  className="img-duotone object-cover"
                />
              </div>
            </Reveal>
            <span
              className="headline pointer-events-none absolute -left-2 top-4 hidden select-none text-[7rem] leading-none text-cream/[0.05] lg:block"
              aria-hidden="true"
            >
              KENYA
            </span>
          </div>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="eyebrow">The Kenyan Flagship</p>
              <h2 className="headline mt-6 text-4xl text-cream md:text-5xl">
                Joska Palms —
                <span className="gold-italic normal-case"> where families put down roots</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-mist/85">
                Minutes from Kangundo Road and under an hour from the CBD,
                {flagship.name} pairs the calm of a master-planned estate with
                the certainty of a freehold title in your name. It is the
                property we are proudest to put our name behind — which is why
                it leads everything we do.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-9 grid gap-3 sm:grid-cols-2">
              {kenyaBullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 shrink-0 text-gold"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-sm leading-relaxed text-sand">{item}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={240} className="mt-10 flex flex-wrap gap-8 border-t border-line pt-8">
              {[
                { v: "KES 6.9M", l: "From" },
                { v: "50×100", l: "Ft Plots" },
                { v: "12 mo", l: "Payment Plan" },
              ].map((s) => (
                <div key={s.l}>
                  <span className="headline block text-3xl text-goldlight">{s.v}</span>
                  <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-sand">
                    {s.l}
                  </span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={320} className="mt-10 flex flex-wrap gap-4">
              <Link href="/properties/joska-palms" className="btn-gold">
                <span>View the Residences</span>
              </Link>
              <Link href="/destinations" className="btn-outline">
                <span>Why Kenya</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
