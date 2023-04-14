import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';



export default function CriarOrador() {

    const navigate = useNavigate()
    const { idEvento } = useParams()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"


    const [data, setData] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/tipoBilhete/todosTipobilhete');
            const newData = response.data;
            setData(newData);

            const responseUtilizador = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);

    console.log("Email do utilizador", nomeUtilizador)



    const CriarOradorSchema = Yup.object().shape({
        nome: Yup.string()
            .min(3, "O nome deve conter 2 ou mais caracteres")
            .max(100, "O nome deve conter 100 ou menos caracteres")
            .required("O nome é obrigatório"),
    })


    return (
        <>

            <div>


                <Formik
                    validationSchema={CriarOradorSchema}
                    initialValues={{
                        nome: ""
                    }}
                    onSubmit={async (values) => {

                        console.log("Dados do orador", values)

                        utilizador.map(item => {
                            if (item.email === nomeUtilizador) {

                                axios.post(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador`,
                                    {
                                        nome: values.nome
                                    }).then((sucesso) => {
                                        console.log(sucesso)

                                        swal("Orador criado", `${values.nome} foi criado com sucesso.`, "success").then(async () => {
                                            navigate(`/reservaOnline/dashboard/organizador/evento/listar/${item.id}/editar/${idEvento}/orador/listar`)
                                        })

                                    }).catch((error) => {
                                        console.log(error)
                                        swal(`${error}`, `Erro evento.`, "warning").then(async () => {
                                            // navigate("/reservaOnline/admin/autenticarConta")
                                        })

                                    })


                            }
                        })





                    }}
                >
                    {({ handleBlur, handleChange, isSubmitting, errors, touched, values }) => (




                        <Form>


                            <div className="criar container">
                                <div className="criar_info_criar">
                                    <div

                                        className="criar_info">
                                        <span>1. Informações básicas</span> <br />
                                        <span>Adicione as principais informações do orador</span>
                                    </div>
                                    <button
                                        className="PnomeBotao"
                                        disabled={isSubmitting}
                                        type="submit">Criar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>

                                            <div className="criar_row">
                                                <span>Nome do orador</span>
                                                <Field
                                                    type="text"
                                                    name="nome"
                                                    placeholder="Nome do orador"
                                                />
                                                {errors.nome && touched.nome ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.nome}
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
            </div >


        </>

    )

}




