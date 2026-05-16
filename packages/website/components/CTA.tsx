"use client";
import { ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function CTA() {
  return (
    <section style={{
      padding: "100px 32px",
      borderTop: "1px solid var(--border)",
      background: "var(--surface-1)",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "center",
        }}>
          {/* Left — text */}
          <div>
            <div style={{ width: 40, height: 2, background: "var(--yellow)", marginBottom: 32 }} />
            <h2 className="serif" style={{
              fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 600,
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "var(--white)", marginBottom: 20,
            }}>
              Ready to build<br />on Stellar?
            </h2>
            <p style={{
              fontSize: 16, color: "var(--text-mid)", lineHeight: 1.75,
              marginBottom: 40, maxWidth: 400,
            }}>
              Install soropkg and start managing smart contract dependencies the way you manage npm packages — with on-chain verification and full type safety.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 24px", borderRadius: 4,
                background: "var(--yellow)", color: "#0F0F0F",
                textDecoration: "none", fontSize: 14, fontWeight: 600,
                transition: "opacity 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Read the docs
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <a href="https://github.com/Ipramking/soropkg" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 24px", borderRadius: 4,
                background: "transparent", color: "var(--text-hi)",
                textDecoration: "none", fontSize: 14, fontWeight: 400,
                border: "1px solid var(--border-hi)", transition: "border-color 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--warm)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-hi)"}
              >
                <GithubIcon />
                Star on GitHub
              </a>
            </div>
          </div>

          {/* Right — terminal */}
          <div style={{
            background: "var(--surface-0)",
            border: "1px solid var(--border-hi)", borderRadius: 4,
          }}>
            <div style={{
              padding: "10px 16px", borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-hi)" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-hi)" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border-hi)" }} />
            </div>
            <pre className="mono" style={{
              padding: "24px 24px 28px",
              fontSize: 13, lineHeight: 1.8,
              color: "var(--text-mid)", margin: 0, whiteSpace: "pre",
            }}>
              {[
                ["$", " npm install -g soropkg", "yellow"],
                ["", "", ""],
                ["$", " soropkg init", "yellow"],
                ["  ✓", "  Created soroban.toml", "teal"],
                ["", "", ""],
                ["$", " soropkg add blend-capital/blend@^2", "yellow"],
                ["  ✓", "  Resolved blend-capital/blend@2.0.0", "teal"],
                ["  ✓", "  Updated soroban.toml", "teal"],
                ["", "", ""],
                ["$", " soropkg generate", "yellow"],
                ["  ✓", "  blend_capital__blend.ts", "teal"],
              ].map(([prefix, rest, color], i) => (
                <span key={i} style={{ display: "block" }}>
                  {color === "yellow"
                    ? <><span style={{ color: "var(--yellow)" }}>{prefix}</span>{rest}</>
                    : color === "teal"
                    ? <span style={{ color: "var(--teal)" }}>{prefix}{rest}</span>
                    : <span>{prefix}{rest}</span>
                  }
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
