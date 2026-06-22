import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Solutions from "@/components/Solutions";
import MarqueeStrip from "@/components/MarqueeStrip";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Solutions />
        <MarqueeStrip />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
