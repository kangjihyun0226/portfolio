// Shared breakpoints — keep in sync with tailwind's default screens.

export const breakpoints = {
  mobile: 375,
  mobileLg: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  wide: 1920,
};

export const mediaQuery = (bp) => `(min-width: ${breakpoints[bp]}px)`;

export default breakpoints;
