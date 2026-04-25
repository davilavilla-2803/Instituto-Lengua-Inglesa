import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Link from 'next/link';
import Image from 'next/image';
import Certification from '@/components/home/Certification';
import { ArrowRight, Trophy, Globe, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instituto Lengua Inglesa | Prof. Sofi Davila Villa',
  description: 'Cursos de inglés interactivos, dinámicos y personalizados para todas las edades. Certificación internacional, experiencias culturales y viajes bilingües. San Miguel, Buenos Aires.',
  openGraph: {
    title: 'Instituto Lengua Inglesa | Prof. Sofi Davila Villa',
    description: 'Cursos de inglés interactivos, dinámicos y personalizados para todas las edades. Aprendé con una metodología moderna.',
    images: ['/images/logoSinFondo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logoSinFondo.png'],
  },
};

/* ─── Datos de Secciones ─────────────────────────────────────────────────── */

const highlights = [
  {
    icon: <Trophy size={24} />,
    title: 'Excelencia Académica',
    desc: 'Buscamos que cada estudiante descubra su valor personal poniendo el inglés en práctica.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Comunidad Global',
    desc: 'Más de 100 alumnos de todo el mundo conectando a través del idioma.',
  },
  {
    icon: <Heart size={24} />,
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

      {/* 2. HIGHLIGHTS (Bento Grid Style) - Compacted */}
      <section className="py-8 bg-brandPrimary/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group p-10 rounded-3xl bg-white border border-brandSecondary/15 shadow-sm hover:shadow-premium hover:bg-brandPrimary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-brandAccent group-hover:scale-110 group-hover:bg-brandAccent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-typographyMain mb-4 uppercase tracking-widest">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURSOS (Modernizado) */}
      <Services />

      {/* 5. TESTIMONIOS (Nuevo) */}
      <Testimonials />

      {/* 6. EXPERIENCIAS & VIAJES (Modernizado) */}
      <section className="py-8 bg-brandPrimary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <span className="text-3xl font-accent text-brandAccent mb-4 block">Vivir el inglés</span>
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
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
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
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
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

      {/* 6. CERTIFICACIÓN (Premium Re-design) */}
      <Certification />

      {/* 7. CTA FINAL (Modernizado) */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Contenido sin logo para un look más limpio */}
          
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
              Ver Propuesta Académica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


