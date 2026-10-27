import React, { useState } from 'react';
import { X, BookOpen, Camera, FileText, Mail, Globe, Copy, Check, Terminal } from 'lucide-react';

interface SetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SetupGuideModal: React.FC<SetupGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'singlefile' | 'photo' | 'cv' | 'email' | 'deploy'>('singlefile');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Website Customization &amp; Single HTML Guide
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-2 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('singlefile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'singlefile'
                ? 'bg-slate-800 text-cyan-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Single HTML File</span>
          </button>

          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'photo'
                ? 'bg-slate-800 text-cyan-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Profile Photo</span>
          </button>

          <button
            onClick={() => setActiveTab('cv')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'cv'
                ? 'bg-slate-800 text-cyan-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV / Resume PDF</span>
          </button>

          <button
            onClick={() => setActiveTab('email')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'email'
                ? 'bg-slate-800 text-cyan-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Form Setup</span>
          </button>

          <button
            onClick={() => setActiveTab('deploy')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'deploy'
                ? 'bg-slate-800 text-cyan-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Vercel / Netlify Deploy</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300">
          {/* TAB 0: Single HTML File */}
          {activeTab === 'singlefile' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Single Self-Contained HTML File Export</span>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                A complete, production-ready standalone HTML version has been built and is ready to download. It contains all HTML markup, Tailwind CSS, SVG icons, and interactive JavaScript in <strong>one single file</strong>:
              </p>

              <div className="p-3 bg-slate-950 rounded-lg font-mono text-cyan-300 text-xs flex items-center justify-between border border-slate-800">
                <span>public/Khalil_Mirza_Portfolio.html</span>
                <a
                  href="/Khalil_Mirza_Portfolio.html"
                  download="Khalil_Mirza_Portfolio.html"
                  className="px-2.5 py-1 text-[11px] font-semibold text-slate-950 bg-cyan-400 rounded hover:bg-cyan-300 transition-colors"
                >
                  Download File
                </a>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-white">How to use it:</p>
                <ol className="list-decimal list-inside space-y-1.5 pl-1">
                  <li>Click the <strong>"Download File"</strong> button above (or the button in the hero / header).</li>
                  <li>Double-click the downloaded <code className="text-cyan-300">Khalil_Mirza_Portfolio.html</code> file on any Windows, Mac, or mobile device.</li>
                  <li>It will open instantly in Chrome, Edge, Safari, or Firefox with <strong>zero dependencies and no installation needed</strong>!</li>
                  <li>You can also upload this single file directly to any free web hosting or GitHub Pages as <code className="text-white">index.html</code>.</li>
                </ol>
              </div>
            </div>
          )}
          
          {/* TAB 1: Profile Photo */}
          {activeTab === 'photo' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Camera className="w-4 h-4 text-cyan-400" />
                <span>How to Add Your Profile Photograph</span>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                By default, your portfolio features a clean geometric monogram placeholder with initials <strong className="text-white">KM</strong> so no fake likeness was generated. To add your real photo:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-xs text-slate-300">
                <li className="pl-1">
                  <strong className="text-white">Method 1 (In the Browser Right Now):</strong> In the Hero section, click the <span className="text-cyan-400 font-semibold">"Test Your Photo"</span> button on the portrait card and pick an image from your computer to preview how it looks immediately.
                </li>
                <li className="pl-1">
                  <strong className="text-white">Method 2 (Permanent in Code):</strong> Save your portrait photo as:
                  <div className="mt-1 p-2 bg-slate-950 rounded font-mono text-cyan-300 text-xs">
                    public/profile.jpg
                  </div>
                </li>
                <li className="pl-1">
                  Then in <code className="text-white font-mono">src/components/Hero.tsx</code>, set the default photo URL:
                  <pre className="mt-1 p-3 bg-slate-950 rounded-lg font-mono text-slate-300 text-xs overflow-x-auto">
                    {'const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>("/profile.jpg");'}
                  </pre>
                </li>
              </ol>
            </div>
          )}

          {/* TAB 2: CV PDF */}
          {activeTab === 'cv' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>How to Update Your CV PDF File</span>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                A valid, official PDF resume has already been generated and placed in your public directory at:
              </p>

              <div className="p-3 bg-slate-950 rounded-lg font-mono text-cyan-300 text-xs flex items-center justify-between">
                <span>/public/Khalil_Mirza_CV.pdf</span>
                <span className="text-slate-400 text-[10px]">Active download target</span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  To replace it with your own designed PDF file:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                  <li>Export your resume from Word, Google Docs, or Canva as a PDF.</li>
                  <li>Name the file exactly <code className="text-white font-mono">Khalil_Mirza_CV.pdf</code>.</li>
                  <li>Place it into the <code className="text-white font-mono">public/</code> directory, replacing the existing file.</li>
                  <li>All "Download My CV" buttons in the Hero, About section, Navbar, and Footer will immediately serve your new PDF!</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 3: Contact Form */}
          {activeTab === 'email' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Connecting Your Contact Form to an Email Service</span>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Your portfolio currently performs thorough client-side validation and provides a 1-click pre-formatted <code className="text-cyan-300">mailto:</code> trigger. If you want direct form delivery straight to <code className="text-white">khalilmirza733@gmail.com</code> without opening the user's email client, use Formspree or EmailJS:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-white block">Option A: Formspree (Free &amp; 2 Minutes)</span>
                  <p className="text-xs text-slate-400">
                    1. Go to <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-cyan-400 underline">formspree.io</a> and create a free account with <code className="text-slate-300">khalilmirza733@gmail.com</code>.<br />
                    2. Create a form and copy your Form ID (e.g. <code className="text-slate-300">https://formspree.io/f/mqkenobp</code>).<br />
                    3. In <code className="text-slate-300 font-mono">src/components/Contact.tsx</code>, submit via <code className="text-slate-300 font-mono">fetch("https://formspree.io/f/YOUR_ID", &#123; method: "POST", body: JSON.stringify(formData) &#125;)</code>.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-white block">Option B: EmailJS</span>
                  <p className="text-xs text-slate-400">
                    Run <code className="text-slate-300 font-mono">npm install @emailjs/browser</code> and initialize with your service ID and template ID.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Deployment */}
          {activeTab === 'deploy' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Deploying to Cloudflare, Vercel, or Netlify</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="font-bold text-cyan-300 block">Deploying to Cloudflare (Wrangler / Cloudflare Pages):</span>
                  <p className="text-slate-300 leading-relaxed">
                    Configuration files (<code className="text-white font-mono">wrangler.json</code> and <code className="text-white font-mono">wrangler.toml</code>) are already set up to map to <code className="text-cyan-300 font-mono">./dist</code>.
                  </p>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 text-slate-300">
                    <li>In your Cloudflare Dashboard, set:
                      <ul className="list-disc list-inside pl-4 mt-1 space-y-1 text-slate-400">
                        <li><strong className="text-white">Build Command:</strong> <code className="text-cyan-300 font-mono">npm run build</code></li>
                        <li><strong className="text-white">Build Output Directory:</strong> <code className="text-cyan-300 font-mono">dist</code></li>
                        <li><strong className="text-white">Deploy Command:</strong> <code className="text-cyan-300 font-mono">npx wrangler deploy</code></li>
                      </ul>
                    </li>
                    <li>Or run directly from your local terminal: <code className="text-cyan-300 font-mono">npm run deploy</code>.</li>
                  </ol>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="font-bold text-white block">Deploying to Vercel:</span>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 text-slate-300">
                    <li>Push this project to a GitHub repository (e.g. <code className="text-cyan-300 font-mono">khalil-mirza-portfolio</code>).</li>
                    <li>Sign in to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">Vercel</a>.</li>
                    <li>Click <strong className="text-white">"Add New Project"</strong> and import your GitHub repository.</li>
                    <li>Framework Preset will automatically detect <strong className="text-white">Vite</strong>.</li>
                    <li>Build command: <code className="text-slate-200 font-mono">npm run build</code>, Output directory: <code className="text-slate-200 font-mono">dist</code>.</li>
                    <li>Click <strong className="text-cyan-400">Deploy</strong>. Your site will be live on a fast global CDN with free HTTPS!</li>
                  </ol>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="font-bold text-white block">Deploying to Netlify:</span>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 text-slate-300">
                    <li>Log in to <a href="https://netlify.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">Netlify</a> and click <strong className="text-white">"Add new site" &gt; "Import an existing project"</strong>.</li>
                    <li>Connect your repository.</li>
                    <li>Set Build command to <code className="text-slate-200 font-mono">npm run build</code> and Publish directory to <code className="text-slate-200 font-mono">dist</code>.</li>
                    <li>Click <strong className="text-cyan-400">Deploy site</strong>.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Documentation for Khalil Mirza</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors font-medium"
          >
            Got it, close guide
          </button>
        </div>

      </div>
    </div>
  );
};
