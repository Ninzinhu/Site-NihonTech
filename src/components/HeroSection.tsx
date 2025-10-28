"use client";
import { useEffect, useState } from "react";
import {
  BsArrowRight,
  BsCodeSlash,
  BsCodeSquare,
  BsGear,
  BsGlobe,
  BsPhone,
  BsShieldCheck,
} from "react-icons/bs";
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Automatize. Otimize. Domine.";

  useEffect(() => {
    setIsVisible(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className={styles.hero} id="hero-tech">
      <div
        className={`${styles.heroContent} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            <span className={styles.typingText}>{displayText}</span>
            {displayText.length < fullText.length && (
              <span className={styles.cursor}>|</span>
            )}
          </h1>
          <p className={styles.subtitle}>
            IA, bots e automação inteligente que transformam processos e
            multiplicam resultados. Tecnologia que trabalha enquanto você escala
            seu negócio.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <BsCodeSlash />
            </div>
            <h3>Automação Inteligente</h3>
            <p>
              Elimine tarefas repetitivas e aumente a eficiência com
              inteligência artificial avançada
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <BsGear />
            </div>
            <h3>Chatbots & Assistência Virtual</h3>
            <p>
              Soluções de atendimento automatizadas que trabalham 24 horas por
              dia para seus clientes
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <BsGlobe />
            </div>
            <h3>Integração e Implementação</h3>
            <p>
              Conecte todas suas ferramentas e plataformas com soluções
              personalizadas sob medida
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <BsCodeSquare />
            </div>
            <h3>Web Development</h3>
            <p>
              Sites e aplicações web modernas, responsivas e otimizadas para
              performance e conversão
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <BsPhone />
            </div>
            <h3>Aplicação Mobile</h3>
            <p>
              Apps nativos e multiplataforma desenvolvidos com tecnologia de
              ponta para iOS e Android
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <BsShieldCheck />
            </div>
            <h3>Sistemas Únicos</h3>
            <p>
              Software personalizado sob medida para atender às necessidades
              específicas do seu negócio
            </p>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de iniciar um projeto."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}>
            Fale Com Nossa Equipe
            <BsArrowRight className={styles.ctaIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
