import React from "react"
import { Outlet, Link } from "react-router-dom"
import "./Dashboard.css"



export function Dashboard() {

    return (
        <>

            <div className="dashboard">

                <div className="dashboard_LadoEsquerdo">
                    <h1>Logo</h1>
                    <div className="dashboard_LadoEsquerdo_ul">
                        <ul id="dashboard_LadoEsquerdo_menu">

                            <Link to={"/dashboard/evento"}>
                                <li>
                                    <button>Eventos</button>
                                </li>

                            </Link>
                           
                           <Link to={""}>
                           
                           <li>
                                <button>Estatisticas</button>
                            </li>

                           </Link>

                            <Link to={"/dashboard/historico"}>
                                <li>
                                    <button>Historico</button>
                                </li>
                            </Link>
                            <Link to={"/dashboard/perfil"}>
                                <li>
                                    <button>Perfil</button>
                                </li>
                            </Link>
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