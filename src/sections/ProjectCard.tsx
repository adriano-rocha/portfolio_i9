"use client";

import Image from "next/image";
import { Project } from "../data/projects";

const nicheColorMap: Record<string, { bg: string; text: string; border: string }> = {
  gold:   { bg: "rgba(244,210,59,0.10)",  text: "#F4D23B", border: "rgba(244,210,59,0.25)"  },
  rose:   { bg: "rgba(251,113,133,0.10)", text: "#fb7185", border: "rgba(251,113,133,0.25)" },
  blue:   { bg: "rgba(0,90,164,0.15)",   text: "#60a5fa", border: "rgba(0,90,164,0.30)"    },
  slate:  { bg: "rgba(100,116,139,0.15)", text: "#94a3b8", border: "rgba(100,116,139,0.25)" },
  yellow: { bg: "rgba(234,179,8,0.10)",   text: "#facc15", border: "rgba(234,179,8,0.25)"   },
  red:    { bg: "rgba(239,68,68,0.10)",   text: "#f87171", border: "rgba(239,68,68,0.25)"   },
  green:  { bg: "rgba(34,197,94,0.10)",   text: "#4ade80", border: "rgba(34,197,94,0.25)"   },
};

type Props = {
  project: Project;  
};

export default function ProjectCard({ project }: Props) {
  const color = nicheColorMap[project.nicheColor] ?? nicheColorMap.blue;
  const hasDemo = project.demoUrl !== "";

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#0F172A",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
        e.currentTarget.style.borderColor = "rgba(0,90,164,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      {/* IMAGEM */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          overflow: "hidden",
          background: "#0B132B",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* BADGE STATUS */}
        {project.status === "Em desenvolvimento" && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(11,19,43,0.85)",
              backdropFilter: "blur(8px)",
              color: "#94A3B8",
              fontSize: "10px",
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Em desenvolvimento
          </div>
        )}
      </div>

      {/* CONTEÚDO */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "24px",
          gap: "16px",
        }}
      >
        {/* TAG DE NICHO */}
        <span
          style={{
            alignSelf: "flex-start",
            background: color.bg,
            color: color.text,
            border: `1px solid ${color.border}`,
            borderRadius: "999px",
            padding: "4px 12px",
            fontSize: "11px",
            fontWeight: 600,
          }}
        >
          {project.niche}
        </span>

        {/* TÍTULO */}
        <h3
          style={{
            color: "#F8FAFC",
            fontSize: "17px",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* DESCRIÇÃO */}
        <p
          style={{
            color: "#94A3B8",
            fontSize: "13px",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* TECNOLOGIAS */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                color: "#475569",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "999px",
                padding: "3px 10px",
                fontSize: "10px",
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BOTÃO */}
        {hasDemo ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "8px",
              background: "#005AA4",
              color: "#F8FAFC",
              fontSize: "13px",
              fontWeight: 600,
              padding: "12px 20px",
              borderRadius: "12px",
              textDecoration: "none",
              transition: "background 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0069bf";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,90,164,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#005AA4";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Visitar Site Oficial
            <span>↗</span>
          </a>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginTop: "8px",
              background: "rgba(255,255,255,0.04)",
              color: "#94A3B8",
              fontSize: "13px",
              padding: "12px 20px",
              borderRadius: "12px",
            }}
          >
            Projeto em desenvolvimento
          </div>
        )}
      </div>
    </article>
  );
}