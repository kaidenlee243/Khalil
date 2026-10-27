import React, { useState, useRef } from 'react';
import { Download, ArrowRight, Mail, Camera, User, CheckCircle2, MapPin, Briefcase, GraduationCap, RefreshCw, Terminal, Monitor, ShieldCheck, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCvPreview: () => void;
  onOpenSetupGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvPreview, onOpenSetupGuide }) => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomPhotoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhotoUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient Backdrop Image with Deep Navy Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/src/assets/images/hero_workspace_tech_1793095150535.jpg"
          alt="Tech workstation ambient background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Tagline / Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-cyan-300 font-medium w-fit mb-5 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Rawalpindi, Pakistan</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Available for Opportunities</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 text-balance">
              {PORTFOLIO_DATA.personal.professionalName}
            </h1>

            {/* Professional Headline */}
            <h2 className="text-lg sm:text-xl font-medium text-cyan-200/90 mb-6 leading-snug">
              {PORTFOLIO_DATA.personal.headline}
            </h2>

            {/* Introduction Verbatim */}
            <div className="relative pl-4 border-l-2 border-cyan-500/40 mb-8">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                "{PORTFOLIO_DATA.personal.heroIntro}"
              </p>
            </div>

            {/* Three Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              {/* View My Work */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-xl hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 whitespace-nowrap active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download My CV */}
              <a
                href={PORTFOLIO_DATA.personal.cvDownloadPath}
                download={PORTFOLIO_DATA.personal.cvFileName}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900/90 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:border-cyan-500/50 transition-all shadow-sm whitespace-nowrap active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download My CV</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              {/* Download Single HTML File */}
              <a
                href="/Khalil_Mirza_Portfolio.html"
                download="Khalil_Mirza_Portfolio.html"
                title="Download this portfolio as a single self-contained HTML file"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-cyan-300 hover:text-cyan-200 bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Single HTML</span>
              </a>
            </div>

            {/* Technical Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-400 font-medium">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
                Data Entry &amp; Operations
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
                Microsoft Office
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
                Python &amp; C++
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Showcase Stack */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-4">
            
            {/* Main Profile Portrait / Placeholder Card */}
            <div className="w-full max-w-sm rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-2xl backdrop-blur-xl relative">
              
              {/* Photo Display Frame */}
              <div className="aspect-[4/5] w-full rounded-xl bg-gradient-to-b from-slate-800/90 to-slate-950 border border-slate-700/60 overflow-hidden relative flex flex-col items-center justify-center p-6 text-center shadow-inner">
                
                {customPhotoUrl ? (
                  <img
                    src={customPhotoUrl}
                    alt="Khalil Mirza profile portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    {/* Professional Monogram Placeholder */}
                    <div className="relative">
                      <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-700 p-0.5 shadow-xl shadow-cyan-900/40">
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex flex-col items-center justify-center">
                          <span className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                            KM
                          </span>
                          <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest mt-0.5">
                            Profile
                          </span>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 shadow-md">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-base font-bold text-white tracking-tight">
                        {PORTFOLIO_DATA.personal.professionalName}
                      </p>
                      <p className="text-xs text-slate-400">
                        {PORTFOLIO_DATA.personal.fullName}
                      </p>
                      <p className="text-[11px] text-cyan-400 font-semibold tracking-wide">
                        Profile Image Placeholder
                      </p>
                    </div>

                    <p className="text-[11px] text-slate-400 max-w-[230px] leading-relaxed">
                      Placeholder reserved for your official photograph. Click below to test with your own photo.
                    </p>
                  </div>
                )}

                {/* Status Indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700/80 text-[11px] font-semibold text-emerald-400 backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Profile</span>
                </div>
              </div>

              {/* Photo Upload Action Toolbar */}
              <div className="mt-4 pt-3.5 border-t border-slate-800 flex items-center justify-between gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="hero-photo-upload-input"
                />

                <label
                  htmlFor="hero-photo-upload-input"
                  className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-colors shadow-sm"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{customPhotoUrl ? 'Change Photo' : 'Test Your Photo'}</span>
                </label>

                {customPhotoUrl ? (
                  <button
                    onClick={handleResetPhoto}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                    title="Reset to default placeholder"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                ) : (
                  <button
                    onClick={onOpenSetupGuide}
                    className="text-[11px] text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    How to replace in code?
                  </button>
                )}
              </div>

            </div>

            {/* Ambient Tech Workspace Preview Card */}
            <div className="w-full max-w-sm rounded-xl bg-slate-900/80 border border-slate-800 p-3 shadow-lg flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-700 relative">
                <img
                  src="/src/assets/images/hero_workspace_tech_1793095150535.jpg"
                  alt="Tech workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-semibold text-slate-200 block truncate">
                  Digital Operations &amp; Code Lab
                </span>
                <span className="text-[10px] text-cyan-400 font-mono block">
                  Rawalpindi / Islamabad Hub
                </span>
                <span className="text-[10px] text-slate-400 block truncate">
                  7star Agency &amp; Academic Practice
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Full-Width Key Trust & Metrics Strip Below the Split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Current Agency Role</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-white">
              Data Entry Specialist
            </p>
            <p className="text-xs text-slate-400">7star Digital Marketing Agency</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span>Academic Enrollment</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-white">
              Intermediate CS Student
            </p>
            <p className="text-xs text-slate-400">Allama Iqbal Open University</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Regional Base</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-white">
              Rawalpindi, Punjab
            </p>
            <p className="text-xs text-slate-400">Pakistan (On-site &amp; Remote)</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Profile Standard</span>
            </span>
            <p className="text-sm sm:text-base font-bold text-white">
              100% Verified Information
            </p>
            <p className="text-xs text-slate-400">Strict Truth-in-Resume</p>
          </div>
        </div>

      </div>
    </section>
  );
};
