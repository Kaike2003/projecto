import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';



export default function EstruturaEvento() {

    const navigate = useNavigate()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"


    const [data, setData] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
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

    return (
        <>


            <div className="titulo_evento_lista container" >
                <div className="titulo_evento container">Evento</div>
                <div className="eventos_lista container">
                    <NavLink
                        to={urlPrivadaOrganizador + '/evento/criar'}
                    >

                        <span>Criar</span>

                    </NavLink>


                    {
                        utilizador.map(item => {
                            console.log(item.email === nomeUtilizador)
                            if (item.email === nomeUtilizador) {
                                return (
                                    <>

                                        <NavLink
                                            key={Math.random().toString(36).substring(2)}
                                            to={urlPrivadaOrganizador + `/evento/listar/${item.id}`}
                                        >
                                            <span>Listar</span>

                                        </NavLink>

                                    </>
                                )
                            }
                        })
                    }


                </div>
            </div>

            <div>
                <Outlet />
            </div>

        </>

    )

}

