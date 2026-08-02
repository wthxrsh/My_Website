import { Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" file="04_projects" title="Projects">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col rounded-lg border border-border bg-surface/40 p-6 transition-colors duration-150 hover:border-muted"
          >
            <h3 className="text-[15px] font-semibold text-fg">{project.name}</h3>

            <p className="mt-2 flex-1 text-sm leading-6 text-fg/90">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border-muted bg-bg px-2 py-0.5 text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={project.githubUrl} icon={Github} external>
                GitHub
              </Button>
              {project.liveUrl && (
                <Button href={project.liveUrl} icon={ExternalLink} external>
                  Live Demo
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
