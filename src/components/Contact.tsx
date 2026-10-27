import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, AlertTriangle, CheckCircle, ExternalLink, HelpCircle, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenSetupGuide: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenSetupGuide }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionAttempted, setSubmissionAttempted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmissionAttempted(true);
    }
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Khalil,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact Me
          </h2>
          <div className="mt-2 text-sm text-slate-400">
            Open to professional data entry, IT operations, and junior technical opportunities.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Contact Channels</span>
              </h3>
              
              <div className="space-y-4">
                
                {/* Email Link */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block mb-0.5">Direct Email</span>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-sm font-bold text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Telephone Link */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3.5 group hover:border-blue-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">Telephone</span>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {PORTFOLIO_DATA.personal.location}
                    </span>
                  </div>
                </div>

                {/* LinkedIn Profile Button */}
                <div className="pt-2">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 text-sm font-bold text-white bg-[#0077b5] hover:bg-[#006396] rounded-xl shadow-lg transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-cyan-400 active:scale-[0.98]"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>

              </div>

              {/* Privacy Notice */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                <span>
                  For personal safety and privacy, residential street details are kept confidential. Direct inquiries from prospective employers and clients are welcome.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  Client Validation Active
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to initiate communication.
              </p>

              {/* Informative Submission State Banner */}
              {submissionAttempted && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/80 border border-cyan-800 space-y-3 shadow-lg">
                  <div className="flex items-start gap-2.5 text-xs text-cyan-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-sm">
                        Form Validation Passed!
                      </p>
                      <p className="mt-1 text-slate-300 leading-relaxed text-xs">
                        Notice: In compliance with project guidelines, this website operates statically and requires integration with an email service (such as Formspree or EmailJS) for direct server-side forwarding. To deliver your message immediately right now, click the button below to open your message pre-formatted in your email app.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleOpenMailto}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email Client Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenSetupGuide}
                      className="text-xs text-cyan-300 hover:text-cyan-200 underline font-medium"
                    >
                      How to connect Formspree in 2 mins?
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Tariq Khan"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                        errors.name ? 'border-red-500' : 'border-slate-800'
                      } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. tariq@example.com"
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Data Entry Role Inquiry"
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                      errors.subject ? 'border-red-500' : 'border-slate-800'
                    } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Provide details about the role, project, or inquiry..."
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                      errors.message ? 'border-red-500' : 'border-slate-800'
                    } rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl transition-all shadow-md shadow-cyan-400/20 active:scale-[0.98]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Message</span>
                  </button>

                  <span className="text-[11px] text-slate-400">
                    Transparent submission · Safe direct messaging
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
