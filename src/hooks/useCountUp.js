import { useEffect, useRef, useState } from "react";

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 to `target` over `duration` ms, but only once `start` is true.
 * Under prefers-reduced-motion the duration collapses to zero, so the first
 * animation frame lands straight on the final value.
 */
export function useCountUp(target, { start = true, duration = 1600, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!start) return undefined;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const runFor = reduced ? 0 : duration;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = runFor === 0 ? 1 : Math.min((now - startedAt) / runFor, 1);
      setValue(target * easeOut(progress));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, start, duration]);

  return value.toFixed(decimals);
}
