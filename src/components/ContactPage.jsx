import { useId, useRef, useState } from "react";
import Icon from "./common/Icon.jsx";
import Reveal from "./common/Reveal.jsx";
import { contactPage } from "../data/content.js";
import heroBg from "../assets/images/price-banner.png";
import inAppIcon from "../assets/images/In-app support.png";
import emailIcon from "../assets/images/Email support.png";
import grievanceIcon from "../assets/images/Grievance Officer.png";
import "./ContactPage.css";

const { hero, channels, form, office, extras } = contactPage;

/* keyed by the `icon` name in the content */
const channelImages = { phone: inAppIcon, mail: emailIcon, grievance: grievanceIcon };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[0-9][0-9\s-]{8,13}$/;
const MAX_BYTES = form.maxFileMb * 1024 * 1024;

const EMPTY = { name: "", email: "", phone: "", topic: "", message: "", consent: false };

/* Returns { field: message } for everything that's wrong; empty when the form is fine.
   Phone is optional, but must look like a number when given. */
const validate = (values, file) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL.test(values.email.trim())) errors.email = "That email doesn't look right.";
  if (values.phone.trim() && !PHONE.test(values.phone.trim())) errors.phone = "Enter a valid phone number.";
  if (!values.topic) errors.topic = "Pick a topic.";
  if (!values.message.trim()) errors.message = "Write a short message so we can help.";
  if (file && file.size > MAX_BYTES) errors.file = `That file is over ${form.maxFileMb} MB.`;
  if (!values.consent) errors.consent = "Please agree so we can reply to you.";
  return errors;
};

function Hero() {
  return (
    <section className="cp-hero" style={{ "--cp-hero-bg": `url("${heroBg}")` }}>
      <div className="container">
        <Reveal as="h1" className="cp-hero__title">
          {hero.title} <span className="text-green">{hero.highlight}</span>
        </Reveal>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <ul className="cp-channels">
      {channels.map((channel, i) => (
        <Reveal as="li" key={channel.title} className="cp-channel" delay={i * 80}>
          <span className="cp-channel__icon">
            <img src={channelImages[channel.icon]} alt="" />
          </span>
          <h2 className="cp-channel__title">{channel.title}</h2>
          <p className="cp-channel__text">
            {channel.href ? <a href={channel.href}>{channel.text}</a> : channel.text}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}

/* One labelled field. The label is visually hidden: the placeholder carries the look
   of the design, but screen readers still get a real label, and so does the error. */
function Field({ id, label, error, className = "", children }) {
  return (
    <div className={`cp-field ${className}`.trim()}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="cp-field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactForm() {
  const uid = useId();
  const fileRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const id = (name) => `${uid}-${name}`;
  const set = (name) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    /* clear a field's error as soon as the person starts fixing it */
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }));
  };
  /* aria props shared by every input */
  const a11y = (name) => ({
    id: id(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
  });

  const onFile = (e) => {
    const picked = e.target.files?.[0] ?? null;
    setFile(picked);
    if (errors.file) setErrors((errs) => ({ ...errs, file: undefined }));
  };

  const clearFile = () => {
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values, file);
    setErrors(found);

    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }

    /* TODO: send `values` + `file` to the support backend once there is an endpoint. */
    setSent(true);
  };

  const reset = () => {
    setValues(EMPTY);
    clearFile();
    setErrors({});
    setSent(false);
  };

  if (sent) {
    return (
      <div className="cp-sent" role="status">
        <span className="cp-sent__icon">
          <Icon name="check" size={26} />
        </span>
        <h3 className="cp-sent__title">{form.success.title}</h3>
        <p className="cp-sent__text">{form.success.text}</p>
        <button type="button" className="btn btn--sm btn--dark" onClick={reset}>
          {form.success.again}
        </button>
      </div>
    );
  }

  return (
    <form className="cp-form" onSubmit={onSubmit} noValidate>
      <div className="cp-form__row">
        <Field id={id("name")} label="Name" error={errors.name}>
          <input
            {...a11y("name")}
            className="cp-input"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
          />
        </Field>
        <Field id={id("email")} label="Email" error={errors.email}>
          <input
            {...a11y("email")}
            className="cp-input"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
          />
        </Field>
      </div>

      <div className="cp-form__row">
        <Field id={id("phone")} label="Phone (optional)" error={errors.phone}>
          <input
            {...a11y("phone")}
            className="cp-input"
            type="tel"
            name="phone"
            placeholder="Phone"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
          />
        </Field>
        <Field id={id("topic")} label="Topic" error={errors.topic} className="cp-field--select">
          <select
            {...a11y("topic")}
            className={`cp-input cp-select ${values.topic ? "" : "is-empty"}`}
            name="topic"
            value={values.topic}
            onChange={set("topic")}
          >
            <option value="" disabled>
              Topic
            </option>
            {form.topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <span className="cp-select__chevron">
            <Icon name="chevron" size={18} />
          </span>
        </Field>
      </div>

      <Field id={id("message")} label="Message" error={errors.message}>
        <textarea
          {...a11y("message")}
          className="cp-input cp-textarea"
          name="message"
          rows={5}
          placeholder="Message"
          value={values.message}
          onChange={set("message")}
        />
      </Field>

      <Field id={id("file")} label="Attachment (optional)" error={errors.file}>
        <div className="cp-file">
          <input
            {...a11y("file")}
            ref={fileRef}
            className="cp-file__input"
            type="file"
            name="attachment"
            onChange={onFile}
          />
          <span className="cp-file__btn" aria-hidden="true">
            Choose File
          </span>
          <span className={`cp-file__name ${file ? "has-file" : ""}`}>
            {file ? file.name : `Attachment (optional, ≤ ${form.maxFileMb} MB)`}
          </span>
          {file ? (
            <button type="button" className="cp-file__clear" onClick={clearFile} aria-label="Remove attachment">
              <Icon name="close" size={16} />
            </button>
          ) : null}
        </div>
      </Field>

      <div className="cp-consent">
        <input {...a11y("consent")} type="checkbox" name="consent" checked={values.consent} onChange={set("consent")} />
        <label htmlFor={id("consent")}>
          {form.consent} See{" "}
          <a href={form.privacyHref} target="_blank" rel="noopener noreferrer">
            {form.privacyLabel}
          </a>
        </label>
      </div>
      {errors.consent ? (
        <p id={`${id("consent")}-error`} className="cp-field__error">
          {errors.consent}
        </p>
      ) : null}

      <button type="submit" className="btn btn--dark cp-form__submit">
        {form.submit}
      </button>
    </form>
  );
}

function Office() {
  return (
    <div className="cp-office">
      <h2 className="cp-office__title">{office.title}</h2>
      <address className="cp-office__address">{office.address}</address>

      <div className="cp-map">
        <iframe
          title={office.mapTitle}
          src={office.mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="cp-extras">
        {extras.map((extra) => (
          <div key={extra.title} className="cp-extra">
            <h3 className="cp-extra__title">{extra.title}</h3>
            <a href={extra.href} className="cp-extra__link">
              {extra.cta}
              <Icon name="arrowRight" size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Hero />

      <section className="cp-body">
        <div className="container">
          <Channels />

          <div className="cp-split">
            <Reveal className="cp-formwrap">
              <h2 className="cp-formwrap__title">
                {form.title} <span className="text-green">{form.highlight}</span>
              </h2>
              <p className="cp-formwrap__lead">{form.lead}</p>
              <ContactForm />
            </Reveal>

            <Reveal delay={100}>
              <Office />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
