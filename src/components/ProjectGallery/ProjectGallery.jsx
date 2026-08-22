import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { getPlaceholderGradient } from "../../utils/images";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Slow, continuously-scrolling horizontal showcase. Pauses on hover and can
 * be dragged manually; the track is duplicated once so the loop is seamless.
 */
export default function ProjectGallery({ projects, speed = 24 }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const loopWidth = useRef(0);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || paused || dragging) return;
    if (!loopWidth.current && trackRef.current) {
      loopWidth.current = trackRef.current.scrollWidth / 2;
    }
    let next = x.get() - (speed * delta) / 1000;
    if (loopWidth.current && next <= -loopWidth.current) next += loopWidth.current;
    x.set(next);
  });

  const doubled = [...projects, ...projects];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -100000, right: 100000 }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
      >
        {doubled.map((project, i) => (
          <Link
            key={`${project.slug}-${i}`}
            to={`/projects/${project.slug}`}
            data-cursor="project"
            className="w-[280px] shrink-0 sm:w-[340px]"
            draggable={false}
          >
            <div
              className="aspect-[4/5] rounded-card p-6 flex flex-col justify-end"
              style={{ background: getPlaceholderGradient(project.accentColor) }}
            >
              <p className="font-display text-xl font-bold text-ink">{project.title}</p>
              <p className="text-sm text-ink-soft">{project.category}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
