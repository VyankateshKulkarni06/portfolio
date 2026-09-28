import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SectionDock } from './components/layout/SectionDock';
import { CustomCursor } from './components/ui/CustomCursor';
import { HeroSection } from './components/sections/HeroSection';
import { IdentitySection } from './components/sections/IdentitySection';
import { ImpactMetricsSection } from './components/sections/ImpactMetricsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { HowIBuildSection } from './components/sections/HowIBuildSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProblemSolvingSection } from './components/sections/ProblemSolvingSection';
import { EducationSection } from './components/sections/EducationSection';
import { PersonalSection } from './components/sections/PersonalSection';
import { ContactSection } from './components/sections/ContactSection';
import { ResumeModal } from './components/sections/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll with responsive snappy easing
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Precision Custom Desktop Cursor */}
      <CustomCursor />

      {/* Floating Section Dock for 1-Click Smooth Navigation */}
      <SectionDock />

      {/* Persistent Sticky Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 01: Hero */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* 02: Engineer Identity (4 Pillars) */}
        <IdentitySection />

        {/* 03: Selected Impact (Verified Metrics) */}
        <ImpactMetricsSection />

        {/* 04: Experience (Databahn.ai & Bharti Hospitals / CarieCheck Case Studies) */}
        <ExperienceSection />

        {/* 05: Key Projects: Chainvote & NyayaGPT */}
        <ProjectsSection />

        {/* 06: How I Build (Practical Systems Methodology) */}
        <HowIBuildSection />

        {/* 07: Skills Matrix */}
        <SkillsSection />

        {/* 08: Problem Solving / Algorithmic Rigor */}
        <ProblemSolvingSection />

        {/* 09: Education & Certifications */}
        <EducationSection />

        {/* 10: Human Side (Chess & Systems Mindset) */}
        <PersonalSection />

        {/* 11: Contact */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal (Audited Revision) */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
