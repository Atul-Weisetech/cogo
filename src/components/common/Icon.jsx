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
  ride: (
    <>
      <path d="M3.5 16v-3.3L5.4 8A2 2 0 0 1 7.3 6.7h9.4A2 2 0 0 1 18.6 8l1.9 4.7V16" {...S} />
      <path d="M3.5 16h17M6 16v1.8M18 16v1.8M4.8 12.7h14.4" {...S} />
      <circle cx="7.5" cy="13.8" r="1" fill="currentColor" />
      <circle cx="16.5" cy="13.8" r="1" fill="currentColor" />
    </>
  ),
  women: (
    <>
      <circle cx="12" cy="8" r="4" {...S} />
      <path d="M12 12v7M9.5 16.5h5" {...S} />
      <path d="M18.5 4.5 15.6 7.4M18.5 4.5h-3M18.5 4.5v3" {...S} />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c0 8.3-4.3 13-10.5 13H5.5C5.5 9.4 10.6 4 20 4Z" {...S} />
      <path d="M4 20c1.4-4.4 4.6-8 9.5-10" {...S} />
    </>
  ),
  mask: (
    <>
      <path d="M5 4.5h3l1.6 4-2 1.4a11.5 11.5 0 0 0 5.5 5.5l1.4-2 4 1.6v3a1.5 1.5 0 0 1-1.7 1.5C9.3 18.8 5.2 14.7 3.5 6.2A1.5 1.5 0 0 1 5 4.5Z" {...S} />
      <path d="M14.5 3.5h6M14.5 7h6" {...S} />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h11a2 2 0 0 1 2 2v1" {...S} />
      <rect x="3.5" y="7.5" width="17" height="11" rx="2.5" {...S} />
      <circle cx="16" cy="13" r="1.4" fill="currentColor" />
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
  repeat: (
    <>
      <path d="M4 10.5A5 5 0 0 1 9 5.5h9M18 5.5l-2.6-2.6M18 5.5l-2.6 2.6" {...S} />
      <path d="M20 13.5a5 5 0 0 1-5 5H6M6 18.5l2.6 2.6M6 18.5l2.6-2.6" {...S} />
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
  driver: (
    <>
      <circle cx="12" cy="7" r="3.4" fill="currentColor" />
      <path d="M7.2 6.2a4.9 4.9 0 0 1 9.6 0" fill="currentColor" />
      <path
        d="M12 11.4c-4 0-7.2 2.8-7.6 6.5a.9.9 0 0 0 .9 1h13.4a.9.9 0 0 0 .9-1c-.4-3.7-3.6-6.5-7.6-6.5Z"
        fill="currentColor"
      />
      <circle cx="12" cy="16.4" r="2.6" fill="#0e1420" />
      <path d="M12 13.8v5.2M9.4 16.4h5.2" stroke="currentColor" strokeWidth="1.1" />
    </>
  ),
  pins: (
    <>
      <path
        d="M8.5 20c2.9-3.4 4.4-5.9 4.4-7.8a4.4 4.4 0 1 0-8.8 0c0 1.9 1.5 4.4 4.4 7.8Z"
        fill="currentColor"
      />
      <circle cx="8.5" cy="12" r="1.6" fill="#0e1420" />
      <path
        d="M16.5 15.5c2.2-2.6 3.3-4.5 3.3-6a3.3 3.3 0 1 0-6.6 0c0 1.5 1.1 3.4 3.3 6Z"
        fill="currentColor"
        opacity=".75"
      />
    </>
  ),
  star: <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.9L12 3.6Z" fill="currentColor" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" {...S} strokeWidth="2.4" />,
  chevron: <path d="m6 9.5 6 6 6-6" {...S} strokeWidth="2" />,
  arrowRight: <path d="M4.5 12h15M13.5 6l6 6-6 6" {...S} strokeWidth="2" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" {...S} strokeWidth="2" />,
  close: <path d="M6 6l12 12M18 6 6 18" {...S} strokeWidth="2" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" {...S} />
      <path d="m4 8 7.1 4.8a1.6 1.6 0 0 0 1.8 0L20 8" {...S} />
    </>
  ),
  phone: (
    <path
      d="M5 3.5h3.2l1.7 4.2-2.1 1.5a12.3 12.3 0 0 0 5.9 5.9l1.5-2.1 4.2 1.7V18a2.5 2.5 0 0 1-2.8 2.5C9.3 19.5 4.5 14.7 3.5 6.3A2.5 2.5 0 0 1 5 3.5Z"
      {...S}
    />
  ),
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
  x: <path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5" {...S} strokeWidth="2" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" {...S} />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" {...S} />
    </>
  ),
  download: <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19h14" {...S} strokeWidth="2" />,
  sos: (
    <>
      <circle cx="12" cy="12" r="8.5" {...S} />
      <path d="M12 7.5v5M12 15.8v.1" {...S} strokeWidth="2.2" />
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
