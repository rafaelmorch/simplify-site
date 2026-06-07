"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { supabase } from "../lib/supabase";
import ReactMarkdown from "react-markdown";

export default function AssessmentSection() {
  const { language } = useLanguage();

  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const text = {
    pt: {
      label: "Diagnóstico",
      title: "Conte para nós o que está travando seu negócio",
      subtitle: "A IA da Simplify vai analisar sua situação e sugerir uma solução inicial.",
      name: "Seu nome",
      email: "Seu email",
      placeholder: "Ex: estou perdendo tempo com tarefas manuais...",
      analyze: "Analisar meu caso",
      loading: "Analisando...",
      send: "Enviar para Simplify",
      result: "Análise da IA:",
    },
    en: {
      label: "Assessment",
      title: "Tell us what is holding your business back",
      subtitle: "Simplify AI will analyze your situation and suggest an initial solution.",
      name: "Your name",
      email: "Your email",
      placeholder: "Example: I am losing time with manual tasks...",
      analyze: "Analyze my case with AI",
      loading: "Analyzing...",
      send: "Send to Simplify",
      result: "AI Analysis:",
    },
    es: {
      label: "Diagnóstico",
      title: "Cuéntenos qué está frenando su negocio",
      subtitle: "La IA de Simplify analizará su situación y sugerirá una solución inicial.",
      name: "Su nombre",
      email: "Su email",
      placeholder: "Ej: estoy perdiendo tiempo con tareas manuales...",
      analyze: "Analizar mi caso con IA",
      loading: "Analizando...",
      send: "Enviar a Simplify",
      result: "Análisis de IA:",
    },
  };

  const content = text[language];

  const handleAnalyze = async () => {
    if (!leadName.trim() || !leadEmail.trim() || !message.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, language }),
      });

      const data = await res.json();
      const aiResult = (data.result || "Não foi possível gerar a análise agora.").replace(/\*\*/g, "");

      setResponse(aiResult);

      await supabase.from("assessment_leads").insert({
        name: leadName.trim(),
        email: leadEmail.trim(),
        message: message.trim(),
        ai_response: aiResult,
      });
    } catch {
      setResponse("Erro ao conectar com a IA. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="assessment"
      style={{
        width: "100%",
        padding: "100px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "18px",
          padding: "42px",
          boxShadow: "0 20px 60px rgba(17,24,39,0.08)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "1px",
            color: "#DC2626",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {content.label}
        </p>

        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 46px)",
            fontWeight: 900,
            color: "#111827",
            lineHeight: 1.08,
            marginBottom: "16px",
          }}
        >
          {content.title}
        </h2>

        <p
          style={{
            color: "#4b5563",
            fontSize: "17px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          {content.subtitle}
        </p>

        <form
          name="assessment"
          method="POST"
          data-netlify="true"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input type="hidden" name="form-name" value="assessment" />

          <input
            name="lead_name"
            type="text"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
            placeholder={content.name}
            required
            style={{
              padding: "14px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
            }}
          />

          <input
            name="lead_email"
            type="email"
            value={leadEmail}
            onChange={(e) => setLeadEmail(e.target.value)}
            placeholder={content.email}
            required
            style={{
              padding: "14px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
            }}
          />

          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={content.placeholder}
            required
            style={{
              width: "100%",
              minHeight: "150px",
              padding: "14px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              resize: "vertical",
            }}
          />

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={loading}
            style={{
              padding: "15px 24px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#111827",
              color: "#ffffff",
              fontWeight: 800,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? content.loading : content.analyze}
          </button>

          <p
            style={{
              marginTop: "-4px",
              textAlign: "center",
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgba(17,24,39,0.55)",
              fontWeight: 700,
            }}
          >
            by Simplify IA
          </p>
        </form>

        {response && (
          <div
            style={{
              marginTop: "28px",
              padding: "22px",
              borderRadius: "12px",
              background: "#f1f5f9",
              color: "#111827",
              lineHeight: 1.7,
            }}
          >
            <strong>{content.result}</strong>
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        )}
      </div>
    </section>
  );
}
