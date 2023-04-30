import React, { useState, useEffect } from "react"
import 'animate.css';
import "../css/Dashboard.css"
import { Outlet, NavLink, Link } from "react-router-dom"
import { User } from "lucide-react";
import axios from "axios";
import InatividadePagina from "../../../../../middlewares/TerminarSessao";

export default function DashboardAdmin() {


    const fotoAdmin = "http://localhost:3456/public/upload/usuarios/admin/"


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


    const url = "/reservaOnline/dashboard/admin/"
    console.log(url)

    InatividadePagina()


    return (
        <>
            <main id="main h-100">
                <div className="dashboardevento_Lados">

                    <div className="dashboardevento_LadoEsquerdo menu_dashboard_admin">


                        <ul id="menu_dashboard">

                            <div>
                                <NavLink to={"/reservaOnline/dashboard/admin"}>
                                    <h2 style={{ fontFamily: "Roboto, sem serifa", color: "#fff" }}
                                    >Venda  online</h2>
                                </NavLink>
                            </div>

                            <div id="menu_dashboard_last">
                                <li
                                    style={{ color: "#fff" }}
                                >
                                    <NavLink to={url + "evento"}>
                                        Evento
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={url + "estatistica"}>
                                        Estatística
                                    </NavLink>
                                </li>

                                <NavLink to={url + "perfil"}>
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










