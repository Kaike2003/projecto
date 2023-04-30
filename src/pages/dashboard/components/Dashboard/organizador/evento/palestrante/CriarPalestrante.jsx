import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';
import Swal from "sweetalert2"
import InatividadePagina from "../../../../../../../middlewares/TerminarSessao";

export default function CriarPalestrante() {

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

            const responseUtilizador = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setNomeUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);




    const CriarPalestranteSchema = Yup.object().shape({
        nome: Yup.string()
            .min(4, "O nome deve conter 2 ou mais caracteres")
            .max(100, "O nome deve conter 100 ou menos caracteres")
            .required("O nome do palestrante é obrigatório"),
        blog: Yup.string()
            .min(4, "O blog palestrante deve conter 2 ou mais caracteres")
            .max(100, "O blog do palestrante deve conter 100 ou menos caracteres").optional(),
    })

    InatividadePagina()

    return (
        <>

            <div>


                <Formik
                    validationSchema={CriarPalestranteSchema}
                    initialValues={{
                        nome: "",
                        blog: ""
                    }}
                    onSubmit={async (values) => {

                        // console.log("Dados do palestrante", values)

                        utilizador.map(item => {
                            if (item.email === nomeUtilizador) {

                                axios.post(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante`,
                                    {
                                        nome: values.nome,
                                        blog: values.blog
                                    }).then((sucesso) => {
                                        // console.log(sucesso)

                                        // swal("Palestrante criado", `${values.nome} foi criado com sucesso.`, "success").then(async () => {
                                        //     // navigate(`/reservaOnline/dashboard/organizador/evento/listar/${item.id}/editar/${idEvento}/orador/listar`)
                                        // })

                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Palestrante criado',
                                            showConfirmButton: false,
                                            timer: 2500
                                        })

                                    }).catch((error) => {
                                        Swal.fire({
                                            icon: 'warning',
                                            title: `${error}`,
                                            showConfirmButton: false,
                                            timer: 3500
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
                                        <span>Adicione as principais informações do palestrante</span>
                                    </div>
                                    <button
                                        className="PnomeBotaoOrganizador"
                                        disabled={isSubmitting}

                                        type="submit">Criar</button>
                                </div>
                                <div className="criar_main ">

                                    <div className="criar_estrutura container">

                                        <div>

                                            <div className="criar_row">
                                                <span>Nome do palestrante</span>
                                                <Field
                                                    type="text"
                                                    name="nome"
                                                    placeholder="Nome do palestrante"
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

                                        <div>

                                            <div className="criar_row">
                                                <span>Blog do palestrante</span>
                                                <Field
                                                    type="text"
                                                    name="blog"
                                                    placeholder="Blog do palestrante"
                                                />
                                                {errors.blog && touched.blog ? (
                                                    <div className="container"
                                                        style={{ color: "red" }}
                                                    >

                                                        {errors.blog}
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




