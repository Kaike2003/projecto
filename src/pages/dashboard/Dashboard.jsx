import { User } from "lucide-react"
import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import "./Dashboard.css"



export function Dashboard() {

    return (
        <>

            <div className="dashboard">

                <div className="dashboard_LadoEsquerdo">

                    <div className="dashboard_LadoEsquerdo_h1ul">
                        <NavLink to={"/dashboard"}>
                            <h4>Logo</h4>
                        </NavLink>
                        <div className="dashboard_LadoEsquerdo_ul">
                            <ul id="">

                                <NavLink to={"/dashboard/evento/criarEvento"}>
                                    <li>
                                        Eventos
                                    </li>

                                </NavLink>

                                <NavLink to={"/"}>

                                    <li>
                                        Estatisticas
                                    </li>

                                </NavLink>

                                <NavLink to={"/dashboard/evento/perfil"}>
                                    <li>
                                        <div className="border_perfil">
                                            <User className="border_perfil_icon"></User>
                                        </div>
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
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