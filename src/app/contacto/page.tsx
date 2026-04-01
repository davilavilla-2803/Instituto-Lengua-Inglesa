'use client';

import PageHero from '@/components/ui/PageHero';
import Contact from '@/components/home/Contact';
import { siteConfig } from '@/lib/config';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, ArrowRight, Sparkles } from 'lucide-react';

/* ─── Datos ──────────────────────────────────────────────────────────────── */

const channels = [
  {
    icon: <MessageCircle size={28} />,
    label: 'WhatsApp',
    value: '+54 11 5952-1125',
    href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
    external: true,
  },
  {
    icon: <Mail size={28} />,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: <Instagram size={28} />,
    label: 'Instagram',
    value: `@${siteConfig.instagramHandle}`,
    href: siteConfig.instagramUrl,
    external: true,
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function ContactoPage() {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        label="Contacto"
        title={<>Hablemos <span className="text-gradient">Hoy</span></>}
        phrase="Cada gran historia comienza con un primer paso. El tuyo puede ser hoy. Escribinos y descubrí cómo el inglés puede transformar tu vida profesional y personal."
      />

      {/* 1. CANALES DE CONTACTO (Bento Style) */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.external ? '_blank' : undefined}
                rel={ch.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 bg-brandPrimary/30 rounded-[2.5rem] border border-brandSecondary/5 hover:border-brandAccent transition-all overflow-hidden text-center flex flex-col items-center gap-6"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/5 rounded-full blur-3xl group-hover:bg-brandAccent/10 transition-colors" />
                
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brandAccent shadow-sm group-hover:scale-110 transition-transform relative z-10">
                  {ch.icon}
                </div>
                
                <div className="relative z-10">
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brandAccent mb-2 block">{ch.label}</span>
                  <p className="text-xl font-bold text-typographyMain group-hover:text-brandAccent transition-colors">{ch.value}</p>
                </div>
                
                <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brandAccent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-0 translate-y-2">
                  Contactar <ArrowRight size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TEST DE NIVEL (Premium Banner) */}
      <section className="py-12 bg-white px-4">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[3.5rem] bg-typographyMain text-white p-12 md:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brandAccent rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="space-y-6 flex-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brandAccent/20 border border-brandAccent/30 text-brandAccent text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={14} /> Servicio Gratuito
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight">
                Conocé tu nivel de <span className="text-brandPrimary">inglés gratis</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">
                Escribinos hoy mismo, hacé nuestro test de nivelación personalizado y comenzá tu camino sin compromiso.
              </p>
            </div>
            
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hola Sofi! Quiero hacer el test de nivel gratuito.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 px-10 items-center justify-center bg-brandAccent text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-brandAccentDark transition-all scale-100 hover:scale-105 shrink-0"
            >
              Hacer el Test Ahora <ArrowRight className="ml-3" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. FORMULARIO */}
      <Contact />
    </div>
  );
}


