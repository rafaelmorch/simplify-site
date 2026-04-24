"use client";

import { useLanguage } from "./LanguageProvider";

export default function AboutPreview() {
  const { language } = useLanguage();

  const content = {
    pt: {
      label: "Sobre nós",
      title: "Criada para simplificar o crescimento de pequenos negócios",
      p1: "A Simplify ajuda empresas a organizar suas atividades, melhorar seus processos e criar soluções sob medida para uma operação mais eficiente.",
      p2: "Nosso foco é trazer clareza, economia de tempo e mais controle para o dia a dia do seu negócio.",
    },
    en: {
      label: "About us",
      title: "Built to simplify growth for small businesses",
      p1: "Simplify helps businesses organize their activities, improve processes, and create tailored solutions for a more efficient operation.",
      p2: "Our focus is to bring clarity, time savings, and more control to your daily business operations.",
    },
    es: {
      label: "Sobre nosotros",
      title: "Creada para simplificar el crecimiento de pequeños negocios",
      p1: "Simplify ayuda a las empresas a organizar sus actividades, mejorar procesos y crear soluciones a medida para una operación más eficiente.",
      p2: "Nuestro enfoque es brindar claridad, ahorro de tiempo y más control al día a día de su negocio.",
    },
  };

  const section = content[language];

  return (
    <section id="about"
      style={{
        width: "100%",
        padding: "90px 20px",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "100%",
              minHeight: "320px",
              backgroundColor: "#111827",
              borderTop: "4px solid #FACC15",
            }}
          />
        </div>

        <div>
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
              fontSize: "clamp(30px, 6vw, 38px)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            {section.title}
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4b5563",
              marginBottom: "18px",
            }}
          >
            {section.p1}
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            {section.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
