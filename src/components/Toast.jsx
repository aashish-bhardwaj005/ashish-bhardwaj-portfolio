import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounceIn">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-white shadow-2xl backdrop-blur-xl">
        <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
        <span className="text-xs font-semibold">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white p-1"
          aria-label="Dismiss toast"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
