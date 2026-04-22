export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "#111827",
        borderBottom: "2px solid #C0C0C0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#C0C0C0",
            letterSpacing: "1px",
          }}
        >
          SIMPLIFY
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="/" style={{ color: "#ffffff", fontSize: "15px" }}>
            Home
          </a>
          <a href="/about" style={{ color: "#ffffff", fontSize: "15px" }}>
            About
          </a>
          <a href="/services" style={{ color: "#ffffff", fontSize: "15px" }}>
            Services
          </a>
          <a
            href="/contact"
            style={{
              color: "#111827",
              backgroundColor: "#FACC15",
              padding: "8px 16px",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
