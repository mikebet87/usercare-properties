import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PropertyFilter from "./PropertyFilter";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "Properties | UserCare Properties — Kenya & Dubai",
  description:
    "Browse the UserCare portfolio: Joska Palms — our Kenyan flagship gated community — alongside hand-picked Dubai launches including DAMAC Islands 2, Azure 2 and Chelsea Residences.",
};

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          image="/images/estate-dusk.jpg"
          alt="Luxury homes glowing at dusk"
          eyebrow="Portfolio"
          title="Residences Worthy of Your Name"
          copy="Kenya leads our story. Dubai extends it. Every listing below is developer-direct, personally vetted, and held to a single standard: would we own it ourselves?"
        />
        <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <PropertyFilter />
        </section>
        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
