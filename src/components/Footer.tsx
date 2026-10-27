import React from 'react';
import { Mail, Phone, Linkedin, ArrowUp, FileText, Settings, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenCvPreview: () => void;
  onOpenSetupGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvPreview, onOpenSetupGuide }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-black text-slate-950 shadow-sm shadow-cyan-500/20">
                KM
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                {PORTFOLIO_DATA.personal.professionalName}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Data Entry Specialist, Computer Science Student, and Aspiring IT Professional committed to data integrity, technical excellence, and continuous development.
            </p>

            <div className="text-xs text-slate-400">
              <span>Location: </span>
              <span className="text-slate-300">{PORTFOLIO_DATA.personal.location}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect & Resources */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Connect &amp; Resources
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <a
                href={PORTFOLIO_DATA.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>

              <button
                onClick={onOpenCvPreview}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-left"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Resume Breakdown (CV)</span>
              </button>

              <button
                onClick={onOpenSetupGuide}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-left pt-1"
              >
                <Settings className="w-3.5 h-3.5 text-slate-400" />
                <span>Setup &amp; Deployment Guide</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {PORTFOLIO_DATA.personal.professionalName} ({PORTFOLIO_DATA.personal.fullName}). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Built with React, TypeScript &amp; Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
