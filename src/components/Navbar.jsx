import { useEffect, useRef, useState } from "react";
import Logo from "./common/Logo.jsx";
import Icon from "./common/Icon.jsx";
import {
  navLinks,
  navCta,
  HOW_PAGE,
  DRIVE_PAGE,
  FEATURES_PAGE,
  HELP_PAGE,
} from "../data/content.js";
import "./Navbar.css";

const THEME_KEY = "cogo-theme";

const readTheme = () => {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

/* Close a popover on an outside click or Escape. */
function useDismiss(open, onClose) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return ref;
}

function Dropdown({ item, isActive, onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useDismiss(open, () => setOpen(false));
  const active = item.children.some((child) => isActive(child.href));

  return (
    <div className="nav__dropdown" ref={ref}>
      <button
        type="button"
        className={`nav__link nav__link--btn ${active ? "is-active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Icon name="chevron" size={14} className="nav__caret" />
      </button>

      {open ? (
        <ul className="nav__menu">
          {item.children.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                className={isActive(child.href) ? "is-active" : ""}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ThemeSwitch({ theme, onToggle }) {
  const dark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      className={`nav__theme ${dark ? "is-dark" : ""}`}
      onClick={onToggle}
    >
      <span className="nav__theme-knob">
        {dark ? (
          <svg key="sun" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="4.5" fill="currentColor" />
            <path
              d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg key="moon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor" />
          </svg>
        )}
      </span>
    </button>
  );
}

export default function Navbar({ page = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(readTheme);

  /* Lift the pill off the page once the page leaves the top. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the link whose section is currently in the upper viewport. */
  useEffect(() => {
    if (page !== "home") return undefined;
    const sections = navLinks
      .flatMap((link) => link.children ?? [link])
      .filter((link) => !link.href.startsWith("#/"))
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
  }, [page]);

  const pageHref = { how: HOW_PAGE, drive: DRIVE_PAGE, features: FEATURES_PAGE, help: HELP_PAGE }[page];
  const isActive = (href) => (pageHref ? href === pageHref : active === href.slice(1));

  /* A dropdown entry that duplicates a top-level link (Help, Safety) must not
     light up the dropdown as well. */
  const topHrefs = navLinks.filter((link) => link.href).map((link) => link.href);
  const isChildActive = (href) => !topHrefs.includes(href) && isActive(href);

  /* Remember the theme choice and expose it to CSS as data-theme. */
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* private mode: the choice just won't persist */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

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

  const closeSheet = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container">
        <div className="nav__pill">
          <a href="#home" className="nav__brand" aria-label="Cogo home">
            <Logo width={70} variant={theme === "dark" ? "light" : "dark"} />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) =>
              link.children ? (
                <Dropdown key={link.label} item={link} isActive={isChildActive} />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav__link ${isActive(link.href) ? "is-active" : ""}`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="nav__tools">
            <ThemeSwitch theme={theme} onToggle={toggleTheme} />
            <a href={navCta.href} className="btn btn--dark btn--sm nav__cta">
              {navCta.label}
            </a>
          </div>

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
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="nav__sheet-group">
                <span className="nav__sheet-label">{link.label}</span>
                {link.children.map((child) => (
                  <a key={child.label} href={child.href} className="nav__sheet-sub" onClick={closeSheet}>
                    {child.label}
                    <Icon name="arrowRight" size={18} />
                  </a>
                ))}
              </div>
            ) : (
              <a key={link.label} href={link.href} onClick={closeSheet}>
                {link.label}
                <Icon name="arrowRight" size={18} />
              </a>
            )
          )}
        </nav>

        <div className="nav__sheet-tools">
          <ThemeSwitch theme={theme} onToggle={toggleTheme} />
          <a href={navCta.href} className="btn btn--dark btn--sm" onClick={closeSheet}>
            {navCta.label}
          </a>
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="nav__scrim"
          aria-label="Close menu"
          onClick={closeSheet}
        />
      ) : null}
    </header>
  );
}
