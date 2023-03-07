import React from "react-dom"
import "./Contacto.css"

export default function Contacto() {

    return (
        <>

            <section id="contact" className="contact contact_class section-bg bg-light">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 className="">Contacto</h2>
                        {/* <p>Mag qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                                <i className="bx bx-map"></i>
                                <h3>Nosso endereço</h3>
                                <p>Angola,província de Luanda,Rua km14B, a 535022</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-envelope"></i>
                                <h3>Endereço de email</h3>
                                <p>LUISAVALENTE@gamail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-phone-call"></i>
                                <h3>Telefone</h3>
                                <p>+224 923 823 981 </p>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg-6 ">
                            <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:"0", width: "100%", height: "384px"}} allowfullscreen></iframe>
                        </div>

                        <div className="col-lg-6">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Seu nome" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Seu Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Genero" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Mensagem" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Carregando</div>
                                    <div className="sent-message">Sua mensagem foi enviada.Obrigado!</div>
                                </div>
                                <div className="text-center"><button type="submit">Enviar mensagem</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )

}