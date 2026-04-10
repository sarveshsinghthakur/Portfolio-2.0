import { ArrowRight, BookOpenText, Download, Github, Instagram, Linkedin, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

import { Button } from "@/components/ui/button";
import {
  heroRoles,
  personalInfo,
  quickStats,
} from "@/data/portfolio";
import heroImage from "@/assets/sarvesh-hero.jpg";
import resumePdf from "@/assets/sarveshsingh_web.pdf";

const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: <Github className="h-4 w-4" /> },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: <Linkedin className="h-4 w-4" /> },
  { label: "LeetCode", href: personalInfo.leetcode, icon: <Trophy className="h-4 w-4" /> },
  { label: "Instagram", href: personalInfo.instagram, icon: <Instagram className="h-4 w-4" /> },
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="space-y-5">
      <div className="relative overflow-hidden rounded-[30px] border border-white/6 bg-[#111111] p-5 md:p-7 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(66,255,145,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(74,120,255,0.18),_transparent_24%)]" />
        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: `linear-gradient(135deg, rgba(7,7,7,0.15), rgba(7,7,7,0.88)), url(${heroImage})`, backgroundPosition: "center", backgroundSize: "cover" }} />

        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-7">
            <div className="space-y-4">
              <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Portfolio Redesign
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
                Hello, check this out.
                <span className="mt-2 block text-white/82">
                  I&apos;m {personalInfo.name}
                </span>
              </h1>
              <div className="code-font flex min-h-[3rem] items-center gap-3 text-sm text-white/75 md:text-lg">
                <span className="text-primary">&lt;developer&gt;</span>
                <div className="text-base font-semibold text-white md:text-2xl">
                  <ReactTyped
                    strings={heroRoles}
                    typeSpeed={45}
                    backSpeed={28}
                    loop
                  />
                </div>
                <span className="text-primary">&lt;/developer&gt;</span>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                {personalInfo.summary}
              </p>
            </div>

            <div className="grid gap-3 rounded-[24px] border border-white/6 bg-black/30 p-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  Current Focus
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Building modern web experiences, AI-driven features, and data-informed products.
                </p>
              </div>
              <div className="rounded-[20px] border border-primary/15 bg-primary/10 p-4 text-sm leading-7 text-white/76">
                <span className="mb-2 block text-xs uppercase tracking-[0.26em] text-primary">
                  Personal Note
                </span>
                {personalInfo.quote}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={scrollToProjects}
                className="rounded-2xl bg-primary px-6 text-black hover:bg-primary/90"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/12 bg-white/[0.03] text-white hover:bg-white/[0.06] hover:text-white"
              >
                <a href={resumePdf} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/12 bg-white/[0.03] text-white hover:bg-white/[0.06] hover:text-white"
              >
                <Link to="/blog">
                  <BookOpenText className="mr-2 h-4 w-4" />
                  Visit Blog
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-white/70 transition hover:border-primary/40 hover:text-white"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <div className="absolute -inset-3 rounded-[34px] bg-primary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[#121212]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="rounded-[24px] border border-white/8 bg-black/30 p-3">
                  <img
                    src={heroImage}
                    alt="Sarvesh Singh portrait"
                    className="h-[320px] w-full rounded-[20px] object-cover md:h-[380px]"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[20px] border border-white/8 bg-black/35 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Role
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/85">
                      Full-Stack Developer
                    </p>
                  </div>
                  <div className="rounded-[20px] border border-white/8 bg-black/35 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Domain
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/85">
                      Data Science & AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((item) => (
          <div
            key={item.label}
            className="rounded-[24px] border border-white/6 bg-[#111111] px-5 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-primary/30"
          >
            <p className="text-3xl font-semibold text-primary">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/46">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
