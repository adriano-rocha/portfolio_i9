import Header from "../components/Header";
import Hero from "../sections/Hero";
import Process from "../sections/Process";
import About from "../sections/About";
import Footer from "../sections/Footer";
import WhatsAppButton from "../components/WhatsAppFloat";
import Projects from "../sections/Projects";
import CookieBanner from "../components/CookieBanner";
import Comparison from "../sections/Comparison";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Comparison />
      <Process />
      <About />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </main>
  );
}
