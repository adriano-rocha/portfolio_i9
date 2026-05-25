"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
];

const WHATSAPP_URL =
  "https://wa.me/5582996833455?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20para%20meu%20negócio.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[rgba(0,90,164,0.2)] g-bg-dark/80 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div
          className="relative flex h-20 w-full items-center justify-between"
          style={{ padding: "0 48px" }}
        >
          {/* LOGO */}
          <div style={{ marginLeft: "32px" }}>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="i9 Studio"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* NAV — Desktop */}
          <nav
            className="hidden md:flex items-center gap-6"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium tracking-wide text-text-muted transition-colors duration-200 hover:text-[#f1e311]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* BOTÃO — Desktop */}
          <div
            className="hidden md:flex items-center"
            style={{ marginRight: "0px" }}
          >
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-brand-yellow font-bold text-bg-dark shadow-btn-yellow transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e6c020] hover:shadow-[0_4px_28px_rgba(244,210,59,0.45)]"
              style={{ padding: "6px 16px", fontSize: "13px" }}
            >
              Iniciar Projeto
              <span>↗</span>
            </Link>
          </div>

          {/* HAMBURGER — Mobile */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex flex-col gap-1.5 p-2"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-0.5 w-6 bg-text-light transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-text-light transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-text-light transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU — fora do header, no root */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(11,19,43,0.98)",
            display: "flex",
            flexDirection: "column",
            paddingTop: "80px",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "32px 24px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#94A3B8",
                  fontSize: "20px",
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#F4D23B",
                color: "#0B132B",
                fontSize: "15px",
                fontWeight: 700,
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                width: "100%",
              }}
            >
              Iniciar Projeto
              <span>↗</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}