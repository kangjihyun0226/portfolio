import { animationConfig } from "../config/animationConfig";

export const blurReveal = (delay = 0) => ({
  initial: { opacity: 0, filter: "blur(12px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: animationConfig.duration.slow, ease: animationConfig.easing.organic, delay },
});

export default blurReveal;
