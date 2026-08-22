import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const DEFAULT_SHAPES = [
  { color: "var(--color-yellow)", size: 96, top: "12%", left: "6%", duration: 9 },
  { color: "var(--color-primary)", size: 130, top: "58%", left: "88%", duration: 11 },
  { color: "var(--color-blue)", size: 60, top: "78%", left: "14%", duration: 7.5 },
  { color: "var(--color-mint)", size: 80, top: "22%", left: "92%", duration: 10 },
  { color: "var(--color-purple)", size: 54, top: "40%", left: "48%", duration: 8.5 },
];

/**
 * Soft blob shapes that drift slowly and independently in the background.
 * Purely decorative — aria-hidden, and skipped for reduced-motion users.
 */
export default function FloatingShapes({ shapes = DEFAULT_SHAPES, className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-blob opacity-70 blur-[2px]"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            background: shape.color,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -18, 6, -10, 0],
                  x: [0, 10, -6, 4, 0],
                  rotate: [0, 8, -6, 4, 0],
                }
          }
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
