'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Certification() {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 bg-brandAccent text-white relative overflow-hidden">
      {/* Decorative effect - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-brandAccent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <span className="text-3xl font-accent text-white/80 block mb-4">Certificación Internacional</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white line-height-[1.1]">
              Validá tu inglés ante <span className="text-white/70">el mundo</span>
            </h2>
          </div>

          <p className="text-white text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed italic">
            No somos una academia, somos tus <span className="font-bold text-white">entrenadores estratégicos</span>. Te damos la técnica y la confianza para conquistar los exámenes más prestigiosos del mundo. 
            <span className="block mt-4 font-bold text-white/90">Hacelo realidad. Tu éxito global empieza acá.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 py-8">
            {['Trinity College London', 'Cambridge — FCE / CAE'].map((exam, i) => (
              <div 
                key={i} 
                className="px-8 py-4 bg-white/10 rounded-2xl shadow-premium border border-white/20 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-brandAccent transition-all cursor-default"
              >
                {exam}
              </div>
            ))}
          </div>

          <Link 
            href="/certificacion"
            className="inline-flex h-16 px-12 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-brandAccent/20 hover:scale-105 transition-all"
          >
            Más información <ArrowRight className="ml-3" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

