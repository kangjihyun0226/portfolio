import { animationConfig } from "../config/animationConfig";

// Timed entrance sequence for the Home hero: Portfolio -> subtitle -> description -> scroll cue.
export const heroSequence = {
  line1: { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: animationConfig.duration.hero, ease: animationConfig.easing.organic, delay: 0.1 } },
  line2: { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: animationConfig.duration.hero, ease: animationConfig.easing.organic, delay: 0.28 } },
  description: { initial: { y: 24, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: animationConfig.duration.base, ease: animationConfig.easing.organic, delay: 0.5 } },
  scrollCue: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: animationConfig.duration.base, delay: 0.9 } },
};
