import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import QuoteSection from "@/components/QuoteSection";
import Gallery from "@/components/Gallery";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <QuoteSection />
        <Gallery />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
