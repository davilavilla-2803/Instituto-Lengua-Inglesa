'use client';

import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { Handshake, Mic2, Mail, Globe, Calendar, Laptop, ArrowRight, Target, Briefcase } from 'lucide-react';

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
        title={<>Business <span className="text-gradient">English</span></>}
        phrase="El inglés que abre puertas en el mundo corporativo global. Comunicá con precisión, proyectá profesionalismo y destacate en tu campo."
      />

      {/* 1. INTRO & SKILLS */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">Profesionales y Empresas</span>
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
      <section className="py-12 bg-brandPrimary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandAccent/10 rounded-full blur-[150px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brandAccent/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[3.5rem] border border-brandSecondary/10 shadow-premium flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/5 rounded-full blur-3xl group-hover:bg-brandAccent/10 transition-colors" />
            
            <div className="w-24 h-24 bg-brandPrimary/50 rounded-3xl flex items-center justify-center text-brandAccent shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
              <Calendar size={48} />
            </div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-display text-typographyMain">
                Modalidad <span className="text-brandAccent">Ejecutiva</span>
              </h3>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Modalidad <span className="font-bold text-typographyMain">anual (marzo a diciembre)</span>. Clases 100% online, sincrónicas vía Zoom con grupos reducidos para garantizar atención personalizada y práctica activa.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brandAccent">
                  <div className="w-8 h-8 rounded-full bg-brandAccent/10 flex items-center justify-center">
                    <Laptop size={14} />
                  </div>
                  Online & Sincrónico
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brandAccent">
                  <div className="w-8 h-8 rounded-full bg-brandAccent/10 flex items-center justify-center">
                    <Target size={14} />
                  </div>
                  Grupos Reducidos
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 bg-brandPrimary/40 text-typographyMain text-center relative overflow-hidden mt-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brandAccent/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Briefcase className="mx-auto mb-10 text-brandAccent w-12 h-12" />
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8">¿Tu empresa busca capacitación?</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-12">Llevá a tu equipo <span className="text-gradient">al siguiente nivel</span></h2>
          <p className="text-gray-500 text-lg font-light mb-16 leading-relaxed">
            También trabajamos con equipos corporativos diseñando planes a medida. Consultanos por programas personalizados para empresas.
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


