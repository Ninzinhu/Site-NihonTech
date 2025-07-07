import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="about-tech py-5"
      style={{ background: "#fff" }}
      id="about-tech">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2
              style={{ fontWeight: 700, fontSize: "2.5rem", color: "#a72828" }}>
              Sobre a NihonTech
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#333", opacity: 0.85 }}>
              Paixão por tecnologia, inovação e criatividade japonesa.
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
            <Image
              src="https://r.mobirisesite.com/1083967/assets/images/photo-1434494878577-86c23bcb06b9.jpeg"
              alt="Sobre a NihonTech"
              width={350}
              height={260}
              style={{
                borderRadius: 24,
                objectFit: "cover",
                boxShadow: "0 8px 32px rgba(178,58,11,0.10)",
              }}
            />
          </div>
          <div className="col-12 col-md-7">
            <div
              className="card border-0 shadow-sm p-4"
              style={{
                borderRadius: 20,
                background: "#ffd6b0",
                minHeight: 220,
              }}>
              <h5
                style={{ fontWeight: 700, color: "#a72828", marginBottom: 12 }}>
                Quem somos
              </h5>
              <p style={{ color: "#333", opacity: 0.9, fontSize: "1.1rem" }}>
                Somos entusiastas da tecnologia japonesa, apaixonados por
                inovação e criatividade. Com uma mente inquieta, estamos sempre
                em busca de novos desafios e projetos que possam transformar
                ideias em realidade. Vamos juntos explorar o fascinante mundo da
                NihonTech!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
