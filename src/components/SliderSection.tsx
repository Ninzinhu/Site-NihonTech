import Image from "next/image";
import styles from "../styles/SliderSection.module.css";

export default function SliderSection() {
  return (
    <section className={styles.slider} id="features-8-uzALG7FGJT">
      <h2 className={styles.title}>Projetos em Destaque</h2>
      <p className={styles.desc}>
        Veja alguns exemplos de dashboards e sites desenvolvidos com tecnologia
        de ponta e design moderno.
      </p>
      <div className={styles.sliderWrap}>
        <div className={styles.slide}>
          <Image
            src="https://lineone.piniastudio.com/static/media/crm-analytics.1e2e2e2e.png"
            alt="Dashboard CRM Analytics - Lineone (Exemplo)"
            title="Dashboard CRM Analytics - Lineone"
            style={{
              width: "100%",
              borderRadius: 12,
              maxHeight: 220,
              objectFit: "cover",
              marginBottom: 16,
            }}
            width={352}
            height={220}
          />
          <div className={styles.text}>
            Dashboard CRM Analytics - Lineone (Exemplo)
          </div>
        </div>
        <div className={styles.slide}>
          <Image
            src="https://pixelbuddha.net/uploads/posts/2016/june/dashboard-ui-templates-free.jpg"
            alt="Dashboard UI Templates - Pixelbuddha (Exemplo)"
            title="Dashboard UI Templates - Pixelbuddha"
            style={{
              width: "100%",
              borderRadius: 12,
              maxHeight: 220,
              objectFit: "cover",
              marginBottom: 16,
            }}
            width={352}
            height={220}
          />
          <div className={styles.text}>
            Dashboard UI Templates - Pixelbuddha (Exemplo)
          </div>
        </div>
        <div className={styles.slide}>
          <Image
            src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
            alt="Argon Dashboard - Creative Tim (Exemplo)"
            title="Argon Dashboard - Creative Tim"
            style={{
              width: "100%",
              borderRadius: 12,
              maxHeight: 220,
              objectFit: "cover",
              marginBottom: 16,
            }}
            width={352}
            height={220}
          />
          <div className={styles.text}>
            Argon Dashboard - Creative Tim (Exemplo)
          </div>
        </div>
        <div className={styles.slide}>
          <Image
            src="https://demos.creative-tim.com/light-bootstrap-dashboard/assets/img/faces/face-3.jpg"
            alt="Light Bootstrap Dashboard - Creative Tim (Exemplo)"
            title="Light Bootstrap Dashboard - Creative Tim"
            style={{
              width: "100%",
              borderRadius: 12,
              maxHeight: 220,
              objectFit: "cover",
              marginBottom: 16,
            }}
            width={352}
            height={220}
          />
          <div className={styles.text}>
            Light Bootstrap Dashboard - Creative Tim (Exemplo)
          </div>
        </div>
      </div>
    </section>
  );
}
