"use client";
import { motion } from "framer-motion";

function BlobUpLight() {
  return (
    <svg
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "50px", backgroundColor: "#111111" }}
    >
      <path
        d="M0,80 L0,45
           C22,18 46,68 72,38
           C98,8 125,62 155,32
           C185,2 212,58 242,28
           C272,-2 300,55 330,25
           C360,-5 388,52 418,22
           C448,-8 476,50 506,22
           C536,-6 564,48 594,20
           C624,-8 652,48 682,20
           C712,-8 740,48 770,20
           C800,-8 828,48 858,20
           C888,-8 916,48 946,20
           C966,6 984,34 1000,18
           L1000,80 Z"
        fill="#F2EDE8"
      />
    </svg>
  );
}

export default function Contacto() {
  return (
    <>
      {/* ── SECCIÓN WORDMARK MONUMENTAL ── */}
      <div
        style={{
          backgroundColor: "#0D0D0D",
          position: "relative",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "60vh",
        }}
      >
        {/* Columna izq: wordmark ENORME */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "60px 52px",
            position: "relative",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(100px, 16vw, 220px)",
              lineHeight: 0.82,
              letterSpacing: "-0.06em",
              textTransform: "uppercase",
              color: "#F2EDE8",
              position: "relative",
              zIndex: 2,
            }}
          >
            TAU<br />FIC
          </h2>

          {/* Imagen encima del wordmark */}
          <div
            style={{
              position: "absolute",
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "52%",
              aspectRatio: "3/4",
              overflow: "hidden",
              zIndex: 3,
              boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=90"
              alt="Taufic Gashaan"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Columna der: texto + CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "60px 52px 60px 80px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(242,237,232,0.25)",
              marginBottom: "20px",
            }}
          >
            Guadalajara · México · Est. 2009
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(16px, 2vw, 26px)",
              color: "rgba(242,237,232,0.6)",
              lineHeight: 1.4,
              marginBottom: "40px",
              maxWidth: "320px",
            }}
          >
            Despacho de arquitectura residencial premium y pioneros en arquitectura de contenedores de lujo.
          </p>
          <a
            href="https://wa.me/523312345678"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#F2EDE8",
              backgroundColor: "#C8102E",
              padding: "14px 28px",
              width: "fit-content",
            }}
          >
            Iniciar proyecto →
          </a>
        </div>
      </div>

      {/* ── SECCIÓN CONTACTO PRINCIPAL ── */}
      <BlobUpLight />

      <section
        id="contacto"
        style={{
          backgroundColor: "#F2EDE8",
          padding: "72px 52px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "end",
        }}
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.35)",
              marginBottom: "24px",
            }}
          >
            ¿Tienes un proyecto?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(52px, 8vw, 110px)",
              lineHeight: 0.86,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#111111",
            }}
          >
            HABLE<br />
            MOS<span style={{ color: "#C8102E" }}>.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              lineHeight: 1.75,
              color: "rgba(17,17,17,0.45)",
              marginBottom: "40px",
            }}
          >
            Primera consulta sin costo.<br />
            Respondemos en menos de 24 horas.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
            {[
              "@tauficgashaan.mx",
              "@tauficgashaan.design",
              "Guadalajara, Jalisco · México",
            ].map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "rgba(17,17,17,0.35)",
                }}
              >
                {item}
              </p>
            ))}
          </div>

          <a
            href="https://wa.me/523312345678?text=Hola%20Taufic%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#F2EDE8",
              backgroundColor: "#111111",
              padding: "16px 32px",
            }}
          >
            Iniciar conversación →
          </a>
        </motion.div>
      </section>
    </>
  );
}
