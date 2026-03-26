'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { Handshake, Mic2, Mail, Globe, Calendar, Laptop, ArrowRight, Zap, Target, Briefcase } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const skills = [
  { icon: <Handshake size={24} />, title: 'Comunicación efectiva', desc: 'Interacción fluida y profesional en contextos laborales nacionales e internacionales.' },
  { icon: <Mic2 size={24} />, title: 'Presentaciones y reuniones', desc: 'Lenguaje preciso para conducir y participar en reuniones y presentaciones en inglés.' },
  { icon: <Mail size={24} />, title: 'Redacción profesional', desc: 'Emails, informes y documentos con vocabulario técnico y gramática correcta.' },
  { icon: <Globe size={24} />, title: 'Entornos internacionales', desc: 'Desenvolverse con seguridad en equipos multiculturales y contextos globales.' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CursoBusinessEnglishPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Cursos — Business English"
        title="Business <span class='text-gradient'>English</span>"
        phrase="El inglés que abre puertas en el mundo corporativo global. Comunicá con precisión, proyectá profesionalismo y destacate en tu campo."
      />

      {/* 1. INTRO & SKILLS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6 block">Profesionales y Empresas</span>
            <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight leading-tight">
              Potenciá tu <span className="text-gradient">performance profesional</span>
            </h2>
            <p className="text-gray-500 text-lg font-light mt-6 leading-relaxed">
              Una propuesta diseñada para quienes buscan destacarse. Entrenamos a nuestros alumnos para comunicarse con seguridad y claridad en cualquier contexto laboral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 bg-brandPrimary/30 rounded-[2.5rem] border border-brandSecondary/5 hover:border-brandAccent transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/5 rounded-full blur-3xl group-hover:bg-brandAccent/10 transition-colors" />
                
                <div className="relative z-10 flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brandAccent shadow-sm">
                    {skill.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-typographyMain">{skill.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MODALIDAD */}
      <section className="py-32 bg-typographyMain text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandAccent rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="glass p-12 md:p-16 rounded-[3.5rem] border-white/5 flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-brandAccent/20 rounded-3xl flex items-center justify-center text-brandAccent shrink-0 shadow-lg">
              <Calendar size={48} />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-display">Modalidad Ejecutiva</h3>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Modalidad <span className="font-bold text-white">anual (marzo a diciembre)</span>. Clases 100% online, sincrónicas vía Zoom con grupos reducidos para garantizar atención personalizada y práctica activa.
              </p>
              <div className="flex items-center gap-4 pt-4 text-[10px] font-black uppercase tracking-widest text-brandAccent">
                <Laptop size={16} /> Online & Sincrónico
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-32 bg-brandAccentDark text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Briefcase className="mx-auto mb-10 text-brandAccent w-12 h-12" />
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8 block">¿Tu empresa busca capacitación?</p>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-12">Llevá a tu equipo <span className="text-brandPrimary">al siguiente nivel</span></h2>
          <p className="text-white/60 text-lg font-light mb-16 leading-relaxed">
            También trabajamos con equipos corporativos diseñando planes a medida. Consultanos por programas personalizados para empresas.
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

