import Image from "next/image";

export default function PartnersSection() {
  return (
    <section
      data-bs-version="5.1"
      className="clients1 cid-uzALH4Qn2D"
      id="clients1-uzALH4Qn2D">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="title-wrapper">
              <div className="title-wrap">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Parceiros
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 col-md-3 col-lg-2 item">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/Linkedin.png"
                alt="Parceiro 1"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 item">
            <div className="item-wrapper">
              <Image
                className="w-100"
                src="/imgs/NihonTech.png"
                alt="Parceiro 2"
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
