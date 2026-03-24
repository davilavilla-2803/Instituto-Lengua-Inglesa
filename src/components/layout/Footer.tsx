import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-brandSecondary text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="text-brandPrimary">Instituto</span> Lengua Inglesa
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Formando hablantes seguros de todo el mundo. Cursos interactivos, dinámicos y adaptados a tus objetivos reales de aprendizaje.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#nosotros" className="hover:text-brandPrimary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-brandPrimary transition-colors">
                  Nuestros Cursos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-brandPrimary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Conecta */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Conecta</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                {/* Instagram SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brandPrimary shrink-0">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brandPrimary transition-colors">
                  @{siteConfig.instagramHandle}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                {/* WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-brandPrimary shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brandPrimary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-brandPrimary shrink-0" />
                <span>{siteConfig.location} 🌍</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brandPrimary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brandPrimary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Instituto Lengua Inglesa. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs opacity-80">
            Powered by{' '}
            <a 
              href="https://gen12software.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brandPrimary hover:text-white transition-colors duration-200 font-medium"
            >
              Gen 12 Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
