const CRIMES = [
  "Failure to rinse lentils from cookware prior to loading, resulting in the dispersal of said lentils throughout the entire interior of the machine — on the door, the racks, the walls, and all vessels therein",
  "Placement of a strainer within the dishwasher, which did willfully capture and concentrate the aforementioned lentils, necessitating full manual handwashing of said strainer and its lentil contents",
  "Unwieldy and reckless stacking of dishes in a configuration requiring careful surgical extraction, causing undue anxiety and risk of breakage to Grace, the dishwasher unloader",
];

export default function DisherwasherCrimes() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "#5c4a2a",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #f2e8d0 0%, #e8d5a3 40%, #f0e4c8 70%, #e2cf9a 100%)",
        maxWidth: "680px",
        width: "100%",
        padding: "2.5rem 3rem",
        border: "6px double #2c1a0e",
        outline: "2px solid #2c1a0e",
        outlineOffset: "6px",
        boxShadow: "0 0 0 10px #5c4a2a, 8px 8px 32px rgba(0,0,0,0.6), inset 0 0 60px rgba(139,100,50,0.15)",
        position: "relative",
        fontFamily: "'Special Elite', serif",
        color: "#1a0a00",
        textAlign: "center",
      }}>

        {/* Corner ornaments */}
        {["topLeft","topRight","bottomLeft","bottomRight"].map((corner) => (
          <span key={corner} style={{
            position: "absolute",
            fontSize: "1.4rem",
            color: "#2c1a0e",
            ...(corner === "topLeft"    ? { top: "0.5rem", left: "0.8rem" } : {}),
            ...(corner === "topRight"   ? { top: "0.5rem", right: "0.8rem" } : {}),
            ...(corner === "bottomLeft" ? { bottom: "0.5rem", left: "0.8rem" } : {}),
            ...(corner === "bottomRight"? { bottom: "0.5rem", right: "0.8rem" } : {}),
          }}>❧</span>
        ))}

        <p style={{ fontSize: "0.85rem", letterSpacing: "0.35em", marginBottom: "0.4rem" }}>
          ✦ &nbsp; THE PEOPLE DEMAND JUSTICE &nbsp; ✦
        </p>

        <h1 style={{
          fontFamily: "'Rye', serif",
          fontSize: "clamp(3.5rem, 12vw, 5.5rem)",
          lineHeight: 1,
          letterSpacing: "0.05em",
          textShadow: "2px 2px 0 rgba(0,0,0,0.2)",
          marginBottom: "0.1rem",
        }}>
          WANTED
        </h1>

        <div style={{
          border: "2px solid #2c1a0e",
          margin: "0.6rem 0",
          padding: "0.5rem 1rem",
          background: "rgba(44,26,14,0.08)",
        }}>
          <h2 style={{
            fontFamily: "'Rye', serif",
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            letterSpacing: "0.12em",
          }}>
            PAUL OGLESBY
          </h2>
        </div>

        <p style={{
          fontSize: "0.9rem",
          letterSpacing: "0.22em",
          margin: "0.8rem 0 0.1rem",
          textTransform: "uppercase",
        }}>
          for crimes against the dishwasher
        </p>
        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          margin: "0 0 0.3rem",
          fontStyle: "italic",
          opacity: 0.85,
        }}>
          &amp; civil suit for mental distress caused to Grace, the dishwasher unloader
        </p>

        <div style={{
          width: "60%",
          margin: "0 auto 1rem",
          borderBottom: "2px solid #2c1a0e",
        }} />

        <ol style={{
          textAlign: "left",
          listStyle: "none",
          padding: "0",
          margin: "0 0 1.5rem",
        }}>
          {CRIMES.map((crime, i) => (
            <li key={i} style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
              marginBottom: "0.7rem",
              fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)",
              lineHeight: "1.45",
              borderBottom: i < CRIMES.length - 1 ? "1px dotted rgba(44,26,14,0.3)" : "none",
              paddingBottom: i < CRIMES.length - 1 ? "0.7rem" : "0",
            }}>
              <span style={{ fontFamily: "'Rye', serif", minWidth: "1.4rem", paddingTop: "0.05rem" }}>
                {i + 1}.
              </span>
              <span>{crime}</span>
            </li>
          ))}
        </ol>

        <div style={{
          width: "60%",
          margin: "0 auto 1rem",
          borderTop: "2px solid #2c1a0e",
        }} />

        <div style={{
          border: "2px solid #2c1a0e",
          display: "inline-block",
          padding: "0.4rem 1.5rem",
          marginBottom: "1rem",
          background: "rgba(44,26,14,0.08)",
        }}>
          <p style={{ fontSize: "1.1rem", fontFamily: "'Rye', serif", letterSpacing: "0.08em" }}>
            REWARD: A LENTIL-FREE DISHWASHER
          </p>
        </div>

        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          marginTop: "0.5rem",
          opacity: 0.8,
        }}>
          ISSUED THIS DAY: MARCH 4TH, IN THE YEAR 2026
        </p>
        <p style={{
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          opacity: 0.6,
          marginTop: "0.25rem",
        }}>
          ✦ &nbsp; BY ORDER OF THE KITCHEN AUTHORITY &nbsp; ✦
        </p>
      </div>
    </div>
  );
}
