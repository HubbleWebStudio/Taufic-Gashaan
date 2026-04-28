"use client";
import { motion } from "framer-motion";

const proyectos = [
  {
    num: "01",
    titulo: "Casa Bosques",
    categoria: "Residencial Premium",
    lugar: "Zapopan, Jalisco",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=85",
  },
  {
    num: "02",
    titulo: "Loft Container",
    categoria: "Arquitectura de Contenedores",
    lugar: "Guadalajara, Jalisco",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=85",
  },
  {
    num: "03",
    titulo: "Oficinas GDL",
    categoria: "Comercial",
    lugar: "Centro, Guadalajara",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=85",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" style={{ backgroundColor: "#111111" }}>

      {/* ── BLOQUE TEXTO EDITORIAL ── */}
      <div
        style={{
          padding: "80px 52px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "end",
          borderBottom: "1px solid rgba(242,237,232,0.07)",
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
              color: "#C8102E",
              marginBottom: "24px",
            }}
          >
            Portafolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(42px, 6.5vw, 88px)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#F2EDE8",
            }}
          >
            Trabajo<br />de alto<br />nivel<span style={{ color: "#C8102E" }}>.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              lineHeight: 1.75,
              color: "rgba(242,237,232,0.4)",
              marginBottom: "32px",
            }}
          >
            Cada proyecto parte de una premisa: la arquitectura debe representar a quien la habita. No diseñamos casas. Diseñamos identidades.
          </p>
          <a
            href="#contacto"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(242,237,232,0.3)",
              borderBottom: "1px solid rgba(242,237,232,0.15)",
              paddingBottom: "2px",
            }}
          >
            Solicitar portafolio →
          </a>
        </motion.div>
      </div>

      {/* ── LISTA DE PROYECTOS ── */}
      <div>
        {proyectos.map((p, i) => (
          <ProjectItem key={p.num} proyecto={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({
  proyecto,
  index,
}: {
  proyecto: { num: string; titulo: string; categoria: string; lugar: string; img: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      style={{
        display: "grid",
        gridTemplateColumns: "64px 1fr auto",
        alignItems: "center",
        gap: "40px",
        padding: "36px 52px",
        borderBottom: "1px solid rgba(242,237,232,0.07)",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      whileHover={{ backgroundColor: "rgba(242,237,232,0.04)" }}
    >
      {/* Número */}
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "rgba(242,237,232,0.2)",
        }}
      >
        {proyecto.num}
      </span>

      {/* Info */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "9px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(242,237,232,0.3)",
            marginBottom: "8px",
          }}
        >
          {proyecto.categoria} · {proyecto.lugar}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(24px, 3.5vw, 48px)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#F2EDE8",
            lineHeight: 1,
          }}
        >
          {proyecto.titulo}
        </h3>
      </div>

      {/* Imagen */}
      <div
        style={{
          width: "clamp(120px, 14vw, 200px)",
          height: "clamp(80px, 9vw, 130px)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={proyecto.img}
          alt={proyecto.titulo}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </motion.div>
  );
}
