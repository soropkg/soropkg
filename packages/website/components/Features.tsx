"use client";

const features = [
  {
    icon: "🔍",
    command: "soropkg inspect",
    title: "Inspect any contract",
    description:
      "Read the live interface of any deployed Soroban contract directly from the blockchain. No ABI files needed — the spec lives on-chain.",
    color: "#6e56cf",
    dim: "rgba(110,86,207,0.1)",
  },
  {
    icon: "📦",
    command: "soropkg init",
    title: "Initialize a project",
    description:
      "Scaffold a soroban.toml manifest for your project. Declare your contract IDs per network and your dependencies in seconds.",
    color: "#05a2c2",
    dim: "rgba(5,162,194,0.1)",
  },
  {
    icon: "➕",
    command: "soropkg add",
    title: "Add dependencies",
    description:
      "Add a published contract package to your project. soropkg resolves semver ranges and updates your manifest automatically.",
    color: "#3e63dd",
    dim: "rgba(62,99,221,0.1)",
  },
  {
    icon: "📤",
    command: "soropkg publish",
    title: "Publish packages",
    description:
      "Publish your contract to the registry with GitHub OAuth. On-chain WASM hash verification ensures binaries match what's deployed.",
    color: "#9b8afb",
    dim: "rgba(155,138,251,0.1)",
  },
  {
    icon: "⚡",
    command: "soropkg generate",
    title: "Generate TypeScript clients",
    description:
      "Auto-generate fully-typed TypeScript bindings for any contract package. No manual ABI parsing — just import and call.",
    color: "#2ec8e6",
    dim: "rgba(46,200,230,0.1)",
  },
  {
    icon: "🔎",
    command: "soropkg search",
    title: "Search the registry",
    description:
      "Full-text search across the entire registry. Find contracts by name, category, or protocol. Filter by network availability.",
    color: "#30a46c",
    dim: "rgba(48,164,108,0.1)",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#6e56cf", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
          Everything you need
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
          A complete toolchain for<br />Soroban development
        </h2>
        <p style={{ fontSize: 17, color: "var(--text-secondary)", marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
          From discovery to deployment — soropkg gives you the same ergonomics you expect from modern package managers, built natively for smart contracts.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 20,
      }}>
        {features.map(f => (
          <div
            key={f.command}
            className="card-glow"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "28px 28px 32px",
              transition: "transform 0.2s, border-color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--border-accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: f.dim,
              border: `1px solid ${f.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              marginBottom: 20,
            }}>
              {f.icon}
            </div>

            <code className="mono" style={{ fontSize: 12, color: f.color, fontWeight: 600, letterSpacing: "0.02em" }}>
              {f.command}
            </code>

            <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)", marginTop: 8, marginBottom: 10, letterSpacing: "-0.01em" }}>
              {f.title}
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
