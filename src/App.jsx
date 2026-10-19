import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WhyCogo from "./components/WhyCogo.jsx";
import Stats from "./components/Stats.jsx";
import WomenMode from "./components/WomenMode.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Cities from "./components/Cities.jsx";
import Faq from "./components/Faq.jsx";
import AppCta from "./components/AppCta.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <HowItWorks />
        <WhyCogo />
        <Stats />
        <WomenMode />
        <Testimonials />
        <Cities />
        <Faq />
        <AppCta />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
