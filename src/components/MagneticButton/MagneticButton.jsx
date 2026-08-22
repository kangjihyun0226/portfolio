import { motion } from "framer-motion";
import { useMagnetic } from "../../animations/magnetic";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";
import { animationConfig } from "../../config/animationConfig";

/**
 * Wraps its children in a magnetic-follow container. Disabled on touch
 * devices so nothing depends on hover for core functionality.
 */
export default function MagneticButton({
  as: Component = "button",
  children,
  className = "",
  strength = animationConfig.magnetic.strength,
  cursorType = "button",
  ...props
}) {
  const isTouch = useIsTouchDevice();
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(strength);

  if (isTouch) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, display: "inline-block" }}
      data-cursor={cursorType}
    >
      <Component className={className} {...props}>
        {children}
      </Component>
    </motion.div>
  );
}
