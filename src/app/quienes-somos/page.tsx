'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { motion } from 'framer-motion';
import {
  Globe,
  Coffee,
  Users,
  Award,
  GraduationCap,
  Video,
  BookOpen,
  Heart,
  Target,
  Eye,
  ArrowRight
} from 'lucide-react';

/* ─── Datos de Secciones ─────────────────────────────────────────────────── */

const benefits = [
  { icon: <Globe size={24} />, title: 'Cultura & Idioma', text: 'Primer instituto que fomenta nuestra cultura a través del inglés con propuestas originales.' },
  { icon: <Coffee size={24} />, title: 'Experiencias Únicas', text: 'English & Coffee, Tours en BA, Bilingual Gourmet Experiences y English & Travel.' },
  { icon: <Users size={24} />, title: 'Grupos Reducidos', text: 'Clases verdaderamente personalizadas con atención constante a cada alumno.' },
  { icon: <Award size={24} />, title: 'Certificación', text: 'Centro de preparación para Cambridge y Trinity College London.' },
  { icon: <GraduationCap size={24} />, title: 'Staff Calificado', text: 'Docentes apasionados, comprometidos con la excelencia y la innovación.' },
  { icon: <Video size={24} />, title: 'Clases Grabadas', text: 'Todas las sesiones se graban para que puedas repasar cuando lo necesites.' },
  { icon: <BookOpen size={24} />, title: 'Material Incluido', text: 'Bibliografía del curso bonificada al 100% para todos los alumnos.' },
  { icon: <Heart size={24} />, title: 'Comunidad', text: 'Acceso prioritario a actividades culturales y descuentos familiares.' },
];

