'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';

const exams = [
  {
    name: 'Trinity College London',
    tag: 'Comunicativo',
    desc: 'Exámenes 100% orales. Demostrá fluidez y confianza real al hablar.',
    image: '/images/TRINITY LOGO NUEVO.png',
    bgColor: 'bg-[#50144a]'
  },
  {
    name: 'Cambridge — FCE / CAE',
    tag: 'Académico',
    desc: 'El estándar internacional. Reconocido por universidades y empresas del mundo.',
    image: '/images/CAMBRIDGE LOGO.png',
    bgColor: 'bg-white'
  },
];

export default function Certification() {
  const isMobile = useIsMobile();

  return (
    <section className="py-24 bg-brandAccentDark relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brandAccent/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — texto */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : { duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Globe size={14} className="text-brandPrimary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brandPrimary">Certificación Internacional</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white leading-[1.05]">
              Validá tu inglés<br />
              <span className="text-brandPrimary/70">ante el mundo</span>
            </h2>

            <p className="text-white/70 text-lg font-light leading-relaxed max-w-md italic">
              No somos solo un instituto, somos tus{' '}
              <span className="font-bold text-white not-italic">entrenadores estratégicos</span>.
              Te damos la técnica y la confianza para conquistar los exámenes más prestigiosos del mundo.
            </p>

            <p className="text-white font-bold text-lg">
              Hacelo realidad. Tu éxito global empieza acá.
            </p>

            <Link
              href="/certificacion"
              className="inline-flex h-14 px-10 items-center justify-center bg-white text-brandAccentDark rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brandPrimary transition-all hover:scale-105 group"
            >
              Más información <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={14} />
            </Link>
          </motion.div>

          {/* Columna derecha — cards de exámenes */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : { duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {exams.map((exam, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${exam.bgColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-all overflow-hidden relative shadow-sm border border-white/10`}>
                    <Image
                      src={exam.image}
                      alt={exam.name}
                      fill
                      sizes="56px"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brandPrimary/60 block">{exam.tag}</span>
                    <h3 className="text-xl font-bold text-white">{exam.name}</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{exam.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Badge decorativo */}
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-brandPrimary animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                Preparación personalizada · Grupos reducidos
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
