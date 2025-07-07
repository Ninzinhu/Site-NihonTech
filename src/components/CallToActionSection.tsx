export default function CallToActionSection() {
  return (
    <section
      id="cta-tech"
      style={{
        background: "linear-gradient(120deg, #23272f 0%, #181c24 100%)",
        padding: "80px 0 60px 0",
        fontFamily: "Inter, sans-serif",
      }}>
      <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2
          style={{
            color: "#ffd6b0",
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
              background: "rgba(255,214,176,0.13)",
              borderRadius: 18,
              padding: "6px 18px",
              color: "#ffd6b0",
              fontWeight: 700,
              fontSize: "1.01rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 1.5l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 7.12l5.34-.78L10 1.5z"
                fill="#ffd6b0"
              />
            </svg>
            + de 50 empresas atendidas
          </div>
          <div
            style={{
              background: "rgba(255,214,176,0.13)",
              borderRadius: 18,
              padding: "6px 18px",
              color: "#ffd6b0",
              fontWeight: 700,
              fontSize: "1.01rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2v8l6 3.5"
                stroke="#ffd6b0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Retorno em até 1h útil
          </div>
          <div
            style={{
              background: "rgba(255,214,176,0.13)",
              borderRadius: 18,
              padding: "6px 18px",
              color: "#ffd6b0",
              fontWeight: 700,
              fontSize: "1.01rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 11a3 3 0 110-6 3 3 0 010 6z"
                fill="#ffd6b0"
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
              fill="#ffd6b0"
            />
          </svg>
          <span
            style={{ color: "#ffd6b0", fontWeight: 700, fontSize: "1.05rem" }}>
            Avaliação 5.0/5.0
          </span>
          <span style={{ color: "#fff", opacity: 0.7, fontSize: "0.98rem" }}>
            &nbsp;por clientes reais
          </span>
        </div>
        <div
          style={{
            color: "#ffd6b0",
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
            color: "#fff",
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
              background: "linear-gradient(90deg, #ffd6b0 0%, #b23a0b 100%)",
              color: "#181c24",
              borderRadius: 30,
              padding: "20px 56px",
              fontSize: "1.25rem",
              fontWeight: 800,
              border: "none",
              boxShadow: "0 0 16px #ffd6b0, 0 0 32px #b23a0b",
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
              <circle cx="16" cy="16" r="16" fill="#23272f" />
              <path
                d="M23.5 19.5c-.3-.2-1.7-.8-2-1s-.5-.1-.7.1c-.2.2-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6.1-.1.2-.3.3-.5.1-.2.1-.3.2-.5.1-.2 0-.4 0-.6s-.6-1.5-.8-2c-.2-.5-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2.1 3.2 5.2 4.2.7.2 1.2.3 1.6.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z"
                fill="#fff"
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
              color: "#ffd6b0",
              fontWeight: 600,
              fontSize: "1.01rem",
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#ffd6b0" strokeWidth="2" />
              <path
                d="M6 10l2.5 2.5L14 7"
                stroke="#ffd6b0"
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
              color: "#ffd6b0",
              fontWeight: 600,
              fontSize: "1.01rem",
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 11a3 3 0 110-6 3 3 0 010 6z"
                fill="#ffd6b0"
              />
            </svg>
            Privacidade garantida
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#ffd6b0",
              fontWeight: 600,
              fontSize: "1.01rem",
            }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12M10 4v12"
                stroke="#ffd6b0"
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
            color: "#ffd6b0",
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
            box-shadow: 0 0 32px #ffd6b0, 0 0 48px #b23a0b;
            transform: scale(1.04);
          }
          @keyframes cta-pulse {
            0% {
              box-shadow: 0 0 16px #ffd6b0, 0 0 32px #b23a0b;
            }
            100% {
              box-shadow: 0 0 32px #ffd6b0, 0 0 64px #b23a0b;
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
            fill: #ffd6b0;
            filter: drop-shadow(0 0 8px #ffd6b0);
          }
        `}</style>
      </div>
    </section>
  );
}
