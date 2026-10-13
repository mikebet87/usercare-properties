import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Stats from "@/components/Stats";
import KenyaHighlight from "@/components/KenyaHighlight";
import Projects from "@/components/Projects";
import Destinations from "@/components/Destinations";
import WhyKenya from "@/components/WhyKenya";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <KenyaHighlight />
        <Projects />
        <Destinations />
        <WhyKenya />
        <ServicesPreview />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
