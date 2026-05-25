import { Target, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Target,
    title: "Alinhamento Estratégico",
    description:
      "Entendemos o seu nicho, seus concorrentes e o perfil do seu cliente ideal. A partir disso, desenhamos a estrutura de conversão ideal para o seu negócio.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Engenharia e Design",
    description:
      "Desenvolvimento do código sob medida com foco em velocidade máxima, design exclusivo para o seu nicho e experiência premium em qualquer dispositivo.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Entrega e Otimização",
    description:
      "Seu site no ar, integrado ao Google Maps e Google Ads, otimizado para SEO e pronto para receber e converter clientes imediatamente.",
  },
];

export default function Process() {
  return (
    <section id="processo" style={{ background: "#F1F5F9" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "96px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TOPO */}
        <div
          style={{
            marginBottom: "64px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
            width: "100%",
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
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Como Trabalhamos
          </span>

          <h2
            style={{
              color: "#0F172A",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.2,
              textAlign: "center",
              maxWidth: "700px",
            }}
          >
            Um processo pensado para{" "}
            <span style={{ color: "#005AA4" }}>gerar resultados</span>
          </h2>

          <p
            style={{
              color: "#475569",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: "520px",
            }}
          >
            Do primeiro contato até o site no ar, cada etapa é executada com
            método, transparência e foco em conversão.
          </p>
        </div>

        {/* CARDS */}
        <div className="relative flex flex-col gap-8 md:flex-row md:gap-6 md:items-stretch">
          {/* LINHA CONECTORA — só desktop */}
          <div
            className="absolute hidden md:block"
            style={{
              top: "52px",
              left: "calc(16.66% + 24px)",
              right: "calc(16.66% + 24px)",
              height: "2px",
              background:
                "repeating-linear-gradient(90deg, #005AA4 0, #005AA4 8px, transparent 8px, transparent 16px)",
              opacity: 0.3,
            }}
          />

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-1 flex-col items-center gap-5 rounded-2xl p-8 text-center"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,90,164,0.15)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  paddingBottom: "40px",
                }}
              >
                <div
                  className="flex flex-col items-center gap-2"
                  style={{ paddingTop: "24px", paddingBottom: "8px" }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(0,90,164,0.08)",
                      border: "1px solid rgba(0,90,164,0.2)",
                    }}
                  >
                    <Icon size={24} color="#005AA4" strokeWidth={1.5} />
                  </div>
                </div>

                {/* TEXTO */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "#0F172A" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#475569" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
