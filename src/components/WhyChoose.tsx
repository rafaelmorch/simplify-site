"use client";

import { useLanguage } from "./LanguageProvider";

export default function WhyChoose() {
  const { language } = useLanguage();

  const content = {
    pt: {
      label: "Como ajudamos",
      title: "Soluções pensadas para organizar, simplificar e fortalecer sua operação",
      subtitle:
        "A Simplify ajuda empresas a ganhar mais clareza, economizar tempo e estruturar melhor suas atividades com soluções sob medida para a realidade do negócio.",
      items: [
        {
          title: "Mais organização",
          description:
            "Estruturamos informações, rotinas e atividades para que sua operação funcione de forma mais clara e eficiente.",
        },
        {
          title: "Economia de tempo",
          description:
            "Reduzimos tarefas desnecessárias e criamos soluções que ajudam você a ganhar tempo no dia a dia.",
        },
        {
          title: "Soluções sob medida",
          description:
            "Cada empresa tem uma realidade. Por isso, trabalhamos com soluções personalizadas para o que você realmente precisa.",
        },
        {
          title: "Mais controle",
          description:
            "Com mais visibilidade sobre processos e informações, fica mais fácil tomar decisões e crescer com segurança.",
        },
      ],
    },
    en: {
      label: "How we help",
      title: "Solutions designed to organize, simplify, and strengthen your operation",
      subtitle:
        "Simplify helps businesses gain clarity, save time, and better structure their activities with tailored solutions for their reality.",
      items: [
        {
          title: "More organization",
          description:
            "We structure information, routines, and activities so your operation works more clearly and efficiently.",
        },
        {
          title: "Time savings",
          description:
            "We reduce unnecessary tasks and create solutions that help you save time in your daily work.",
        },
        {
          title: "Tailored solutions",
          description:
            "Every business has its own reality. That is why we build customized solutions for what you actually need.",
        },
        {
          title: "More control",
          description:
            "With better visibility over processes and information, it becomes easier to make decisions and grow with confidence.",
        },
      ],
    },
    es: {
      label: "Cómo ayudamos",
      title: "Soluciones pensadas para organizar, simplificar y fortalecer su operación",
      subtitle:
        "Simplify ayuda a las empresas a ganar claridad, ahorrar tiempo y estructurar mejor sus actividades con soluciones a medida para su realidad.",
      items: [
        {
          title: "Más organización",
          description:
            "Estructuramos información, rutinas y actividades para que su operación funcione de forma más clara y eficiente.",
        },
        {
          title: "Ahorro de tiempo",
          description:
            "Reducimos tareas innecesarias y creamos soluciones que le ayudan a ahorrar tiempo en el día a día.",
        },
        {
          title: "Soluciones a medida",
          description:
            "Cada empresa tiene una realidad. Por eso trabajamos con soluciones personalizadas para lo que realmente necesita.",
        },
        {
          title: "Más control",
          description:
            "Con más visibilidad sobre procesos e información, es más fácil tomar decisiones y crecer con seguridad.",
        },
      ],
    },
  };

  const section = content[language];

  return (
    <section
      style={{
        width: "100%",
        padding: "90px 20px",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 50px auto",
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
            {section.label}
          </p>

          <h2
            style={{
              fontSize: "clamp(30px, 6vw, 40px)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "18px",
              lineHeight: 1.15,
            }}
          >
            {section.title}
          </h2>

          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.7 }}>
            {section.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {section.items.map((item) => (
            <div
              key={item.title}
              style={{
                padding: "28px",
                backgroundColor: "#f9fafb",
                borderTop: "4px solid #DC2626",
                borderLeft: "1px solid #e5e7eb",
                borderRight: "1px solid #e5e7eb",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
