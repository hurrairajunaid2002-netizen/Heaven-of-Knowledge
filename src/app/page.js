import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBook from "@/components/FeaturedBook";
import Books from "@/components/Books";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedBook />
        <Books />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
