export default function WhyChoose() {
  return (
    <section
      style={{
        width: "100%",
        padding: "90px 20px",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 50px auto",
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
            Como ajudamos
          </p>

          <h2
            style={{
              fontSize: "clamp(30px, 6vw, 40px)",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "18px",
              lineHeight: 1.15,
            }}
          >
            Soluções pensadas para organizar, simplificar e fortalecer sua operação
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#4b5563",
              lineHeight: 1.7,
            }}
          >
            A Simplify ajuda empresas a ganhar mais clareza, economizar tempo e estruturar melhor suas atividades com soluções sob medida para a realidade do negócio.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              padding: "28px",
              backgroundColor: "#f9fafb",
              borderTop: "4px solid #DC2626",
              borderLeft: "1px solid #e5e7eb",
              borderRight: "1px solid #e5e7eb",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Mais organização
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              Estruturamos informações, rotinas e atividades para que sua operação funcione de forma mais clara e eficiente.
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              backgroundColor: "#f9fafb",
              borderTop: "4px solid #DC2626",
              borderLeft: "1px solid #e5e7eb",
              borderRight: "1px solid #e5e7eb",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Economia de tempo
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              Reduzimos tarefas desnecessárias e criamos soluções que ajudam você a ganhar tempo no dia a dia.
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              backgroundColor: "#f9fafb",
              borderTop: "4px solid #DC2626",
              borderLeft: "1px solid #e5e7eb",
              borderRight: "1px solid #e5e7eb",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Soluções sob medida
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              Cada empresa tem uma realidade. Por isso, trabalhamos com soluções personalizadas para o que você realmente precisa.
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              backgroundColor: "#f9fafb",
              borderTop: "4px solid #DC2626",
              borderLeft: "1px solid #e5e7eb",
              borderRight: "1px solid #e5e7eb",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Mais controle
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              Com mais visibilidade sobre processos e informações, fica mais fácil tomar decisões e crescer com segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
