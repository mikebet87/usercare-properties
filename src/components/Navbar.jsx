"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

function Wordmark({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="UserCare Properties — home">
      <span className="grid h-10 w-10 place-items-center border border-gold/60 font-display text-xl text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
        U
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-lg uppercase tracking-[0.18em] text-cream">
            UserCare
          </span>
          <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.5em] text-gold">
            Properties
          </span>
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`nav-link text-[0.7rem] font-semibold uppercase tracking-[0.28em] transition-colors hover:text-goldlight ${
                  isActive(item.href) ? "is-active text-goldlight" : "text-cream/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:+${site.phoneIntl}`}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cream/70 transition-colors hover:text-goldlight"
            >
              {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-gold">
              <span>Enquire</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-7 bg-cream" />
            <span className="h-px w-5 self-end bg-gold" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <Wordmark compact />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center text-cream"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M4 4l16 16M20 4L4 20" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`headline border-b border-line py-4 text-4xl transition-all duration-500 hover:pl-4 hover:text-goldlight ${
                isActive(item.href) ? "text-goldlight" : "text-cream"
              } ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-10">
          <a href={`tel:+${site.phoneIntl}`} className="block text-sm tracking-[0.2em] text-sand">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm tracking-[0.2em] text-sand">
            {site.email}
          </a>
        </div>
      </div>
    </>
  );
}
