import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LeetCode from "@/components/LeetCode";
import Projects from "@/components/Projects";
import SiteShell from "@/components/SiteShell";
import Skills from "@/components/Skills";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const timeoutId = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

  return (
    <SiteShell>
      <main className="space-y-6 p-4 md:p-6 xl:p-8">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Projects />
        <LeetCode />
        <Contact />
        <Footer />
      </main>
    </SiteShell>
  );
};

export default Index;
