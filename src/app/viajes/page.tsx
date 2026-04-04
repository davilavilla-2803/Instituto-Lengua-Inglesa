'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import { Plane, Compass, Users2, Heart, ShieldCheck, Map, ArrowRight, Calendar, Info } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const pillars = [
  { icon: <Compass size={24} />, text: 'Práctica constante del idioma en situaciones reales' },
  { icon: <Map size={24} />, text: 'Actividades culturales y recreativas en inglés' },
  { icon: <Users2 size={24} />, text: 'Acompañamiento docente durante toda la experiencia' },
  { icon: <Heart size={24} />, text: 'Espacios de interacción, conexión y crecimiento personal' },
];

const madrynGallery = [
  { src: '/images/MADRYN 2026 DELFINES.jpeg', alt: 'Dolphin Watching' },
  { src: '/images/MADRYN 2026 PUNTA TOMBO.jpeg', alt: 'Punta Tombo' },
  { src: '/images/MADRYN 2026 SNORKELLING.jpeg', alt: 'Snorkelling' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function ViajesPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="English & Travel"
        title={<>El mundo es el aula <span className="text-gradient">más grande</span></>}
        phrase="Aprender un idioma es animarse a vivirlo. Nuestras experiencias de viaje están diseñadas para que el inglés sea tu brújula en destinos únicos."
      />

      {/* 1. INTRO & PILARES */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-2">Nuestra Esencia</span>
              <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                Donde el idioma <span className="text-gradient">cobra vida</span>
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Estamos convencidos de que el inglés se traslada a escenarios reales, convirtiendo el estudio en una conexión absoluta con el mundo.
              </p>
              
              <div className="p-8 rounded-[2.5rem] bg-brandPrimary/30 border border-brandSecondary/10 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-brandAccent" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-brandAccent">Agencia Oficial</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    Trabajamos con <span className="font-bold text-typographyMain">A Preparar las Valijas</span> (LEG: 17.244). Una agencia con larga trayectoria que garantiza seguridad y excelencia en cada destino.
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brandAccent/5 rounded-full blur-2xl group-hover:bg-brandAccent/10 transition-colors" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-typographyMain/40 mb-2">En cada viaje brindamos</h3>
              {pillars.map((p, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-brandSecondary/5 hover:border-brandAccent transition-colors group">
                  <div className="text-brandAccent group-hover:scale-110 transition-transform">{p.icon}</div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-typographyMain transition-colors">{p.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. EDICIÓN PASADA (Masonry ish) */}
      <section className="py-12 bg-brandPrimary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">Edición 2026</span>
            <h2 className="text-3xl md:text-5xl font-bold text-typographyMain font-display tracking-tight">Puerto Madryn in English</h2>
            <p className="text-gray-500 text-lg font-light mt-6">Naturaleza y el idioma integrados de forma excepcional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {madrynGallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-premium group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRÓXIMOS DESTINOS (Bento style cards) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">Preview 2027</span>
            <h2 className="text-4xl md:text-6xl font-bold text-typographyMain font-display tracking-tight leading-tight">Próximos <span className="text-gradient">English & Travel</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ushuaia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-3xl overflow-hidden border border-brandSecondary/10 shadow-premium bg-white"
            >
              {/* Imagen limpia sin overlay */}
              <div className="relative h-72 overflow-hidden shrink-0">
                <Image
                  src="/images/USHUAIA 2027.jpeg"
                  alt="Ushuaia 2027"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-[center_45%] transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-brandAccent text-white font-black text-[10px] uppercase tracking-widest shadow-lg">
                  Cupos Limitados
                </span>
              </div>

              {/* Contenido separado */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-brandAccent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brandAccent">Enero 2027</span>
                </div>
                <h3 className="text-3xl font-bold text-typographyMain font-display">Ushuaia</h3>
                <p className="text-gray-500 text-base font-light leading-relaxed flex-1">
                  Inmersión total en el &ldquo;Fin del Mundo&rdquo;. Una experiencia bilingüe rodeada de los paisajes más majestuosos del planeta.
                </p>
                <a
                  href="https://bit.ly/EnglishandTravel-Ushuaia2027"
                  target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex h-11 px-8 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-widest text-[9px] hover:bg-brandAccentDark hover:scale-105 transition-all shadow-lg"
                >
                  Ver Detalles <ArrowRight className="ml-2" size={12} />
                </a>
              </div>
            </motion.div>

            {/* UK & Ireland */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col rounded-3xl overflow-hidden border border-brandSecondary/10 shadow-premium bg-white"
            >
              {/* Imagen en escala de grises hasta hover */}
              <div
                className="relative h-72 overflow-hidden shrink-0 transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/REINO UNIDO E IRLANDA 2027.jpeg')", backgroundSize: 'cover', backgroundPosition: '40% 50%', backgroundRepeat: 'no-repeat' }}
              >
                <span className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-black text-[10px] uppercase tracking-widest border border-white/30">
                  Próximamente
                </span>
              </div>

              {/* Contenido separado */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-brandAccent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brandAccent">Septiembre 2027</span>
                </div>
                <h3 className="text-3xl font-bold text-typographyMain font-display">UK & Ireland</h3>
                <p className="text-gray-500 text-base font-light leading-relaxed flex-1">
                  Un recorrido inolvidable por las Islas Británicas. Cultura, historia y el inglés en su estado más puro.
                </p>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-brandPrimary/30 border border-brandSecondary/10">
                  <Info size={14} className="text-brandAccent shrink-0" />
                  <p className="text-[10px] text-typographyMain/60 uppercase font-black tracking-widest">Lanzamiento oficial: Agosto 2026</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA (Modern) */}
      <section className="py-16 bg-brandPrimary/40 text-typographyMain relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandAccent rounded-full blur-[200px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brandAccent/10 text-brandAccent mb-10 shadow-sm">
            <Plane size={32} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-8">
            Transformá tu forma <span className="text-gradient">de ver el mundo</span>
          </h2>
          <p className="text-gray-500 text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Sumate a nuestra próxima English & Travel Experience y viví el inglés en destinos únicos junto a una comunidad cultural.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-16 px-12 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brandAccentDark transition-all scale-100 hover:scale-105"
          >
            Quiero saber más <ArrowRight className="ml-3" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}


