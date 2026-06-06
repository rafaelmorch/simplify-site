"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function WhoWeAreSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [years, setYears] = useState(0);
  const [hours, setHours] = useState(0);
  const [custom, setCustom] = useState(0);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    let restartInterval: ReturnType<typeof setInterval> | null = null;

    const runCounters = () => {
      setYears(0);
      setHours(0);
      setCustom(0);

      const yearsInterval = setInterval(() => {
        setYears((v) => {
          if (v >= 20) {
            clearInterval(yearsInterval);
            return 20;
          }
          return v + 1;
        });
      }, 40);

      const hoursInterval = setInterval(() => {
        setHours((v) => {
          if (v >= 1000) {
            clearInterval(hoursInterval);
            return 1000;
          }
          return v + 25;
        });
      }, 20);

      const customInterval = setInterval(() => {
        setCustom((v) => {
          if (v >= 100) {
            clearInterval(customInterval);
            return 100;
          }
          return v + 2;
        });
      }, 25);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          runCounters();

          if (!restartInterval) {
            restartInterval = setInterval(runCounters, 5000);
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
      if (restartInterval) clearInterval(restartInterval);
    };
  }, []);

  const content = {
    pt: {
      label: "Quem somos",
      title: "Quem está por trás da Simplify?",
      subtitle:
        "Experiência corporativa, tecnologia e visão de negócios reunidas para ajudar pequenas empresas a crescer de forma organizada e eficiente.",
      p1: "A Simplify nasceu da percepção de que muitas pequenas empresas enfrentam os mesmos desafios: processos manuais, informações espalhadas, falta de organização e pouco tempo para focar no crescimento.",
      p2: "Nossa missão é transformar operações complexas em soluções simples e práticas, utilizando tecnologia, automação, inteligência artificial e processos inteligentes para gerar resultados reais.",
      highlight: "Não vendemos tecnologia. Transformamos problemas reais em soluções simples.",
      cards: [
        ["Nossa Missão", "Simplificar processos para que empresas possam crescer com mais eficiência."],
        ["Nosso Diferencial", "Unimos estratégia, tecnologia e automação em soluções acessíveis para pequenas empresas."],
        ["Nosso Objetivo", "Ajudar empresários a economizar tempo, reduzir tarefas manuais e focar no crescimento."],
      ],
      stats: [
        [`${years}+`, "Anos de experiência"],
        [`${hours}+`, "Horas economizadas"],
        [`${custom}%`, "Soluções personalizadas"],
      ],
    },
    en: {
      label: "Who we are",
      title: "Who is behind Simplify?",
      subtitle:
        "Corporate experience, technology, and business vision combined to help small businesses grow with organization and efficiency.",
      p1: "Simplify was created from the realization that many small businesses face the same challenges: manual processes, scattered information, lack of organization, and little time to focus on growth.",
      p2: "Our mission is to turn complex operations into simple and practical solutions using technology, automation, artificial intelligence, and smart processes.",
      highlight: "We do not sell technology. We transform real problems into simple solutions.",
      cards: [
        ["Our Mission", "Simplify processes so businesses can grow with more efficiency."],
        ["Our Difference", "We combine strategy, technology, and automation into accessible solutions."],
        ["Our Goal", "Help business owners save time, reduce manual tasks, and focus on growth."],
      ],
      stats: [
        [`${years}+`, "Years of experience"],
        [`${hours}+`, "Hours saved"],
        [`${custom}%`, "Tailored solutions"],
      ],
    },
    es: {
      label: "Quiénes somos",
      title: "¿Quién está detrás de Simplify?",
      subtitle:
        "Experiencia corporativa, tecnología y visión de negocios reunidas para ayudar a pequeñas empresas a crecer con organización y eficiencia.",
      p1: "Simplify nació al observar que muchas pequeñas empresas enfrentan los mismos desafíos: procesos manuales, información dispersa, falta de organización y poco tiempo para enfocarse en crecer.",
      p2: "Nuestra misión es transformar operaciones complejas en soluciones simples y prácticas usando tecnología, automatización, inteligencia artificial y procesos inteligentes.",
      highlight: "No vendemos tecnología. Transformamos problemas reales en soluciones simples.",
      cards: [
        ["Nuestra Misión", "Simplificar procesos para que las empresas crezcan con más eficiencia."],
        ["Nuestro Diferencial", "Unimos estrategia, tecnología y automatización en soluciones accesibles."],
        ["Nuestro Objetivo", "Ayudar a empresarios a ahorrar tiempo, reducir tareas manuales y enfocarse en crecer."],
      ],
      stats: [
        [`${years}+`, "Años de experiencia"],
        [`${hours}+`, "Horas ahorradas"],
        [`${custom}%`, "Soluciones personalizadas"],
      ],
    },
  };

  const section = content[language] || content.pt;

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      style={{
        width: "100%",
        padding: "110px 20px",
        backgroundColor: "#1f2937",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="who-we-are-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "54px",
            alignItems: "center",
          }}
        >
          <img
            src="/images/who-we-are.png"
            alt="Simplify team"
            style={{
              width: "100%",
              maxWidth: "650px",
              height: "500px",
              minHeight: "500px",
              borderRadius: "14px",
              objectFit: "cover",
              boxShadow: "0 24px 70px rgba(17,24,39,0.14)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0) scale(1)" : "translateX(-40px) scale(1.05)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          />

          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "1px",
                color: "#DC2626",
                marginBottom: "14px",
                textTransform: "uppercase",
              }}
            >
              {section.label}
            </p>

            <h2
              style={{
                fontSize: "clamp(34px, 6vw, 50px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "18px",
              }}
            >
              {section.title}
            </h2>

            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#d1d5db", marginBottom: "18px" }}>
              {section.subtitle}
            </p>

            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#d1d5db", marginBottom: "14px" }}>
              {section.p1}
            </p>

            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#d1d5db", marginBottom: "22px" }}>
              {section.p2}
            </p>

            <div
              style={{
                borderLeft: visible ? "4px solid #FACC15" : "4px solid transparent",
                paddingLeft: "18px",
                fontSize: "20px",
                lineHeight: 1.4,
                fontWeight: 800,
                color: "#f8fafc",
                textShadow: "0 2px 8px rgba(0,0,0,0.35)",
                transition: "border-color 0.6s ease 0.45s",
              }}
            >
              {section.highlight}
            </div>
          </div>
        </div>

        <div
          className="who-we-are-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            marginTop: "46px",
            marginBottom: "38px",
          }}
        >
          {section.cards.map(([title, text], index) => (
            <div
              key={title}
              style={{
                border: "1px solid rgba(250,204,21,0.55)",
                borderRadius: "12px",
                padding: "24px", boxSizing: "border-box", width: "100%", minWidth: 0,
                background: "rgba(255,255,255,0.04)",
                boxShadow: "0 14px 45px rgba(0,0,0,0.25)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(25px)",
                transition: `opacity 0.6s ease ${0.15 + index * 0.15}s, transform 0.6s ease ${0.15 + index * 0.15}s`,
              }}
            >
              <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>
                {title}
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#d1d5db" }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {section.stats.map(([number, label], index) => (
            <div
              key={`${label}-${index}`}
              style={{
                textAlign: "center",
                padding: "26px", boxSizing: "border-box", width: "100%", minWidth: 0,
                borderRadius: "14px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(250,204,21,0.25)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.2 + index * 0.15}s`,
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 900,
                  color: "#FACC15",
                  marginBottom: "8px",
                }}
              >
                {number}
              </div>

              <div
                style={{
                  color: "#d1d5db",
                  fontSize: "15px",
                  lineHeight: 1.5,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

