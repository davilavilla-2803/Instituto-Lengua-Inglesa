'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';
import { courses } from '@/lib/config';
import { 
  ArrowUpRight, Baby, Backpack, User, Briefcase, 
  MessageSquare, GraduationCap, Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Baby: Baby,
  Backpack: Backpack,
  User: User,
  Briefcase: Briefcase,
  MessageSquare: MessageSquare,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
};

export default function Services() {
  const isMobile = useIsMobile();

  return (
    <section id="servicios" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : {}}
            className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6 block"
          >
            Nuestras Propuestas
          </motion.span>
          <motion.h2 
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : { delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-typographyMain mb-8 font-display tracking-tight"
          >
            Elegí cómo querés <span className="text-gradient">aprender</span>
          </motion.h2>
          <motion.p 
            initial={isMobile ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : { delay: 0.2 }}
            className="text-gray-500 text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Cursos para todas las edades y objetivos. Grupos reducidos, clases 100% online y metodología comunicativa dinámica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, i) => {
            const Icon = iconMap[course.icon];
            return (
              <motion.div
                key={course.slug}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={`/cursos/${course.slug}`}
                  className="group flex flex-col bg-white rounded-[2.5rem] border border-brandSecondary/10 hover:shadow-premium transition-all duration-500 p-8 h-full"
                >
                  {/* Content Area */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brandPrimary/50 flex items-center justify-center text-brandAccent group-hover:bg-brandAccent group-hover:text-white transition-all transform group-hover:-rotate-6 shadow-sm">
                        {Icon && <Icon size={24} />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-brandAccent uppercase tracking-[0.2em]">
                          {course.shortTitle}
                        </span>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {course.ages}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-typographyMain mb-4 group-hover:text-brandAccent transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 grow">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-brandSecondary/5 mt-auto">
                      <span className="text-[10px] font-black uppercase tracking-widest text-typographyMain/40 group-hover:text-brandAccent">
                        Explorar Propuesta
                      </span>
                      <div className="w-10 h-10 rounded-full bg-brandAccent/5 flex items-center justify-center text-brandAccent group-hover:bg-brandAccent group-hover:text-white transition-all shadow-sm">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
