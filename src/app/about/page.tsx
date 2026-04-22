import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
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
            Who We Are
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 7vw, 44px)",
              fontWeight: 700,
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Built to simplify growth for small businesses
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 3vw, 18px)",
              color: "#4b5563",
              lineHeight: 1.7,
            }}
          >
            Simplify was created to help businesses gain structure, clarity, and
            practical support for real-world operations and sustainable growth.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            minHeight: "340px",
            backgroundColor: "#f3f4f6",
            borderTop: "4px solid #DC2626",
          }}
        />

        <div>
          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 34px)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Our mission
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4b5563",
              marginBottom: "18px",
            }}
          >
            We help small businesses create stronger foundations through better
            organization, smarter execution, and clear digital solutions.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            Our goal is to remove confusion, simplify decision-making, and build
            systems that support growth with more control and confidence.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
