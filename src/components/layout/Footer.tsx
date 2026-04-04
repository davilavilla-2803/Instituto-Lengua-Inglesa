'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Mail, Instagram, ChevronRight } from 'lucide-react';
import { siteConfig, courses } from '@/lib/config';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [isLogoOpen, setIsLogoOpen] = useState(false);

  return (
    <footer className="bg-brandAccentDark text-brandPrimary/80 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative texture or glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brandAccent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* About / Brand */}
          <div className="space-y-8 -mt-4">
            <div className="flex items-center gap-5">
              <button onClick={() => setIsLogoOpen(true)} className="relative w-12 h-12 shrink-0 hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logoSinFondo.png"
                  alt="ILI Logo"
                  fill
                  sizes="48px"
                  quality={100}
                  className="object-contain"
                />
              </button>
              <Link href="/" className="flex flex-col group">
                <span className="text-sm font-medium text-white leading-tight font-brand italic whitespace-nowrap group-hover:text-brandAccent transition-colors">
                  Instituto Lengua Inglesa
                </span>
              </Link>
            </div>

            {/* Logo Lightbox */}
            <AnimatePresence>
              {isLogoOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsLogoOpen(false)}
                  className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative w-72 h-72 sm:w-96 sm:h-96"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src="/images/logoSinFondo.png"
                      alt="Instituto Lengua Inglesa Logo"
                      fill
                      sizes="384px"
                      quality={100}
                      className="object-contain"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <p className="text-sm font-light leading-relaxed max-w-xs text-brandPrimary/60">
              Formando hablantes seguros en todo el mundo. Clases interactivas diseñadas para conectar personas a través del lenguaje.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-brandAccent transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-brandAccent transition-all hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-8">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Quiénes Somos', 'Certificación', 'Experiencias', 'Viajes', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="group flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
                  >
                    <ChevronRight size={12} className="text-brandAccent group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cursos Populares */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-8">Nuestros Cursos</h4>
            <ul className="space-y-4">
              {courses.slice(0, 5).map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/cursos/${course.slug}`}
                    className="group flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
                  >
                    <ChevronRight size={12} className="text-brandAccent group-hover:translate-x-1 transition-transform" />
                    {course.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-8">Contacto</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brandAccent shrink-0">
                  <MapPin size={16} />
                </div>
                <p className="text-sm font-light leading-snug">
                  {siteConfig.location}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brandAccent shrink-0">
                  <Mail size={16} />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="text-sm font-light hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 px-6 items-center justify-center bg-white text-brandAccentDark rounded-full text-xs font-black uppercase tracking-widest hover:bg-brandAccent hover:text-white transition-all shadow-xl"
              >
                Inscribirme Hoy
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-brandPrimary/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Instituto Lengua Inglesa. Todos los derechos reservados.
          </p>
          <div className="text-[10px] font-bold text-brandPrimary/40 uppercase tracking-[0.2em] flex items-center gap-2">
            Powered by 
            <a
              href="https://gen12software.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brandAccent transition-colors"
            >
              Gen 12 Software
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

