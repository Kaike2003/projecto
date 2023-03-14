import { Search } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CardEventoOrg from "./CardEventoOrg";
import "./Historico.css"


export default function Historico() {
    const navigate = useNavigate()

    return (
        <>

            <div className="container dashboard_Eventos">




                <div className="dashboard_Eventos_div">
                    {/* <div className="dashboard_EventosHistorico_Titulo_Criar">
                        <span>Historico</span>
                        <button className="btn_criar_eventos"
                            onClick={() => {
                                return navigate("/dashboard/evento/criarEvento")
                            }}
                        >Criar evento</button>
                    </div> */}

                    <div className="dashboard_Eventos_Filtro_div">
                        <div>
                            <i><Search style={{ color: "grey" }}></Search></i>
                            <input type="text" placeholder="Pesquisar" />
                        </div>
                        <div className="dashboard_Eventos_Filtro">
                            <span>Filtro:</span>
                            <select name="" id="" className="conteudo_categoria_select">
                                <option value="">Categoria</option>
                                <option value="">Palestra</option>
                                <option value="">Teatro</option>
                                <option value="">Shows</option>
                                <option value="">Concerto</option>
                                <option value="">Seminário</option>



                            </select>

                            <select name="" id="" className="conteudo_categoria_select">
                                <option value="">Mês</option>
                                <option value="">Março</option>
                                <option value="">Abril</option>
                                <option value="">Maio</option>
                                <option value="">Junho</option>
                                <option value="">julho</option>


                            </select>
                        </div>
                    </div>


                    <div className="eventos_section_scroll">
                        <div className="section_eventos_org">
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                            <CardEventoOrg></CardEventoOrg>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )

}