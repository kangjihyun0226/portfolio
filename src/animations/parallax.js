import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { animationConfig } from "../config/animationConfig";

// speed: negative moves opposite scroll direction (slower), positive moves faster.
export function useParallax(speed = animationConfig.parallax.strengthMedium, range = 200) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range * speed, -range * speed]);
  return { ref, y };
}

export default useParallax;
