export default function LoadingScreen() {
  return (
    <div
      className="loading-screen"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(10, 10, 10, 0.98)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
      }}>
      <div style={{ textAlign: "center" }}>
        <div
          className="spinner"
          style={{
            border: "6px solid #222",
            borderTop: "6px solid #39ff14",
            borderRadius: "50%",
            width: 60,
            height: 60,
            animation: "spin 1s linear infinite",
            margin: "0 auto 24px auto",
          }}
        />
        <span
          className="mbr-fonts-style display-7"
          style={{ color: "#39ff14", fontWeight: 600 }}>
          Carregando...
        </span>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
