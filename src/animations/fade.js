import { animationConfig } from "../config/animationConfig";

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: animationConfig.duration.base, ease: animationConfig.easing.organic },
};

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: animationConfig.duration.base, ease: animationConfig.easing.organic, delay },
});

export default fadeIn;
