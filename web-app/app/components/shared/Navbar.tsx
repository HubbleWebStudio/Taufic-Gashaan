"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12"
      style={{
        height: "60px",
        backgroundColor: scrolled ? "rgba(17,17,17,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.4s",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "12px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: scrolled ? "#F2EDE8" : "#111111",
          transition: "color 0.4s",
        }}
      >
        Taufic<span style={{ color: "#C8102E" }}>.</span>Gashaan
      </a>

      <div className="hidden md:flex items-center gap-10">
        {["Proyectos", "Nosotros", "Contacto"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: scrolled ? "rgba(242,237,232,0.5)" : "rgba(17,17,17,0.45)",
              transition: "color 0.4s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? "#F2EDE8" : "#111111")}
            onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "rgba(242,237,232,0.5)" : "rgba(17,17,17,0.45)")}
          >
            {l}
          </a>
        ))}
      </div>

      <a
        href="https://wa.me/523312345678"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "10px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#C8102E",
          borderBottom: "1px solid #C8102E",
          paddingBottom: "1px",
        }}
      >
        Consulta
      </a>
    </header>
  );
}
