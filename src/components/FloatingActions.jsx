import { site } from "@/data/site";

/** Sticky WhatsApp + call actions, mirroring the original site's quick actions. */
export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hello UserCare Properties, I would like to make an enquiry."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_10px_30px_rgba(200,161,94,0.35)] transition-transform duration-300 hover:scale-105"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Zm-5.5 8.1a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 1 1 8.3 4.6Zm0-21.5a11.8 11.8 0 0 0-10 18L2 24l5.7-1.5A11.8 11.8 0 1 0 12 .9Z" />
        </svg>
      </a>
      <a
        href={`tel:+${site.phoneIntl}`}
        aria-label={`Call ${site.phoneDisplay}`}
        className="grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-ink/85 text-gold backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-ink"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      </a>
    </div>
  );
}
