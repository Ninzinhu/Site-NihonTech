"use client";
import styles from "@/styles/ProjectsSection.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiApachemaven,
  SiArduino,
  SiBootstrap,
  SiChakraui,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PROJECT_SKILLS = {
  go: { title: "Golang", icon: <SiGo /> },
  next: { title: "Next.js", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", icon: <SiChakraui /> },
  node: { title: "Node.js", icon: <RiNodejsFill /> },
  python: { title: "Python", icon: <SiPython /> },
  prisma: { title: "Prisma", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", icon: <SiMongodb /> },
  express: { title: "Express", icon: <SiExpress /> },
  reactQuery: { title: "React Query", icon: <SiReactquery /> },
  shadcn: { title: "ShadCN UI", icon: <SiShadcnui /> },
  tailwind: { title: "Tailwind", icon: <SiTailwindcss /> },
  docker: { title: "Docker", icon: <SiDocker /> },
  firebase: { title: "Firebase", icon: <SiFirebase /> },
  sockerio: { title: "Socket.io", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", icon: <SiJavascript /> },
  ts: { title: "TypeScript", icon: <SiTypescript /> },
  vue: { title: "Vue.js", icon: <SiVuedotjs /> },
  react: { title: "React.js", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", icon: <SiSanity /> },
  spline: { title: "Spline", icon: <SiThreedotjs /> },
  framerMotion: { title: "Framer Motion", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", icon: <SiSupabase /> },
  vite: { title: "Vite", icon: <SiVite /> },
  netlify: { title: "Netlify", icon: <SiNetlify /> },
  html: { title: "HTML5", icon: <SiHtml5 /> },
  css: { title: "CSS3", icon: <SiCss3 /> },
  bootstrap: { title: "Bootstrap", icon: <SiBootstrap /> },
  maven: { title: "Maven", icon: <SiApachemaven /> },
  cplusplus: { title: "C++", icon: <SiCplusplus /> },
  arduino: { title: "Arduino", icon: <SiArduino /> },
};

const projects = [
  {
    id: "contamaisexata",
    img: "/assets/projects-screenshots/contamaisexata/1.jpg",
    title: "ContaMaisExata",
    category: "Mobile",
    description:
      "App feito para controle de finanças! Utilizando ReactNative e Expo para Testes, com otimização de tempo e total controle sobre seus ganhos e gastos.",
    live: "https://github.com/Ninzinhu/ContaMaisExata",
    github: "https://github.com/Ninzinhu/ContaMaisExata",
    screenshots: ["/assets/projects-screenshots/contamaisexata/1.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.firebase],
    },
  },
  {
    id: "currencyconverter",
    img: "/assets/projects-screenshots/currency/1.png",
    title: "Conversor de Moedas (Câmbio)",
    category: "Web Development",
    description:
      "Conversor de moedas online para facilitar cálculos de câmbio em tempo real! API e Backend feito em Go, Frontend em HTML,JS,CSS.",
    live: "https://currency-converter-psi-mauve.vercel.app/",
    github: "https://github.com/Ninzinhu/CurrencyConverter",
    screenshots: [
      "/assets/projects-screenshots/currency/1.png",
      "/assets/projects-screenshots/currency/2.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.go],
    },
  },
  {
    id: "financecontrol",
    img: "/assets/projects-screenshots/finance-control/1.png",
    title: "Controle Financeiro",
    category: "Web Development",
    description:
      "Mini Dashboard de cadastro de vendas. Integração com Firebase DB, gráfico de vendas e exportação de planilha.",
    live: "https://cadastro-de-vendas-rosy.vercel.app/",
    github: "https://github.com/Ninzinhu/Cadastro-de-Vendas",
    screenshots: [
      "/assets/projects-screenshots/finance-control/1.png",
      "/assets/projects-screenshots/finance-control/2.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.js, PROJECT_SKILLS.firebase],
    },
  },
  {
    id: "eliteskins",
    img: "/assets/projects-screenshots/eliteskins/1.png",
    title: "Elite Skins",
    category: "Web-Site",
    description:
      "Plataforma de venda de skins para jogos, com sistema de pagamento integrado e layout responsivo.",
    live: "https://elite-skins-alpha.vercel.app/",
    github: "https://elite-skins-alpha.vercel.app/",
    screenshots: ["/assets/projects-screenshots/eliteskins/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.node],
    },
  },
  {
    id: "responsiverestaurant",
    img: "/assets/projects-screenshots/responsiverestaurant/1.png",
    title: "Responsive Restaurant",
    category: "Web Development",
    description:
      "Site institucional para restaurante, totalmente responsivo, com cardápio dinâmico e integração com WhatsApp.",
    live: "https://responsive-restaurant-website-k0mlla37l-ninzinhus-projects.vercel.app/",
    github: "https://github.com/Ninzinhu/Responsive-Restaurant-Website",
    screenshots: ["/assets/projects-screenshots/responsiverestaurant/1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.postgres, PROJECT_SKILLS.node],
    },
  },
  {
    id: "controlehospitalar",
    img: "/assets/projects-screenshots/controle-hospitalar/1.png",
    title: "Controle Hospitalar",
    category: "SaaS",
    description:
      "Sistema para gestão hospitalar, controle de pacientes, médicos e agendamentos, com dashboard analítico.",
    live: "https://controlehospitalar.com/",
    github: "https://github.com/Ninzinhu/ControleHospitalar",
    screenshots: [
      "/assets/projects-screenshots/controle-hospitalar/1.png",
      "/assets/projects-screenshots/controle-hospitalar/2.png",
      "/assets/projects-screenshots/controle-hospitalar/3.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.firebase],
    },
  },
];

export default function ProjectsSection() {
  const [open, setOpen] = useState<string | null>(null);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<{
    type: "frontend" | "backend";
    idx: number;
  } | null>(null);

  useEffect(() => {
    if (!zoomImg) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [zoomImg]);

  return (
    <section className={styles.projectsSection} id="ultimos-projetos">
      <div className="container">
        <h2 className={styles.title}>Últimos Projetos</h2>
        <div className={styles.projectsGrid}>
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={styles.projectCard}
              onClick={() => setOpen(proj.id)}>
              <div className={styles.imageContainer}>
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  style={{
                    objectFit: proj.id === "eliteskins" ? "contain" : "cover",
                    background: proj.id === "eliteskins" ? "#000" : undefined,
                  }}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{proj.category}</span>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {projects.map(
          (proj) =>
            open === proj.id && (
              <div key={proj.id} className={styles.modalOverlay}>
                <div className={styles.modal}>
                  <button
                    onClick={() => setOpen(null)}
                    className={styles.closeButton}
                    aria-label="Fechar">
                    ×
                  </button>
                  <h2 className={styles.modalTitle}>{proj.title}</h2>
                  <div className={styles.skillsContainer}>
                    <div
                      className={styles.skillGroup}
                      onMouseEnter={() =>
                        setHoveredSkill({ type: "frontend", idx: 0 })
                      }
                      onMouseLeave={() => setHoveredSkill(null)}>
                      <div className={styles.skillsGrid}>
                        <div className={styles.skillIconContainer}>
                          {proj.skills.frontend
                            .filter(Boolean)
                            .map((skill, i) => (
                              <div
                                key={i}
                                className={styles.skillIcon}
                                onMouseEnter={() =>
                                  setHoveredSkill({
                                    type: "frontend",
                                    idx: i,
                                  })
                                }
                                onMouseLeave={() => setHoveredSkill(null)}>
                                <span className={styles.skillIconSymbol}>
                                  {skill.icon}
                                </span>
                                {hoveredSkill &&
                                  hoveredSkill.type === "frontend" &&
                                  hoveredSkill.idx === i && (
                                    <span className={styles.skillTooltip}>
                                      {skill.title}
                                    </span>
                                  )}
                              </div>
                            ))}
                        </div>
                      </div>
                      <span className={styles.skillLabel}>Frontend</span>
                    </div>
                    <div
                      className={styles.skillGroup}
                      onMouseEnter={() =>
                        setHoveredSkill({ type: "backend", idx: 0 })
                      }
                      onMouseLeave={() => setHoveredSkill(null)}>
                      <div className={styles.skillsGrid}>
                        <div className={styles.skillIconContainer}>
                          {proj.skills.backend
                            .filter(Boolean)
                            .map((skill, i) => (
                              <div
                                key={i}
                                className={styles.skillIcon}
                                onMouseEnter={() =>
                                  setHoveredSkill({
                                    type: "backend",
                                    idx: i,
                                  })
                                }
                                onMouseLeave={() => setHoveredSkill(null)}>
                                <span className={styles.skillIconSymbol}>
                                  {skill.icon}
                                </span>
                                {hoveredSkill &&
                                  hoveredSkill.type === "backend" &&
                                  hoveredSkill.idx === i && (
                                    <span className={styles.skillTooltip}>
                                      {skill.title}
                                    </span>
                                  )}
                              </div>
                            ))}
                        </div>
                      </div>
                      <span className={styles.skillLabel}>Backend</span>
                    </div>
                  </div>
                  <p className={styles.projectDescription}>
                    {proj.description}
                  </p>
                  <div className={styles.actionButtons}>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionButton}>
                      Veja o Deploy
                    </a>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}>
                        Github
                      </a>
                    )}
                  </div>
                  <div className={styles.screenshotsContainer}>
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      className={styles.screenshotSlider}
                      navigation
                      modules={[Navigation]}>
                      {proj.screenshots.map((img, idx) => (
                        <SwiperSlide key={idx} style={{ position: "relative" }}>
                          <Image
                            src={img}
                            alt={proj.title + " screenshot " + idx}
                            width={600}
                            height={260}
                            style={{
                              objectFit:
                                proj.id === "eliteskins" ? "contain" : "cover",
                              width: "100%",
                              background:
                                proj.id === "eliteskins" ? "#000" : undefined,
                            }}
                          />
                          <button
                            onClick={() => setZoomImg(img)}
                            className={styles.screenshotZoomButton}>
                            Dar zoom
                          </button>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            )
        )}
        {zoomImg && (
          <div onClick={() => setZoomImg(null)} className={styles.zoomOverlay}>
            <Image
              src={zoomImg}
              alt="Zoom"
              width={900}
              height={600}
              className={styles.zoomImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
