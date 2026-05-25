"use client"; 

const INSTAGRAM_URL = "https://www.instagram.com/i9criacaodesite/";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080D1A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap" as const,
      }}
    >
      {/* NOME DA EMPRESA */}
      <span
        style={{
          color: "#475569",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        © {new Date().getFullYear()} i9 Criação de Sites. Todos os direitos reservados.
      </span>

      {/* SEPARADOR */}
      <span style={{ color: "#1e2d3d", fontSize: "14px" }}>·</span>

      {/* INSTAGRAM */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram i9 Studio"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#475569",
          fontSize: "13px",
          fontWeight: 500,
          textDecoration: "none",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
        @i9criacaodesite
      </a>
    </footer>
  );
}