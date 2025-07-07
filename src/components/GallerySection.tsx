import Image from "next/image";

export default function GallerySection() {
  return (
    <section
      data-bs-version="5.1"
      className="gallery01 operationm5 cid-uzALG7EZ9r"
      id="gallery-4-uzALG7EZ9r">
      <div className="container-fluid gallery-wrapper">
        <div className="row justify-content-center">
          <div className="col-12 content-head">
            <div className="mbr-section-head"></div>
          </div>
        </div>
        <div className="grid-container">
          <div
            className="grid-container-3 moving-left"
            style={{ transform: "translate3d(-200px, 0px, 0px)" }}>
            <div className="grid-item">
              <Image
                src="/imgs/ContaMaisExata.gif"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="grid-item">
              <Image
                src="/imgs/ControleFinanceiro.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="grid-item">
              <Image
                src="/imgs/NihonTech.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="grid-item">
              <Image src="/imgs/Linkedin.png" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="decor-wrapper">
        <div className="decor-wrap decor_1"></div>
        <div className="decor-wrap decor_2"></div>
        <div className="decor-wrap decor_3"></div>
        <div className="decor-wrap decor_4"></div>
      </div>
    </section>
  );
}