/* ─── Componente ────────────────────────────────────────────────────────── */

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Nuestra Historia"
        backgroundWord="Nosotras"
        title="Quiénes Somos"
        phrase="Somos un equipo que cree en el inglés como un puente cultural. Buscamos que cada estudiante descubra su valor personal poniendo el idioma en práctica en contextos reales y globales."
      />

      {/* 1. NUESTRO PROYECTO (Editorial Style) */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-12"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">El Comienzo</span>
              <h2 className="text-4xl md:text-6xl font-bold text-typographyMain font-display tracking-tight leading-tight">
                Un proyecto que nace del deseo de enseñar <span className="text-gradient">diferente</span>
              </h2>
            </div>

            <div className="space-y-8 text-gray-500 text-xl font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                El <span className="font-bold text-typographyMain">11 de agosto de 2023</span> dimos inicio a este camino en San Miguel, Buenos Aires. Hoy, contamos con <span className="font-bold text-typographyMain">más de 100 alumnos</span> de todo el mundo.
              </p>
              <p>
                Creemos en un aprendizaje significativo, donde el idioma no solo se estudia, sino que <span className="italic text-typographyMain">se vive, se siente y se conecta</span> con los intereses reales de cada persona.
              </p>
              <div className="pt-8">
                <p className="bg-brandAccent/10 p-10 rounded-[2.5rem] border-l-4 border-brandAccent text-lg italic text-typographyMain/80">
                  Todas nuestras clases se dictan de manera <span className="font-bold text-typographyMain">100% online y sincrónicas vía Zoom</span>, brindando calidad desde cualquier lugar del mundo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOFÍA (Modern Profile) */}
      <section className="py-12 bg-brandPrimary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">Nuestra Fundadora</span>
              <h2 className="text-4xl md:text-6xl font-bold text-typographyMain font-brand mb-8">Sofía Dávila Villa</h2>
              <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  <span className="font-bold text-typographyMain">Profesora de Inglés</span>. Apasionada por la innovación pedagógica y el intercambio cultural, diseña procesos de enseñanza dinámicos que van más allá del aula.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  {[
                    { label: 'Formación', val: 'Instituto Superior Cultural Británico, University of California, y UCAECE' },
                    { label: 'Especialidad', val: 'Phonology, grammar & academic writing' },
                    { label: 'Ex-Ayudante', val: 'Fonética, ISFDyT N° 42' },
                    { label: 'Experiencia', val: 'Escolar, universitaria, corporativa y online' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-4 rounded-2xl bg-white border border-brandSecondary/10">
                      <span className="text-[10px] font-bold text-brandAccent uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="text-sm font-bold text-typographyMain">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              <div className="relative aspect-3/4 w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-brandAccent/10 rounded-[4rem] rotate-6" />
                <div className="absolute inset-0 bg-white rounded-[4rem] overflow-hidden border border-brandSecondary/10 shadow-2xl">
                  <Image
                    src="/images/NUEVA FOTO DE PERFIL PROFESIONAL.jpeg"
                    alt="Sofía Dávila Villa"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="relative px-8 py-8 rounded-[2rem] bg-brandAccent/8 border-l-4 border-brandAccent max-w-sm mx-auto">
                <span className="absolute -top-4 left-6 text-5xl text-brandAccent/30 font-serif leading-none select-none">&ldquo;</span>
                <p className="text-center text-typographyMain/70 font-light italic leading-relaxed text-base">
                  El inglés es la llave para habitar el mundo. Mi compromiso es brindarte un espacio donde el aprendizaje sea dinámico, cultural y genuino, transformando el idioma en una experiencia personal que te abra puertas para siempre.
                </p>
                <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-brandAccent mt-4">— Sofía Dávila Villa</p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DIFERENCIALES (Premium Grid) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6">Nuestro Valor Agregado</span>
            <h2 className="text-4xl md:text-6xl font-bold text-typographyMain font-display tracking-tight">
              ¿Por qué somos <span className="text-gradient">diferentes</span>?
            </h2>
            <p className="text-gray-500 text-lg font-light mt-8 leading-relaxed">
              Brindamos experiencias, no solo clases. Nuestra comunidad se basa en la personalización y la conexión cultural real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-brandSecondary/10 hover:shadow-premium hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-brandPrimary/50 rounded-2xl flex items-center justify-center text-brandAccent mb-6 group-hover:bg-brandAccent group-hover:text-white transition-all">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-typographyMain mb-4 uppercase tracking-widest">{b.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-600 transition-colors">
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISIÓN / VISIÓN (Bento Style) */}
      <section className="py-16 bg-brandPrimary/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandAccent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Misión',
                icon: <Target />,
                text: 'Brindar una experiencia significativa, dinámica y personalizada, donde cada estudiante desarrolle sus habilidades en un entorno motivador y culturalmente enriquecedor.'
              },
              {
                title: 'Visión',
                icon: <Eye />,
                text: 'Ser un instituto líder en enseñanza, innovadora, humana y cultural, acompañando a una comunidad global hacia la fluidez y la confianza total en el idioma.'
              },
              {
                title: 'Valores',
                icon: <Heart />,
                text: 'Creemos en el aprendizaje como un proceso compartido. El sentido de comunidad es nuestro pilar: acompañamos y celebramos cada logro juntos.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] border border-brandSecondary/10 space-y-8 shadow-premium group hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-brandPrimary/50 flex items-center justify-center text-2xl text-brandAccent shrink-0 group-hover:bg-brandAccent group-hover:text-white transition-all transform group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-normal font-display text-typographyMain">{item.title}</h3>
                </div>
                <p className="text-gray-500 font-light leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA (Modern) */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-brandAccent/10 rounded-3xl flex items-center justify-center text-brandAccent mx-auto mb-10">
            <Users size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display mb-8">
            Sé parte de nuestra <span className="text-gradient">comunidad</span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-12">
            Estamos listos para acompañarte en tu camino hacia el inglés real.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-16 px-12 items-center justify-center bg-brandAccent text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-brandAccent/20 hover:scale-105 transition-all"
          >
            Contactar ahora <ArrowRight className="ml-3" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}


