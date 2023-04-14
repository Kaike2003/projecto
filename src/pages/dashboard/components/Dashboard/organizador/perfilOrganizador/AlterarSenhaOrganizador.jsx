import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';



export default function AlterarSenhaOrganizador() {

    const navigate = useNavigate()



    const [data, setData] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newData = response.data;
            setData(newData);
        }

        if (localStorage.getItem("@Auth:email") !== null) {
            setNomeUtilizador(localStorage.getItem("@Auth:email"))
        }
        fetchData();
    }, []);

    console.log(nomeUtilizador)

    const EstruturaAlterarSenha = Yup.object().shape({
        palavraPasseAntiga: Yup.string("Palavra antiga inválida")
            .min(3, "Palavra passe  antiga é curta")
            .max(50, "Palavra passe antiga nova é muito longa")
            .required("Palavra passe antiga é obrigátorio"),
        palavraPasse: Yup.string("Palavra nova inválida")
            .min(3, "Palavra passe  nova é curta")
            .max(50, "Palavra passe nova nova é muito longa")
            .required("Palavra passe nova é obrigátorio"),

    })

    return (
        <>



            <div>


                <Formik
                    validationSchema={EstruturaAlterarSenha}
                    initialValues={{
                        palavraPasseAntiga: "",
                        palavraPasse: ""
                    }}
                    enableReinitialize
                    onSubmit={async (values) => {

                        console.log(values)

                        data.map(item => {
                            if (item.email === nomeUtilizador) {
                                axios.put(`http://localhost:3456/organizador/perfil/${item.id}/atualizarPalavraPasse`,
                                    {
                                        palavraPasseAntiga: values.palavraPasseAntiga,
                                        palavraPasse: values.palavraPasse
                                    }).then((sucesso) => {
                                        console.log(sucesso)

                                        console.log(sucesso.status === "400")


                                        swal("Senha alterada", "Agora podes sempre iniciar sessão com a tua senha nova.", "success").then(() => {
                                            navigate("/reservaOnline/dashboard/admin/perfil/informacao")
                                        })

                                    }).catch((error) => {
                                        swal("Senha não alterada", "Verifique sua senha antiga ou podes pedir uma senha nova por email.", "warning").then(() => {
                                            navigate("/reservaOnline/dashboard/admin/perfil/senha")
                                        })
                                    })


                            }
                        })

                    }}
                >
                    {({ isSubmitting, errors, touched, values }) => (

                        <Form>

                            <div className="criar container">
                                <div className="criar_info_criar">
                                    <div

                                        className="criar_info">
                                        <span>1. Informações básicas</span> <br />
                                        <span>Edite as informações da sua conta.</span>
                                    </div>
                                    <button
                                        className="PnomeBotao"
                                        type="submit">Salvar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>


                                            <div className="criar_row">
                                                <span>Senha antiga</span>
                                                <Field
                                                    type="password"
                                                    name="palavraPasseAntiga"
                                                    placeholder="Senha antiga"
                                                />

                                                {errors.palavraPasseAntiga && touched.palavraPasseAntiga ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.palavraPasseAntiga}
                                                    </div>
                                                ) : null}

                                            </div>

                                        </div>

                                        <div>

                                            <div className="criar_row">
                                                <span>Senha nova</span>
                                                <Field
                                                    type="password"
                                                    name="palavraPasse"
                                                    placeholder="Senha nova"
                                                />

                                                {errors.palavraPasse && touched.palavraPasse ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.palavraPasse}
                                                    </div>
                                                ) : null}
                                            </div>




                                        </div>



                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>


        </>

    )

}
