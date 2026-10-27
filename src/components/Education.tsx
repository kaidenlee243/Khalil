import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle, School, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="mt-2 text-sm text-slate-400">
            Higher Secondary studies and Secondary School Certificate in Computer Science.
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Current Education (AIOU) */}
          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Higher Secondary Education
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
                  Currently Enrolled
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-1.5 tracking-tight">
                Intermediate
              </h3>

              <div className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-6">
                <School className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Allama Iqbal Open University (AIOU)</span>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3 text-xs text-slate-400">
                <div className="flex items-center justify-between py-1">
                  <span>Level of Education:</span>
                  <span className="font-semibold text-slate-200">Intermediate</span>
                </div>
                <div className="flex items-center justify-between py-1 border-t border-slate-800/40">
                  <span>Educational Institution:</span>
                  <span className="font-semibold text-slate-200">Allama Iqbal Open University</span>
                </div>
                <div className="flex items-center justify-between py-1 border-t border-slate-800/40">
                  <span>Enrollment Status:</span>
                  <span className="font-semibold text-emerald-300">Active Student</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Advancing foundational computer science theory and IT capabilities</span>
            </div>
          </div>

          {/* Card 2: Previous Education (Asif Public School System) */}
          <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Secondary School Certificate
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
                  Completed
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-1.5 tracking-tight">
                Matric in Computer Science
              </h3>

              <div className="flex items-center gap-2 text-base font-semibold text-slate-200 mb-6">
                <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Asif Public School System</span>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3 text-xs text-slate-400">
                <div className="flex items-center justify-between py-1">
                  <span>Field / Major:</span>
                  <span className="font-semibold text-slate-200">Computer Science</span>
                </div>
                <div className="flex items-center justify-between py-1 border-t border-slate-800/40">
                  <span>Examination Board:</span>
                  <span className="font-semibold text-slate-200">Rawalpindi Board (BISE Rawalpindi)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-t border-slate-800/40">
                  <span>School Institution:</span>
                  <span className="font-semibold text-slate-200">Asif Public School System</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Rigorous science curriculum with computer science specialization</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
