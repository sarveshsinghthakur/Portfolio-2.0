import { ArrowLeft, BookOpenText, BrainCircuit, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import SiteShell from "@/components/SiteShell";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/portfolio";

const iconMap = [Code2, BrainCircuit, Sparkles];

const Blog = () => {
  return (
    <SiteShell>
      <main className="space-y-6 p-4 md:p-6 xl:p-8">
        <section className="rounded-[30px] border border-white/6 bg-[#111111] p-6 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.32)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-primary">
                Blog
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                Writing about full-stack development, data science, and AI.
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-white/58 md:text-base">
                This blog page was added to your portfolio as requested. It keeps the
                same design language as the redesigned home page while introducing
                new writing focused on software engineering, data science, and how AI
                is transforming different fields.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] hover:text-white"
            >
              <Link to="/#home">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-3">
          {blogPosts.map((post, index) => {
            const Icon = iconMap[index % iconMap.length];

            return (
              <article
                key={post.id}
                className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/45">
                  {post.readTime}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/58 md:text-base">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/8 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </section>

        <section className="space-y-5">
          {blogPosts.map((post, index) => {
            const Icon = iconMap[index % iconMap.length];

            return (
              <article
                key={`${post.id}-article`}
                className="rounded-[30px] border border-white/6 bg-[#111111] p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      {post.readTime}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-white">
                      {post.title}
                    </h2>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/72 prose-p:leading-8">
                  {post.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </section>

        <section className="rounded-[30px] border border-white/6 bg-[#111111] p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-primary">
                Why This Matters
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                A portfolio should show both execution and thinking.
              </h2>
            </div>
            <Button
              asChild
              className="rounded-2xl bg-primary text-black hover:bg-primary/90"
            >
              <Link to="/#contact">
                <BookOpenText className="mr-2 h-4 w-4" />
                Let&apos;s Connect
              </Link>
            </Button>
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-8 text-white/58 md:text-base">
            With this addition, your portfolio now shows not only projects and experience,
            but also your perspective on the future of software, data, and AI. That
            makes the site feel more complete, more intentional, and more aligned with
            the kind of technical identity you want to present.
          </p>
        </section>
      </main>
    </SiteShell>
  );
};

export default Blog;
