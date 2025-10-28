"use client";

import { DeviceMobile, Globe, Monitor } from "phosphor-react";

export default function FeaturesSection() {
  return (
    <section
      id="features-tech"
      style={{
        background:
          "linear-gradient(120deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
        padding: "112px 0 60px 0",
        fontFamily: "Inter, sans-serif",
      }}>
      <div className="container">
        <h2
          className="text-center mb-2"
          style={{
            color: "var(--text-secondary)",
            fontWeight: 900,
            fontSize: "2.5rem",
            letterSpacing: "-1px",
          }}>
          Por que escolher a Konpeki Systems?
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: "#fff", opacity: 0.7, fontSize: "1.15rem" }}>
          Tecnologia, inovação e resultado para o seu negócio.
        </p>
        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-md-4">
            <div
              style={{
                background: "#0f1720",
                borderRadius: 28,
                boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                padding: "40px 28px",
                textAlign: "center",
                backdropFilter: "blur(8px)",
                border: "1.5px solid rgba(255,255,255,0.03)",
                transition: "box-shadow .2s",
              }}>
              <div style={{ marginBottom: 24 }}>
                <Monitor
                  size={48}
                  color="var(--text-secondary)"
                  weight="duotone"
                />
              </div>
              <h3
                style={{
                  color: "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  marginBottom: 12,
                }}>
                Sites Modernos
              </h3>
              <p style={{ color: "#fff", opacity: 0.85, fontSize: "1.05rem" }}>
                Landing pages, institucionais e portais com design responsivo e
                performance.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4">
            <div
              style={{
                background: "#0f1720",
                borderRadius: 28,
                boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                padding: "40px 28px",
                textAlign: "center",
                backdropFilter: "blur(8px)",
                border: "1.5px solid rgba(255,255,255,0.03)",
                transition: "box-shadow .2s",
              }}>
              <div style={{ marginBottom: 24 }}>
                <Globe
                  size={48}
                  color="var(--text-secondary)"
                  weight="duotone"
                />
              </div>
              <h3
                style={{
                  color: "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  marginBottom: 12,
                }}>
                Sistemas Web
              </h3>
              <p style={{ color: "#fff", opacity: 0.85, fontSize: "1.05rem" }}>
                Automação, gestão, dashboards e soluções sob medida para sua
                empresa.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4">
            <div
              style={{
                background: "#0f1720",
                borderRadius: 28,
                boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                padding: "40px 28px",
                textAlign: "center",
                backdropFilter: "blur(8px)",
                border: "1.5px solid rgba(255,255,255,0.03)",
                transition: "box-shadow .2s",
              }}>
              <div style={{ marginBottom: 24 }}>
                <DeviceMobile
                  size={48}
                  color="var(--text-secondary)"
                  weight="duotone"
                />
              </div>
              <h3
                style={{
                  color: "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  marginBottom: 12,
                }}>
                Apps & Integrações
              </h3>
              <p style={{ color: "#fff", opacity: 0.85, fontSize: "1.05rem" }}>
                Aplicativos, integrações com APIs, ERPs e consultoria tech para
                inovar de verdade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
