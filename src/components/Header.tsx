"use client";

import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const menu = {
    pt: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      cta: "Começar",
    },
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      cta: "Get Started",
    },
    es: {
      home: "Inicio",
      about: "Sobre",
      services: "Servicios",
      cta: "Comenzar",
    },
  };

  const buttonStyle = (current: string) => ({
    backgroundColor: language === current ? "#FACC15" : "transparent",
    color: language === current ? "#111827" : "#ffffff",
    border: "1px solid #C0C0C0",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: 600,
  });

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
            alignItems: "center",
          }}
        >
          <a href="/" style={{ color: "#ffffff" }}>
            {menu[language].home}
          </a>

          <a href="/about" style={{ color: "#ffffff" }}>
            {menu[language].about}
          </a>

          <a href="/services" style={{ color: "#ffffff" }}>
            {menu[language].services}
          </a>

          <a
            href="/assessment"
            style={{
              color: "#111827",
              backgroundColor: "#FACC15",
              padding: "8px 16px",
              borderRadius: "6px",
              fontWeight: 600,
            }}
          >
            {menu[language].cta}
          </a>

          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => setLanguage("pt")} style={buttonStyle("pt")}>
              PT
            </button>
            <button onClick={() => setLanguage("en")} style={buttonStyle("en")}>
              EN
            </button>
            <button onClick={() => setLanguage("es")} style={buttonStyle("es")}>
              ES
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
