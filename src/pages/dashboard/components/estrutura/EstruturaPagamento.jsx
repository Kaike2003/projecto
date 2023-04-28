import React from "react"
import "./Estrutura.css"
import { NavLink, Outlet } from "react-router-dom"

export default function EstruturaPagamento(
    {
        titulo,
        lista1,
        lista2,
        lista3,
        lista4,
        lista5,
        lista6,
        lista7,
        lista8,
        rota1,
        rota2,
        rota3,
        rota4,
        rota5,
        rota6,
        rota7,
        rota8,

        infoGeral

    }
) {

    return (
        <>
            <div className={`titulo_evento_lista_pagamento  `}>
                <div className="titulo_evento container">{titulo}</div>
                <div className="eventos_lista_pagamento  container">
                    <NavLink
                        to={`${rota1}`}
                    >

                        <span>{lista1}</span>

                    </NavLink>


                    <NavLink
                        to={`${rota2}`}
                    >

                        <span>{lista2}</span>

                    </NavLink>

                    <NavLink
                        to={`${rota3}`}
                    >

                        <span>{lista3}</span>

                    </NavLink>



                    <NavLink
                        to={`${rota4}`}
                    >

                        <span>{lista4}</span>

                    </NavLink>

                    <NavLink
                        to={`${rota5}`}
                    >

                        <span>{lista5}</span>

                    </NavLink>


                    <NavLink
                        to={`${rota8}`}
                    >

                        <span>{lista8}</span>

                    </NavLink>



                    <NavLink
                        to={`${rota6}`}
                    >

                        <span>{lista6}</span>

                    </NavLink>

                    <NavLink
                        to={`${rota7}`}
                    >

                        <span>{lista7}</span>

                    </NavLink>


                </div>
            </div>

            <div className="container">
                <Outlet />

            </div>



        </>
    )

}