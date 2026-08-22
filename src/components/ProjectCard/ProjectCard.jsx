import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { getPlaceholderGradient } from "../../utils/images";

/**
 * Visual project preview. Uses a generated gradient + title treatment as the
 * artwork placeholder (accentColor-driven) until real project photography
 * is dropped into src/assets/images and wired into data/projects.js.
 */
export default function ProjectCard({ project, index = 0 }) {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] } }),
      }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block"
        data-cursor="project"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-card"
          style={{ background: getPlaceholderGradient(project.accentColor) }}
          animate={{ y: hovering ? -6 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 flex flex-col justify-between p-6"
            animate={{ scale: hovering ? 1.04 : 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="w-fit rounded-pill bg-background/80 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm"
            >
              {project.tag}
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-ink md:text-3xl">{project.title}</p>
              <p className="text-sm text-ink-soft">{project.year}</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-background text-ink"
            animate={{ scale: hovering ? 1 : 0, rotate: hovering ? 0 : -45 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
