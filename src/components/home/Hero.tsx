'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import { siteConfig } from '@/lib/config';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden mesh-gradient">
      {/* Decorative Blobs - Disabled on mobile for performance */}
      <div className="hidden sm:block absolute top-0 -left-1/4 w-[600px] h-[600px] bg-brandAccent/5 rounded-full blur-[120px] animate-pulse" />
      <div className="hidden sm:block absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brandSecondary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h1 className="flex flex-col mb-10 text-balance text-center lg:text-left relative items-center lg:items-start group">
              <span className="font-script text-brandAccent text-6xl sm:text-7xl lg:text-8xl normal-case leading-none z-20 -mb-[0.15em] lg:-mb-[0.2em] drop-shadow-sm whitespace-nowrap">
                Your bilingual
              </span>
              <span className="font-display-serif text-3xl sm:text-4xl lg:text-6xl font-normal uppercase tracking-wide text-typographyMain/70 leading-[0.9] inline-block whitespace-nowrap">
                version is here
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-typographyMain/80 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
              Desde tus primeros pasos hasta alcanzar altos niveles internacionales, diseñamos cursos que fusionan la <span className="font-medium text-brandAccent">estrategia con la cultura real</span>. Aprendé a comunicarte con fluidez y empezá a abrir tus propios horizontes.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <motion.a
                href="#servicios"
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto group px-10 py-5 bg-brandAccent text-white rounded-full font-bold shadow-xl shadow-brandAccent/20 flex items-center justify-center gap-3 transition-all hover:bg-brandAccentDark"
              >
                Conocer Cursos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 glass text-typographyMain rounded-full font-bold border-brandSecondary/20 hover:bg-white/60 transition-all shadow-sm text-center"
              >
                ¡Conversemos!
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-80 transition-all">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-typographyMain">+100</span>
                <span className="text-[10px] uppercase tracking-widest font-black text-brandAccent">Alumnos de todo el mundo</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visuals */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={isMobile ? false : { opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={isMobile ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xs sm:max-w-lg aspect-4/5"
            >
              {/* Main Image Card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-premium border-4 border-white transform rotate-3 z-20">
                <Image
                  src="/images/INSTITUTO LENGUA INGLESA - FOTO PRINCIPAL.jpeg"
                  alt="Instituto Lengua Inglesa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-tr from-brandAccentDark/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

