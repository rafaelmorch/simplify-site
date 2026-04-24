"use client";

import { siteData } from "../data/site";
import { useLanguage } from "./LanguageProvider";
import ServicesCarousel from "./ServicesCarousel";

export default function Hero() {
  const { language } = useLanguage();
  const content = siteData[language];

  const buttons = {
    pt: {
      primary: "Receber solução personalizada",
      secondary: "Ver como funciona",
    },
    en: {
      primary: "Get a personalized solution",
      secondary: "See how it works",
    },
    es: {
      primary: "Recibir solución personalizada",
      secondary: "Ver cómo funciona",
    },
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "92vh",
        minHeight: "760px",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.62)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          padding: "110px 20px 240px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(34px, 8vw, 56px)",
            fontWeight: 700,
            marginBottom: "20px",
            lineHeight: 1.1,
          }}
        >
          {content.headline}
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 3vw, 20px)",
            color: "#e5e7eb",
            marginBottom: "30px",
            lineHeight: 1.6,
          }}
        >
          {content.subheadline}
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#assessment"
            style={{
              padding: "14px 28px",
              backgroundColor: "#DC2626",
              color: "#ffffff",
              borderRadius: "6px",
              fontWeight: 700,
            }}
          >
            {buttons[language].primary}
          </a>

          <a
            href="#services"
            style={{
              padding: "14px 28px",
              border: "1px solid #ffffff",
              color: "#ffffff",
              borderRadius: "6px",
              fontWeight: 600,
            }}
          >
            {buttons[language].secondary}
          </a>
        </div>
      </div>

      <ServicesCarousel />
    </section>
  );
}
