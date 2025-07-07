"use client";

export default function ContactSection() {
  return (
    <section
      data-bs-version="5.1"
      className="form01 operationm5 cid-uzALG7RXeZ"
      id="contact-form-1-uzALG7RXeZ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="form-wrapper">
              <div className="title-wrapper">
                <p className="mbr-desc mbr-fonts-style display-7">
                  Entre em Contato Comigo
                </p>
                <h2 className="mbr-section-title mbr-fonts-style display-2">
                  Fale Comigo
                </h2>
              </div>
              <div className="mbr-form form-wrap" data-form-type="formoid">
                <form
                  action="#"
                  method="POST"
                  className="mbr-form form-with-styler"
                  data-form-title="Form Name">
                  <div className="row">
                    <div
                      hidden={true}
                      data-form-alert=""
                      className="alert alert-success col-12">
                      Obrigado por preencher o formulário!
                    </div>
                    <div
                      hidden={true}
                      data-form-alert-danger=""
                      className="alert alert-danger col-12">
                      {" "}
                      Oops...! algum problema!
                    </div>
                  </div>
                  <div className="dragArea row">
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3"
                      data-for="name">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        data-form-field="name"
                        className="form-control display-4"
                        id="name-contact-form-1-uzALG7RXeZ"
                      />
                    </div>
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 form-group mb-3"
                      data-for="text">
                      <input
                        type="text"
                        name="text"
                        placeholder="Email"
                        data-form-field="email"
                        className="form-control display-7"
                        id="text-contact-form-1-uzALG7RXeZ"
                      />
                    </div>
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 form-group mb-3"
                      data-for="textarea">
                      <textarea
                        name="textarea"
                        placeholder="Mensagem"
                        data-form-field="message"
                        className="form-control display-4"
                        id="textarea-contact-form-1-uzALG7RXeZ"></textarea>
                    </div>
                    <div className="col mbr-section-btn">
                      <button
                        type="submit"
                        className="btn btn-primary display-4">
                        Enviar Mensagem
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
