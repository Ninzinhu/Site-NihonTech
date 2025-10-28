"use client";

import styles from "../styles/MenuSection.module.css";

export default function MenuSection() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a className={styles.logo}>
          <span className={styles.logoText}>Konpeki Systems</span>
        </a>

        <div className={styles.navLinks}>
          <a href="#ultimos-projetos" className={styles.navLink}>
            Projetos
          </a>
          <a href="#testimonials-tech" className={styles.navLink}>
            Depoimentos
          </a>
          <a href="#team-tech" className={styles.cta}>
            Equipe
          </a>
        </div>
      </div>
    </nav>
  );
}
