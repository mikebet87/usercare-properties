import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { values } from "@/data/site";

export const metadata = {
  title: "About | UserCare Properties",
  description:
    "A boutique advisory founded on a simple conviction: acquiring a fine address should feel as considered as the property itself. Nairobi-born, Dubai-fluent.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          image="/images/interior2.jpg"
          alt="Architecturally refined living space bathed in natural light"
          eyebrow="About"
          title="Redefining Modern Elegance"
          copy="One home at a time, one family at a time — from Joska to Jumeirah."
        />

        {/* Story */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow">Our Story</p>
                <h2 className="headline mt-6 text-4xl text-cream md:text-5xl">
                  Nairobi-born,
                  <span className="gold-italic normal-case"> Dubai-fluent</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-xl text-sm leading-relaxed text-mist/85">
                  UserCare Properties was founded on a simple conviction: that
                  acquiring a fine address — whether a Dubai sky-home or a family
                  haven in Joska — should feel as considered as the property itself.
                  We pair deep market intelligence with white-glove service, guiding
                  each client from first consultation to key handover.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-mist/85">
                  Our advisors split their time between Nairobi and Dubai, giving
                  every client — resident or diaspora — a single, accountable point
                  of contact across both markets.
                </p>
              </Reveal>
              <Reveal delay={220} className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="border-l border-gold/50 pl-5">
                  <h3 className="headline text-lg text-goldlight">Our Philosophy</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">
                    Luxury is not excess — it is precision, proportion and purpose.
                    We select only what we would own ourselves.
                  </p>
                </div>
                <div className="border-l border-gold/50 pl-5">
                  <h3 className="headline text-lg text-goldlight">Our Promise</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">
                    Transparent pricing, developer-direct allocations, and honest
                    counsel — even when it means advising you to wait.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="card-zoom relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
                <Image
                  src="/images/kenya-home.jpg"
                  alt="A refined family home in a gated Kenyan community"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="img-duotone object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="headline text-2xl leading-snug text-cream md:text-3xl">
                    Architecture
                    <br />
                    <span className="gold-italic normal-case">of trust</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-line bg-coal py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <p className="eyebrow">What We Stand For</p>
              <h2 className="headline mt-6 text-4xl text-cream md:text-5xl">
                Four <span className="gold-italic normal-case">values</span>, one standard
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 100} className="border-t border-gold/40 pt-6">
                  <h3 className="headline text-xl text-goldlight">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">{v.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Stats />

        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
