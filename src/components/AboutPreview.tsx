export default function AboutPreview() {
  return (
    <section
      style={{
        width: "100%",
        padding: "90px 20px",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "100%",
              minHeight: "320px",
              backgroundColor: "#111827",
              borderTop: "4px solid #FACC15",
            }}
          />
        </div>

        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "#DC2626",
              marginBottom: "14px",
              textTransform: "uppercase",
            }}
          >
            About Us
          </p>

          <h2
            style={{
              fontSize: "clamp(30px, 6vw, 38px)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Built to simplify growth for small businesses
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4b5563",
              marginBottom: "18px",
            }}
          >
            Simplify was created to help small businesses organize operations,
            improve visibility, and create practical systems that support real growth.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            We focus on clear structure, smart execution, and solutions that make
            day-to-day operations easier, stronger, and more scalable.
          </p>
        </div>
      </div>
    </section>
  );
}
