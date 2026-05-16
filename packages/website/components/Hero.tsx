"use client";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const installCmd = "npm install -g soropkg";

  const copy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 700,
        height: 400,
        background: "radial-gradient(ellipse, rgba(110,86,207,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "15%",
        width: 400,
        height: 300,
        background: "radial-gradient(ellipse, rgba(5,162,194,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 720, textAlign: "center", position: "relative" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "5px 14px",
          borderRadius: 100,
          border: "1px solid rgba(110,86,207,0.3)",
          background: "rgba(110,86,207,0.08)",
          marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6e56cf", display: "inline-block" }} />
          <span style={{ fontSize: 12, color: "#9b8afb", fontWeight: 500, letterSpacing: "0.05em" }}>
            Built for the Stellar ecosystem
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(40px, 6vw, 68px)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          marginBottom: 24,
        }}>
          The package manager for{" "}
          <span className="gradient-text">Soroban</span>{" "}
          smart contracts
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 19,
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          maxWidth: 560,
          margin: "0 auto 48px",
          fontWeight: 400,
        }}>
          Discover, install, and publish smart contract packages on Stellar. Read live on-chain interfaces, manage dependencies, and generate typed TypeScript clients — all from the CLI.
        </p>

        {/* Install command */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 20px",
          background: "var(--bg-card)",
          border: "1px solid var(--border-accent)",
          borderRadius: 12,
          marginBottom: 32,
          cursor: "pointer",
        }}
          onClick={copy}
          title="Click to copy"
        >
          <span style={{ color: "var(--text-muted)", fontSize: 14, userSelect: "none" }} className="mono">$</span>
          <code className="mono" style={{ fontSize: 15, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            {installCmd}
          </code>
          <button
            style={{
              marginLeft: 8,
              padding: "4px 10px",
              borderRadius: 6,
              border: "1px solid var(--border)",
              background: copied ? "rgba(48,164,108,0.1)" : "transparent",
              color: copied ? "#30a46c" : "var(--text-muted)",
              fontSize: 12,
              cursor: "pointer",
              transition: "all 0.15s",
              fontWeight: 500,
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#how-it-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #6e56cf, #4c3a99)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              transition: "opacity 0.15s, transform 0.15s",
              boxShadow: "0 4px 24px rgba(110,86,207,0.3)",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="https://github.com/lumenloop/soropkg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 10,
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              border: "1px solid var(--border-accent)",
              transition: "border-color 0.15s, transform 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#6e56cf"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex",
          gap: 40,
          justifyContent: "center",
          marginTop: 64,
          paddingTop: 48,
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
        }}>
          {[
            { value: "19+", label: "Ecosystem Contracts" },
            { value: "3", label: "Networks Supported" },
            { value: "7", label: "CLI Commands" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
