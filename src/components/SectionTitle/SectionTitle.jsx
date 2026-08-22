import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fade";

export default function SectionTitle({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <motion.p {...fadeInUp(0)} className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 {...fadeInUp(0.08)} className="font-display text-3xl font-bold text-ink md:text-4xl">
        {title}
      </motion.h2>
    </div>
  );
}
