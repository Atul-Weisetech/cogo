import Icon from "./common/Icon.jsx";
import { footer } from "../data/content.js";
import logo from "../assets/images/Logo.svg";
import "./Footer.css";

/* Read once at module load so the component body stays pure. */
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img className="footer__logo" src={logo} alt="Cogo" width={118} />
          <p className="footer__about">{footer.about}</p>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} className="footer__col" aria-label={col.title}>
            <h3 className="footer__heading">{col.title}</h3>
            <ul className="footer__list">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container footer__bar">
        <p>© {YEAR} Cogo. All rights reserved.</p>
        <ul className="footer__socials">
          {footer.socials.map((social) => (
            <li key={social.icon}>
              <a href="#app" aria-label={social.label}>
                <Icon name={social.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
