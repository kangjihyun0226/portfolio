export function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
