"use client";
import { useEffect, useState } from "react";
import styles from "../styles/HeroSection.module.css";

// Partículas douradas pequenas, com leve movimento animado
function StarField({ count = 100 }) {
  const [stars, setStars] = useState<
    { left: number; top: number; size: number; delay: number; key: number }[]
  >([]);
  useEffect(() => {
    // Gere as estrelas apenas no client
    const generated = Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 1.1 + 0.4;
      const delay = Math.random() * 4;
      return { left, top, size, delay, key: i };
    });
    setStars(generated);
  }, [count]);
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}>
      {stars.map((star) => (
        <circle
          key={star.key}
          cx={`${star.left}%`}
          cy={`${star.top}%`}
          r={star.size}
          fill="#ffd6b0"
          opacity={0.7}>
          <animate
            attributeName="cy"
            values={`${star.top}%;${star.top + 2}%;${star.top}%`}
            dur={`${2.5 + star.delay}s`}
            repeatCount="indefinite"
            keyTimes="0;0.5;1"
          />
        </circle>
      ))}
    </svg>
  );
}

// Flares dourados girando ao redor do card (círculo percorre a órbita)
function RotatingFlares() {
  // Parâmetros dos flares: raio da órbita, tamanho, duração, delay
  const flares = [
    { rx: 320, ry: 120, r: 32, dur: 18, delay: 0, opacity: 0.18 },
    { rx: 220, ry: 80, r: 18, dur: 13, delay: 3, opacity: 0.13 },
    { rx: 170, ry: 160, r: 22, dur: 22, delay: 7, opacity: 0.1 },
  ];
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}>
      <defs>
        <radialGradient id="flareGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd6b0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffd6b0" stopOpacity="0" />
        </radialGradient>
        {/* Paths para as órbitas elípticas */}
        {flares.map((f, i) => (
          <path
            key={i}
            id={`ellipsePath${i}`}
            d={`M ${512 - f.rx} 384 a ${f.rx} ${f.ry} 0 1 0 ${f.rx * 2} 0 a ${
              f.rx
            } ${f.ry} 0 1 0 -${f.rx * 2} 0`}
            fill="none"
          />
        ))}
      </defs>
      {flares.map((f, i) => (
        <g key={i}>
          {/* Órbita elíptica (opcional, pode deixar transparente) */}
          {/* <ellipse cx="50%" cy="50%" rx={f.rx} ry={f.ry} fill="none" stroke="#ffd6b0" opacity="0.04" /> */}
          <circle r={f.r} fill="url(#flareGold)" opacity={f.opacity}>
            <animateMotion
              dur={`${f.dur}s`}
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              begin={`${f.delay}s`}>
              <mpath xlinkHref={`#ellipsePath${i}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </svg>
  );
}

// Shapes tech + Ano Novo Lunar decorativos (ondas/leques, glows, linhas)
function TechLunarShapes() {
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}>
      <defs>
        <radialGradient id="circleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd6b0" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#a72828" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd6b0" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#a72828" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      {/* Círculos e glows dourados */}
      <circle
        cx="80%"
        cy="20%"
        r="180"
        fill="url(#circleGlow)"
        filter="url(#blur1)"
      />
      <circle cx="20%" cy="80%" r="120" fill="url(#circleGlow)" />
      {/* Linhas tech */}
      <rect
        x="10%"
        y="10%"
        width="80%"
        height="80%"
        rx="40"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        opacity="0.13"
      />
      <rect
        x="20%"
        y="20%"
        width="60%"
        height="60%"
        rx="30"
        fill="none"
        stroke="#ffd6b0"
        strokeWidth="1"
        opacity="0.09"
      />
      <line
        x1="0"
        y1="90%"
        x2="100%"
        y2="10%"
        stroke="#ffd6b0"
        strokeWidth="1"
        opacity="0.07"
      />
      {/* Leques/ondas douradas */}
      <path
        d="M 0 100 Q 200 650 800 100 T 1800 100"
        stroke="#ffd6b0"
        strokeWidth="2"
        fill="none"
        opacity="0.08"
      />
      <path
        d="M 0 120 Q 300 700 900 120 T 1800 120"
        stroke="#ffd6b0"
        strokeWidth="1.2"
        fill="none"
        opacity="0.06"
      />
      {/* Pequenos glows */}
      <circle cx="90%" cy="60%" r="8" fill="#ffd6b0" opacity="0.13" />
      <circle cx="15%" cy="30%" r="5" fill="#fffbe6" opacity="0.10" />
      <circle cx="60%" cy="90%" r="7" fill="#ffd6b0" opacity="0.09" />
      {/* Filtros de blur */}
      <filter id="blur1">
        <feGaussianBlur stdDeviation="18" />
      </filter>
    </svg>
  );
}

// Cometa elegante: núcleo pequeno, rastro fino e perfeitamente alinhado
function ShootingComet() {
  // Parâmetros do cometa
  const starR = 5;
  const glowR = 14;
  const trailLength = 70;
  // Path da travessia: de -10vw à esquerda até 110vw à direita, passando pelo centro vertical (50vh)
  // Usando viewBox 0 0 1000 1000 para facilitar proporção
  const traversePath = `M -100 500 Q 500 420 1100 500`;
  return (
    <svg
      viewBox="0 0 1000 1000"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 3,
        pointerEvents: "none",
      }}>
      <defs>
        <radialGradient id="cometGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffbe6" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffd6b0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cometTrailGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.85" />
          <stop offset="30%" stopColor="#ffd6b0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffd6b0" stopOpacity="0" />
        </linearGradient>
        <filter id="trailBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <path id="cometPath" d={traversePath} fill="none" />
      </defs>
      {/* Rastro de luz fino e perfeitamente alinhado ao núcleo */}
      <g>
        <rect
          x={-trailLength}
          y={-1}
          width={trailLength}
          height={2}
          fill="url(#cometTrailGrad)"
          filter="url(#trailBlur)"
          opacity="0.85">
          <animateMotion dur="2.5s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#cometPath" />
          </animateMotion>
        </rect>
      </g>
      {/* Núcleo do cometa */}
      <g>
        <circle r={glowR} fill="url(#cometGlow)" opacity="0.7">
          <animateMotion dur="2.5s" repeatCount="indefinite">
            <mpath xlinkHref="#cometPath" />
          </animateMotion>
        </circle>
        <circle r={starR} fill="#fffbe6" opacity="1">
          <animateMotion dur="2.5s" repeatCount="indefinite">
            <mpath xlinkHref="#cometPath" />
          </animateMotion>
        </circle>
      </g>
    </svg>
  );
}

export default function HeroSection() {
  // Fade-in animation
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section
      className={styles.hero}
      style={{
        paddingTop: 90,
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 60% 40%, #a72828 0%, #181c24 100%)",
        color: "#fff",
        fontFamily:
          "Inter, 'JetBrains Mono', 'Fira Mono', monospace, sans-serif",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="hero-tech">
      <TechLunarShapes />
      <StarField count={100} />
      <RotatingFlares />
      <ShootingComet />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto 48px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 64px 64px 64px",
          borderRadius: 32,
          background: "rgba(24,28,36,0.55)",
          boxShadow: "0 8px 40px 0 rgba(178,58,11,0.13)",
          backdropFilter: "blur(18px)",
          border: "1.5px solid rgba(255,255,255,0.08)",
          transition: "box-shadow .3s, background .3s",
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(40px)",
          transitionProperty: "opacity, transform",
          transitionDuration: "0.8s",
          transitionTimingFunction: "cubic-bezier(.4,2,.3,1)",
        }}>
        <h1
          style={{
            fontWeight: 900,
            fontSize: "3.3rem",
            lineHeight: 1.08,
            marginBottom: 18,
            letterSpacing: "-1.5px",
            textAlign: "center",
            color: "#fff",
            textShadow: "0 2px 32px #a72828, 0 1px 0 #000",
            fontFamily: "inherit",
          }}>
          Nihon
          <span
            style={{
              color: "#ffd6b0",
              filter: "drop-shadow(0 0 12px #ffd6b0)",
            }}>
            Tech
          </span>
        </h1>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#ffd6b0",
            marginBottom: 0,
            textAlign: "center",
            letterSpacing: 0.2,
          }}>
          Inovação para o seu negócio
        </h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "18px 0 32px 0",
          }}>
          <div
            style={{
              width: 80,
              height: 2,
              background: "linear-gradient(90deg, #ffd6b0 0%, #b23a0b 100%)",
              borderRadius: 2,
              opacity: 0.25,
            }}
          />
        </div>
        <p
          style={{
            fontSize: "1.13rem",
            marginBottom: 36,
            color: "#fffbe6",
            opacity: 0.92,
            textAlign: "center",
            maxWidth: 680,
            fontWeight: 400,
            lineHeight: 1.7,
            letterSpacing: 0.1,
          }}>
          A NihonTech nasceu com o propósito de impulsionar empresas através da
          tecnologia, criatividade e proximidade. Somos apaixonados por inovação
          e acreditamos que cada projeto é único: por isso, oferecemos soluções
          digitais sob medida, com atendimento humano, transparente e focado em
          resultados reais.
          <br />
          <br />
          Nossa missão é transformar ideias em experiências digitais marcantes,
          ajudando negócios a crescerem de forma sustentável e competitiva.
          Atuamos como parceiros de longo prazo, acompanhando cada etapa do seu
          projeto — do planejamento à evolução contínua.
          <br />
          <br />
          Combinamos expertise técnica, design inovador e visão estratégica para
          entregar sistemas, sites e apps que realmente fazem a diferença.
          Escolha a NihonTech e descubra como a tecnologia pode ser sua maior
          aliada.
        </p>
        {/* Indicadores de confiança dentro do card */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            margin: "0 0 38px 0",
            flexWrap: "wrap",
          }}>
          <div
            style={{
              background: "rgba(255,214,176,0.13)",
              borderRadius: 18,
              padding: "7px 22px",
              color: "#ffd6b0",
              fontWeight: 700,
              fontSize: "1.08rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 1.5l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 7.12l5.34-.78L10 1.5z"
                fill="#ffd6b0"
              />
            </svg>
            + de 50 empresas atendidas
          </div>
          <div
            style={{
              background: "rgba(255,214,176,0.13)",
              borderRadius: 18,
              padding: "7px 22px",
              color: "#ffd6b0",
              fontWeight: 700,
              fontSize: "1.08rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#ffd6b0" strokeWidth="2" />
              <path
                d="M6 10l2.5 2.5L14 7"
                stroke="#ffd6b0"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            98% de satisfação
          </div>
          <div
            style={{
              background: "rgba(255,214,176,0.13)",
              borderRadius: 18,
              padding: "7px 22px",
              color: "#ffd6b0",
              fontWeight: 700,
              fontSize: "1.08rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2v8l6 3.5"
                stroke="#ffd6b0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            5+ anos de experiência
          </div>
        </div>
        <a
          className="btn d-inline-flex align-items-center gap-2"
          href="#cta-tech"
          style={{
            background: "linear-gradient(90deg, #ffd6b0 0%, #b23a0b 100%)",
            color: "#181c24",
            borderRadius: 30,
            padding: "16px 48px",
            fontSize: "1.15rem",
            fontWeight: 700,
            border: "none",
            boxShadow: "0 0 18px #ffd6b0, 0 0 32px #b23a0b",
            transition: "box-shadow .2s, background .2s",
            letterSpacing: 0.2,
            position: "relative",
            overflow: "hidden",
            marginBottom: 8,
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, #b23a0b 0%, #ffd6b0 100%)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, #ffd6b0 0%, #b23a0b 100%)")
          }>
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            style={{ marginRight: 8, transition: "transform .2s" }}>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="#a72828"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Solicite um Orçamento
        </a>
      </div>
    </section>
  );
}
