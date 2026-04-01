'use client';

import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`w-full h-full bg-[#fdfaf6] flex flex-col items-center justify-center p-8 relative overflow-hidden ${className}`}>
      {/* Decorative Badge */}
      {label && (
        <div className="absolute top-8 left-8 bg-white px-6 py-2 rounded-full shadow-sm border border-brandSecondary/5">
          <span className="text-[10px] font-black text-brandAccent uppercase tracking-[0.2em]">{label}</span>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 bg-brandAccent/5 rounded-full flex items-center justify-center text-brandAccent/20">
          <ImageIcon size={40} strokeWidth={1} />
        </div>
        <p className="text-[10px] md:text-xs font-black text-brandAccent/40 uppercase tracking-[0.3em] text-center max-w-[200px] leading-relaxed">
          Próximamente fotos de la nueva edición
        </p>
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-brandAccent/2 to-transparent pointer-events-none" />
    </div>
  );
}
