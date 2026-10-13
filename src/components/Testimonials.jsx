"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section
      className="border-y border-line bg-coal py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
        <Reveal>
          <p className="eyebrow justify-center">Client Stories</p>
        </Reveal>

        <div className="relative mt-10 min-h-[210px] md:min-h-[180px]">
          {testimonials.map((item, i) => (
            <blockquote
              key={item.name}
              className={`absolute inset-0 transition-all duration-700 ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-4 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <p className="headline text-2xl leading-snug text-cream md:text-3xl">
                &ldquo;{item.quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-goldlight">
            {t.name}
          </span>
          <span className="h-3 w-px bg-line" />
          <span className="text-[0.62rem] uppercase tracking-[0.24em] text-sand">
            {t.role}
          </span>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === index ? "w-12 bg-gold" : "w-6 bg-line hover:bg-sand"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
