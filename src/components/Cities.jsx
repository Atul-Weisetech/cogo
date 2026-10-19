import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { cities } from "../data/content.js";
import mapImage from "../assets/images/map.png";
import "./Cities.css";

export default function Cities() {
  return (
    <section id="cities" className="section cities-section">
      <div className="container cities">
        <Reveal className="cities__copy">
          <span className="eyebrow">
            <Icon name="pin" size={14} />
            {cities.eyebrow}
          </span>

          <h2 className="cities__title">
            {cities.titleLead}{" "}
            <span className="text-green">
              {cities.titleHighlight} {cities.titleTail}
            </span>
          </h2>

          <div className="cities__prompt">
            <p>{cities.prompt}</p>
            <a href="#contact" className="btn btn--primary btn--sm">
              {cities.cta}
              <Icon name="arrowRight" size={15} />
            </a>
          </div>

          <ul className="cities__chips">
            {cities.live.map((city) => (
              <li key={city} className="city-chip city-chip--live">
                <Icon name="pin" size={15} />
                {city}
              </li>
            ))}
            {cities.soon.map((city) => (
              <li key={city} className="city-chip">
                <Icon name="pin" size={15} />
                {city}
              </li>
            ))}
            <li className="city-chip city-chip--more">+ More soon</li>
          </ul>
        </Reveal>

        <Reveal className="cities__map" delay={120}>
          <img
            className="cities__map-img"
            src={mapImage}
            alt="Map of India showing Cogo cities"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
