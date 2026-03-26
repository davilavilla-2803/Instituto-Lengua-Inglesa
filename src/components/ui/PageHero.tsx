'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  label: string;
  title: string;
  phrase: string;
}

export default function PageHero({ label, title, phrase }: PageHeroProps) {
  return (
    <div className="bg-brandPrimary border-b border-brandSecondary/10 py-24 px-4 relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-brandSecondary/5 select-none pointer-events-none uppercase">
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
        <h1 
          className="text-5xl md:text-7xl font-bold text-typographyMain mb-12 tracking-tight font-display"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass p-10 rounded-3xl border-white/60 shadow-premium max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-typographyMain/70 italic leading-relaxed font-light">
            "{phrase}"
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
