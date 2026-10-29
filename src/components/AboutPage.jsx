import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { aboutPage } from "../data/content.js";
import heroArt from "../assets/images/share a ride.png";
import missionArt from "../assets/images/our mission.png";
import seatIcon from "../assets/images/Empty seats.png";
import congestionIcon from "../assets/images/Going Congestion.png";
import costIcon from "../assets/images/Rising travel costs.png";
import trustIcon from "../assets/images/principles trust.png";
import fairnessIcon from "../assets/images/Fairness.png";
import pressIcon from "../assets/images/press kit.png";
import careersIcon from "../assets/images/careers.png";
import contactIcon from "../assets/images/contact.png";
import "./AboutPage.css";

const problemImages = { seat: seatIcon, car: congestionIcon, cost: costIcon };
const principleImages = { trust: trustIcon, fairness: fairnessIcon };
const reachImages = { press: pressIcon, careers: careersIcon, contact: contactIcon };

/* The app uses hash routing, so a plain "#section" link would switch to the home
   page. Scroll within this page instead. */
const scrollTo = (target) => (e) => {
  e.preventDefault();
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
};

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

function Heading({ data, className = "" }) {
  return (
    <Reveal as="h2" className={`section-title ab-title ${className}`.trim()}>
      {data.title} <span className="text-green">{data.highlight}</span>
    </Reveal>
  );
}

function Hero({ data }) {
  return (
    <section className="ab-hero">
      <div className="container">
        <div className="ab-hero__grid">
          <div className="ab-hero__copy">
            <Reveal as="h1" className="ab-hero__title">
              {data.title}
              <br />
              <span className="text-green">{data.highlight}</span>
            </Reveal>
            <Reveal as="p" className="ab-hero__lead" delay={90}>
              {data.lead}
            </Reveal>
            <Reveal delay={150}>
              <a href={data.cta.href} className="btn btn--sm btn--dark">
                {data.cta.label}
                <Icon name="arrowRight" size={18} />
              </a>
            </Reveal>
          </div>

          <Reveal className="ab-hero__art" delay={120}>
            <img src={heroArt} alt="A green car beside a phone showing a map with rider pins" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Mission({ data }) {
  return (
    <section className="ab-mission">
      <div className="container">
        <Reveal className="ab-mission__card">
          <div className="ab-mission__copy">
            <h2 className="ab-mission__title">
              {data.title} <span className="text-green">{data.highlight}</span>
            </h2>
            <p className="ab-mission__subtitle">{data.subtitle}</p>
            <p className="ab-mission__text">{data.text}</p>
            <a href={data.cta.target} className="btn btn--sm ab-mission__cta" onClick={scrollTo(data.cta.target)}>
              {data.cta.label}
              <Icon name="arrowRight" size={18} />
            </a>
          </div>
          <img className="ab-mission__art" src={missionArt} alt="A green taxi in front of a phone showing a ride" />
        </Reveal>
      </div>
    </section>
  );
}

function Problem({ data }) {
  return (
    <section id="about-problem" className="section--tight ab-problem">
      <div className="container">
        <Heading data={data} />
        <ul className="ab-problem__grid">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="ab-problem__item" delay={i * 80}>
              <img className="ab-problem__icon" src={problemImages[item.image]} alt="" />
              <h3 className="ab-problem__title">{item.title}</h3>
              <p className="ab-problem__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Principles({ data }) {
  return (
    <section className="section--tight ab-principles">
      <div className="container">
        <Heading data={data} />
        <ul className="ab-principles__grid">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="ab-principle" delay={i * 80}>
              <span className="ab-principle__icon">
                {item.image ? (
                  <img className="ab-icon-img" src={principleImages[item.image]} alt="" />
                ) : (
                  <Icon name={item.icon} size={36} />
                )}
              </span>
              <div>
                <h3 className="ab-principle__title">{item.title}</h3>
                <p className="ab-principle__text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Journey({ data }) {
  return (
    <section className="section--tight ab-journey">
      <div className="container">
        <Heading data={data} />
        <ol className="ab-journey__track">
          {data.steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="ab-step" delay={i * 90} style={{ "--step-color": step.color }}>
              <span className="ab-step__icon">
                <Icon name={step.icon} size={20} />
              </span>
              <span className="ab-step__rail" aria-hidden="true">
                <span className="ab-step__dot" />
              </span>
              <h3 className="ab-step__title">{step.title}</h3>
              <p className="ab-step__text">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Team({ data }) {
  return (
    <section className="section--tight ab-team">
      <div className="container">
        <Heading data={data} />
        <Reveal as="p" className="ab-team__lead" delay={60}>
          {data.lead}
        </Reveal>
        <ul className="ab-team__grid">
          {data.members.map((member, i) => (
            <Reveal as="li" key={member.name} className="ab-member" delay={i * 80}>
              <span className="ab-member__avatar" aria-hidden="true">
                {initials(member.name)}
              </span>
              <h3 className="ab-member__name">{member.name}</h3>
              <p className="ab-member__role">{member.role}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reach({ items }) {
  return (
    <section className="section--tight ab-reach">
      <div className="container">
        <ul className="ab-reach__grid">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} className="ab-reach__card" delay={i * 80}>
              <img className="ab-reach__icon ab-icon-img" src={reachImages[item.image]} alt="" />
              <h3 className="ab-reach__title">{item.title}</h3>
              <p className="ab-reach__text">{item.text}</p>
              <a href={item.href} className="btn btn--sm btn--dark">
                {item.cta}
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const { hero, mission, problem, principles, journey, team, reach } = aboutPage;

  return (
    <>
      <Hero data={hero} />
      {/* the mission card sits on a pale ellipse that runs down behind the problem section */}
      <div className="ab-body">
        <Mission data={mission} />
        <Problem data={problem} />
      </div>
      <Principles data={principles} />
      <Journey data={journey} />
      <Team data={team} />
      <Reach items={reach} />
    </>
  );
}
