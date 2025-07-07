export default function MarqueeSection() {
  return (
    <div
      style={{
        background: "#a72828",
        width: "100%",
        overflow: "hidden",
        padding: 0,
        position: "relative",
        height: 72,
        display: "flex",
        alignItems: "center",
      }}>
      <div
        className="marquee-text"
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          color: "#fff",
          fontSize: "2.2rem",
          fontFamily: "inherit",
          fontWeight: 400,
          padding: "16px 0",
          animation: "marqueeAnim 18s linear infinite",
        }}>
        Criatividade Sem Limites * Inovação em Cada Projeto * Soluções Digitais
        de Impacto * NihonTech *
      </div>
      <style jsx>{`
        @keyframes marqueeAnim {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
