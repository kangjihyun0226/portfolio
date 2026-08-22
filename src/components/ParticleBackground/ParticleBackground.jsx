import { useEffect, useRef } from "react";
import p5 from "p5";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Subtle Perlin-noise particle field that gently reacts to the cursor.
 * Runs on a <canvas> managed entirely by p5 in instance mode so it never
 * fights with React's render cycle. Skipped on touch devices and when the
 * user prefers reduced motion.
 */
export default function ParticleBackground({ particleCount = 60, color = "#FF4B4B" }) {
  const containerRef = useRef(null);
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;
    const container = containerRef.current;
    if (!container) return;

    const count = isTouch ? Math.round(particleCount / 3) : particleCount;

    const sketch = (p) => {
      let particles = [];
      let noiseSeedOffset = 0;

      class Particle {
        constructor() {
          this.reset();
        }
        reset() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(1.5, 3.5);
          this.baseAlpha = p.random(40, 110);
          this.angleOffset = p.random(1000);
        }
        update() {
          const noiseVal = p.noise(this.x * 0.0025, this.y * 0.0025, noiseSeedOffset + this.angleOffset);
          const angle = noiseVal * Math.PI * 4;
          this.x += Math.cos(angle) * 0.4;
          this.y += Math.sin(angle) * 0.4;

          const dx = p.mouseX - this.x;
          const dy = p.mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            this.x -= (dx / dist) * force * 1.6;
            this.y -= (dy / dist) * force * 1.6;
          }

          if (this.x < 0) this.x = p.width;
          if (this.x > p.width) this.x = 0;
          if (this.y < 0) this.y = p.height;
          if (this.y > p.height) this.y = 0;
        }
        draw() {
          p.noFill();
          p.fill(this.rgb.r, this.rgb.g, this.rgb.b, this.baseAlpha);
          p.noStroke();
          p.circle(this.x, this.y, this.size);
        }
      }

      p.setup = () => {
        const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
        canvas.parent(container);
        p.noStroke();
        const c = p.color(color);
        Particle.prototype.rgb = { r: p.red(c), g: p.green(c), b: p.blue(c) };
        particles = Array.from({ length: count }, () => new Particle());
      };

      p.draw = () => {
        p.clear();
        noiseSeedOffset += 0.0015;
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(container.offsetWidth, container.offsetHeight);
      };
    };

    const instance = new p5(sketch, container);

    return () => instance.remove();
  }, [isTouch, prefersReducedMotion, particleCount, color]);

  if (isTouch || prefersReducedMotion) return null;

  return <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />;
}
