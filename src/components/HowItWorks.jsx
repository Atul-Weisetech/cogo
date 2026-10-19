import Reveal from "./common/Reveal.jsx";
import { howItWorks } from "../data/content.js";
/* banner.png is only ~12% opaque: it is designed to sit on the dark navy band
   (see .hiw__band), which is what produces the faint skyline and dark car. */
import bannerImg from "../assets/images/banner.png";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="hiw">
      <div className="hiw__band" style={{ "--hiw-banner": `url("${bannerImg}")` }}>
        <span className="hiw__corner hiw__corner--tr" aria-hidden="true" />
        <span className="hiw__corner hiw__corner--bl" aria-hidden="true" />

        <div className="container hiw__content">
          <Reveal as="h2" className="hiw__title">
            How it works
          </Reveal>

          <div className="hiw__columns">
            {howItWorks.map((column, colIndex) => (
              <Reveal
                key={column.key}
                id={column.anchorId}
                className="hiw-col"
                delay={colIndex * 120}
              >
                <h3 className="hiw-col__title">{column.title}</h3>
                <ol className="hiw-col__steps">
                  {column.steps.map((step, i) => (
                    <li key={step} className="hiw-step">
                      <span className="hiw-step__num">{i + 1}</span>
                      <span className="hiw-step__text">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
