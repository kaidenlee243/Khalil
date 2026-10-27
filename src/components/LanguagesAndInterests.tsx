import React from 'react';
import { Languages as LanguagesIcon, Car, Gamepad2, Compass, Waves, Check, Heart, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LanguagesAndInterests: React.FC = () => {
  const getInterestIcon = (name: string) => {
    switch (name) {
      case 'Driving':
        return Car;
      case 'Gaming':
        return Gamepad2;
      case 'Travelling':
        return Compass;
      case 'Swimming':
        return Waves;
      default:
        return Compass;
    }
  };

  return (
    <section className="py-20 md:py-24 bg-slate-900/30 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Languages (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <LanguagesIcon className="w-4 h-4 text-cyan-400" />
                <span>Multilingual Communication</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Language Proficiencies
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Spoken and written fluency across regional and international languages.
              </p>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.languages.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 flex items-center justify-between transition-all shadow-md group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center font-bold text-slate-100 text-sm group-hover:scale-105 group-hover:border-cyan-500/40 transition-all shadow-sm">
                      {item.language.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {item.language}
                      </h3>
                      {item.nativeScript && (
                        <span className="text-xs text-slate-400 font-normal">
                          {item.nativeScript}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Clean unboxed proficiency */}
                  <div className="text-right">
                    <span className="text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-md inline-block">
                      {item.proficiency}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Spoken &amp; Written
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hobbies & Personal Interests (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-cyan-400" />
                <span>Personal Pursuits</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Hobbies &amp; Interests
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Disciplined activities that cultivate concentration, strategic reflexes, and wellness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {PORTFOLIO_DATA.interests.map((hobby, idx) => {
                const Icon = getInterestIcon(hobby.name);
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-950/40 group-hover:border-cyan-500/40 transition-all mb-4 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {hobby.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-snug font-normal">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 shadow-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Engaging in active hobbies supports mental focus, rapid reaction times, and balanced discipline.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
