'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, 
  Baby, Backpack, User, Briefcase, MessageSquare, GraduationCap, Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses } from '@/lib/config';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Baby: Baby,
  Backpack: Backpack,
  User: User,
  Briefcase: Briefcase,
  MessageSquare: MessageSquare,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
};

const mainLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes Somos', href: '/quienes-somos' },
  { name: 'Certificación', href: '/certificacion' },
  { name: 'Experiencias', href: '/experiencias' },
  { name: 'Viajes', href: '/viajes' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setIsCoursesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileCoursesOpen(false);
    setIsCoursesOpen(false);
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);
  const isCoursesActive = pathname.startsWith('/cursos');

  const linkClass = (active: boolean) =>
    `text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 px-2 py-1 relative group ${
      active ? 'text-brandAccent' : 'text-typographyMain/60 hover:text-typographyMain'
    }`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 py-4 ${
      isScrolled ? 'top-2' : 'top-0'
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isScrolled ? 'max-w-6xl' : 'max-w-7xl'
      }`}>
        <div className={`navbar-container relative flex justify-between items-center h-20 px-6 transition-all duration-500 rounded-3xl ${
          isScrolled ? 'glass shadow-premium' : 'bg-transparent'
        }`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 shrink-0 overflow-visible group-hover:scale-105 transition-all">
              <Image 
                src="/images/logoSinFondo.png"
                alt="Logo"
                fill
                sizes="56px"
                className="object-contain"
                style={{ imageRendering: 'crisp-edges' }}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[1.3rem] font-medium text-typographyMain leading-none font-brand group-hover:text-brandAccent transition-colors italic whitespace-nowrap">
                Instituto Lengua Inglesa
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {mainLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(isActive(link.href))}>
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brandAccent transform origin-right transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'}`} />
              </Link>
            ))}

            {/* Cursos Dropdown */}
            <div ref={coursesRef} className="relative">
              <button
                onClick={() => setIsCoursesOpen((v) => !v)}
                className={`flex items-center gap-1 ${linkClass(isCoursesActive)}`}
                aria-expanded={isCoursesOpen}
              >
                Cursos
                <ChevronDown size={12} className={`transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brandAccent transform origin-right transition-transform duration-300 ${isCoursesActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'}`} />
              </button>

              <AnimatePresence>
                {isCoursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 py-3 z-50 overflow-hidden"
                  >
                    <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                      {courses.map((course) => {
                        const Icon = iconMap[course.icon];
                        return (
                          <Link
                            key={course.slug}
                            href={`/cursos/${course.slug}`}
                            className={`flex items-center gap-4 px-6 py-4 text-[10px] uppercase tracking-widest transition-all hover:bg-brandAccent/5 hover:pl-8 group/item ${
                              pathname === `/cursos/${course.slug}`
                                ? 'text-brandAccent font-bold'
                                : 'text-typographyMain/60 hover:text-brandAccent'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg bg-brandPrimary/50 flex items-center justify-center text-brandAccent group-hover/item:scale-110 group-hover/item:bg-brandAccent group-hover/item:text-white transition-all">
                              {Icon && <Icon size={14} />}
                            </div>
                            <span>{course.shortTitle}</span>
                          </Link>
                        );
                      })}
                    </div>
                    
                    <div className="mt-2 p-2 px-4 border-t border-gray-100/50">
                      <Link
                        href="/cursos"
                        className="flex items-center justify-between w-full px-4 py-4 bg-brandPrimary/50 text-[10px] font-black text-brandAccent uppercase tracking-widest hover:bg-brandAccent hover:text-white transition-all rounded-xl"
                      >
                        Explorar Todos <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(isActive(link.href))}>
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brandAccent transform origin-right transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'}`} />
              </Link>
            ))}

            <Link
              href="/contacto"
              className="ml-4 px-8 py-3 bg-brandAccent text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brandAccentDark hover:scale-105 transition-all rounded-full shadow-lg shadow-brandAccent/20"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-3 bg-white/50 backdrop-blur-sm rounded-2xl text-typographyMain hover:text-brandAccent transition-all border border-white/20"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-brandPrimary/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full overflow-y-auto px-6 py-12">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 p-4 bg-white rounded-full shadow-xl"
              >
                <X size={24} />
              </button>

              <div className="space-y-6">
                {mainLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 text-3xl font-bold tracking-tight ${
                      isActive(link.href) ? 'text-brandAccent' : 'text-typographyMain'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="py-4">
                  <button
                    onClick={() => setIsMobileCoursesOpen((v) => !v)}
                    className={`w-full flex items-center justify-between text-3xl font-bold tracking-tight ${
                      isCoursesActive ? 'text-brandAccent' : 'text-typographyMain'
                    }`}
                  >
                    <span>Cursos</span>
                    <ChevronDown size={24} className={`transition-transform ${isMobileCoursesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileCoursesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/30 rounded-3xl mt-4 px-6 space-y-4"
                      >
                        <Link href="/cursos" className="block py-4 text-sm font-black uppercase tracking-widest text-brandAccent">
                          Ver Todos
                        </Link>
                        {courses.map((course) => {
                          const Icon = iconMap[course.icon];
                          return (
                            <Link
                              key={course.slug}
                              href={`/cursos/${course.slug}`}
                              className="flex items-center gap-4 py-4 border-t border-brandAccent/10 group/item"
                            >
                              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brandAccent group-hover/item:bg-brandAccent group-hover/item:text-white transition-all shadow-sm">
                                {Icon && <Icon size={20} />}
                              </div>
                              <span className="text-sm font-bold uppercase tracking-widest text-typographyMain">{course.shortTitle}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {mainLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 text-3xl font-bold tracking-tight ${
                      isActive(link.href) ? 'text-brandAccent' : 'text-typographyMain'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-12 pb-6">
                <Link
                  href="/contacto"
                  className="block w-full py-6 bg-brandAccent text-white text-center text-lg font-bold rounded-full shadow-2xl shadow-brandAccent/40"
                >
                  Contactar Ahora
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


