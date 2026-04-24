"use client";

import { useLanguage } from "./LanguageProvider";
import {
  ClockCounterClockwise,
  Files,
  EyeSlash,
  GitBranch,
  Warning,
  UserFocus,
} from "@phosphor-icons/react";

const iconProps = {
  size: 34,
  weight: "thin" as const,
  color: "#DC2626",
};

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
          icon: <ClockCounterClockwise {...iconProps} />,
        },
        {
          title: "Informação espalhada",
          text: "Dados importantes ficam perdidos em WhatsApp, planilhas, anotações e sistemas que não conversam.",
          icon: <Files {...iconProps} />,
        },
        {
          title: "Falta de visibilidade",
          text: "Sem uma visão clara da operação, fica difícil saber o que está funcionando e o que precisa melhorar.",
          icon: <EyeSlash {...iconProps} />,
        },
        {
          title: "Processos confusos",
          text: "Quando não há padrão, cada tarefa depende de improviso e a operação fica vulnerável a erros.",
          icon: <GitBranch {...iconProps} />,
        },
        {
          title: "Crescimento desorganizado",
          text: "Mais clientes e mais demanda sem estrutura acabam gerando caos em vez de resultado.",
          icon: <Warning {...iconProps} />,
        },
        {
          title: "Tudo depende de você",
          text: "Quando tudo passa pelo dono, o negócio trava, perde velocidade e fica difícil escalar.",
          icon: <UserFocus {...iconProps} />,
        },
      ],
    },
    en: {
      label: "Problems we solve",
      title: "If your business depends on you all the time, something needs to change",
      subtitle:
        "Businesses grow, but structure often does not keep up. The result is wasted time, rework, and decisions made without visibility.",
      items: [
        {
          title: "Wasted time",
          text: "Manual tasks consume hours that could be used to sell, serve clients better, or grow.",
          icon: <ClockCounterClockwise {...iconProps} />,
        },
        {
          title: "Scattered information",
          text: "Important data gets lost across WhatsApp, spreadsheets, notes, and disconnected tools.",
          icon: <Files {...iconProps} />,
        },
        {
          title: "Lack of visibility",
          text: "Without a clear view of the operation, it is hard to know what works and what needs improvement.",
          icon: <EyeSlash {...iconProps} />,
        },
        {
          title: "Confusing processes",
          text: "Without standards, every task depends on improvisation and the operation becomes vulnerable to errors.",
          icon: <GitBranch {...iconProps} />,
        },
        {
          title: "Disorganized growth",
          text: "More clients and more demand without structure create chaos instead of better results.",
          icon: <Warning {...iconProps} />,
        },
        {
          title: "Everything depends on you",
          text: "When everything depends on the owner, the business slows down and becomes harder to scale.",
          icon: <UserFocus {...iconProps} />,
        },
      ],
    },
    es: {
      label: "Problemas que resolvemos",
      title: "Si su negocio depende de usted todo el tiempo, algo debe cambiar",
      subtitle:
        "Los negocios crecen, pero muchas veces la estructura no acompaña. El resultado es pérdida de tiempo, retrabajo y decisiones sin visibilidad.",
      items: [
        {
          title: "Tiempo perdido",
          text: "Las tareas manuales consumen horas que podrían usarse para vender, atender mejor o crecer.",
          icon: <ClockCounterClockwise {...iconProps} />,
        },
        {
          title: "Información dispersa",
          text: "Datos importantes se pierden entre WhatsApp, hojas de cálculo, notas y herramientas desconectadas.",
          icon: <Files {...iconProps} />,
        },
        {
          title: "Falta de visibilidad",
          text: "Sin una visión clara de la operación, es difícil saber qué funciona y qué necesita mejorar.",
          icon: <EyeSlash {...iconProps} />,
        },
        {
          title: "Procesos confusos",
          text: "Sin estándares, cada tarea depende de improvisación y la operación queda vulnerable a errores.",
          icon: <GitBranch {...iconProps} />,
        },
        {
          title: "Crecimiento desorganizado",
          text: "Más clientes y más demanda sin estructura generan caos en lugar de mejores resultados.",
          icon: <Warning {...iconProps} />,
        },
        {
          title: "Todo depende de usted",
          text: "Cuando todo depende del dueño, el negocio se frena y se vuelve más difícil de escalar.",
          icon: <UserFocus {...iconProps} />,
        },
      ],
    },
  };

  const section = content[language];

  return (
    <section
      id="problems"
      style={{
        width: "100%",
        padding: "120px 20px",
        background:
          "radial-gradient(circle at top right, rgba(250,204,21,0.12), transparent 32%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
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
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 0.9fr) minmax(320px, 1.1fr)",
            gap: "42px",
            alignItems: "start",
          }}
        >
          <div>
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
                marginBottom: "28px",
              }}
            >
              {section.subtitle}
            </p>

            <a
              href="#assessment"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                backgroundColor: "#111827",
                color: "#ffffff",
                borderRadius: "999px",
                fontWeight: 800,
                boxShadow: "0 12px 30px rgba(17,24,39,0.18)",
              }}
            >
              Receber diagnóstico
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {section.items.map((item) => (
              <div
                key={item.title}
                className="premium-card-hover"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(229,231,235,0.95)",
                  borderRadius: "10px",
                  padding: "24px",
                  minHeight: "210px",
                  boxShadow:
                    "0 18px 50px rgba(17,24,39,0.08), inset 0 0 0 1px rgba(255,255,255,0.55)",
                  backdropFilter: "blur(14px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, rgba(220,38,38,0.10), rgba(250,204,21,0.12))",
                    border: "1px solid rgba(220,38,38,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 850,
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
                      lineHeight: 1.65,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
