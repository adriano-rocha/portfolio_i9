"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-dark"
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blueopacity-[0.08] blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-100 w-100 rounded-full bg-brand-blue opacity-[0.05] blur-[80px]" />
      </div>

      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(248,250,252,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248,250,252,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTEÚDO */}
      <div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pb-20 md:px-12"
        style={{ paddingTop: "140px" }}
      >
        {/* HEADLINE */}
        <h1
          className="text-center font-extrabold leading-[1.1] tracking-tight text-text-light"
          style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
        >
          Desenvolvemos sites de{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F4D23B 0%, #e6c020 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            alta performance
          </span>{" "}
          que transformam visitantes em clientes.
        </h1>

        {/* SUBHEADLINE */}
        <p
          className="max-w-2xl text-center leading-relaxed text-text-muted"
          style={{ fontSize: "clamp(15px, 1.8vw, 20px)" }}
        >
          Código sob medida, design premium e carregamento instantâneo para{" "}
          <span className="font-medium text-text-light">
            destacar o seu negócio no Google.
          </span>
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full font-bold transition-all duration-200 hover:-translate-y-1"
            style={{
              padding: "12px 28px",
              fontSize: "14px",
              background: "#F4D23B",
              color: "#0B132B",
              boxShadow: "0 4px 20px rgba(244,210,59,0.30)",
            }}
          >
            Ver Projetos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/5582996833455?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20i9%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-hero-btn inline-flex items-center gap-2 rounded-full border border-[rgba(0,90,164,0.4)] font-medium text-text-light transition-all duration-200 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[rgba(37,211,102,0.08)] hover:text-[#25D366]"
            style={{ padding: "12px 28px", fontSize: "14px" }}
          >
            Falar no WhatsApp ↗
          </a>
        </div>

        {/* MONITOR */}
        <div className="mt-4 w-full max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-[3px] border-[rgba(255,255,255,0.1)] bg-[#0F172A] shadow-[0_0_80px_rgba(0,90,164,0.2),0_40px_80px_rgba(0,0,0,0.6)]">
            {/* BARRA DO BROWSER */}
            <div className="flex items-center gap-3 border-b border-[rgba(255,255,255,0.06)] bg-[#111820] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-md bg-bg-dark px-3 py-1.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 1a4 4 0 100 8A4 4 0 005 1zM1 5h8M5 1C3.5 3 3 4 3 5s.5 2 2 4M5 1c1.5 2 2 3 2 4s-.5 2-2 4"
                    stroke="#475569"
                    strokeWidth="0.8"
                  />
                </svg>
                <span className="font-mono text-[10px] text-text-slate">
                  i9criacaodesites.com.br
                </span>
              </div>
            </div>

            {/* TELA INTERNA */}
            <div
              className="relative w-full bg-bg-dark"
              style={{ paddingBottom: "52%" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div
                  className="rounded-full border px-3 py-1 text-[10px] font-medium"
                  style={{
                    background: "rgba(0,90,164,0.15)",
                    borderColor: "rgba(0,90,164,0.4)",
                    color: "#94A3B8",
                  }}
                >
                  ⚡{" "}
                  <span style={{ color: "#F4D23B" }}>
                    Sites de Alta Performance
                  </span>
                </div>

                <h2
                  className="text-center font-extrabold leading-tight"
                  style={{
                    fontSize: "clamp(14px, 2.5vw, 28px)",
                    color: "#F8FAFC",
                  }}
                >
                  Seu negócio merece um{" "}
                  <span style={{ color: "#F4D23B" }}>site que vende.</span>
                </h2>

                <p
                  className="max-w-sm text-center"
                  style={{
                    fontSize: "clamp(8px, 1.2vw, 13px)",
                    color: "#94A3B8",
                  }}
                >
                  Design premium, código sob medida e carregamento instantâneo.
                </p>

                <div className="mt-2 flex gap-3">
                  <div
                    className="cursor-default rounded-full font-bold"
                    style={{
                      background: "#F4D23B",
                      color: "#0B132B",
                      fontSize: "clamp(7px, 1vw, 12px)",
                      padding:
                        "clamp(4px, 0.8vw, 10px) clamp(10px, 1.5vw, 20px)",
                    }}
                  >
                    Ver Projetos →
                  </div>
                  <div
                    className="cursor-default rounded-full font-medium"
                    style={{
                      border: "1px solid rgba(0,90,164,0.5)",
                      color: "#94A3B8",
                      fontSize: "clamp(7px, 1vw, 12px)",
                      padding:
                        "clamp(4px, 0.8vw, 10px) clamp(10px, 1.5vw, 20px)",
                    }}
                  >
                    WhatsApp ↗
                  </div>
                </div>

                <div
                  className="mt-4 flex w-full justify-center gap-6 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {[
                    { value: "100", label: "Lighthouse" },
                    { value: "< 1s", label: "Load Time" },
                    { value: "SEO", label: "Integrado" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center gap-0.5"
                    >
                      <span
                        className="font-extrabold"
                        style={{
                          color: "#F4D23B",
                          fontSize: "clamp(10px, 1.8vw, 20px)",
                        }}
                      >
                        {s.value}
                      </span>
                      <span
                        style={{
                          color: "#475569",
                          fontSize: "clamp(6px, 0.8vw, 10px)",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BASE DO MONITOR */}
          <div className="flex flex-col items-center">
            <div className="h-4 w-24 rounded-b-sm bg-[#111820]" />
            <div className="mt-0.5 h-2 w-40 rounded-full bg-[#0d1520] shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
          </div>
        </div>

        {/* DIFERENCIAIS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            paddingTop: "32px",
            paddingBottom: "48px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            width: "100%",
          }}
        >
          {[
            "Código 100% Autoral",
            "Design Exclusivo por Nicho",
            "SEO Integrado",
            "Suporte Pós-entrega",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#F4D23B", fontSize: "16px" }}>✦</span>
              <span
                style={{
                  color: "#94A3B8",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="text-xs uppercase tracking-widest text-text-muted"></span>
        <div className="h-12 w-px bg-linear-to-b from-text-muted not-even:to-transparent" />
      </div>
      <style>{`
        @media (max-width: 640px) {
        .whatsapp-hero-btn {
        background: #25D366 !important;
        color: #ffffff !important;
        border-color: #25D366 !important;
     }
    }
`}</style>
    </section>
  );
}
