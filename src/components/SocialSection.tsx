import Image from "next/image";

export default function SocialSection() {
  return (
    <section
      data-bs-version="5.1"
      className="slider01 mbr-embla operationm5 cid-uzALG7HWPB"
      id="gallery-1-uzALG7HWPB">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 card">
            <div className="content-wrapper">
              <div className="icon-wrapper">
                <span className="mbr-iconfont mobi-mbri-success mobi-mbri"></span>
              </div>
              <h2 className="mbr-section-title mbr-fonts-style display-2">
                Nossas Redes Sociais
              </h2>
              <p className="mbr-text mbr-fonts-style display-7">
                Siga-nos nas redes sociais e fique por dentro de tudo que iremos
                desenvolver. Não perca nenhuma novidade!
              </p>
              <div className="mbr-section-btn">
                <a
                  className="btn btn-primary display-4"
                  href="https://www.instagram.com/nihonttech/">
                  Siga-nos
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 card">
            <div
              className="embla"
              data-skip-snaps="true"
              data-align="center"
              data-contain-scroll="trimSnaps"
              data-loop="true"
              data-auto-play-interval="5"
              data-draggable="true">
              <div className="embla__viewport">
                <div className="embla__container">
                  <div className="embla__slide slider-image item">
                    <div className="slide-content">
                      <div className="item-wrapper">
                        <div className="item-img">
                          <Image
                            src="/imgs/Linkedin.png"
                            alt=""
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide slider-image item">
                    <div className="slide-content">
                      <div className="item-wrapper">
                        <div className="item-img">
                          <Image
                            src="https://r.mobirisesite.com/1083967/assets/images/photo-1562408590-e32931084e23.jpeg"
                            alt=""
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide slider-image item">
                    <div className="slide-content">
                      <div className="item-wrapper">
                        <div className="item-img">
                          <Image
                            src="https://r.mobirisesite.com/1083967/assets/images/photo-1473091534298-04dcbce3278c.jpeg"
                            alt=""
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="embla__button embla__button--prev">
                <span
                  className="mbr-iconfont mobi-mbri-left mobi-mbri"
                  aria-hidden="true"></span>
                <span className="sr-only visually-hidden visually-hidden visually-hidden">
                  Previous
                </span>
              </button>
              <button className="embla__button embla__button--next">
                <span
                  className="mbr-iconfont mobi-mbri-right mobi-mbri"
                  aria-hidden="true"></span>
                <span className="sr-only visually-hidden visually-hidden visually-hidden">
                  Next
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
