import { animationConfig } from "../config/animationConfig";

// Clip-path mask reveal used for images and headline lines.
export const maskReveal = (delay = 0) => ({
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: animationConfig.duration.slow, ease: animationConfig.easing.organic, delay },
});

export default maskReveal;
