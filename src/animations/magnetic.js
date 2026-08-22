import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { animationConfig } from "../config/animationConfig";

// Attach to a ref'd element to get magnetic-follow motion values.
// strength: 0-1, how much of the cursor offset is applied.
export function useMagnetic(strength = animationConfig.magnetic.strength) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, handleMouseMove, handleMouseLeave };
}

export default useMagnetic;
