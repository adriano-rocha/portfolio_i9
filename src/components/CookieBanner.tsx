"use client";

import { useState } from "react";

const COOKIE_KEY = "i9_cookie_consent";

// Função só para ler o consent na inicialização
function getInitialConsent() {
  if (typeof window === "undefined") return false;
  const consent = localStorage.getItem(COOKIE_KEY);
  return !consent;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(getInitialConsent());

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 9999,
        maxWidth: "420px",
        width: "calc(100% - 48px)",
        background: "#111820",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* ÍCONE + TEXTO */}
      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
        <span style={{ fontSize: "24px", flexShrink: 0 }}>🍪</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p
            style={{
              color: "#F8FAFC",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            Utilizamos cookies
          </p>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Usamos cookies para melhorar sua experiência, analisar o tráfego e
            personalizar conteúdo. Ao continuar, você concorda com nossa{" "}
            <a
              href="/politica-de-privacidade"
              style={{
                color: "#005AA4",
                textDecoration: "underline",
                fontWeight: 500,
              }}
            >
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>

      {/* BOTÕES */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleAccept}
          style={{
            flex: 1,
            background: "#F4D23B",
            color: "#0B132B",
            fontSize: "13px",
            fontWeight: 700,
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e6c020")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#F4D23B")}
        >
          Aceitar todos
        </button>

        <button
          onClick={handleDecline}
          style={{
            flex: 1,
            background: "transparent",
            color: "#94A3B8",
            fontSize: "13px",
            fontWeight: 500,
            padding: "10px 16px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.08)",
            cursor: "pointer",
            transition: "color 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#F8FAFC";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94A3B8";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          Recusar
        </button>
      </div>
    </div>
  );
}