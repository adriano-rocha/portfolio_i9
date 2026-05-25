"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../sections/ProjectCard";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function handlePrev() {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }

  function handleNext() {
    setDirection(1);
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="projetos" style={{ background: "#0B132B" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "96px 48px",
          display: "flex",
          flexDirection: "column",
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
            Vitrine de Cases
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
            Projetos que{" "}
            <span style={{ color: "#F4D23B" }}>geram resultados reais</span>
          </h2>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            Cada projeto é desenvolvido sob medida, com foco em conversão,
            velocidade e identidade visual exclusiva para o nicho do cliente.
          </p>
        </div>

        {/* GRID — Desktop */}
        <div className="projects-grid-desktop">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CARROSSEL — Mobile */}
        <div
          className="projects-carousel-mobile"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* CARD ANIMADO */}
          <div style={{ overflow: "hidden", width: "100%" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <ProjectCard project={projects[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CONTROLES FIXOS ABAIXO DO CARD */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "20px",
              gap: "12px",
            }}
          >
            {/* SETA ESQUERDA */}
            <button
              onClick={handlePrev}
              aria-label="Projeto anterior"
              style={{
                flexShrink: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#111820",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#F8FAFC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ←
            </button>

            {/* DOTS */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                flex: 1,
              }}
            >
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Ir para projeto ${i + 1}`}
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "999px",
                    background: i === current ? "#F4D23B" : "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* SETA DIREITA */}
            <button
              onClick={handleNext}
              aria-label="Próximo projeto"
              style={{
                flexShrink: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#111820",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#F8FAFC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              →
            </button>
          </div>

        </div>
      </div>

      {/* RESPONSIVIDADE */}
      <style>{`
        .projects-grid-desktop {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .projects-carousel-mobile {
          display: none;
        }
        @media (max-width: 1024px) {
          .projects-grid-desktop {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .projects-grid-desktop {
            display: none;
          }
          .projects-carousel-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 0 8px;
          }
        }
      `}</style>
    </section>
  );
}