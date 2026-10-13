import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

/** Full-width closing call-to-action band used at the foot of pages. */
export default function CtaBand({
  image = "/images/savanna-giraffe.jpg",
  alt = "Golden savanna at sunrise",
  eyebrow = "Begin the Conversation",
  title = "Ready to walk your future street?",
  copy = "Speak with a dedicated advisor today — in Nairobi, in Dubai, or wherever in the world you are.",
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="img-duotone object-cover"
        />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow justify-center">{eyebrow}</p>
          <h2 className="headline mx-auto mt-6 max-w-3xl text-4xl text-cream md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-mist/85">{copy}</p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hello UserCare Properties, I would like to speak to an advisor."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <span>Chat on WhatsApp</span>
            </a>
            <Link href="/contact" className="btn-outline">
              <span>Request a Consultation</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
