// Centralized layout settings.
// Change container widths / spacing from a single place; consumed via CSS vars
// (see src/styles/variables.css) and directly in JS where needed for calculations.

export const layoutConfig = {
  containerWidth: {
    desktop: 1440,
    tablet: 1024,
    mobile: "100%",
  },
  sectionPadding: {
    top: "clamp(64px, 8vw, 140px)",
    bottom: "clamp(64px, 8vw, 140px)",
  },
  sidePadding: {
    desktop: 96,
    tablet: 48,
    mobile: 20,
  },
  gridGap: {
    desktop: 32,
    mobile: 16,
  },
  navHeight: 88,
};

export default layoutConfig;
