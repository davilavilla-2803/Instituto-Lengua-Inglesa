'use client';


import { Send, Instagram } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contacto" className="py-24 bg-brandSecondary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandPrimary rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandAccent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Info Box */}
                        <div className="p-12 lg:p-16 bg-linear-to-br from-brandPrimary to-rose-400 text-white flex flex-col justify-center">
                            <h3 className="text-4xl font-bold mb-6">¿Damos el primer paso?</h3>
                            <p className="text-lg opacity-90 mb-10 text-balance">
                                Comienza tu viaje con el idioma inglés hoy mismo. Escríbenos para consultar horarios, aranceles o agendar una entrevista de nivelación sin cargo.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="https://instagram.com/lenguainglesasm"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-xl font-medium hover:translate-x-2 transition-transform"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                        <Instagram size={24} />
                                    </div>
                                    @lenguainglesasm
                                </a>
                            </div>
                        </div>

                        {/* Form Box */}
                        <div className="p-12 lg:p-16">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary transition-colors"
                                        placeholder="Tu nombre aquí..."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Me interesa el curso de:</label>
                                    <select
                                        id="interest"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary transition-colors text-gray-700"
                                    >
                                        <option>Cursos Regulares</option>
                                        <option>Cursos de Speaking</option>
                                        <option>Preparación FCE</option>
                                        <option>Coaching de Profesorado</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje (Opcional)</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary transition-colors resize-none"
                                        placeholder="Cuéntanos cuáles son tus objetivos..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brandSecondary text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brandSecondary/90 transition-colors group"
                                >
                                    Enviar Mensaje
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
