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
  status: string | null;
};

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  async function loadLeads() {
    const { data, error } = await supabase
      .from("assessment_leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setLeads(data as Lead[]);
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    await supabase.from("assessment_leads").update({ status }).eq("id", id);
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  }

  useEffect(() => {
    loadLeads();
  }, []);

  if (!authorized) {
    return (
      <main style={{ minHeight: "100vh", background: "#0b1220", color: "#fff", padding: "50px 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "420px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(250,204,21,0.25)", borderRadius: "16px", padding: "28px" }}>
          <h1 style={{ fontSize: "34px", marginBottom: "12px" }}>Admin Simplify</h1>
          <p style={{ color: "#cbd5e1", marginBottom: "20px" }}>Digite a senha para acessar os leads.</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.18)", marginBottom: "14px" }} />
          <button type="button" onClick={() => password === "Simplify2026!" ? setAuthorized(true) : alert("Senha incorreta")} style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "none", background: "#FACC15", color: "#111827", fontWeight: 900, cursor: "pointer" }}>
            Entrar
          </button>
        </div>
      </main>
    );
  }

  const statuses = ["Novo", "Contatado", "Proposta enviada", "Fechado", "Perdido"];

  return (
    <main style={{ minHeight: "100vh", background: "#0b1220", color: "#ffffff", padding: "50px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 900, marginBottom: "12px" }}>Admin Simplify</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "30px" }}>Leads recebidos pelo diagnóstico com IA.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "30px" }}>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px", border: "1px solid rgba(250,204,21,0.2)" }}>
            <div style={{ fontSize: "14px", color: "#94a3b8" }}>Total de Leads</div>
            <div style={{ fontSize: "42px", fontWeight: 900, color: "#FACC15" }}>{leads.length}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "14px", padding: "22px", border: "1px solid rgba(250,204,21,0.2)" }}>
            <div style={{ fontSize: "14px", color: "#94a3b8" }}>Novos</div>
            <div style={{ fontSize: "42px", fontWeight: 900, color: "#FACC15" }}>{leads.filter((lead) => (lead.status || "Novo") === "Novo").length}</div>
          </div>
        </div>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div style={{ display: "grid", gap: "18px" }}>
            {leads.map((lead) => (
              <div key={lead.id} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(250,204,21,0.25)", borderRadius: "14px", padding: "22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "14px" }}>
                  <div>
                    <h2 style={{ fontSize: "22px", marginBottom: "4px" }}>{lead.name || "Sem nome"}</h2>
                    <p style={{ color: lead.email ? "#FACC15" : "#ef4444" }}>{lead.email || "⚠ Sem email informado"}</p>

                    {lead.email && (
                      <a href={`mailto:${lead.email}`} style={{ display: "inline-block", marginTop: "12px", background: "#FACC15", color: "#111827", textDecoration: "none", padding: "8px 14px", borderRadius: "8px", fontWeight: 800 }}>
                        Responder
                      </a>
                    )}
                  </div>

                  <div>
                    <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "10px" }}>
                      {new Date(lead.created_at).toLocaleString("pt-BR")}
                    </p>

                    <select value={lead.status || "Novo"} onChange={(e) => updateStatus(lead.id, e.target.value)} style={{ padding: "10px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.18)", background: "#111827", color: "#fff" }}>
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <strong>Mensagem:</strong>
                <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>{lead.message}</p>

                <strong>Análise da IA:</strong>
                <p style={{ color: "#d1d5db", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{lead.ai_response}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
