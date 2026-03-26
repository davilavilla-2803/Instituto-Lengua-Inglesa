import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { courses } from '@/lib/config';
import { ArrowRight, Trophy, Globe, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instituto Lengua Inglesa | Prof. Lic. Sofi Davila Villa',
  description: 'Cursos de inglés interactivos, dinámicos y personalizados para todas las edades. Certificación internacional, experiencias culturales y viajes bilingües. San Miguel, Buenos Aires.',
};

/* ─── Datos de Secciones ─────────────────────────────────────────────────── */

const highlights = [
  {
    icon: <Trophy className="text-brandAccent" size={24} />,
    title: 'Excelencia Académica',
    desc: 'Buscamos que cada estudiante descubra su valor personal poniendo el inglés en práctica.',
  },
  {
    icon: <Globe className="text-brandAccent" size={24} />,
    title: 'Comunidad Global',
    desc: 'Más de 100 alumnos de todo el mundo conectando a través del idioma.',
  },
  {
    icon: <Heart className="text-brandAccent" size={24} />,
    title: 'Calidez Humana',
    desc: 'Un espacio diseñado para inspirarte y acompañarte en cada paso de tu aprendizaje.',
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO (Modernizado) */}
      <Hero />

      {/* 2. HIGHLIGHTS (Bento Grid Style) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="group p-10 rounded-3xl bg-brandPrimary/30 border border-brandSecondary/10 hover:bg-white hover:shadow-premium transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-brandAccent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-typographyMain mb-4 uppercase tracking-widest">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOBRE MÍ (Modernizado) */}
      <About />

      {/* 4. CURSOS (Modernizado) */}
      <Services />

      {/* 5. TESTIMONIOS (Nuevo) */}
      <Testimonials />

      {/* 6. EXPERIENCIAS & VIAJES (Modernizado) */}
      <section className="py-24 bg-brandPrimary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-4 block">Expandí tus horizontes</span>
              <h2 className="text-4xl md:text-5xl font-bold text-typographyMain font-display tracking-tight">
                El mundo es el aula más <span className="text-gradient">grande</span> que existe
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Combinamos el aprendizaje del idioma con experiencias reales: desde cafecitos bilingües en Buenos Aires hasta viajes internacionales diseñados para vivir el inglés.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/experiencias" className="group relative aspect-video rounded-3xl overflow-hidden shadow-premium">
              <Image 
                src="/images/ENGLISH%20AND%20COFFEE.jpeg" 
                alt="Experiencias Culturales" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-2">Cultura</p>
                <h3 className="text-2xl font-bold text-white mb-4">English & Coffee</h3>
                <div className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  Ver Experiencias <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            <Link href="/viajes" className="group relative aspect-video rounded-3xl overflow-hidden shadow-premium">
              <Image 
                src="/images/MADRYN%202026%20DELFINES.jpeg" 
                alt="Viajes Bilingües" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-2">Viajes</p>
                <h3 className="text-2xl font-bold text-white mb-4">Destinos 2026</h3>
                <div className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  Ver Destinos <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICACIÓN (Modernizado) */}
      <section className="py-24 bg-brandAccentDark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandAccent/20 rounded-full blur-[120px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-8 block">Certificación Internacional</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display tracking-tight">Validá tu inglés ante <span className="text-brandPrimary">el mundo</span></h2>
          <p className="text-brandPrimary/70 text-lg font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            Preparate para los exámenes más prestigiosos. Somos centro de preparación oficial para certificaciones internacionales.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {['Trinity College London', 'Cambridge — FCE / CAE', 'IELTS & TOEFL'].map((cert) => (
              <div key={cert} className="px-8 py-4 rounded-2xl glass border-white/10 text-xs font-black uppercase tracking-widest">
                {cert}
              </div>
            ))}
          </div>

          <Link
            href="/certificacion"
            className="inline-flex h-14 px-10 items-center justify-center bg-white text-brandAccentDark rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brandAccent hover:text-white transition-all shadow-2xl"
          >
            Más Información
          </Link>
        </div>
      </section>

      {/* 7. CTA FINAL (Modernizado) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-12">
            <Image
              src="/images/logo.png"
              alt="ILI Logo"
              width={100}
              height={100}
              className="rounded-3xl shadow-premium border border-brandSecondary/10"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brandAccent rounded-full flex items-center justify-center text-white shadow-lg">
              <Heart size={14} fill="currentColor" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-typographyMain mb-8 tracking-tight font-display">
            ¿Listo para dar el <span className="text-gradient">primer paso</span>?
          </h2>
          <p className="text-gray-500 text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Escribinos, hacé el test de nivel gratuito y comenzá a disfrutar tu versión bilingüe. Sin compromiso, 100% acompañamiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contacto"
              className="px-12 py-5 bg-brandAccent text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-brandAccentDark hover:scale-105 transition-all shadow-xl shadow-brandAccent/20"
            >
              Contactar por WhatsApp
            </Link>
            <Link
              href="/cursos"
              className="px-12 py-5 glass text-typographyMain text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-brandPrimary transition-all border-brandSecondary/20"
            >
              Ver Propuesta Educativa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

