import logoSrc from "../../assets/images/CoGo-Final 1.png";
import "./Logo.css";

/** Natural size of the supplied artwork, used to keep the aspect ratio exact. */
const NATURAL = { w: 100, h: 48 };

/**
 * Cogo wordmark.
 *
 * `variant="light"` is for dark surfaces: the supplied artwork is dark navy, so
 * it is flattened to a solid white silhouette. Drop a white/green export in as
 * `logoLightSrc` below if you have one and the filter can go away.
 */
export default function Logo({ variant = "dark", width = 104, className = "" }) {
  return (
    <img
      src={logoSrc}
      alt="Cogo"
      width={width}
      height={Math.round((width * NATURAL.h) / NATURAL.w)}
      className={`logo logo--${variant} ${className}`.trim()}
    />
  );
}
