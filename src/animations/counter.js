import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { animationConfig } from "../config/animationConfig";

// Simple count-up hook driven by requestAnimationFrame, triggered on view.
export function useCounter(target, { duration = animationConfig.counter.duration } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const startVal = 0;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(startVal + (target - startVal) * eased));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return [ref, value];
}
