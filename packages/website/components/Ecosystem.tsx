"use client";

const contracts = [
  { name: "Blend Protocol", category: "Lending", contracts: 3, audited: true },
  { name: "Soroswap", category: "DEX / AMM", contracts: 2, audited: false },
  { name: "Phoenix Protocol", category: "DEX", contracts: 1, audited: false },
  { name: "Aquarius", category: "Liquidity", contracts: 1, audited: false },
  { name: "FxDAO", category: "Stablecoin", contracts: 1, audited: false },
  { name: "Reflector", category: "Oracle", contracts: 1, audited: false },
  { name: "YieldBlox", category: "Yield", contracts: 1, audited: false },
  { name: "Centrifuge", category: "RWA", contracts: 1, audited: false },
  { name: "stellar/token", category: "Standard", contracts: 1, audited: true },
];

const categoryColors: Record<string, string> = {
  Lending: "#6e56cf",
  "DEX / AMM": "#05a2c2",
  DEX: "#05a2c2",
  Liquidity: "#3e63dd",
  Stablecoin: "#30a46c",
  Oracle: "#9b8afb",
  Yield: "#ffb224",
  RWA: "#e5484d",
  Standard: "#2ec8e6",
};

export default function Ecosystem() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#30a46c", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Registry
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
            The Stellar ecosystem,<br />all in one place
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
            soropkg ships with 19+ contracts from the core Stellar ecosystem, ready to add as dependencies.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
          marginBottom: 48,
        }}>
          {contracts.map(c => (
            <div
              key={c.name}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "20px 22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "border-color 0.15s, transform 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                  {c.name}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: categoryColors[c.category] ?? "#6e56cf",
                    background: `${categoryColors[c.category] ?? "#6e56cf"}15`,
                    padding: "2px 8px",
                    borderRadius: 100,
                    letterSpacing: "0.03em",
                  }}>
                    {c.category}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {c.contracts} contract{c.contracts > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              {c.audited && (
                <div title="Audited" style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(48,164,108,0.12)",
                  border: "1px solid rgba(48,164,108,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 13,
                }}>
                  ✓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
            More protocols coming soon.{" "}
            <a href="https://github.com/lumenloop/soropkg" target="_blank" rel="noopener noreferrer"
              style={{ color: "#6e56cf", textDecoration: "none", fontWeight: 500 }}>
              Submit yours →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
