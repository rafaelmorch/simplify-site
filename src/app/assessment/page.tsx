"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AssessmentPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

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

      if (data.result) {
        setResponse(data.result);
      } else {
        setResponse("Não foi possível gerar a análise agora. Tente novamente.");
      }
    } catch (error) {
      setResponse("Erro ao conectar com a IA. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />

      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "40px", marginBottom: "20px", color: "#111827" }}>
            O que está travando o seu negócio hoje?
          </h1>

          <p style={{ color: "#4b5563", marginBottom: "30px" }}>
            Descreva sua situação e a IA da Simplify vai sugerir uma solução inicial.
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
              placeholder="Seu nome"
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
              placeholder="Seu email"
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
              placeholder="Ex: estou perdendo tempo com tarefas manuais..."
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
              {loading ? "Analisando..." : "Analisar meu caso com IA"}
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
              Enviar para Simplify
            </button>
          </form>

          {response && (
            <div
              style={{
                marginTop: "30px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                padding: "20px",
                borderRadius: "6px",
                textAlign: "left",
                whiteSpace: "pre-line",
              }}
            >
              <strong>Análise da IA:</strong>
              <p style={{ marginTop: "10px", color: "#4b5563" }}>
                {response}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
