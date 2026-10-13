import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-coal">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center border border-gold/60 font-display text-2xl text-gold">
                U
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl uppercase tracking-[0.18em] text-cream">
                  UserCare
                </span>
                <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-gold">
                  Properties
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand">
              A boutique advisory rooted in Kenya, reaching to Dubai — guiding
              families and investors home since day one.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-gold">
              Explore
            </h3>
            <ul className="mt-6 space-y-3.5">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist/80 transition-colors hover:text-goldlight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Flagship */}
          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-gold">
              Flagship
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-mist/80">
              <li>
                <Link href="/properties/joska-palms" className="transition-colors hover:text-goldlight">
                  Joska Palms
                </Link>
              </li>
              <li>
                <Link href="/properties/damac-islands-2" className="transition-colors hover:text-goldlight">
                  DAMAC Islands 2
                </Link>
              </li>
              <li>
                <Link href="/properties/azure-2" className="transition-colors hover:text-goldlight">
                  Azure 2
                </Link>
              </li>
              <li>
                <Link href="/properties/chelsea-residences" className="transition-colors hover:text-goldlight">
                  Chelsea Residences
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-gold">
              Contact
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm text-mist/80">
              <li>
                <a href={`tel:+${site.phoneIntl}`} className="transition-colors hover:text-goldlight">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-goldlight">
                  {site.email}
                </a>
              </li>
              <li>{site.kenyaOffice}</li>
              <li>{site.dubaiDesk}</li>
            </ul>
          </div>
        </div>

        {/* Watermark */}
        <div className="mt-16 overflow-hidden" aria-hidden="true">
          <p className="headline whitespace-nowrap text-center text-[clamp(3rem,11vw,9rem)] leading-none text-cream/[0.05]">
            UserCare Properties
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 md:flex-row">
          <p className="text-[0.62rem] uppercase tracking-[0.24em] text-sand">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[0.62rem] uppercase tracking-[0.24em] text-sand">
            Nairobi · Dubai · For the discerning
          </p>
        </div>
      </div>
    </footer>
  );
}
