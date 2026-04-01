'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { Award, Globe, CheckCircle2, Star, Zap, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const whyCertify = [
  { icon: <Globe size={24} />, text: 'Validás tu nivel de inglés a nivel global' },
  { icon: <GraduationCap size={24} />, text: 'Sumás valor académico y profesional a tu perfil' },
  { icon: <ShieldCheck size={24} />, text: 'Reconocimiento por universidades y empresas' },
  { icon: <Zap size={24} />, text: 'Ganás seguridad y confianza en el uso del idioma' },
  { icon: <Award size={24} />, text: 'Te preparás con objetivos claros y medibles' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CertificacionPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Certificación Internacional"
        title={<>Validá tu inglés ante <span className="text-gradient">el mundo</span></>}
        phrase="Tu nivel de inglés profesional, reconocido globalmente. Certificá con las instituciones más prestigiosas y abrí las puertas de tu futuro bilingüe."
      />

      {/* 1. INTRO (Clean) */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg font-light leading-relaxed"
          >
            Todos nuestros cursos ofrecen la posibilidad de certificar tu nivel a través de exámenes internacionales. Somos el puente entre tu esfuerzo y el reconocimiento mundial.
          </motion.p>
        </div>
      </section>

      {/* 2. TRINITY COLLEGE (Editorial Card) */}
      <section className="py-12 bg-brandPrimary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandAccent/10 text-brandAccent text-[10px] font-black uppercase tracking-widest">
                Enfoque Comunicativo
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight">
                Trinity College London
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Exámenes 100% orales, enfocados en la comunicación real, la interacción y el uso natural del idioma. Ideales para quienes buscan demostrar fluidez y confianza extrema al hablar.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Fluidez y naturalidad',
                  'Pronunciación clara',
                  'Vocabulario variado',
                  'Capacidad de debate'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 size={18} className="text-brandAccent" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-typographyMain/40 pt-4">
                Disponible para Niños, Adolescentes y Adultos
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 glass rounded-3xl border-white shadow-premium text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/10 rounded-full blur-3xl" />
              <div className="w-32 h-32 bg-[#50144a] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm overflow-hidden relative border border-[#50144a]">
                <Image 
                  src="/images/TRINITY LOGO NUEVO.png" 
                  alt="Trinity College London Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-typographyMain mb-4">Trayectoria Global</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Una de las instituciones evaluadoras más reconocidas del mundo, con más de 100 años liderando la certificación de idiomas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CAMBRIDGE (Modern Split) */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative p-12 bg-typographyMain rounded-[3.5rem] text-white shadow-2xl overflow-hidden text-center"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandAccent/20 rounded-full blur-[100px]" />
              <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm overflow-hidden relative border border-white/10">
                <Image 
                  src="/images/CAMBRIDGE LOGO.png" 
                  alt="Cambridge English Logo" 
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reconocimiento Institucional</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Certificaciones académicas aceptadas por universidades, gobiernos y los mejores empleadores del planeta.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandAccent/10 text-brandAccent text-[10px] font-black uppercase tracking-widest">
                Estándar Académico
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight">
                Cambridge English
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Preparación exhaustiva para los exámenes más demandados. Evaluamos las cuatro habilidades fundamentales con rigor y excelencia.
              </p>

              <div className="space-y-4">
                {[
                  { level: 'FCE — B2 First', desc: 'First Certificate in English. Nivel intermedio-avanzado, tu primer gran salto global.' },
                  { level: 'CAE — C1 Advanced', desc: 'Certificate in Advanced English. Para dominar el idioma en contextos profesionales y académicos.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-brandPrimary/30 border border-brandSecondary/10 group hover:bg-white hover:shadow-premium transition-all duration-500">
                    <p className="text-sm font-bold text-typographyMain group-hover:text-brandAccent transition-colors">{item.level}</p>
                    <p className="text-xs text-gray-500 mt-1 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {['Reading', 'Listening', 'Writing', 'Speaking'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-typographyMain/5 text-typographyMain text-[10px] font-black uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BENEFICIOS (Bento Grid) */}
      <section className="py-16 bg-brandPrimary/40 text-typographyMain relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brandAccent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandAccent/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">¿Por qué certificar?</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">Beneficios <span className="text-gradient">reales</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCertify.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-brandSecondary/10 space-y-6 group hover:shadow-premium transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-brandAccent/10 flex items-center justify-center text-brandAccent group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-lg font-light text-gray-500 leading-relaxed group-hover:text-typographyMain transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contacto"
              className="inline-flex h-16 px-12 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brandAccentDark transition-all scale-100 hover:scale-105"
            >
              Consultá tu preparación <ArrowRight className="ml-3" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


