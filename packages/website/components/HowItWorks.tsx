"use client";

const steps = [
  {
    num: "01",
    title: "Inspect any deployed contract",
    description:
      "Point soropkg at any contract address on mainnet, testnet, or futurenet. It fetches the WASM binary, parses the contractspecv0 section, and displays a fully-typed interface — functions, argument types, return values, and errors.",
    code: `$ soropkg inspect CAQQR5SWBX...

Contract: blend-capital/backstop
Network:  mainnet

Functions:
  deposit(from: Address, pool: Address, amount: i128) → i128
  withdraw(from: Address, pool: Address, amount: i128) → i128
  queue_withdrawal(from: Address, pool: Address, amount: i128)

Errors:
  1  InvalidShareMintAmount
  2  InvalidTokenWithdrawAmount`,
    color: "#6e56cf",
  },
  {
    num: "02",
    title: "Declare your manifest",
    description:
      "Run soropkg init to scaffold a soroban.toml. Declare your contract IDs per network and list dependencies — just like package.json, but for on-chain contracts.",
    code: `[package]
name = "my-org/my-protocol"
version = "1.0.0"
license = "Apache-2.0"

[networks.mainnet]
vault = "CCVAULT..."
pool  = "CCPOOL..."

[networks.testnet]
vault = "CCVAULTTEST..."

[dependencies]
"stellar/token"        = "1.0.0"
"blend-capital/blend"  = "^2.0.0"`,
    color: "#05a2c2",
  },
  {
    num: "03",
    title: "Generate typed clients & publish",
    description:
      "Run soropkg generate to emit fully-typed TypeScript bindings for every dependency. Then publish your own contracts to the registry for others to discover and use.",
    code: `$ soropkg generate

Generated TypeScript clients:
  ✓ .soroban/stellar__token.ts
  ✓ .soroban/blend_capital__blend.ts

$ soropkg publish
  ✓ Verified on-chain WASM hash
  ✓ Published blend-capital/my-protocol@1.0.0`,
    color: "#9b8afb",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "100px 24px", background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#05a2c2", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            How it works
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
            From on-chain to your IDE<br />in three steps
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: 48,
                alignItems: "center",
                direction: i % 2 === 1 ? "rtl" : "ltr",
              }}
            >
              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  fontSize: 48,
                  fontWeight: 800,
                  color: step.color,
                  opacity: 0.2,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 16,
                  fontFamily: "monospace",
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {step.description}
                </p>
              </div>

              {/* Code block */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  background: "#0a0a0a",
                  border: `1px solid ${step.color}25`,
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: `0 0 40px ${step.color}10`,
                }}>
                  {/* Terminal header */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "12px 16px",
                    borderBottom: `1px solid ${step.color}15`,
                    background: "#111",
                  }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  </div>
                  {/* Code */}
                  <pre className="mono" style={{
                    padding: "20px 22px",
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#c9d1d9",
                    overflowX: "auto",
                    margin: 0,
                    whiteSpace: "pre",
                  }}>
                    {step.code}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #how-it-works > div > div:last-child > div {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </section>
  );
}
