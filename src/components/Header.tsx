"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const menu = {
    pt: [
      { label: "Problemas", href: "#problems" },
      { label: "Soluções", href: "#services" },
      { label: "Sobre", href: "#about" },
      { label: "Diagnóstico", href: "#assessment" },
    ],
    en: [
      { label: "Problems", href: "#problems" },
      { label: "Solutions", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Assessment", href: "#assessment" },
    ],
    es: [
      { label: "Problemas", href: "#problems" },
      { label: "Soluciones", href: "#services" },
      { label: "Sobre", href: "#about" },
      { label: "Diagnóstico", href: "#assessment" },
    ],
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "10px 14px" : "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src="/images/logo.png"
            alt="Simplify"
            style={{
              width: isMobile ? "34px" : "42px",
              height: isMobile ? "34px" : "42px",
              objectFit: "contain",
            }}
          />

          <span
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-gemunu)",
              fontSize: isMobile ? "24px" : "30px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Simplify
          </span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "0" : "28px",
          }}
        >
          {!isMobile &&
            menu[language].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: "var(--font-gemunu)",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.6px",
                }}
              >
                {item.label}
              </a>
            ))}

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            style={{
              backgroundColor: "#111827",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "8px",
              padding: isMobile ? "5px 8px" : "6px 10px",
              fontSize: isMobile ? "13px" : "14px",
            }}
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
