import Image from "next/image";

export default function ClientsSection() {
  return (
    <section
      data-bs-version="5.1"
      className="gallery1 mbr-gallery cid-uzALH0Qn2A"
      id="gallery-1-uzALH0Qn2A">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="title-wrapper">
              <div className="title-wrap">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Nossos Clientes e Parceiros
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mbr-gallery mt-4">
          <div className="col-6 col-md-3 col-lg-2 item gallery-image">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/Ativo1.png"
                alt="Cliente 1"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 item gallery-image">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/Ativo 2.png"
                alt="Cliente 2"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 item gallery-image">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/active5.png"
                alt="Cliente 3"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 item gallery-image">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/activ2e5.png"
                alt="Cliente 4"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 item gallery-image">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/ControleFinanceiro.png"
                alt="Cliente 5"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 item gallery-image">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/ContaMaisExata.gif"
                alt="Cliente 6"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
