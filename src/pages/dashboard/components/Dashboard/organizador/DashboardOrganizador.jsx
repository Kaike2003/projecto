import React, { useState, useEffect } from "react"
import 'animate.css';
import "../css/Dashboard.css"
import { Outlet, NavLink, Link } from "react-router-dom"
import { User } from "lucide-react";
import axios from "axios";

export default function DashboardOrganizador() {


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

                    <div className="dashboardevento_LadoEsquerdo">


                        <ul id="menu_dashboard">

                            <div>
                                <NavLink to={url}>
                                    <h2 style={{ fontFamily: "Roboto, sem serifa" }}
                                    >Reserva online</h2>
                                </NavLink>
                            </div>

                            <div id="menu_dashboard_last">
                                <li>
                                    <NavLink to={url + "/evento"}>
                                        Evento
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={url + "/estatistica"}>
                                        Estatística
                                    </NavLink>
                                </li>

                                <NavLink to={url + "/perfil"}>
                                    <div className="button_span_user">
                                        {data.map(item => {
                                            console.log(nomeUtilizador)
                                            if (item.email === nomeUtilizador) {
                                                return (
                                                    <div key={item.id} >
                                                        <span 
                                                        style={{color: "black"}}

                                                        >{item.nome}</span>
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










