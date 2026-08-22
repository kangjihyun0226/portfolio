import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "./useReducedMotion";

// Sets up global smooth scrolling. Skips entirely when the user prefers
// reduced motion, or on touch devices where native scroll feels better.
export function useLenis() {
  const lenisRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    document.documentElement.classList.add("has-lenis");

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove("has-lenis");
    };
  }, [prefersReducedMotion]);

  return lenisRef;
}

export default useLenis;
