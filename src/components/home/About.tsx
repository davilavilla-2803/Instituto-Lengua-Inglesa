'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl transform -rotate-2 hover:rotate-1 transition-transform duration-500 max-w-md mx-auto relative bg-brandSecondary">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
                alt="Sofi Davila Villa"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold text-brandPrimary mb-1">24</p>
              <p className="text-sm text-gray-600 font-medium">Años enseñando<br />con pasión</p>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-brandPrimary uppercase mb-3">Sobre Mí</h2>
            <h3 className="text-4xl font-bold text-brandSecondary mb-6">Hello! Soy Sofi Davila Villa 👋</h3>

            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                Soy <strong className="text-brandSecondary">Profesora y Licenciada en Lengua Inglesa</strong>, apasionada por los viajes, la música, la comida y la naturaleza.
              </p>
              <p>
                Desde <strong>Buenos Aires, Argentina al mundo</strong>, mi misión es transformar la forma en la que aprendés inglés. Creo en un aprendizaje dinámico que no solo te prepare para un examen, sino para la vida real, para viajar y para conectar con personas de todo el planeta.
              </p>
              <p>
                Mi metodología se basa en la comunicación activa, materiales auténticos y un ambiente libre de presiones donde equivocarse es parte del proceso hacia el éxito.
              </p>
            </div>

            <ul className="space-y-3 font-medium text-brandSecondary">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brandPrimary/10 flex items-center justify-center text-brandPrimary">🎓</span>
                Formación Académica de Excelencia
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brandPrimary/10 flex items-center justify-center text-brandPrimary">✈️</span>
                Enfoque práctico para turismo y negocios
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brandPrimary/10 flex items-center justify-center text-brandPrimary">💡</span>
                Clases 100% personalizadas
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
