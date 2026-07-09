import { ArrowUpRight, Code2, Laptop2, Palette, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { expertiseItems } from "@/data/portfolio";

const iconMap = [Code2, Palette, Laptop2, Sparkles];

const Skills = () => {
  return (
    <section id="skills" className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            My Expertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Strong across product, code, and design.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          Diverse expertise across multiple domains of software development,
          presented in a minimalist white and black layout.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {expertiseItems.map((item, index) => {
          const Icon = iconMap[index % iconMap.length];

          return (
            <article
              key={item.title}
              className="group rounded-[28px] border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-3 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-border bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.linkText}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
