'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Decor -> Glassmorphism shapes */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-brandPrimary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brandAccent/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brandPrimary/10 text-brandPrimary text-sm font-semibold mb-6">
                            From San Miguel to the World 🌍
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-brandSecondary mb-6 leading-tight text-balance">
                            Domina el inglés con <span className="text-brandPrimary">confianza</span> y de forma dinámica
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 text-balance">
                            Cursos diseñados para ti, desde niveles básicos hasta certificaciones internacionales. Aprende a comunicarte sin barreras con una metodología moderna.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#servicios"
                                className="px-8 py-4 bg-brandSecondary text-white rounded-full font-medium hover:bg-brandSecondary/90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                            >
                                Conocer Cursos
                            </a>
                            <a
                                href="#contacto"
                                className="px-8 py-4 bg-white text-brandSecondary border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center"
                            >
                                Hablar con Sofi
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                    >
                        {/* The actual image would go here. Using a stylized placeholder aesthetic */}
                        <div className="relative w-full max-w-md aspect-4/5 rounded-4xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-linear-to-tr from-brandSecondary to-gray-800 p-1">
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                                alt="Clase de inglés interactiva"
                                className="w-full h-full object-cover rounded-[1.8rem] opacity-90 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-xl">Prof. Lic. en Lengua Inglesa</p>
                                    <p className="text-brandPrimary">Conectando mundos</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -left-6 bottom-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                            <p className="text-3xl">🌸</p>
                        </div>
                        <div className="absolute -right-6 top-20 bg-white p-4 rounded-2xl shadow-xl animate-pulse">
                            <p className="text-sm font-bold text-brandSecondary">+500</p>
                            <p className="text-xs text-gray-500">Alumnos Felices</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
