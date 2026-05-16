"use client";
import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const cmd = "npm install -g soropkg";

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "100px 32px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Dot texture — Stellar brand motif */}
      <div className="dot-texture" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        opacity: 0.6,
      }} />

      {/* Faint yellow glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(253,218,36,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 760, textAlign: "center", position: "relative" }}>

        {/* Label */}
        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 500,
          fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--yellow)", marginBottom: 28,
        }}>
          Built for the Stellar ecosystem
        </p>

        {/* Headline — Lora serif, Stellar style */}
        <h1 className="serif" style={{
          fontSize: "clamp(44px, 6.5vw, 80px)",
          fontWeight: 600, lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--white)",
          marginBottom: 28,
        }}>
          The package manager<br />
          for{" "}
          <em style={{ fontStyle: "italic", color: "var(--yellow)" }}>Soroban</em>{" "}
          smart contracts
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: 17, lineHeight: 1.75,
          color: "var(--text-mid)",
          maxWidth: 560, margin: "0 auto 48px",
        }}>
          Inspect live on-chain interfaces, manage contract dependencies,
          and generate typed TypeScript clients — all from one CLI.
        </p>

        {/* Install command */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 0,
          background: "var(--surface-1)",
          border: "1px solid var(--border-hi)",
          borderRadius: 6, overflow: "hidden",
          marginBottom: 32,
        }}>
          <div style={{ padding: "12px 18px", display: "flex", alignItems: "center", gap: 10, borderRight: "1px solid var(--border)" }}>
            <span className="mono" style={{ fontSize: 13, color: "var(--text-lo)", userSelect: "none" }}>$</span>
            <code className="mono" style={{ fontSize: 14, color: "var(--text-hi)" }}>{cmd}</code>
          </div>
          <button onClick={copy} style={{
            padding: "0 16px", height: "100%",
            background: "transparent", border: "none",
            color: copied ? "var(--yellow)" : "var(--text-lo)",
            cursor: "pointer", display: "flex", alignItems: "center",
            transition: "color 0.15s", minHeight: 46,
          }}
            title="Copy to clipboard"
          >
            {copied ? <Check size={14} strokeWidth={2} /> : <Copy size={14} strokeWidth={1.5} />}
          </button>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#how-it-works" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 24px", borderRadius: 4,
            background: "var(--yellow)",
            color: "#0F0F0F",
            textDecoration: "none", fontSize: 14, fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            transition: "opacity 0.15s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Get started
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
          <a href="https://github.com/Ipramking/soropkg" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 24px", borderRadius: 4,
            background: "transparent",
            color: "var(--text-hi)",
            textDecoration: "none", fontSize: 14, fontWeight: 400,
            border: "1px solid var(--border-hi)",
            transition: "border-color 0.15s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "var(--warm)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-hi)"}
          >
            View source
          </a>
        </div>

        {/* Divider with stats */}
        <div style={{
          display: "flex", alignItems: "center", gap: 48,
          justifyContent: "center", marginTop: 72,
          paddingTop: 48, borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
        }}>
          {[
            { value: "19+", label: "Seed contracts" },
            { value: "3", label: "Networks" },
            { value: "7", label: "CLI commands" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="serif" style={{
                fontSize: 32, fontWeight: 600,
                color: "var(--yellow)", letterSpacing: "-0.02em",
              }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "var(--text-lo)", marginTop: 4, fontWeight: 400 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
