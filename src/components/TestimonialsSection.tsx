"use client";
import styles from "@/styles/TestimonialsSection.module.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const depoimentos = [
  {
    nome: "Ricardo Silva",
    cargo: "Diretor de TI, TechCorp",
    texto:
      "Implementamos bots personalizados que automatizaram 80% do atendimento ao cliente. A produtividade aumentou drasticamente e a satisfação dos clientes também.",
  },
  {
    nome: "Ana Paula Santos",
    cargo: "CEO, StartupHub",
    texto:
      "A automação de processos da Konpeki revolucionou nossa operação. Agora focamos em estratégia enquanto a tecnologia trabalha 24/7 para nós.",
  },
  {
    nome: "Carlos Mendes",
    cargo: "Founder, E-commerce Plus",
    texto:
      "A integração de sistemas criada pela Konpeki conectou todas nossas plataformas. Ganhamos visibilidade completa e tomamos decisões baseadas em dados reais.",
  },
  {
    nome: "Juliana Costa",
    cargo: "Head de Operações, RetailPro",
    texto:
      "Nossos processos eram manuais e lentos. Com a automação inteligente da Konpeki, reduzimos erros em 95% e aumentamos a velocidade de entrega em 300%.",
  },
  {
    nome: "Fernando Rodrigues",
    cargo: "CTO, FinTech Solutions",
    texto:
      "Os chatbots personalizados transformaram nosso atendimento. Agora respondemos 10x mais rápido e nossos clientes ficaram muito mais satisfeitos.",
  },
  {
    nome: "Mariana Alves",
    cargo: "Gerente de Vendas, MarketForce",
    texto:
      "A implementação da IA para análise de dados mudou completamente como vendemos. Agora temos previsibilidade e insights que antes eram impossíveis.",
  },
];

export default function TestimonialsSection() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAtual((prev) => (prev + 1) % depoimentos.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [atual]);

  return (
    <section id="testimonials-tech" className={styles.testimonialSection}>
      <div className="container">
        <h2 className={styles.title}>O Que Nossos Clientes Dizem</h2>
        <p className={styles.subtitle}>
          Empresas que transformaram seus processos com nossas soluções
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "800px", width: "100%" }}>
            <div className={styles.testimonialCard}>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                loop
                className={styles.swiperContainer}>
                {depoimentos.map((dep, idx) => (
                  <SwiperSlide key={idx}>
                    <div className={styles.slideContent}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className={styles.quoteIcon}>
                        <path
                          d="M16 36c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8zm24 0c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8z"
                          fill="var(--text-secondary)"
                          opacity="0.12"
                        />
                        <path
                          d="M16 36c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8zm24 0c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8z"
                          stroke="var(--text-secondary)"
                          strokeWidth="2"
                        />
                      </svg>
                      <p className={styles.testimonialText}>
                        &quot;{dep.texto}&quot;
                      </p>
                      <div className={styles.authorName}>{dep.nome}</div>
                      <div className={styles.authorRole}>{dep.cargo}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
