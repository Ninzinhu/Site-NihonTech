import styles from "../styles/TeamSection.module.css";

export default function TeamSection() {
  return (
    <section className={styles.teamSection} id="team-tech">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Nossa Equipe</h2>
          <p className={styles.subtitle}>
            Especialistas em automação e desenvolvimento de soluções
            inteligentes
          </p>
        </div>

        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <div className={styles.profilePlaceholder}>
                <span className={styles.initials}>JV</span>
              </div>
              <div className={styles.imageBorder}></div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.memberName}>João Victor</h3>
              <p className={styles.memberRole}>Founder & Desenvolvedor</p>

              <div className={styles.memberDescription}>
                <p>
                  Especialista em automação e desenvolvimento de soluções
                  inteligentes que transformam processos e impulsionam
                  resultados. Com foco em inovação tecnológica e excelência.
                </p>
              </div>

              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/Ninzinhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12.026 2c-5.504 0-9.974 4.47-9.974 9.974 0 4.409 2.865 8.142 6.839 9.466.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.687 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.14 20.113 22 16.382 22 11.974 22 6.47 17.53 2 12.026 2z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/jvemmanuell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
