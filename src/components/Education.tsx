import { ArrowUpRight, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { educationItems } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Academic timeline and achievements.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          The education content remains based on your current portfolio, now restyled to sit naturally inside the minimalist white and black portfolio shell.
        </p>
      </div>

      <div className="space-y-5">
        {educationItems.map((item, index) => (
          <article key={`${item.year}-${item.title}`} className="relative">
            {index !== educationItems.length - 1 && (
              <div className="absolute left-6 top-14 hidden h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-primary/50 to-transparent md:block" />
            )}
            <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-6">
              <div className="hidden md:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>

              <div
                className="rounded-[28px] border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/35"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.institution}</p>
                  </div>

                  <div
                    className={`rounded-[22px] border px-5 py-4 text-center ${
                      item.isActive
                        ? "border-primary/20 bg-primary/10"
                        : "border-border bg-secondary"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Grade
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">{item.grade}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                  {item.description}
                </p>

                <div className="mt-5">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border-border bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Visit Institution
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
