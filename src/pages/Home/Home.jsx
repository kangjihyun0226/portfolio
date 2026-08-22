import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

export default function Home() {
  useEffect(() => {
    document.title = "DesignPlayground — Portfolio & Creative Designer";
  }, []);

  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <Section>
        <SectionTitle eyebrow="Recent Work" title="A few things I've been building" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.slug} />
          ))}
        </div>
      </Section>
    </>
  );
}
