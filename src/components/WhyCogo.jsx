import Reveal from "./common/Reveal.jsx";
import { whyCogo } from "../data/content.js";
import fair from "../assets/images/fair.png";
import trust from "../assets/images/trust.png";
import saferdesign from "../assets/images/saferdesign.png";
import routine from "../assets/images/routine.png";
import "./WhyCogo.css";

const images = { fair, trust, saferdesign, routine };

export default function WhyCogo() {
  return (
    <section id="why-cogo" className="section why">
      <div className="container">
        <Reveal className="why__head">
          <h2 className="section-title">
            Why <span className="text-green">Cogo</span>
          </h2>
          <p className="section-lead">
            Built around the trip you already make every day — not around a meter.
          </p>
        </Reveal>

        <ul className="why__grid">
          {whyCogo.map((item, i) => (
            <Reveal as="li" key={item.title} className="why-card" delay={i * 90}>
              <div className="why-card__body">
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__text">{item.text}</p>
              </div>
              <img className="why-card__icon" src={images[item.image]} alt="" loading="lazy" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
