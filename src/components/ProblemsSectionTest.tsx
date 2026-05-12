"use client";

import { useLanguage } from "./LanguageProvider";

export default function ProblemsSectionTest() {
  const { language } = useLanguage();

  const content = {
    pt: {
      label: "Teste de Ícones",
      title: "Versão alternativa da seção Problemas que resolvemos",
      subtitle:
        "Comparação visual dos novos ícones personalizados.",
      items: [
        {
          title: "Tempo perdido",
          text: "Tarefas manuais consomem horas importantes da operação.",
          icon: "/images/icons/1.png",
        },
        {
          title: "Informação espalhada",
          text: "Dados importantes ficam perdidos entre ferramentas.",
          icon: "/images/icons/2.png",
        },
        {
          title: "Falta de visibilidade",
          text: "Dificuldade em enxergar gargalos e prioridades.",
          icon: "/images/icons/3.png",
        },
        {
          title: "Processos confusos",
          text: "Cada pessoa executa tarefas de uma forma diferente.",
          icon: "/images/icons/4.png",
        },
        {
          title: "Crescimento desorganizado",
          text: "O aumento da demanda gera mais caos que resultado.",
          icon: "/images/icons/5.png",
        },
        {
          title: "Tudo depende de você",
          text: "A operação para quando o dono não está presente.",
          icon: "/images/icons/6.png",
        },
      ],
    },
  };

  const section = content.pt;

  return (
    <section
      style={{
        width: "100%",
        padding: "120px 20px",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ maxWidth: "780px", marginBottom: "60px" }}>
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
              color: "#111827",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            {section.title}
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#4b5563",
            }}
          >
            {section.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "18px",
          }}
        >
          {section.items.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.82)",
                border: "1.2px solid rgba(255,229,0,0.9)",
                borderRadius: "10px",
                padding: "24px",
                minHeight: "210px",
                boxShadow: "0 18px 50px rgba(17,24,39,0.06)",
                backdropFilter: "blur(14px)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  
                  
                }}
              >
                <img
                  src={item.icon}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: "10px",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#4b5563",
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
