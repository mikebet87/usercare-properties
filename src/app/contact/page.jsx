import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "Contact | UserCare Properties",
  description:
    "Speak with a dedicated advisor — in Nairobi, in Dubai, or wherever in the world you are. Call, WhatsApp or request a consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          image="/images/facade.jpg"
          alt="Architectural facade reaching toward the sky"
          eyebrow="Contact"
          title="Begin the Conversation"
          copy="Tell us what you are looking for and a dedicated advisor will respond within one business day — with options, not sales pressure."
        />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
