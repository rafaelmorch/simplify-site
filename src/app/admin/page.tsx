"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Lead = {
  id: string;
  name: string | null;
  email: string | null;
  message: string;
  ai_response: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeads() {
      const { data, error } = await supabase
        .from("assessment_leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setLeads(data as Lead[]);
      }

      setLoading(false);
    }

    loadLeads();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        color: "#ffffff",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 900,
            marginBottom: "12px",
          }}
        >
          Admin Simplify
        </h1>

        <p style={{ color: "#cbd5e1", marginBottom: "34px" }}>
          Leads recebidos pelo diagnóstico com IA.
        </p>

        {loading ? (
          <p>Carregando...</p>
        ) : leads.length === 0 ? (
          <p>Nenhum lead encontrado.</p>
        ) : (
          <div style={{ display: "grid", gap: "18px" }}>
            {leads.map((lead) => (
              <div
                key={lead.id}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(250,204,21,0.25)",
                  borderRadius: "14px",
                  padding: "22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                    marginBottom: "14px",
                  }}
                >
                  <div>
                    <h2 style={{ fontSize: "22px", marginBottom: "4px" }}>
                      {lead.name || "Sem nome"}
                    </h2>
                    <p style={{ color: "#FACC15" }}>
                      {lead.email || "Sem email"}
                    </p>
                  </div>

                  <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {new Date(lead.created_at).toLocaleString("pt-BR")}
                  </p>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <strong>Mensagem:</strong>
                  <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                    {lead.message}
                  </p>
                </div>

                <div>
                  <strong>Análise da IA:</strong>
                  <p
                    style={{
                      color: "#d1d5db",
                      lineHeight: 1.6,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {lead.ai_response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
