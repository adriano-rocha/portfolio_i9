"use client";

const COMMON_SITE = [
  "Carrega lento, afasta o cliente antes de ler",
  "Template genérico igual ao do concorrente",
  "Quebra no celular, perde metade dos acessos",
  "Invisível no Google, zero tráfego orgânico",
  "Difícil de atualizar, depende de terceiros",
  "Sem integração com WhatsApp ou Google Maps",
];

const I9_SITE = [
  "Carrega em menos de 1 segundo, cliente fica",
  "Design exclusivo criado para o seu nicho",
  "100% responsivo em qualquer dispositivo",
  "SEO integrado desde o primeiro dia de código",
  "Código organizado e documentado para escalar",
  "Integrado ao WhatsApp, Google Maps e Ads",
];

const WHATSAPP_URL =
  "https://wa.me/5582996833455?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20para%20meu%20negócio.";

export default function Comparison() {
  return (
    <section id="comparativo" style={{ background: "#080D1A" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "96px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* TOPO */}
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
            Por que a i9?
          </span>

          <h2
            style={{
              color: "#F8FAFC",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "700px",
            }}
          >
            A diferença que{" "}
            <span style={{ color: "#F4D23B" }}>você vê no resultado</span>
          </h2>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            Enquanto o mercado entrega sites pesados e genéricos, a i9 entrega
            engenharia de conversão focada no seu negócio.
          </p>
        </div>

        {/* COMPARATIVO */}
        <div className="comparison-grid">
          {/* COLUNA ESQUERDA — Site Comum */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                background: "rgba(239,68,68,0.08)",
                padding: "24px 28px",
                borderBottom: "1px solid rgba(239,68,68,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>😓</span>
              <div>
                <p
                  style={{
                    color: "#f87171",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  O Site Comum
                </p>
                <p style={{ color: "#475569", fontSize: "13px" }}>
                  O que o mercado entrega
                </p>
              </div>
            </div>

            {/* ITENS */}
            <div
              style={{
                background: "rgba(239,68,68,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "0px",
              }}
            >
              {COMMON_SITE.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "16px 28px",
                    borderBottom:
                      i < COMMON_SITE.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(239,68,68,0.15)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "#f87171",
                      marginTop: "2px",
                    }}
                  >
                    ✗
                  </span>
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* VS — Centro */}
          <div
            className="vs-divider"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #005AA4, #003d75)",
                border: "3px solid rgba(0,90,164,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F8FAFC",
                fontSize: "16px",
                fontWeight: 800,
                boxShadow: "0 0 32px rgba(0,90,164,0.3)",
                flexShrink: 0,
              }}
            >
              VS
            </div>
          </div>

          {/* COLUNA DIREITA — Site i9 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(0,90,164,0.3)",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                background: "rgba(0,90,164,0.12)",
                padding: "24px 28px",
                borderBottom: "1px solid rgba(0,90,164,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🚀</span>
              <div>
                <p
                  style={{
                    color: "#F4D23B",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  O Site i9
                </p>
                <p style={{ color: "#475569", fontSize: "13px" }}>
                  Engenharia de conversão
                </p>
              </div>
            </div>

            {/* ITENS */}
            <div
              style={{
                background: "rgba(0,90,164,0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {I9_SITE.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "16px 28px",
                    borderBottom:
                      i < I9_SITE.length - 1
                        ? "1px solid rgba(255,255,255,0.04)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(244,210,59,0.15)",
                      border: "1px solid rgba(244,210,59,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "#F4D23B",
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      color: "#94A3B8",
                      fontSize: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#94A3B8", fontSize: "15px" }}>
            Pronto para sair do comum e ter um site que realmente vende?
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#F4D23B",
              color: "#0B132B",
              fontSize: "15px",
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(244,210,59,0.30)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e6c020";
              e.currentTarget.style.boxShadow = "0 4px 32px rgba(244,210,59,0.50)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#F4D23B";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(244,210,59,0.30)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Solicitar Diagnóstico Gratuito ↗
          </a>
        </div>
      </div>

      {/* RESPONSIVIDADE */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 24px;
          width: 100%;
          align-items: center;
        }
        .vs-divider {
          flex-direction: column;
        }
        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .vs-divider {
            flex-direction: row;
          }
        }
      `,
        }}
      />
    </section>
  );
}