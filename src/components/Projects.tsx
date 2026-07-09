import { useDeferredValue, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projectFilters, projectItems } from "@/data/portfolio";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const deferredFilter = useDeferredValue(activeFilter);

  const filteredProjects =
    deferredFilter === "All Projects"
      ? projectItems
      : projectItems.filter((project) => project.category === deferredFilter);

  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            A redesigned showcase of your existing project work.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          The content is still sourced from your portfolio project list. The update focuses on layout, hierarchy, interaction, and a minimalist white and black style.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-secondary text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[28px] border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-md"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/78">
                {project.category}
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-3 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-border bg-secondary text-foreground hover:bg-secondary/80 hover:text-foreground"
                >
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    Open Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
