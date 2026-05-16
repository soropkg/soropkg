"use client";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "40px 24px",
      background: "var(--bg-base)",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: "linear-gradient(135deg, #6e56cf, #05a2c2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "monospace",
          }}>
            sp
          </div>
          <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text-secondary)" }}>soropkg</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: "https://github.com/lumenloop/soropkg" },
            { label: "Stellar", href: "https://stellar.org" },
            { label: "Soroban Docs", href: "https://developers.stellar.org/docs/build/smart-contracts/overview" },
            { label: "SCF", href: "https://communityfund.stellar.org" },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text-secondary)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {l.label}
            </a>
          ))}
        </div>

        <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
          Built for the Stellar ecosystem
        </p>
      </div>
    </footer>
  );
}
