import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { familyTrackingPage } from "../data/content.js";
import heroArt from "../assets/images/live link.png";
import linkArt from "../assets/images/cab live.png";
import liveMap from "../assets/images/live map.png";
import driverVehicle from "../assets/images/Driver & Vehicle.png";
import expires from "../assets/images/Expires on arrival.png";
import "./FamilyTrackingPage.css";

const cardIcons = { map: liveMap, driver: driverVehicle, expires };

function Hero({ data }) {
  return (
    <section className="ft-hero">
      <div className="container">
        <div className="ft-hero__grid">
          <div className="ft-hero__copy">
            <Reveal as="h1" className="ft-hero__title">
              {data.title} <span className="text-green">{data.highlight}</span>
            </Reveal>
            <Reveal as="p" className="ft-hero__lead" delay={90}>
              {data.lead}
            </Reveal>
            <Reveal delay={150}>
              <a href={data.cta.href} className="btn btn--sm btn--dark">
                {data.cta.label}
                <Icon name="arrowRight" size={18} />
              </a>
            </Reveal>
          </div>

          <Reveal className="ft-hero__art" delay={120}>
            <img src={heroArt} alt="A rider holding a phone beside a map and a green taxi" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Share({ data }) {
  return (
    <section className="section--tight ft-share">
      <div className="container">
        <Reveal as="h2" className="section-title ft-share__title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>

        <ul className="ft-cards">
          {data.cards.map((card, i) => (
            <Reveal as="li" key={card.title} className="ft-card" delay={i * 80}>
              <img className="ft-card__icon" src={cardIcons[card.icon]} alt="" />
              <h3 className="ft-card__title">{card.title}</h3>
              <p className="ft-card__text">{card.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OneLink({ data }) {
  return (
    <section className="section--tight ft-link">
      <div className="container">
        <div className="ft-link__grid">
          <Reveal className="ft-link__art">
            <img src={linkArt} alt="A route with map pins beside a phone and a green taxi" />
          </Reveal>

          <Reveal className="ft-link__copy" delay={100}>
            <h2 className="ft-link__title">
              {data.title} <span className="text-green">{data.highlight}</span>
            </h2>
            {data.text.map((p) => (
              <p key={p} className="ft-link__text">
                {p}
              </p>
            ))}
            <a href={data.cta.href} className="btn btn--sm btn--dark ft-link__cta">
              {data.cta.label}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function FamilyTrackingPage() {
  const { hero, share, link } = familyTrackingPage;

  return (
    <>
      <Hero data={hero} />
      {/* share + link sit on one pale ellipse, see .ft-body */}
      <div className="ft-body">
        <Share data={share} />
        <OneLink data={link} />
      </div>
    </>
  );
}
