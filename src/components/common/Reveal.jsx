import { useReveal } from "../../hooks/useReveal.js";

/**
 * Wraps children in an element that fades/slides in on first scroll into view.
 * `as` lets callers keep semantic tags (section, li, article...).
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
