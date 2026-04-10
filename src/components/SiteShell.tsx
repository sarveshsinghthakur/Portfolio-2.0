import { ReactNode, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpenText,
  BriefcaseBusiness,
  Code2,
  Download,
  FolderGit2,
  GraduationCap,
  Grip,
  House,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Trophy,
  X,
  Github,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  expertiseLevels,
  personalInfo,
  primaryNavItems,
  quickStats,
  sidebarDetails,
  techStack,
} from "@/data/portfolio";
import heroImage from "@/assets/sarvesh-hero.jpg";
import resumePdf from "@/assets/sarveshsingh_web.pdf";

type SiteShellProps = {
  children: ReactNode;
};

const navIconMap: Record<string, ReactNode> = {
  Home: <House className="h-4 w-4" />,
  Skills: <Code2 className="h-4 w-4" />,
  Experience: <BriefcaseBusiness className="h-4 w-4" />,
  Education: <GraduationCap className="h-4 w-4" />,
  Projects: <FolderGit2 className="h-4 w-4" />,
  LeetCode: <Trophy className="h-4 w-4" />,
  Contact: <Mail className="h-4 w-4" />,
  Blog: <BookOpenText className="h-4 w-4" />,
};

const socialIconMap: Record<string, ReactNode> = {
  GitHub: <Github className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  LeetCode: <Trophy className="h-4 w-4" />,
  Instagram: <Instagram className="h-4 w-4" />,
};

const isHashLink = (href: string) => href.startsWith("/#");

const ProfileSidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[30px] border border-white/6 bg-[#101010] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="border-b border-white/6 bg-[#171717] px-6 py-8">
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20 shadow-[0_0_40px_rgba(66,255,145,0.16)]">
          <img
            src={heroImage}
            alt="Sarvesh Singh"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-5 text-center">
          <h2 className="text-xl font-semibold text-white">{personalInfo.name}</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            {personalInfo.headline}
          </p>
        </div>
      </div>

      <div className="portfolio-scroll flex-1 space-y-7 overflow-y-auto px-6 py-6">
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
              Snapshot
            </h3>
          </div>
          <div className="space-y-3 rounded-[24px] border border-white/6 bg-white/[0.025] p-4">
            {sidebarDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center justify-between gap-4 text-sm"
              >
                <span className="text-white/85">{detail.label}</span>
                <span className="text-right text-white/45">{detail.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
            Strengths
          </h3>
          <div className="space-y-4 rounded-[24px] border border-white/6 bg-white/[0.025] p-4">
            {expertiseLevels.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex items-center justify-between text-xs text-white/55">
                  <span>{item.title}</span>
                  <span>{item.level}</span>
                </div>
                <div className="h-2 rounded-full bg-white/8">
                  <div
                    className="h-2 rounded-full bg-primary shadow-[0_0_20px_rgba(66,255,145,0.35)]"
                    style={{ width: item.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/7 bg-[#1a1a1a] px-3 py-2 text-xs text-white/70 transition hover:border-primary/40 hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-[24px] border border-white/6 bg-white/[0.025] p-4">
          <div className="space-y-1 text-sm">
            <p className="text-white/45">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="break-all text-white/85 transition hover:text-primary"
            >
              {personalInfo.email}
            </a>
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-white/45">Phone</p>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="text-white/85 transition hover:text-primary"
            >
              {personalInfo.phone}
            </a>
          </div>
          <Button
            asChild
            className="w-full rounded-2xl bg-primary text-black hover:bg-primary/90"
          >
            <a href={resumePdf} download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </section>
      </div>

      <div className="flex items-center justify-center gap-3 border-t border-white/6 bg-[#171717] px-5 py-4">
        {[
          { label: "GitHub", href: personalInfo.github },
          { label: "LinkedIn", href: personalInfo.linkedin },
          { label: "LeetCode", href: personalInfo.leetcode },
          { label: "Instagram", href: personalInfo.instagram },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/7 bg-black/30 text-white/70 transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            aria-label={item.label}
          >
            {socialIconMap[item.label]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function SiteShell({ children }: SiteShellProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const activeHref = useMemo(() => {
    if (location.pathname === "/blog") {
      return "/blog";
    }

    if (location.hash) {
      return `/${location.hash}`;
    }

    return "/#home";
  }, [location.hash, location.pathname]);

  const closePanels = () => {
    setIsProfileOpen(false);
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(66,255,145,0.1),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(76,119,255,0.12),_transparent_24%),#050505] text-foreground lg:h-screen lg:overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-3 py-3 lg:h-screen lg:px-4">
        <div className="mb-3 flex items-center justify-between rounded-[24px] border border-white/6 bg-black/40 px-4 py-3 backdrop-blur lg:hidden">
          <button
            type="button"
            onClick={() => setIsProfileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary transition hover:bg-primary/20"
            aria-label="Open profile panel"
          >
            <Grip className="h-5 w-5" />
          </button>
          <div className="text-center">
            <p className="text-sm font-semibold text-white">{personalInfo.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Portfolio
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsNavOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary transition hover:bg-primary/20"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3 lg:h-full lg:flex-row">
          <aside className="hidden lg:block lg:w-[320px]">
            <ProfileSidebar />
          </aside>

          <main className="min-h-[calc(100vh-6rem)] flex-1 overflow-hidden rounded-[32px] border border-white/6 bg-[#0b0b0b]/95 shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur lg:min-h-0">
            <div className="portfolio-scroll h-full overflow-y-auto">{children}</div>
          </main>

          <aside className="hidden lg:block lg:w-[88px]">
            <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/6 bg-[#101010] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <button
                type="button"
                onClick={() => setIsNavOpen(true)}
                className="mx-4 mt-4 flex h-16 items-center justify-center rounded-[22px] border border-primary/35 bg-[#171717] text-primary transition hover:bg-primary/10"
                aria-label="Open navigation"
              >
                <Menu className="h-7 w-7" />
              </button>
              <div className="flex flex-1 items-center justify-center">
                <span className="rotate-90 whitespace-nowrap text-lg font-semibold uppercase tracking-[0.45em] text-white/28">
                  NavBar
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition",
          isProfileOpen || isNavOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closePanels}
      />

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-[min(88vw,340px)] transform p-3 transition duration-300",
          isProfileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="relative h-full">
          <button
            type="button"
            onClick={() => setIsProfileOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70"
            aria-label="Close profile panel"
          >
            <X className="h-4 w-4" />
          </button>
          <ProfileSidebar />
        </div>
      </aside>

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-screen w-[min(85vw,300px)] transform p-3 transition duration-300",
          isNavOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col rounded-[28px] border border-white/6 bg-[#101010] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="mb-6 flex items-center justify-between border-b border-white/6 pb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                Navigate
              </p>
              <p className="text-lg font-semibold text-white">Explore the site</p>
            </div>
            <button
              type="button"
              onClick={() => setIsNavOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70"
              aria-label="Close navigation"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="space-y-2">
            {primaryNavItems.map((item) => {
              const isActive =
                item.href === "/blog"
                  ? activeHref === "/blog"
                  : location.pathname === "/" && activeHref === item.href;

              const content = (
                <>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-black/35 text-white/65">
                    {navIconMap[item.label]}
                  </span>
                  <span>{item.label}</span>
                </>
              );

              if (isHashLink(item.href)) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsNavOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-primary text-black"
                        : "bg-white/[0.03] text-white/78 hover:bg-white/[0.06] hover:text-white",
                    )}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-primary text-black"
                      : "bg-white/[0.03] text-white/78 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  {content}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4 rounded-[24px] border border-white/6 bg-white/[0.03] p-4">
            <p className="text-sm font-medium text-white">Quick numbers</p>
            <div className="grid grid-cols-2 gap-3">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/6 bg-black/30 p-3"
                >
                  <p className="text-xl font-semibold text-primary">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/52">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
