const ITEMS = [
  "Arquitectura de Contenedores",
  "Guadalajara · México",
  "Diseño Residencial Premium",
  "Pioneros en Lujo Industrial",
  "Taufic Gashaan",
];

export default function Ticker() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#C8102E",
        height: "42px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="ticker-track" style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
        {all.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#F2EDE8",
              padding: "0 40px",
            }}
          >
            {item}
            <span style={{ marginLeft: "40px", opacity: 0.3 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
