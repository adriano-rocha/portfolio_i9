"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5582996833455?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20para%20meu%20negócio.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-3">
      {/* BOTÃO WHATSAPP */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="relative flex items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* TOOLTIP */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mr-3 flex items-center pointer-events-none"
            >
              <div
                style={{
                  backgroundColor: "#25D366",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "13px",
                    fontWeight: 500,
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  Falar no WhatsApp
                </p>
              </div>

              {/* SETA */}
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: "8px solid #25D366",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTÃO PRINCIPAL */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxShadow: hovered
              ? "0 0 0 4px rgba(37,211,102,0.2), 0 8px 32px rgba(37,211,102,0.4)"
              : "0 4px 24px rgba(0,0,0,0.5)",
            transition: "box-shadow 0.35s ease",
          }}
        >
          {/* ANEL PULSANTE */}
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              backgroundColor: "#25D366",
            }}
          />

          {/* ÍCONE */}
          <Image
            src="/images/whats.png"
            alt="WhatsApp"
            width={36}
            height={36}
            className="object-contain"
            style={{ position: "relative", zIndex: 10 }}
          />
        </motion.div>
      </motion.a>
    </div>
  );
}
