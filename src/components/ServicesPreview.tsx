"use client";

import { siteData } from "../data/site";
import { useLanguage } from "./LanguageProvider";

export default function ServicesPreview() {
  const { language } = useLanguage();
  const content = siteData[language];

  const sectionText = {
    pt: {
      title: "Nossos serviços",
      subtitle:
        "Soluções práticas para organizar sua operação, economizar tempo e trazer mais eficiência para o dia a dia.",
    },
    en: {
      title: "Our services",
      subtitle:
        "Practical solutions to organize your operation, save time, and bring more efficiency to daily work.",
    },
    es: {
      title: "Nuestros servicios",
      subtitle:
        "Soluciones prácticas para organizar su operación, ahorrar tiempo y brindar más eficiencia al día a día.",
    },
  };

  return (
    <section id="services"
      style={{
        width: "100%",
        padding: "80px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "clamp(30px, 6vw, 36px)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            {sectionText[language].title}
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              color: "#6b7280",
              lineHeight: 1.6,
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            {sectionText[language].subtitle}
          </p>
        </div>

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

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#4b5563",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
