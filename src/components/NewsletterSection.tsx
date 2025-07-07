export default function NewsletterSection() {
  return (
    <section
      data-bs-version="5.1"
      className="form5 cid-uzALH3Qn2C"
      id="form5-uzALH3Qn2C">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="title-wrapper">
              <div className="title-wrap">
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Receba Novidades
                </h2>
                <p className="mbr-text mbr-fonts-style display-7">
                  Cadastre seu e-mail para receber novidades e conteúdos
                  exclusivos sobre tecnologia japonesa.
                </p>
              </div>
            </div>
            <form
              className="mbr-form form-with-styler"
              data-form-title="Formulário Newsletter">
              <div className="row">
                <div className="col-md col-12 form-group" data-for="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    data-form-field="Email"
                    className="form-control"
                    id="email-form5-uzALH3Qn2C"
                    required
                  />
                </div>
                <div className="col-auto mbr-section-btn">
                  <button type="submit" className="btn btn-primary display-4">
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
