import Image from "next/image";

const projetos = [
  {
    titulo: "Dashboard CRM",
    img: "/imgs/Ativo1.png",
    desc: "Dashboard moderno para gestão de clientes e vendas.",
    link: "#",
  },
  {
    titulo: "Site Institucional",
    img: "/imgs/Ativo 2.png",
    desc: "Site responsivo com visual tech para empresas.",
    link: "#",
  },
  {
    titulo: "App Mobile",
    img: "/imgs/active5.png",
    desc: "Aplicativo mobile integrado a sistemas web.",
    link: "#",
  },
  {
    titulo: "Controle Financeiro",
    img: "/imgs/ControleFinanceiro.png",
    desc: "Sistema de controle financeiro com dashboard visual.",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio-tech"
      style={{
        background: "linear-gradient(120deg, #23272f 0%, #181c24 100%)",
        padding: "80px 0 60px 0",
        fontFamily: "Inter, sans-serif",
      }}>
      <div className="container">
        <h2
          className="text-center mb-2"
          style={{
            color: "#ffd6b0",
            fontWeight: 900,
            fontSize: "2.3rem",
            letterSpacing: "-1px",
          }}>
          Projetos Recentes
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: "#fff", opacity: 0.7, fontSize: "1.1rem" }}>
          Veja como ajudamos empresas a inovar com tecnologia de verdade.
        </p>
        <div className="row g-4 justify-content-center">
          {projetos.map((proj, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <a
                href={proj.link}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer">
                <div
                  className="portfolio-card h-100 d-flex flex-column align-items-center"
                  style={{
                    background: "rgba(24,28,36,0.85)",
                    borderRadius: 28,
                    boxShadow: "0 8px 32px rgba(255,214,176,0.08)",
                    padding: "28px 18px 24px 18px",
                    textAlign: "center",
                    backdropFilter: "blur(8px)",
                    border: "1.5px solid rgba(255,214,176,0.13)",
                    transition: "box-shadow .2s, border-color .2s",
                  }}>
                  <div style={{ width: "100%", marginBottom: 18 }}>
                    <Image
                      src={proj.img}
                      alt={proj.titulo}
                      width={220}
                      height={140}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 18,
                        boxShadow: "0 4px 24px rgba(255,214,176,0.10)",
                        objectFit: "cover",
                        background: "#23272f",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      color: "#ffd6b0",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginBottom: 10,
                    }}>
                    {proj.titulo}
                  </h3>
                  <p
                    style={{
                      color: "#fff",
                      opacity: 0.85,
                      fontSize: "0.98rem",
                      marginBottom: 0,
                    }}>
                    {proj.desc}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .portfolio-card:hover {
          box-shadow: 0 12px 40px #ffd6b0, 0 0 0 2px #ffd6b0;
          border-color: #ffd6b0;
        }
      `}</style>
    </section>
  );
}
