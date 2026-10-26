/**
 * One lightweight icon set for the whole page. Every glyph is drawn on a
 * 24x24 grid and inherits `currentColor`, so colour is controlled by CSS.
 */

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const paths = {
  id: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" {...S} />
      <circle cx="8.5" cy="11" r="2.3" {...S} />
      <path d="M5 16.4c.7-1.6 2-2.4 3.5-2.4s2.8.8 3.5 2.4M15 10h4M15 13.5h2.5" {...S} />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.6 6-8 6-10.6A6 6 0 0 0 6 10.4C6 13 8 16.4 12 21Z" {...S} />
      <circle cx="12" cy="10.3" r="2.3" {...S} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.6c0 4 2.8 7.5 7 9.4 4.2-1.9 7-5.4 7-9.4V6l-7-3Z" {...S} />
      <path d="m9 12 2.2 2.2L15.4 10" {...S} />
    </>
  ),
  car: (
    <>
      <path
        d="M3 15.5v-2.8l1.8-4.3A2.4 2.4 0 0 1 7 6.9h10a2.4 2.4 0 0 1 2.2 1.5L21 12.7v2.8a1.5 1.5 0 0 1-1.5 1.5H18v.9a1.3 1.3 0 0 1-2.6 0v-.9H8.6v.9a1.3 1.3 0 0 1-2.6 0v-.9H4.5A1.5 1.5 0 0 1 3 15.5Z"
        fill="currentColor"
      />
      <path d="M5.2 12.4h13.6" stroke="#0e1420" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="7.4" cy="14.6" r="1.1" fill="#0e1420" />
      <circle cx="16.6" cy="14.6" r="1.1" fill="#0e1420" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="3" {...S} />
      <path d="M3.5 10h17M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2" {...S} />
    </>
  ),
  road: <path d="M8 3 5 21M16 3l3 18M12 4v3M12 10.5v3M12 17v3" {...S} strokeWidth="2.2" />,
  seat: (
    <>
      <path d="M8 3.5v9a2 2 0 0 0 2 2h6.5M8 3.5H6.5M16.5 14.5V20" {...S} strokeWidth="2.2" />
      <path d="M10 14.5V20" {...S} strokeWidth="2.2" />
    </>
  ),
  fuel: (
    <>
      <path d="M5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 15 5v15.5M3.5 20.5h13" {...S} />
      <path d="M7.5 7.5h5M15 9.5l2.5 2v5a1.5 1.5 0 0 0 3 0V9l-2.5-2.5" {...S} />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path d="M12 11v5.5M12 7.6v.1" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  star: <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.9L12 3.6Z" fill="currentColor" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" {...S} strokeWidth="2.4" />,
  chevron: <path d="m6 9.5 6 6 6-6" {...S} strokeWidth="2" />,
  arrowRight: <path d="M4.5 12h15M13.5 6l6 6-6 6" {...S} strokeWidth="2" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" {...S} strokeWidth="2" />,
  close: <path d="M6 6l12 12M18 6 6 18" {...S} strokeWidth="2" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...S} />
      <circle cx="12" cy="12" r="4" {...S} />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" {...S} />
      <path d="M8 10.5V17M8 7.3v.1M12 17v-3.6a2 2 0 0 1 4 0V17" {...S} />
    </>
  ),
  facebook: <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.4l.6-3.5H14V8.5Z" fill="currentColor" />,
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" {...S} />
      <path d="M5 20c.6-3.6 3.4-5.6 7-5.6s6.4 2 7 5.6" {...S} />
    </>
  ),
  share: (
    <>
      <circle cx="6.5" cy="12" r="2.4" {...S} />
      <circle cx="17.5" cy="6" r="2.4" {...S} />
      <circle cx="17.5" cy="18" r="2.4" {...S} />
      <path d="m8.7 10.8 6.6-3.6M8.7 13.2l6.6 3.6" {...S} />
    </>
  ),
};

export default function Icon({ name, size = 24, className = "", title }) {
  const glyph = paths[name];
  if (!glyph) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {glyph}
    </svg>
  );
}
