import { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen, Headphones, Coffee } from "lucide-react";
import Section from "../../components/Section/Section";
import SkillCard from "../../components/SkillCard/SkillCard";
import Timeline from "../../components/Timeline/Timeline";
import MagneticButton from "../../components/MagneticButton/MagneticButton";
import DraggableElement from "../../components/DraggableElement/DraggableElement";
import Image from "../../components/Image/Image";
import { fadeInUp } from "../../animations/fade";
import { useCounter } from "../../animations/counter";
import siteConfig from "../../data/siteConfig";

const BEYOND_ICONS = { book: BookOpen, headphones: Headphones, coffee: Coffee };

function SoftwareBar({ label, value, color, index }) {
  const [ref, count] = useCounter(value);
  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="text-ink-soft">{count}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-pill bg-surface">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-pill"
          style={{ backgroundColor: `var(--color-${color})` }}
        />
      </div>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    document.title = "About — DesignPlayground";
  }, []);

  const { about } = siteConfig;

  return (
    <>
      <Section className="pb-0 md:pb-0">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <DraggableElement className="absolute -left-6 -top-6 z-0 h-20 w-20 rounded-blob bg-yellow" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 overflow-hidden rounded-blob border-4 border-background shadow-soft"
            >
              <Image
                src=""
                alt="Portrait of the designer at her desk"
                aspectRatio="3/4"
              />
            </motion.div>
            <DraggableElement className="absolute -bottom-8 right-2 z-0 h-16 w-16 rounded-full bg-primary" />
          </div>

          <div>
            <motion.p {...fadeInUp(0)} className="font-display text-xl text-ink md:text-2xl">
              {about.eyebrow} <em className="text-primary not-italic font-semibold">{about.eyebrowEmphasis}</em>
            </motion.p>
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <motion.p key={i} {...fadeInUp(0.1 + i * 0.1)} className="text-ink-soft leading-relaxed">
                  {p}
                </motion.p>
              ))}
            </div>
            <motion.div {...fadeInUp(0.3)} className="mt-8">
              <MagneticButton
                as="a"
                href="mailto:hello@designplayground.studio"
                className="inline-block rounded-pill bg-primary px-7 py-3 text-sm font-semibold text-background"
                cursorType="button"
              >
                {about.ctaLabel}
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section>
        <h3 className="mb-8 font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">
          Design Philosophy
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {about.philosophy.map((item, i) => (
            <SkillCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <Timeline icon={Briefcase} heading="Experience" items={about.experience} />
          <Timeline icon={GraduationCap} heading="Education" items={about.education} />
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <h3 className="mb-8 font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">Toolkit</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-card bg-surface p-7">
            <h4 className="mb-5 font-display text-lg font-bold text-ink">Disciplines</h4>
            <div className="flex flex-wrap gap-3">
              {about.disciplines.map((d) => (
                <span
                  key={d.label}
                  className="rounded-pill px-4 py-1.5 text-sm font-medium"
                  style={{
                    backgroundColor: d.color === "surface" ? "var(--color-background)" : `var(--color-${d.color})33`,
                    color: d.color === "surface" ? "var(--color-ink)" : `var(--color-${d.color})`,
                  }}
                >
                  {d.label}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-card bg-surface p-7">
            <h4 className="mb-5 font-display text-lg font-bold text-ink">Software</h4>
            <div className="space-y-5">
              {about.software.map((s, i) => (
                <SoftwareBar key={s.label} {...s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <h3 className="mb-10 text-center font-display text-sm font-semibold uppercase tracking-widest text-ink-soft">
          Beyond the Screen
        </h3>
        <div className="flex flex-wrap justify-center gap-12">
          {about.beyondScreen.map((item, i) => {
            const Icon = BEYOND_ICONS[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: `var(--color-${item.color})33`, color: `var(--color-${item.color})` }}
                >
                  <Icon size={24} />
                </span>
                <span className="text-sm font-medium text-ink-soft">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
