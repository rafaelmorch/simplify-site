"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import {
  Globe,
  Gear,
  Robot,
  Users,
  ChartLine,
  Code,
  Link,
  Funnel,
  CalendarCheck,
  RocketLaunch,
} from "@phosphor-icons/react";

const iconProps = {
  size: 38,
  weight: "thin" as const,
  color: "#FACC15",
};

export default function SolutionsSection() {
  const { language } = useLanguage();
  const [openCard, setOpenCard] = useState<string | null>(null);

  const content = {
    pt: {
      label: "Soluções que entregamos",
      title: "Tecnologia, organização e automação para simplificar sua operação",
      subtitle:
        "Criamos soluções práticas e sob medida para empresas que precisam economizar tempo, organizar processos e crescer com mais controle.",
      items: [
        {
          title: "Websites Profissionais",
          description: "Sites modernos para apresentar sua empresa, gerar confiança e captar novos clientes.",
          icon: <Globe {...iconProps} />,
        },
        {
          title: "Automação de Processos",
          description: "Automatizamos tarefas repetitivas para reduzir trabalho manual e economizar tempo.",
          icon: <Gear {...iconProps} />,
        },
        {
          title: "Implementação de IA",
          description: "Aplicamos IA para atendimento, análise, respostas automáticas e apoio à decisão.",
          icon: <Robot {...iconProps} />,
        },
        {
          title: "Gestão de Leads e CRM",
          description: "Organizamos contatos, oportunidades e follow-ups em um fluxo simples e eficiente.",
          icon: <Users {...iconProps} />,
        },
        {
          title: "Dashboards e Relatórios",
          description: "Criamos painéis para acompanhar resultados, dados e indicadores importantes.",
          icon: <ChartLine {...iconProps} />,
        },
        {
          title: "Sistemas Sob Medida",
          description: "Desenvolvemos sistemas simples e personalizados para as necessidades da sua operação.",
          icon: <Code {...iconProps} />,
        },
        {
          title: "Integração de Ferramentas",
          description: "Conectamos plataformas para centralizar informações e melhorar o fluxo de trabalho.",
          icon: <Link {...iconProps} />,
        },
        {
          title: "Funis de Vendas",
          description: "Estruturamos etapas para captar, qualificar e converter clientes com mais clareza.",
          icon: <Funnel {...iconProps} />,
        },
        {
          title: "Gestão de Tarefas",
          description: "Organizamos atividades, prazos e responsabilidades para melhorar a execução.",
          icon: <CalendarCheck {...iconProps} />,
        },
        {
          title: "Digitalização de Negócios",
          description: "Transformamos controles manuais em soluções digitais mais rápidas e profissionais.",
          icon: <RocketLaunch {...iconProps} />,
        },
      ],
    },
    en: {
      label: "Solutions we deliver",
      title: "Technology, organization, and automation to simplify your operation",
      subtitle:
        "We create practical, tailored solutions for businesses that need to save time, organize processes, and grow with more control.",
      items: [
        {
          title: "Professional Websites",
          description: "Modern websites to present your business, build trust, and attract new clients.",
          icon: <Globe {...iconProps} />,
        },
        {
          title: "Process Automation",
          description: "We automate repetitive tasks to reduce manual work and save time.",
          icon: <Gear {...iconProps} />,
        },
        {
          title: "AI Implementation",
          description: "We apply AI for support, analysis, automated responses, and decision assistance.",
          icon: <Robot {...iconProps} />,
        },
        {
          title: "Lead Management and CRM",
          description: "We organize contacts, opportunities, and follow-ups in a simple and efficient flow.",
          icon: <Users {...iconProps} />,
        },
        {
          title: "Dashboards and Reports",
          description: "We create dashboards to track results, data, and key business indicators.",
          icon: <ChartLine {...iconProps} />,
        },
        {
          title: "Custom Systems",
          description: "We build simple, tailored systems for the specific needs of your operation.",
          icon: <Code {...iconProps} />,
        },
        {
          title: "Tool Integration",
          description: "We connect platforms to centralize information and improve workflow.",
          icon: <Link {...iconProps} />,
        },
        {
          title: "Sales Funnels",
          description: "We structure stages to capture, qualify, and convert clients with more clarity.",
          icon: <Funnel {...iconProps} />,
        },
        {
          title: "Task Management",
          description: "We organize activities, deadlines, and responsibilities to improve execution.",
          icon: <CalendarCheck {...iconProps} />,
        },
        {
          title: "Business Digitalization",
          description: "We turn manual controls into faster and more professional digital solutions.",
          icon: <RocketLaunch {...iconProps} />,
        },
      ],
    },
    es: {
      label: "Soluciones que entregamos",
      title: "Tecnología, organización y automatización para simplificar su operación",
      subtitle:
        "Creamos soluciones prácticas y a medida para empresas que necesitan ahorrar tiempo, organizar procesos y crecer con más control.",
      items: [
        {
          title: "Sitios Web Profesionales",
          description: "Sitios modernos para presentar su empresa, generar confianza y captar nuevos clientes.",
          icon: <Globe {...iconProps} />,
        },
        {
          title: "Automatización de Procesos",
          description: "Automatizamos tareas repetitivas para reducir trabajo manual y ahorrar tiempo.",
          icon: <Gear {...iconProps} />,
        },
        {
          title: "Implementación de IA",
          description: "Aplicamos IA para atención, análisis, respuestas automáticas y apoyo a decisiones.",
          icon: <Robot {...iconProps} />,
        },
        {
          title: "Gestión de Leads y CRM",
          description: "Organizamos contactos, oportunidades y seguimientos en un flujo simple y eficiente.",
          icon: <Users {...iconProps} />,
        },
        {
          title: "Dashboards e Informes",
          description: "Creamos paneles para acompañar resultados, datos e indicadores importantes.",
          icon: <ChartLine {...iconProps} />,
        },
        {
          title: "Sistemas a Medida",
          description: "Desarrollamos sistemas simples y personalizados para las necesidades de su operación.",
          icon: <Code {...iconProps} />,
        },
        {
          title: "Integración de Herramientas",
          description: "Conectamos plataformas para centralizar información y mejorar el flujo de trabajo.",
          icon: <Link {...iconProps} />,
        },
        {
          title: "Embudos de Ventas",
          description: "Estructuramos etapas para captar, calificar y convertir clientes con más claridad.",
          icon: <Funnel {...iconProps} />,
        },
        {
          title: "Gestión de Tareas",
          description: "Organizamos actividades, plazos y responsabilidades para mejorar la ejecución.",
          icon: <CalendarCheck {...iconProps} />,
        },
        {
          title: "Digitalización de Negocios",
          description: "Transformamos controles manuales en soluciones digitales más rápidas y profesionales.",
          icon: <RocketLaunch {...iconProps} />,
        },
      ],
    },
  };

  const section = content[language];

  useEffect(() => {
    let index = 0;

    setOpenCard(section.items[0]?.title ?? null);

    const interval = setInterval(() => {
      index = (index + 1) % section.items.length;
      setOpenCard(section.items[index].title);
    }, 2800);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <section
      id="services"
      style={{
        width: "100%",
        padding: "100px 20px",
        backgroundColor: "#0b1220",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ maxWidth: "860px", marginBottom: "54px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "1px",
              color: "#FACC15",
              marginBottom: "14px",
              textTransform: "uppercase",
            }}
          >
            {section.label}
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: "18px",
            }}
          >
            {section.title}
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#cbd5e1" }}>
            {section.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "18px",
          }}
        >
          {section.items.map((item) => {
            const isOpen = openCard === item.title;

            return (
              <button
                key={item.title}
                onClick={() => setOpenCard(isOpen ? null : item.title)}
                style={{
                  minHeight: isOpen ? "220px" : "150px",
                  border: isOpen
                    ? "1px solid rgba(250,204,21,0.65)"
                    : "1px solid rgba(250,204,21,0.28)",
                  background: isOpen
                    ? "rgba(250,204,21,0.08)"
                    : "rgba(255,255,255,0.04)",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  textAlign: "left",
                  color: "#ffffff",
                  cursor: "pointer",
                  boxShadow: isOpen
                    ? "0 0 34px rgba(250,204,21,0.16), inset 0 0 22px rgba(250,204,21,0.06)"
                    : "0 0 28px rgba(250,204,21,0.06), inset 0 0 18px rgba(250,204,21,0.04)",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.3s ease",
                }}
              >
                <div>{item.icon}</div>

                <div>
                  <h3
                    style={{
                      fontSize: "19px",
                      lineHeight: 1.25,
                      fontWeight: 700,
                      marginBottom: isOpen ? "12px" : 0,
                    }}
                  >
                    {item.title}
                  </h3>

                  {isOpen && (
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                        color: "#cbd5e1",
                      }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

