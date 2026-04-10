import { ArrowUpRight, BadgeCheck, BookOpen, Code2, MapPin, School, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { leetcodeSnapshot } from "@/data/leetcode-snapshot";

const leetcodeFocusTags = [
  "Full Stack",
  "Frontend",
  "RAG",
  "Data Scientist",
  "Agentic AI",
];

const LeetCode = () => {
  const maxLanguageSolved = Math.max(...leetcodeSnapshot.languages.map((language) => language.solved), 1);
  const solvedRatioDegrees = Math.max(
    32,
    Math.min((leetcodeSnapshot.solved / Math.max(leetcodeSnapshot.totalSubmissions, 1)) * 360, 360),
  );

  return (
    <section id="leetcode" className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            LeetCode
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Coding profile presented as a dedicated portfolio section.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">
          This section uses your public LeetCode profile snapshot so it feels closer to the dashboard you shared while matching the new portfolio design.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex items-start gap-4">
            <img
              src={leetcodeSnapshot.avatar}
              alt={leetcodeSnapshot.name}
              className="h-20 w-20 rounded-2xl object-cover"
            />
            <div className="space-y-2">
              <div>
                <h3 className="text-2xl font-semibold text-white">{leetcodeSnapshot.name}</h3>
                <p className="text-sm text-white/52">@{leetcodeSnapshot.username}</p>
              </div>
              <p className="text-lg text-white/80">Rank {leetcodeSnapshot.ranking}</p>
              <p className="text-sm leading-7 text-white/58">{leetcodeSnapshot.about}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/8 bg-black/30 p-4">
              <div className="flex items-center gap-2 text-white/55">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Location</span>
              </div>
              <p className="mt-2 text-white/85">{leetcodeSnapshot.country}</p>
            </div>
            <div className="rounded-[22px] border border-white/8 bg-black/30 p-4">
              <div className="flex items-center gap-2 text-white/55">
                <School className="h-4 w-4" />
                <span className="text-sm">School</span>
              </div>
              <p className="mt-2 text-white/85">{leetcodeSnapshot.school}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {leetcodeFocusTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/8 bg-primary/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <Button
              asChild
              className="rounded-2xl bg-primary text-black hover:bg-primary/90"
            >
              <a href={personalInfo.leetcode} target="_blank" rel="noreferrer">
                Open LeetCode Profile
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </article>

        <div className="grid gap-5">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <div className="mx-auto flex max-w-[210px] flex-col items-center">
                <div
                  className="relative flex h-44 w-44 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(hsl(var(--primary)) 0deg ${solvedRatioDegrees}deg, rgba(255,255,255,0.08) ${solvedRatioDegrees}deg 360deg)`,
                  }}
                >
                  <div className="absolute h-32 w-32 rounded-full bg-[#111111]" />
                  <div className="relative text-center">
                    <p className="text-4xl font-semibold text-white">
                      {leetcodeSnapshot.solved}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/50">
                      Solved
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-center text-sm leading-7 text-white/55">
                  {leetcodeSnapshot.totalSubmissions} total accepted submissions from the public profile snapshot.
                </p>
              </div>
            </article>

            <article className="grid gap-4 rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                { label: "Easy", value: leetcodeSnapshot.easy },
                { label: "Medium", value: leetcodeSnapshot.medium },
                { label: "Hard", value: leetcodeSnapshot.hard },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/8 bg-black/30 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </article>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                    Badges
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    {leetcodeSnapshot.totalBadges}
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-[22px] border border-white/8 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Most Recent Badge
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {leetcodeSnapshot.currentBadge}
                </p>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/40">
                {leetcodeSnapshot.lastSyncedLabel}
              </p>
            </article>

            <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                    Top Languages
                  </p>
                  <p className="text-lg font-medium text-white">Most solved by language</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {leetcodeSnapshot.languages.map((language) => (
                  <div key={language.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{language.name}</span>
                      <span>{language.solved}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/8">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${Math.min((language.solved / maxLanguageSolved) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                  Strong Topics
                </p>
                <p className="text-lg font-medium text-white">Problem categories solved the most</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {leetcodeSnapshot.strongTopics.map((topic) => (
                <div
                  key={topic.name}
                  className="rounded-[22px] border border-white/8 bg-black/30 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    {topic.name}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">{topic.solved}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
