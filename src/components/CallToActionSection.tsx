export default function CallToActionSection() {
  return (
    <section
      id="cta-tech"
      style={{
        background: "var(--main-gradient)",
        padding: "80px 0 60px 0",
        fontFamily: "Inter, sans-serif",
      }}>
      <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2
          style={{
            color: "var(--text-secondary)",
            fontWeight: 900,
            fontSize: "2.2rem",
            marginBottom: 18,
            letterSpacing: "-1px",
            textAlign: "center",
          }}>
          Pronto para inovar com tecnologia?
        </h2>
        {/* Selos de confiança e diferenciais rápidos */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 18,
            marginBottom: 18,
            flexWrap: "wrap",
          }}>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: 18,
              padding: "6px 18px",
              color: "var(--text-secondary)",
              fontWeight: 700,
              fontSize: "1.01rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 1.5l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 7.12l5.34-.78L10 1.5z"
                style={{ fill: "var(--text-secondary)" }}
              />
            </svg>
            + de 50 empresas atendidas
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: 18,
              padding: "6px 18px",
              color: "var(--text-secondary)",
              fontWeight: 700,
              fontSize: "1.01rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2v8l6 3.5"
                style={{ stroke: "var(--text-secondary)" }}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Retorno em até 1h útil
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: 18,
              padding: "6px 18px",
              color: "var(--text-secondary)",
              fontWeight: 700,
              fontSize: "1.01rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 11a3 3 0 110-6 3 3 0 010 6z"
                style={{ fill: "var(--text-secondary)" }}
              />
            </svg>
            Atendimento humano
          </div>
        </div>
        {/* Selo de avaliação */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 10,
          }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 1.5l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 7.12l5.34-.78L10 1.5z"
              style={{ fill: "var(--text-secondary)" }}
            />
          </svg>
          <span
            style={{
              color: "var(--text-secondary)",
              fontWeight: 700,
              fontSize: "1.05rem",
            }}>
            Avaliação 5.0/5.0
          </span>
          <span style={{ color: "#fff", opacity: 0.7, fontSize: "0.98rem" }}>
            &nbsp;por clientes reais
          </span>
        </div>
        <div
          style={{
            color: "var(--text-secondary)",
            fontWeight: 600,
            fontSize: "1.08rem",
            marginBottom: 10,
            letterSpacing: 0,
            textAlign: "center",
          }}>
          Atendimento rápido, soluções sob medida e suporte especializado.
        </div>
        <p
          style={{
            color: "var(--text-primary)",
            opacity: 0.85,
            fontSize: "1.18rem",
            marginBottom: 38,
            textAlign: "center",
          }}>
          Solicite um orçamento personalizado e leve sua empresa para o próximo
          nível digital.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://wa.me/5579991162353?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20personalizado%20para%20meu%20projeto%20com%20a%20NihonTech."
            target="_blank"
            rel="noopener noreferrer"
            className="btn d-inline-flex align-items-center gap-2 cta-whatsapp-btn"
            style={{
              background: "var(--main-gradient)",
              color: "var(--text-primary)",
              borderRadius: 30,
              padding: "20px 56px",
              fontSize: "1.25rem",
              fontWeight: 800,
              border: "none",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
              transition: "box-shadow .2s, transform .2s",
              textTransform: "uppercase",
              letterSpacing: "1px",
              position: "relative",
              overflow: "hidden",
            }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              style={{ marginRight: 8 }}>
              <circle cx="16" cy="16" r="16" fill="var(--bg-primary)" />
              <path
                d="M23.5 19.5c-.3-.2-1.7-.8-2-1s-.5-.1-.7.1c-.2.2-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6.1-.1.2-.3.3-.5.1-.2.1-.3.2-.5.1-.2 0-.4 0-.6s-.6-1.5-.8-2c-.2-.5-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2.1 3.2 5.2 4.2.7.2 1.2.3 1.6.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z"
                style={{ fill: "var(--text-primary)" }}
              />
            </svg>
            Quero meu orçamento grátis no WhatsApp
          </a>
        </div>
        {/* Benefícios visuais abaixo do botão */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            marginTop: 22,
            flexWrap: "wrap",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "1.01rem",
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="9"
                style={{ stroke: "var(--text-secondary)" }}
                strokeWidth="2"
              />
              <path
                d="M6 10l2.5 2.5L14 7"
                style={{ stroke: "var(--text-secondary)" }}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Sem compromisso
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "1.01rem",
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 11a3 3 0 110-6 3 3 0 010 6z"
                style={{ fill: "var(--text-secondary)" }}
              />
            </svg>
            Privacidade garantida
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "1.01rem",
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12M10 4v12"
                style={{ stroke: "var(--text-secondary)" }}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Orçamento rápido
          </div>
        </div>
        {/* Gatilho de urgência */}
        <div
          style={{
            color: "var(--text-secondary)",
            fontWeight: 700,
            fontSize: "1.01rem",
            marginTop: 18,
            textAlign: "center",
          }}>
          Vagas limitadas para novos projetos este mês!
        </div>
        <style jsx>{`
          .cta-whatsapp-btn {
            animation: cta-pulse 1.6s infinite alternate;
          }
          .cta-whatsapp-btn:hover {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
            transform: scale(1.02);
          }
          @keyframes cta-pulse {
            0% {
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
            }
            100% {
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
            }
          }
          @media (max-width: 600px) {
            .cta-whatsapp-btn {
              padding: 16px 18px !important;
              font-size: 1rem !important;
            }
          }
          .cta-social-icon svg {
            transition: filter 0.2s, fill 0.2s;
          }
          .cta-social-icon:hover .cta-social-fill {
            fill: var(--text-secondary);
            filter: drop-shadow(0 0 8px rgba(156, 163, 175, 0.12));
          }
        `}</style>
      </div>
    </section>
  );
}
