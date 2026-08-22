import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../components/Section/Section";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import { fadeInUp } from "../../animations/fade";
import { projects, categories } from "../../data/projects";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects — DesignPlayground";
  }, []);

  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <Section className="pb-8 md:pb-8">
        <motion.h1 {...fadeInUp(0)} className="font-display text-4xl font-extrabold text-ink md:text-6xl">
          Selected Works
        </motion.h1>

        <motion.div {...fadeInUp(0.1)} className="mt-10">
          <ProjectFilter categories={categories} active={active} onChange={setActive} />
        </motion.div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <ProjectCard project={project} index={i} key={project.slug} />
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full py-16 text-center text-ink-soft">
                No projects in this category yet — check back soon.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      <Section>
        <h2 className="mb-8 font-display text-2xl font-bold text-ink">Browse Everything</h2>
        <p className="mb-8 max-w-xl text-sm text-ink-soft">
          Drag, or just let it drift — a continuous look through the full archive.
        </p>
        <ProjectGallery projects={projects} />
      </Section>
    </>
  );
}
