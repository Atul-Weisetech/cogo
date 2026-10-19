import Reveal from "./common/Reveal.jsx";
import { hero } from "../data/content.js";
import aboutImg from "../assets/images/about.png";
import idImg from "../assets/images/id.svg";
import vehicleImg from "../assets/images/verified-vehicle.svg";
import womenImg from "../assets/images/WomenMode.svg";
import sosImg from "../assets/images/sos.svg";
import callImg from "../assets/images/call.png";
import "./Hero.css";

const badgeImages = {
  id: idImg,
  vehicle: vehicleImg,
  women: womenImg,
  sos: sosImg,
  call: callImg,
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal as="h1" className="hero__title">
            {hero.titleTop}
            <br />
            <span className="text-green">{hero.titleBottom}</span>
          </Reveal>

          <Reveal as="p" className="hero__lead" delay={90}>
            {hero.lead}
          </Reveal>

          <Reveal className="hero__cards" delay={180}>
            {hero.cards.map((card) => (
              <div key={card.key} className="hero-card">
                <h2 className="hero-card__label">{card.label}</h2>
                <p className="hero-card__text">{card.text}</p>
                <a href={card.href} className="btn btn--primary btn--sm hero-card__btn">
                  {card.cta}
                </a>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__art" delay={120}>
          <img
            src={aboutImg}
            alt="A rider booking a shared car while two friends share a scooter on the same route"
            className="hero__scene"
          />
        </Reveal>
      </div>

      <div className="container">
        <Reveal as="ul" className="hero__badges" delay={240}>
          {hero.badges.map((badge) => (
            <li key={badge.label} className="hero-badge">
              <img
                src={badgeImages[badge.image]}
                alt=""
                className="hero-badge__img"
                loading="lazy"
              />
              <span className="hero-badge__label">{badge.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
