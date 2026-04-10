import { ArrowUp, Github, Instagram, Linkedin, Trophy } from "lucide-react";

import { personalInfo } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: personalInfo.github, icon: <Github className="h-4 w-4" /> },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: <Linkedin className="h-4 w-4" /> },
  { label: "LeetCode", href: personalInfo.leetcode, icon: <Trophy className="h-4 w-4" /> },
  { label: "Instagram", href: personalInfo.instagram, icon: <Instagram className="h-4 w-4" /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="rounded-[30px] border border-white/6 bg-[#111111] px-5 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-2xl font-semibold text-white">{personalInfo.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55">
            Full-stack developer, data science enthusiast, and software engineer
            focused on building useful digital products with strong visual identity.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70 transition hover:border-primary/40 hover:text-white"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-white/6 pt-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <p>All rights reserved © {currentYear}</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-white/68 transition hover:border-primary/40 hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
