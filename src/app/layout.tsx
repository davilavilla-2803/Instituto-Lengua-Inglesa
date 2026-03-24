import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instituto Lengua Inglesa | Prof. Lic. Sofi Davila Villa',
  description: 'Cursos de inglés interactivos, dinámicos y adaptados a tus objetivos. Cursos regulares, speaking, preparación FCE y coaching de profesorado en San Miguel, Buenos Aires.',
  keywords: ['inglés', 'cursos de inglés', 'FCE', 'Cambridge', 'speaking', 'San Miguel', 'Buenos Aires', 'profesora de inglés', 'Sofi Davila Villa'],
  openGraph: {
    title: 'Instituto Lengua Inglesa | Prof. Lic. Sofi Davila Villa',
    description: 'Cursos de inglés interactivos y personalizados. Aprendé con una metodología moderna.',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
