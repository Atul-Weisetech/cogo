import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { testimonials } from "../data/content.js";
import "./Testimonials.css";

const SHUFFLE_MS = 550;

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

function Card({ item, className = "", hidden = false }) {
  return (
    <figure className={`tm-card ${className}`.trim()} aria-hidden={hidden || undefined}>
      <div className="tm-card__stars" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Icon key={i} name="star" size={13} />
        ))}
      </div>

      <blockquote className="tm-card__quote">{item.quote}</blockquote>

      <figcaption className="tm-card__person">
        <span className="tm-card__avatar" aria-hidden="true">
          {initials(item.name)}
        </span>
        <span className="tm-card__meta">
          <span className="tm-card__name">{item.name}</span>
          <span className="tm-card__role">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback(
    (next) => {
      const target = (next + testimonials.length) % testimonials.length;
      if (target === index) return;
      setPrevIndex(index);
      setIndex(target);
    },
    [index]
  );

  /* Auto-advance, but stop while the reader is hovering or focused inside. */
  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = setInterval(() => go(index + 1), 7000);
    return () => clearInterval(timerRef.current);
  }, [index, paused, go]);

  /* Drop the outgoing card once its sink-into-the-stack animation ends. */
  useEffect(() => {
    if (prevIndex === null) return undefined;
    const t = setTimeout(() => setPrevIndex(null), SHUFFLE_MS);
    return () => clearTimeout(t);
  }, [prevIndex, index]);

  return (
    <section className="section tm-section" aria-label="Customer testimonials">
      <div className="container">
        <Reveal className="tm__head">
          <h2 className="section-title">
            Hear from <span className="text-green">happy customers</span>
          </h2>
        </Reveal>

        <Reveal
          className="tm"
          delay={80}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* stacked cards peeking out behind the live one */}
          <span className="tm__stack tm__stack--2" key={`s2-${index}`} aria-hidden="true" />
          <span className="tm__stack tm__stack--1" key={`s1-${index}`} aria-hidden="true" />

          {/* outgoing card, sinking down into the stack */}
          {prevIndex !== null && (
            <Card
              key={`out-${prevIndex}-${index}`}
              item={testimonials[prevIndex]}
              className="tm-card--out"
              hidden
            />
          )}

          {/* incoming card, rising from the stack to the top */}
          <Card key={index} item={testimonials[index]} className="tm-card--in" />

          <button
            type="button"
            className="tm__arrow tm__arrow--prev"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
          >
            <Icon name="chevron" size={18} />
          </button>

          <button
            type="button"
            className="tm__arrow tm__arrow--next"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
          >
            <Icon name="chevron" size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
