import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { animationConfig } from "../../config/animationConfig";

const SIZE_MAP = {
  default: animationConfig.cursor.sizeDefault,
  link: animationConfig.cursor.sizeHover,
  button: animationConfig.cursor.sizeHover,
  project: 96,
  drag: 48,
};

const LABEL_MAP = {
  project: "View",
  drag: "Drag",
};

export default function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();
  const [state, setState] = useState("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, {
    stiffness: animationConfig.cursor.springStiffness,
    damping: animationConfig.cursor.springDamping,
  });
  const springY = useSpring(y, {
    stiffness: animationConfig.cursor.springStiffness,
    damping: animationConfig.cursor.springDamping,
  });

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    document.body.classList.add("custom-cursor-active");

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      setState(target ? target.dataset.cursor : "default");
    };

    const handleLeaveWindow = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, [isTouch, prefersReducedMotion, x, y, visible]);

  if (isTouch || prefersReducedMotion) return null;

  const size = SIZE_MAP[state] ?? SIZE_MAP.default;
  const label = LABEL_MAP[state];

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        backgroundColor: "#FAF8F3",
        zIndex: "var(--z-cursor)",
        opacity: visible ? 1 : 0,
      }}
      transition={{ width: { duration: 0.25, ease: animationConfig.easing.organic }, height: { duration: 0.25 } }}
    >
      {label && (
        <span className="text-[11px] font-semibold tracking-wide text-ink font-body select-none">
          {label}
        </span>
      )}
    </motion.div>
  );
}
