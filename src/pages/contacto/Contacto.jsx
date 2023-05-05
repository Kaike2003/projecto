/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react-dom"
import "./Contacto.css"
import * as Yup from "yup"
import { Formik, Field, Form } from "formik"
import axios from "axios"
import Swal from "sweetalert2"

export default function Contacto() {

    const contactoShema = Yup.object({

        nome: Yup.string().required("Nome é obrigatorio").min(4, "O nome precisa ter no minimo 4 caracteres").max(50, "O nome no máximo precisa ter 50 caracteres."),
        email: Yup.string().email().required("Email é obrigatorio"),
        mensagem: Yup.string("").min(200, "O texto precisa ter no minimo 200 caracteres").max(600, "O texto no máximo precisa ter 600 caracteres.").required("A mensagem é obrigatoria")

    })

    return (
        <>

            <Formik
                initialValues={{
                    nome: "",
                    email: "",
                    mensagem: ""
                }}
                validationSchema={contactoShema}
                onSubmit={async (values) => {

                    // console.log(values)

                    axios.post("http://localhost:3456/admin/contacto",
                        {
                            nome: values.nome,
                            email: values.email,
                            mensagem: values.mensagem
                        }).then(async (sucesso) => {

                            Swal.fire({
                                icon: "success",
                                title: "Mensagem enviada com sucesso",
                                timer: 2500
                            })

                        }).catch((error) => {


                            Swal.fire({
                                icon: "warning",
                                title: "Erro ao enviar sua mensagem",
                                timer: 2500
                            })

                        })


                }}
            >
                {({ errors, touched, handleBlur, handleChange, values }) => {
                    return (
                        <>

                            <Form>

                                <section id="contact" className="contact contact_class section-bg bg-light">
                                    <div className="container" data-aos="fade-up">

                                        <div className="section-title">
                                            <h2 className="">Contacto</h2>
                                            {/* <p>Mag qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                                        </div>

                                        <div className="row">

                                            <div className="col-lg-6 col-md-6">
                                                <div className="info-box  mb-4">
                                                    <i className="bx bx-envelope"></i>
                                                    <h3>Endereço de email</h3>
                                                    <p>LuisaValente@gamail.com</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="info-box  mb-4">
                                                    <i className="bx bx-phone-call"></i>
                                                    <h3>Telefone</h3>
                                                    <p>+224 923 823 981 </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">



                                            <div className="col-lg-12">
                                                <div action="forms/contact.php" method="post" role="form" className="php-email-form">
                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <Field
                                                                type="text"
                                                                name="nome" className="form-control" id="nome"
                                                                placeholder="Seu nome" />

                                                            {errors.nome && touched.nome ? (
                                                                <div className="container"
                                                                    style={{ color: "red" }}
                                                                >

                                                                    {errors.nome}
                                                                </div>
                                                            ) : null}

                                                        </div>
                                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                                            <Field
                                                                type="email" className="form-control" name="email"
                                                                id="email"
                                                                placeholder="Seu Email" />


                                                            {errors.email && touched.email ? (
                                                                <div className="container"
                                                                    style={{ color: "red" }}
                                                                >

                                                                    {errors.email}
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    {/* <div className="form-group mt-3">
                                                        <Field
                                                            type="text"
                                                            className="form-control" name="genero"
                                                            id="subject"
                                                            placeholder="Genero" required />
                                                    </div> */}
                                                    <div className="form-group mt-3">
                                                        <textarea
                                                            className="form-control" name="mensagem"
                                                            rows="5"
                                                            placeholder="Mensagem"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.mensagem}
                                                        ></textarea>

                                                        {errors.mensagem && touched.mensagem ? (
                                                            <div className="container"
                                                                style={{ color: "red" }}
                                                            >

                                                                {errors.mensagem}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                    <div className="my-3">
                                                        <div className="loading">Carregando</div>
                                                        <div className="sent-message">Sua mensagem foi enviada.Obrigado!</div>
                                                    </div>
                                                    <div className="text-center"><button type="submit">Enviar mensagem</button></div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </section>

                            </Form>


                        </>

                    )
                }}
            </Formik>













        </>
    )

}