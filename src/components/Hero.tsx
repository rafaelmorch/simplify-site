import { siteData } from "../data/site";

export default function Hero() {
  const content = siteData.pt;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 20px",
        backgroundColor: "#ffffff",
        color: "#111827",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(220,38,38,0.08), transparent 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(34px, 8vw, 56px)",
            fontWeight: 700,
            marginBottom: "20px",
            lineHeight: 1.1,
          }}
        >
          {content.headline}
        </h1>

        <p
          style={{
            fontSize: "clamp(17px, 3vw, 20px)",
            color: "#4b5563",
            marginBottom: "30px",
            lineHeight: 1.6,
            maxWidth: "860px",
            marginInline: "auto",
          }}
        >
          {content.subheadline}
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/contact"
            style={{
              padding: "14px 28px",
              backgroundColor: "#DC2626",
              color: "#ffffff",
              borderRadius: "6px",
              fontWeight: 700,
            }}
          >
            Receber solução personalizada
          </a>

          <a
            href="/services"
            style={{
              padding: "14px 28px",
              border: "1px solid #C0C0C0",
              color: "#111827",
              borderRadius: "6px",
              fontWeight: 600,
            }}
          >
            Ver como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
