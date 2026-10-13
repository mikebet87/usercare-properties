import Reveal from "@/components/Reveal";
import { whyKenya } from "@/data/site";

/** Kenya investment case — stat band. */
export default function WhyKenya() {
  return (
    <section className="border-y border-line bg-coal py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">The Case for Kenya</p>
          <h2 className="headline mt-6 max-w-2xl text-4xl text-cream md:text-5xl">
            An economy building <span className="gold-italic normal-case">upward</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-sand">
            Every year, billions in diaspora capital flow home — much of it
            into land and housing along Nairobi&apos;s eastern corridor. The
            question is no longer whether to invest at home, but where. We
            believe the answer is a walled gate on Kangundo Road.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4">
          {whyKenya.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 90}
              className={`border-line px-2 py-8 md:px-8 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
            >
              <span className="headline block text-3xl text-goldlight md:text-4xl">
                {item.value}
              </span>
              <span className="mt-3 block text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-sand">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
