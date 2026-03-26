import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://institutolenguainglesa.vercel.app'),
  title: 'Instituto Lengua Inglesa | Prof. Lic. Sofi Davila Villa',
  description: 'Cursos de inglés interactivos, dinámicos y adaptados a tus objetivos. Cursos regulares, speaking, preparación FCE y coaching de profesorado en San Miguel, Buenos Aires.',
  icons: {
    icon: '/images/logo_transparente.png',
    apple: '/images/logo_transparente.png',
  },
  keywords: ['inglés', 'cursos de inglés', 'FCE', 'Cambridge', 'speaking', 'San Miguel', 'Buenos Aires', 'profesora de inglés', 'Sofi Davila Villa'],
  openGraph: {
    title: 'Instituto Lengua Inglesa | Prof. Lic. Sofi Davila Villa',
    description: 'Cursos de inglés interactivos y personalizados. Aprendé con una metodología moderna.',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Instituto Lengua Inglesa Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Lengua Inglesa | Prof. Lic. Sofi Davila Villa',
    description: 'Cursos de inglés interactivos y personalizados. Aprendé con una metodología moderna.',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}>
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
