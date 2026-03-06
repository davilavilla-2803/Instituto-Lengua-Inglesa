'use client';

import { motion } from 'framer-motion';
import { Users, Mic2, GraduationCap, Briefcase } from 'lucide-react';

const courses = [
    {
        icon: <Users size={32} className="text-brandPrimary" />,
        title: "Cursos Regulares",
        target: "Niños, adolescentes y adultos",
        description: "Clases estructuradas por niveles diseñadas para desarrollar todas las habilidades del idioma (Speaking, Listening, Reading, Writing) de forma integral y amena.",
    },
    {
        icon: <Mic2 size={32} className="text-brandPrimary" />,
        title: "Cursos de Speaking",
        target: "Jóvenes y adultos",
        description: "Pierde el miedo a hablar. Encuentros conversacionales dinámicos centrados 100% en la fluidez, la pronunciación correcta y la confianza al expresarte.",
    },
    {
        icon: <GraduationCap size={32} className="text-brandPrimary" />,
        title: "Preparación FCE",
        target: "Estudiantes avanzados",
        description: "Entrenamiento intensivo y estratégico para aprobar el examen First Certificate in English (B2 First) de Cambridge con simulacros y material oficial.",
    },
    {
        icon: <Briefcase size={32} className="text-brandPrimary" />,
        title: "Coaching de Profesorado",
        target: "Profesores y futuros docentes",
        description: "Mentoría especializada para estudiantes de profesorado o profes noveles que buscan mejorar sus metodologías, planificación y manejo del aula.",
    }
];

export default function Services() {
    return (
        <section id="servicios" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-wider text-brandPrimary uppercase mb-3">Nuestra Oferta</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-brandSecondary mb-6">Elige cómo quieres aprender</h3>
                    <p className="text-lg text-gray-600">
                        Cada estudiante es un mundo. Por eso, ofrecemos distintas capacitaciones adaptadas a tu nivel, edad y objetivo principal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-4xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group relative overflow-hidden"
                        >
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

                            <div className="bg-brandPrimary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                {course.icon}
                            </div>

                            <h4 className="text-xl font-bold text-brandSecondary mb-2">{course.title}</h4>
                            <p className="text-sm font-semibold text-brandPrimary mb-4">{course.target}</p>
                            <p className="text-gray-600 leading-relaxed">
                                {course.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
