export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="section"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--highlight)",
        padding: "32px 0",
      }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginBottom: "16px",
          }}>
          <a
            href="#ultimos-projetos"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.95rem",
              transition: "color 0.2s ease",
            }}>
            Projetos
          </a>
          <a
            href="#testimonials-tech"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.95rem",
              transition: "color 0.2s ease",
            }}>
            Depoimentos
          </a>
          <a
            href="#team-tech"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.95rem",
              transition: "color 0.2s ease",
            }}>
            Equipe
          </a>
        </div>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            opacity: 0.8,
            margin: 0,
            textAlign: "center",
          }}>
          &copy; {currentYear} Konpeki Systems. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
