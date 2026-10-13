"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { services } from "@/data/site";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Our Services</p>
          <h2 className="headline mt-6 max-w-3xl text-4xl text-cream md:text-6xl">
            End-to-End Expertise,
            <br />
            <span className="gold-italic normal-case">Effortlessly Delivered</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* Accordion list */}
          <div>
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <Reveal key={s.index} delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`group flex w-full items-baseline gap-6 border-b border-line py-7 text-left transition-colors ${
                      isActive ? "border-gold/40" : ""
                    }`}
                  >
                    <span
                      className={`headline text-sm transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-sand/50"
                      }`}
                    >
                      {s.index}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`headline block text-xl transition-colors duration-300 md:text-2xl ${
                          isActive ? "text-goldlight" : "text-cream group-hover:text-goldlight"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span
                        className={`mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-sand transition-all duration-500 ${
                          isActive ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        {s.market}
                      </span>
                      <span
                        className={`grid transition-all duration-500 ${
                          isActive
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="block max-w-xl text-sm leading-relaxed text-mist/85">
                            {s.copy}
                          </span>
                        </span>
                      </span>
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`shrink-0 self-center transition-transform duration-500 ${
                        isActive ? "rotate-45 text-gold" : "text-sand"
                      }`}
                    >
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Preview image */}
          <Reveal delay={200} className="relative hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden">
              {services.map((s, i) => (
                <Image
                  key={s.index}
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`img-duotone object-cover transition-all duration-700 ${
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <span className="headline absolute bottom-6 left-6 text-lg text-cream/90">
                {current.title}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
