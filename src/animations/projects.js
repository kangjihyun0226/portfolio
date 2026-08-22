import { animationConfig } from "../config/animationConfig";

// Card entrance stagger for the Projects grid.
export const projectCardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: animationConfig.duration.base, ease: animationConfig.easing.organic, delay: i * animationConfig.stagger.cards },
  }),
};
