import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import Faq from "./Faq.jsx";
import { womenPage, testimonials } from "../data/content.js";
import heroImg from "../assets/images/women-banner.png";
import selfieImg from "../assets/images/selfie.png";
import teamImg from "../assets/images/our safety.png";
import unlockImg from "../assets/images/preferences.png";
import noteImg from "../assets/images/Your ID.png";
import filterImg from "../assets/images/women-only.png";
import offerImg from "../assets/images/you offer.png";
import badgeImg from "../assets/images/your profile.png";
import privacyImg from "../assets/images/your privacy.png";
import usedImg from "../assets/images/this check.png";
import deletedImg from "../assets/images/deleted.png";
import privateImg from "../assets/images/not shared.png";
/* Placeholder until the Figma ID-card icon is exported */
import idImg from "../assets/images/verified id.png";
import "./WomenModePage.css";

const images = {
  selfie: selfieImg,
  id: idImg,
  team: teamImg,
  unlock: unlockImg,
  filter: filterImg,
  offer: offerImg,
  badge: badgeImg,
  used: usedImg,
  deleted: deletedImg,
  private: privateImg,
};

/* The rider quote about Women Mode is last, so show the final two */
const feedback = testimonials.slice(-2);

function Heading({ data }) {
  return (
    <Reveal as="h2" className="section-title hc-title">
      {data.title} <span className="text-green">{data.highlight}</span>
    </Reveal>
  );
}

function Hero({ data }) {
  return (
    <section className="hc-hero">
      <div className="container">
        <div className="hc-hero__grid">
          <div className="hc-hero__copy">
            <Reveal as="h1" className="hc-hero__title">
              {data.title} <span className="text-green">{data.highlight}</span>
            </Reveal>
            <Reveal as="p" className="section-lead" delay={90}>
              {data.lead}
            </Reveal>
            <Reveal className="hc-hero__cta" delay={160}>
              <a href={data.href} className="btn btn--sm btn--dark">
                {data.cta}
                <Icon name="arrowRight" size={18} />
              </a>
            </Reveal>
          </div>

          <Reveal className="hc-hero__art" delay={120}>
            <img
              src={heroImg}
              alt="A woman in her car beside a profile card marked identity verified, background checked and safety team approved"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Steps({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <Heading data={data} />
        <ol className="hc-cards hc-cards--4">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="hc-card" delay={i * 70}>
              <img className="hc-card__icon" src={images[item.image]} alt="" />
              <h3 className="hc-card__title">{item.title}</h3>
            </Reveal>
          ))}
        </ol>

        <Reveal as="p" className="hc-note" delay={80}>
          <span className="hc-note__icon">
            <img src={noteImg} alt="" />
          </span>
          {data.note}
        </Reveal>
      </div>
    </section>
  );
}

function Changes({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <Heading data={data} />
        <ul className="hc-cards hc-cards--3">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="hc-card hc-card--green" delay={i * 70}>
              <img className="hc-card__icon" src={images[item.image]} alt="" />
              <h3 className="hc-card__title">{item.title}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Privacy({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <Heading data={data} />
        <div className="hc-privacy">
          <Reveal className="hc-privacy__art">
            <img src={privacyImg} alt="A woman using her phone in front of a green padlock shield" />
          </Reveal>

          <ul className="hc-privacy__list">
            {data.items.map((item, i) => (
              <Reveal as="li" key={item.title} className="hc-privacy__item" delay={i * 70}>
                <img className="hc-privacy__icon" src={images[item.image]} alt="" />
                <h3 className="hc-privacy__title">{item.title}</h3>
                <p className="hc-privacy__text">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Feedback({ data }) {
  return (
    <section className="section--tight" aria-label="Rider feedback">
      <div className="container">
        <Heading data={data} />
        <ul className="hc-feedback">
          {feedback.map((t, i) => (
            <Reveal as="li" key={t.name} className="hc-quote" delay={i * 80}>
              <span className="hc-quote__mark" aria-hidden="true">
                “
              </span>
              <div className="hc-quote__stars" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Icon key={s} name="star" size={12} />
                ))}
              </div>
              <blockquote className="hc-quote__text">{t.quote}</blockquote>
              <p className="hc-quote__name">{t.name}</p>
              <p className="hc-quote__role">{t.role}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function WomenModePage() {
  const { hero, steps, changes, privacy, feedback: feedbackHead, faq } = womenPage;

  return (
    <>
      {/* hero, steps and changes share the grey backdrop; its curved bottom edge
          runs behind the "what changes" cards */}
      <div className="hc-top">
        <Hero data={hero} />
        <Steps data={steps} />
        <Changes data={changes} />
      </div>
      <Privacy data={privacy} />
      <Feedback data={feedbackHead} />
      <Faq title={faq.title} highlight={faq.highlight} />
    </>
  );
}
