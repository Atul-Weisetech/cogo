import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import Faq from "./Faq.jsx";
import { pricingPage, pricingFaqs } from "../data/content.js";
import heroBg from "../assets/images/price-banner.png";
import heroArt from "../assets/images/fair-bg.png";
import exampleImg from "../assets/images/examples.png";
import upiImg from "../assets/images/upi.png";
import cardImg from "../assets/images/debit-card.png";
import bankImg from "../assets/images/net-banking.png";
import walletImg from "../assets/images/cogo-wallet.png";
import freeImg from "../assets/images/free-plans.png";
import riderImg from "../assets/images/rider-plans.png";
import driverImg from "../assets/images/drive-pro.png";
import "./PricingPage.css";

const payImages = { upi: upiImg, card: cardImg, bank: bankImg, wallet: walletImg };

const planImages = { free: freeImg, rider: riderImg, driver: driverImg };

const rupee = (n) => `₹ ${n}`;

const totalOf = (ride) => ride.open + ride.distance + ride.fee + ride.gst - ride.discount;

/* One fare, as the labelled lines shown in both the breakdown and the examples. */
const fareLines = (ride) => [
  { label: "Open contribution", value: rupee(ride.open) },
  { label: "Distance", value: rupee(ride.distance) },
  { label: "Platform fee", value: rupee(ride.fee) },
  { label: "GST", value: rupee(ride.gst) },
  { label: "Discounts", value: ride.discount ? `− ${rupee(ride.discount)}` : rupee(0) },
];

function Heading({ data, className = "" }) {
  return (
    <Reveal as="h2" className={`section-title pp-title ${className}`.trim()}>
      {data.title} <span className="text-green">{data.highlight}</span>
    </Reveal>
  );
}

function FareLines({ ride }) {
  return (
    <dl className="pp-lines">
      {fareLines(ride).map((line) => (
        <div key={line.label} className="pp-lines__row">
          <dt>{line.label}</dt>
          <dd>{line.value}</dd>
        </div>
      ))}
      <div className="pp-lines__row pp-lines__row--total">
        <dt>Total fare</dt>
        <dd>{rupee(totalOf(ride))}</dd>
      </div>
    </dl>
  );
}

