import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Section from "../../components/Section/Section";
import { getProjectBySlug, projects } from "../../data/projects";
import { getPlaceholderGradient } from "../../utils/images";
import { fadeInUp } from "../../animations/fade";
import { maskReveal } from "../../animations/maskReveal";
import { scaleIn } from "../../animations/scale";
import { getInteractionStyle } from "../../animations/projectDetail";

function MetaRow({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}

function VisualBlock({ accentColor, label, className = "", height = "aspect-[16/9]" }) {
  return (
    <div
      className={`${height} ${className} flex items-end rounded-card p-6`}
      style={{ background: getPlaceholderGradient(accentColor) }}
    >
      {label && <span className="text-sm font-medium text-ink-soft">{label}</span>}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) document.title = `${project.title} — DesignPlayground`;
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  const interaction = getInteractionStyle(project.interactionStyle);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <Section className="pb-10 md:pb-10">
        <motion.p {...fadeInUp(0)} className="mb-3 text-sm font-semibold text-primary">
          {project.year}
        </motion.p>
        <motion.h1 {...fadeInUp(0.05)} className="max-w-3xl font-display text-4xl font-extrabold text-ink md:text-6xl">
          {project.title}
        </motion.h1>
        <motion.p {...fadeInUp(0.1)} className="mt-3 text-lg text-ink-soft">
          {project.subtitle}
        </motion.p>

        <motion.div {...scaleIn(0.15)} className="mt-10">
          <VisualBlock accentColor={project.accentColor} label={project.tag} height="aspect-[16/8]" />
        </motion.div>
      </Section>

      {/* Brief / meta */}
      <Section className="pt-0 md:pt-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <motion.h2 {...fadeInUp(0)} className="mb-4 font-display text-2xl font-bold text-ink">
              The Challenge
            </motion.h2>
            <motion.p {...fadeInUp(0.05)} className="max-w-2xl leading-relaxed text-ink-soft">
              {project.challenge}
            </motion.p>
          </div>
          <div className="space-y-6">
            <MetaRow label="Role" value={project.role} />
            <MetaRow label="Timeline" value={project.timeline} />
            <MetaRow label="Deliverables" value={project.deliverables} />
            <MetaRow label="Interaction Style" value={interaction.label} />
          </div>
        </div>
      </Section>

      {/* Research */}
      <Section className="pt-0 md:pt-0">
        <motion.h2 {...fadeInUp(0)} className="mb-4 font-display text-2xl font-bold text-ink">
          {project.research.title}
        </motion.h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:items-start">
          <div>
            <motion.p {...fadeInUp(0.05)} className="mb-8 max-w-xl leading-relaxed text-ink-soft">
              {project.research.text}
            </motion.p>
            <motion.div {...maskReveal(0.1)}>
              <VisualBlock accentColor={project.accentColor} label={project.research.caption} />
            </motion.div>
          </div>
          <motion.blockquote
            {...fadeInUp(0.15)}
            className="rounded-card bg-surface p-7 font-display text-xl font-medium leading-snug text-ink"
          >
            “{project.research.quote}”
          </motion.blockquote>
        </div>
      </Section>

      {/* Process */}
      <Section className="pt-0 md:pt-0">
        <motion.h2 {...fadeInUp(0)} className="mb-8 font-display text-2xl font-bold text-ink">
          {project.process.title}
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {project.process.steps.map((step, i) => (
            <motion.div key={step.label} {...maskReveal(i * 0.1)}>
              <VisualBlock accentColor={project.accentColor} label={step.label} height="aspect-[4/3]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <motion.h3 {...fadeInUp(0)} className="mb-2 font-display text-lg font-bold text-ink">
              {project.process.refineTitle}
            </motion.h3>
            <motion.p {...fadeInUp(0.05)} className="text-sm leading-relaxed text-ink-soft">
              {project.process.refineText}
            </motion.p>
          </div>
          <motion.span
            {...fadeInUp(0.1)}
            className="shrink-0 rounded-pill bg-primary px-6 py-2.5 text-sm font-semibold text-background"
          >
            Interactive Component Test →
          </motion.span>
        </div>
      </Section>

      {/* Outcome */}
      <Section className="pt-0 md:pt-0">
        <motion.h2 {...fadeInUp(0)} className="mb-8 font-display text-3xl font-bold text-ink">
          {project.outcome.title}
        </motion.h2>
        <motion.div {...scaleIn(0)} className="relative">
          <VisualBlock accentColor={project.accentColor} height="aspect-[16/9]" />
          <motion.div
            {...fadeInUp(0.2)}
            className="mt-4 max-w-sm rounded-card bg-surface p-5 sm:absolute sm:bottom-6 sm:right-6 sm:mt-0"
          >
            <p className="text-sm font-semibold text-ink">{project.outcome.note}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">{project.outcome.noteText}</p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Reflection */}
      <Section className="pt-0 md:pt-0">
        <motion.h2 {...fadeInUp(0)} className="mb-8 font-display text-2xl font-bold text-ink">
          Hindsight &amp; Growth
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 rounded-card bg-surface p-8 sm:grid-cols-2">
          <div>
            <motion.p {...fadeInUp(0)} className="mb-2 text-sm font-semibold text-green">
              What worked well
            </motion.p>
            <motion.p {...fadeInUp(0.05)} className="text-sm leading-relaxed text-ink-soft">
              {project.reflection.workedWell}
            </motion.p>
          </div>
          <div>
            <motion.p {...fadeInUp(0)} className="mb-2 text-sm font-semibold text-primary">
              What I'd do differently
            </motion.p>
            <motion.p {...fadeInUp(0.05)} className="text-sm leading-relaxed text-ink-soft">
              {project.reflection.doDifferently}
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Next project */}
      <Section className="pt-0 md:pt-0">
        <Link to={`/projects/${next.slug}`} className="group block" data-cursor="project">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-soft">Next Case Study</p>
          <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-surface p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-primary md:text-3xl">
                {next.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View Project <ArrowRight size={16} />
              </span>
            </div>
            <div className="h-28 w-40 shrink-0 rounded-card" style={{ background: getPlaceholderGradient(next.accentColor) }} />
          </div>
        </Link>

        <Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-primary">
          <ArrowLeft size={16} /> Back to all works
        </Link>
      </Section>
    </>
  );
}
