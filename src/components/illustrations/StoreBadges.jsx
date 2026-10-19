/**
 * App Store / Google Play download buttons, drawn inline so they match the
 * page's radius and dark surface exactly.
 */

function Badge({ children, label, sub, title }) {
  return (
    <a className="store-badge" href="#app" aria-label={`${sub} ${title}`}>
      <span className="store-badge__glyph" aria-hidden="true">
        {children}
      </span>
      <span className="store-badge__text">
        <span className="store-badge__sub">{sub}</span>
        <span className="store-badge__title">{title}</span>
      </span>
      <span className="sr-only">{label}</span>
    </a>
  );
}

export default function StoreBadges({ className = "" }) {
  return (
    <div className={`store-badges ${className}`.trim()}>
      <Badge sub="Get it on" title="Google Play" label="Get Cogo on Google Play">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M3 2 13 12 3 22a1.6 1.6 0 0 1-.6-1.3V3.3c0-.5.2-1 .6-1.3Z" fill="#00c3ff" />
          <path d="M3 2 16.2 9.3 13 12Z" fill="#00e676" />
          <path
            d="M16.2 9.3 20 11.2a1 1 0 0 1 0 1.6l-3.8 1.9L13 12Z"
            fill="#ffc400"
          />
          <path d="M13 12 16.2 14.7 3 22Z" fill="#ff3d47" />
        </svg>
      </Badge>

      <Badge sub="Download on the" title="App Store" label="Download Cogo on the App Store">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.02-3.76-2.05-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13ZM14.5 4.6c.71-.87 1.19-2.07 1.06-3.27-1.02.04-2.26.68-3 1.54-.66.77-1.24 2-1.08 3.18 1.14.09 2.3-.58 3.02-1.45Z" />
        </svg>
      </Badge>
    </div>
  );
}
