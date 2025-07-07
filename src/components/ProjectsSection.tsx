"use client";
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
    live: "https://responsiverestaurant.com/",
    github: "https://github.com/Ninzinhu/ResponsiveRestaurant",
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
    <section
      style={{
        background: "linear-gradient(120deg, #181c24 0%, #23272f 100%)",
        padding: "60px 0",
      }}
      id="ultimos-projetos">
      <div className="container">
        <h2
          style={{
            color: "#ffd6b0",
            fontWeight: 900,
            fontSize: "2.5rem",
            letterSpacing: "-1px",
            textAlign: "center",
            marginBottom: 48,
          }}>
          Ultimos Projetos
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
          }}>
          {projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                width: 400,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 9px 24px 0 rgba(0,0,0,0.13)",
                position: "relative",
                background: "#181c24",
                cursor: "pointer",
                transition:
                  "transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s cubic-bezier(.4,2,.6,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.04) translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px 0 rgba(255,214,176,0.13), 0 2px 16px 0 rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 9px 24px 0 rgba(0,0,0,0.13)";
              }}
              onClick={() => {
                setOpen(proj.id);
              }}>
              <div
                style={{
                  position: "relative",
                  height: 220,
                  overflow: "hidden",
                }}>
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  style={{
                    objectFit: proj.id === "eliteskins" ? "contain" : "cover",
                    background: proj.id === "eliteskins" ? "#000" : undefined,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "25%",
                    background: "rgba(0,0,0,0.48)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    zIndex: 1,
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "16px 24px 20px 24px",
                  zIndex: 2,
                }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#ffd6b0",
                    color: "#181c24",
                    fontWeight: 700,
                    fontSize: 14,
                    borderRadius: 8,
                    padding: "2px 12px",
                    marginBottom: 18,
                    marginTop: 0,
                  }}>
                  {proj.category}
                </span>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 20,
                    margin: 0,
                    textShadow: "0 2px 8px #000",
                  }}>
                  {proj.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {projects.map(
          (proj) =>
            open === proj.id && (
              <div
                key={proj.id}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.7)",
                  zIndex: 1000,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <div
                  style={{
                    background: "#111",
                    borderRadius: 16,
                    padding: 24,
                    maxWidth: 620,
                    width: "100%",
                    color: "#f5f5f7",
                    position: "relative",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    letterSpacing: 0.1,
                  }}>
                  <button
                    onClick={() => setOpen(null)}
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 24,
                      background: "none",
                      border: "none",
                      color: "#fff",
                      fontSize: 28,
                      cursor: "pointer",
                    }}
                    aria-label="Fechar">
                    ×
                  </button>
                  <h2
                    style={{
                      fontWeight: 900,
                      fontSize: 28,
                      marginBottom: 24,
                      textAlign: "center",
                      letterSpacing: -1,
                      color: "#fff",
                    }}>
                    {proj.title}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      gap: 32,
                      justifyContent: "center",
                      marginBottom: 24,
                    }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: "transform 0.25s cubic-bezier(.4,2,.6,1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.08)";
                        setHoveredSkill({ type: "frontend", idx: 0 });
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        setHoveredSkill(null);
                      }}>
                      <div
                        style={{
                          background: "#181c24",
                          borderRadius: 14,
                          padding: 14,
                          marginBottom: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: 48,
                          minHeight: 48,
                        }}>
                        <div style={{ display: "flex", gap: 12 }}>
                          {proj.skills.frontend
                            .filter(Boolean)
                            .map((skill, i) => (
                              <div
                                key={i}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  transition:
                                    "transform 0.25s cubic-bezier(.4,2,.6,1)",
                                  cursor: "pointer",
                                  position: "relative",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1.18)";
                                  setHoveredSkill({
                                    type: "frontend",
                                    idx: i,
                                  });
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = "scale(1)";
                                  setHoveredSkill(null);
                                }}>
                                <span style={{ fontSize: 26 }}>
                                  {skill.icon}
                                </span>
                                {hoveredSkill &&
                                  hoveredSkill.type === "frontend" &&
                                  hoveredSkill.idx === i && (
                                    <span
                                      style={{
                                        position: "absolute",
                                        top: -36,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        background: "#222",
                                        color: "#fff",
                                        padding: "4px 14px",
                                        borderRadius: 8,
                                        fontSize: 15,
                                        fontWeight: 700,
                                        whiteSpace: "nowrap",
                                        boxShadow: "0 2px 12px #000a",
                                        zIndex: 20,
                                        pointerEvents: "none",
                                      }}>
                                      {skill.title}
                                    </span>
                                  )}
                              </div>
                            ))}
                        </div>
                      </div>
                      <span
                        style={{
                          fontWeight: 700,
                          color: "#b0b0b0",
                          fontSize: 15,
                          fontFamily: "Inter, Arial, Helvetica, sans-serif",
                        }}>
                        Frontend
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: "transform 0.25s cubic-bezier(.4,2,.6,1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.08)";
                        setHoveredSkill({ type: "backend", idx: 0 });
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        setHoveredSkill(null);
                      }}>
                      <div
                        style={{
                          background: "#181c24",
                          borderRadius: 14,
                          padding: 14,
                          marginBottom: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: 48,
                          minHeight: 48,
                        }}>
                        <div style={{ display: "flex", gap: 12 }}>
                          {proj.skills.backend
                            .filter(Boolean)
                            .map((skill, i) => (
                              <div
                                key={i}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  transition:
                                    "transform 0.25s cubic-bezier(.4,2,.6,1)",
                                  cursor: "pointer",
                                  position: "relative",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1.18)";
                                  setHoveredSkill({
                                    type: "backend",
                                    idx: i,
                                  });
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = "scale(1)";
                                  setHoveredSkill(null);
                                }}>
                                <span style={{ fontSize: 26 }}>
                                  {skill.icon}
                                </span>
                                {hoveredSkill &&
                                  hoveredSkill.type === "backend" &&
                                  hoveredSkill.idx === i && (
                                    <span
                                      style={{
                                        position: "absolute",
                                        top: -36,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        background: "#222",
                                        color: "#fff",
                                        padding: "4px 14px",
                                        borderRadius: 8,
                                        fontSize: 15,
                                        fontWeight: 700,
                                        whiteSpace: "nowrap",
                                        boxShadow: "0 2px 12px #000a",
                                        zIndex: 20,
                                        pointerEvents: "none",
                                      }}>
                                      {skill.title}
                                    </span>
                                  )}
                              </div>
                            ))}
                        </div>
                      </div>
                      <span
                        style={{
                          fontWeight: 700,
                          color: "#b0b0b0",
                          fontSize: 15,
                          fontFamily: "Inter, Arial, Helvetica, sans-serif",
                        }}>
                        Backend
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      marginBottom: 24,
                      fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      fontSize: 16,
                      color: "#f5f5f7",
                      textAlign: "left",
                      maxWidth: 520,
                      lineHeight: 1.6,
                    }}>
                    {proj.description}
                  </p>
                  <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#fff",
                        color: "#181c24",
                        padding: "8px 18px",
                        borderRadius: 8,
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: 15,
                        boxShadow: "0 2px 8px #0002",
                        fontFamily: "Inter, Arial, Helvetica, sans-serif",
                      }}>
                      Veja o Deploy
                    </a>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#fff",
                          color: "#181c24",
                          padding: "8px 18px",
                          borderRadius: 8,
                          fontWeight: 700,
                          textDecoration: "none",
                          fontSize: 15,
                          boxShadow: "0 2px 8px #0002",
                          fontFamily: "Inter, Arial, Helvetica, sans-serif",
                        }}>
                        Github
                      </a>
                    )}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      borderRadius: 12,
                      overflow: "hidden",
                      marginBottom: 8,
                      background: "#222",
                    }}>
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={1}
                      style={{ width: "100%", height: 260 }}
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
                            style={{
                              position: "absolute",
                              right: 16,
                              bottom: 16,
                              background: "rgba(0,0,0,0.7)",
                              color: "#ffd6b0",
                              border: "none",
                              borderRadius: 8,
                              padding: "6px 16px",
                              fontWeight: 700,
                              cursor: "pointer",
                              fontSize: 15,
                              zIndex: 10,
                              boxShadow: "0 2px 8px #0008",
                            }}>
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
          <div
            onClick={() => setZoomImg(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.92)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "zoom-out",
            }}>
            <Image
              src={zoomImg}
              alt="Zoom"
              width={900}
              height={600}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: 16,
                boxShadow: "0 8px 32px #000a",
                background: "#111",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
