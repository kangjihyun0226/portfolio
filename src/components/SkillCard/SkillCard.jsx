import { motion } from "framer-motion";
import { Sparkles, Layers, LayoutGrid } from "lucide-react";
import { useRef } from "react";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";

const ICONS = { sparkles: Sparkles, layers: Layers, grid: LayoutGrid };
const BG = { yellow: "var(--color-yellow)", primary: "var(--color-primary)", blue: "var(--color-blue)" };

export default function SkillCard({ icon, color, title, text, index = 0 }) {
  const Icon = ICONS[icon] ?? Sparkles;
  const isTouch = useIsTouchDevice();
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(600px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-card bg-surface p-7 transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <span
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
        style={{ backgroundColor: `${BG[color] ?? BG.primary}33`, color: BG[color] ?? BG.primary }}
      >
        <Icon size={20} />
      </span>
      <h3 className="mb-2 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
    </motion.div>
  );
}
