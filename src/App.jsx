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
import DrivePage from "./components/DrivePage.jsx";
import FeaturesPage from "./components/FeaturesPage.jsx";
import HelpPage from "./components/HelpPage.jsx";
import PricingPage from "./components/PricingPage.jsx";
import CommutePage from "./components/CommutePage.jsx";
import FamilyTrackingPage from "./components/FamilyTrackingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import { HOW_PAGE, DRIVE_PAGE, FEATURES_PAGE, HELP_PAGE, PRICING_PAGE, COMMUTE_PAGE, FAMILY_PAGE, ABOUT_PAGE } from "./data/content.js";

/* Minimal hash router: "#/how-it-works", "#/drive", "#/features", "#/commute-features", "#/family-tracking", "#/about", "#/help" and "#/pricing" are pages, any other hash is a home-page anchor. */
const getPage = () => {
  const { hash } = window.location;
  if (hash === HOW_PAGE) return "how";
  if (hash === DRIVE_PAGE) return "drive";
  if (hash === FEATURES_PAGE) return "features";
  if (hash === HELP_PAGE) return "help";
  if (hash === PRICING_PAGE) return "pricing";
  if (hash === COMMUTE_PAGE) return "commute";
  if (hash === FAMILY_PAGE) return "family";
  if (hash === ABOUT_PAGE) return "about";
  return "home";
};

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
    if (page !== "home" || !hash) {
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
        ) : page === "drive" ? (
          <DrivePage />
        ) : page === "features" ? (
          <FeaturesPage />
        ) : page === "help" ? (
          <HelpPage />
        ) : page === "pricing" ? (
          <PricingPage />
        ) : page === "commute" ? (
          <CommutePage />
        ) : page === "family" ? (
          <FamilyTrackingPage />
        ) : page === "about" ? (
          <AboutPage />
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
