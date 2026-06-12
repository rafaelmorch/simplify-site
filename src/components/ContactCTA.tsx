"use client";

import { useLanguage } from "./LanguageProvider";

export default function ContactCTA() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Pronto para simplificar sua operação?",
      subtitle: "Assim mesmo: simples, objetivo e na medida certa para o seu negócio.",
      button: "Falar com a Simplify",
    },
    en: {
      title: "Ready to simplify your operation?",
      subtitle: "Just like that: simple, objective, and tailored to your business.",
      button: "Talk to Simplify",
    },
    es: {
      title: "¿Listo para simplificar su operación?",
      subtitle: "Así de simple: objetivo y hecho a la medida de su negocio.",
      button: "Hablar con Simplify",
    },
  };

  const section = content[language] || content.pt;

  return (
    <section
      style={{
        width: "100%",
        padding: "100px 20px",
        background: "#0b1220",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#cbd5e1",
            marginBottom: "14px",
          }}
        >
          {section.subtitle}
        </p>

        <h2
          style={{
            fontSize: "clamp(34px, 6vw, 52px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "30px",
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

        <div
          style={{
            marginTop: "22px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
            fontSize: "15px",
          }}
        >
          <a
            href="mailto:contact@simplifyps.com"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            contact@simplifyps.com
          </a>

          <span style={{ color: "rgba(255,255,255,0.35)" }}>|</span>

          <a
            href="https://wa.me/14079063563"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            WhatsApp: +1 (407) 906-3563
          </a>
        </div>
      </div>
    </section>
  );
}
