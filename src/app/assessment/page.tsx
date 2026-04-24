"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AssessmentPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleAnalyze = () => {
    if (!message) return;

    setResponse(
      "Com base no que você descreveu, parece que seu negócio precisa de mais organização nos processos e redução de tarefas manuais. Podemos te ajudar a estruturar isso com soluções simples que economizam tempo e aumentam a eficiência."
    );
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
            Preencha seus dados e descreva sua situação. Assim podemos entender melhor seu negócio.
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
              style={{
                backgroundColor: "#DC2626",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "6px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Analisar meu caso
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
              }}
            >
              <strong>Resultado:</strong>
              <p style={{ marginTop: "10px", color: "#4b5563" }}>{response}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
