import { motion } from "framer-motion";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";

/**
 * A decorative shape the visitor can drag around; it springs back to its
 * origin on release. Uses Framer Motion's built-in drag + dragElastic.
 */
export default function DraggableElement({
  children,
  className = "",
  dragConstraints = { top: -40, bottom: 40, left: -40, right: 40 },
}) {
  const isTouch = useIsTouchDevice();

  return (
    <motion.div
      className={className}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.6}
      dragTransition={{ bounceStiffness: 350, bounceDamping: 18 }}
      whileDrag={{ scale: 1.08, cursor: "grabbing" }}
      data-cursor={isTouch ? undefined : "drag"}
      style={{ cursor: isTouch ? "default" : "grab", touchAction: "none" }}
    >
      {children}
    </motion.div>
  );
}
