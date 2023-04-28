import React, { useState, useEffect } from "react"
import 'animate.css';
import "../css/Dashboard.css"
import { Outlet, NavLink, Link } from "react-router-dom"
import { User } from "lucide-react";
import axios from "axios";

export default function DashboardOrganizador() {

    const fotoAdmin = "http://localhost:3456/public/upload/usuarios/organizador/"


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



    console.log(data)


    const url = "/reservaOnline/dashboard/organizador"
    console.log(url)


    return (
        <>
            <main id="main h-100">
                <div className="dashboardevento_Lados">

                    <div className="dashboardevento_LadoEsquerdo menu_dashboard_organizador">


                        <ul id="menu_dashboard">

                            <div>
                                <NavLink to={url}>
                                    <h2 style={{ fontFamily: "Roboto, sem serifa", color: "#ffffff" }}
                                    >Venda online</h2>
                                </NavLink>
                            </div>

                            <div id="menu_dashboard_last">
                                <li>
                                    <NavLink
                                        style={{ color: "#ffffff" }}
                                        to={url + "/paginaPrincipal"}>
                                        Página principal
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        style={{ color: "#ffffff" }}
                                        to={url + "/home"}>
                                        Evento
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        style={{ color: "#ffffff" }}
                                        to={url + "/estatistica"}>
                                        Estatística
                                    </NavLink>
                                </li> */}

                                <NavLink
                                    style={{ color: "#000000" }}
                                    to={url + "/perfil"}>
                                    <div className="button_span_user">
                                        {data.map(item => {
                                            console.log(nomeUtilizador)
                                            if (item.email === nomeUtilizador) {
                                                return (
                                                    <div key={item.id} >
                                                        <img
                                                            className="fotoUsuario"
                                                            src={fotoAdmin + item.foto} alt="" />
                                                    </div>
                                                )
                                            }
                                        })}

                                    </div>
                                </NavLink>


                            </div>




                        </ul>


                    </div>

                    <div className="dashboardevento_LadoDireito">

                        <Outlet>




                        </Outlet>


                    </div>


                </div >
            </main >

        </>
    )

}










