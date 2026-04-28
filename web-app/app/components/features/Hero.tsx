"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { n: "80+", l: "Proyectos" },
  { n: "15+", l: "Años" },
  { n: "12", l: "Premios" },
];

/* Blob SVG negro con borde orgánico — réplica del elemento clave de best.png */
function BlackBlob() {
  return (
    <svg
      viewBox="0 0 1000 180"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "90px", marginBottom: "-2px" }}
    >
      <path
        d="M0,90
           C18,60 35,110 60,75
           C85,40 108,95 135,65
           C162,35 180,88 215,58
           C250,28 270,80 305,52
           C340,24 360,78 400,48
           C440,18 462,72 500,45
           C538,18 558,70 598,42
           C638,14 660,68 700,40
           C740,12 762,65 805,38
           C848,11 870,62 915,35
           C940,22 965,58 1000,38
           L1000,180 L0,180 Z"
        fill="#111111"
      />
    </svg>
  );
}

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "56% 44%",
        backgroundColor: "#F2EDE8",
        overflow: "hidden",
      }}
    >
      {/* ── COLUMNA IZQUIERDA: tipografía monumental + blob ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F2EDE8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Espacio para navbar */}
        <div style={{ height: "60px", flexShrink: 0 }} />

        {/* HEADLINE MONUMENTAL */}
        <div style={{ padding: "0 52px", flex: 1, display: "flex", alignItems: "center" }}>
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#C8102E" }} />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "9px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "rgba(17,17,17,0.4)",
                }}
              >
                Guadalajara · México
              </span>
            </div>

            {/* Título — 3 líneas como best.png */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 0.86,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "#111111",
                fontSize: "clamp(64px, 11.5vw, 160px)",
              }}
            >
              DISEÑO<br />
              QUE<br />
              PERDURA<span style={{ color: "#C8102E" }}>.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                lineHeight: 1.65,
                color: "rgba(17,17,17,0.45)",
                marginTop: "28px",
                maxWidth: "280px",
              }}
            >
              Pioneros en arquitectura de<br />
              contenedores habitables de lujo.
            </motion.p>
          </div>
        </div>

        {/* BLOB NEGRO + STATS — el elemento signature de best.png */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <BlackBlob />
          <div
            style={{
              backgroundColor: "#111111",
              padding: "28px 52px 40px",
              display: "flex",
              gap: "48px",
              alignItems: "flex-end",
            }}
          >
            {stats.map(({ n, l }) => (
              <div key={l}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    fontSize: "clamp(32px, 3.5vw, 52px)",
                    color: "#F2EDE8",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "9px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "rgba(242,237,232,0.35)",
                    marginTop: "6px",
                  }}
                >
                  {l}
                </p>
              </div>
            ))}

            {/* CTA inline */}
            <div style={{ marginLeft: "auto" }}>
              <a
                href="#proyectos"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#C8102E",
                  borderBottom: "1px solid rgba(200,16,46,0.4)",
                  paddingBottom: "2px",
                }}
              >
                Ver proyectos →
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── COLUMNA DERECHA: foto full-bleed ── */}
      <div ref={imgRef} style={{ position: "relative", overflow: "hidden" }}>
        <motion.div style={{ y, height: "115%", position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=90"
            alt="Taufic Gashaan — Arquitectura"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>

        {/* Panel oscuro overlay al fondo derecho — como best.png */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "32px 36px",
            background: "linear-gradient(to top, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.6) 60%, transparent 100%)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(14px, 1.6vw, 22px)",
              color: "#F2EDE8",
              lineHeight: 1.35,
              maxWidth: "320px",
            }}
          >
            "Reconocidos por AMDI y medios internacionales como pioneros en contenedores de lujo."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
