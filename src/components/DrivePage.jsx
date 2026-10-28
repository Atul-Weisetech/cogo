import { useState } from "react";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import Faq from "./Faq.jsx";
import { drivePage, testimonials } from "../data/content.js";
import carImg from "../assets/images/Car-d.png";
import ageImg from "../assets/images/18+.svg";
import licImg from "../assets/images/lic.svg";
import rcImg from "../assets/images/rc.svg";
import pucImg from "../assets/images/puc.svg";
import drivingImg from "../assets/images/driving.png";
import certificateImg from "../assets/images/certificate.png";
import docImg from "../assets/images/doc.png";
import bookingImg from "../assets/images/booking.png";
import rulesImg from "../assets/images/rules.png";
import onlyImg from "../assets/images/only.png";
import cancelImg from "../assets/images/cancel.png";
import paysImg from "../assets/images/pays.png";
import cogoImg from "../assets/images/cogo.png";
import payoutImg from "../assets/images/payout.png";
import gstImg from "../assets/images/GST_R.png";
import trackImg from "../assets/images/TRACK.png";
import ratingImg from "../assets/images/rating.png";
import onTimeImg from "../assets/images/on-time.png";
import cancelationImg from "../assets/images/cancelation.png";
import heroBg from"../assets/images/bg-d.jpg";
import heroBgDark from "../assets/images/dark-Banner.jpg";
import "./DrivePage.css";

/* The app uses hash routing, so a plain "#section" link would switch to the
   home page. Scroll within this page instead. */
const scrollTo = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

function Heading({ data, className = "" }) {
  return (
    <Reveal as="h2" className={`section-title dp-title ${className}`.trim()}>
      {data.title} <span className="text-green">{data.highlight}</span>
    </Reveal>
  );
}

function Note({ children, icon = "check" }) {
  return (
    <Reveal className="dp-note">
      <Icon name={icon} size={16} />
      <span>{children}</span>
    </Reveal>
  );
}

