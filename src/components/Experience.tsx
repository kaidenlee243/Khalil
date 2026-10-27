import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Edit3, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ExperienceProps {
  onOpenSetupGuide: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenSetupGuide }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="mt-2 text-sm text-slate-400">
            Current role, organizational experience, and ongoing industry practice.
          </div>
        </div>

        {/* Experience Showcase Card with Agency Imagery */}
        <div className="max-w-4xl mx-auto space-y-8">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700"
            >
              {/* Agency Workplace Imagery Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.imageUrl || "/src/assets/images/agency_workspace_1793095178682.jpg"}
                  alt={`${item.company} data workspace`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                {/* Agency Badge on top */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.company}</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-800/80 text-xs font-semibold text-emerald-400">
                    Active Role
                  </div>
                </div>

                {/* Role Title Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono font-medium text-cyan-400 block mb-1">
                      Professional Appointment
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {item.position}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-300 font-medium bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-md">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Summary Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Verified Functional Responsibilities */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Operational Duties &amp; Daily Workflow
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified employment record · Islamabad, Pakistan</span>
                  </div>
                  <button
                    onClick={onOpenSetupGuide}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-left"
                  >
                    Need to add more achievements? &rarr;
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
