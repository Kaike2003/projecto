import React, { useState } from "react"
import "./Evento.css"
import CriarEvento from "./CriarEvento"
import CriarBilhete from "./CriarBilhete"
import CriarPalestrante from "./CriarPalestrante"
import Historico from "./Historico"
import CriarOrador from "./CriarOrador"
import { Link, Outlet } from "react-router-dom"
import Opcao from "./Opcao/Opcao"

export default function Evento() {

    const [alterar, setAltarer] = useState(() => {
        return 1
    })


    function escolha(valor) {

        if (valor === 1) {
            return <CriarEvento />
        } else if (valor === 2) {
            return <CriarBilhete />
        } else if (valor === 3) {
            return <CriarPalestrante />
        } else if (valor === 4) {
            return <CriarOrador />
        } else if (valor == 5) {
            return <Opcao></Opcao>
        }

    }

    console.log(alterar)

    return (

        <>
            <div className="container dashboard_Eventos">

                <div className="dashboard_Eventos_div">
                    <div className="dashboard_Eventos_Titulo_Criar">
                        <span>Eventos</span>
                       <Link to={"/dashboard/historico"}>
                       <button className="btn_criar_eventos">Historico</button>
                       </Link>
                    </div>

                    <div>
                        <div className="container detalhe_perfil_informacao_org">

                            <div className="informacaoPerfil_org">
                                <ul id="menuInformacaoPerfil_org" className="container menuPerfil">
                                    <Link to={"/dashboard/evento/criarEvento"}>
                                        <li><button
                                            onClick={() => {
                                                return (
                                                    setAltarer((old) => {
                                                        return old = 1
                                                    })
                                                )
                                            }}
                                        >Criar Evento</button></li>
                                    </Link>
                                    <Link to={"/dashboard/evento/criarBilhete"}>
                                        <li><button
                                            onClick={() => {
                                                return (
                                                    setAltarer((old) => {
                                                        return old = 2
                                                    })
                                                )
                                            }}
                                        >Criar Bilhete</button></li>
                                    </Link>
                                    <Link to={"/dashboard/evento/criarPalestrante"}>
                                        <li><button
                                            onClick={(e) => {
                                                return (

                                                    setAltarer((old) => {
                                                        return old = 3
                                                    })

                                                )
                                            }}
                                        >Criar Palestrante</button></li>
                                    </Link>

                                    <Link to={"/dashboard/evento/criarOrador"}>
                                        <li><button
                                            onClick={() => {
                                                return (
                                                    setAltarer((old) => {
                                                        return old = 4
                                                    })
                                                )
                                            }}
                                        >Criar Orador</button></li>
                                    </Link>

                                    <li><button
                                        onClick={() => {
                                            return (
                                                setAltarer((old) => {
                                                    return old = 5
                                                })
                                            )
                                        }}
                                    >Listar</button></li>


                                </ul>
                                <div className="container conteudo_InformacaoPerfil_org">
                                    {

                                        <Outlet>

                                            {escolha(alterar)}

                                        </Outlet>


                                    }

                                </div>
                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </>

    )

}