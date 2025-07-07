export default function ContactMapSection() {
  return (
    <section
      data-bs-version="5.1"
      className="map1 cid-uzALH2Qn2B"
      id="map1-uzALH2Qn2B">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <div className="title-wrapper">
              <div className="title-wrap">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Onde Estamos
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="google-map">
              <iframe
                title="Mapa NihonTech"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d139.691706!3d35.689487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sTokyo!5e0!3m2!1spt-BR!2sjp!4v1680000000000!5m2!1spt-BR!2sjp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
