import React from 'react';
import { Download, FileText, User, MapPin, GraduationCap, Briefcase, Compass, CheckCircle, Code2, Terminal, Shield } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  onOpenCvPreview: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvPreview }) => {
  const profileItems = [
    {
      label: "Full Name",
      value: PORTFOLIO_DATA.personal.profileCard.fullName,
      icon: User,
      highlight: true
    },
    {
      label: "Professional Name",
      value: PORTFOLIO_DATA.personal.profileCard.professionalName,
      icon: User,
      highlight: false
    },
    {
      label: "Location",
      value: PORTFOLIO_DATA.personal.profileCard.location,
      icon: MapPin,
      highlight: false
    },
    {
      label: "Current Study",
      value: PORTFOLIO_DATA.personal.profileCard.currentStudy,
      icon: GraduationCap,
      highlight: false
    },
    {
      label: "Current Role",
      value: PORTFOLIO_DATA.personal.profileCard.currentRole,
      icon: Briefcase,
      highlight: true
    },
    {
      label: "Career Interest",
      value: PORTFOLIO_DATA.personal.profileCard.careerInterest,
      icon: Compass,
      highlight: false
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900/40 border-t border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="mt-2 text-sm text-slate-400">
            Background, personal commitments, and official identity record.
          </div>
        </div>

        {/* Bento Grid Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative & CS Visual Card */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Narrative Box */}
            <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Personal Commitment</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Committed to Data Accuracy, Technical Skill &amp; Continuous Growth
              </h3>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                "{PORTFOLIO_DATA.personal.aboutBio}"
              </p>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-slate-400">Core Professional Values</span>
                  <p className="text-sm font-semibold text-slate-200">Responsibility · High Accuracy · Integrity</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-slate-400">Career Trajectory</span>
                  <p className="text-sm font-semibold text-slate-200">Data Entry, Computer Operations &amp; IT</p>
                </div>
              </div>
            </div>

            {/* Visual Media Card: Computer Science & Code Practice */}
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl group">
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                <div className="sm:col-span-5 h-48 sm:h-full relative overflow-hidden">
                  <img
                    src="/src/assets/images/cs_programming_setup_1793095152625.jpg"
                    alt="Computer science and programming setup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
                </div>
                <div className="sm:col-span-7 p-6 space-y-2">
                  <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Technical Studies &amp; Programming</span>
                  </span>
                  <h4 className="text-base font-bold text-white">
                    Practical Computer Science Focus
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Combining foundational theory from Intermediate studies at AIOU with hands-on scripting in Python, procedural problem solving in C++, and high-speed computer operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent Download CV Action in About Section (Section 10 Requirement) */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div>
                <h4 className="text-base font-bold text-white">
                  Curriculum Vitae (PDF)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Download the official resume document or view the structured breakdown in-browser.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={PORTFOLIO_DATA.personal.cvDownloadPath}
                  download={PORTFOLIO_DATA.personal.cvFileName}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-400/20 whitespace-nowrap active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download My CV</span>
                </a>

                <button
                  onClick={onOpenCvPreview}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition-colors whitespace-nowrap"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Profile Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl flex-1 flex flex-col justify-between">
              
              <div>
                <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Official Profile Card</span>
                  </span>
                  <span className="text-[11px] text-cyan-400 font-mono">
                    Authentic Info
                  </span>
                </div>

                <div className="p-6 divide-y divide-slate-800/80">
                  {profileItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-slate-400 block mb-0.5 font-medium">
                            {item.label}
                          </span>
                          <span className={`text-sm font-semibold ${item.highlight ? 'text-white' : 'text-slate-200'} block break-words`}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Rawalpindi &amp; Islamabad Region</span>
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Record
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
