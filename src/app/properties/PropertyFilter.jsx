"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import Reveal from "@/components/Reveal";
import { properties } from "@/data/site";

const filters = [
  { key: "all", label: "All Properties" },
  { key: "Kenya", label: "Kenya" },
  { key: "Dubai", label: "Dubai" },
];

/** Portfolio grid with Kenya / Dubai filtering. */
export default function PropertyFilter() {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? properties : properties.filter((p) => p.badge === active);

  // Kenyan flagship always leads.
  const sorted = [...visible].sort((a, b) =>
    b.highlight === true ? 1 : a.highlight === true ? -1 : 0
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
            className={`border px-5 py-2.5 text-[0.64rem] font-semibold uppercase tracking-[0.24em] transition-all duration-400 ${
              active === f.key
                ? "border-gold bg-gold/10 text-goldlight"
                : "border-line text-sand hover:border-sand hover:text-cream"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto text-[0.62rem] uppercase tracking-[0.3em] text-sand">
          {sorted.length} {sorted.length === 1 ? "Residence" : "Residences"}
        </span>
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
        {sorted.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 110}>
            <PropertyCard property={p} wide={p.highlight} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
