import { useState } from "react";

export default function CookieConsentSection() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="cookie-consent-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#222",
        color: "#fff",
        zIndex: 9999,
        padding: "16px 0",
        textAlign: "center",
      }}>
      <span className="mbr-fonts-style display-7">
        Este site utiliza cookies para melhorar sua experiência. Ao continuar
        navegando, você concorda com nossa{" "}
        <a
          href="/politica-de-privacidade"
          style={{ color: "#39ff14", textDecoration: "underline" }}>
          Política de Privacidade
        </a>
        .
      </span>
      <button
        className="btn btn-primary"
        style={{ marginLeft: 16 }}
        onClick={() => setVisible(false)}>
        Aceitar
      </button>
    </div>
  );
}
