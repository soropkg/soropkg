"use client";
import { CheckCircle } from "lucide-react";

const contracts = [
  { name: "Blend Protocol",  category: "Lending",   count: 3, audited: true  },
  { name: "Soroswap",        category: "DEX / AMM",  count: 2, audited: false },
  { name: "Phoenix Protocol",category: "DEX",        count: 1, audited: false },
  { name: "Aquarius",        category: "Liquidity",  count: 1, audited: false },
  { name: "FxDAO",           category: "Stablecoin", count: 1, audited: false },
  { name: "Reflector",       category: "Oracle",     count: 1, audited: false },
  { name: "YieldBlox",       category: "Yield",      count: 1, audited: false },
  { name: "Centrifuge",      category: "RWA",        count: 1, audited: false },
  { name: "stellar/token",   category: "Standard",   count: 1, audited: true  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" style={{
      padding: "100px 32px",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: 80,
          alignItems: "start",
        }}>
          {/* Left */}
          <div>
            <p style={{
              fontSize: 11, fontWeight: 500, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "var(--yellow)", marginBottom: 20,
            }}>
              Registry
            </p>
            <h2 className="serif" style={{
              fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 600,
              lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--white)",
              marginBottom: 20,
            }}>
              The Stellar ecosystem, indexed
            </h2>
            <p style={{
              fontSize: 14, color: "var(--text-mid)", lineHeight: 1.75, marginBottom: 32,
            }}>
              soropkg ships with 19+ contracts from the core Stellar ecosystem as seed data — ready to add as dependencies on day one.
            </p>
            <a href="https://github.com/Ipramking/soropkg" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 13, color: "var(--yellow)", textDecoration: "none",
                borderBottom: "1px solid rgba(253,218,36,0.3)",
                paddingBottom: 2, transition: "border-color 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--yellow)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(253,218,36,0.3)"}
            >
              Submit your contract →
            </a>
          </div>

          {/* Right — table */}
          <div style={{ border: "1px solid var(--border)" }}>
            {/* Table header */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr auto auto auto",
              padding: "10px 20px", borderBottom: "1px solid var(--border)",
              background: "var(--surface-1)",
            }}>
              {["Package", "Category", "Contracts", "Audited"].map(h => (
                <span key={h} style={{
                  fontSize: 10, fontWeight: 500, color: "var(--text-lo)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textAlign: h !== "Package" ? "center" : "left",
                }}>{h}</span>
              ))}
            </div>

            {contracts.map((c, i) => (
              <div
                key={c.name}
                style={{
                  display: "grid", gridTemplateColumns: "1fr auto auto auto",
                  padding: "14px 20px",
                  borderBottom: i < contracts.length - 1 ? "1px solid var(--border)" : "none",
                  background: "var(--surface-0)",
                  alignItems: "center",
                  transition: "background 0.1s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--surface-1)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--surface-0)"}
              >
                <span style={{ fontSize: 13, color: "var(--text-hi)", fontWeight: 400 }}>
                  {c.name}
                </span>
                <span style={{
                  fontSize: 11, color: "var(--lavender)",
                  textAlign: "center", fontWeight: 400,
                }}>
                  {c.category}
                </span>
                <span style={{
                  fontSize: 12, color: "var(--text-lo)",
                  textAlign: "center",
                }}>
                  {c.count}
                </span>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {c.audited
                    ? <CheckCircle size={14} strokeWidth={1.5} color="var(--teal)" />
                    : <span style={{ fontSize: 12, color: "var(--border-hi)" }}>—</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #ecosystem > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
