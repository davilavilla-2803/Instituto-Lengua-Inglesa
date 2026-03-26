'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Plane, Lightbulb, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-brandPrimary relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-20 -right-20 text-[15rem] font-bold text-brandSecondary/5 select-none font-display pointer-events-none">
        EDUCATOR
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-premium transform -rotate-2 hover:rotate-0 transition-all duration-700 max-w-md mx-auto relative group">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
                alt="Sofi Davila Villa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-brandAccentDark/30 to-transparent" />
            </div>


          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandAccent/5 text-brandAccent text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
              Sobre Mí
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-bold text-typographyMain mb-8 leading-tight">
              Hello! Soy <span className="text-gradient">Sofi Davila Villa</span> 👋
            </h3>

            <div className="space-y-6 text-lg text-gray-600 font-light mb-12">
              <p>
                Soy <strong className="text-typographyMain font-medium">Profesora y Licenciada en Lengua Inglesa</strong>, apasionada por los viajes, la música y la conexión intercultural.
              </p>
              <p>
                Desde <strong>Buenos Aires al mundo</strong>, mi misión es transformar la forma en la que aprendés inglés. Creo que no solo se trata de aprobar un examen, sino de abrir puertas a nuevas experiencias y personas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <GraduationCap size={20} />, title: "Académica", desc: "Formación de Excelencia" },
                { icon: <Plane size={20} />, title: "Práctica", desc: "Turismo & Negocios" },
                { icon: <Lightbulb size={20} />, title: "Metodología", desc: "100% Personalizada" },
                { icon: <ExternalLink size={20} />, title: "Certificada", desc: "Exámenes Internac." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-white/50 hover:bg-white transition-all shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-brandAccent/10 flex items-center justify-center text-brandAccent group-hover:bg-brandAccent group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brandAccent uppercase tracking-widest">{item.title}</p>
                    <p className="text-sm font-bold text-typographyMain">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

