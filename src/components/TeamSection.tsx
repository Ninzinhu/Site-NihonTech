import Image from "next/image";

export default function TeamSection() {
  return (
    <section
      className="team-tech py-5"
      style={{
        background: "#181c23",
        backdropFilter: "blur(2px)",
      }}
      id="team-tech">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2
              style={{ fontWeight: 700, fontSize: "2.5rem", color: "#ffd6b0" }}>
              Sobre a Equipe
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#fff", opacity: 0.85 }}>
              Conheça quem está por trás da NihonTech
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card border-0 shadow-sm text-center p-4 team-card"
              style={{
                borderRadius: 24,
                background: "#232733",
                boxShadow: "0 8px 32px rgba(178,58,11,0.10)",
              }}>
              <Image
                src="https://github.com/Ninzinhu/Ninzinhu/blob/main/kenshinhimura.gif?raw=true"
                alt="Founder"
                width={96}
                height={96}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "0 auto 18px auto",
                  border: "4px solid #ffd6b0",
                  boxShadow: "0 2px 8px rgba(178,58,11,0.08)",
                }}
              />
              <h5
                style={{ fontWeight: 700, color: "#ffd6b0", marginBottom: 4 }}>
                João Victor
              </h5>
              <span style={{ color: "#ffd6b0", fontWeight: 600, fontSize: 16 }}>
                Founder & Desenvolvedor
              </span>
              <p
                style={{
                  color: "#fff",
                  opacity: 0.85,
                  margin: "18px 0 12px 0",
                }}>
                Apaixonado por tecnologia, inovação e desenvolvimento de
                soluções digitais que geram resultados reais para empresas.
              </p>
              <div
                className="d-flex justify-content-center gap-3 mt-2"
                style={{ justifyContent: "center", gap: 32 }}>
                <a
                  href="https://github.com/Ninzinhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="team-social-icon"
                  style={{
                    color: "#ffd6b0",
                    fontSize: 36,
                    display: "flex",
                    alignItems: "center",
                  }}>
                  {/* GitHub SVG Octocat sem fundo */}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                    <path
                      className="team-social-fill"
                      fill="#ffd6b0"
                      d="M12.026 2c-5.504 0-9.974 4.47-9.974 9.974 0 4.409 2.865 8.142 6.839 9.466.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.687 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.14 20.113 22 16.382 22 11.974 22 6.47 17.53 2 12.026 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/jvemmanuell"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="team-social-icon"
                  style={{
                    color: "#ffd6b0",
                    fontSize: 36,
                    display: "flex",
                    alignItems: "center",
                  }}>
                  {/* LinkedIn SVG */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="32"
                      height="32"
                      rx="7"
                      stroke="#ffd6b0"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M14 17h3.5v11H14zM15.75 14.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM20.5 17h3v1.5c.4-.7 1.3-1.5 2.5-1.5 2.5 0 3.5 1.5 3.5 3.8V28h-3.5v-5c0-1.2-.5-2-1.4-2-.8 0-1.3.6-1.3 2V28H20.5V17z"
                      fill="#ffd6b0"
                      className="team-social-fill"
                    />
                  </svg>
                </a>
              </div>
              <style jsx>{`
                .team-social-icon svg {
                  transition: filter 0.2s, fill 0.2s,
                    transform 0.25s cubic-bezier(0.4, 0.2, 0.2, 1);
                }
                .team-social-icon:hover .team-social-fill {
                  fill: #ffd6b0;
                }
                .team-social-icon:hover svg {
                  transform: scale(1.18);
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
