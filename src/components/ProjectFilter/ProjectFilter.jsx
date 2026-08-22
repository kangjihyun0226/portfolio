import { motion } from "framer-motion";

export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter projects by category">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            data-cursor="button"
            onClick={() => onChange(cat)}
            className="relative rounded-pill px-5 py-2 text-sm font-medium transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-pill bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-background" : "text-ink hover:text-primary"}`}>
              {cat}
            </span>
          </button>
        );
      })}
    </div>
  );
}
