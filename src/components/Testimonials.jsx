import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { testimonials } from "../data/content.js";
import "./Testimonials.css";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((next) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  /* Auto-advance, but stop while the reader is hovering or focused inside. */
  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = setInterval(() => go(index + 1), 7000);
    return () => clearInterval(timerRef.current);
  }, [index, paused, go]);

  const active = testimonials[index];

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
          <span className="tm__stack tm__stack--2" aria-hidden="true" />
          <span className="tm__stack tm__stack--1" aria-hidden="true" />

          <figure className="tm-card" key={index}>
            <div className="tm-card__stars" aria-label={`${active.rating} out of 5 stars`}>
              {Array.from({ length: active.rating }).map((_, i) => (
                <Icon key={i} name="star" size={13} />
              ))}
            </div>

            <blockquote className="tm-card__quote">{active.quote}</blockquote>

            <figcaption className="tm-card__person">
              <span className="tm-card__avatar" aria-hidden="true">
                {initials(active.name)}
              </span>
              <span className="tm-card__meta">
                <span className="tm-card__name">{active.name}</span>
                <span className="tm-card__role">{active.role}</span>
              </span>
            </figcaption>
          </figure>

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
