'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Globe2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden mesh-gradient">
      {/* Decorative Blobs */}
      <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-brandAccent/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brandSecondary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >

            
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-typographyMain mb-8 leading-[1.1] text-balance font-display">
              Domina el inglés con <span className="text-gradient">confianza</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600/90 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Cursos diseñados para vos, desde niveles básicos hasta certificaciones internacionales. Aprendé a comunicarte sin barreras con una metodología <span className="font-medium text-typographyMain">dinámica y real</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-brandAccent text-white rounded-full font-bold shadow-xl shadow-brandAccent/20 flex items-center gap-3 transition-colors hover:bg-brandAccentDark"
              >
                Conocer Cursos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 glass text-typographyMain rounded-full font-bold border-brandSecondary/20 hover:bg-white/60 transition-colors shadow-sm"
              >
                Hablar con Sofi
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-typographyMain">+500</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Alumnos</span>
              </div>
              <div className="w-px h-8 bg-brandSecondary/30" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-typographyMain">24+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Años Exp.</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visuals */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg aspect-4/5"
            >
              {/* Main Image Card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-premium border-4 border-white transform rotate-3 z-20 group">
                <Image
                  src="/images/ENGLISH TOURS IN BA.jpeg"
                  alt="Clase de inglés interactiva"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 512px"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-brandAccentDark/40 via-transparent to-transparent opacity-60" />
              </div>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
