"use client";

import { DeviceMobile, Globe, Monitor } from "phosphor-react";

export default function ServicesSection() {
  return (
    <section
      className="services-tech py-5"
      style={{ background: "#181c23" }}
      id="services-tech">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2
              style={{ fontWeight: 700, fontSize: "2.5rem", color: "#ffd6b0" }}>
              Nossos Serviços
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#fff", opacity: 0.85 }}>
              Tudo o que sua empresa precisa para inovar com tecnologia.
            </p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4">
            <div
              className="card h-100 border-0 shadow-sm text-center p-4 service-card"
              style={{
                borderRadius: 20,
                background: "#232733",
                color: "#fff",
                transition: "transform .2s",
              }}>
              <div
                style={{
                  background: "#ffd6b0",
                  borderRadius: "50%",
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                }}>
                <Monitor size={36} color="#181c23" weight="duotone" />
              </div>
              <h5
                style={{ fontWeight: 700, color: "#ffd6b0", marginBottom: 12 }}>
                Sites & Landing Pages
              </h5>
              <p style={{ color: "#fff", opacity: 0.85 }}>
                Criação de sites institucionais, landing pages e portais com
                design moderno e performance.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="card h-100 border-0 shadow-sm text-center p-4 service-card"
              style={{
                borderRadius: 20,
                background: "#232733",
                color: "#fff",
                transition: "transform .2s",
              }}>
              <div
                style={{
                  background: "#ffd6b0",
                  borderRadius: "50%",
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                }}>
                <Globe size={36} color="#181c23" weight="duotone" />
              </div>
              <h5
                style={{ fontWeight: 700, color: "#ffd6b0", marginBottom: 12 }}>
                Sistemas Web
              </h5>
              <p style={{ color: "#fff", opacity: 0.85 }}>
                Soluções sob medida para automação, gestão, dashboards e
                produtividade.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="card h-100 border-0 shadow-sm text-center p-4 service-card"
              style={{
                borderRadius: 20,
                background: "#232733",
                color: "#fff",
                transition: "transform .2s",
              }}>
              <div
                style={{
                  background: "#ffd6b0",
                  borderRadius: "50%",
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                }}>
                <DeviceMobile size={36} color="#181c23" weight="duotone" />
              </div>
              <h5
                style={{ fontWeight: 700, color: "#ffd6b0", marginBottom: 12 }}>
                Apps & Integrações
              </h5>
              <p style={{ color: "#fff", opacity: 0.85 }}>
                Aplicativos, integrações com APIs, ERPs e consultoria tech para
                inovar de verdade.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(178,58,11,0.10);
        }
      `}</style>
    </section>
  );
}
