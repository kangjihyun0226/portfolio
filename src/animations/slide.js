import { animationConfig } from "../config/animationConfig";

export const slideUp = (delay = 0, distance = 40) => ({
  initial: { y: distance, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: animationConfig.duration.base, ease: animationConfig.easing.organic, delay },
});

export const slideLeft = (delay = 0, distance = 60) => ({
  initial: { x: distance, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: animationConfig.duration.base, ease: animationConfig.easing.organic, delay },
});

export default slideUp;
