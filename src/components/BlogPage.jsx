import { useId, useRef, useState } from "react";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { blogPage } from "../data/content.js";
import heroArt from "../assets/images/share a ride.png";
import liveImg from "../assets/images/cab live.png";
import commuteImg from "../assets/images/real commutes.png";
import phoneImg from "../assets/images/phone ride.png";
import aboutImg from "../assets/images/about.png";
import "./BlogPage.css";

const { hero, pageSize, categories, posts, newsletter, empty } = blogPage;

/* keyed by the `image` name in the content */
const postImages = { live: liveImg, commute: commuteImg, phone: phoneImg, share: heroArt, about: aboutImg };

const ALL = "All";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* newest first, whatever order the content is written in */
const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

/* "2026-10-29" -> "29.10.2026", as in the design */
const formatDate = (iso) => iso.split("-").reverse().join(".");

function Hero({ onReadMore }) {
  return (
    <section className="bp-hero">
      <div className="container bp-hero__grid">
        <div className="bp-hero__copy">
          <Reveal as="h1" className="bp-hero__title">
            {hero.titleLead} <span className="text-green">{hero.titleHighlight}</span>
          </Reveal>
          <Reveal as="p" className="bp-hero__text" delay={80}>
            {hero.text}
          </Reveal>
          <Reveal delay={160}>
            <button type="button" className="btn btn--dark btn--sm bp-hero__cta" onClick={onReadMore}>
              {hero.cta}
              <Icon name="arrowRight" size={16} />
            </button>
          </Reveal>
        </div>

        <Reveal className="bp-hero__art" delay={120}>
          <img src={heroArt} alt="A green car next to a phone showing a map with a pickup pin" />
        </Reveal>
      </div>
    </section>
  );
}

function Filters({ active, onChange }) {
  return (
    <ul className="bp-filters" aria-label="Filter stories by category">
      {[ALL, ...categories].map((name) => (
        <li key={name}>
          <button
            type="button"
            className={`bp-chip ${active === name ? "is-active" : ""}`}
            aria-pressed={active === name}
            onClick={() => onChange(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}

function PostCard({ post, delay }) {
  return (
    <Reveal as="article" className="bp-card" delay={delay}>
      <div className="bp-card__media">
        <img src={postImages[post.image]} alt="" loading="lazy" />
      </div>
      <div className="bp-card__body">
        <span className="bp-tag">{post.category}</span>
        <h3 className="bp-card__title">{post.title}</h3>
        <p className="bp-card__excerpt">{post.excerpt}</p>
        <p className="bp-card__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.minutes} min read</span>
        </p>
      </div>
    </Reveal>
  );
}

function Pagination({ page, pages, onChange }) {
  return (
    <nav className="bp-pager" aria-label="Pagination">
      <button
        type="button"
        className="bp-pager__btn bp-pager__btn--prev"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <Icon name="chevron" size={16} />
      </button>

      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          className={`bp-pager__btn ${n === page ? "is-active" : ""}`}
          aria-label={`Page ${n}`}
          aria-current={n === page ? "page" : undefined}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        className="bp-pager__btn bp-pager__btn--next"
        aria-label="Next page"
        disabled={page === pages}
        onClick={() => onChange(page + 1)}
      >
        <Icon name="chevron" size={16} />
      </button>
    </nav>
  );
}

function Newsletter() {
  const uid = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return setError("Please enter your email.");
    if (!EMAIL.test(value)) return setError("That email doesn't look right.");

    /* TODO: send `value` to the newsletter service once there is an endpoint. */
    setError("");
    setSent(true);
  };

  return (
    <section className="bp-news">
      <div className="container">
        <Reveal as="h2" className="bp-news__title">
          {newsletter.titleLead} <span className="text-green">{newsletter.titleHighlight}</span>
        </Reveal>

        <Reveal delay={80}>
          {sent ? (
            <p className="bp-news__success" role="status">
              {newsletter.success}
            </p>
          ) : (
            <form className="bp-news__form" onSubmit={onSubmit} noValidate>
              <label htmlFor={`${uid}-email`} className="sr-only">
                Email address
              </label>
              <input
                id={`${uid}-email`}
                className="bp-news__input"
                type="email"
                name="email"
                autoComplete="email"
                placeholder={newsletter.placeholder}
                value={email}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${uid}-error` : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
              />
              <button type="submit" className="btn btn--dark btn--sm bp-news__btn">
                {newsletter.cta}
              </button>
            </form>
          )}

          {error ? (
            <p id={`${uid}-error`} className="bp-news__error" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? null : <p className="bp-news__note">{newsletter.note}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export default function BlogPage() {
  const listRef = useRef(null);
  const [category, setCategory] = useState(ALL);
  const [page, setPage] = useState(1);

  const visible = category === ALL ? sortedPosts : sortedPosts.filter((p) => p.category === category);
  const pages = Math.max(1, Math.ceil(visible.length / pageSize));
  const shown = visible.slice((page - 1) * pageSize, page * pageSize);

  const scrollToList = () => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const changeCategory = (name) => {
    setCategory(name);
    setPage(1);
  };

  const changePage = (n) => {
    setPage(n);
    scrollToList();
  };

  return (
    <>
      <Hero onReadMore={scrollToList} />

      <section className="bp-list" ref={listRef} aria-label="Stories">
        <div className="container">
          <Filters active={category} onChange={changeCategory} />

          {shown.length ? (
            <div className="bp-grid">
              {/* keyed by category + page so a new set of cards animates in */}
              {shown.map((post, i) => (
                <PostCard key={`${category}-${page}-${post.id}`} post={post} delay={(i % 3) * 80} />
              ))}
            </div>
          ) : (
            <p className="bp-empty">{empty}</p>
          )}

          {pages > 1 ? <Pagination page={page} pages={pages} onChange={changePage} /> : null}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
