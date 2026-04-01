'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  phrase: string;
}

export default function PageHero({ label, title, phrase }: PageHeroProps) {
  return (
    <div className="bg-brandPrimary border-b border-brandSecondary/10 pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-brandSecondary/12 select-none pointer-events-none uppercase">
        {label.split(' ')[0]}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brandAccent mb-6 block">
          {label}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-typographyMain mb-12 tracking-tight font-display">
          {title}
        </h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-brandAccent p-10 rounded-3xl border border-brandAccentDark shadow-2xl max-w-2xl mx-auto relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <p className="text-2xl md:text-3xl text-white leading-relaxed font-accent relative z-10">
            {phrase}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

