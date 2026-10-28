import logoSrc from "../../assets/images/CoGo-Final 1.png";
import logoLightSrc from "../../assets/images/Logo.svg";
import "./Logo.css";

/** Natural size of the supplied artwork, used to keep the aspect ratio exact. */
const NATURAL = { w: 100, h: 48 };

/**
 * Cogo wordmark.
 *
 * `variant="light"` is for dark surfaces and uses the white/green export.
 */
export default function Logo({ variant = "dark", width = 104, className = "" }) {
  return (
    <img
      src={variant === "light" ? logoLightSrc : logoSrc}
      alt="Cogo"
      width={width}
      height={Math.round((width * NATURAL.h) / NATURAL.w)}
      className={`logo logo--${variant} ${className}`.trim()}
    />
  );
}
