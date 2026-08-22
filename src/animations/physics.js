// Small helpers shared by Matter.js powered components.
export function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomShapeSize([min, max]) {
  return randomBetween(min, max);
}
