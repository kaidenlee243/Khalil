import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvPreview: () => void;
  onOpenSetupGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvPreview, onOpenSetupGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-black text-slate-950 shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              KM
            </span>
            <span>{PORTFOLIO_DATA.personal.professionalName}</span>
          </a>

          {/* Zone 2: 4-6 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-white ${
                  activeSection === link.id ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button + mobile toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="/Khalil_Mirza_Portfolio.html"
              download="Khalil_Mirza_Portfolio.html"
              title="Download Entire Portfolio as a Single Standalone HTML File"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-cyan-300 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-850 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download Single HTML</span>
            </a>

            <button
              onClick={onOpenCvPreview}
              title="Preview or Download CV"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-400/20 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg focus-visible:outline-2 focus-visible:outline-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-5 px-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-slate-900/80 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="/Khalil_Mirza_Portfolio.html"
                download="Khalil_Mirza_Portfolio.html"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors text-center"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Single HTML File</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.cvDownloadPath}
                download={PORTFOLIO_DATA.personal.cvFileName}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvPreview();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-center border border-slate-800"
              >
                <FileText className="w-4 h-4" />
                <span>Preview Resume In-App</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
