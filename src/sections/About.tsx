import { BarChart3, Code2, TrendingUp } from "lucide-react";

const PILLARS = [
  {
    icon: BarChart3,
    title: "Estratégia e Prospecção",
    description:
      "Não criamos apenas telas bonitas. Analisamos o seu mercado local e estruturamos uma página que realmente traga clientes para o seu WhatsApp.",
    highlight: "Inteligência de mercado",
  },
  {
    icon: Code2,
    title: "Engenharia Sob Medida",
    description:
      "Zero templates prontos. Desenvolvemos o seu site linha por linha usando React e TypeScript. Código limpo, seguro e imune a quedas.",
    highlight: "100% código autoral",
  },
  {
    icon: TrendingUp,
    title: "Foco Absoluto em ROI",
    description:
      "Otimizamos cada milissegundo de carregamento porque site rápido é sinônimo de mais dinheiro no seu bolso. Seu investimento se paga nos primeiros meses.",
    highlight: "Resultado mensurável",
  },
];

const LIGHTHOUSE_SCORES = [
  { label: "Performance", score: 100, color: "#00C853" },
  { label: "SEO", score: 100, color: "#00C853" },
  { label: "Acessibilidade", score: 100, color: "#00C853" },
  { label: "Boas Práticas", score: 100, color: "#00C853" },
];

const TAGS = [
  "Código Autoral",
  "Otimizado para Mobile",
  "Integrado ao Google Maps",
  "100% Lighthouse Score",
];

export default function About() {
  return (
    <section
      id="sobre"
      style={{ background: "#0F172A" }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "96px 48px",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
        }}
      >

        {/* TOPO — MANIFESTO */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              background: "rgba(0,90,164,0.08)",
              color: "#005AA4",
              border: "1px solid rgba(0,90,164,0.2)",
              borderRadius: "999px",
              padding: "4px 16px",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
            }}
          >
            Sobre a i9 Studio
          </span>

          <h2
            style={{
              color: "#F8FAFC",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "800px",
            }}
          >
            Alta performance{" "}
            <span style={{ color: "#F4D23B" }}>não é opcional.</span>
          </h2>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "clamp(15px, 1.5vw, 18px)",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            A i9 nasceu com um propósito claro: eliminar sites lentos, genéricos
            e ineficientes do mercado. Nosso time une{" "}
            <span style={{ color: "#F8FAFC", fontWeight: 500 }}>
              estratégia de negócios
            </span>{" "}
            com{" "}
            <span style={{ color: "#F8FAFC", fontWeight: 500 }}>
              engenharia de software de alta performance.
            </span>
          </p>
        </div>

        {/* BLOCO INFERIOR — PILARES + LIGHTHOUSE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
          }}
          className="about-grid"
        >

          {/* PILARES */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px",
                    padding: "24px",
                  }}
                >
                  {/* ÍCONE */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(0,90,164,0.12)",
                      border: "1px solid rgba(0,90,164,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color="#005AA4" strokeWidth={1.5} />
                  </div>

                  {/* TEXTO */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" as const }}>
                      <h3
                        style={{
                          color: "#F8FAFC",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <span
                        style={{
                          background: "rgba(244,210,59,0.1)",
                          color: "#F4D23B",
                          border: "1px solid rgba(244,210,59,0.2)",
                          borderRadius: "999px",
                          padding: "2px 10px",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {pillar.highlight}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#94A3B8",
                        fontSize: "14px",
                        lineHeight: 1.6,
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LIGHTHOUSE MOCKUP */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: "#111820",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {/* HEADER DO MOCKUP */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(244,210,59,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  🏠
                </div>
                <div>
                  <p style={{ color: "#F8FAFC", fontSize: "13px", fontWeight: 600 }}>
                    Google Lighthouse
                  </p>
                  <p style={{ color: "#475569", fontSize: "11px" }}>
                    i9studio.com.br — Relatório de Performance
                  </p>
                </div>
              </div>

              {/* SCORES */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {LIGHTHOUSE_SCORES.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      padding: "16px 12px",
                    }}
                  >
                    {/* CÍRCULO */}
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        border: `3px solid ${item.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,200,83,0.08)",
                      }}
                    >
                      <span
                        style={{
                          color: item.color,
                          fontSize: "18px",
                          fontWeight: 800,
                        }}
                      >
                        {item.score}
                      </span>
                    </div>
                    <span
                      style={{
                        color: "#94A3B8",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* BARRA DE PROGRESSO */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "First Contentful Paint", value: "0.4s" },
                  { label: "Speed Index", value: "0.6s" },
                  { label: "Time to Interactive", value: "0.8s" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ color: "#475569", fontSize: "12px" }}>
                      {metric.label}
                    </span>
                    <span
                      style={{
                        color: "#00C853",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TAGS FLUTUANTES */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "10px",
              }}
            >
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(0,90,164,0.08)",
                    color: "#94A3B8",
                    border: "1px solid rgba(0,90,164,0.2)",
                    borderRadius: "999px",
                    padding: "6px 14px",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* RESPONSIVIDADE MOBILE */}
      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .about-grid {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}