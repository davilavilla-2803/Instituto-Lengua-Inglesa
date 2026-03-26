'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { siteConfig, courses } from '@/lib/config';

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

const courseOptions = courses.map((c) => c.shortTitle);

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: courseOptions[0],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    // TODO: conectar con Resend, EmailJS u otro servicio
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', interest: courseOptions[0], message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-brandSecondary/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandPrimary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandAccent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Info */}
            <div className="p-12 lg:p-14 bg-brandAccent text-white flex flex-col justify-center gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">¿Damos el primer paso?</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Escribinos para consultar horarios, aranceles o agendar una entrevista de nivelación sin cargo.
                </p>
              </div>
              <div className="space-y-5 text-sm">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:translate-x-1 transition-transform"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span className="font-medium">+54 11 5952-1125</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>{siteConfig.email}</span>
                </a>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <span>@{siteConfig.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-14">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-8">
                  <CheckCircle2 size={56} className="text-brandAccent" />
                  <h4 className="text-2xl font-bold text-typographyMain">¡Mensaje recibido!</h4>
                  <p className="text-gray-500 text-sm">Gracias <strong>{formData.name}</strong>, te contactamos a la brevedad.</p>
                  <button onClick={handleReset} className="mt-4 text-brandAccent text-sm font-medium hover:underline">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      placeholder="Tu nombre aquí..."
                      className={`w-full px-4 py-3 border text-sm focus:ring-2 focus:outline-none transition-colors ${errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-brandAccent/30 focus:border-brandAccent'}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="tu@email.com"
                      className={`w-full px-4 py-3 border text-sm focus:ring-2 focus:outline-none transition-colors ${errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-brandAccent/30 focus:border-brandAccent'}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Me interesa el curso de
                    </label>
                    <select
                      id="interest" name="interest"
                      value={formData.interest} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:ring-2 focus:ring-brandAccent/30 focus:border-brandAccent focus:outline-none text-gray-700"
                    >
                      {courseOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Mensaje <span className="text-gray-400 font-normal normal-case tracking-normal">(Opcional)</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={formData.message} onChange={handleChange}
                      placeholder="Contanos cuáles son tus objetivos..."
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:ring-2 focus:ring-brandAccent/30 focus:border-brandAccent focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit" disabled={isLoading}
                    className="w-full bg-brandAccent text-white text-xs font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-brandAccent/90 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <><svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Enviando...</>
                    ) : (
                      <>Enviar Mensaje<Send size={15} className="group-hover:translate-x-1 transition-transform" /></>
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
