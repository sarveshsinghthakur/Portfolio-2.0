import { BriefcaseBusiness, CalendarDays } from "lucide-react";

import { experienceItems } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Internship and work experience from your resume.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          This section is built directly from the PDF resume you shared, so the
          portfolio now reflects your actual internship timeline and responsibilities.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {experienceItems.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-[28px] border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/35"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                <BriefcaseBusiness className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" />
              {item.duration}
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
              {item.summary}
            </p>

            <div className="mt-5 space-y-3">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <span className="mt-[0.72rem] h-1.5 w-1.5 rounded-full bg-primary" />
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
