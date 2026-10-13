"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const interests = ["Dubai Investment", "Kenya Property", "Diaspora Purchase", "General Enquiry"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: interests[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello UserCare Properties,\n\nMy name is ${form.name}.\nInterest: ${form.interest}\n${form.message}\n\nYou can reach me on: ${form.phone}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div
        className="pointer-events-none absolute -right-24 top-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        <span className="headline block text-[16rem] leading-none text-cream/[0.03]">
          UC
        </span>
      </div>

      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        {/* Left: invitation + details */}
        <div>
          <Reveal>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="headline mt-6 text-4xl text-cream md:text-6xl">
              Begin Your
              <br />
              <span className="gold-italic normal-case">next chapter</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-sand">
              Tell us what you are looking for and a dedicated advisor will
              respond within one business day — with options, not sales
              pressure.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-12 space-y-7">
            <a href={`tel:+${site.phoneIntl}`} className="group flex items-start gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-line text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-sand">
                  Call or WhatsApp
                </span>
                <span className="mt-1.5 block text-lg text-cream transition-colors group-hover:text-goldlight">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <a href={`mailto:${site.email}`} className="group flex items-start gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-line text-gold transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-sand">
                  Email
                </span>
                <span className="mt-1.5 block text-lg text-cream transition-colors group-hover:text-goldlight">
                  {site.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center border border-line text-gold">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-sand">
                  Offices
                </span>
                <span className="mt-1.5 block text-lg text-cream">{site.locations}</span>
                <span className="mt-1 block text-xs tracking-[0.14em] text-sand">{site.hours}</span>
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={200}>
          <form
            onSubmit={submit}
            className="border border-line bg-coal p-8 md:p-12"
            aria-label="Enquiry form"
          >
            <h3 className="headline text-2xl text-cream">Request a Consultation</h3>

            <div className="mt-9 grid gap-7 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-sand">
                  Full Name
                </span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm text-cream outline-none transition-colors placeholder:text-sand/40 focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-sand">
                  Phone / WhatsApp
                </span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+254 700 000 000"
                  className="mt-3 w-full border-b border-line bg-transparent pb-3 text-sm text-cream outline-none transition-colors placeholder:text-sand/40 focus:border-gold"
                />
              </label>
            </div>

            <fieldset className="mt-9">
              <legend className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-sand">
                I am interested in
              </legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {interests.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, interest: item }))}
                    aria-pressed={form.interest === item}
                    className={`border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] transition-all duration-400 ${
                      form.interest === item
                        ? "border-gold bg-gold/10 text-goldlight"
                        : "border-line text-sand hover:border-sand hover:text-cream"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="mt-9 block">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-sand">
                Message
              </span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us about your goals…"
                className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 text-sm text-cream outline-none transition-colors placeholder:text-sand/40 focus:border-gold"
              />
            </label>

            <button type="submit" className="btn-gold mt-10 w-full">
              <span>{sent ? "Open WhatsApp to Send" : "Send Enquiry"}</span>
            </button>
            <p className="mt-4 text-center text-[0.62rem] tracking-[0.14em] text-sand">
              Your enquiry opens in WhatsApp — no spam, ever.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
