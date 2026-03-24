'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Servicios', href: '/#servicios' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-linear-to-r from-brandPrimary to-rose-400 bg-clip-text text-transparent">
              Lengua Inglesa
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brandPrimary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contacto"
              className="bg-brandSecondary text-white px-6 py-2.5 rounded-full font-medium hover:bg-brandSecondary/90 transition-all transform hover:scale-105 shadow-sm"
            >
              Comenzar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brandPrimary focus:outline-none"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brandPrimary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-3 py-3 text-base font-medium text-white bg-brandSecondary hover:bg-brandSecondary/90 rounded-md text-center"
            >
              Comenzar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
