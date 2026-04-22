export default function ContactCTA() {
  return (
    <section
      style={{
        width: "100%",
        padding: "90px 20px",
        background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#FACC15",
            marginBottom: "14px",
            textTransform: "uppercase",
          }}
        >
          Next Step
        </p>

        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Ready to simplify your business?
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "30px",
            color: "#d1d5db",
          }}
        >
          Let’s build a clearer, stronger, and more scalable structure for your company.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "14px 30px",
            backgroundColor: "#DC2626",
            color: "#ffffff",
            borderRadius: "6px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
