import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { siteData } from "../../data/site";

export default function ServicesPage() {
  const content = siteData.pt;

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
            O que fazemos
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 7vw, 44px)",
              fontWeight: 700,
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Soluções pensadas para simplificar sua operação
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 3vw, 18px)",
              color: "#4b5563",
              lineHeight: 1.7,
            }}
          >
            Ajudamos empresas a organizar suas atividades com soluções sob medida
            que economizam tempo, reduzem a desorganização e tornam a rotina mais eficiente.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {content.services.map((service) => (
            <div
              key={service.title}
              style={{
                borderTop: "4px solid #DC2626",
                borderLeft: "1px solid #e5e7eb",
                borderRight: "1px solid #e5e7eb",
                borderBottom: "1px solid #e5e7eb",
                padding: "30px",
                backgroundColor: "#f9fafb",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "999px",
                  backgroundColor: "#FACC15",
                  marginBottom: "18px",
                }}
              />

              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#111827",
                }}
              >
                {service.title}
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  color: "#4b5563",
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
