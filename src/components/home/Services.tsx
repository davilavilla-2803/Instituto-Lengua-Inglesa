'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { courses } from '@/lib/config';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6 block"
          >
            Nuestra Oferta
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-typographyMain mb-8 font-display tracking-tight"
          >
            Elegí cómo querés <span className="text-gradient">aprender</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Cursos para todas las edades y objetivos. Grupos reducidos, clases 100% online y metodología comunicativa dinámica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/cursos/${course.slug}`}
                className="group relative h-full flex flex-col bg-brandPrimary/30 rounded-3xl p-8 border border-brandSecondary/10 hover:bg-white hover:shadow-premium transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background circle */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brandAccent/5 rounded-full blur-2xl group-hover:bg-brandAccent/10 transition-colors" />

                <div className="relative z-10 flex-1 flex flex-col">
                  <span className="text-5xl block mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 origin-left">
                    {course.icon}
                  </span>
                  
                  <p className="text-[10px] font-black text-brandAccent uppercase tracking-[0.2em] mb-3">
                    {course.ages}
                  </p>

                  <h3 className="text-xl font-bold text-typographyMain mb-4 group-hover:text-brandAccent transition-colors leading-tight">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 grow">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-brandSecondary/10 mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-widest text-typographyMain/40 group-hover:text-brandAccent transition-colors">
                      Explorar Curso
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brandAccent/10 flex items-center justify-center text-brandAccent group-hover:bg-brandAccent group-hover:text-white transition-all transform group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

