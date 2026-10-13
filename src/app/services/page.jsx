import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { process } from "@/data/site";

export const metadata = {
  title: "Services | UserCare Properties",
  description:
    "Investment advisory, residential sales, diaspora purchase support and legal facilitation — a complete, end-to-end real estate service across Kenya and Dubai.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          image="/images/handover.jpg"
          alt="Keys handed over to a new homeowner"
          eyebrow="Services"
          title="Effortless, End to End"
          copy="Buying property — at home or abroad — should feel as considered as the property itself. Four disciplines, one accountable advisor, zero red tape."
        />

        <Services />

        {/* Process */}
        <section className="border-t border-line bg-coal py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <p className="eyebrow">How We Work</p>
              <h2 className="headline mt-6 max-w-2xl text-4xl text-cream md:text-5xl">
                Four steps to <span className="gold-italic normal-case">the keys</span>
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 100} className="border-t border-gold/40 pt-6">
                  <span className="headline text-sm text-gold">{p.step}</span>
                  <h3 className="headline mt-3 text-xl text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand">{p.copy}</p>
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
