import Link from "next/link";

export const metadata = {
  title: "Page Not Found | UserCare Properties",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="eyebrow justify-center">Error 404</p>
      <h1 className="headline mt-8 text-[clamp(3rem,10vw,7rem)] leading-none text-cream">
        Off the <span className="gold-italic normal-case">map</span>
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-sand">
        The address you are looking for does not exist — but plenty of fine ones
        do. Let us walk you back to the portfolio.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn-gold">
          <span>Return Home</span>
        </Link>
        <Link href="/properties" className="btn-outline">
          <span>View Properties</span>
        </Link>
      </div>
    </main>
  );
}
