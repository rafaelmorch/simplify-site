"use client";

import { useLanguage } from "./LanguageProvider";

export default function ProblemsSection() {
  const { language } = useLanguage();

  const content = {
    pt: {
      label: "Problemas que resolvemos",
      title: "Se sua operação depende de você o tempo todo, algo precisa mudar",
      subtitle:
        "Negócios crescem, mas muitas vezes a estrutura não acompanha. O resultado é perda de tempo, retrabalho e decisões tomadas no escuro.",
      items: [
        {
          title: "Tempo perdido",
          text: "Tarefas manuais consomem horas que poderiam ser usadas para vender, atender melhor ou crescer.",
          icon: "/images/icons/1.png",
        },
        {
          title: "Informação espalhada",
          text: "Dados importantes ficam perdidos em WhatsApp, planilhas, anotações e sistemas desconectados.",
          icon: "/images/icons/2.png",
        },
        {
          title: "Falta de visibilidade",
          text: "Sem uma visão clara da operação, fica difícil saber o que está funcionando.",
          icon: "/images/icons/3.png",
        },
        {
          title: "Processos confusos",
          text: "Sem padrão, cada tarefa depende de improviso e erros acontecem com frequência.",
          icon: "/images/icons/4.png",
        },
        {
          title: "Crescimento desorganizado",
          text: "Mais clientes sem estrutura acabam gerando caos em vez de resultado.",
          icon: "/images/icons/5.png",
        },
        {
          title: "Tudo depende de você",
          text: "Quando tudo depende do dono, o negócio trava e perde velocidade.",
          icon: "/images/icons/6.png",
        },
      ],
    },
  };

  const section = content.pt;

  return (
    <section
      id="problems"
      style={{
        width: "100%",
        padding: "120px 20px",
        background:
          "radial-gradient(circle at top right, rgba(250,204,21,0.08), transparent 28%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(17,24,39,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
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
              <img
                src={item.icon}
                alt=""
                style={{
                  width: "96px",
                  height: "96px",
                  objectFit: "contain",
                }}
              />

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
