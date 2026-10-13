import Image from "next/image";
import Link from "next/link";

/**
 * Inner-page banner: full-width image, dark gradient, eyebrow + serif title.
 */
export default function PageHeader({ image, alt = "", eyebrow, title, copy }) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="img-duotone animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20">
        <nav aria-label="Breadcrumb" className="animate-fade-in">
          <Link
            href="/"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-sand transition-colors hover:text-goldlight"
          >
            Home
          </Link>
          <span className="mx-3 text-sand/50">/</span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-gold">
            {eyebrow}
          </span>
        </nav>
        <h1 className="headline mt-6 max-w-4xl animate-rise text-[clamp(2.4rem,7vw,5.5rem)] text-cream" style={{ animationDelay: "120ms" }}>
          {title}
        </h1>
        {copy && (
          <p className="mt-6 max-w-xl animate-rise text-[0.95rem] leading-relaxed text-mist/90" style={{ animationDelay: "240ms" }}>
            {copy}
          </p>
        )}
      </div>
    </section>
  );
}
