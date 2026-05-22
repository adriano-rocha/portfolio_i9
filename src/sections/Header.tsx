'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
];

const WHATSAPP_URL =
  'https://wa.me/5582996833455?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20para%20meu%20negócio.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#0B132B]/80 border-b border-[rgba(0,90,164,0.2)] shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/i9-logo.png"
            alt="i9 Studio"
            width={100}
            height={40}
            className="object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* NAV — Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#94A3B8] hover:text-[#F8FAFC] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA — Desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#F4D23B] hover:bg-[#e6c020] text-[#0B132B] text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(244,210,59,0.30)] hover:shadow-[0_4px_28px_rgba(244,210,59,0.45)] hover:-translate-y-0.5"
        >
          Iniciar Projeto
          <span className="text-base">↗</span>
        </a>

        {/* MENU — Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* MENU — Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0B132B]/95 backdrop-blur-md border-b border-[rgba(0,90,164,0.2)]`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#94A3B8] hover:text-[#F8FAFC] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F4D23B] text-[#0B132B] text-sm font-bold px-5 py-2.5 rounded-full mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Iniciar Projeto ↗
          </a>
        </nav>
      </div>
    </header>
  );
}