import { useEffect, useRef, useState } from "react";

const supportsObserver = typeof IntersectionObserver !== "undefined";

/**
 * Adds `is-visible` once the element scrolls into view. One-shot: we unobserve
 * after the first intersection so scrolling back up doesn't re-animate.
 * Without IntersectionObserver support everything starts visible.
 */
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(!supportsObserver);

  useEffect(() => {
    const node = ref.current;
    if (!node || !supportsObserver) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
