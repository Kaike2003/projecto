import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import "./Dashboard.css"



export function Dashboard() {

    return (
        <>

            <div className="dashboard">

                <div className="dashboard_LadoEsquerdo">
                    <NavLink to={"/dashboard"}>
                    <h1>Logo</h1>
                    </NavLink>
                    <div className="dashboard_LadoEsquerdo_ul">
                        <ul id="dashboard_LadoEsquerdo_menu">

                            <NavLink to={"/dashboard/evento"}>
                                <li>
                                    <button>Eventos</button>
                                </li>

                            </NavLink>
                           
                           <NavLink to={"/"}>
                           
                           <li>
                                <button>Estatisticas</button>
                            </li>

                           </NavLink>

                            <NavLink to={"/dashboard/historico"}>
                                <li>
                                    <button>Historico</button>
                                </li>
                            </NavLink>
                            <NavLink to={"/dashboard/perfil"}>
                                <li>
                                    <button>Perfil</button>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

                <div className="dashboard_LadoDireito">

                    <Outlet>

                    </Outlet>

                   
                </div>


            </div>

        </>
    )

}