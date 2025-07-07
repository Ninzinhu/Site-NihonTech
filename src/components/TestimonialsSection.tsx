"use client";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const depoimentos = [
  {
    nome: "Lucas Andrade",
    cargo: "CEO, ContaMais",
    texto:
      "A equipe da NihonTech superou nossas expectativas! O sistema ficou moderno, rápido e o suporte é excelente.",
  },
  {
    nome: "Marina Sato",
    cargo: "Fundadora, Sato Design",
    texto:
      "O site institucional ficou incrível, com visual tech e performance. Recomendo para quem quer inovar!",
  },
  {
    nome: "Carlos Lima",
    cargo: "CTO, FinanPro",
    texto:
      "A integração de APIs e o dashboard desenvolvido pela NihonTech trouxeram agilidade e controle ao nosso negócio.",
  },
  {
    nome: "João Marcos",
    cargo: "Founder, EliteSkins",
    texto:
      "A NihonTech entregou nossa plataforma com qualidade, agilidade e atenção aos detalhes. O resultado superou nossas expectativas!",
  },
  {
    nome: "Patrícia Oliveira",
    cargo: "CTO, AgroDigital",
    texto:
      "A expertise da NihonTech em soluções web foi fundamental para o crescimento digital da nossa empresa. Atendimento rápido e eficiente!",
  },
  {
    nome: "Renato Kimura",
    cargo: "Gerente de Projetos, LogiMax",
    texto:
      "O time da NihonTech é diferenciado! Entregaram nosso sistema no prazo, com qualidade e suporte sempre disponível.",
  },
  {
    nome: "Fernanda Souza",
    cargo: "Diretora, MarketUp",
    texto:
      "Profissionalismo e criatividade definem a NihonTech. O app ficou intuitivo e super elogiado pelos nossos clientes!",
  },
  {
    nome: "Eduardo Tanaka",
    cargo: "COO, HealthCare+",
    texto:
      "A consultoria tech da NihonTech foi essencial para escalarmos nosso sistema. Recomendo de olhos fechados!",
  },
  {
    nome: "Beatriz Ramos",
    cargo: "Gestora, EducaMais",
    texto:
      "O site educacional ficou lindo, rápido e fácil de usar. Atendimento atencioso do início ao fim do projeto!",
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
    <section
      id="testimonials-tech"
      style={{
        background: "linear-gradient(120deg, #181c24 0%, #23272f 100%)",
        padding: "80px 0 60px 0",
        fontFamily: "Inter, sans-serif",
      }}>
      <div className="container">
        <h2
          className="text-center mb-2"
          style={{
            color: "#ffd6b0",
            fontWeight: 900,
            fontSize: "2.2rem",
            letterSpacing: "-1px",
          }}>
          Depoimentos
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: "#fff", opacity: 0.7, fontSize: "1.1rem" }}>
          O que nossos clientes dizem sobre a experiência tech.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              style={{
                background: "rgba(24,28,36,0.85)",
                borderRadius: 40,
                boxShadow: "0 12px 48px rgba(255,214,176,0.13)",
                padding: "64px 48px",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255,214,176,0.16)",
                position: "relative",
                minHeight: 300,
                overflow: "hidden",
              }}>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                loop
                style={{ width: "100%", minHeight: 180 }}>
                {depoimentos.map((dep, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        minHeight: 160,
                      }}>
                      {/* Ícone aspas SVG neon */}
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        style={{ position: "absolute", top: 24, left: 24 }}>
                        <path
                          d="M16 36c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8zm24 0c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8z"
                          fill="#ffd6b0"
                          opacity="0.18"
                        />
                        <path
                          d="M16 36c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8zm24 0c0-8 4-12 8-12v-8c-8 0-16 8-16 20h8z"
                          stroke="#ffd6b0"
                          strokeWidth="2"
                        />
                      </svg>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "1.18rem",
                          fontWeight: 500,
                          marginBottom: 32,
                          marginTop: 12,
                          zIndex: 1,
                          position: "relative",
                        }}>
                        &quot;{dep.texto}&quot;
                      </p>
                      <div
                        style={{
                          color: "#ffd6b0",
                          fontWeight: 700,
                          fontSize: "1.08rem",
                          marginBottom: 2,
                        }}>
                        {dep.nome}
                      </div>
                      <div
                        style={{
                          color: "#fff",
                          opacity: 0.7,
                          fontSize: "0.98rem",
                        }}>
                        {dep.cargo}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .swiper-pagination {
          width: 100%;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          position: static !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.3;
          margin: 0 3px;
          display: inline-block;
          transition: background 0.2s, opacity 0.2s;
          border: 2px solid #ffd6b0;
        }
        .swiper-pagination-bullet-active {
          background: #ffd6b0 !important;
          opacity: 1 !important;
          border: 2px solid #ffd6b0;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #ffd6b0 !important;
          background: none !important;
          border: none !important;
          font-size: 44px !important;
          width: 56px;
          height: 56px;
          top: 75%;
          transform: translateY(-50%);
          z-index: 10;
          overflow: visible !important;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 44px !important;
          color: #ffd6b0 !important;
        }
      `}</style>
    </section>
  );
}
