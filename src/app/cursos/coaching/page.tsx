'use client';

import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, UserCheck, Calendar, Laptop, Target, ArrowRight, Award, PenTool } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const benefits = [
  { icon: <BookOpen size={20} />, text: 'Material completo incluido sin costo' },
  { icon: <UserCheck size={20} />, text: 'Clases individuales o grupos reducidos' },
  { icon: <Calendar size={20} />, text: 'Días y horarios a coordinar' },
  { icon: <Laptop size={20} />, text: '100% online, sincrónicas vía Zoom' },
  { icon: <Target size={20} />, text: 'Enfoque en tus necesidades específicas' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CursoCoachingPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Cursos — Coaching Docente"
        title={<>Coaching para <span className="text-gradient">Profesorado de Inglés</span></>}
        phrase="Enseñar inglés es una práctica profesional que se perfecciona con dedicación y método. Un espacio de acompañamiento para docentes que quieren seguir creciendo."
      />

      {/* 1. SECCIÓN PRINCIPAL */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-2">Docentes y Futuros Docentes</span>
                <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                  Seguir creciendo como <span className="text-gradient">profesional</span>
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  Una propuesta diseñada para quienes desean perfeccionar su práctica con un enfoque práctico, reflexivo y totalmente personalizado.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="group p-8 rounded-3xl bg-brandPrimary/30 border border-brandSecondary/5 hover:border-brandAccent transition-all">
                  <div className="flex gap-6 items-start">
                    <Award className="text-brandAccent shrink-0" size={32} />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-typographyMain">Profesores Recibidos</h3>
                      <p className="text-gray-500 font-light text-sm italic">
                        Perfeccioná tu metodología, actualizá tus recursos y elevá tu práctica docente cotidiana.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-8 rounded-3xl bg-brandPrimary/30 border border-brandSecondary/5 hover:border-brandAccent transition-all">
                  <div className="flex gap-6 items-start">
                    <PenTool className="text-brandAccent shrink-0" size={32} />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-typographyMain">Estudiantes en Formación</h3>
                      <p className="text-gray-500 font-light text-sm italic">
                        Apoyo y acompañamiento pedagógico durante toda tu carrera de profesorado de inglés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white rounded-3xl border border-brandSecondary/10 shadow-premium overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent/5 rounded-full blur-[100px]" />
              
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-brandAccent mb-10 block">¿Qué Incluye?</h3>
              <div className="space-y-8 relative z-10">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-brandPrimary flex items-center justify-center text-brandAccent group-hover:scale-110 transition-all border border-brandSecondary/5 shadow-sm">
                      {item.icon}
                    </div>
                    <p className="text-gray-500 font-light group-hover:text-typographyMain transition-colors">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CTA */}
      <section className="py-16 bg-brandPrimary/40 text-typographyMain text-center relative overflow-hidden mt-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brandAccent/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <GraduationCap className="mx-auto mb-10 text-brandAccent w-12 h-12" />
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8">Inspiración para tu carrera</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-12">Potenciá tu <span className="text-gradient">vocación docente</span></h2>
          <p className="text-gray-500 text-lg font-light mb-16 leading-relaxed">
            Escribinos y coordinamos una entrevista para conocer tus objetivos y diseñar un plan de coaching a tu medida.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-16 px-12 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brandAccentDark transition-all scale-100 hover:scale-105"
          >
            Consultar Ahora <ArrowRight className="ml-3" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}


