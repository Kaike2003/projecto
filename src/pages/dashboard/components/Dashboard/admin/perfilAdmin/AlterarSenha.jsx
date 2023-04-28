import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/../estrutura/evento/css/Criar.css"
import axios from "axios";
import Swal from "sweetalert2"



export default function AlterarSenha() {

    const navigate = useNavigate()



    const [data, setData] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
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
            .min(4, "Palavra passe  antiga é curta")
            .max(50, "Palavra passe antiga nova é muito longa")
            .required("Palavra passe antiga é obrigátorio"),
        palavraPasse: Yup.string("Palavra nova inválida")
            .min(4, "Palavra passe  nova é curta")
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

                        // console.log(values)

                        data.map(item => {
                            if (item.email === nomeUtilizador) {
                                axios.put(`http://localhost:3456/admin/perfil/${item.id}/atualizarPalavraPasse`,
                                    {
                                        palavraPasseAntiga: values.palavraPasseAntiga,
                                        palavraPasse: values.palavraPasse
                                    }).then((sucesso) => {
                                        // console.log(sucesso)




                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Senha alterada',
                                            html: 'Agora podes iniciar sessão com a tua senha nova.',
                                            showConfirmButton: false,
                                            timer: 2500
                                        }).then(() => {
                                            navigate("/reservaOnline/dashboard/admin/perfil/informacao")
                                        })

                                    }).catch((error) => {

                                        Swal.fire({
                                            icon: 'info',
                                            title: 'Senha não alterada',
                                            html: "Insira a sua senha antiga para poder trocar para uma senha nova ou podes pedir uma senha nova por email.",
                                            showConfirmButton: false,
                                            timer: 3500
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
                                        style={{ background: "#7b7c7c", color: "white" }}
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
