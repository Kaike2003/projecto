import React, { useEffect, useState } from "react";
import { NavLink, Navigate, Outlet, useNavigate, useParams } from "react-router-dom"
// import "../../../estrutura/evento/css/Criar.css"
import axios from "axios";
import swal from 'sweetalert';
import InatividadePagina from "../../../../../../../middlewares/TerminarSessao";



export default function EstruturaPalestrante() {

    const navigate = useNavigate()
    const { idUtilizador, idEvento, idPalestrante } = useParams()
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"

    const [data, setData] = useState([]);
    const [utilizador, setUtilizador] = useState([]);
    const [emailUtilizador, setEmailUtilizador] = useState(() => {
        return ""
    })

   
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newData = response.data;
            setData(newData);

            const responseUtilizador = await axios.get('http://localhost:3456/admin/listarTodosUsuarios');
            const newDataUtlizador = responseUtilizador.data;
            setUtilizador(newDataUtlizador);


            if (localStorage.getItem("@Auth:email") !== null) {
                setEmailUtilizador(localStorage.getItem("@Auth:email"))
            }
        }
        fetchData();
    }, []);



    InatividadePagina()

    return (
        <>


            <div className="titulo_evento_lista_subEstrutura container" >
                <div className="eventos_lista container">



                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/palestrante/criar`}
                    >
                        <span>Criar</span>

                    </NavLink>


                    <NavLink
                        key={Math.random().toString(36).substring(2)}
                        to={urlPrivadaOrganizador + `/evento/listar/${idUtilizador}/editar/${idEvento}/palestrante/listar`}
                    >
                        <span>Listar</span>

                    </NavLink>

                  



                </div>
            </div>

            <div>
                <Outlet />
            </div>

        </>

    )

}

