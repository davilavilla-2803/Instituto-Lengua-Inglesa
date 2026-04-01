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
        <div className="rounded-3xl shadow-premium overflow-hidden border border-brandSecondary/10">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Sidebar */}
            <div className="lg:col-span-2 p-10 lg:p-14 bg-brandAccent text-white relative overflow-hidden flex flex-col gap-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-[10px] font-black tracking-[0.4em] uppercase text-white/80">
                  Comenzá Hoy
                </span>
                <h3 className="text-4xl font-bold font-display tracking-tight leading-tight">
                  ¿Damos el <span className="text-brandPrimary">primer paso</span>?
                </h3>
                <p className="text-white/70 text-base font-light leading-relaxed">
                  Escribinos para consultar horarios, aranceles o agendar una entrevista de nivelación sin cargo.
                </p>
              </div>

              <div className="relative z-10 space-y-3">
                {[
                  {
                    icon: <MessageCircle size={20} />,
                    label: 'WhatsApp',
                    value: '+54 11 5952-1125',
                    href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
                    external: true,
                  },
                  {
                    icon: <Mail size={20} />,
                    label: 'Email',
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                    external: false,
                  },
                  {
                    icon: <Instagram size={20} />,
                    label: 'Instagram',
                    value: `@${siteConfig.instagramHandle}`,
                    href: siteConfig.instagramUrl,
                    external: true,
                  },
                ].map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      {ch.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-white/50 mb-0.5">{ch.label}</p>
                      <p className="text-sm font-bold text-white">{ch.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-10 lg:p-14 bg-white">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-6 py-12">
                  <div className="w-20 h-20 rounded-full bg-brandAccent/10 flex items-center justify-center text-brandAccent">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold font-display text-typographyMain">¡Mensaje enviado con éxito!</h4>
                  <p className="text-gray-500 font-light text-lg">Gracias <strong>{formData.name}</strong>, nos comunicaremos con vos a la brevedad.</p>
                  <button onClick={handleReset} className="mt-4 px-8 py-3 rounded-full border border-brandAccent text-brandAccent text-[10px] font-black uppercase tracking-widest hover:bg-brandAccent hover:text-white transition-all">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-typographyMain/50">
                        <User size={12} className="text-brandAccent" /> Nombre Completo
                      </label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        placeholder="Tu nombre aquí..."
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brandAccent/20 transition-all placeholder:text-gray-300 font-medium text-typographyMain ${errors.name ? 'border-red-300 bg-red-50/30' : 'border-brandSecondary/20 focus:border-brandAccent bg-brandPrimary/10'}`}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-typographyMain/50">
                        <AtSign size={12} className="text-brandAccent" /> Email
                      </label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        placeholder="tu@email.com"
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brandAccent/20 transition-all placeholder:text-gray-300 font-medium text-typographyMain ${errors.email ? 'border-red-300 bg-red-50/30' : 'border-brandSecondary/20 focus:border-brandAccent bg-brandPrimary/10'}`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-typographyMain/50">
                      <BookOpen size={12} className="text-brandAccent" /> Me interesa el curso de
                    </label>
                    <select
                      id="interest" name="interest"
                      value={formData.interest} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-brandSecondary/20 bg-brandPrimary/10 text-sm focus:outline-none focus:border-brandAccent focus:ring-2 focus:ring-brandAccent/20 transition-all text-typographyMain font-medium cursor-pointer"
                    >
                      {courseOptions.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-typographyMain/50">
                      <MessageSquare size={12} className="text-brandAccent" /> Mensaje
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={formData.message} onChange={handleChange}
                      placeholder="Contanos tus objetivos y disponibilidad..."
                      className="w-full px-4 py-3.5 rounded-xl border border-brandSecondary/20 bg-brandPrimary/10 text-sm focus:outline-none focus:border-brandAccent focus:ring-2 focus:ring-brandAccent/20 transition-all resize-none placeholder:text-gray-300 font-medium text-typographyMain"
                    />
                  </div>

                  <button
                    type="submit" disabled={isLoading}
                    className="w-full h-14 bg-brandAccent text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl flex items-center justify-center gap-3 hover:bg-brandAccentDark hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-brandAccent/20 disabled:opacity-70 disabled:pointer-events-none group"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Enviar Consulta <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></>
                    )}
                  </button>
                  <p className="text-center text-[9px] text-gray-400 font-medium uppercase tracking-widest">
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