function Hero({ data }) {
  return (
    <section className="pp-hero" style={{ "--pp-hero-bg": `url("${heroBg}")` }}>
      <div className="container">
        <Reveal as="h1" className="pp-hero__title">
          {data.title} <span className="text-green">{data.highlight}</span>
        </Reveal>
        <Reveal as="p" className="pp-hero__lead" delay={90}>
          {data.lead}
        </Reveal>

        <Reveal className="pp-hero__stage" delay={150}>
          <img
            className="pp-hero__art"
            src={heroArt}
            alt="A rider checking a fare on the Cogo app beside a driver and a green car, with a five-star rating"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Fare({ data, rides }) {
  const sample = rides.find((ride) => ride.key === data.sample);

  return (
    <section className="section--tight">
      <div className="container">
        <div className="pp-fare">
          <div className="pp-fare__copy">
            <Reveal as="h2" className="section-title pp-title pp-title--left">
              {data.title} <span className="text-green">{data.highlight}</span>
            </Reveal>
            <Reveal as="p" className="pp-fare__lead" delay={80}>
              {data.lead}
            </Reveal>

            <ul className="pp-bands">
              {data.bands.map((band, i) => (
                <Reveal as="li" key={band.key} className="pp-band" delay={120 + i * 70}>
                  <span className="pp-band__key">{band.key}</span>
                  <span className="pp-band__label">{band.label}</span>
                  <span className="pp-band__range">{band.range}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="pp-card pp-card--mint pp-breakdown" delay={140}>
            <h3 className="pp-card__title">{data.breakdownTitle}</h3>
            <FareLines ride={sample} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Examples({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <Heading data={data} />
        <Reveal as="p" className="pp-lead" delay={60}>
          {data.lead}
        </Reveal>

        <ul className="pp-examples">
          {data.rides.map((ride, i) => (
            <Reveal as="li" key={ride.key} className="pp-card pp-example" delay={i * 80}>
              <img className="pp-example__art" src={exampleImg} alt="" />
              <div className="pp-example__head">
                <h3 className="pp-card__title">{ride.name}</h3>
                <span className="pp-tag">{ride.km} km</span>
              </div>
              <p className="pp-example__route">{ride.route}</p>
              <FareLines ride={ride} />
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="pp-note" delay={60}>
          <Icon name="info" size={16} />
          {data.note}
        </Reveal>
      </div>
    </section>
  );
}

function Compare({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <Heading data={data} />

        <Reveal className="pp-table-wrap">
          <table className="pp-table">
            <caption className="sr-only">How COGO compares with cabs, autos and buses</caption>
            <thead>
              <tr>
                <td />
                {data.columns.map((col, i) => (
                  <th key={col} scope="col" className={i === 0 ? "is-cogo" : ""}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.cells.map(([good, text], i) => (
                    <td key={data.columns[i]} className={i === 0 ? "is-cogo" : ""}>
                      <span className={`pp-cell ${good ? "is-good" : "is-bad"}`}>
                        <Icon name={good ? "check" : "close"} size={14} />
                        {text}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal as="p" className="pp-note" delay={60}>
          <Icon name="info" size={16} />
          {data.note}
        </Reveal>
      </div>
    </section>
  );
}

function Pay({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <Heading data={data} />

        <ul className="pp-pay">
          {data.methods.map((method, i) => (
            <Reveal as="li" key={method.name} className="pp-card pp-pay__card" delay={i * 70}>
              <span className="pp-pay__icon">
                <img src={payImages[method.icon]} alt="" />
              </span>
              <h3 className="pp-pay__name">{method.name}</h3>
              <p className="pp-pay__text">{method.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="pp-note" delay={60}>
          <Icon name="shield" size={16} />
          {data.note}
        </Reveal>
      </div>
    </section>
  );
}

function Cancel({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="pp-cancel">
          <div className="pp-cancel__copy">
            <Reveal as="h2" className="section-title pp-title pp-title--left">
              {data.title} <span className="text-green">{data.highlight}</span>
            </Reveal>
            <Reveal as="p" className="pp-fare__lead" delay={80}>
              {data.lead}
            </Reveal>
            <Reveal delay={140}>
              <a href={data.cta.href} className="btn btn--sm btn--ghost pp-cancel__cta">
                {data.cta.label}
                <Icon name="arrowRight" size={16} />
              </a>
            </Reveal>
          </div>

          <Reveal as="dl" className="pp-card pp-cancel__list" delay={120}>
            {data.rows.map((row) => (
              <div key={row.label} className="pp-cancel__row">
                <dt>{row.label}</dt>
                <dd className={row.value === "Free" ? "is-free" : ""}>{row.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Plans({ data }) {
  return (
    <section className="section--tight">
      <div className="container">
        <Heading data={data} />

        <ul className="pp-plans">
          {data.items.map((plan, i) => (
            <Reveal as="li" key={plan.key} className={`pp-plan pp-plan--${plan.tone}`} delay={i * 80}>
              <div className="pp-plan__head">
                <h3 className="pp-plan__name">{plan.name}</h3>
                <p className="pp-plan__price">
                  {plan.price}
                  {plan.per ? <span>{plan.per}</span> : null}
                </p>
                <p className="pp-plan__blurb">{plan.blurb}</p>
              </div>

              <div className="pp-plan__art">
                <img src={planImages[plan.key]} alt="" />
              </div>

              <ul className="pp-plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="pp-plan__tick">
                      <Icon name="check" size={11} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.cta.current ? (
                <button type="button" className="btn btn--sm pp-plan__cta pp-plan__cta--current" disabled>
                  {plan.cta.label}
                </button>
              ) : (
                <a href={plan.cta.href} className={`btn btn--sm pp-plan__cta pp-plan__cta--${plan.tone}`}>
                  {plan.cta.label}
                </a>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function PricingPage() {
  const { hero, fare, examples, compare, pay, cancel, plans, faq } = pricingPage;

  return (
    <>
      <Hero data={hero} />
      <Fare data={fare} rides={examples.rides} />
      <Examples data={examples} />
      <Compare data={compare} />
      <Pay data={pay} />
      <Cancel data={cancel} />
      <Plans data={plans} />
      <Faq items={pricingFaqs} title={faq.title} highlight={faq.highlight} />
    </>
  );
}
