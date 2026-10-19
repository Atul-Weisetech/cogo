import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { womenMode } from "../data/content.js";
import womenImage from "../assets/images/women.png";
import "./WomenMode.css";

export default function WomenMode() {
  return (
    <section id="women-mode" className="section--tight wm-section">
      <div className="container">
        <Reveal className="wm">
          <div className="wm__media">
            <img className="wm__art" src={womenImage} alt="Smiling woman showing the Cogo app on her phone" />
            <span className="wm__blob" aria-hidden="true" />
          </div>

          <div className="wm__body">
            <span className="wm__badge" aria-hidden="true">
              <Icon name="shield" size={22} />
            </span>

            <h2 className="wm__title">
              Women Mode: rides matched{" "}
              <span className="text-green">only with verified women.</span>
            </h2>

            <p className="wm__text">{womenMode.text}</p>

            <a href="#faq" className="btn btn--primary wm__cta">
              {womenMode.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
