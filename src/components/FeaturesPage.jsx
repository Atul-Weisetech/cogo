import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import Faq from "./Faq.jsx";
import { featuresPage } from "../data/content.js";
import womenBanner from "../assets/images/women-banner.jpg";
import safetyBanner from "../assets/images/safety ride ban.jpg";
import phoneRide from "../assets/images/phone ride.png";
import rideBg from "../assets/images/ride bg banner.jpg";
import locationFamily from "../assets/images/location family.png";
import familyImg from "../assets/images/family.png";
import womenVer from "../assets/images/women-ver.png";
import verifiedId from "../assets/images/verified id.png";
import verifiedVehicle from "../assets/images/verified vehicle.png";
import transparent from "../assets/images/transparent.png";
import afterImg from "../assets/images/after.png";
import twoWay from "../assets/images/two-way.png";
import issue from "../assets/images/issue.png";
import response from "../assets/images/24-48h.png";
import grievance from "../assets/images/grievance.png";
import humanVer from "../assets/images/human-ver.png";
import dataPrivacy from "../assets/images/dara pri.png";
import idData from "../assets/images/ID data.png";
import emergency from "../assets/images/emergency.png";
import dataClear from "../assets/images/data clear.png";
import zero from "../assets/images/zero.png";
import verifyRide from "../assets/images/verified safety.png";
import shareTrip from "../assets/images/share.svg";
import sit from "../assets/images/sit.png";
import chat from "../assets/images/chat.png";
import safetyTools from "../assets/images/safety tools.png";
import driveRes from "../assets/images/drive res.png";
import "./FeaturesPage.css";

const commitmentIcons = {
  human: humanVer,
  privacy: dataPrivacy,
  expiry: idData,
  emergency,
  clear: dataClear,
  zero,
  verifyRide,
  shareTrip,
  sit,
  chat,
  safetyTools,
  driveRes,
};

const beforeIcons = { id: verifiedId, car: verifiedVehicle, user: transparent };
const afterIcons = { ratings: twoWay, issue, response, grievance };

/* The app uses hash routing, so a plain "#section" link would switch to the
   home page. Scroll within this page instead. */
const scrollTo = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

function Heading({ data, className = "" }) {
  return (
    <Reveal as="h2" className={`section-title fp-title ${className}`.trim()}>
      {data.title} <span className="text-green">{data.highlight}</span>
    </Reveal>
  );
}

function Hero({ data }) {
  return (
    <section className="fp-hero" style={{ "--fp-hero-bg": `url("${womenBanner}")` }}>
      <div className="container fp-hero__grid">
        <div className="fp-hero__copy">
          <Reveal as="h1" className="fp-hero__title">
            {data.title} <span className="text-green">{data.highlight}</span>
          </Reveal>
          <Reveal as="p" className="section-lead" delay={90}>
            {data.lead}
          </Reveal>
          <Reveal className="fp-hero__cta" delay={160}>
            <a href={data.href} className="btn btn--sm btn--dark" onClick={scrollTo(data.href)}>
              {data.cta}
              <Icon name="arrowRight" size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Before({ data }) {
  return (
    <section
      id={data.id}
      className="section--tight fp-section fp-before"
      style={{ "--fp-wave": `url("${safetyBanner}")` }}
    >
      <div className="container">
        <Heading data={data} />
        <ul className="fp-trio">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="fp-card" delay={i * 80}>
              <img className="fp-card__icon" src={beforeIcons[item.icon]} alt="" />
              <h3 className="fp-card__title">{item.title}</h3>
              <p className="fp-card__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function During({ data }) {
  return (
    <section
      id="during-ride"
      className="section fp-during"
      style={{ "--fp-ride-bg": `url("${rideBg}")` }}
    >
      <div className="container">
        <Reveal as="h2" className="section-title fp-title fp-title--light">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>

        <div className="fp-during__grid">
          <Reveal className="fp-during__phone">
            <img src={phoneRide} alt="Cogo app showing a live trip with safety alerts" />
          </Reveal>

          <Reveal className="fp-during__body" delay={100}>
            <h3 className="fp-during__heading">
              {data.heading} <span className="text-green">{data.headingAccent}</span>
            </h3>
            <p className="fp-during__lead">{data.lead}</p>
            <ul className="fp-checks">
              {data.items.map((item, i) => (
                <li key={item.title} className="fp-check">
                  <span className="fp-check__icon">{i + 1}</span>
                  <div>
                    <h4 className="fp-check__title">{item.title}</h4>
                    <p className="fp-check__text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Family({ data }) {
  return (
    <section className="section--tight fp-section fp-family">
      <div className="container">
        <div className="fp-family__grid">
          <Reveal className="fp-family__copy">
            <img className="fp-family__pin" src={locationFamily} alt="" />
            <h2 className="fp-family__title">
              {data.title} <span className="text-green">{data.highlight}</span>
            </h2>
            <p className="fp-family__text">{data.text}</p>
            <a href="#during-ride" className="btn btn--sm btn--dark" onClick={scrollTo("#during-ride")}>
              {data.cta}
              <Icon name="arrowRight" size={18} />
            </a>
          </Reveal>

          <Reveal className="fp-family__art" delay={100}>
            <img src={familyImg} alt="A family following a live taxi trip on a phone" />
          </Reveal>
        </div>

        <Reveal className="fp-strip" delay={80}>
          <img className="fp-strip__icon" src={womenVer} alt="" />
          <div className="fp-strip__body">
            <p className="fp-strip__text">{data.strip.text}</p>
            <p className="fp-strip__sub">{data.strip.sub}</p>
          </div>
          <a href="#before-ride" className="btn btn--sm btn--dark" onClick={scrollTo("#before-ride")}>
            {data.strip.cta}
            <Icon name="arrowRight" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function After({ data }) {
  return (
    <section className="section--tight fp-section">
      <div className="container">
        <Reveal className="fp-after">
          <div className="fp-after__art">
            <img src={afterImg} alt="A rider checking a trip on their phone beside a green car" />
          </div>

          <div className="fp-after__body">
            <h2 className="fp-after__title">
              {data.title} <span className="text-green">{data.highlight}</span>
            </h2>
            <p className="fp-after__lead">{data.lead}</p>
            <ul className="fp-after__list">
              {data.items.map((item) => (
                <li key={item.title} className="fp-after__item">
                  <span className="fp-after__icon">
                    <img src={afterIcons[item.icon]} alt="" />
                  </span>
                  <div>
                    <h3 className="fp-after__item-title">{item.title}</h3>
                    <p className="fp-after__item-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Grid({ data, tone, variant = "" }) {
  return (
    <section className={`section--tight fp-section ${tone === "alt" ? "fp-section--alt" : ""}`}>
      <div className="container">
        <Heading data={data} />
        <ul className={`fp-grid ${variant ? `fp-grid--${variant}` : ""}`.trim()}>
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="fp-tile" delay={(i % 3) * 70}>
              {item.image ? (
                <img className="fp-tile__img" src={commitmentIcons[item.image]} alt="" />
              ) : (
                <span className="fp-tile__icon">
                  <Icon name={item.icon} size={22} />
                </span>
              )}
              <div>
                <h3 className="fp-tile__title">{item.title}</h3>
                <p className="fp-tile__text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  const { hero, before, during, family, after, commitments, tips } = featuresPage;

  return (
    <>
      <Hero data={hero} />
      <Before data={before} />
      <During data={during} />
      <Family data={family} />
      <After data={after} />
      <Grid data={commitments} variant="soft" />
      <Grid data={tips} variant="tips" />
      <Faq />
    </>
  );
}
