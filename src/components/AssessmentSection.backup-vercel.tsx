"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function AssessmentSection() {
  const { language } = useLanguage();
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
    if (!message) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/.netlify/functions/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.result || "Não foi possível gerar a análise agora.");
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
        backgroundColor: "#f9fafb",
      }}
    >
      <div style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}>
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
          {content.label}
        </p>

        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 44px)",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "18px",
            lineHeight: 1.15,
          }}
        >
          {content.title}
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#4b5563",
            lineHeight: 1.7,
            marginBottom: "34px",
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
            name="name"
            type="text"
            placeholder={content.name}
            required
            style={{
              padding: "14px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
            }}
          />

          <input
            name="email"
            type="email"
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
              height: "140px",
              padding: "15px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
            }}
          />

          <button
            type="button"
            onClick={handleAnalyze}
            disabled={loading}
            style={{
              backgroundColor: "#DC2626",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "6px",
              fontWeight: 700,
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? content.loading : content.analyze}
          </button>

          <button
            type="submit"
            style={{
              backgroundColor: "#111827",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "6px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            {content.send}
          </button>
        </form>

        {response && (
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              padding: "22px",
              borderRadius: "6px",
              textAlign: "left",
              whiteSpace: "pre-line",
            }}
          >
            <strong>{content.result}</strong>
            <p style={{ marginTop: "10px", color: "#4b5563" }}>{response}</p>
          </div>
        )}
      </div>
    </section>
  );
}
