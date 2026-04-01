'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Mail, Instagram, User, AtSign, BookOpen, MessageSquare } from 'lucide-react';
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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        setErrors({ name: data.error ?? 'Error al enviar. Intentá de nuevo.' });
        return;
      }
      setIsSuccess(true);
    } catch {
      setErrors({ name: 'Error de red. Verificá tu conexión.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', interest: courseOptions[0], message: '' });
  };

  return (
    <section id="contacto" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-160 h-160 bg-brandPrimary/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-48 -right-48 w-160 h-160 bg-brandAccent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-premium overflow-hidden border border-brandSecondary/10">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Info Sidebar */}
            <div className="lg:col-span-2 p-12 lg:p-16 bg-typographyMain text-white relative overflow-hidden flex flex-col justify-between gap-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandAccent/20 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-6 block">Comenzá Hoy</span>
                <h3 className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight mb-6">¿Damos el <span className="text-brandPrimary">primer paso</span>?</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Escribinos para consultar horarios, aranceles o agendar una entrevista de nivelación sin cargo. Estamos para acompañarte.
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-6 p-4 rounded-2xl glass border-white/5 hover:border-brandAccent transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brandAccent/20 flex items-center justify-center text-brandAccent shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brandAccent">WhatsApp</p>
                    <p className="text-sm font-bold text-white/90">+54 11 5952-1125</p>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-6 p-4 rounded-2xl glass border-white/5 hover:border-brandPrimary transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brandPrimary/20 flex items-center justify-center text-brandPrimary shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brandPrimary">Email</p>
                    <p className="text-sm font-bold text-white/90 truncate max-w-[150px] sm:max-w-none">{siteConfig.email}</p>
                  </div>
                </a>

                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-4 rounded-2xl glass border-white/5 hover:border-brandAccent transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brandAccent/20 flex items-center justify-center text-brandAccent shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Instagram size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brandAccent">Instagram</p>
                    <p className="text-sm font-bold text-white/90">@{siteConfig.instagramHandle}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-3 p-12 lg:p-16 bg-brandPrimary/40 shrink-0">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-6 py-12">
                  <div className="w-20 h-20 rounded-full bg-brandAccent/10 flex items-center justify-center text-brandAccent">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold font-display text-typographyMain">¡Mensaje enviado con éxito!</h4>
                  <p className="text-gray-500 font-light text-lg">Gracias <strong>{formData.name}</strong>, nos comunicaremos con vos a la brevedad para darte toda la información.</p>
                  <button onClick={handleReset} className="mt-4 px-8 py-3 rounded-full border border-brandAccent text-brandAccent text-[10px] font-black uppercase tracking-widest hover:bg-brandAccent hover:text-white transition-all">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        <User size={14} className="text-brandAccent" /> Nombre Completo
                      </label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        placeholder="Tu nombre aquí..."
                        className={`w-full px-4 py-4 border-b-2 bg-white rounded-t-xl text-sm focus:outline-none transition-all placeholder:text-gray-400 font-medium ${errors.name ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-brandAccent'}`}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.name}</p>}
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        <AtSign size={14} className="text-brandAccent" /> Email
                      </label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        placeholder="tu@email.com"
                        className={`w-full px-4 py-4 border-b-2 bg-white rounded-t-xl text-sm focus:outline-none transition-all placeholder:text-gray-400 font-medium ${errors.email ? 'border-red-400 bg-red-50/30' : 'border-gray-200 focus:border-brandAccent'}`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="interest" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                      <BookOpen size={14} className="text-brandAccent" /> Me interesa el curso de
                    </label>
                    <select
                      id="interest" name="interest"
                      value={formData.interest} onChange={handleChange}
                      className="w-full px-4 py-4 border-b-2 border-gray-200 bg-white rounded-t-xl text-sm focus:outline-none focus:border-brandAccent transition-all text-gray-700 font-medium appearance-none cursor-pointer"
                    >
                      {courseOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                      <MessageSquare size={14} className="text-brandAccent" /> Mensaje
                    </label>
                    <textarea
                      id="message" name="message" rows={3}
                      value={formData.message} onChange={handleChange}
                      placeholder="Contanos tus objetivos y disponibilidad..."
                      className="w-full px-4 py-4 border-b-2 border-gray-200 bg-white rounded-t-xl text-sm focus:outline-none focus:border-brandAccent transition-all resize-none placeholder:text-gray-400 font-medium min-h-[100px]"
                    />
                  </div>

                  <button
                    type="submit" disabled={isLoading}
                    className="w-full h-16 bg-brandAccent text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-4 hover:bg-brandAccentDark hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brandAccent/20 disabled:opacity-70 disabled:pointer-events-none group"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Enviar Consulta <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-gray-400 font-medium uppercase tracking-widest leading-relaxed">
                    Al enviar, aceptás que nos contactemos con vos para brindarte información comercial.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


