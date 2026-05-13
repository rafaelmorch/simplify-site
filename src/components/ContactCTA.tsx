"use client";

import { useLanguage } from "./LanguageProvider";

export default function ContactCTA() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Pronto para simplificar sua operação?",
      subtitle:
        "Assim mesmo: simples, objetivo e na medida certa para o seu negócio.",
      button: "Falar com a Simplify",
    },
    en: {
      title: "Ready to simplify your operation?",
      subtitle:
        "Just like that: simple, objective, and tailored to your business.",
      button: "Talk to Simplify",
    },
    es: {
      title: "¿Listo para simplificar su operación?",
      subtitle:
        "Así de simple: objetivo y hecho a la medida de su negocio.",
      button: "Hablar con Simplify",
    },
  };

  const section = content[language] || content.pt;

  return (
    <section
      style={{
        width: "100%",
        padding: "110px 20px",
        background:
          "linear-gradient(135deg, #111827 0%, #0f172a 100%)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#cbd5e1",
            marginBottom: "22px",
          }}
        >
          {section.subtitle}
        </p>

        <h2
          style={{
            fontSize: "clamp(26px, 4.5vw, 40px)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: "22px",
          }}
        >
          {section.title}
        </h2>

        

        <a
          href="#assessment"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FACC15",
            color: "#111827",
            padding: "16px 34px",
            borderRadius: "10px",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          {section.button}
        </a>
      </div>
    </section>
  );
}

