import { useEffect, useState } from "react";
import Logo from "./common/Logo.jsx";
import Icon from "./common/Icon.jsx";
import { navLinks } from "../data/content.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* Lift the pill off the page once the page leaves the top. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the link whose section is currently in the upper viewport. */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container">
        <div className="nav__pill">
          <a href="#home" className="nav__brand" aria-label="Cogo home">
            <Logo width={70} />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link ${active === link.href.slice(1) ? "is-active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav__sheet ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav className="nav__sheet-links" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <Icon name="arrowRight" size={18} />
            </a>
          ))}
        </nav>
      </div>

      {open ? (
        <button
          type="button"
          className="nav__scrim"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
