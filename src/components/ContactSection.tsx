"use client";

export default function ContactSection() {
  return (
    <section className="section" id="contact-tech">
      <div className="container">
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "48px",
            background: "var(--card-gradient)",
            borderRadius: "24px",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--highlight)",
          }}>
          <h2 className="title">Entre em Contato</h2>
          <p className="description" style={{ marginBottom: "32px" }}>
            Pronto para transformar sua empresa com automação inteligente? Envie
            sua mensagem e retornaremos em breve.
          </p>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              type="text"
              placeholder="Seu nome"
              style={{
                width: "100%",
                background: "var(--bg-secondary)",
                border: "1px solid var(--highlight)",
                borderRadius: "12px",
                padding: "16px",
                color: "var(--text-primary)",
                fontSize: "1rem",
              }}
            />

            <input
              type="email"
              placeholder="Seu email"
              style={{
                width: "100%",
                background: "var(--bg-secondary)",
                border: "1px solid var(--highlight)",
                borderRadius: "12px",
                padding: "16px",
                color: "var(--text-primary)",
                fontSize: "1rem",
              }}
            />

            <textarea
              placeholder="Sua mensagem"
              rows={5}
              style={{
                width: "100%",
                background: "var(--bg-secondary)",
                border: "1px solid var(--highlight)",
                borderRadius: "12px",
                padding: "16px",
                color: "var(--text-primary)",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              className="cta"
              style={{
                width: "100%",
                marginTop: "8px",
                cursor: "pointer",
              }}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
