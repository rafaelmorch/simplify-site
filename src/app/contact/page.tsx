import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#111827",
          padding: "90px 20px",
          textAlign: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
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
            Let’s Talk
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 7vw, 44px)",
              fontWeight: 700,
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Contact Simplify
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 3vw, 18px)",
              color: "#4b5563",
              lineHeight: 1.7,
            }}
          >
            Tell us about your business and let’s find the best way to organize,
            simplify, and strengthen your operation.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            borderTop: "4px solid #DC2626",
            borderLeft: "1px solid #e5e7eb",
            borderRight: "1px solid #e5e7eb",
            borderBottom: "1px solid #e5e7eb",
            padding: "36px",
            backgroundColor: "#f9fafb",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#111827",
              marginBottom: "18px",
            }}
          >
            Contact Information
          </p>

          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "12px" }}>
            Email: contact@simplify.com
          </p>

          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "12px" }}>
            Phone: (000) 000-0000
          </p>

          <p style={{ fontSize: "16px", color: "#4b5563" }}>
            Location: Orlando, Florida
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
