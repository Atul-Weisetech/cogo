import { useId, useRef, useState } from "react";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { helpCenter } from "../data/content.js";
import heroBg from "../assets/images/price-banner.png";
import gettingStartedIcon from "../assets/images/Getting started.png";
import takingIcon from "../assets/images/Taking a ride.png";
import offeringIcon from "../assets/images/Offering a ride.svg";
import verificationIcon from "../assets/images/Verification.png";
import paymentsIcon from "../assets/images/Payments & wallet.png";
import safetyIcon from "../assets/images/Safety.svg";
import womenIcon from "../assets/images/Women Mode.png";
import accountIcon from "../assets/images/Account & privacy.png";
import groupsIcon from "../assets/images/Groups & Marketplace.svg";
import "./HelpPage.css";

const { hero, categories, defaultCategory, contact } = helpCenter;

/* keyed by category id */
const categoryIcons = {
  "getting-started": gettingStartedIcon,
  taking: takingIcon,
  offering: offeringIcon,
  verification: verificationIcon,
  payments: paymentsIcon,
  safety: safetyIcon,
  women: womenIcon,
  account: accountIcon,
  groups: groupsIcon,
};

/* The app uses hash routing, so a plain "#section" link would switch to the
   home page. Scroll within this page instead. */
const scrollTo = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

/* "Taking a ride" -> ["Taking a", "ride"]: the last word is the green one */
const splitLast = (text) => {
  const at = text.lastIndexOf(" ");
  return at === -1 ? ["", text] : [text.slice(0, at), text.slice(at + 1)];
};

/* Every question across all categories, tagged for search results */
const allFaqs = categories.flatMap((cat) =>
  cat.faqs.map((faq, i) => ({ ...faq, key: `${cat.id}-${i}`, category: cat.label }))
);

/* All words typed must appear in the question or the answer */
const search = (query) => {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return allFaqs.filter((faq) => {
    const haystack = `${faq.q} ${faq.a}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
};

function Hero({ query, onQuery }) {
  const inputRef = useRef(null);

  return (
    <section className="hp-hero" style={{ "--hp-hero-bg": `url("${heroBg}")` }}>
      <div className="container">
        <Reveal as="h1" className="hp-hero__title">
          {hero.title} <span className="text-green">{hero.highlight}</span>
        </Reveal>

        <Reveal
          as="form"
          role="search"
          className="hp-search"
          delay={100}
          onSubmit={(e) => e.preventDefault()}
          /* the whole pill is the tap target, not just the input inside it */
          onClick={(e) => {
            if (e.target === e.currentTarget || e.target.closest(".hp-search__icon")) inputRef.current?.focus();
          }}
        >
          <span className="hp-search__icon">
            <Icon name="search" size={16} />
          </span>
          <input
            ref={inputRef}
            type="search"
            className="hp-search__input"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder={hero.placeholder}
            aria-label={hero.searchLabel}
            autoComplete="off"
          />
          <button type="submit" className="btn btn--sm btn--dark hp-search__btn">
            {hero.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Categories({ activeId, searching, onSelect }) {
  return (
    <Reveal as="nav" aria-label="Help categories">
      <ul className="hp-cats">
        {categories.map((cat) => {
          const active = !searching && cat.id === activeId;
          return (
            <li key={cat.id}>
              <button
                type="button"
                className={`hp-cat ${active ? "is-active" : ""}`}
                aria-pressed={active}
                onClick={() => onSelect(cat.id)}
              >
                <span className="hp-cat__icon">
                  <img src={categoryIcons[cat.id]} alt="" />
                </span>
                {cat.label}
              </button>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}

function Accordion({ items, showCategory }) {
  const [openKey, setOpenKey] = useState(null);
  const baseId = useId();

  return (
    <ul className="hp-faq">
      {items.map((item) => {
        const open = openKey === item.key;
        const panelId = `${baseId}-panel-${item.key}`;
        const buttonId = `${baseId}-button-${item.key}`;

        return (
          <li key={item.key} className={`hp-faq__item ${open ? "is-open" : ""}`}>
            <h3>
              <button
                type="button"
                id={buttonId}
                className="hp-faq__trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenKey(open ? null : item.key)}
              >
                <span className="hp-faq__q">{item.q}</span>
                <span className="hp-faq__chevron">
                  <Icon name="chevron" size={18} />
                </span>
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={buttonId} className="hp-faq__panel">
              <div>
                <p>{item.a}</p>
                {showCategory ? <p className="hp-faq__tag">In {item.category}</p> : null}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Results({ headingRef, query, category }) {
  const searching = query.trim().length > 0;
  const results = searching ? search(query) : category.faqs.map((faq, i) => ({ ...faq, key: `${category.id}-${i}` }));
  const [lead, last] = splitLast(category.label);

  return (
    <div className="hp-results">
      <h2 ref={headingRef} className="hp-results__title">
        {searching ? (
          <>
            Results for <span className="text-green">“{query.trim()}”</span>
          </>
        ) : (
          <>
            {lead} <span className="text-green">{last}</span>
          </>
        )}
      </h2>

      <p className="sr-only" role="status">
        {searching ? `${results.length} ${results.length === 1 ? "result" : "results"} found` : ""}
      </p>

      {results.length ? (
        /* keyed so open panels reset whenever the category or search changes */
        <Accordion key={searching ? `q:${query.trim()}` : category.id} items={results} showCategory={searching} />
      ) : (
        <p className="hp-empty">
          We couldn't find an answer for that. Try different words, pick a category above, or contact support.
        </p>
      )}
    </div>
  );
}

function Aside() {
  return (
    <Reveal as="aside" className="hp-aside" delay={100} aria-label="Contact us">
      {contact.map((card) => (
        <div key={card.title} className="hp-contact">
          <h2 className="hp-contact__title">{card.title}</h2>
          <p className="hp-contact__text">{card.text}</p>
          <a href={card.href} className="btn btn--sm btn--dark" onClick={scrollTo(card.href)}>
            {card.cta}
          </a>
        </div>
      ))}
    </Reveal>
  );
}

export default function HelpPage() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(defaultCategory);
  const headingRef = useRef(null);

  const category = categories.find((cat) => cat.id === activeId) ?? categories[0];

  /* Picking a category leaves search; if the answers are below the fold
     (phones), bring them into view. */
  const select = (id) => {
    setQuery("");
    setActiveId(id);
    const top = headingRef.current?.getBoundingClientRect().top ?? 0;
    if (top > window.innerHeight * 0.7) {
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Hero query={query} onQuery={setQuery} />

      <section className="hp-body">
        <div className="container">
          <div className="hp-wrap">
            <Categories activeId={activeId} searching={query.trim().length > 0} onSelect={select} />

            <div className="hp-main">
              <Results headingRef={headingRef} query={query} category={category} />
              <Aside />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
