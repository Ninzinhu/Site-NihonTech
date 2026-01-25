import styles from "../styles/FooterSection.module.css";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow}></div>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>Konpeki Systems</span>
          <p className={styles.tagline}>Automatize. Otimize. Domine.</p>
        </div>

        <nav className={styles.links}>
          <a href="#hero-tech" className={styles.link}>
            Início
          </a>
          <a href="#ultimos-projetos" className={styles.link}>
            Projetos
          </a>
          <a href="#testimonials-tech" className={styles.link}>
            Depoimentos
          </a>
          <a href="#team-tech" className={styles.link}>
            Equipe
          </a>
        </nav>

        <div className={styles.divider}></div>

        <p className={styles.copyright}>
          &copy; {currentYear} Konpeki Systems. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
