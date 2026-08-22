// Maps a project's `interactionStyle` field to a lightweight visual treatment
// used on the Project Detail page (accent motion / gallery layout).
export const interactionStyleMap = {
  screens: { label: "Screen Transitions", motion: "slide" },
  kinetic: { label: "Kinetic Typography", motion: "letters" },
  product: { label: "Product Motion", motion: "float" },
};

export const getInteractionStyle = (key) => interactionStyleMap[key] || interactionStyleMap.screens;
