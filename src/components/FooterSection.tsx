export default function FooterSection() {
  return (
    <footer
      className="footer-tech py-2"
      style={{ background: "#1a1a1a", color: "#fff", letterSpacing: 0.2 }}
      id="footer-tech">
      <div className="container text-center">
        <span style={{ color: "#fff", fontSize: 16, opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} NihonTech. Todos os direitos
          reservados.
        </span>
      </div>
    </footer>
  );
}
