// Matter.js tuning values used by the Home hero's floating physics shapes.

export const physicsConfig = {
  gravityY: 0.02,
  restitution: 0.85,
  friction: 0.02,
  frictionAir: 0.02,
  mouseStiffness: 0.15,
  shapeCount: {
    desktop: 6,
    mobile: 3,
  },
  sizeRange: [24, 64],
};

export default physicsConfig;
