import type { Metadata } from 'next';
import { Inter, IM_Fell_DW_Pica, Great_Vibes, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MotionProvider from '@/components/providers/MotionProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const imFell = IM_Fell_DW_Pica({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-im-fell',
});

const scriptFont = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-script',
});

const displayFont = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://institutolenguainglesa.vercel.app'),
  title: 'Instituto Lengua Inglesa | Prof. Sofi Davila Villa',
  description: 'Cursos de inglés interactivos, dinámicos y adaptados a tus objetivos. Cursos regulares, speaking, preparación FCE y coaching de profesorado en San Miguel, Buenos Aires.',
  icons: {
    icon: '/images/logoSinFondo.png',
    apple: '/images/logoSinFondo.png',
  },
  keywords: ['inglés', 'cursos de inglés', 'FCE', 'Cambridge', 'speaking', 'San Miguel', 'Buenos Aires', 'profesora de inglés', 'Sofi Davila Villa'],
  openGraph: {
    title: 'Instituto Lengua Inglesa | Prof. Sofi Davila Villa',
    description: 'Cursos de inglés interactivos y personalizados. Aprendé con una metodología moderna.',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/logoSinFondo.png',
        width: 1200,
        height: 630,
        alt: 'Instituto Lengua Inglesa Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Lengua Inglesa | Prof. Sofi Davila Villa',
    description: 'Cursos de inglés interactivos y personalizados. Aprendé con una metodología moderna.',
    images: ['/images/logoSinFondo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${imFell.variable} ${scriptFont.variable} ${displayFont.variable} antialiased min-h-screen flex flex-col`}>
        <MotionProvider>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}

