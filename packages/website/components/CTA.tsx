"use client";

export default function CTA() {
  return (
    <section style={{
      padding: "100px 24px",
      background: "var(--bg-card)",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 700,
        margin: "0 auto",
        textAlign: "center",
      }}>
        {/* Glow orb */}
        <div style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6e56cf, #05a2c2)",
          margin: "0 auto 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 44,
          boxShadow: "0 0 60px rgba(110,86,207,0.35)",
        }}>
          📦
        </div>

        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 700,
          color: "var(--text-primary)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Ready to build on Stellar?
        </h2>
        <p style={{
          fontSize: 17,
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: 48,
          maxWidth: 500,
          margin: "0 auto 48px",
        }}>
          Install soropkg today and start managing smart contract dependencies the way you manage npm packages — with full type safety and on-chain verification.
        </p>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 20px",
          background: "#0a0a0a",
          border: "1px solid var(--border-accent)",
          borderRadius: 12,
          marginBottom: 32,
        }}>
          <span className="mono" style={{ fontSize: 14, color: "var(--text-muted)" }}>$</span>
          <code className="mono" style={{ fontSize: 15, color: "var(--text-primary)" }}>
            npm install -g soropkg
          </code>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
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
              background: "linear-gradient(135deg, #6e56cf, #4c3a99)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              boxShadow: "0 4px 24px rgba(110,86,207,0.3)",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            Star on GitHub
          </a>
          <a
            href="https://developers.stellar.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 10,
              background: "transparent",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              border: "1px solid var(--border-accent)",
              transition: "border-color 0.15s, color 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#6e56cf"; e.currentTarget.style.color = "var(--text-primary)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
          >
            Stellar Docs
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
