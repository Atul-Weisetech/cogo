import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import HowItWorksPage from "./components/HowItWorksPage.jsx";
import WhyCogo from "./components/WhyCogo.jsx";
import Stats from "./components/Stats.jsx";
import WomenMode from "./components/WomenMode.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Cities from "./components/Cities.jsx";
import Faq from "./components/Faq.jsx";
import AppCta from "./components/AppCta.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { HOW_PAGE } from "./data/content.js";

/* Minimal hash router: "#/how-it-works" is a page, any other hash is a home-page anchor. */
const getPage = () => (window.location.hash === HOW_PAGE ? "how" : "home");

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  /* After the page swaps, jump to the requested anchor (or the top for a page). */
  useEffect(() => {
    const { hash } = window.location;
    if (page === "how" || !hash) {
      window.scrollTo(0, 0);
    } else {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [page]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar page={page} />

      <main id="main">
        {page === "how" ? (
          <HowItWorksPage />
        ) : (
          <>
            <Hero />
            <HowItWorks />
            <WhyCogo />
            <Stats />
            <WomenMode />
            <Testimonials />
            <Cities />
            <Faq />
            <AppCta />
          </>
        )}
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
