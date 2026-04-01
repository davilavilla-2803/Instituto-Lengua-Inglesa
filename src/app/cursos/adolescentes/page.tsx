'use client';

import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Smartphone, Trophy, Laptop, Calendar, ArrowRight, Zap, Target, Rocket } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const levels = [
  { icon: <Zap size={24} />, name: '1st Year Teens', cefr: 'Nivel A1', desc: 'Introducción al idioma. Vocabulario esencial, estructuras básicas y primeras conversaciones.' },
  { icon: <Target size={24} />, name: '2nd Year Teens', cefr: 'Nivel A2', desc: 'Comunicación en situaciones cotidianas. Mayor fluidez y autonomía en la expresión.' },
  { icon: <Rocket size={24} />, name: '3rd Year Teens', cefr: 'Nivel B1', desc: 'Inglés independiente. Capacidad para desenvolverse en viajes, estudios y vida social.' },
  { icon: <Trophy size={24} />, name: '4th Year Teens', cefr: 'Nivel B2', desc: 'Preparación para certificaciones internacionales. Alto nivel de comprensión y producción.' },
];

const highlights = [
  { icon: <MessageSquare size={20} />, text: 'Comunicación como eje central' },
  { icon: <Brain size={20} />, text: 'Pensamiento crítico y expresión personal' },
  { icon: <Smartphone size={20} />, text: 'Contenidos actuales y relevantes' },
  { icon: <Trophy size={20} />, text: 'Preparación para certificaciones' },
  { icon: <Laptop size={20} />, text: '100% online, sincrónicas vía Zoom' },
  { icon: <Calendar size={20} />, text: 'Modalidad anual: marzo a diciembre' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CursoAdolescentesPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Cursos — Adolescentes"
        title={<>Inglés para <span className="text-gradient">Adolescentes</span></>}
        phrase="El idioma que habla su generación, enseñado desde su realidad y sus intereses. Un programa que conecta, motiva y desafía."
      />

      {/* 1. INTRO & HIGHLIGHTS */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-2">A partir de los 13 años</span>
              <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                Un programa para <span className="text-gradient">conectar con ellos</span>
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Nuestros cursos son dinámicos e interactivos, abordando temáticas relevantes, promoviendo el pensamiento crítico y la expresión personal.
              </p>
              <div className="pt-6 border-l-4 border-brandAccent/30 pl-8">
                <p className="text-xl md:text-2xl text-brandAccent italic font-medium leading-relaxed">
                  El programa de 4 años se encuentra alineado con el Marco Común Europeo de Referencia (MCER).
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brandPrimary/30 border border-brandSecondary/5 flex items-center gap-4 group hover:bg-white hover:shadow-premium transition-all">
                  <div className="text-brandAccent group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-xs text-gray-500 font-medium group-hover:text-typographyMain transition-colors">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMA (Levels) */}
      <section className="py-16 bg-brandPrimary/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">Alineado al Marco Europeo</span>
            <h2 className="text-4xl md:text-6xl font-bold text-typographyMain font-display tracking-tight leading-tight">4 Años de <span className="text-gradient">Programa</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 bg-white rounded-[2.5rem] border border-brandSecondary/5 shadow-premium hover:border-brandAccent transition-all overflow-hidden"
              >
                <div className="absolute top-10 right-10">
                  <span className="px-3 py-1 rounded-full bg-brandAccent/10 text-brandAccent text-[10px] font-black uppercase tracking-widest border border-brandAccent/20">
                    {level.cefr}
                  </span>
                </div>
                
                <div className="relative z-10 flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-brandPrimary/50 flex items-center justify-center text-brandAccent shadow-sm">
                    {level.icon}
                  </div>
                  <div className="space-y-4 max-w-[80%]">
                    <h3 className="text-2xl font-bold text-typographyMain">{level.name}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{level.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 bg-brandPrimary/40 text-typographyMain text-center relative overflow-hidden mt-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brandAccent/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8">¿Todo listo para empezar?</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-12">Desafiá su <span className="text-gradient">potencial</span></h2>
          <p className="text-gray-500 text-lg font-light mb-16 leading-relaxed">
            Coordinamos una entrevista de nivelación sin cargo para encontrar el punto de partida ideal para tu adolescente.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-16 px-12 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brandAccentDark transition-all scale-100 hover:scale-105"
          >
            Consultar Inscripción <ArrowRight className="ml-3" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}


