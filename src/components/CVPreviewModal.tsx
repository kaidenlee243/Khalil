import React from 'react';
import { X, Download, Printer, CheckCircle, ExternalLink, Briefcase, GraduationCap, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVPreviewModal: React.FC<CVPreviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Resume Preview · {PORTFOLIO_DATA.personal.cvFileName}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.cvDownloadPath}
              download={PORTFOLIO_DATA.personal.cvFileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 text-xs sm:text-sm font-sans space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>
              <span className="text-xs font-medium text-cyan-400">
                Known as {PORTFOLIO_DATA.personal.professionalName}
              </span>
            </div>

            <p className="text-sm font-medium text-cyan-200 mb-4">
              {PORTFOLIO_DATA.personal.headline}
            </p>

            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                LinkedIn Profile
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.aboutBio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Work Experience
            </h2>
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-sm font-bold text-white">{exp.position}</span>
                    <span className="text-slate-400"> — {exp.company}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {exp.duration} · {exp.location}
                  </span>
                </div>
                <p className="text-slate-300">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 border-b border-slate-900 pb-3 last:border-0">
                  <div>
                    <span className="text-sm font-bold text-white">{edu.qualification}</span>
                    {edu.field && <span className="text-slate-300"> ({edu.field})</span>}
                    <div className="text-slate-400 text-xs">
                      {edu.institution} {edu.board && `· ${edu.board}`}
                    </div>
                  </div>
                  <span className="text-xs text-cyan-300 font-medium">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Technical Skills &amp; Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.skills.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="font-medium text-slate-200">{s.name}</span>
                  <span className="text-cyan-400">{s.level || 'Active Area'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                Languages
              </h2>
              <div className="space-y-1 text-xs">
                {PORTFOLIO_DATA.languages.map((l, idx) => (
                  <div key={idx} className="flex justify-between text-slate-300">
                    <span>{l.language}</span>
                    <span className="text-slate-400">{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                Interests &amp; Activities
              </h2>
              <p className="text-xs text-slate-400">
                {PORTFOLIO_DATA.interests.map(i => i.name).join(' · ')}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Official candidate information</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
