'use client';

import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { Gamepad2, Music, MessageCircle, Laptop, Calendar, BookOpen, GraduationCap, ArrowRight, Star, Heart } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const levels = [
  { icon: <Star size={24} />, name: 'Children 1', desc: 'Primeros pasos en el idioma. Vocabulario básico, fonética inicial y expresión oral simple.' },
  { icon: <Heart size={24} />, name: 'Children 2', desc: 'Consolidación de estructuras. Mayor fluidez en situaciones cotidianas y lectoescritura.' },
  { icon: <Star size={24} />, name: 'Children 3', desc: 'Ampliación de gramática y vocabulario. Producción oral y escrita más compleja.' },
  { icon: <GraduationCap size={24} />, name: 'Junior', desc: 'Nivel de transición hacia adolescentes. Comunicación más autónoma y pensamiento crítico.' },
];

const highlights = [
  { icon: <Gamepad2 size={20} />, text: 'Juegos y actividades lúdicas' },
  { icon: <Music size={20} />, text: 'Canciones y recursos audiovisuales' },
  { icon: <MessageCircle size={20} />, text: 'Comunicación oral como eje central' },
  { icon: <BookOpen size={20} />, text: 'Bibliografía seleccionada por nivel' },
  { icon: <Laptop size={20} />, text: '100% online, sincrónicas vía Zoom' },
  { icon: <Calendar size={20} />, text: 'Modalidad anual: marzo a diciembre' },
  { icon: <GraduationCap size={20} />, text: 'Certificación internacional opcional' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CursoNinosPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Cursos — Niños"
        title={<>Inglés para <span className="text-gradient">los más chicos</span></>}
        phrase="Los más chicos también tienen voz. Un espacio seguro, lúdico y divertido para descubrir el inglés desde pequeños."
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
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">A partir de los 7 años</span>
              <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                Una experiencia <span className="text-gradient">divertida y para descubrir el mundo</span>
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Ofrecemos cursos diseñados para que aprender desde casa sea un viaje de descubrimiento. Nuestras clases son interactivas, dinámicas y naturales.
              </p>
              <div className="pt-6 border-l-4 border-brandAccent/30 pl-8">
                <p className="text-xl md:text-2xl text-brandAccent italic font-medium leading-relaxed">
                  Combinamos juegos, recursos audiovisuales y una bibliográfica premium para garantizar fluidez y confianza.
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
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">Estructura del Programa</span>
            <h2 className="text-4xl md:text-6xl font-bold text-typographyMain font-display tracking-tight leading-tight">4 Niveles <span className="text-gradient">de Crecimiento</span></h2>
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/5 rounded-full blur-3xl group-hover:bg-brandAccent/10 transition-colors" />
                
                <div className="relative z-10 flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-brandPrimary/50 flex items-center justify-center text-brandAccent shadow-sm">
                    {level.icon}
                  </div>
                  <div className="space-y-4">
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-brandAccent/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8">¿Tu hijo/a está listo?</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-12">Impulsá su futuro <span className="text-gradient">bilingüe</span></h2>
          <p className="text-gray-500 text-lg font-light mb-16 leading-relaxed">
            Escribinos para coordinar una entrevista de nivelación sin cargo y encontrá el lugar ideal para que tu hijo/a empiece a brillar.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-16 px-12 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brandAccentDark transition-all scale-100 hover:scale-105"
          >
            Inscribir a mi hijo/a <ArrowRight className="ml-3" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}


