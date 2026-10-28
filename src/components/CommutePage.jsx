import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import Faq from "./Faq.jsx";
import { commutePage } from "../data/content.js";
import heroBg from "../assets/images/price-banner.png";
import heroArt from "../assets/images/real commutes.png";
import nearbyArt from "../assets/images/right now.png";
import groupsArt from "../assets/images/private.png";
import marketplaceArt from "../assets/images/your trip.png";
import routineArt from "../assets/images/conirm.png";
import km from "../assets/images/5km.png";
import fixed from "../assets/images/fixed banded.png";
import sec from "../assets/images/45 sec.png";
import wallet from "../assets/images/wallet.png";
import split from "../assets/images/split.png";
import coupon from "../assets/images/coupons.png";
import subscription from "../assets/images/subscription.png";
import multistop from "../assets/images/multi-stop.png";
import join from "../assets/images/join a ride.png";
import receipt from "../assets/images/digital rec.png";
import "./CommutePage.css";

const tileIcons = { km, fixed, sec };
const pillIcons = { wallet, split, coupon, subscription, multistop, join, receipt };

/* The app uses hash routing, so a plain "#section" link would switch to the
   home page. Scroll within this page instead. */
const scrollTo = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

function Hero({ data }) {
  return (
    <section className="cf-hero" style={{ "--cf-hero-bg": `url("${heroBg}")` }}>
      <div className="container">
        <Reveal as="h1" className="cf-hero__title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>
        <Reveal as="p" className="cf-hero__lead" delay={90}>
          {data.lead}
        </Reveal>

        <Reveal as="ul" className="cf-chips" delay={150}>
          {data.chips.map((chip) => (
            <li key={chip.label}>
              <a href={chip.href} className="cf-chip" onClick={scrollTo(chip.href)}>
                {chip.label}
              </a>
            </li>
          ))}
        </Reveal>

        <Reveal className="cf-hero__stage" delay={200}>
          <img
            className="cf-hero__art"
            src={heroArt}
            alt="A green Cogo car beside a phone showing a map pin"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Tiles({ items }) {
  return (
    <ul className="cf-tiles">
      {items.map((tile) => (
        <li key={tile.text} className="cf-tile">
          <img className="cf-tile__icon" src={tileIcons[tile.icon]} alt="" />
          <span>{tile.text}</span>
        </li>
      ))}
    </ul>
  );
}

/* One feature block: copy + three tiles beside an illustration. `reverse` puts the
   art on the left, `panel` sets the block on a grey rounded card. */
function Feature({ data, art, alt, reverse = false, panel = false, children }) {
  return (
    <section id={data.id} className={`section--tight cf-feature ${panel ? "cf-feature--panel" : ""}`}>
      <div className="container">
        <div className={`cf-feature__grid ${reverse ? "is-reverse" : ""}`}>
          <Reveal className="cf-feature__copy">
            <h2 className="cf-feature__title">
              {data.title} <span className="text-green">{data.highlight}</span>
            </h2>
            <p className="cf-feature__lead">{data.lead}</p>
            <Tiles items={data.tiles} />
            {children}
          </Reveal>

          <Reveal className="cf-feature__art" delay={100}>
            <img src={art} alt={alt} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Included({ data }) {
  return (
    <section className="section--tight cf-included">
      <div className="container">
        <Reveal as="h2" className="section-title cf-title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>

        <ul className="cf-pills">
          {data.items.map((item, i) => (
            <Reveal as="li" key={item.label} className="cf-pill" delay={(i % 4) * 70}>
              <img className="cf-pill__icon" src={pillIcons[item.icon]} alt="" />
              <span>{item.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function CommutePage() {
  const { hero, nearby, groups, marketplace, routine, included, faq } = commutePage;

  return (
    <>
      <Hero data={hero} />

      <Feature
        data={nearby}
        art={nearbyArt}
        alt="The Cogo app showing nearby drivers on a map and a rider sending a request"
      />

      <Feature
        data={groups}
        art={groupsArt}
        alt="A group of people following a shared taxi trip on a phone"
        reverse
        panel
      >
        <a href={groups.cta.href} className="btn btn--sm btn--dark cf-feature__cta">
          {groups.cta.label}
          <Icon name="arrowRight" size={18} />
        </a>
      </Feature>

      <Feature
        data={marketplace}
        art={marketplaceArt}
        alt="A driver and a rider beside a green car and a phone showing a route"
      >
        <p className="cf-callout">{marketplace.callout}</p>
      </Feature>

      <Feature
        data={routine}
        art={routineArt}
        alt="A rider confirming a suggested commute ride on their phone"
        reverse
      />

      <Included data={included} />
      <Faq title={faq.title} highlight={faq.highlight} />
    </>
  );
}
