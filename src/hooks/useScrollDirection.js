import { useEffect, useState, useRef } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState("up");
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) < 8) return;
      setDirection(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}

export default useScrollDirection;