function Earnings({ data }) {
  const [tab, setTab] = useState(data.tabs[0].key);
  const active = data.tabs.find((t) => t.key === tab);

  return (
    <section className="dp-earn">
      <div className="container">
        <Heading data={data} className="dp-title--light" />
        <Reveal as="p" className="dp-earn__lead">
          The more you <strong>share</strong>, the more you save - and earn.
        </Reveal>

        <Reveal className="dp-earn__wrap" delay={80}>
          <div className="dp-tabs" role="tablist" aria-label="Fare examples">
            {data.tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={t.key === tab}
                className={`dp-tab ${t.key === tab ? "is-active" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="dp-earn__panel" role="tabpanel">
            <div className="dp-earn__info">
              <div className="dp-route">
                <span className="dp-route__stop">
                  <Icon name="pin" size={22} className="dp-pin dp-pin--from" />
                  {active.from}
                </span>
                <Icon name="arrowRight" size={16} className="dp-route__arrow" />
                <span className="dp-route__stop">
                  <Icon name="pin" size={22} className="dp-pin dp-pin--to" />
                  {active.to}
                </span>
              </div>

              <div className="dp-meta">
                <span>
                  <Icon name="road" size={14} />
                  {active.km} km
                </span>
                <span>
                  <Icon name="seat" size={14} />
                  {active.seats} seats
                </span>
              </div>

              <div className="dp-earn__figures">
                <div className="dp-fig">
                  <span className="dp-fig__label">
                    <Icon name="fuel" size={18} />
                    Suggested
                  </span>
                  <span className="dp-fig__value">
                    ₹ {active.suggested}
                    <small> / seat</small>
                  </span>
                </div>
                <div className="dp-fig dp-fig--max">
                  <span className="dp-fig__label">Up to</span>
                  <span className="dp-fig__value">₹ {active.max}</span>
                  <span className="dp-fig__unit">per trip toward fuel</span>
                </div>
              </div>
            </div>

            <img className="dp-car" src={carImg} alt="A green car beside a stack of rupee coins" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const checkImages = { age: ageImg, licence: licImg, rc: rcImg, puc: pucImg };

function Checklist({ data }) {
  return (
    <ul className="dp-check">
      {data.items.map((item, i) => (
        <Reveal as="li" key={item.text} className={`dp-check__card dp-check__card--${item.tone}`} delay={i * 70}>
          <div className="dp-check__art">
            <img src={checkImages[item.image]} alt="" />
          </div>
          <span className="dp-check__tick">
            <Icon name="check" size={12} />
          </span>
          <p className="dp-check__text">{item.text}</p>
        </Reveal>
      ))}
    </ul>
  );
}

const verifyImages = { driving: drivingImg, certificate: certificateImg, doc: docImg };

function IconCards({ data, cols = 4, status = false }) {
  return (
    <ul className={`dp-cards dp-cards--${cols}`}>
      {data.items.map((item, i) => (
        <Reveal as="li" key={item.title} className="dp-card" delay={i * 70}>
          {item.image ? (
            <span className="dp-card__img">
              <img src={verifyImages[item.image]} alt="" />
            </span>
          ) : (
            <span className="dp-card__icon">
              <Icon name={item.icon} size={22} />
            </span>
          )}
          <h3 className="dp-card__title">{item.title}</h3>
          <p className="dp-card__text">{item.text}</p>
          {status && item.status ? <span className="dp-card__status">{item.status}</span> : null}
        </Reveal>
      ))}
    </ul>
  );
}

const controlImages = { booking: bookingImg, rules: rulesImg, only: onlyImg, cancel: cancelImg };

function ControlCards({ data }) {
  return (
    <ul className="dp-control">
      {data.items.map((item, i) => (
        <Reveal as="li" key={item.title} className="dp-control__card" delay={i * 70}>
          <img className="dp-control__img" src={controlImages[item.image]} alt="" />
          <h3 className="dp-control__title">{item.title}</h3>
          {item.text ? <p className="dp-control__text">{item.text}</p> : null}
        </Reveal>
      ))}
    </ul>
  );
}

const paidImages = { pays: paysImg, cogo: cogoImg, payout: payoutImg, gst: gstImg };

const relImages = { track: trackImg, rating: ratingImg, ontime: onTimeImg, cancelation: cancelationImg };

export default function DrivePage() {
  const { hero, earnings, checklist, verification, control, paid, reliability, feedback } =
    drivePage;

  return (
    <>
      <section
        className="dp-hero"
        style={{ "--dp-hero-bg": `url("${heroBg}")`, "--dp-hero-bg-dark": `url("${heroBgDark}")` }}
      >
        <div className="container dp-hero__grid">
          <div className="dp-hero__copy">
            <Reveal as="h1" className="dp-hero__title">
              {hero.titleTop}
              <br />
              <span className="text-green">{hero.titleBottom}</span>
            </Reveal>
            <Reveal as="p" className="section-lead" delay={90}>
              {hero.lead}
            </Reveal>
            <Reveal className="dp-hero__cta" delay={160}>
              {hero.cta.map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  className={`btn btn--sm ${b.variant === "primary" ? "btn--primary" : "btn--ghost"}`}
                  onClick={scrollTo(b.href)}
                >
                  {b.label}
                  <Icon name="arrowRight" size={16} />
                </a>
              ))}
            </Reveal>
          </div>

        </div>
      </section>

      <Earnings data={earnings} />

      <section className="section dp-section">
        <div className="container">
          <Heading data={checklist} />
          <Checklist data={checklist} />
          <Note icon="info">{checklist.note}</Note>
        </div>
      </section>

      <section id="verification" className="section dp-section dp-section--alt">
        <div className="container">
          <Heading data={verification} />
          <IconCards data={verification} cols={3} status />
          <Note>{verification.note}</Note>
        </div>
      </section>

      <section className="section dp-section dp-section--control">
        <div className="container">
          <Heading data={control} />
          <ControlCards data={control} />
        </div>
      </section>

      <section id="getting-paid" className="section dp-section dp-section--alt">
        <div className="container">
          <Heading data={paid} />
          <ol className="dp-paid">
            {paid.items.map((item, i) => (
              <Reveal as="li" key={item.title} className="dp-paid__card" delay={i * 70}>
                <span className="dp-paid__num">{i + 1}</span>
                <img className="dp-paid__img" src={paidImages[item.image]} alt="" />
                <h3 className="dp-paid__title">{item.title}</h3>
              </Reveal>
            ))}
          </ol>
          <Note icon="shield">{paid.note}</Note>
        </div>
      </section>

      <section className="section dp-section">
        <div className="container">
          <Reveal className="dp-rel">
            <h2 className="dp-rel__title">
              {reliability.title} <span className="text-green">{reliability.highlight}</span>
            </h2>
            <ul className="dp-rel__grid">
              {reliability.items.map((item) => (
                <li key={item.label} className="dp-rel__item">
                  <img className="dp-rel__icon" src={relImages[item.image]} alt="" />
                  <div>
                    <strong className="dp-rel__label">{item.label}</strong>
                    <span className="dp-rel__value">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section dp-section dp-section--alt" aria-label="Driver feedback">
        <div className="container">
          <Heading data={feedback} />
          <ul className="dp-feedback">
            {testimonials.map((t, i) => (
              <Reveal
                as="li"
                key={t.name}
                className={`dp-quote ${i === 1 ? "is-featured" : ""}`}
                delay={i * 80}
              >
                <span className="dp-quote__mark" aria-hidden="true">
                  “
                </span>
                <blockquote className="dp-quote__text">{t.quote}</blockquote>
                <p className="dp-quote__name">— {t.name}</p>
                <p className="dp-quote__role">{t.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Faq />
    </>
  );
}
