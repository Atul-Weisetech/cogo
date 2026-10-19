import { useState } from "react";
import QrCode from "./illustrations/QrCode.jsx";
import StoreBadges from "./illustrations/StoreBadges.jsx";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import phone from "../assets/images/phone-2.png";
import "./AppCta.css";

export default function AppCta() {
  const [mobile, setMobile] = useState("");

  /* Placeholder handler: no SMS service is wired up yet. */
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="app" className="section app-cta-section">
      <div className="container app-cta">
        <Reveal className="app-cta__copy">
          <h2 className="app-cta__title">
            Your next ride is <span className="text-green">already in your route</span>
          </h2>

          <div className="app-cta__get">
            <QrCode className="app-cta__qr-svg" />
            <span className="app-cta__divider" aria-hidden="true" />
            <StoreBadges />
            <span className="app-cta__divider" aria-hidden="true" />

            <form className="app-cta__sms" onSubmit={handleSubmit}>
              <label className="app-cta__field">
                <span className="app-cta__prefix">+91</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  aria-label="Mobile number"
                />
                <button type="submit" className="app-cta__send" aria-label="Send me the link">
                  <Icon name="arrowRight" size={16} />
                </button>
              </label>
              <p className="app-cta__note">We'll send one SMS with the link. No marketing.</p>
            </form>
          </div>
        </Reveal>

        <Reveal className="app-cta__device" delay={120}>
          <img className="app-cta__phone" src={phone} alt="Cogo app on a phone" />
        </Reveal>
      </div>
    </section>
  );
}
