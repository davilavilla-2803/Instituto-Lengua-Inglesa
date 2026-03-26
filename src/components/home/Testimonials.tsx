'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  date: string;
  stars: number;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Sofi! Hermosa experiencia la clase de speaking. Me sentí súper cómoda y siento que de a poco estoy avanzando. Muchísimas gracias!',
    name: 'Lara Giordan Fernández',
    date: 'Marzo, 2026',
    stars: 5
  },
  {
    text: 'Una vez más vuelvo a elegir el curso de Speaking porque el año pasado mejoré muchísimo mis listening y speaking skills. Este año busco certificar internacionalmente a través de Trinity College Exams!',
    name: 'Enzo Agnone',
    date: 'Marzo, 2026',
    stars: 5
  },
  {
    text: 'Muchas gracias Sofi por ser tan buena y amable con nosotros! Estamos muy cómodos estudiando en 3rd Year Adults.',
    name: 'Marcos Villalba y Analía Ojeda',
    date: 'Marzo, 2026',
    stars: 5
  },
  {
    text: 'Yo la verdad re contento de haber arrancado inglés, me sentí muy cómodo. La profe y mis compañeros excelente. Estoy muy esperanzado y motivado que voy a aprender inglés, así que super bien!',
    name: 'Ramiro Zarini',
    date: 'Marzo, 2026',
    stars: 5
  },
  {
    text: 'Thank you so much for your wonderful comments and for such encouraging feedback. I truly enjoyed the course and learned a lot. Your support and guidance played a big role in my confidence and growth.',
    name: 'Sofía Stark',
    date: 'Dic, 2025',
    stars: 5
  },
  {
    text: 'Thank you, Sofi, for all the support throughout this year. I\'m very happy with my progress and grateful for your support.',
    name: 'Paula Vallejo',
    date: 'Dic, 2025',
    stars: 5
  },
  {
    text: 'I really enjoyed today\'s class. I felt more confident today. Thank you for being such a patient and motivating teacher.',
    name: 'Melina Amantini',
    role: 'Estudiante de profesorado de inglés',
    date: 'Dic, 2025',
    stars: 5
  },
  {
    text: 'Hi Sofi! Te quería contar que aprobé el final de fonética 2. Quería agradecerte por todo lo que me ayudaste, el profe me felicitó porque mejoré mucho en transcripción, mil mil gracias Sofi!',
    name: 'Vanina Romero',
    role: 'Estudiante de profesorado de inglés',
    date: 'Dic, 2025',
    stars: 5
  },
];

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section className="py-32 bg-brandPrimary/30 relative overflow-hidden">
      {/* Background Decor - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brandAccent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brandSecondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : {}}
            className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6 block"
          >
            Nuestra Comunidad
          </motion.span>
          <motion.h2 
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : { delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-typographyMain mb-8 font-display tracking-tight"
          >
            Lo que dicen <span className="text-gradient">nuestros alumnos</span>
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? { duration: 0 } : { delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="bg-white p-8 rounded-[2.5rem] border border-brandSecondary/10 hover:shadow-premium transition-all duration-500 group relative overflow-hidden">
                <Quote 
                  className="absolute -right-4 -top-4 w-24 h-24 text-brandAccent/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" 
                />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars || 5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brandAccent text-brandAccent" />
                  ))}
                </div>

                <p className="text-gray-600 font-light leading-relaxed mb-8 relative z-10 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-brandSecondary/5">
                  <div className="w-10 h-10 rounded-full bg-brandAccent/10 flex items-center justify-center text-brandAccent font-bold text-xs">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-typographyMain">{t.name}</h4>
                    {t.role && (
                      <p className="text-[10px] font-medium text-brandAccent uppercase tracking-widest mt-0.5">
                        {t.role}
                      </p>
                    )}
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {t.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
