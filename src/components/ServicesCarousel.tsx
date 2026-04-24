"use client";

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
  size: 42,
  weight: "thin",
  color: "#FACC15",
};

export default function ServicesCarousel() {
  const { language } = useLanguage();

  const services = {
    pt: [
      { name: "Websites Profissionais", icon: <Globe {...iconProps} /> },
      { name: "Automação de Processos", icon: <Gear {...iconProps} /> },
      { name: "Implementação de IA", icon: <Robot {...iconProps} /> },
      { name: "Gestão de Leads e CRM", icon: <Users {...iconProps} /> },
      { name: "Organização Operacional", icon: <ChartLine {...iconProps} /> },
      { name: "Sistemas Sob Medida", icon: <Code {...iconProps} /> },
      { name: "Integração de Ferramentas", icon: <Link {...iconProps} /> },
      { name: "Funis de Vendas", icon: <Funnel {...iconProps} /> },
      { name: "Gestão de Tarefas", icon: <CalendarCheck {...iconProps} /> },
      { name: "Digitalização de Negócios", icon: <RocketLaunch {...iconProps} /> },
    ],
    en: [
      { name: "Professional Websites", icon: <Globe {...iconProps} /> },
      { name: "Process Automation", icon: <Gear {...iconProps} /> },
      { name: "AI Implementation", icon: <Robot {...iconProps} /> },
      { name: "Lead Management and CRM", icon: <Users {...iconProps} /> },
      { name: "Operational Organization", icon: <ChartLine {...iconProps} /> },
      { name: "Custom Systems", icon: <Code {...iconProps} /> },
      { name: "Tool Integration", icon: <Link {...iconProps} /> },
      { name: "Sales Funnels", icon: <Funnel {...iconProps} /> },
      { name: "Task Management", icon: <CalendarCheck {...iconProps} /> },
      { name: "Business Digitalization", icon: <RocketLaunch {...iconProps} /> },
    ],
    es: [
      { name: "Sitios Web Profesionales", icon: <Globe {...iconProps} /> },
      { name: "Automatización de Procesos", icon: <Gear {...iconProps} /> },
      { name: "Implementación de IA", icon: <Robot {...iconProps} /> },
      { name: "Gestión de Leads y CRM", icon: <Users {...iconProps} /> },
      { name: "Organización Operacional", icon: <ChartLine {...iconProps} /> },
      { name: "Sistemas a Medida", icon: <Code {...iconProps} /> },
      { name: "Integración de Herramientas", icon: <Link {...iconProps} /> },
      { name: "Embudos de Ventas", icon: <Funnel {...iconProps} /> },
      { name: "Gestión de Tareas", icon: <CalendarCheck {...iconProps} /> },
      { name: "Digitalización de Negocios", icon: <RocketLaunch {...iconProps} /> },
    ],
  };

  const items = [...services[language], ...services[language]];

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "100px",
        overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div
        className="services-marquee"
        style={{
          display: "flex",
          gap: "22px",
          width: "max-content",
        }}
      >
        {items.map((service, index) => (
          <div
            key={`${service.name}-${index}`}
            style={{
              minWidth: "320px",
              height: "140px",
              border: "1px solid rgba(250,204,21,0.35)",
              background: "rgba(0,0,0,0.22)",
              borderRadius: "18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "18px",
              backdropFilter: "blur(14px)",
              boxShadow:
                "0 0 30px rgba(250,204,21,0.12), inset 0 0 18px rgba(250,204,21,0.05)",
              transition: "0.3s ease",
            }}
          >
            {service.icon}
            <div>{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
