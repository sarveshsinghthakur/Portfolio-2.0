import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";

const contactCards = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: null,
    icon: <MapPin className="h-5 w-5" />,
  },
];

const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: <Github className="h-4 w-4" /> },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: <Linkedin className="h-4 w-4" /> },
  { label: "LeetCode", href: personalInfo.leetcode, icon: <Trophy className="h-4 w-4" /> },
  { label: "Instagram", href: personalInfo.instagram, icon: <Instagram className="h-4 w-4" /> },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "61eec48d-90b9-489b-a580-04d0e323ddab");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      e.currentTarget.reset();
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Let&apos;s build something valuable together.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">
          The contact functionality remains the same, but the interface is now shaped to match the new dark portfolio experience.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">
              Reach Out
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Open to opportunities, collaboration, and ambitious ideas.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/58 md:text-base">
              I&apos;m always excited to talk about product ideas, engineering work,
              internships, and full-stack or AI-focused collaborations. If you have a
              project in mind, I&apos;m happy to discuss it.
            </p>
          </article>

          <div className="grid gap-4">
            {contactCards.map((item) => (
              <article
                key={item.label}
                className="rounded-[24px] border border-white/6 bg-[#111111] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-white/85 transition hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-white/85">{item.value}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/30 px-4 py-2 text-sm text-white/70 transition hover:border-primary/40 hover:text-white"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-primary/18 bg-primary/10 px-4 py-2 text-sm text-primary">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              Available for new opportunities
            </div>
          </article>
        </div>

        <article className="rounded-[28px] border border-white/6 bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">
              Send A Message
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Start the conversation here.
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/75">Full Name</label>
              <Input
                name="name"
                placeholder="Enter your full name"
                required
                className="rounded-2xl border-white/10 bg-black/30 text-white placeholder:text-white/28"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/75">Email Address</label>
              <Input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="rounded-2xl border-white/10 bg-black/30 text-white placeholder:text-white/28"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/75">Message</label>
              <Textarea
                name="message"
                placeholder="Tell me about your project, opportunity, or idea..."
                rows={6}
                required
                className="resize-none rounded-2xl border-white/10 bg-black/30 text-white placeholder:text-white/28"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-primary text-black hover:bg-primary/90 disabled:opacity-60"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            <p className="text-center text-xs uppercase tracking-[0.18em] text-white/40">
              I&apos;ll try to reply within 48 hours.
            </p>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Contact;
