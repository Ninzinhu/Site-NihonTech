"use client";

import Image from "next/image";

export default function MenuSection() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm fixed-top"
      style={{
        minHeight: 72,
        background: "#181c23",
        color: "#fff",
        fontFamily: "Trap, Arial, sans-serif",
      }}>
      <div className="container-fluid px-4">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          style={{
            fontWeight: 900,
            fontSize: "2.2rem",
            color: "#ffd6b0",
            textShadow: "0 2px 12px #b23a0b55",
            fontFamily: "Trap, Arial, sans-serif",
          }}>
          <Image
            src="/assets/logoheader.png"
            alt="NihonTech"
            width={48}
            height={48}
            style={{ marginRight: 12, objectFit: "contain" }}
          />
          NihonTech
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#ffd6b0" }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#features-tech"
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 18,
                  transition: "color .2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffd6b0")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
                Por que escolher?
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#ultimos-projetos"
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 18,
                  transition: "color .2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffd6b0")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
                Últimos Projetos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#testimonials-tech"
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 18,
                  transition: "color .2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ffd6b0")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
                Depoimentos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-primary"
                href="#cta-tech"
                style={{
                  borderRadius: 24,
                  padding: "8px 24px",
                  background: "#b23a0b",
                  border: "none",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18,
                  boxShadow: "0 2px 12px rgba(178,58,11,0.10)",
                  transition: "background .2s, color .2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#ffd6b0";
                  e.currentTarget.style.color = "#b23a0b";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#b23a0b";
                  e.currentTarget.style.color = "#fff";
                }}>
                Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
