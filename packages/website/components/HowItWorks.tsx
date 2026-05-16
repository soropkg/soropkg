"use client";

const steps = [
  {
    num: "01",
    title: "Inspect any deployed contract",
    description:
      "Point soropkg at any contract address on mainnet, testnet, or futurenet. It fetches the WASM binary, parses the contractspecv0 section, and returns a typed interface — functions, arguments, return values, and custom error types.",
    code: `$ soropkg inspect CAQQR5SWBXKIGZKPBZDH3KM5GQ5G...

Contract   blend-capital/backstop
Network    mainnet
WASM hash  8a3f...c221

Functions
  deposit(from: Address, pool: Address, amount: i128) → i128
  withdraw(from: Address, pool: Address, amount: i128) → i128
  queue_withdrawal(from: Address, pool: Address, amount: i128)
  claim(from: Address, pool_addresses: Vec<Address>) → i128

Errors
  1  InvalidShareMintAmount
  2  InvalidTokenWithdrawAmount
  3  InsufficientFunds`,
  },
  {
    num: "02",
    title: "Declare your manifest",
    description:
      "Run soropkg init to scaffold a soroban.toml. Declare contract IDs per network and list dependencies with semantic version ranges — exactly like package.json, but for on-chain contracts.",
    code: `[package]
name        = "my-org/my-protocol"
version     = "1.0.0"
description = "My Soroban protocol"
license     = "Apache-2.0"
repository  = "https://github.com/my-org/my-protocol"

[networks.mainnet]
vault = "CCVAULTMAINNET..."
pool  = "CCPOOLMAINNET..."

[networks.testnet]
vault = "CCVAULTTESTNET..."

[dependencies]
"stellar/token"       = "1.0.0"
"blend-capital/blend" = "^2.0.0"`,
  },
  {
    num: "03",
    title: "Generate clients and publish",
    description:
      "Run soropkg generate to emit fully-typed TypeScript bindings for every dependency. Then publish your own contracts to the registry with on-chain WASM verification — so anyone can install and use them.",
    code: `$ soropkg generate

  ✓  stellar__token.ts
  ✓  blend_capital__blend.ts

  Written to .soroban/

$ soropkg publish

  Authenticating via GitHub...
  Fetching WASM from mainnet...
  Verifying hash 8a3f...c221  ✓

  Published my-org/my-protocol@1.0.0`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "100px 32px",
      borderTop: "1px solid var(--border)",
      background: "var(--surface-1)",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 80, maxWidth: 480 }}>
          <p style={{
            fontSize: 11, fontWeight: 500, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "var(--yellow)", marginBottom: 20,
          }}>
            How it works
          </p>
          <h2 className="serif" style={{
            fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600,
            lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--white)",
          }}>
            From on-chain to your IDE<br />in three steps
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}>
              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <div className="mono" style={{
                  fontSize: 11, color: "var(--text-lo)",
                  letterSpacing: "0.08em", marginBottom: 20,
                }}>
                  {step.num}
                </div>
                <div style={{ width: 32, height: 2, background: "var(--yellow)", marginBottom: 24 }} />
                <h3 className="serif" style={{
                  fontSize: 24, fontWeight: 600, color: "var(--white)",
                  lineHeight: 1.25, letterSpacing: "-0.01em", marginBottom: 18,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: 15, color: "var(--text-mid)", lineHeight: 1.8, fontWeight: 400,
                }}>
                  {step.description}
                </p>
              </div>

              {/* Terminal */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  background: "var(--surface-0)",
                  border: "1px solid var(--border-hi)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "10px 16px",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--surface-0)",
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-hi)" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-hi)" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-hi)" }} />
                    <span className="mono" style={{ fontSize: 10, color: "var(--text-lo)", marginLeft: 6 }}>
                      terminal
                    </span>
                  </div>
                  <pre className="mono" style={{
                    padding: "20px 22px",
                    fontSize: 12, lineHeight: 1.75,
                    color: "var(--text-mid)",
                    overflowX: "auto", margin: 0,
                    whiteSpace: "pre",
                  }}>
                    {/* Highlight $ lines in yellow */}
                    {step.code.split("\n").map((line, idx) => (
                      <span key={idx} style={{ display: "block" }}>
                        {line.startsWith("$") ? (
                          <span style={{ color: "var(--yellow)" }}>{line}</span>
                        ) : line.includes("✓") ? (
                          <span style={{ color: "var(--teal)" }}>{line}</span>
                        ) : (
                          line
                        )}
                      </span>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how-it-works div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </section>
  );
}
