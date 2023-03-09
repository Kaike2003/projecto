import React, { useState } from "react"
import "./Opcao.css"

import { Link } from "react-router-dom"

export default function Opcao() {

  
    return (

        <>
            <div className="container dashboard_Eventos">

                <div className="dashboard_Eventos_div">

                    <div>
                        <div className="container detalhe_perfil_informacao_org">

                            <div className="informacaoPerfil_org">
                                <ul id="menuInformacaoPerfil_org" className="container">
                                    <Link to={""}>
                                        <li><button>Eventos</button></li>
                                    </Link>
                                    <Link to={""}>
                                        <li><button>Bilhetes</button></li>
                                    </Link>
                                    <Link to={""}>
                                        <li><button>Palestrantes</button></li>
                                    </Link>

                                    <Link to={""}>
                                        <li><button>Oradores</button></li>
                                    </Link>

                                    <li><button
                                        >...</button></li>

                                    
                                </ul>
                                <div className="container conteudo_InformacaoPerfil_org">
                                    {
                                        // escolha(alterar)


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