import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  MessageSquare, 
  FileText, 
  Sparkles,
  Printer,
  Copy,
  CheckCircle2
} from 'lucide-react';

export default function ResumeModal({ onClose, showToast }) {
  const pdfUrl = "/Ashish_Bhardwaj_Senior_Frontend_Developer.pdf";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    if (showToast) showToast(`Email copied: ${PERSONAL_INFO.email}`);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-5xl max-h-[94vh] overflow-y-auto p-5 sm:p-7 md:p-8 border border-slate-800 relative shadow-2xl bg-slate-900/95 text-slate-100 rounded-2xl flex flex-col justify-between">
        
        {/* Modal Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-800">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] flex-shrink-0 shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400 font-bold">
                <FileText size={20} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Ashish Bhardwaj — Official Resume
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  PDF
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Senior Frontend & eCommerce Developer (10+ Yrs Exp)
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 flex-wrap">
            
            {/* Download Button */}
            <a
              href={pdfUrl}
              download="Ashish_Bhardwaj_Senior_Frontend_Developer.pdf"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 text-decoration-none"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1.5 text-decoration-none"
              title="Open full PDF in a new browser tab"
            >
              <span>Open Tab</span>
              <ExternalLink size={13} />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

        </div>

        {/* Live Embedded PDF Viewer */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl mb-6 flex flex-col">
          
          {/* Top Browser Bar Mock */}
          <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="text-[11px] text-slate-400 ml-2 truncate hidden sm:inline">
                Ashish_Bhardwaj_Senior_Frontend_Developer.pdf
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                download="Ashish_Bhardwaj_Senior_Frontend_Developer.pdf"
                className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 text-[11px]"
              >
                <Download size={12} />
                <span>Save to Device</span>
              </a>
            </div>
          </div>

          {/* Iframe PDF Viewer */}
          <div className="w-full h-[480px] sm:h-[580px] md:h-[640px] bg-slate-950 relative">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title="Ashish Bhardwaj Resume"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Bottom Quick Contact & Hire Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Ready to discuss opportunities?</span>
              <span className="text-[11px] text-slate-400">Available for Senior Frontend & eCommerce roles.</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end flex-wrap">
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hi%20Ashish,%20I%20reviewed%20your%20resume%20and%20would%20like%20to%20connect.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 text-xs font-bold flex items-center gap-1.5 transition-all text-decoration-none shadow-sm"
            >
              <MessageSquare size={14} className="text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
