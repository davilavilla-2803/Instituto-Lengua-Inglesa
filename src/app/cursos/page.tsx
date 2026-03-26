'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import Services from '@/components/home/Services';
import { siteConfig } from '@/lib/config';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, ArrowRight, Zap } from 'lucide-react';

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CursosPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hola Sofi! Quiero hacer el test de nivel gratuito.')}`;

  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Nuestros Cursos"
        title="Experiencias que atraviesan <span class='text-gradient'>la pantalla</span>"
        phrase="Aprendé inglés de una manera viva, cercana y memorable. Más que clases, te ofrecemos el puente hacia tu futuro bilingüe."
      />

      <section className="bg-white py-12">
        <Services />
      </section>

      {/* ── TEST DE NIVEL (Premium Card) ─────────────────────────────────── */}
      <section className="py-32 bg-brandPrimary/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandAccent/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="p-12 md:p-20 rounded-[3.5rem] bg-white border border-brandSecondary/10 shadow-premium overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 text-left"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandAccent/10 text-brandAccent text-[10px] font-black uppercase tracking-widest border border-brandAccent/20">
                  ¿No sabés por dónde empezar?
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                  Conocé tu nivel <br />
                  <span className="text-gradient">gratis</span>
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                  Realizá nuestro test de nivel personalizado. Descubrí tu punto de partida y comenzá a disfrutar tu versión bilingüe hoy mismo.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Evaluación rápida por WhatsApp',
                    'Devolución personalizada inmediata',
                    'Asesoramiento sobre el mejor curso para vos'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-typographyMain/60 text-sm font-light">
                      <CheckCircle2 size={18} className="text-brandAccent" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-brandAccent/5 rounded-full blur-3xl" />
                <div className="relative p-12 bg-brandPrimary/30 rounded-[2.5rem] text-center border border-brandSecondary/5">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-brandAccent mx-auto mb-8 shadow-sm">
                    <Zap size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-typographyMain mb-6">Tu diagnóstico en minutos</h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-16 inline-flex items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brandAccentDark hover:scale-105 transition-all group"
                  >
                    Hacer el test gratuito <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                  <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest font-black">Sencillo · Rápido · 100% Online</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


