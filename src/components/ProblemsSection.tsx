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
        { title: "Tempo perdido", text: "Tarefas manuais consomem horas que poderiam ser usadas para vender, atender melhor ou crescer.", icon: "/images/icons/1.png" },
        { title: "Informação espalhada", text: "Dados importantes ficam perdidos em WhatsApp, planilhas, anotações e sistemas desconectados.", icon: "/images/icons/2.png" },
        { title: "Falta de visibilidade", text: "Sem uma visão clara da operação, fica difícil saber o que está funcionando.", icon: "/images/icons/3.png" },
        { title: "Processos confusos", text: "Sem padrão, cada tarefa depende de improviso e erros acontecem com frequência.", icon: "/images/icons/4.png" },
        { title: "Crescimento desorganizado", text: "Mais clientes sem estrutura acabam gerando caos em vez de resultado.", icon: "/images/icons/5.png" },
        { title: "Tudo depende de você", text: "Quando tudo depende do dono, o negócio trava e perde velocidade.", icon: "/images/icons/6.png" },
      ],
    },
    en: {
      label: "Problems we solve",
      title: "If your operation depends on you all the time, something needs to change",
      subtitle:
        "Businesses grow, but often the structure does not keep up. The result is wasted time, rework, and decisions made in the dark.",
      items: [
        { title: "Wasted time", text: "Manual tasks consume hours that could be used to sell, serve better, or grow.", icon: "/images/icons/1.png" },
        { title: "Scattered information", text: "Important data gets lost across WhatsApp, spreadsheets, notes, and disconnected systems.", icon: "/images/icons/2.png" },
        { title: "Lack of visibility", text: "Without a clear view of the operation, it is hard to know what is working.", icon: "/images/icons/3.png" },
        { title: "Confusing processes", text: "Without standards, every task depends on improvisation and errors happen often.", icon: "/images/icons/4.png" },
        { title: "Disorganized growth", text: "More clients without structure create chaos instead of results.", icon: "/images/icons/5.png" },
        { title: "Everything depends on you", text: "When everything depends on the owner, the business slows down and loses speed.", icon: "/images/icons/6.png" },
      ],
    },
    es: {
      label: "Problemas que resolvemos",
      title: "Si su operación depende de usted todo el tiempo, algo debe cambiar",
      subtitle:
        "Los negocios crecen, pero muchas veces la estructura no acompaña. El resultado es pérdida de tiempo, retrabajo y decisiones tomadas a ciegas.",
      items: [
        { title: "Tiempo perdido", text: "Las tareas manuales consumen horas que podrían usarse para vender, atender mejor o crecer.", icon: "/images/icons/1.png" },
        { title: "Información dispersa", text: "Datos importantes se pierden entre WhatsApp, hojas de cálculo, notas y sistemas desconectados.", icon: "/images/icons/2.png" },
        { title: "Falta de visibilidad", text: "Sin una visión clara de la operación, es difícil saber qué está funcionando.", icon: "/images/icons/3.png" },
        { title: "Procesos confusos", text: "Sin estándares, cada tarea depende de improvisación y los errores ocurren con frecuencia.", icon: "/images/icons/4.png" },
        { title: "Crecimiento desorganizado", text: "Más clientes sin estructura generan caos en lugar de resultados.", icon: "/images/icons/5.png" },
        { title: "Todo depende de usted", text: "Cuando todo depende del dueño, el negocio se frena y pierde velocidad.", icon: "/images/icons/6.png" },
      ],
    },
  };

  const section = content[language] || content.pt;

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
