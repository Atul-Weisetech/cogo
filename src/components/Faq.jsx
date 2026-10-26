import { useId, useState } from "react";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { faqs } from "../data/content.js";
import car from "../assets/images/car.png";
import safes from "../assets/images/safes.png";
import price from "../assets/images/price.png";
import location from "../assets/images/location.png";
import team from "../assets/images/team.png";
import "./Faq.css";

const icons = { car, safes, price, location, team };

export default function Faq({ title = "Quick Answer to", highlight = "your top questions" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section id="faq" className="section faq-section">
      <div className="container faq">
        <Reveal className="faq__copy">
          <h2 className="faq__title">
            {title} <span className="text-green">{highlight}</span>
          </h2>

          <div className="faq__help">
            <span>Need more help?</span>
            <a href="#contact" className="btn btn--primary btn--sm">
              Visit our Help Centre
              <Icon name="arrowRight" size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal as="ul" className="faq__list" delay={100}>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <li key={item.q} className={`faq-item ${open ? "is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-item__trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <span className="faq-item__icon">
                      <img src={icons[item.icon]} alt="" />
                    </span>
                    <span className="faq-item__q">{item.q}</span>
                    <span className="faq-item__chevron">
                      <Icon name="chevron" size={18} />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-item__panel"
                >
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
