import { animationConfig } from "../config/animationConfig";

export const scaleIn = (delay = 0) => ({
  initial: { scale: 0.92, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: animationConfig.duration.slow, ease: animationConfig.easing.organic, delay },
});

export default scaleIn;
