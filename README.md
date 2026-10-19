# Cogo — marketing site

React landing page for **Cogo**, a verified ride-sharing app ("Move Smarter. Ride Together."),
built from the Figma design.

## Stack

- **React 19** + **Vite** (JavaScript, no TypeScript)
- Plain CSS with design tokens — no UI framework, no runtime CSS-in-JS
- Zero image assets: every illustration is hand-authored inline SVG, so the page
  stays crisp at any size and ships nothing to download

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
npm run lint
```

## Layout of the page

| Section | Component | Anchor |
| --- | --- | --- |
| Sticky nav + mobile sheet | `Navbar` | — |
| Hero + trust badges | `Hero` | `#home` |
| How it works (dark city band) | `HowItWorks` | `#how-it-works` |
| Why Cogo (2×2 cards) | `WhyCogo` | `#why-cogo` |
| Stat counters | `Stats` | — |
| Women Mode | `WomenMode` | `#women-mode` |
| Testimonial carousel | `Testimonials` | — |
| City rollout + India map | `Cities` | `#cities` |
| FAQ accordion | `Faq` | `#faq` |
| App download CTA | `AppCta` | `#app` |
| Footer | `Footer` | `#contact` |

## Project structure

```
src/
├── App.jsx                   section order for the whole page
├── index.css                 design tokens, reset, shared atoms (.btn, .container…)
├── data/content.js           ALL copy — edit text here, not in components
├── hooks/
│   ├── useReveal.js          one-shot scroll-into-view animation
│   └── useCountUp.js         animated stat counters
└── components/
    ├── <Section>.jsx/.css    one component + one stylesheet per section
    ├── common/               Logo, Icon, Reveal
    └── illustrations/        inline SVG artwork
```

### Editing content

Headlines, card copy, FAQ entries, city lists, testimonials and footer links all live in
[`src/data/content.js`](src/data/content.js). Components are pure layout, so copy changes
never require touching JSX.

### Theming

Brand colours, radii, shadows and spacing are CSS custom properties on `:root` in
[`src/index.css`](src/index.css). Changing `--green` re-themes the entire page, inline SVG
included (the logo reads the token directly).

## Notes on the artwork

- `QrCode` renders a seeded pattern that **looks** like a QR code but does not scan.
  Swap it for a real generated code before going live.

## Accessibility & responsiveness

- Skip link, visible focus rings, labelled icon buttons, `aria-expanded`/`aria-controls`
  on the accordion and mobile menu, `role="tab"` dots on the carousel.
- Every animation is disabled under `prefers-reduced-motion: reduce`.
- Laid out from 360 px up; breakpoints at 520/620/880/900/980 px.
