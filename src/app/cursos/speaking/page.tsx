'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { MessageCircle, Ear, Zap, BookOpen, Layers, Target, ArrowRight, Mic, Calendar, Laptop } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const topics = [
  { icon: <Zap size={20} />, text: 'Pronunciación clara y natural' },
  { icon: <Ear size={20} />, text: 'Comprensión auditiva (listening)' },
  { icon: <MessageCircle size={20} />, text: 'Estrategias para ganar fluidez' },
  { icon: <BookOpen size={20} />, text: 'Ampliación de vocabulario' },
  { icon: <Layers size={20} />, text: 'Revisión de gramática en uso' },
  { icon: <Target size={20} />, text: 'Materiales auténticos e interactivos' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CursoSpeakingPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Cursos — Speaking"
        title="Speaking <span class='text-gradient'>Courses</span>"
        phrase="Hablar con confianza es el mayor logro que puede darte un idioma. Un espacio para perder el miedo y ganar fluidez de verdad."
      />

      {/* 1. SECCIÓN INTRO */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent block">Desde nivel A2 (pre-intermedio)</span>
                <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                  Enfocados en <span className="text-gradient">listening y speaking</span>
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Ideales para quienes desean específicamente priorizar la expresión oral y quieren perder definitivamente el miedo a hablar en inglés.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-brandPrimary/30 border border-brandSecondary/5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brandAccent flex items-center justify-center text-white text-[10px] font-black uppercase">!</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brandAccent">Requisito</p>
                </div>
                <p className="text-sm text-typographyMain/70 leading-relaxed italic">
                  Disponibles a partir del <strong className="text-typographyMain">nivel A2 (pre-intermedio)</strong>. Usamos materiales auténticos para una comunicación real.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-typographyMain rounded-3xl text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent/10 rounded-full blur-[100px]" />
              
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-brandAccent mb-10 block">¿Qué Trabajamos?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {topics.map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brandAccent group-hover:bg-brandAccent/20 transition-all shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-white/70 font-light group-hover:text-white transition-colors text-xs leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex gap-6 items-center">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brandAccent">
                  <Calendar size={14} /> Anual
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brandAccent">
                  <Laptop size={14} /> 100% Online
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CTA */}
      <section className="py-32 bg-brandAccentDark text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Mic className="mx-auto mb-10 text-brandAccent w-12 h-12" />
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8 block">¿Todo listo para soltarte?</p>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-12">Ganá confianza <span className="text-brandPrimary">al hablar</span></h2>
          <p className="text-white/60 text-lg font-light mb-16 leading-relaxed">
            Escribinos hoy para coordinar una entrevista de nivelación y sumate al espacio ideal para llevar tu fluidez al siguiente nivel.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-16 px-12 items-center justify-center bg-white text-brandAccentDark rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-brandAccent hover:text-white transition-all scale-100 hover:scale-105"
          >
            Consultar Inscripción <ArrowRight className="ml-3" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

