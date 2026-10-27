import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { LanguagesAndInterests } from './components/LanguagesAndInterests';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVPreviewModal } from './components/CVPreviewModal';
import { SetupGuideModal } from './components/SetupGuideModal';

export default function App() {
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);
  const [isSetupGuideOpen, setIsSetupGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar
        onOpenCvPreview={() => setIsCvPreviewOpen(true)}
        onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenCvPreview={() => setIsCvPreviewOpen(true)}
          onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
        />
        <About
          onOpenCvPreview={() => setIsCvPreviewOpen(true)}
        />
        <Skills />
        <Experience
          onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
        />
        <Education />
        <LanguagesAndInterests />
        <Projects
          onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
        />
        <Contact
          onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCvPreview={() => setIsCvPreviewOpen(true)}
        onOpenSetupGuide={() => setIsSetupGuideOpen(true)}
      />

      {/* Modals */}
      <CVPreviewModal
        isOpen={isCvPreviewOpen}
        onClose={() => setIsCvPreviewOpen(false)}
      />

      <SetupGuideModal
        isOpen={isSetupGuideOpen}
        onClose={() => setIsSetupGuideOpen(false)}
      />
    </div>
  );
}
