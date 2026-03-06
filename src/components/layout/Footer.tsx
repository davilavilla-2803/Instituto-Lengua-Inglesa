import Link from 'next/link';
import { Instagram, MapPin, Mail } from 'lucide-react';

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

                    {/* Consultas */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Conecta</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center space-x-3">
                                <Instagram size={18} className="text-brandPrimary" />
                                <a href="https://instagram.com/lenguainglesasm" target="_blank" rel="noopener noreferrer" className="hover:text-brandPrimary transition-colors">
                                    @lenguainglesasm
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} className="text-brandPrimary" />
                                <span>San Miguel, Buenos Aires (y al mundo 🌍)</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-brandPrimary" />
                                <a href="mailto:contacto@lenguainglesa.com.ar" className="hover:text-brandPrimary transition-colors">
                                    ¡Escribinos!
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Instituto Lengua Inglesa. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
