'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface FormData {
  name: string;
  email: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const courses = [
  'Cursos Regulares',
  'Cursos de Speaking',
  'Preparación FCE',
  'Coaching de Profesorado',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: courses[0],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresá un email válido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    // TODO: conectar con backend o servicio de email (Resend, EmailJS, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', interest: courses[0], message: '' });
  };

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
                Comenzá tu viaje con el idioma inglés hoy mismo. Escribinos para consultar horarios, aranceles o agendar una entrevista de nivelación sin cargo.
              </p>
              <div className="space-y-6">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-xl font-medium hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  @{siteConfig.instagramHandle}
                </a>
              </div>
            </div>

            {/* Form Box */}
            <div className="p-12 lg:p-16">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8 gap-4">
                  <CheckCircle2 size={64} className="text-brandPrimary" />
                  <h4 className="text-2xl font-bold text-brandSecondary">¡Mensaje recibido!</h4>
                  <p className="text-gray-600">
                    Gracias <strong>{formData.name}</strong>, te contactamos a la brevedad.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 text-brandPrimary font-medium hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-gray-200 focus:ring-brandPrimary focus:border-brandPrimary'
                      }`}
                      placeholder="Tu nombre aquí..."
                    />
                    {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-gray-200 focus:ring-brandPrimary focus:border-brandPrimary'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Me interesa el curso de:
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary focus:outline-none transition-colors text-gray-700"
                    >
                      {courses.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mensaje <span className="text-gray-400 font-normal">(Opcional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary focus:outline-none transition-colors resize-none"
                      placeholder="Contanos cuáles son tus objetivos..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brandSecondary text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brandSecondary/90 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
