import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { privacyPage } from "../data/content.js";
import heroBg from "../assets/images/price-banner.png";
import "./PrivacyPolicyPage.css";

function Hero({ data }) {
  return (
    <section className="pp-hero" style={{ "--pp-hero-bg": `url("${heroBg}")` }}>
      <div className="container">
        <Reveal as="h1" className="pp-hero__title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>
      </div>
    </section>
  );
}

function Cards({ items }) {
  return (
    <section className="section--tight pp-cards-section">
      <div className="container">
        <ul className="pp-cards">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} className="pp-card" delay={i * 60}>
              <span className="pp-card__icon">
                <Icon name={item.icon} size={20} />
                {item.badge ? <span className="pp-card__badge">{item.badge}</span> : null}
              </span>
              <h3 className="pp-card__title">{item.title}</h3>
              <p className="pp-card__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Overview({ data }) {
  return (
    <section className="section--tight">
      <div className="container pp-text">
        <Reveal as="h2" className="pp-text__title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>
        {data.paragraphs.map((p, i) => (
          <Reveal as="p" key={p.slice(0, 24)} className="pp-text__p" delay={60 + i * 60}>
            {p}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Commitments({ data }) {
  return (
    <section className="section--tight">
      <div className="container pp-text">
        <Reveal as="h2" className="pp-text__title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>
        <ul className="pp-check">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.slice(0, 24)} className="pp-check__item" delay={60 + i * 60}>
              <span className="pp-check__tick">
                <Icon name="check" size={12} />
              </span>
              <span>{item}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  const { hero, cards, overview, commitments } = privacyPage;

  return (
    <>
      <Hero data={hero} />
      <Cards items={cards} />
      <Overview data={overview} />
      <Commitments data={commitments} />
    </>
  );
}
