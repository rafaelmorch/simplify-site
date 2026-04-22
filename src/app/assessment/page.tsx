import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AssessmentPage() {
  return (
    <main>
      <Header />

      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#111827",
          padding: "90px 20px",
          textAlign: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
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
            Diagnóstico
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 7vw, 44px)",
              fontWeight: 700,
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Conte para nós o que seu negócio precisa
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 3vw, 18px)",
              color: "#4b5563",
              lineHeight: 1.7,
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            Responda algumas perguntas e vamos entender melhor sua operação para identificar a melhor solução para o seu negócio.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            borderTop: "4px solid #DC2626",
            borderLeft: "1px solid #e5e7eb",
            borderRight: "1px solid #e5e7eb",
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            padding: "32px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            Em breve, aqui teremos um formulário inteligente com IA.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            Essa página vai ajudar a coletar as informações do cliente, entender prioridades, organizar demandas e indicar soluções sob medida.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
