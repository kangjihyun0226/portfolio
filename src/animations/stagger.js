import { animationConfig } from "../config/animationConfig";

export const staggerContainer = (staggerAmount = animationConfig.stagger.cards, delayChildren = 0) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-10% 0px" },
  transition: { staggerChildren: staggerAmount, delayChildren },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: animationConfig.duration.base, ease: animationConfig.easing.organic },
  },
};

export default staggerContainer;
