"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function BlobUp() {
  return (
    <svg
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "50px", marginBottom: "-2px" }}
    >
      <path
        d="M0,80 L0,50
           C25,25 48,72 75,42
           C102,12 128,65 158,38
           C188,11 215,60 245,32
           C275,4 302,55 332,28
           C362,1 390,52 420,25
           C450,-2 478,50 508,22
           C538,-6 566,48 596,20
           C626,-8 654,44 684,18
           C714,-10 742,46 772,20
           C802,-6 830,48 860,22
           C890,-6 918,44 948,18
           C972,0 988,30 1000,14
           L1000,80 Z"
        fill="#111111"
      />
    </svg>
  );
}

export default function Nosotros() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="nosotros" style={{ backgroundColor: "#F2EDE8" }}>

      <BlobUp />

      {/* ── GRID EDITORIAL: texto izq + imagen der ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "80vh",
        }}
      >
        {/* Columna izquierda: texto */}
        <div
          style={{
            padding: "80px 52px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "9px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.35)",
                marginBottom: "24px",
              }}
            >
              El despacho
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "clamp(48px, 7vw, 96px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "#111111",
                marginBottom: "40px",
              }}
            >
              PIONEROS<br />
              EN LUJO<br />
              INDUSTRIAL<span style={{ color: "#C8102E" }}>.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "rgba(17,17,17,0.5)",
                maxWidth: "380px",
              }}
            >
              Taufic Gashaan es un despacho de arquitectura con base en Guadalajara, México. Reconocidos por AMDI y medios especializados de arquitectura en Europa y Norteamérica.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: 0.45, duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              marginTop: "60px",
              borderTop: "1px solid rgba(17,17,17,0.1)",
              paddingTop: "36px",
            }}
          >
            {[
              { n: "80+", l: "Proyectos completados" },
              { n: "15+", l: "Años de experiencia" },
              { n: "12", l: "Premios y reconocimientos" },
            ].map(({ n, l }, i) => (
              <div
                key={n}
                style={{
                  paddingRight: "24px",
                  borderRight: i < 2 ? "1px solid rgba(17,17,17,0.1)" : "none",
                  paddingLeft: i > 0 ? "24px" : "0",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    fontSize: "clamp(36px, 4.5vw, 60px)",
                    color: "#111111",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {n}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "9px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.35)",
                    marginTop: "8px",
                  }}
                >
                  {l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Columna derecha: imagen full-height */}
        <div ref={imgRef} style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <motion.img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90"
            alt="Taufic Gashaan"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "115%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(17,17,17,0.7) 0%, transparent 60%)",
              padding: "52px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "clamp(28px, 3.5vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#F2EDE8",
                maxWidth: "280px",
              }}
            >
              Espacios<br />
              que definen<br />
              identidades<span style={{ color: "#C8102E" }}>.</span>
            </motion.h3>
          </div>
        </div>
      </div>

      {/* ── BANDA OSCURA INFERIOR ── */}
      <div
        style={{
          backgroundColor: "#111111",
          padding: "0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 1000 60"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "40px", backgroundColor: "#F2EDE8", marginBottom: "0" }}
        >
          <path
            d="M0,60 L0,30
               C20,5 45,50 70,22
               C95,-5 120,45 150,18
               C180,-9 205,42 235,15
               C265,-12 292,40 322,14
               C352,-12 380,42 410,16
               C440,-10 468,44 498,18
               C528,-8 556,46 586,20
               C616,-6 644,46 674,20
               C704,-6 732,44 762,18
               C792,-8 820,44 850,18
               C880,-8 908,44 938,18
               C960,2 980,32 1000,14
               L1000,60 Z"
            fill="#111111"
          />
        </svg>

        <div
          style={{
            padding: "20px 52px 72px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "clamp(52px, 8vw, 110px)",
                lineHeight: 0.86,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "#F2EDE8",
              }}
            >
              PROYECTOS<br />
              QUE<br />
              PERDURAN<span style={{ color: "#C8102E" }}>.</span>
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "rgba(242,237,232,0.4)",
                marginBottom: "32px",
              }}
            >
              Cada proyecto parte de una premisa simple: la arquitectura debe representar a quien la habita. No diseñamos casas. Diseñamos identidades.
            </p>

            {[
              { tag: "AMDI", texto: "Reconocidos como despacho de vanguardia en diseño residencial premium." },
              { tag: "INTL", texto: "Referenciados por medios de arquitectura en Europa y Norteamérica." },
              { tag: "MX #1", texto: "Pioneros en elevar la arquitectura de contenedores al segmento de lujo." },
            ].map((r, i) => (
              <div
                key={r.tag}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  borderTop: i === 0 ? "1px solid rgba(242,237,232,0.08)" : "none",
                  borderBottom: "1px solid rgba(242,237,232,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "8px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#C8102E",
                    border: "1px solid rgba(200,16,46,0.35)",
                    padding: "4px 8px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {r.tag}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    lineHeight: 1.65,
                    color: "rgba(242,237,232,0.4)",
                  }}
                >
                  {r.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
