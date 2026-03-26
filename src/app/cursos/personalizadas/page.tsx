'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { Target, BookOpen, BarChart3, Clock, RefreshCcw, Calendar, Laptop, ArrowRight, UserCircle, Star } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const features = [
  { icon: <Target size={20} />, text: 'Contenidos generales o necesidades específicas (exámenes, trabajo, viajes)' },
  { icon: <BookOpen size={20} />, text: 'Todo el material de estudio incluido sin costo adicional' },
  { icon: <BarChart3 size={20} />, text: 'Disponibles para todos los niveles: desde principiante a avanzado' },
  { icon: <Clock size={20} />, text: 'Días y horarios flexibles, adaptados a tu agenda personal' },
  { icon: <RefreshCcw size={20} />, text: 'Inicio inmediato: podés empezar en cualquier momento del año' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CursoPersonalizadasPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Cursos — 1:1"
        title="Clases <span class='text-gradient'>Personalizadas</span>"
        phrase="Tu aprendizaje, a tu ritmo, hacia tu objetivo. Un espacio exclusivo entre docente y estudiante para resultados concretos."
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
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent block">Todos los niveles y edades</span>
                <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                  100% a <span className="text-gradient">medida tuya</span>
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Diseñamos cada encuentro según tus objetivos, nivel y estilo. Al ser un espacio exclusivo, el aprendizaje es altamente enfocado y eficiente.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-6 rounded-3xl bg-brandPrimary/30 border border-brandSecondary/5 flex flex-col gap-4">
                  <Calendar className="text-brandAccent" size={24} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brandAccent mb-1">Disponibilidad</p>
                    <p className="text-xs text-typographyMain/70 leading-relaxed italic">
                      Dictadas todo el año (excepto enero). Sin esperas: no es necesario comenzar en marzo.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-brandPrimary/30 border border-brandSecondary/5 flex flex-col gap-4">
                  <Laptop className="text-brandAccent" size={24} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brandAccent mb-1">Modalidad</p>
                    <p className="text-xs text-typographyMain/70 leading-relaxed italic">
                      100% online, sincrónicas vía Zoom. Coordinamos los horarios según tu conveniencia.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-typographyMain rounded-3xl text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent/10 rounded-full blur-[100px]" />
              
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-brandAccent mb-10 block">¿Cómo Funcionan?</h3>
              <div className="space-y-8 relative z-10">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brandAccent group-hover:bg-brandAccent/20 transition-all shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-white/70 font-light group-hover:text-white transition-colors pt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CTA */}
      <section className="py-32 bg-brandAccentDark text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <UserCircle className="mx-auto mb-10 text-brandAccent w-12 h-12" />
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8 block">¿Tu espacio exclusivo?</p>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-12">Empezá a brillar <span className="text-brandPrimary">a tu ritmo</span></h2>
          <p className="text-white/60 text-lg font-light mb-16 leading-relaxed">
            Escribinos hoy mismo para coordinar una entrevista de nivelación y encontrá el horario ideal para tus clases personalizadas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-16 px-12 items-center justify-center bg-white text-brandAccentDark rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-brandAccent hover:text-white transition-all scale-100 hover:scale-105"
          >
            Consultar Ahora <ArrowRight className="ml-3" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

