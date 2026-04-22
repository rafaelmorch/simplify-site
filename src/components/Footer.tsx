export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "50px 20px",
        backgroundColor: "#0f172a",
        borderTop: "2px solid #C0C0C0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#C0C0C0",
            letterSpacing: "1px",
          }}
        >
          SIMPLIFY
        </div>

        <div
          style={{
            fontSize: "15px",
            color: "#d1d5db",
          }}
        >
          Smart solutions for small businesses
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} Simplify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
