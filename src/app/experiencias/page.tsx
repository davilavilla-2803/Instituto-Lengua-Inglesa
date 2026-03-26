'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { siteConfig } from '@/lib/config';
import { motion } from 'framer-motion';
import { Coffee, Palette, MapPin, Utensils, Info, Instagram, Calendar, Users, Star, ArrowRight, Globe } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const experiences = [
  {
    icon: <Coffee size={32} />,
    title: 'English & Coffee Experience',
    target: 'Adolescentes y adultos',
    image: '/images/ENGLISH AND COFFEE.jpeg',
    description: 'Una experiencia distinta, relajada y creativa abierta a toda la comunidad. Practicamos speaking y listening sobre temas de interés general en un entorno cálido.',
    detail: 'Grupo reducido para garantizar una producción oral personalizada y fluida.',
  },
  {
    icon: <Palette size={32} />,
    title: "The Kids' Creative Club",
    target: 'Niños',
    image: '/images/ENGLISH TOURS IN BA.jpeg', 
    description: 'Propuesta 100% lúdica y espontánea. Los niños desarrollan sus habilidades a través del arte, juegos y una merienda compartida.',
    detail: 'Cupos muy limitados para fomentar la expresión y conexión individual.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'The Grand BA Circuit',
    target: 'Adolescentes y adultos',
    image: '/images/AFTERNOON TEA.jpeg',
    description: 'Recorrido bilingüe por el Palacio Barolo y Confitería La Ideal. Historia, arquitectura y nuestra clásica English & Coffee.',
    detail: 'Un circuito sofisticado para conectar con los iconos de la ciudad.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'English Tours in Buenos Aires',
    target: 'Adolescentes y adultos',
    image: '/images/ENGLISH TOURS IN BA.jpeg',
    description: 'Inmersión cultural en movimiento. Recorridos guiados por Puerto Madero, San Telmo, La Boca y museos emblemáticos.',
    detail: 'Cada edición propone una inmersión cultural distinta, donde el idioma se practica en movimiento.',
  },
  {
    icon: <Utensils size={32} />,
    title: 'Bilingual Gastronomic Experience',
    target: 'Adolescentes y adultos',
    image: '/images/AFTERNOON TEA.jpeg',
    description: 'Colaboración con Foodie Estudio. Exploramos la cocina británica desde el Afternoon Tea hasta el British Pub en un ambiente gourmet.',
    detail: 'Una oportunidad para viajar con los sentidos en un entorno conversacional.',
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function ExperienciasPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Cultura & Encuentro"
        title="Donde el inglés se convierte en <span class='text-gradient'>experiencia</span>"
        phrase="Nuestras propuestas culturales son el espacio donde el aprendizaje trasciende la pantalla y se transforma en momentos auténticos y compartidos."
      />

      {/* 1. INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg font-light leading-relaxed"
          >
            Invitamos a toda la comunidad a vivir el idioma en contextos reales. Conectamos con la cultura, las personas y nuevas formas de expresión de manera natural y significativa.
          </motion.p>
        </div>
      </section>

      {/* 2. EXPERIENCIAS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative aspect-4/3 rounded-3xl overflow-hidden shadow-premium group">
                <Image 
                  src={exp.image || ''} 
                  alt={exp.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brandAccentDark/30 to-transparent" />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-brandAccent shadow-sm">
                    {exp.target}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-brandPrimary/50 flex items-center justify-center text-brandAccent mb-8 shadow-sm">
                  {exp.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-typographyMain font-display leading-tight">
                  {exp.title}
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                  {exp.description}
                </p>
                <p className="text-sm text-brandAccent font-medium italic border-l-2 border-brandAccent/30 pl-6 py-2">
                  {exp.detail}
                </p>
                <div className="pt-8">
                  <Link 
                    href="/contacto" 
                    className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-typographyMain hover:text-brandAccent transition-colors group"
                  >
                    Consultar Próxima Fecha <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INFO IMPORTANTE */}
      <section className="py-32 bg-brandAccentDark text-white relative overflow-hidden mt-32">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandAccent/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6 block">Cómo Participar</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">Reglas de la <span className="text-brandPrimary">Comunidad</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: <Globe />, text: 'Abierto a todos. No es necesario ser alumno.' },
              { icon: <Users />, text: 'Cupos reducidos para garantizar calidad y personalización.' },
              { icon: <Star />, text: 'Alumnos cuentan con acceso prioritario y descuentos.' },
              { icon: <Instagram />, text: 'Fechas y novedades en @lenguainglesasm.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="glass p-8 rounded-[2rem] border-white/5 space-y-6 flex flex-col items-center"
              >
                <div className="text-brandAccent">{item.icon}</div>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={siteConfig.instagramUrl}
              target="_blank" rel="noopener noreferrer"
              className="h-16 px-10 flex items-center justify-center bg-white text-brandAccentDark rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-xl"
            >
              Seguir en Instagram
            </a>
            <Link
              href="/contacto"
              className="h-16 px-10 flex items-center justify-center border border-white/20 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Consultar Disponibilidad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

