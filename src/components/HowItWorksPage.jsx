import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import Faq from "./Faq.jsx";
import { howPage } from "../data/content.js";
import heroImg from "../assets/images/head.svg";
import gstImg from "../assets/images/gst.svg";
import ratingImg from "../assets/images/rating.svg";
import easilyImg from "../assets/images/easily.svg";
import afterBg from "../assets/images/bg.png";
import minImg from "../assets/images/min.svg";
import liveImg from "../assets/images/live.svg";
import chatImg from "../assets/images/chat.svg";
import sosImg from "../assets/images/sos1.svg";
import needIcon from "../assets/images/need.svg";
import shareIcon from "../assets/images/share.svg";
import phoneTake from "../assets/images/phone-t.svg";
import phoneOffer from "../assets/images/phone-t.svg";
import "./HowItWorksPage.css";

const ctaIcons = { need: needIcon, share: shareIcon };
const cardImages = {
  min: minImg,
  live: liveImg,
  chat: chatImg,
  sos1: sosImg,
  gst: gstImg,
  rating: ratingImg,
  easily: easilyImg,
};

function Phone({ src, alt }) {
  return (
    <div className="hp-phone">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function Steps({ steps }) {
  return (
    <ol className="hp-steps">
      {steps.map((step, i) => (
        <li key={step.title} className={`hp-step ${i === 0 ? "is-first" : ""}`}>
          <span className="hp-step__num">{i + 1}</span>
          <div>
            <h3 className="hp-step__title">{step.title}</h3>
            <p className="hp-step__text">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Journey({ data, phone, alt, reverse }) {
  return (
    <section
      id={data.id}
      className={`section hp-journey ${reverse ? "" : "hp-journey--alt"}`}
    >
      <div className="container">
        <Reveal className="hp-head">
          <h2 className="section-title">
            {data.title} <span className="text-green">{data.highlight}</span>
          </h2>
          <p className="section-lead">{data.lead}</p>
        </Reveal>

        <div className={`hp-journey__grid ${reverse ? "is-reverse" : ""}`}>
          <Reveal className="hp-journey__phone">
            <Phone src={phone} alt={alt} />
          </Reveal>
          <Reveal className="hp-journey__steps" delay={100}>
            <Steps steps={data.steps} />
          </Reveal>
        </div>

        <Reveal className="hp-chip" delay={120}>
          <span className="hp-chip__icon">
            <Icon name={data.chip.icon} size={22} />
          </span>
          <strong className="hp-chip__label">{data.chip.label}</strong>
          <span className="hp-chip__text">{data.chip.text}</span>
          <Icon name="arrowRight" size={20} className="hp-chip__arrow" />
        </Reveal>
      </div>
    </section>
  );
}

function CardRow({ data, dark }) {
  return (
    <section
      className={`section hp-cards ${dark ? "hp-cards--dark" : ""}`}
      style={dark ? { "--hp-after-bg": `url("${afterBg}")` } : undefined}
    >
      <div className="container">
        <Reveal as="h2" className="section-title hp-cards__title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>
        <ul className="hp-cards__grid">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="hp-card" delay={i * 80}>
              <div className="hp-card__head">
                {item.image ? (
                  <img className="hp-card__img" src={cardImages[item.image]} alt="" />
                ) : (
                  <span className="hp-card__icon">
                    <Icon name={item.icon} size={24} />
                  </span>
                )}
                <h3 className="hp-card__title">{item.title}</h3>
              </div>
              <p className="hp-card__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function HowItWorksPage() {
  const { hero, take, offer, during, after } = howPage;

  return (
    <>
      <section className="hp-hero">
        <div className="container hp-hero__grid">
          <div>
            <Reveal as="h1" className="hp-hero__title">
              {hero.titleTop}
              <br />
              <span className="text-green">{hero.titleBottom}</span>
            </Reveal>
            <Reveal as="p" className="section-lead" delay={90}>
              {hero.lead}
            </Reveal>
            <Reveal className="hp-hero__cta" delay={160}>
              {hero.cta.map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  className={`btn hp-cta hp-cta--${b.variant}`}
                  onClick={(e) => {
                    // The app uses hash routing, so a plain "#section" link would
                    // switch to the home page. Scroll within this page instead.
                    e.preventDefault();
                    document.querySelector(b.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <img src={ctaIcons[b.icon]} alt="" width={28} height={28} />
                  {b.label}
                </a>
              ))}
            </Reveal>
          </div>
          <Reveal className="hp-hero__art" delay={120}>
            <img src={heroImg} alt="A rider chatting with a driver beside a car on a city street" />
          </Reveal>
        </div>
      </section>

      <Journey data={take} phone={phoneTake} alt="Cogo app: finding a ride" />
      <Journey data={offer} phone={phoneOffer} alt="Cogo app: posting a ride" reverse />
      <CardRow data={during} />
      <CardRow data={after} dark />
      <Faq />
    </>
  );
}
