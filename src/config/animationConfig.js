// Centralized animation + interaction settings.
// Every interactive component reads its numbers from here so behaviour can be
// tuned globally without touching component code.

export const animationConfig = {
  duration: {
    fast: 0.25,
    base: 0.6,
    slow: 1,
    hero: 1.2,
  },
  easing: {
    organic: [0.16, 1, 0.3, 1],
    snap: [0.34, 1.56, 0.64, 1],
    smooth: [0.22, 1, 0.36, 1],
  },
  stagger: {
    text: 0.04,
    cards: 0.08,
    list: 0.06,
  },
  scrollTrigger: {
    start: "top 82%",
    once: false,
  },
  parallax: {
    strengthSlow: 0.15,
    strengthMedium: 0.35,
    strengthFast: 0.6,
  },
  magnetic: {
    strength: 0.4,
    textStrength: 0.15,
    radius: 120,
  },
  cursor: {
    sizeDefault: 16,
    sizeHover: 56,
    springStiffness: 400,
    springDamping: 30,
  },
  counter: {
    duration: 1.6,
  },
};

export default animationConfig;
