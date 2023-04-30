import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';
import InatividadePagina from "../../../../../../middlewares/TerminarSessao";



export default function EstruturaEventoEditar() {

    const navigate = useNavigate()
    const { idUtilizador, idEvento } = useParams()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"

    const [data, setData] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })

    // console.log("IdEvento", idEvento)
    // console.log("IdUtilizador", idUtilizador)


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

    InatividadePagina()

    return (
        <>


            <div className="titulo_evento_lista titulo_evento_estrutura container" >
                <div className="titulo_evento container">Evento</div>
                <div className="eventos_lista_organizador container">



                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/evento`}
                    >
                        <span>Editar</span>

                    </NavLink>





                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/foto`}
                    >
                        <span>Foto</span>

                    </NavLink>





                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/bilhete`}
                    >
                        <span>Bilhete</span>

                    </NavLink>



                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/orador`}
                    >
                        <span>Orador</span>

                    </NavLink>


                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/palestrante`}
                    >
                        <span>Palestrante</span>

                    </NavLink>


                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/informacao`}
                    >
                        <span>Informações</span>
                    </NavLink>

                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/publicar`}
                    >
                        <span>Publicar</span>
                    </NavLink>



                </div>
            </div>

            <div>
                <Outlet />
            </div>

        </>

    )

}

