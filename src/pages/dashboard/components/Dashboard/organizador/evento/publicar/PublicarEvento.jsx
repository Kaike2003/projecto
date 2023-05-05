import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import Swal from 'sweetalert2';
import InatividadePagina from "../../../../../../../middlewares/TerminarSessao";



export default function PublicarEvento() {

    const navigate = useNavigate()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"

    const { idEvento } = useParams()
    const [data, setData] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    // console.log(idEvento)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
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

    // console.log("Email do utilizador", nomeUtilizador)




    return (
        <>

            <div>


                <Formik
                    initialValues={""}
                    onSubmit={async (values) => {

                        utilizador.map(item => {
                            if (item.email === nomeUtilizador) {

                                axios.put(`http://localhost:3456/organizador/evento/publicar/${item.id}/${idEvento}`).then(() => {

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Evento Publicado',
                                        showConfirmButton: false,
                                        timer: 2500
                                    })

                                }).catch((error) => {

                                    Swal.fire({
                                        icon: 'info',
                                        title: 'Esse evento já foi publicado',
                                        html: `Já não podes voltar a publicar esse evento.`,
                                        showConfirmButton: false,
                                        timer: 3400
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
                                        <span style={{ color: "red" }}>1. Informação</span> <br />
                                        <span style={{ fontSize: "18px" }}>Antes de publicar seu evento. Preencha todos os detalhes necessários para que seu evento seja aprovado e seja visualizado pelos participantes da aplicação. Caso contrário seu evento pode não ser aprovado ou pode ser banido da aplicação.</span>
                                    </div>
                                    <button
                                        className="PnomeBotaoOrganizador"
                                        type="submit">Publicar</button>
                                </div>

                            </div>
                        </Form>
                    )}
                </Formik>
            </div >





















        </>

    )

}




