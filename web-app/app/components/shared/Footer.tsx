export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F2EDE8",
        borderTop: "1px solid rgba(17,17,17,0.08)",
        padding: "24px 52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(17,17,17,0.2)",
        }}
      >
        TAUFIC<span style={{ color: "rgba(200,16,46,0.4)" }}>.</span>GASHAAN
      </span>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "9px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(17,17,17,0.2)",
        }}
      >
        © {new Date().getFullYear()} · Guadalajara, México
      </p>
    </footer>
  );
}
