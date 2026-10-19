import { useReveal } from "../hooks/useReveal.js";
import { useCountUp } from "../hooks/useCountUp.js";
import { stats } from "../data/content.js";
import ride from "../assets/images/ride.png";
import verified from "../assets/images/verified.png";
import co2 from "../assets/images/co2.png";
import cities from "../assets/images/cities.png";
import "./Stats.css";

const images = { ride, verified, co2, cities };

function StatItem({ item, start }) {
  const value = useCountUp(item.value, { start, decimals: item.decimals ?? 0 });

  return (
    <li className="stat">
      <img className="stat__icon" src={images[item.image]} alt="" />
      <span className="stat__body">
        <span className="stat__value">
          {value}
          {item.suffix}
        </span>
        <span className="stat__label">{item.label}</span>
      </span>
    </li>
  );
}

export default function Stats() {
  const { ref, isVisible } = useReveal({ threshold: 0.3 });

  return (
    <section className="section--tight stats-section" aria-label="Cogo by the numbers">
      <div className="container">
        <ul ref={ref} className={`stats ${isVisible ? "is-visible" : ""}`}>
          {stats.map((item) => (
            <StatItem key={item.label} item={item} start={isVisible} />
          ))}
        </ul>
      </div>
    </section>
  );
}
