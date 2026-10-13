import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="bg-ink" aria-label="Company at a glance">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 90}
            className={`border-line px-6 py-12 md:px-10 md:py-16 ${
              i % 2 === 1 ? "border-l" : ""
            } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="headline block text-5xl text-goldlight md:text-6xl"
            />
            <span className="mt-4 block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-sand">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
